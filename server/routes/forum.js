import { Router } from 'express';
import db from '../db.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = Router();

// ── GET /api/forum ────────────────────────────────────────────
// All posts — anonymous (no author identity)
router.get('/', requireAuth, (req, res) => {
  const posts = db.prepare(`
    SELECT post_id, title, content, created_at
    FROM FORUM_POST
    ORDER BY created_at DESC
  `).all();
  res.json(posts);
});

// ── POST /api/forum ───────────────────────────────────────────
// Students only — post anonymously (student_id not stored)
router.post('/', requireAuth, requireRole('student'), (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }

  const result = db.prepare(
    'INSERT INTO FORUM_POST (title, content) VALUES (?, ?)'
  ).run(title.trim(), content.trim());

  const post = db.prepare('SELECT * FROM FORUM_POST WHERE post_id = ?').get(result.lastInsertRowid);
  res.status(201).json(post);
});

export default router;
