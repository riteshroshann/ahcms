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
  adminInsert.run('Chief Warden Admin', 'admin@cwhotel.edu', pw);

  // Students with hashed passwords
  const stuInsert = db.prepare(`
    INSERT INTO STUDENT
      (student_id, roll_no, name, email, password_hash, gender, adm_year, pass_year, course, address, hostel, year)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const stuPw = bcrypt.hashSync('Student@123', 10);
  const students = [
    ['STU001','CW2022001','Arjun Mehta',     'arjun@cwhotel.edu',   stuPw,'M',2022,2026,'B.Tech CSE', 'Delhi',          'Aryabhatta',2],
    ['STU002','CW2021002','Priya Sharma',    'priya@cwhotel.edu',   stuPw,'F',2021,2025,'B.Tech ECE', 'Mumbai',         'Gargi',      3],
    ['STU003','CW2023003','Rahul Verma',     'rahul@cwhotel.edu',   stuPw,'M',2023,2027,'B.Tech ME',  'Bangalore',      'Aryabhatta', 1],
    ['STU004','CW2022004','Sneha Iyer',      'sneha@cwhotel.edu',   stuPw,'F',2022,2026,'B.Tech CSE', 'Chennai',        'Gargi',      2],
    ['STU005','CW2020005','Vikram Singh',    'vikram@cwhotel.edu',  stuPw,'M',2020,2024,'B.Tech EEE', 'Jaipur',         'Ramanujan',  4],
    ['STU006','CW2023006','Ananya Das',      'ananya@cwhotel.edu',  stuPw,'F',2023,2027,'B.Tech CSE', 'Kolkata',        'Gargi',      1],
    ['STU007','CW2021007','Karthik Nair',    'karthik@cwhotel.edu', stuPw,'M',2021,2025,'B.Tech IT',  'Kochi',          'Ramanujan',  3],
    ['STU008','CW2022008','Diya Patel',      'diya@cwhotel.edu',    stuPw,'F',2022,2026,'B.Tech CSE', 'Ahmedabad',      'Maitreyi',   2],
    ['STU009','CW2023009','Aditya Rao',      'aditya@cwhotel.edu',  stuPw,'M',2023,2027,'B.Tech ME',  'Hyderabad',      'Aryabhatta', 1],
    ['STU010','CW2020010','Meera Joshi',     'meera@cwhotel.edu',   stuPw,'F',2020,2024,'B.Tech ECE', 'Pune',           'Maitreyi',   4],
    ['STU011','CW2022011','Rohan Gupta',     'rohan@cwhotel.edu',   stuPw,'M',2022,2026,'B.Tech CSE', 'Lucknow',        'Ramanujan',  2],
    ['STU012','CW2021012','Ishita Banerjee', 'ishita@cwhotel.edu',  stuPw,'F',2021,2025,'B.Tech CSE', 'Kolkata',        'Gargi',      3],
    ['STU013','CW2023013','Siddharth Jain',  'siddharth@cwhotel.edu',stuPw,'M',2023,2027,'B.Tech IT', 'Indore',         'Aryabhatta', 1],
    ['STU014','CW2022014','Kavya Reddy',     'kavya@cwhotel.edu',   stuPw,'F',2022,2026,'B.Tech ECE', 'Hyderabad',      'Maitreyi',   2],
    ['STU015','CW2021015','Nikhil Choudhary','nikhil@cwhotel.edu',  stuPw,'M',2021,2025,'B.Tech ME',  'Chandigarh',     'Ramanujan',  3],
  ];
  const insertStudents = db.transaction((rows) => rows.forEach(r => stuInsert.run(...r)));
  insertStudents(students);

  // Rooms
  const roomInsert = db.prepare(
    'INSERT INTO ROOM (room_id, hostel, floor, type, capacity, current_occupancy) VALUES (?, ?, ?, ?, ?, ?)'
  );
  const rooms = [
    ['A101','Aryabhatta',1,'Single',1,1], ['A102','Aryabhatta',1,'Double',2,1],
    ['A103','Aryabhatta',1,'Triple',3,3], ['A201','Aryabhatta',2,'Single',1,0],
    ['A202','Aryabhatta',2,'Double',2,2], ['A203','Aryabhatta',2,'Double',2,0],
    ['A301','Aryabhatta',3,'Double',2,1], ['A302','Aryabhatta',3,'Triple',3,2],
    ['G101','Gargi',     1,'Single',1,1], ['G102','Gargi',     1,'Double',2,2],
    ['G103','Gargi',     1,'Triple',3,1], ['G201','Gargi',     2,'Single',1,0],
    ['G202','Gargi',     2,'Double',2,1], ['G203','Gargi',     2,'Double',2,2],
    ['G301','Gargi',     3,'Triple',3,0], ['R101','Ramanujan', 1,'Single',1,1],
    ['R102','Ramanujan', 1,'Double',2,0], ['R103','Ramanujan', 1,'Triple',3,2],
    ['R201','Ramanujan', 2,'Single',1,0], ['R202','Ramanujan', 2,'Double',2,1],
    ['M101','Maitreyi',  1,'Single',1,1], ['M102','Maitreyi',  1,'Double',2,2],
    ['M103','Maitreyi',  1,'Triple',3,0], ['M201','Maitreyi',  2,'Single',1,0],
    ['M202','Maitreyi',  2,'Double',2,1], ['M203','Maitreyi',  2,'Triple',3,3],
  ];
  const insertRooms = db.transaction((rows) => rows.forEach(r => roomInsert.run(...r)));
  insertRooms(rooms);

  // Allocations
  const allocInsert = db.prepare(
    'INSERT INTO ALLOCATION (allocation_id, student_id, room_id, from_date, to_date, status) VALUES (?, ?, ?, ?, ?, ?)'
  );
  const allocations = [
    ['AL001','STU001','A101','2025-08-01','2026-05-31','active'],
    ['AL002','STU002','G101','2025-08-01','2026-05-31','active'],
    ['AL003','STU003','A102','2025-08-01','2026-05-31','active'],
    ['AL004','STU004','G102','2025-08-01','2026-05-31','active'],
    ['AL005','STU005','R101','2025-08-01','2026-05-31','active'],
    ['AL006','STU007','R202','2025-08-01','2026-05-31','active'],
    ['AL007','STU008','M101','2025-08-01','2026-05-31','active'],
    ['AL008','STU012','G102','2025-08-01','2026-05-31','active'],
    ['AL009','STU014','M102','2025-08-01','2026-05-31','active'],
    ['AL010','STU010','M202','2024-08-01','2025-05-31','expired'],
  ];
  const insertAllocs = db.transaction((rows) => rows.forEach(r => allocInsert.run(...r)));
  insertAllocs(allocations);

  // Complaints
  const cmpInsert = db.prepare(`
    INSERT INTO COMPLAINT (student_id, room_id, category, description, date, status)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  const complaints = [
    ['STU001','A101','Electricity','Frequent power outages in the evening.',         '2026-02-15','resolved'],
    ['STU002','G101','Plumbing',   'No hot water supply in the mornings.',           '2026-03-01','in-progress'],
    ['STU003','A102','Cleanliness','Washroom not cleaned for two days.',             '2026-03-05','open'],
    ['STU001','A101','Plumbing',   'Water leakage from ceiling during rain.',        '2026-03-10','open'],
    ['STU005','R101','Electricity','Socket near bed not working.',                   '2026-03-12','in-progress'],
    ['STU004','G102','Cleanliness','Pest infestation in the corridor.',              '2026-03-14','open'],
    ['STU001','A101','Carpentry',  'Wardrobe door hinge broken.',                   '2026-03-15','open'],
    ['STU008','M101','Plumbing',   'Low water pressure on second floor.',            '2026-03-16','resolved'],
    ['STU007','R202','Cleanliness','Common room not maintained.',                   '2026-03-17','open'],
    ['STU012','G102','WiFi',       'WiFi dropping frequently in G-block.',           '2026-03-18','in-progress'],
    ['STU004','G102','Plumbing',   'Bathroom tap dripping continuously.',            '2026-03-19','open'],
    ['STU009','A103','WiFi',       'No WiFi connectivity in room A103.',             '2026-03-20','open'],
  ];
  const insertCmps = db.transaction((rows) => rows.forEach(r => cmpInsert.run(...r)));
  insertCmps(complaints);

  // Wardens
  const wardInsert = db.prepare(
    'INSERT INTO WARDEN (name, role, phone, email, hostel, shift, on_duty) VALUES (?, ?, ?, ?, ?, ?, ?)'
  );
  const wardens = [
    ['Dr. Ramesh Kulkarni','Warden','9876543210','r.kulkarni@cw.edu','Aryabhatta','All-day',1],
    ['Mrs. Sunita Sharma', 'Warden','9876543211','s.sharma@cw.edu', 'Gargi',      'All-day',1],
    ['Mr. Aditi Verma',    'Warden','9876543212','a.verma@cw.edu',  'Ramanujan',  'All-day',1],
    ['Mr. Prakash Nair',   'Warden','9876543213','p.nair@cw.edu',   'Maitreyi',   'All-day',1],
    ['Suresh Kumar',       'Guard', '9876543220','',                'Aryabhatta', 'Morning',1],
    ['Mahesh Yadav',       'Guard', '9876543221','',                'Aryabhatta', 'Night',  1],
    ['Ravi Shankar',       'Guard', '9876543222','',                'Gargi',      'Morning',1],
    ['Deepak Singh',       'Guard', '9876543223','',                'Gargi',      'Night',  1],
    ['Ganesh Pillai',      'Guard', '9876543224','',                'Ramanujan',  'Morning',1],
    ['Rajesh Tiwari',      'Guard', '9876543225','',                'Maitreyi',   'Night',  1],
  ];
  const insertWardens = db.transaction((rows) => rows.forEach(r => wardInsert.run(...r)));
  insertWardens(wardens);

  // Forum posts
  const forumInsert = db.prepare(
    'INSERT INTO FORUM_POST (title, content, created_at) VALUES (?, ?, ?)'
  );
  const posts = [
    ['Mess food timing change?',   'Has anyone heard about the mess timings changing next month? Breakfast was supposed to start at 7am but they opened at 7:45 today.',  '2026-03-28T08:12:00'],
    ['Study room lights issue',    'The study room on floor 2 has flickering tube lights for the past week. Admin please look into this.',                                '2026-03-29T22:05:00'],
    ['Lost umbrella',              'Lost a blue umbrella near the laundry area yesterday evening. If found please leave at reception.',                                   '2026-03-30T10:30:00'],
    ['Cricket match tomorrow!',    'Hostel vs Dept cricket match tomorrow at 4pm. Everyone come support!',                                                                '2026-03-31T15:00:00'],
    ['Water outage announcement',  'Water supply will be disrupted tomorrow 10am-2pm for maintenance. Please store water in advance.',                                    '2026-03-31T19:45:00'],
  ];
  const insertPosts = db.transaction((rows) => rows.forEach(r => forumInsert.run(...r)));
  insertPosts(posts);

  // Resources
  const resInsert = db.prepare(
    'INSERT INTO RESOURCE (category, name, phone, email, notes) VALUES (?, ?, ?, ?, ?)'
  );
  const resources = [
    ['Plumber',      'Ramakant Plumbing Services', '9988776655','ramakant@plumb.com',  'Available 8am-8pm, emergency: 24/7'],
    ['Electrician',  'Vijay Electricals',          '9988776600','vijay@elec.com',      'Licensed electrician, handles all wiring'],
    ['WiFi',         'CW Network Team',            '9988776611','wifi@cw.edu',         'Internal IT support ticket: helpdesk.cw.edu'],
    ['Authority',    'Chief Warden Office',        '9876543210','chiefwarden@cw.edu',  'Office hours: Mon-Sat 10am-5pm'],
    ['Authority',    'Dean of Students',           '9876543200','dean.students@cw.edu','For escalations requiring institutional intervention'],
    ['Other',        'Hostel Maintenance Desk',   '9876543230','maintenance@cw.edu',  'Log minor repairs and follow up'],
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
