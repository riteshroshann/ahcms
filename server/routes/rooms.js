import { Router } from 'express';
import db from '../db.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = Router();

// ── GET /api/rooms ────────────────────────────────────────────
// All rooms with occupancy stats + current student list (admin)
// or available rooms (student)
router.get('/', requireAuth, (req, res) => {
  const rooms = db.prepare(`
    SELECT r.*,
      (r.capacity - r.current_occupancy) AS available_slots
    FROM ROOM r
    ORDER BY r.hostel, r.floor, r.room_id
  `).all();

  if (req.user.role === 'admin') {
    // Attach students per room
    const roomsWithStudents = rooms.map(room => {
      const students = db.prepare(`
        SELECT s.student_id, s.name, s.roll_no, s.year, s.course, a.status AS alloc_status
        FROM ALLOCATION a
        JOIN STUDENT s ON a.student_id = s.student_id
        WHERE a.room_id = ? AND a.status = 'active'
      `).all(room.room_id);
      return { ...room, students };
    });
    return res.json(roomsWithStudents);
  }

  res.json(rooms);
});

// ── GET /api/rooms/allocations ────────────────────────────────
// Admin: all allocations with student + room details
router.get('/allocations', requireAuth, requireRole('admin'), (req, res) => {
  const rows = db.prepare(`
    SELECT a.*,
      s.name AS student_name, s.roll_no, s.year, s.course,
      r.hostel, r.floor, r.type, r.capacity
    FROM ALLOCATION a
    JOIN STUDENT s ON a.student_id = s.student_id
    JOIN ROOM r ON a.room_id = r.room_id
    ORDER BY a.from_date DESC, a.allocation_id DESC
  `).all();
  res.json(rows);
});

// ── GET /api/rooms/vacant ─────────────────────────────────────
// Vacant rooms — for room booking floor plan
router.get('/vacant', requireAuth, (req, res) => {
  const { hostel, floor } = req.query;
  let query = `
    SELECT r.*, (r.capacity - r.current_occupancy) AS available_slots
    FROM ROOM r
    WHERE r.current_occupancy < r.capacity
  `;
  const params = [];
  if (hostel) { query += ' AND r.hostel = ?'; params.push(hostel); }
  if (floor)  { query += ' AND r.floor = ?';  params.push(floor); }
  query += ' ORDER BY r.floor, r.room_id';

  const rooms = db.prepare(query).all(...params);
  res.json(rooms);
});

// ── GET /api/rooms/my-allocation ─────────────────────────────
// Student's own room allocation
router.get('/my-allocation', requireAuth, requireRole('student'), (req, res) => {
  const alloc = db.prepare(`
    SELECT a.*, r.hostel, r.floor, r.type, r.capacity, r.current_occupancy
    FROM ALLOCATION a
    JOIN ROOM r ON a.room_id = r.room_id
    WHERE a.student_id = ? AND a.status = 'active'
    LIMIT 1
  `).get(req.user.id);

  if (!alloc) {
    return res.json({ allocation: null });
  }
  res.json({ allocation: alloc });
});

// ── GET /api/rooms/booking-requests ──────────────────────────
// Admin: all booking requests; Student: their own requests
router.get('/booking-requests', requireAuth, (req, res) => {
  if (req.user.role === 'admin') {
    const requests = db.prepare(`
      SELECT br.*, s.name AS student_name, s.roll_no, s.year, s.hostel AS student_hostel,
             r.hostel AS room_hostel, r.floor, r.type, r.capacity, r.current_occupancy
      FROM ROOM_BOOKING_REQUEST br
      JOIN STUDENT s ON br.student_id = s.student_id
      JOIN ROOM r ON br.room_id = r.room_id
      ORDER BY br.created_at DESC
    `).all();
    return res.json(requests);
  }

  const requests = db.prepare(`
    SELECT br.*, r.hostel, r.floor, r.type, r.capacity, r.current_occupancy
    FROM ROOM_BOOKING_REQUEST br
    JOIN ROOM r ON br.room_id = r.room_id
    WHERE br.student_id = ?
    ORDER BY br.created_at DESC
  `).all(req.user.id);
  res.json(requests);
});

// ── POST /api/rooms/book ──────────────────────────────────────
// Student submits a booking request
router.post('/book', requireAuth, requireRole('student'), (req, res) => {
  const { room_id, preferences } = req.body;
  if (!room_id) {
    return res.status(400).json({ error: 'room_id is required.' });
  }

  // Check an active allocation doesn't already exist
  const activeAlloc = db.prepare(`
    SELECT * FROM ALLOCATION WHERE student_id = ? AND status = 'active'
  `).get(req.user.id);
  if (activeAlloc) {
    return res.status(409).json({ error: 'You already have an active room allocation.' });
  }

  // Check pending request
  const pendingReq = db.prepare(`
    SELECT * FROM ROOM_BOOKING_REQUEST WHERE student_id = ? AND status = 'pending'
  `).get(req.user.id);
  if (pendingReq) {
    return res.status(409).json({ error: 'You already have a pending booking request.' });
  }

  // Check room exists and has capacity
  const room = db.prepare('SELECT * FROM ROOM WHERE room_id = ?').get(room_id);
  if (!room) return res.status(404).json({ error: 'Room not found.' });
  if (room.current_occupancy >= room.capacity) {
    return res.status(409).json({ error: 'Room is at full capacity.' });
  }

  const stmt = db.prepare(`
    INSERT INTO ROOM_BOOKING_REQUEST (student_id, room_id, preferences)
    VALUES (?, ?, ?)
  `);
  const result = stmt.run(req.user.id, room_id, preferences || null);
  const request = db.prepare('SELECT * FROM ROOM_BOOKING_REQUEST WHERE request_id = ?').get(result.lastInsertRowid);
  res.status(201).json(request);
});

// ── PATCH /api/rooms/booking-requests/:id ────────────────────
// Admin: approve or reject a booking request
router.patch('/booking-requests/:id', requireAuth, requireRole('admin'), (req, res) => {
  const { status, admin_note } = req.body;
  const { id } = req.params;

  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ error: 'Status must be approved or rejected.' });
  }

  const request = db.prepare('SELECT * FROM ROOM_BOOKING_REQUEST WHERE request_id = ?').get(id);
  if (!request) return res.status(404).json({ error: 'Request not found.' });
  if (request.status !== 'pending') {
    return res.status(409).json({ error: 'Request has already been actioned.' });
  }

  if (status === 'approved') {
    // Transaction: create allocation + update room occupancy
    const room = db.prepare('SELECT * FROM ROOM WHERE room_id = ?').get(request.room_id);
    if (room.current_occupancy >= room.capacity) {
      return res.status(409).json({ error: 'Room is now at full capacity — cannot approve.' });
    }

    const approve = db.transaction(() => {
      // Create allocation
      const today = new Date().toISOString().split('T')[0];
      const nextYear = new Date().getFullYear() + 1;
      db.prepare(`
        INSERT INTO ALLOCATION (allocation_id, student_id, room_id, from_date, to_date, status)
        VALUES (?, ?, ?, ?, ?, 'active')
      `).run(`AL${Date.now()}`, request.student_id, request.room_id, today, `${nextYear}-05-31`);

      // Update room occupancy
      db.prepare('UPDATE ROOM SET current_occupancy = current_occupancy + 1 WHERE room_id = ?').run(request.room_id);

      // Close the request
      db.prepare(`
        UPDATE ROOM_BOOKING_REQUEST
        SET status = 'approved', admin_note = ?, updated_at = datetime('now')
        WHERE request_id = ?
      `).run(admin_note || null, id);
    });
    approve();
  } else {
    db.prepare(`
      UPDATE ROOM_BOOKING_REQUEST
      SET status = 'rejected', admin_note = ?, updated_at = datetime('now')
      WHERE request_id = ?
    `).run(admin_note || null, id);
  }

  const updated = db.prepare('SELECT * FROM ROOM_BOOKING_REQUEST WHERE request_id = ?').get(id);
  res.json(updated);
});

export default router;
