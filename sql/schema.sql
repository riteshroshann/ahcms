-- ═══════════════════════════════════════════════
-- Hostel Room Allocation & Complaint Management
-- Schema + Queries
-- ═══════════════════════════════════════════════

-- ── DDL ──

CREATE TABLE STUDENT (
    student_id   VARCHAR(10) PRIMARY KEY,
    name         VARCHAR(100) NOT NULL,
    gender       CHAR(1) CHECK (gender IN ('M', 'F')),
    year         INT CHECK (year BETWEEN 1 AND 5),
    hostel       VARCHAR(50) NOT NULL
);

CREATE TABLE ROOM (
    room_id           VARCHAR(10) PRIMARY KEY,
    hostel            VARCHAR(50) NOT NULL,
    floor             INT NOT NULL,
    type              VARCHAR(10) CHECK (type IN ('Single', 'Double', 'Triple')),
    capacity          INT NOT NULL CHECK (capacity > 0),
    current_occupancy INT DEFAULT 0 CHECK (current_occupancy >= 0)
);

CREATE TABLE ALLOCATION (
    allocation_id VARCHAR(10) PRIMARY KEY,
    student_id    VARCHAR(10) NOT NULL REFERENCES STUDENT(student_id),
    room_id       VARCHAR(10) NOT NULL REFERENCES ROOM(room_id),
    from_date     DATE NOT NULL,
    to_date       DATE NOT NULL,
    status        VARCHAR(10) CHECK (status IN ('active', 'expired', 'pending')),
    CHECK (to_date > from_date)
);

CREATE TABLE COMPLAINT (
    complaint_id VARCHAR(10) PRIMARY KEY,
    student_id   VARCHAR(10) NOT NULL REFERENCES STUDENT(student_id),
    room_id      VARCHAR(10) NOT NULL REFERENCES ROOM(room_id),
    category     VARCHAR(20) CHECK (category IN ('Water', 'Electricity', 'Cleanliness')),
    description  TEXT NOT NULL,
    date         DATE NOT NULL DEFAULT CURRENT_DATE,
    status       VARCHAR(15) CHECK (status IN ('open', 'in-progress', 'resolved'))
);


-- ══════════════════════════════════════
-- QUERY 1: List vacant rooms by hostel and type
-- ══════════════════════════════════════

SELECT room_id, hostel, floor, type, capacity, current_occupancy
FROM   ROOM
WHERE  current_occupancy < capacity
  AND  hostel = 'Aryabhatta'
  AND  type   = 'Double'
ORDER BY floor, room_id;


-- ══════════════════════════════════════
-- QUERY 2: Students with multiple unresolved complaints
-- ══════════════════════════════════════

SELECT s.student_id, s.name, s.hostel, COUNT(*) AS unresolved_count
FROM   STUDENT s
JOIN   COMPLAINT c ON s.student_id = c.student_id
WHERE  c.status IN ('open', 'in-progress')
GROUP BY s.student_id, s.name, s.hostel
HAVING COUNT(*) > 1
ORDER BY unresolved_count DESC;


-- ══════════════════════════════════════
-- QUERY 3: Transaction — allocate room only if capacity not exceeded
-- ══════════════════════════════════════

BEGIN TRANSACTION;

-- Step 1: Check capacity (with row-level lock)
SELECT current_occupancy, capacity
FROM   ROOM
WHERE  room_id = 'A201'
FOR UPDATE;

-- Step 2: Only proceed if current_occupancy < capacity
INSERT INTO ALLOCATION (allocation_id, student_id, room_id, from_date, to_date, status)
VALUES ('AL011', 'STU006', 'A201', CURRENT_DATE, '2027-05-31', 'active');

-- Step 3: Increment occupancy
UPDATE ROOM
SET    current_occupancy = current_occupancy + 1
WHERE  room_id = 'A201'
  AND  current_occupancy < capacity;

-- Verify the update affected exactly 1 row, else ROLLBACK
COMMIT;


-- ══════════════════════════════════════
-- Sample DML — Seed data (subset)
-- ══════════════════════════════════════

INSERT INTO STUDENT VALUES ('STU001', 'Arjun Mehta',      'M', 2, 'Aryabhatta');
INSERT INTO STUDENT VALUES ('STU002', 'Priya Sharma',     'F', 3, 'Gargi');
INSERT INTO STUDENT VALUES ('STU003', 'Rahul Verma',      'M', 1, 'Aryabhatta');
INSERT INTO STUDENT VALUES ('STU004', 'Sneha Iyer',       'F', 2, 'Gargi');
INSERT INTO STUDENT VALUES ('STU005', 'Vikram Singh',     'M', 4, 'Ramanujan');

INSERT INTO ROOM VALUES ('A101', 'Aryabhatta', 1, 'Single',  1, 1);
INSERT INTO ROOM VALUES ('A102', 'Aryabhatta', 1, 'Double',  2, 1);
INSERT INTO ROOM VALUES ('A201', 'Aryabhatta', 2, 'Single',  1, 0);
INSERT INTO ROOM VALUES ('G101', 'Gargi',      1, 'Single',  1, 1);
INSERT INTO ROOM VALUES ('R101', 'Ramanujan',  1, 'Single',  1, 1);

INSERT INTO ALLOCATION VALUES ('AL001', 'STU001', 'A101', '2025-08-01', '2026-05-31', 'active');
INSERT INTO ALLOCATION VALUES ('AL002', 'STU002', 'G101', '2025-08-01', '2026-05-31', 'active');

INSERT INTO COMPLAINT VALUES ('CMP001', 'STU001', 'A101', 'Electricity', 'Frequent power outages.',          '2026-02-15', 'resolved');
INSERT INTO COMPLAINT VALUES ('CMP002', 'STU002', 'G101', 'Water',       'No hot water in the mornings.',    '2026-03-01', 'in-progress');
INSERT INTO COMPLAINT VALUES ('CMP003', 'STU003', 'A102', 'Cleanliness', 'Washroom not cleaned for 2 days.', '2026-03-05', 'open');
