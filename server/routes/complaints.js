import { Router } from 'express';
import db from '../db.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = Router();

// ── GET /api/complaints ────────────────────────────────────────
// Students: only their own complaints
// Admin: all complaints with student info
router.get('/', requireAuth, (req, res) => {
  if (req.user.role === 'admin') {
    const rows = db.prepare(`
      SELECT c.*, s.name AS student_name, s.roll_no
      FROM COMPLAINT c
      LEFT JOIN STUDENT s ON c.student_id = s.student_id
      ORDER BY c.date DESC, c.complaint_id DESC
    `).all();
    return res.json(rows);
  }

  // Student: own complaints only
  const rows = db.prepare(`
    SELECT c.*, s.name AS student_name
    FROM COMPLAINT c
    LEFT JOIN STUDENT s ON c.student_id = s.student_id
    WHERE c.student_id = ?
    ORDER BY c.date DESC, c.complaint_id DESC
  `).all(req.user.id);
  res.json(rows);
});

// ── POST /api/complaints ──────────────────────────────────────
// Students only — lodge a new complaint
router.post('/', requireAuth, requireRole('student'), (req, res) => {
  const { category, description, photo_base64 } = req.body;

  if (!category || !description) {
    return res.status(400).json({ error: 'Category and description are required.' });
  }

  const validCategories = ['Plumbing','Electricity','WiFi','Cleanliness','Carpentry','Other'];
  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: 'Invalid category.' });
  }

  // Find student's active room
  const alloc = db.prepare(`
    SELECT room_id FROM ALLOCATION
    WHERE student_id = ? AND status = 'active'
    LIMIT 1
  `).get(req.user.id);

  const room_id = alloc?.room_id || null;

  const stmt = db.prepare(`
    INSERT INTO COMPLAINT (student_id, room_id, category, description, photo_base64)
    VALUES (?, ?, ?, ?, ?)
  `);
  const result = stmt.run(req.user.id, room_id, category, description, photo_base64 || null);

  const complaint = db.prepare('SELECT * FROM COMPLAINT WHERE complaint_id = ?').get(result.lastInsertRowid);
  res.status(201).json(complaint);
});

// ── PATCH /api/complaints/:id/status ─────────────────────────
// Admin only — update status and optionally add a note
router.patch('/:id/status', requireAuth, requireRole('admin'), (req, res) => {
  const { status, admin_note } = req.body;
  const { id } = req.params;

  const validStatuses = ['open', 'in-progress', 'resolved'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Invalid status value.' });
  }

  const complaint = db.prepare('SELECT * FROM COMPLAINT WHERE complaint_id = ?').get(id);
  if (!complaint) {
    return res.status(404).json({ error: 'Complaint not found.' });
  }

  db.prepare(`
    UPDATE COMPLAINT
    SET status = ?, admin_note = ?, updated_at = datetime('now')
    WHERE complaint_id = ?
  `).run(status, admin_note || null, id);

  const updated = db.prepare('SELECT * FROM COMPLAINT WHERE complaint_id = ?').get(id);
  res.json(updated);
});

export default router;
