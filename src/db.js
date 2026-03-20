/* ─────────────────────────────────
   Mock Database Layer
   In-memory store with query helpers
   ───────────────────────────────── */

// ── Seed Data ──

const students = [
  { student_id: 'STU001', name: 'Arjun Mehta',      gender: 'M', year: 2, hostel: 'Aryabhatta' },
  { student_id: 'STU002', name: 'Priya Sharma',     gender: 'F', year: 3, hostel: 'Gargi' },
  { student_id: 'STU003', name: 'Rahul Verma',      gender: 'M', year: 1, hostel: 'Aryabhatta' },
  { student_id: 'STU004', name: 'Sneha Iyer',       gender: 'F', year: 2, hostel: 'Gargi' },
  { student_id: 'STU005', name: 'Vikram Singh',     gender: 'M', year: 4, hostel: 'Ramanujan' },
  { student_id: 'STU006', name: 'Ananya Das',       gender: 'F', year: 1, hostel: 'Gargi' },
  { student_id: 'STU007', name: 'Karthik Nair',     gender: 'M', year: 3, hostel: 'Ramanujan' },
  { student_id: 'STU008', name: 'Diya Patel',       gender: 'F', year: 2, hostel: 'Maitreyi' },
  { student_id: 'STU009', name: 'Aditya Rao',       gender: 'M', year: 1, hostel: 'Aryabhatta' },
  { student_id: 'STU010', name: 'Meera Joshi',      gender: 'F', year: 4, hostel: 'Maitreyi' },
  { student_id: 'STU011', name: 'Rohan Gupta',      gender: 'M', year: 2, hostel: 'Ramanujan' },
  { student_id: 'STU012', name: 'Ishita Banerjee',  gender: 'F', year: 3, hostel: 'Gargi' },
  { student_id: 'STU013', name: 'Siddharth Jain',   gender: 'M', year: 1, hostel: 'Aryabhatta' },
  { student_id: 'STU014', name: 'Kavya Reddy',      gender: 'F', year: 2, hostel: 'Maitreyi' },
  { student_id: 'STU015', name: 'Nikhil Choudhary', gender: 'M', year: 3, hostel: 'Ramanujan' },
];

const rooms = [
  { room_id: 'A101', hostel: 'Aryabhatta', floor: 1, type: 'Single',  capacity: 1, current_occupancy: 1 },
  { room_id: 'A102', hostel: 'Aryabhatta', floor: 1, type: 'Double',  capacity: 2, current_occupancy: 1 },
  { room_id: 'A103', hostel: 'Aryabhatta', floor: 1, type: 'Triple',  capacity: 3, current_occupancy: 3 },
  { room_id: 'A201', hostel: 'Aryabhatta', floor: 2, type: 'Single',  capacity: 1, current_occupancy: 0 },
  { room_id: 'A202', hostel: 'Aryabhatta', floor: 2, type: 'Double',  capacity: 2, current_occupancy: 2 },
  { room_id: 'A203', hostel: 'Aryabhatta', floor: 2, type: 'Double',  capacity: 2, current_occupancy: 0 },
  { room_id: 'G101', hostel: 'Gargi',      floor: 1, type: 'Single',  capacity: 1, current_occupancy: 1 },
  { room_id: 'G102', hostel: 'Gargi',      floor: 1, type: 'Double',  capacity: 2, current_occupancy: 2 },
  { room_id: 'G103', hostel: 'Gargi',      floor: 1, type: 'Triple',  capacity: 3, current_occupancy: 1 },
  { room_id: 'G201', hostel: 'Gargi',      floor: 2, type: 'Single',  capacity: 1, current_occupancy: 0 },
  { room_id: 'G202', hostel: 'Gargi',      floor: 2, type: 'Double',  capacity: 2, current_occupancy: 1 },
  { room_id: 'R101', hostel: 'Ramanujan',  floor: 1, type: 'Single',  capacity: 1, current_occupancy: 1 },
  { room_id: 'R102', hostel: 'Ramanujan',  floor: 1, type: 'Double',  capacity: 2, current_occupancy: 0 },
  { room_id: 'R103', hostel: 'Ramanujan',  floor: 1, type: 'Triple',  capacity: 3, current_occupancy: 2 },
  { room_id: 'R201', hostel: 'Ramanujan',  floor: 2, type: 'Single',  capacity: 1, current_occupancy: 0 },
  { room_id: 'R202', hostel: 'Ramanujan',  floor: 2, type: 'Double',  capacity: 2, current_occupancy: 1 },
  { room_id: 'M101', hostel: 'Maitreyi',   floor: 1, type: 'Single',  capacity: 1, current_occupancy: 1 },
  { room_id: 'M102', hostel: 'Maitreyi',   floor: 1, type: 'Double',  capacity: 2, current_occupancy: 2 },
  { room_id: 'M103', hostel: 'Maitreyi',   floor: 1, type: 'Triple',  capacity: 3, current_occupancy: 0 },
  { room_id: 'M201', hostel: 'Maitreyi',   floor: 2, type: 'Single',  capacity: 1, current_occupancy: 0 },
  { room_id: 'M202', hostel: 'Maitreyi',   floor: 2, type: 'Double',  capacity: 2, current_occupancy: 1 },
  { room_id: 'M203', hostel: 'Maitreyi',   floor: 2, type: 'Triple',  capacity: 3, current_occupancy: 3 },
];

const allocations = [
  { allocation_id: 'AL001', student_id: 'STU001', room_id: 'A101', from_date: '2025-08-01', to_date: '2026-05-31', status: 'active' },
  { allocation_id: 'AL002', student_id: 'STU002', room_id: 'G101', from_date: '2025-08-01', to_date: '2026-05-31', status: 'active' },
  { allocation_id: 'AL003', student_id: 'STU003', room_id: 'A102', from_date: '2025-08-01', to_date: '2026-05-31', status: 'active' },
  { allocation_id: 'AL004', student_id: 'STU004', room_id: 'G102', from_date: '2025-08-01', to_date: '2026-05-31', status: 'active' },
  { allocation_id: 'AL005', student_id: 'STU005', room_id: 'R101', from_date: '2025-08-01', to_date: '2026-05-31', status: 'active' },
  { allocation_id: 'AL006', student_id: 'STU007', room_id: 'R202', from_date: '2025-08-01', to_date: '2026-05-31', status: 'active' },
  { allocation_id: 'AL007', student_id: 'STU008', room_id: 'M101', from_date: '2025-08-01', to_date: '2026-05-31', status: 'active' },
  { allocation_id: 'AL008', student_id: 'STU010', room_id: 'M102', from_date: '2024-08-01', to_date: '2025-05-31', status: 'expired' },
  { allocation_id: 'AL009', student_id: 'STU012', room_id: 'G102', from_date: '2025-08-01', to_date: '2026-05-31', status: 'active' },
  { allocation_id: 'AL010', student_id: 'STU014', room_id: 'M102', from_date: '2025-08-01', to_date: '2026-05-31', status: 'active' },
];

const complaints = [
  { complaint_id: 'CMP001', student_id: 'STU001', room_id: 'A101', category: 'Electricity',   description: 'Frequent power outages in the evening.',          date: '2026-02-15', status: 'resolved' },
  { complaint_id: 'CMP002', student_id: 'STU002', room_id: 'G101', category: 'Water',          description: 'No hot water supply in the mornings.',             date: '2026-03-01', status: 'in-progress' },
  { complaint_id: 'CMP003', student_id: 'STU003', room_id: 'A102', category: 'Cleanliness',    description: 'Washroom not cleaned for two days.',               date: '2026-03-05', status: 'open' },
  { complaint_id: 'CMP004', student_id: 'STU001', room_id: 'A101', category: 'Water',          description: 'Water leakage from ceiling during rain.',          date: '2026-03-10', status: 'open' },
  { complaint_id: 'CMP005', student_id: 'STU005', room_id: 'R101', category: 'Electricity',    description: 'Socket near bed not working.',                     date: '2026-03-12', status: 'in-progress' },
  { complaint_id: 'CMP006', student_id: 'STU004', room_id: 'G102', category: 'Cleanliness',    description: 'Pest infestation in the corridor.',                date: '2026-03-14', status: 'open' },
  { complaint_id: 'CMP007', student_id: 'STU001', room_id: 'A101', category: 'Electricity',    description: 'Fan making loud noise and vibrating.',             date: '2026-03-15', status: 'open' },
  { complaint_id: 'CMP008', student_id: 'STU008', room_id: 'M101', category: 'Water',          description: 'Low water pressure on second floor.',              date: '2026-03-16', status: 'resolved' },
  { complaint_id: 'CMP009', student_id: 'STU007', room_id: 'R202', category: 'Cleanliness',    description: 'Common room not maintained.',                      date: '2026-03-17', status: 'open' },
  { complaint_id: 'CMP010', student_id: 'STU012', room_id: 'G102', category: 'Electricity',    description: 'Corridor light flickering intermittently.',        date: '2026-03-18', status: 'in-progress' },
  { complaint_id: 'CMP011', student_id: 'STU004', room_id: 'G102', category: 'Water',          description: 'Bathroom tap dripping continuously.',              date: '2026-03-19', status: 'open' },
];

let nextAllocationId = 11;
let nextComplaintId = 12;

// ── Query Helpers ──

export function getStudents() {
  return [...students];
}

export function getStudentById(id) {
  return students.find(s => s.student_id === id) || null;
}

export function getRooms() {
  return rooms.map(r => ({ ...r }));
}

export function getAllocations() {
  return allocations.map(a => ({ ...a }));
}

export function getComplaints() {
  return complaints.map(c => ({ ...c }));
}

/**
 * SQL equivalent:
 * SELECT * FROM ROOM
 * WHERE current_occupancy < capacity
 * AND (hostel = ? OR ? IS NULL)
 * AND (type = ? OR ? IS NULL);
 */
export function getVacantRooms(hostel = null, type = null) {
  return rooms.filter(r => {
    const vacant = r.current_occupancy < r.capacity;
    const matchHostel = hostel ? r.hostel === hostel : true;
    const matchType = type ? r.type === type : true;
    return vacant && matchHostel && matchType;
  });
}

/**
 * SQL equivalent:
 * SELECT s.*, COUNT(*) as unresolved_count
 * FROM STUDENT s
 * JOIN COMPLAINT c ON s.student_id = c.student_id
 * WHERE c.status IN ('open', 'in-progress')
 * GROUP BY s.student_id
 * HAVING COUNT(*) > 1;
 */
export function getStudentsWithUnresolvedComplaints() {
  const countMap = {};
  complaints.forEach(c => {
    if (c.status === 'open' || c.status === 'in-progress') {
      countMap[c.student_id] = (countMap[c.student_id] || 0) + 1;
    }
  });
  return Object.entries(countMap)
    .filter(([, count]) => count > 1)
    .map(([id, count]) => ({
      ...students.find(s => s.student_id === id),
      unresolved_count: count,
    }));
}

/**
 * Transaction: allocate room only if capacity not exceeded.
 *
 * SQL equivalent:
 * BEGIN TRANSACTION;
 *   SELECT current_occupancy, capacity FROM ROOM WHERE room_id = ?;
 *   -- if current_occupancy < capacity:
 *   INSERT INTO ALLOCATION VALUES (...);
 *   UPDATE ROOM SET current_occupancy = current_occupancy + 1 WHERE room_id = ?;
 * COMMIT;
 */
export function allocateRoom(studentId, roomId, preferences = '') {
  // Check: student exists
  const student = students.find(s => s.student_id === studentId);
  if (!student) return { success: false, error: 'Student not found.' };

  // Check: no active allocation
  const existing = allocations.find(
    a => a.student_id === studentId && a.status === 'active'
  );
  if (existing) return { success: false, error: 'Student already has an active room allocation.' };

  // Check: room exists
  const room = rooms.find(r => r.room_id === roomId);
  if (!room) return { success: false, error: 'Room not found.' };

  // Transaction guard: capacity check
  if (room.current_occupancy >= room.capacity) {
    return { success: false, error: 'Room is at full capacity.' };
  }

  // Commit
  const allocationId = `AL${String(nextAllocationId++).padStart(3, '0')}`;
  const now = new Date();
  const fromDate = now.toISOString().split('T')[0];
  const toDate = `${now.getFullYear() + 1}-05-31`;

  const allocation = {
    allocation_id: allocationId,
    student_id: studentId,
    room_id: roomId,
    from_date: fromDate,
    to_date: toDate,
    status: 'active',
    preferences,
  };

  allocations.push(allocation);
  room.current_occupancy += 1;

  return { success: true, allocation };
}

/**
 * Check if student has active allocation request.
 */
export function hasActiveAllocation(studentId) {
  return allocations.some(
    a => a.student_id === studentId && (a.status === 'active' || a.status === 'pending')
  );
}

/**
 * Lodge a complaint.
 */
export function addComplaint(studentId, roomId, category, description) {
  const student = students.find(s => s.student_id === studentId);
  if (!student) return { success: false, error: 'Student not found.' };

  const room = rooms.find(r => r.room_id === roomId);
  if (!room) return { success: false, error: 'Room not found.' };

  const complaintId = `CMP${String(nextComplaintId++).padStart(3, '0')}`;
  const complaint = {
    complaint_id: complaintId,
    student_id: studentId,
    room_id: roomId,
    category,
    description,
    date: new Date().toISOString().split('T')[0],
    status: 'open',
  };

  complaints.push(complaint);
  return { success: true, complaint };
}

/**
 * Update complaint status.
 */
export function updateComplaintStatus(complaintId, newStatus) {
  const complaint = complaints.find(c => c.complaint_id === complaintId);
  if (!complaint) return { success: false, error: 'Complaint not found.' };
  complaint.status = newStatus;
  return { success: true, complaint };
}

/**
 * Get distinct hostels from room data.
 */
export function getHostels() {
  return [...new Set(rooms.map(r => r.hostel))];
}

/**
 * Get distinct room types.
 */
export function getRoomTypes() {
  return [...new Set(rooms.map(r => r.type))];
}

/**
 * Summary statistics.
 */
export function getStats() {
  const totalRooms = rooms.length;
  const totalCapacity = rooms.reduce((sum, r) => sum + r.capacity, 0);
  const totalOccupied = rooms.reduce((sum, r) => sum + r.current_occupancy, 0);
  const vacantRooms = rooms.filter(r => r.current_occupancy < r.capacity).length;
  const fullRooms = rooms.filter(r => r.current_occupancy >= r.capacity).length;
  const openComplaints = complaints.filter(c => c.status === 'open').length;
  const inProgressComplaints = complaints.filter(c => c.status === 'in-progress').length;
  const resolvedComplaints = complaints.filter(c => c.status === 'resolved').length;
  const activeAllocations = allocations.filter(a => a.status === 'active').length;

  return {
    totalRooms,
    totalCapacity,
    totalOccupied,
    vacantRooms,
    fullRooms,
    openComplaints,
    inProgressComplaints,
    resolvedComplaints,
    totalComplaints: complaints.length,
    activeAllocations,
    totalStudents: students.length,
  };
}
