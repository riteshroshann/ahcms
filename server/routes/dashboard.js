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
  const totalRooms         = db.prepare('SELECT COUNT(*) AS n FROM ROOM').get().n;
  const vacantRooms        = db.prepare('SELECT COUNT(*) AS n FROM ROOM WHERE current_occupancy < capacity').get().n;
  const totalCapacity      = db.prepare('SELECT SUM(capacity) AS n FROM ROOM').get().n || 0;
  const totalOccupied      = db.prepare('SELECT SUM(current_occupancy) AS n FROM ROOM').get().n || 0;
  const openComplaints     = db.prepare("SELECT COUNT(*) AS n FROM COMPLAINT WHERE status = 'open'").get().n;
  const inProgressComplaints = db.prepare("SELECT COUNT(*) AS n FROM COMPLAINT WHERE status = 'in-progress'").get().n;
  const resolvedComplaints = db.prepare("SELECT COUNT(*) AS n FROM COMPLAINT WHERE status = 'resolved'").get().n;
  const totalStudents      = db.prepare('SELECT COUNT(*) AS n FROM STUDENT').get().n;
  const pendingBookings    = db.prepare("SELECT COUNT(*) AS n FROM ROOM_BOOKING_REQUEST WHERE status = 'pending'").get().n;

  const recentComplaints = db.prepare(`
    SELECT c.*, s.name AS student_name, s.roll_no
    FROM COMPLAINT c
    LEFT JOIN STUDENT s ON c.student_id = s.student_id
    ORDER BY c.date DESC, c.complaint_id DESC
    LIMIT 6
  `).all();

  const allStaff = db.prepare('SELECT * FROM WARDEN ORDER BY role, hostel').all();
  const guards = allStaff.filter(w => w.role === 'Guard' && w.on_duty === 1);
  const allWardens = allStaff.filter(w => w.role === 'Warden');

  const wardens = allWardens.filter(w => w.on_duty === 1).map(w => {
    const offDuty = allWardens.filter(ow => ow.hostel === w.hostel && ow.on_duty === 0);
    return {
      ...w,
      previous: offDuty[0] || null,
      next: offDuty[1] || null
    };
  }).concat(guards);

  const officeRow = db.prepare(`
    SELECT phone FROM RESOURCE WHERE category = 'Authority' AND name LIKE '%Warden Office%' LIMIT 1
  `).get();
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
