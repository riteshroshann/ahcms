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

// ── POST /api/rooms/direct-allocate ─────────────────────────────
// Admin directly assigns a student to a room (no request needed).
// Validates: student exists, no active allocation, room has capacity.
// Transaction: create ALLOCATION + update current_occupancy.
router.post('/direct-allocate', requireAuth, requireRole('admin'), (req, res) => {
  const { student_id, room_id, from_date, to_date, note } = req.body;
  if (!student_id || !room_id) {
    return res.status(400).json({ error: 'student_id and room_id are required.' });
  }

  const student = db.prepare('SELECT * FROM STUDENT WHERE student_id = ?').get(student_id);
  if (!student) return res.status(404).json({ error: 'Student not found.' });

  const activeAlloc = db.prepare(
    "SELECT * FROM ALLOCATION WHERE student_id = ? AND status = 'active'"
  ).get(student_id);
  if (activeAlloc) {
    return res.status(409).json({ error: `Student already has an active allocation in room ${activeAlloc.room_id}.` });
  }

  const room = db.prepare('SELECT * FROM ROOM WHERE room_id = ?').get(room_id);
  if (!room) return res.status(404).json({ error: 'Room not found.' });
  if (room.current_occupancy >= room.capacity) {
    return res.status(409).json({ error: `Room ${room_id} is at full capacity.` });
  }

  const today     = from_date || new Date().toISOString().split('T')[0];
  const endDate   = to_date   || `${new Date().getFullYear() + 1}-05-31`;
  const allocId   = `AL${Date.now()}`;

  const allocate = db.transaction(() => {
    db.prepare(
      "INSERT INTO ALLOCATION (allocation_id, student_id, room_id, from_date, to_date, status) VALUES (?, ?, ?, ?, ?, 'active')"
    ).run(allocId, student_id, room_id, today, endDate);
    db.prepare('UPDATE ROOM SET current_occupancy = current_occupancy + 1 WHERE room_id = ?').run(room_id);
    // Update student hostel to match room hostel
    db.prepare('UPDATE STUDENT SET hostel = ? WHERE student_id = ?').run(room.hostel, student_id);
  });
  allocate();

  res.status(201).json({ allocation_id: allocId, student_id, room_id, from_date: today, to_date: endDate, status: 'active' });
});

// ── DELETE /api/rooms/allocations/:id ───────────────────────────
// Admin revokes (ends) an active allocation
router.delete('/allocations/:id', requireAuth, requireRole('admin'), (req, res) => {
  const alloc = db.prepare('SELECT * FROM ALLOCATION WHERE allocation_id = ?').get(req.params.id);
  if (!alloc) return res.status(404).json({ error: 'Allocation not found.' });
  if (alloc.status !== 'active') return res.status(409).json({ error: 'Allocation is not active.' });

  db.transaction(() => {
    db.prepare("UPDATE ALLOCATION SET status = 'expired' WHERE allocation_id = ?").run(req.params.id);
    db.prepare('UPDATE ROOM SET current_occupancy = MAX(0, current_occupancy - 1) WHERE room_id = ?').run(alloc.room_id);
  })();

  res.json({ success: true });
});

// ── GET /api/rooms/change-requests ──────────────────────────────
// Admin: all change requests; Student: their own
router.get('/change-requests', requireAuth, (req, res) => {
  if (req.user.role === 'admin') {
    const rows = db.prepare(`
      SELECT cr.*,
        s.name AS student_name, s.roll_no, s.year, s.course,
        rf.hostel AS from_hostel, rf.floor AS from_floor, rf.type AS from_type,
        rt.hostel AS to_hostel,   rt.floor AS to_floor,   rt.type AS to_type,
        rt.current_occupancy AS to_occupancy, rt.capacity AS to_capacity
      FROM ROOM_CHANGE_REQUEST cr
      JOIN STUDENT s  ON cr.student_id  = s.student_id
      JOIN ROOM rf    ON cr.from_room_id = rf.room_id
      JOIN ROOM rt    ON cr.to_room_id   = rt.room_id
      ORDER BY cr.created_at DESC
    `).all();
    return res.json(rows);
  }
  // Student: own requests only
  const rows = db.prepare(`
    SELECT cr.*,
      rf.hostel AS from_hostel, rf.floor AS from_floor, rf.type AS from_type,
      rt.hostel AS to_hostel,   rt.floor AS to_floor,   rt.type AS to_type
    FROM ROOM_CHANGE_REQUEST cr
    JOIN ROOM rf ON cr.from_room_id = rf.room_id
    JOIN ROOM rt ON cr.to_room_id   = rt.room_id
    WHERE cr.student_id = ?
    ORDER BY cr.created_at DESC
  `).all(req.user.id);
  res.json(rows);
});

// ── POST /api/rooms/change-requests ──────────────────────────────
// Student submits a room change request
router.post('/change-requests', requireAuth, requireRole('student'), (req, res) => {
  const { to_room_id, reason } = req.body;
  if (!to_room_id || !reason?.trim()) {
    return res.status(400).json({ error: 'Target room and reason are required.' });
  }

  // Must have active allocation
  const currentAlloc = db.prepare(
    "SELECT * FROM ALLOCATION WHERE student_id = ? AND status = 'active'"
  ).get(req.user.id);
  if (!currentAlloc) {
    return res.status(400).json({ error: 'You do not have an active room allocation.' });
  }
  if (currentAlloc.room_id === to_room_id) {
    return res.status(400).json({ error: 'Target room is the same as your current room.' });
  }

  // No pending change request already
  const pendingChange = db.prepare(
    "SELECT * FROM ROOM_CHANGE_REQUEST WHERE student_id = ? AND status = 'pending'"
  ).get(req.user.id);
  if (pendingChange) {
    return res.status(409).json({ error: 'You already have a pending room change request.' });
  }

  // Target room must exist and have space
  const toRoom = db.prepare('SELECT * FROM ROOM WHERE room_id = ?').get(to_room_id);
  if (!toRoom) return res.status(404).json({ error: 'Target room not found.' });
  if (toRoom.current_occupancy >= toRoom.capacity) {
    return res.status(409).json({ error: 'Target room is at full capacity.' });
  }

  // ── Same-floor rule ──────────────────────────────────────────────
  // Look up current room's floor
  const fromRoom   = db.prepare('SELECT * FROM ROOM WHERE room_id = ?').get(currentAlloc.room_id);
  const sameFloor  = toRoom.floor === fromRoom.floor;

  if (!sameFloor) {
    // Exception: allow cross-floor ONLY if no room on the current floor
    // has any remaining capacity (excluding the student's own room)
    const floorVacancy = db.prepare(`
      SELECT COUNT(*) AS cnt
      FROM ROOM
      WHERE hostel = ? AND floor = ? AND room_id != ? AND current_occupancy < capacity
    `).get(fromRoom.hostel, fromRoom.floor, currentAlloc.room_id);

    if (floorVacancy.cnt > 0) {
      return res.status(400).json({
        error: `Room changes are restricted to your current floor (Floor ${fromRoom.floor}). ` +
               `There are still ${floorVacancy.cnt} room(s) with available space on your floor.`
      });
    }
    // All other rooms on this floor are full — cross-floor allowed
    // but must still be within the same hostel
    if (toRoom.hostel !== fromRoom.hostel) {
      return res.status(400).json({ error: 'Cross-hostel room transfers are not permitted.' });
    }
  }
  // ────────────────────────────────────────────────────────────────

  const result = db.prepare(`
    INSERT INTO ROOM_CHANGE_REQUEST (student_id, from_room_id, to_room_id, reason)
    VALUES (?, ?, ?, ?)
  `).run(req.user.id, currentAlloc.room_id, to_room_id, reason.trim());

  res.status(201).json(db.prepare('SELECT * FROM ROOM_CHANGE_REQUEST WHERE change_id = ?').get(result.lastInsertRowid));
});

// ── PATCH /api/rooms/change-requests/:id ─────────────────────────
// Admin approves or rejects a room change request
router.patch('/change-requests/:id', requireAuth, requireRole('admin'), (req, res) => {
  const { status, admin_note } = req.body;
  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ error: 'Status must be approved or rejected.' });
  }

  const cr = db.prepare('SELECT * FROM ROOM_CHANGE_REQUEST WHERE change_id = ?').get(req.params.id);
  if (!cr) return res.status(404).json({ error: 'Change request not found.' });
  if (cr.status !== 'pending') {
    return res.status(409).json({ error: 'Request has already been actioned.' });
  }

  if (status === 'approved') {
    const toRoom = db.prepare('SELECT * FROM ROOM WHERE room_id = ?').get(cr.to_room_id);
    if (toRoom.current_occupancy >= toRoom.capacity) {
      return res.status(409).json({ error: 'Target room is now at full capacity.' });
    }

    db.transaction(() => {
      const today   = new Date().toISOString().split('T')[0];
      const endDate = `${new Date().getFullYear() + 1}-05-31`;
      const newId   = `AL${Date.now()}`;

      // Expire old allocation & decrement old room
      db.prepare("UPDATE ALLOCATION SET status = 'expired' WHERE student_id = ? AND status = 'active'").run(cr.student_id);
      db.prepare('UPDATE ROOM SET current_occupancy = MAX(0, current_occupancy - 1) WHERE room_id = ?').run(cr.from_room_id);

      // Create new allocation & increment new room
      db.prepare(
        "INSERT INTO ALLOCATION (allocation_id, student_id, room_id, from_date, to_date, status) VALUES (?, ?, ?, ?, ?, 'active')"
      ).run(newId, cr.student_id, cr.to_room_id, today, endDate);
      db.prepare('UPDATE ROOM SET current_occupancy = current_occupancy + 1 WHERE room_id = ?').run(cr.to_room_id);

      // Update student hostel
      db.prepare('UPDATE STUDENT SET hostel = ? WHERE student_id = ?').run(toRoom.hostel, cr.student_id);

      // Close request
      db.prepare(`
        UPDATE ROOM_CHANGE_REQUEST
        SET status = 'approved', admin_note = ?, updated_at = datetime('now')
        WHERE change_id = ?
      `).run(admin_note || null, req.params.id);
    })();
  } else {
    db.prepare(`
      UPDATE ROOM_CHANGE_REQUEST
      SET status = 'rejected', admin_note = ?, updated_at = datetime('now')
      WHERE change_id = ?
    `).run(admin_note || null, req.params.id);
  }

  res.json(db.prepare('SELECT * FROM ROOM_CHANGE_REQUEST WHERE change_id = ?').get(req.params.id));
});

export default router;
