import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { initDb } from './db.js';

import authRoutes       from './routes/auth.js';
import dashboardRoutes  from './routes/dashboard.js';
import complaintsRoutes from './routes/complaints.js';
import roomsRoutes      from './routes/rooms.js';
import forumRoutes      from './routes/forum.js';
import wardensRoutes    from './routes/wardens.js';
import resourcesRoutes  from './routes/resources.js';

const app  = express();
const PORT = process.env.PORT || 3001;

// ── Middleware ────────────────────────────────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json({ limit: '10mb' })); // 10mb for base64 photo uploads
app.use(express.urlencoded({ extended: true }));

// ── Health Check ──────────────────────────────────────────────
app.get('/api/health', (_, res) => res.json({ status: 'ok', ts: new Date().toISOString() }));

// ── Routes ────────────────────────────────────────────────────
app.use('/api/auth',       authRoutes);
app.use('/api/dashboard',  dashboardRoutes);
app.use('/api/complaints', complaintsRoutes);
app.use('/api/rooms',      roomsRoutes);
app.use('/api/forum',      forumRoutes);
app.use('/api/wardens',    wardensRoutes);
app.use('/api/resources',  resourcesRoutes);

// ── 404 ───────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.path} not found.` });
});

// ── Error Handler ─────────────────────────────────────────────
app.use((err, req, res, _next) => {
  console.error('[error]', err);
  res.status(500).json({ error: 'Internal server error.' });
});

// ── Boot ──────────────────────────────────────────────────────
async function boot() {
  await initDb();
  app.listen(PORT, () => {
    console.log(`\n🏨  CW Hostel Server running at http://localhost:${PORT}`);
    console.log(`    API Health: http://localhost:${PORT}/api/health\n`);
  });
}

boot();
