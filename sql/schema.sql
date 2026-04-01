-- ═══════════════════════════════════════════════════════════════
-- CW Hostel Management System — Full Schema
-- SQLite dialect (better-sqlite3)
-- ═══════════════════════════════════════════════════════════════

PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

-- ── Admins ──────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ADMIN (
    admin_id      INTEGER PRIMARY KEY AUTOINCREMENT,
    name          TEXT NOT NULL,
    email         TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at    TEXT NOT NULL DEFAULT (datetime('now'))
);

-- ── Students ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS STUDENT (
    student_id    TEXT PRIMARY KEY,   -- e.g. "STU001"
    roll_no       TEXT NOT NULL UNIQUE,
    name          TEXT NOT NULL,
    email         TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    gender        TEXT CHECK (gender IN ('M', 'F', 'Other')),
    adm_year      INTEGER NOT NULL,
    pass_year     INTEGER NOT NULL,
    course        TEXT NOT NULL,
    address       TEXT,
    hostel        TEXT NOT NULL,
    year          INTEGER CHECK (year BETWEEN 1 AND 5),
    created_at    TEXT NOT NULL DEFAULT (datetime('now'))
);

-- ── Rooms ───────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ROOM (
    room_id           TEXT PRIMARY KEY,   -- e.g. "A101"
    hostel            TEXT NOT NULL,
    floor             INTEGER NOT NULL,
    type              TEXT CHECK (type IN ('Single', 'Double', 'Triple')),
    capacity          INTEGER NOT NULL CHECK (capacity > 0),
    current_occupancy INTEGER NOT NULL DEFAULT 0 CHECK (current_occupancy >= 0)
);

-- ── Allocations ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ALLOCATION (
    allocation_id TEXT PRIMARY KEY,
    student_id    TEXT NOT NULL REFERENCES STUDENT(student_id),
    room_id       TEXT NOT NULL REFERENCES ROOM(room_id),
    from_date     TEXT NOT NULL,
    to_date       TEXT NOT NULL,
    status        TEXT CHECK (status IN ('active', 'expired', 'pending')) DEFAULT 'active',
    CHECK (to_date > from_date)
);

-- ── Room Booking Requests ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ROOM_BOOKING_REQUEST (
    request_id    INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id    TEXT NOT NULL REFERENCES STUDENT(student_id),
    room_id       TEXT NOT NULL REFERENCES ROOM(room_id),
    preferences   TEXT,
    status        TEXT CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
    admin_note    TEXT,
    created_at    TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at    TEXT NOT NULL DEFAULT (datetime('now'))
);

-- ── Complaints ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS COMPLAINT (
    complaint_id  INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id    TEXT NOT NULL REFERENCES STUDENT(student_id),
    room_id       TEXT REFERENCES ROOM(room_id),
    category      TEXT CHECK (category IN ('Plumbing','Electricity','WiFi','Cleanliness','Carpentry','Other')) NOT NULL,
    description   TEXT NOT NULL,
    photo_base64  TEXT,           -- optional attached photo
    date          TEXT NOT NULL DEFAULT (date('now')),
    status        TEXT CHECK (status IN ('open','in-progress','resolved')) DEFAULT 'open',
    admin_note    TEXT,
    updated_at    TEXT NOT NULL DEFAULT (datetime('now'))
);

-- ── Wardens / Guards ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS WARDEN (
    warden_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT NOT NULL,
    role        TEXT CHECK (role IN ('Warden','Guard')) NOT NULL,
    phone       TEXT,
    email       TEXT,
    hostel      TEXT,
    shift       TEXT CHECK (shift IN ('Morning','Evening','Night','All-day')),
    on_duty     INTEGER NOT NULL DEFAULT 1   -- 1 = currently on duty
);

-- ── Anonymous Forum Posts ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS FORUM_POST (
    post_id     INTEGER PRIMARY KEY AUTOINCREMENT,
    title       TEXT NOT NULL,
    content     TEXT NOT NULL,
    created_at  TEXT NOT NULL DEFAULT (datetime('now'))
    -- deliberately no student_id: truly anonymous
);

-- ── Resources (Admin Contact Directory) ─────────────────────────
CREATE TABLE IF NOT EXISTS RESOURCE (
    resource_id  INTEGER PRIMARY KEY AUTOINCREMENT,
    category     TEXT CHECK (category IN ('Plumber','Electrician','WiFi','Authority','Other')) NOT NULL,
    name         TEXT NOT NULL,
    phone        TEXT,
    email        TEXT,
    notes        TEXT,
    created_at   TEXT NOT NULL DEFAULT (datetime('now'))
);
