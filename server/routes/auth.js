import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'cw-hostel-dev-secret';
const JWT_EXPIRES = '7d';

// ── Student Login ─────────────────────────────────────────────
// POST /api/auth/student/login
// Body: { roll_no, password }
router.post('/student/login', (req, res) => {
  const { roll_no, password } = req.body;
  if (!roll_no || !password) {
    return res.status(400).json({ error: 'Roll number and password are required.' });
  }

  const student = db.prepare('SELECT * FROM STUDENT WHERE roll_no = ?').get(roll_no);
  if (!student) {
    return res.status(401).json({ error: 'Invalid roll number or password.' });
  }

  const valid = bcrypt.compareSync(password, student.password_hash);
  if (!valid) {
    return res.status(401).json({ error: 'Invalid roll number or password.' });
  }

  const token = jwt.sign(
    { id: student.student_id, role: 'student', name: student.name },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES }
  );

  const { password_hash, ...safeStudent } = student;
  res.json({ token, user: { ...safeStudent, role: 'student' } });
});

// ── Admin Login ───────────────────────────────────────────────
// POST /api/auth/admin/login
// Body: { email, password }
router.post('/admin/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const admin = db.prepare('SELECT * FROM ADMIN WHERE email = ?').get(email);
  if (!admin) {
    return res.status(401).json({ error: 'Invalid email or password.' });
  }

  const valid = bcrypt.compareSync(password, admin.password_hash);
  if (!valid) {
    return res.status(401).json({ error: 'Invalid email or password.' });
  }

  const token = jwt.sign(
    { id: admin.admin_id, role: 'admin', name: admin.name },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES }
  );

  const { password_hash, ...safeAdmin } = admin;
  res.json({ token, user: { ...safeAdmin, role: 'admin' } });
});

// ── Admin Register ────────────────────────────────────────────
// POST /api/auth/admin/register
// Body: { name, email, password }
router.post('/admin/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required.' });
  }

  const existing = db.prepare('SELECT admin_id FROM ADMIN WHERE email = ?').get(email);
  if (existing) {
    return res.status(409).json({ error: 'An admin with this email already exists.' });
  }

  const password_hash = bcrypt.hashSync(password, 10);
  const stmt = db.prepare('INSERT INTO ADMIN (name, email, password_hash) VALUES (?, ?, ?)');
  const result = stmt.run(name, email, password_hash);

  res.status(201).json({ message: 'Admin account created.', admin_id: result.lastInsertRowid });
});

export default router;
