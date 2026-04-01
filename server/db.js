import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = process.env.DB_PATH
  ? path.resolve(__dirname, process.env.DB_PATH)
  : path.resolve(__dirname, '../hostel.db');

// Open (or create) the database file
const db = new Database(dbPath);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// ── Schema Migration ────────────────────────────────────────────
function initSchema() {
  const schemaPath = path.resolve(__dirname, '../sql/schema.sql');
  const sql = fs.readFileSync(schemaPath, 'utf8');
  db.exec(sql);
  console.log('[db] Schema applied.');
}

// ── Seed Data ───────────────────────────────────────────────────
async function seed() {
  const alreadySeeded = db.prepare('SELECT COUNT(*) as n FROM STUDENT').get().n;
  if (alreadySeeded > 0) {
    console.log('[db] Database already seeded, skipping.');
    return;
  }

  console.log('[db] Seeding database...');

  const adminInsert = db.prepare(
    'INSERT INTO ADMIN (name, email, password_hash) VALUES (?, ?, ?)'
  );
  const pw = bcrypt.hashSync('Admin@123', 10);
  adminInsert.run('Chief Warden Admin', 'admin@ahcms.edu.in', pw);

  // Students with hashed passwords
  const stuInsert = db.prepare(`
    INSERT INTO STUDENT
      (student_id, roll_no, name, email, password_hash, gender, adm_year, pass_year, course, address, hostel, year)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const stuPw = bcrypt.hashSync('Student@123', 10);
  const students = [
    // MBBS — boys floor 8, girls floor 7
    ['STU001','DL.MBBS.U4AID24120','Arjun Mehta',     'arjun@ahcms.edu.in',   stuPw,'M',2021,2026,'MBBS',  'Delhi',     'Senior MBBS boys hostel', 4],
    ['STU002','DL.MBBS.U4AID24121','Priya Sharma',    'priya@ahcms.edu.in',   stuPw,'F',2021,2026,'MBBS',  'Mumbai',    'Senior MBBS girls hostel',4],
    ['STU003','DL.MBBS.U4AID24122','Rahul Verma',     'rahul@ahcms.edu.in',   stuPw,'M',2021,2026,'MBBS',  'Bangalore', 'Senior MBBS boys hostel', 4],
    ['STU004','DL.MBBS.U4AID24123','Sneha Iyer',      'sneha@ahcms.edu.in',   stuPw,'F',2021,2026,'MBBS',  'Chennai',   'Senior MBBS girls hostel',4],
    // B.Tech — boys floor 9, girls floor 8
    ['STU005','DL.BT.U4AID24124', 'Vikram Singh',    'vikram@ahcms.edu.in',  stuPw,'M',2022,2026,'B.Tech','Jaipur',    'Senior MBBS boys hostel', 3],
    ['STU006','DL.BT.U4AID24125', 'Ananya Das',      'ananya@ahcms.edu.in',  stuPw,'F',2022,2026,'B.Tech','Kolkata',   'Senior MBBS girls hostel',3],
    ['STU007','DL.BT.U4AID24130', 'Rohan Gupta',     'rohan@ahcms.edu.in',   stuPw,'M',2023,2027,'B.Tech','Lucknow',   'Senior MBBS boys hostel', 2],
    ['STU008','DL.BT.U4AID24131', 'Ishita Banerjee', 'ishita@ahcms.edu.in',  stuPw,'F',2022,2026,'B.Tech','Kolkata',   'Senior MBBS girls hostel',3],
  ];
  const insertStudents = db.transaction((rows) => rows.forEach(r => stuInsert.run(...r)));
  insertStudents(students);

  const roomInsert = db.prepare(
    'INSERT INTO ROOM (room_id, hostel, floor, type, capacity, current_occupancy) VALUES (?, ?, ?, ?, ?, 0)'
  );

  // Helper: generate 10 rooms for a floor
  // rooms 01–07 = Double (cap 2), rooms 08–10 = Single (cap 1)
  function floorRooms(hostel, prefix, floor) {
    const rows = [];
    for (let i = 1; i <= 7; i++) {
      rows.push([`${prefix}-${floor}${String(i).padStart(2,'0')}`, hostel, floor, 'Double', 2]);
    }
    for (let i = 8; i <= 10; i++) {
      rows.push([`${prefix}-${floor}${String(i).padStart(2,'0')}`, hostel, floor, 'Single', 1]);
    }
    return rows;
  }

  const allRooms = [
    // Senior MBBS Boys — floors 8, 9
    ...floorRooms('Senior MBBS boys hostel', 'SmB', 8),
    ...floorRooms('Senior MBBS boys hostel', 'SmB', 9),
    // Senior MBBS Girls — floors 7, 8
    ...floorRooms('Senior MBBS girls hostel', 'SmG', 7),
    ...floorRooms('Senior MBBS girls hostel', 'SmG', 8),
  ];
  const insertRooms = db.transaction((rows) => rows.forEach(r => roomInsert.run(...r)));
  insertRooms(allRooms);

  // Allocations
  const allocInsert = db.prepare(
    'INSERT INTO ALLOCATION (allocation_id, student_id, room_id, from_date, to_date, status) VALUES (?, ?, ?, ?, ?, ?)'
  );
  const allocations = [
    // MBBS boys → floor 8: room 801 full (both beds), room 803 partial
    ['AL001','STU001','SmB-801','2025-08-01','2026-05-31','active'],
    ['AL002','STU003','SmB-801','2025-08-01','2026-05-31','active'],
    // B.Tech boys → floor 9: spread across 901 and 904
    ['AL003','STU005','SmB-901','2025-08-01','2026-05-31','active'],
    ['AL004','STU007','SmB-904','2025-08-01','2026-05-31','active'],
    // MBBS girls → floor 7: spread apart — rooms 704 and 706
    ['AL005','STU002','SmG-704','2025-08-01','2026-05-31','active'],
    ['AL006','STU004','SmG-706','2025-08-01','2026-05-31','active'],
    // B.Tech girls → floor 8: far end — rooms 805 and 809 (single)
    ['AL007','STU006','SmG-805','2025-08-01','2026-05-31','active'],
    ['AL008','STU008','SmG-809','2025-08-01','2026-05-31','active'],
  ];
  const insertAllocs = db.transaction((rows) => rows.forEach(r => allocInsert.run(...r)));
  insertAllocs(allocations);

  // Sync room occupancy counts from active allocations
  db.prepare(`
    UPDATE ROOM SET current_occupancy = (
      SELECT COUNT(*) FROM ALLOCATION
      WHERE ALLOCATION.room_id = ROOM.room_id AND ALLOCATION.status = 'active'
    )
  `).run();


  // Complaints
  const cmpInsert = db.prepare(`
    INSERT INTO COMPLAINT (student_id, room_id, category, description, date, status, resolved_date)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  const complaints = [
    ['STU001','SmB-801','Electricity','Frequent power outages in the evening.', '2026-02-15','resolved', '2026-02-16'],
    ['STU002','SmG-701','Plumbing',   'No hot water supply in the mornings.',   '2026-03-01','in-progress', null],
    ['STU004','SmG-701','Plumbing',   'Bathroom tap dripping continuously.',     '2026-03-19','open', null],
    ['STU006','SmG-702','WiFi',       'WiFi drops frequently in girls hostel.',  '2026-03-20','open', null],
  ];
  const insertCmps = db.transaction((rows) => rows.forEach(r => cmpInsert.run(...r)));
  insertCmps(complaints);

  const wardInsert = db.prepare(
    'INSERT INTO WARDEN (name, role, phone, email, hostel, shift, on_duty) VALUES (?, ?, ?, ?, ?, ?, ?)'
  );
  const wardens = [
    // Active wardens
    ['Dr. Ramesh Kulkarni', 'Warden','9876543210','r.kulkarni@ahcms.edu.in', 'Senior MBBS boys hostel',  'All-day', 1],
    ['Mrs. Sunita Sharma',  'Warden','9876543211','s.sharma@ahcms.edu.in',   'Senior MBBS girls hostel', 'All-day', 1],
    // Off-duty (Previous slot)
    ['Mr. Anil Desai',      'Warden','9876543220','', 'Senior MBBS boys hostel',  'Previous', 0],
    ['Dr. Kavitha Menon',   'Warden','9876543224','', 'Senior MBBS girls hostel', 'Previous', 0],
    // Off-duty (Next slot)
    ['Mr. Vinod Kumar',     'Warden','9876543221','', 'Senior MBBS boys hostel',  'Next', 0],
    ['Dr. Preethi Iyer',    'Warden','9876543227','', 'Senior MBBS girls hostel', 'Next', 0],
    // Guards — Morning + Night per hostel
    ['Suresh Kumar',  'Guard','9876543222','', 'Senior MBBS boys hostel',  'Morning', 1],
    ['Deepak Singh',  'Guard','9876543223','', 'Senior MBBS boys hostel',  'Night',   1],
    ['Rajesh Pandey', 'Guard','9876543230','', 'Senior MBBS girls hostel', 'Morning', 1],
    ['Mohan Lal',     'Guard','9876543231','', 'Senior MBBS girls hostel', 'Night',   1],
  ];
  const insertWardens = db.transaction((rows) => rows.forEach(r => wardInsert.run(...r)));
  insertWardens(wardens);

  // Forum posts
  const forumInsert = db.prepare(
    'INSERT INTO FORUM_POST (title, content, avatar_name, avatar_icon, upvotes, downvotes, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
  );
  const posts = [
    ['Mess food timing change?',   'Has anyone heard about the mess timings changing next month? Breakfast was supposed to start at 7am but they opened at 7:45 today.', 'Anonymous Mango', '🥭', 12, 1, '2026-03-28T08:12:00'],
    ['Study room lights issue',    'The study room on floor 2 has flickering tube lights for the past week. Admin please look into this.',                               'Anonymous Banana', '🍌', 5, 0, '2026-03-29T22:05:00'],
    ['Lost umbrella',              'Lost a blue umbrella near the laundry area yesterday evening. If found please leave at reception.',                                  'Anonymous Cherry', '🍒', 2, 0, '2026-03-30T10:30:00'],
    ['Cricket match tomorrow!',    'Hostel vs Dept cricket match tomorrow at 4pm. Everyone come support!',                                                               'Anonymous Apple', '🍎', 25, 3, '2026-03-31T15:00:00'],
  ];
  const insertPosts = db.transaction((rows) => rows.forEach(r => forumInsert.run(...r)));
  insertPosts(posts);

  // Forum replies
  const replyInsert = db.prepare(
    'INSERT INTO FORUM_REPLY (post_id, content, avatar_name, avatar_icon, upvotes, downvotes, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)'
  );
  const replies = [
    [1, 'Yes, I heard they are updating it to 7:45 permanently.', 'Anonymous Grape', '🍇', 4, 0, '2026-03-28T09:00:00'],
    [1, 'That is too late for morning classes...', 'Anonymous Kiwi', '🥝', 7, 1, '2026-03-28T10:30:00'],
    [4, 'I am in! See you there.', 'Anonymous Mango', '🥭', 2, 0, '2026-03-31T16:00:00'],
  ];
  const insertReplies = db.transaction((rows) => rows.forEach(r => replyInsert.run(...r)));
  insertReplies(replies);

  // Resources
  const resInsert = db.prepare(
    'INSERT INTO RESOURCE (category, name, phone, email, notes) VALUES (?, ?, ?, ?, ?)'
  );
  const resources = [
    ['Plumber',      'Ramakant Plumbing Services', '9988776655','ramakant@plumb.com',  'Available 8am-8pm, emergency: 24/7'],
    ['Electrician',  'Vijay Electricals',          '9988776600','vijay@elec.com',      'Licensed electrician, handles all wiring'],
    ['WiFi',         'AHCMS Network Team',            '9988776611','wifi@ahcms.edu.in',         'Internal IT support ticket: helpdesk.ahcms.edu.in'],
    ['Authority',    'Chief Warden Office',        '9876543210','chiefwarden@ahcms.edu.in',  'Office hours: Mon-Sat 10am-5pm'],
    ['Authority',    'Dean of Students',           '9876543200','dean.students@ahcms.edu.in','For escalations requiring institutional intervention'],
    ['Other',        'Hostel Maintenance Desk',   '9876543230','maintenance@ahcms.edu.in',  'Log minor repairs and follow up'],
  ];
  const insertRes = db.transaction((rows) => rows.forEach(r => resInsert.run(...r)));
  insertRes(resources);

  console.log('[db] Seed complete.');
}

export async function initDb() {
  initSchema();
  await seed();
}

export default db;
