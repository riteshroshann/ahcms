import { Router } from 'express';
import db from '../db.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = Router();

// ── GET /api/dashboard/student ────────────────────────────────
router.get('/student', requireAuth, requireRole('student'), (req, res) => {
  const studentId = req.user.id;

  // Student's own profile
  const student = db.prepare(
    'SELECT student_id, name, roll_no, email, gender, adm_year, pass_year, course, address, hostel, year FROM STUDENT WHERE student_id = ?'
  ).get(studentId);

  // Active room allocation
  const allocation = db.prepare(`
    SELECT a.*, r.hostel, r.floor, r.type, r.capacity, r.current_occupancy
    FROM ALLOCATION a
    JOIN ROOM r ON a.room_id = r.room_id
    WHERE a.student_id = ? AND a.status = 'active'
    LIMIT 1
  `).get(studentId);

  // Student's own complaints (last 5)
  const complaints = db.prepare(`
    SELECT * FROM COMPLAINT WHERE student_id = ?
    ORDER BY date DESC, complaint_id DESC LIMIT 5
  `).all(studentId);

  // Wardens and Guards for student's hostel
  const allStaff = db.prepare(`
    SELECT * FROM WARDEN WHERE hostel = ?
  `).all(student?.hostel || '');

  const guards = allStaff.filter(w => w.role === 'Guard' && w.on_duty === 1);
  const allWardens = allStaff.filter(w => w.role === 'Warden');
  const offDutyWardens = allWardens.filter(w => w.on_duty === 0);

  const wardens = allWardens.filter(w => w.on_duty === 1).map(w => ({
    ...w,
    previous: offDutyWardens[0] || null,
    next: offDutyWardens[1] || null
  })).concat(guards);

  // Chief Warden Office contact number
  const officeRow = db.prepare(`
    SELECT phone FROM RESOURCE WHERE category = 'Authority' AND name LIKE '%Warden Office%' LIMIT 1
  `).get();
  const wardenOfficePhone = officeRow?.phone || null;

  res.json({ student, allocation, complaints, wardens, wardenOfficePhone });
});

// ── GET /api/dashboard/admin ──────────────────────────────────
router.get('/admin', requireAuth, requireRole('admin'), (req, res) => {
  const h = req.query.hostel || '';

  // ── Room stats ────────────────────────────────────────────────
  const roomWhere    = h ? 'WHERE hostel = ?' : '';
  const roomParams   = h ? [h] : [];

  const totalRooms       = db.prepare(`SELECT COUNT(*)        AS n FROM ROOM ${roomWhere}`).get(...roomParams).n;
  const vacantRooms      = db.prepare(`SELECT COUNT(*)        AS n FROM ROOM ${h ? 'WHERE hostel = ? AND' : 'WHERE'} current_occupancy < capacity`).get(...roomParams).n;
  const totalCapacity    = db.prepare(`SELECT COALESCE(SUM(capacity),0)          AS n FROM ROOM ${roomWhere}`).get(...roomParams).n;
  const totalOccupied    = db.prepare(`SELECT COALESCE(SUM(current_occupancy),0) AS n FROM ROOM ${roomWhere}`).get(...roomParams).n;

  // ── Student count — STUDENT.hostel matches exactly ───────────
  const totalStudents    = db.prepare(`SELECT COUNT(*) AS n FROM STUDENT ${h ? 'WHERE hostel = ?' : ''}`).get(...roomParams).n;

  // ── Complaint stats — scope by room hostel when filtering ─────
  // INNER JOIN ROOM ensures only complaints tied to rooms in this hostel are counted.
  // When no filter, a simple WHERE on status suffices.
  const cmpJoin   = h ? 'JOIN ROOM r ON c.room_id = r.room_id AND r.hostel = ?' : '';
  const cmpParams = h ? [h] : [];

  const openComplaints        = db.prepare(`SELECT COUNT(*) AS n FROM COMPLAINT c ${cmpJoin} WHERE c.status = 'open'`).get(...cmpParams).n;
  const inProgressComplaints  = db.prepare(`SELECT COUNT(*) AS n FROM COMPLAINT c ${cmpJoin} WHERE c.status = 'in-progress'`).get(...cmpParams).n;
  const resolvedComplaints    = db.prepare(`SELECT COUNT(*) AS n FROM COMPLAINT c ${cmpJoin} WHERE c.status = 'resolved'`).get(...cmpParams).n;

  // ── Pending booking requests ──────────────────────────────────
  const pendingBookings = db.prepare(
    `SELECT COUNT(*) AS n FROM ROOM_BOOKING_REQUEST req
     JOIN ROOM r ON req.room_id = r.room_id
     WHERE req.status = 'pending' ${h ? 'AND r.hostel = ?' : ''}`
  ).get(...(h ? [h] : [])).n;

  // ── Recent complaints (most recent 6) ────────────────────────
  const recentComplaints = db.prepare(`
    SELECT c.*, s.name AS student_name, s.roll_no
    FROM COMPLAINT c
    LEFT JOIN STUDENT s ON c.student_id = s.student_id
    ${h ? 'JOIN ROOM r ON c.room_id = r.room_id AND r.hostel = ?' : ''}
    ORDER BY c.date DESC, c.complaint_id DESC
    LIMIT 6
  `).all(...cmpParams);

  // ── Warden + guard roster ─────────────────────────────────────
  const allStaff  = db.prepare(`SELECT * FROM WARDEN ${h ? 'WHERE hostel = ?' : ''} ORDER BY role, hostel`).all(...roomParams);
  const guardList = allStaff.filter(w => w.role === 'Guard' && w.on_duty === 1);
  const allWardens = allStaff.filter(w => w.role === 'Warden');

  const wardens = allWardens.filter(w => w.on_duty === 1).map(w => {
    const offDuty = allWardens.filter(ow => ow.hostel === w.hostel && ow.on_duty === 0);
    return { ...w, previous: offDuty[0] || null, next: offDuty[1] || null };
  }).concat(guardList);

  const officeRow = db.prepare(
    `SELECT phone FROM RESOURCE WHERE category = 'Authority' AND name LIKE '%Warden Office%' LIMIT 1`
  ).get();
  const wardenOfficePhone = officeRow?.phone || null;

  res.json({
    stats: {
      totalRooms, vacantRooms, totalCapacity, totalOccupied,
      openComplaints, inProgressComplaints, resolvedComplaints,
      totalStudents, pendingBookings
    },
    recentComplaints,
    wardens,
    wardenOfficePhone
  });
});

export default router;
