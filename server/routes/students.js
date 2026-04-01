/* ─────────────────────────────────────────────────
   Student Management Routes — Admin Only
   POST   /api/students           Create student
   GET    /api/students           List all students
   GET    /api/students/:id       Single student + allocation
   PATCH  /api/students/:id       Update student details
   ───────────────────────────────────────────────── */

import { Router } from 'express';
import db from '../db.js';
import bcrypt from 'bcryptjs';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = Router();

// ── GET /api/students ─────────────────────────────────────────
router.get('/', requireAuth, requireRole('admin'), (req, res) => {
  const rows = db.prepare(`
    SELECT s.*,
      a.allocation_id, a.room_id AS alloc_room, a.from_date, a.to_date, a.status AS alloc_status,
      r.hostel AS room_hostel, r.floor, r.type AS room_type
    FROM STUDENT s
    LEFT JOIN ALLOCATION a ON a.student_id = s.student_id AND a.status = 'active'
    LEFT JOIN ROOM r ON r.room_id = a.room_id
    ORDER BY s.hostel, s.year, s.name
  `).all();
  // Strip password hash before sending
  res.json(rows.map(({ password_hash, ...r }) => r));
});

// ── GET /api/students/:id ─────────────────────────────────────
router.get('/:id', requireAuth, requireRole('admin'), (req, res) => {
  const s = db.prepare(`
    SELECT s.*,
      a.allocation_id, a.room_id AS alloc_room, a.from_date, a.to_date, a.status AS alloc_status,
      r.hostel AS room_hostel, r.floor, r.type AS room_type
    FROM STUDENT s
    LEFT JOIN ALLOCATION a ON a.student_id = s.student_id AND a.status = 'active'
    LEFT JOIN ROOM r ON r.room_id = a.room_id
    WHERE s.student_id = ?
  `).get(req.params.id);
  if (!s) return res.status(404).json({ error: 'Student not found.' });
  const { password_hash, ...safe } = s;
  res.json(safe);
});

// ── POST /api/students ────────────────────────────────────────
// Admin registers a new student. Password is auto-generated as
// roll_no + '@AHCMS' (student changes it on first login ideally)
router.post('/', requireAuth, requireRole('admin'), (req, res) => {
  const { roll_no, name, email, gender, adm_year, pass_year, course, address, hostel, year } = req.body;

  if (!roll_no || !name || !email || !gender || !adm_year || !pass_year || !course || !hostel || !year) {
    return res.status(400).json({ error: 'All required fields must be filled.' });
  }

  // Check duplicates
  if (db.prepare('SELECT 1 FROM STUDENT WHERE roll_no = ?').get(roll_no)) {
    return res.status(409).json({ error: 'Roll number already exists.' });
  }
  if (db.prepare('SELECT 1 FROM STUDENT WHERE email = ?').get(email)) {
    return res.status(409).json({ error: 'Email already registered.' });
  }

  // Auto-generate student_id
  const lastId = db.prepare("SELECT student_id FROM STUDENT ORDER BY student_id DESC LIMIT 1").get();
  const num = lastId ? parseInt(lastId.student_id.replace('STU','')) + 1 : 1;
  const student_id = `STU${String(num).padStart(3,'0')}`;

  // Default password = Student@123 (admin should communicate to student)
  const password_hash = bcrypt.hashSync('Student@123', 10);

  db.prepare(`
    INSERT INTO STUDENT (student_id, roll_no, name, email, password_hash, gender, adm_year, pass_year, course, address, hostel, year)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(student_id, roll_no, name, email, password_hash, gender, +adm_year, +pass_year, course, address || '', hostel, +year);

  const { password_hash: _, ...created } = db.prepare('SELECT * FROM STUDENT WHERE student_id = ?').get(student_id);
  res.status(201).json({ ...created, default_password: 'Student@123' });
});

// ── PATCH /api/students/:id ───────────────────────────────────
router.patch('/:id', requireAuth, requireRole('admin'), (req, res) => {
  const { name, email, gender, adm_year, pass_year, course, address, hostel, year } = req.body;
  const existing = db.prepare('SELECT * FROM STUDENT WHERE student_id = ?').get(req.params.id);
  if (!existing) return res.status(404).json({ error: 'Student not found.' });

  db.prepare(`
    UPDATE STUDENT SET
      name = ?, email = ?, gender = ?, adm_year = ?, pass_year = ?,
      course = ?, address = ?, hostel = ?, year = ?
    WHERE student_id = ?
  `).run(
    name ?? existing.name,
    email ?? existing.email,
    gender ?? existing.gender,
    +(adm_year ?? existing.adm_year),
    +(pass_year ?? existing.pass_year),
    course ?? existing.course,
    address ?? existing.address,
    hostel ?? existing.hostel,
    +(year ?? existing.year),
    req.params.id
  );

  const { password_hash: _, ...updated } = db.prepare('SELECT * FROM STUDENT WHERE student_id = ?').get(req.params.id);
  res.json(updated);
});

export default router;
