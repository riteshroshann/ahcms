import { Router } from 'express';
import db from '../db.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = Router();

const FRUITS = [
  { name: 'Apple', icon: '🍎' },
  { name: 'Banana', icon: '🍌' },
  { name: 'Cherry', icon: '🍒' },
  { name: 'Grape', icon: '🍇' },
  { name: 'Kiwi', icon: '🥝' },
  { name: 'Mango', icon: '🥭' },
  { name: 'Orange', icon: '🍊' },
  { name: 'Peach', icon: '🍑' },
  { name: 'Pear', icon: '🍐' },
  { name: 'Strawberry', icon: '🍓' },
  { name: 'Watermelon', icon: '🍉' },
  { name: 'Pineapple', icon: '🍍' },
];

function getRandomAvatar() {
  const fruit = FRUITS[Math.floor(Math.random() * FRUITS.length)];
  return { name: `Anonymous ${fruit.name}`, icon: fruit.icon };
}

// ── GET /api/forum ────────────────────────────────────────────
// All posts + nested replies
router.get('/', requireAuth, (req, res) => {
  const posts = db.prepare(`
    SELECT post_id, title, content, avatar_name, avatar_icon, upvotes, downvotes, created_at
    FROM FORUM_POST
    ORDER BY created_at DESC
  `).all();

  const replies = db.prepare(`
    SELECT reply_id, post_id, content, avatar_name, avatar_icon, upvotes, downvotes, created_at
    FROM FORUM_REPLY
    ORDER BY created_at ASC
  `).all();

  // Attach replies to posts
  const postsWithReplies = posts.map(p => ({
    ...p,
    replies: replies.filter(r => r.post_id === p.post_id)
  }));

  res.json(postsWithReplies);
});

// ── POST /api/forum ───────────────────────────────────────────
// Post anonymously with a fruit avatar
router.post('/', requireAuth, requireRole('student'), (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }

  const avatar = getRandomAvatar();
  const result = db.prepare(
    'INSERT INTO FORUM_POST (title, content, avatar_name, avatar_icon) VALUES (?, ?, ?, ?)'
  ).run(title.trim(), content.trim(), avatar.name, avatar.icon);

  const post = db.prepare('SELECT * FROM FORUM_POST WHERE post_id = ?').get(result.lastInsertRowid);
  res.status(201).json({ ...post, replies: [] });
});

// ── POST /api/forum/:postId/reply ─────────────────────────────
// Reply to a post
router.post('/:postId/reply', requireAuth, requireRole('student'), (req, res) => {
  const { content } = req.body;
  const { postId } = req.params;
  
  if (!content) return res.status(400).json({ error: 'Reply content is required.' });

  const post = db.prepare('SELECT post_id FROM FORUM_POST WHERE post_id = ?').get(postId);
  if (!post) return res.status(404).json({ error: 'Post not found.' });

  const avatar = getRandomAvatar();
  const result = db.prepare(`
    INSERT INTO FORUM_REPLY (post_id, content, avatar_name, avatar_icon)
    VALUES (?, ?, ?, ?)
  `).run(postId, content.trim(), avatar.name, avatar.icon);

  const reply = db.prepare('SELECT * FROM FORUM_REPLY WHERE reply_id = ?').get(result.lastInsertRowid);
  res.status(201).json(reply);
});

// ── PATCH /api/forum/vote ─────────────────────────────────────
// Upvote/Downvote logic (Client-side throttling assumed due to anonymity)
router.patch('/vote', requireAuth, (req, res) => {
  const { type, id, dir } = req.body; // type: 'post'|'reply', id: number, dir: 'up'|'down'
  
  if (!['post', 'reply'].includes(type) || !['up', 'down'].includes(dir)) {
    return res.status(400).json({ error: 'Invalid vote parameters.' });
  }

  const table = type === 'post' ? 'FORUM_POST' : 'FORUM_REPLY';
  const idCol = type === 'post' ? 'post_id' : 'reply_id';
  const voteCol = dir === 'up' ? 'upvotes' : 'downvotes';

  db.prepare(`UPDATE ${table} SET ${voteCol} = ${voteCol} + 1 WHERE ${idCol} = ?`).run(id);
  
  const updated = db.prepare(`SELECT * FROM ${table} WHERE ${idCol} = ?`).get(id);
  res.json(updated);
});

export default router;
