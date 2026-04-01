import { Router } from 'express';
import db from '../db.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = Router();

// ── GET /api/resources ────────────────────────────────────────
router.get('/', requireAuth, (req, res) => {
  const { category } = req.query;
  let query = 'SELECT * FROM RESOURCE';
  const params = [];
  if (category) {
    query += ' WHERE category = ?';
    params.push(category);
  }
  query += ' ORDER BY category, name';
  res.json(db.prepare(query).all(...params));
});

// ── POST /api/resources ───────────────────────────────────────
// Admin only
router.post('/', requireAuth, requireRole('admin'), (req, res) => {
  const { category, name, phone, email, notes } = req.body;
  if (!category || !name) {
    return res.status(400).json({ error: 'Category and name are required.' });
  }

  const valid = ['Plumber','Electrician','WiFi','Authority','Other'];
  if (!valid.includes(category)) {
    return res.status(400).json({ error: 'Invalid category.' });
  }

  const result = db.prepare(`
    INSERT INTO RESOURCE (category, name, phone, email, notes)
    VALUES (?, ?, ?, ?, ?)
  `).run(category, name, phone || null, email || null, notes || null);

  const resource = db.prepare('SELECT * FROM RESOURCE WHERE resource_id = ?').get(result.lastInsertRowid);
  res.status(201).json(resource);
});

// ── PUT /api/resources/:id ────────────────────────────────────
// Admin only
router.put('/:id', requireAuth, requireRole('admin'), (req, res) => {
  const { category, name, phone, email, notes } = req.body;
  const { id } = req.params;

  const existing = db.prepare('SELECT * FROM RESOURCE WHERE resource_id = ?').get(id);
  if (!existing) return res.status(404).json({ error: 'Resource not found.' });

  db.prepare(`
    UPDATE RESOURCE SET category = ?, name = ?, phone = ?, email = ?, notes = ?
    WHERE resource_id = ?
  `).run(
    category || existing.category,
    name || existing.name,
    phone !== undefined ? phone : existing.phone,
    email !== undefined ? email : existing.email,
    notes !== undefined ? notes : existing.notes,
    id
  );

  const updated = db.prepare('SELECT * FROM RESOURCE WHERE resource_id = ?').get(id);
  res.json(updated);
});

// ── DELETE /api/resources/:id ─────────────────────────────────
// Admin only
router.delete('/:id', requireAuth, requireRole('admin'), (req, res) => {
  const { id } = req.params;
  const existing = db.prepare('SELECT * FROM RESOURCE WHERE resource_id = ?').get(id);
  if (!existing) return res.status(404).json({ error: 'Resource not found.' });

  db.prepare('DELETE FROM RESOURCE WHERE resource_id = ?').run(id);
  res.json({ message: 'Resource deleted.' });
});

export default router;
