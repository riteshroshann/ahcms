import { Router } from 'express';
import db from '../db.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// ── GET /api/wardens ──────────────────────────────────────────
// On-duty wardens and guards
router.get('/', requireAuth, (req, res) => {
  const { hostel } = req.query;

  let query = `SELECT * FROM WARDEN WHERE on_duty = 1`;
  const params = [];
  if (hostel) {
    query += ' AND hostel = ?';
    params.push(hostel);
  }
  query += ' ORDER BY role, hostel';

  const wardens = db.prepare(query).all(...params);
  res.json(wardens);
});

export default router;
