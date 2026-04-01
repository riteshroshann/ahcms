/* ─────────────────────────────────────────────────────────────────
   Admin Rooms Page — Full Allocation Management
   Tabs:
     1. Room Listing    — 10-per-floor grid, hostel filter
     2. Add Student     — register new student, optional direct alloc
     3. Students        — list all students, edit, view allocation
     4. Direct Allocate — assign any student to any vacant room
     5. Booking Requests — approve / reject student-initiated requests
     6. Room Changes    — approve / reject room transfer requests
     7. All Allocations — full ledger with revoke
   ───────────────────────────────────────────────────────────────── */

import { api } from '../../api.js';
import { toast } from '../../components/toast.js';
import { getHostel, setHostel, onHostelChange } from '../../components/hostelStore.js';

// ── Utility helpers ───────────────────────────────────────────────
const esc = s => String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const today = () => new Date().toISOString().split('T')[0];
const HOSTELS = [
  'Senior MBBS boys hostel',
  'Senior MBBS girls hostel',
  'Sardha building : Block A (girls)',
  'Sardha building : Block B (boys)',
];

// ── Entry point ───────────────────────────────────────────────────
export async function renderAdminRooms(container) {
  async function load() {
    container.innerHTML = `<div class="page-loading">Loading…</div>`;
    try {
      const [rooms, requests, changeReqs, allocs, students] = await Promise.all([
        api.get('/rooms'),
        api.get('/rooms/booking-requests'),
        api.get('/rooms/change-requests'),
        api.get('/rooms/allocations'),
        api.get('/students'),
      ]);
      renderPage(container, { rooms, requests, changeReqs, allocs, students }, load);
    } catch(e) {
      container.innerHTML = `<div class="page-error">Failed to load: ${e.message}</div>`;
    }
  }
  onHostelChange(() => load());
  await load();
}

// ── Main renderer ─────────────────────────────────────────────────
function renderPage(container, data, reloadFn) {
  let { rooms, requests, changeReqs, allocs, students } = data;
  let tab          = 'rooms';
  let filterHostel = getHostel();

  const pendingReqs    = requests.filter(r => r.status === 'pending').length;
  const pendingChanges = changeReqs.filter(r => r.status === 'pending').length;

  container.innerHTML = `
    <style>
      /* ── Room corridor layout ── */
      .floor-corridor {
        display: flex;
        flex-direction: column;
        gap: 3px;
        margin-bottom: var(--space-5);
      }
      .corridor-row {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px;
      }
      .corridor-strip {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 3px 0;
      }
      .corridor-strip-line { flex:1; height:1px; background:var(--border-subtle); }
      .corridor-strip-label { font-size:9px; letter-spacing:.1em; color:var(--text-tertiary); text-transform:uppercase; white-space:nowrap; }
      /* ── Room cells ── */
      .room-cell {
        border-radius:8px; display:flex; flex-direction:column;
        align-items:center; justify-content:center;
        padding: 10px 4px 8px;
        font-size:10px; font-weight:600; line-height:1.3; text-align:center;
        border:1px solid transparent; transition:transform .12s, box-shadow .12s;
        cursor:default;
      }
      .room-cell:hover { transform:translateY(-2px); box-shadow:0 4px 12px rgba(0,0,0,.3); z-index:1; }
      .room-cell.vacant  { background:color-mix(in srgb,var(--accent-green) 10%,transparent); border-color:color-mix(in srgb,var(--accent-green) 25%,transparent); color:var(--accent-green); }
      .room-cell.partial { background:color-mix(in srgb,var(--accent-amber) 10%,transparent); border-color:color-mix(in srgb,var(--accent-amber) 25%,transparent); color:var(--accent-amber); }
      .room-cell.full    { background:color-mix(in srgb,var(--accent-red)   10%,transparent); border-color:color-mix(in srgb,var(--accent-red)   25%,transparent); color:var(--accent-red); opacity:.7; }
      .rc-id  { font-family:var(--font-mono); font-size:9px; opacity:.75; }
      /* ── Minimal tabs ── */
      #room-tabs .cat-tab {
        background: none;
        border: none;
        border-bottom: 2px solid transparent;
        border-radius: 0;
        padding: 8px 4px;
        font-size: var(--text-sm);
        color: var(--text-tertiary);
        cursor: pointer;
        transition: color .15s, border-color .15s;
        font-weight: 500;
      }
      #room-tabs .cat-tab:hover  { color: var(--text-primary); }
      #room-tabs .cat-tab.active { color: var(--text-primary); border-bottom-color: var(--text-primary); }
      .floor-label { font-size:var(--text-xs); font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:var(--text-tertiary); margin:var(--space-5) 0 var(--space-3); }
      .legend-dot { width:8px; height:8px; border-radius:50%; display:inline-block; }
      .alloc-tab-badge { background:var(--accent-amber); color:#000; border-radius:999px; font-size:10px; font-weight:700; padding:1px 6px; margin-left:4px; }
    </style>

    <div class="page-enter" id="admin-rooms-page">
      <!-- Header -->
      <div class="page-header" style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:var(--space-4);">
        <div>
          <h2>Room Management</h2>
          <p>Full allocation control — direct assign, booking requests, and student room changes.</p>
        </div>
        <div class="hostel-filter-bar">
          <label class="hostel-filter-label">Hostel</label>
          <select class="hostel-filter-select" id="room-hostel-filter">
            <option value="">All Hostels</option>
            ${HOSTELS.map(h => `<option value="${h}" ${h === filterHostel ? 'selected' : ''}>${h}</option>`).join('')}
          </select>
        </div>
      </div>

      <!-- Tabs -->
      <div id="room-tabs" style="display:flex; gap:var(--space-5); margin-bottom:var(--space-6); border-bottom:1px solid var(--border-subtle); flex-wrap:wrap;">
        <button class="cat-tab active" data-tab="rooms">Room Grid</button>
        <button class="cat-tab" data-tab="add-student">Add Student</button>
        <button class="cat-tab" data-tab="students">Students (${students.length})</button>
        <button class="cat-tab" data-tab="allocate">Direct Allocate</button>
        <button class="cat-tab" data-tab="requests">Booking Requests${pendingReqs > 0 ? `<span class="alloc-tab-badge">${pendingReqs}</span>` : ''}</button>
        <button class="cat-tab" data-tab="changes">Room Changes${pendingChanges > 0 ? `<span class="alloc-tab-badge">${pendingChanges}</span>` : ''}</button>
        <button class="cat-tab" data-tab="allocs">Allocations</button>
      </div>

      <!-- Panels -->
      <div id="panel-rooms"></div>
      <div id="panel-add-student"  style="display:none;"></div>
      <div id="panel-students"     style="display:none;"></div>
      <div id="panel-allocate"     style="display:none;"></div>
      <div id="panel-requests"     style="display:none;"></div>
      <div id="panel-changes"      style="display:none;"></div>
      <div id="panel-allocs"       style="display:none;"></div>
    </div>
  `;

  // ════════════════════════════════
  // PANEL 1 — Room Grid (10/floor)
  // ════════════════════════════════
  function renderRoomGrid() {
    const filtered = filterHostel ? rooms.filter(r => r.hostel === filterHostel) : rooms;

    // Group by hostel → floor → rooms
    const byHostel = {};
    filtered.forEach(r => {
      if (!byHostel[r.hostel]) byHostel[r.hostel] = {};
      if (!byHostel[r.hostel][r.floor]) byHostel[r.hostel][r.floor] = [];
      byHostel[r.hostel][r.floor].push(r);
    });

    const vacant  = filtered.filter(r => r.current_occupancy === 0).length;
    const partial = filtered.filter(r => r.current_occupancy > 0 && r.current_occupancy < r.capacity).length;
    const full    = filtered.filter(r => r.current_occupancy >= r.capacity).length;

    let html = `
      <div style="display:flex; align-items:center; gap:var(--space-5); margin-bottom:var(--space-5);">
        <span style="display:flex; align-items:center; gap:6px; font-size:var(--text-xs); color:var(--text-secondary);"><span class="legend-dot" style="background:var(--accent-green);"></span>Vacant (${vacant})</span>
        <span style="display:flex; align-items:center; gap:6px; font-size:var(--text-xs); color:var(--text-secondary);"><span class="legend-dot" style="background:var(--accent-amber);"></span>Partial (${partial})</span>
        <span style="display:flex; align-items:center; gap:6px; font-size:var(--text-xs); color:var(--text-secondary);"><span class="legend-dot" style="background:var(--accent-red);"></span>Full (${full})</span>
      </div>
    `;

    for (const hostel of Object.keys(byHostel).sort()) {
      html += `<div style="font-size:var(--text-sm); font-weight:600; color:var(--text-primary); margin:var(--space-6) 0 var(--space-3); padding-bottom:var(--space-2); border-bottom:1px solid var(--border-subtle);">${hostel}</div>`;
      for (const floor of Object.keys(byHostel[hostel]).sort((a,b) => +a - +b)) {
        const floorRooms = byHostel[hostel][floor].sort((a,b) => a.room_id.localeCompare(b.room_id));
        // Split into two rows of 5 — facing each other across a corridor
        const sideA = floorRooms.slice(0, 5);  // rooms 01-05 top row
        const sideB = floorRooms.slice(5, 10); // rooms 06-10 bottom row (facing top)
        const roomCell = r => {
          const pct   = r.capacity > 0 ? r.current_occupancy / r.capacity : 0;
          const state = pct === 0 ? 'vacant' : pct < 1 ? 'partial' : 'full';
          return `<div class="room-cell ${state}" title="${r.room_id} — ${r.type} (${r.current_occupancy}/${r.capacity})">
            <div class="rc-id">${r.room_id}</div>
            <div style="font-size:9px; opacity:.55;">${r.current_occupancy}/${r.capacity}</div>
          </div>`;
        };
        html += `
          <div class="floor-label">Floor ${floor}</div>
          <div class="floor-corridor">
            <div class="corridor-row">${sideA.map(roomCell).join('')}</div>
            <div class="corridor-strip">
              <div class="corridor-strip-line"></div>
              <div class="corridor-strip-label">corridor</div>
              <div class="corridor-strip-line"></div>
            </div>
            <div class="corridor-row">${sideB.map(roomCell).join('')}</div>
          </div>`;
      }
    }
    if (!Object.keys(byHostel).length) {
      html += `<p style="color:var(--text-tertiary); padding:var(--space-8); text-align:center;">No rooms match the current filter.</p>`;
    }
    document.getElementById('panel-rooms').innerHTML = html;
  }

  // ════════════════════════════════
  // PANEL 2 — Add Student
  // ════════════════════════════════
  function renderAddStudent() {
    document.getElementById('panel-add-student').innerHTML = `
      <div class="form-section" style="max-width:640px;">
        <div class="form-section-title">Register New Student</div>
        <p style="font-size:var(--text-sm); color:var(--text-secondary); margin-bottom:var(--space-5);">
          Default login password is <code style="background:var(--bg-elevated); padding:2px 6px; border-radius:4px;">Student@123</code>. Communicate to student to change on first login.
        </p>
        <div id="add-student-msg"></div>
        <form id="add-student-form">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-4);">
            <div class="form-group">
              <label class="form-label">Roll Number *</label>
              <input class="form-input" name="roll_no" placeholder="DL.AI.U4AID24200" required />
            </div>
            <div class="form-group">
              <label class="form-label">Full Name *</label>
              <input class="form-input" name="name" placeholder="Priya Mehta" required />
            </div>
            <div class="form-group">
              <label class="form-label">Email *</label>
              <input class="form-input" type="email" name="email" placeholder="priya@ahcms.edu.in" required />
            </div>
            <div class="form-group">
              <label class="form-label">Gender *</label>
              <select class="form-select" name="gender" required>
                <option value="">Select</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Course *</label>
              <select class="form-select" name="course" required>
                <option value="">Select</option>
                <option value="MBBS">MBBS</option>
                <option value="Nursing">Nursing</option>
                <option value="AHS">AHS</option>
                <option value="BDS">BDS</option>
                <option value="MD">MD</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Year (current) *</label>
              <select class="form-select" name="year" required>
                <option value="">Select</option>
                ${[1,2,3,4,5].map(y => `<option value="${y}">Year ${y}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Admission Year *</label>
              <input class="form-input" type="number" name="adm_year" min="2015" max="2030" placeholder="2024" required />
            </div>
            <div class="form-group">
              <label class="form-label">Pass-out Year *</label>
              <input class="form-input" type="number" name="pass_year" min="2015" max="2035" placeholder="2029" required />
            </div>
            <div class="form-group" style="grid-column:span 2;">
              <label class="form-label">Hostel *</label>
              <select class="form-select" name="hostel" required>
                <option value="">Select Hostel</option>
                ${HOSTELS.map(h => `<option value="${h}">${h}</option>`).join('')}
              </select>
            </div>
            <div class="form-group" style="grid-column:span 2;">
              <label class="form-label">Home Address</label>
              <input class="form-input" name="address" placeholder="City, State" />
            </div>
          </div>

          <hr style="border-color:var(--border-subtle); margin:var(--space-5) 0;" />
          <div style="display:flex; align-items:center; gap:var(--space-3); margin-bottom:var(--space-4);">
            <input type="checkbox" id="also-allocate" style="width:16px; height:16px;" />
            <label for="also-allocate" style="font-size:var(--text-sm); font-weight:500; cursor:pointer;">Also assign a room immediately</label>
          </div>
          <div id="alloc-section" style="display:none; margin-bottom:var(--space-4);">
            <label class="form-label">Assign Room</label>
            <select class="form-select" name="alloc_room" id="alloc-room-select">
              <option value="">— pick a vacant room —</option>
              ${rooms.filter(r => r.current_occupancy < r.capacity)
                .sort((a,b) => a.hostel.localeCompare(b.hostel) || a.floor - b.floor || a.room_id.localeCompare(b.room_id))
                .map(r => `<option value="${r.room_id}">[${r.type}] ${r.room_id} — ${r.hostel}, Floor ${r.floor} (${r.current_occupancy}/${r.capacity})</option>`)
                .join('')}
            </select>
          </div>

          <button type="submit" class="btn btn-primary" style="width:100%;">Register Student</button>
        </form>
      </div>
    `;

    document.getElementById('also-allocate').addEventListener('change', e => {
      document.getElementById('alloc-section').style.display = e.target.checked ? '' : 'none';
    });

    document.getElementById('add-student-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd  = new FormData(e.target);
      const payload = Object.fromEntries(fd.entries());
      const msgEl = document.getElementById('add-student-msg');
      msgEl.innerHTML = '';
      const btn = e.target.querySelector('[type=submit]');
      btn.disabled = true; btn.textContent = 'Registering…';

      try {
        const created = await api.post('/students', payload);
        // Optionally also allocate
        if (payload.also_allocate === 'on' && payload.alloc_room) {
          await api.post('/rooms/direct-allocate', {
            student_id: created.student_id,
            room_id: payload.alloc_room,
          });
        }
        toast(`Student ${created.name} (${created.student_id}) registered!`, 'success');
        msgEl.innerHTML = `<div style="background:color-mix(in srgb,var(--accent-green) 12%,transparent); border:1px solid color-mix(in srgb,var(--accent-green) 30%,transparent); border-radius:8px; padding:var(--space-3) var(--space-4); font-size:var(--text-sm); color:var(--accent-green); margin-bottom:var(--space-4);">
          ✓ Student registered. ID: <strong>${created.student_id}</strong>. Login: <strong>${created.default_password}</strong>
        </div>`;
        e.target.reset();
        reloadFn(); // refresh global data
      } catch(err) {
        msgEl.innerHTML = `<div style="background:color-mix(in srgb,var(--accent-red) 12%,transparent); border:1px solid color-mix(in srgb,var(--accent-red) 30%,transparent); border-radius:8px; padding:var(--space-3) var(--space-4); font-size:var(--text-sm); color:var(--accent-red); margin-bottom:var(--space-4);">${err.message}</div>`;
      } finally {
        btn.disabled = false; btn.textContent = 'Register Student';
      }
    });
  }

  // ════════════════════════════════
  // PANEL 3 — Students List
  // ════════════════════════════════
  function renderStudents() {
    const filtered = filterHostel ? students.filter(s => s.hostel === filterHostel) : students;
    const el = document.getElementById('panel-students');
    if (!filtered.length) {
      el.innerHTML = `<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No students${filterHostel ? ' in this hostel' : ''}.</p>`;
      return;
    }
    el.innerHTML = `
      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">Students (${filtered.length})</div>
        </div>
        <table>
          <thead>
            <tr><th>ID</th><th>Roll No</th><th>Name</th><th>Gender</th><th>Course / Yr</th><th>Hostel</th><th>Room</th><th>Status</th></tr>
          </thead>
          <tbody>
            ${filtered.map(s => `
              <tr>
                <td class="cell-mono" style="color:var(--text-tertiary);">${s.student_id}</td>
                <td class="cell-mono">${s.roll_no}</td>
                <td style="font-weight:500;">${esc(s.name)}</td>
                <td>${s.gender === 'M' ? 'Male' : s.gender === 'F' ? 'Female' : s.gender}</td>
                <td>${s.course} / Yr ${s.year}</td>
                <td style="font-size:var(--text-xs);">${esc(s.hostel)}</td>
                <td class="cell-mono">${s.alloc_room || '<span style="color:var(--text-tertiary);">—</span>'}</td>
                <td><span class="badge ${s.alloc_room ? 'badge-in-progress' : 'badge-open'}">${s.alloc_room ? 'Allocated' : 'Unallocated'}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // ════════════════════════════════
  // PANEL 4 — Direct Allocate
  // ════════════════════════════════
  function renderDirectAllocate() {
    const unallocated = students.filter(s => !s.alloc_room);
    // Filter rooms by active hostel filter so only relevant rooms appear
    const vacantRooms = rooms
      .filter(r => r.current_occupancy < r.capacity && (!filterHostel || r.hostel === filterHostel))
      .sort((a,b) => a.hostel.localeCompare(b.hostel) || a.floor - b.floor || a.room_id.localeCompare(b.room_id));

    document.getElementById('panel-allocate').innerHTML = `
      <div class="form-section" style="max-width:560px;">
        <div class="form-section-title">Direct Room Allocation</div>
        <p style="font-size:var(--text-sm); color:var(--text-secondary); margin-bottom:var(--space-5);">
          Assign any unallocated student to any room that has available capacity. Transaction-safe: capacity is checked at the moment of assignment.
        </p>
        <div id="alloc-msg"></div>
        <form id="direct-alloc-form">
          <div class="form-group">
            <label class="form-label">Student *</label>
            <select class="form-select" name="student_id" id="da-student" required>
              <option value="">— select student —</option>
              ${unallocated.map(s => `<option value="${s.student_id}">${s.name} (${s.roll_no}) — ${s.course} Yr ${s.year}</option>`).join('')}
            </select>
            ${students.filter(s => s.alloc_room).length > 0
              ? `<div style="font-size:var(--text-xs); color:var(--text-tertiary); margin-top:4px;">${students.filter(s => s.alloc_room).length} student(s) already allocated not shown.</div>`
              : ''}
          </div>
          <div class="form-group">
            <label class="form-label">Room *</label>
            <select class="form-select" name="room_id" id="da-room" required>
              <option value="">— select room —</option>
              ${vacantRooms.map(r => `<option value="${r.room_id}">[${r.type[0]}] ${r.room_id} · ${r.hostel} · Floor ${r.floor} · ${r.current_occupancy}/${r.capacity} occupied</option>`).join('')}
            </select>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-4);">
            <div class="form-group">
              <label class="form-label">From Date</label>
              <input class="form-input" type="date" name="from_date" value="${today()}" />
            </div>
            <div class="form-group">
              <label class="form-label">To Date</label>
              <input class="form-input" type="date" name="to_date" value="${new Date().getFullYear() + 1}-05-31" />
            </div>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%; margin-top:var(--space-2);">Allocate Room</button>
        </form>
      </div>
    `;

    document.getElementById('direct-alloc-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const btn = e.target.querySelector('[type=submit]');
      btn.disabled = true; btn.textContent = 'Allocating…';
      const msgEl = document.getElementById('alloc-msg');
      msgEl.innerHTML = '';
      try {
        await api.post('/rooms/direct-allocate', Object.fromEntries(fd.entries()));
        toast('Room allocated successfully!', 'success');
        await reloadFn();
      } catch(err) {
        msgEl.innerHTML = `<div style="color:var(--accent-red); font-size:var(--text-sm); margin-bottom:var(--space-3); padding:var(--space-3); background:color-mix(in srgb,var(--accent-red) 10%,transparent); border-radius:8px;">${err.message}</div>`;
        btn.disabled = false; btn.textContent = 'Allocate Room';
      }
    });
  }

  // ════════════════════════════════
  // PANEL 5 — Booking Requests
  // ════════════════════════════════
  function renderBookingRequests() {
    const filtered = filterHostel
      ? requests.filter(r => r.room_hostel === filterHostel)
      : requests;
    const el = document.getElementById('panel-requests');
    if (!filtered.length) {
      el.innerHTML = `<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No booking requests${filterHostel ? ' for this hostel' : ''}.</p>`;
      return;
    }
    el.innerHTML = `
      <div class="table-container">
        <table>
          <thead><tr><th>Student</th><th>Room</th><th>Hostel</th><th>Type</th><th>Cap</th><th>Preferences</th><th>Status</th><th>Date</th><th>Action</th></tr></thead>
          <tbody>
            ${filtered.map(r => `
              <tr>
                <td><div style="font-weight:500;">${esc(r.student_name)}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${r.roll_no}</div></td>
                <td class="cell-mono">${r.room_id}</td>
                <td style="font-size:var(--text-xs);">${esc(r.room_hostel || r.hostel)}</td>
                <td>${r.type}</td>
                <td class="cell-mono">${r.current_occupancy}/${r.capacity}</td>
                <td style="font-size:var(--text-xs); max-width:120px;">${esc(r.preferences || '—')}</td>
                <td><span class="badge badge-${r.status}">${r.status}</span></td>
                <td class="cell-mono">${r.created_at?.slice(0,10)}</td>
                <td>${r.status === 'pending' ? `
                  <div style="display:flex; gap:4px;">
                    <button class="btn btn-sm btn-primary" data-req="${r.request_id}" data-action="approved">Approve</button>
                    <button class="btn btn-sm btn-secondary" style="color:var(--accent-red);" data-req="${r.request_id}" data-action="rejected">Reject</button>
                  </div>` : `<span style="color:var(--text-tertiary); font-size:var(--text-xs);">${r.admin_note || r.status}</span>`}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
    el.querySelectorAll('[data-req]').forEach(btn => {
      btn.addEventListener('click', async () => {
        btn.disabled = true;
        try {
          await api.patch(`/rooms/booking-requests/${btn.dataset.req}`, { status: btn.dataset.action });
          toast(`Request ${btn.dataset.action}.`, 'success');
          await reloadFn();
        } catch(err) { toast(err.message, 'error'); btn.disabled = false; }
      });
    });
  }

  // ════════════════════════════════
  // PANEL 6 — Room Change Requests
  // ════════════════════════════════
  function renderChangeRequests() {
    const filtered = filterHostel
      ? changeReqs.filter(r => r.from_hostel === filterHostel || r.to_hostel === filterHostel)
      : changeReqs;
    const el = document.getElementById('panel-changes');
    if (!filtered.length) {
      el.innerHTML = `<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No room change requests${filterHostel ? ' involving this hostel' : ''}.</p>`;
      return;
    }
    el.innerHTML = `
      <div class="table-container">
        <table>
          <thead><tr><th>Student</th><th>From Room</th><th>To Room</th><th>To Hostel</th><th>Cap</th><th>Reason</th><th>Status</th><th>Date</th><th>Action</th></tr></thead>
          <tbody>
            ${filtered.map(r => `
              <tr>
                <td><div style="font-weight:500;">${esc(r.student_name)}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${r.roll_no}</div></td>
                <td class="cell-mono">${r.from_room_id}<div style="font-size:9px; color:var(--text-tertiary);">${r.from_type}</div></td>
                <td class="cell-mono">${r.to_room_id}<div style="font-size:9px; color:var(--text-tertiary);">${r.to_type}</div></td>
                <td style="font-size:var(--text-xs);">${esc(r.to_hostel)}</td>
                <td class="cell-mono">${r.to_occupancy}/${r.to_capacity}</td>
                <td style="max-width:160px; font-size:var(--text-xs);" title="${esc(r.reason)}">${esc(r.reason).slice(0,60)}${r.reason.length > 60 ? '…' : ''}</td>
                <td><span class="badge badge-${r.status === 'pending' ? 'open' : r.status === 'approved' ? 'in-progress' : 'resolved'}">${r.status}</span></td>
                <td class="cell-mono">${r.created_at?.slice(0,10)}</td>
                <td>${r.status === 'pending' ? `
                  <div style="display:flex; gap:4px;">
                    <button class="btn btn-sm btn-primary" data-cr="${r.change_id}" data-action="approved">Approve</button>
                    <button class="btn btn-sm btn-secondary" style="color:var(--accent-red);" data-cr="${r.change_id}" data-action="rejected">Reject</button>
                  </div>` : `<span style="color:var(--text-tertiary); font-size:var(--text-xs);">${r.admin_note || r.status}</span>`}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
    el.querySelectorAll('[data-cr]').forEach(btn => {
      btn.addEventListener('click', async () => {
        btn.disabled = true;
        try {
          await api.patch(`/rooms/change-requests/${btn.dataset.cr}`, { status: btn.dataset.action });
          toast(`Room change ${btn.dataset.action}.`, 'success');
          await reloadFn();
        } catch(err) { toast(err.message, 'error'); btn.disabled = false; }
      });
    });
  }

  // ════════════════════════════════
  // PANEL 7 — All Allocations
  // ════════════════════════════════
  function renderAllocations() {
    const filtered = filterHostel ? allocs.filter(a => a.hostel === filterHostel) : allocs;
    const el = document.getElementById('panel-allocs');
    if (!filtered.length) {
      el.innerHTML = `<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No allocations${filterHostel ? ' for this hostel' : ''}.</p>`;
      return;
    }
    el.innerHTML = `
      <div class="table-container">
        <table>
          <thead><tr><th>ID</th><th>Student</th><th>Room</th><th>Hostel</th><th>Type/Floor</th><th>From</th><th>To</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            ${filtered.map(a => `
              <tr>
                <td class="cell-mono" style="font-size:10px; color:var(--text-tertiary);">${a.allocation_id.slice(0,10)}</td>
                <td><div style="font-weight:500;">${esc(a.student_name)}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${a.roll_no}</div></td>
                <td class="cell-mono">${a.room_id}</td>
                <td style="font-size:var(--text-xs);">${esc(a.hostel)}</td>
                <td style="font-size:var(--text-xs);">${a.type} · Fl ${a.floor}</td>
                <td class="cell-mono">${a.from_date}</td>
                <td class="cell-mono">${a.to_date}</td>
                <td><span class="badge badge-${a.status === 'active' ? 'in-progress' : 'resolved'}">${a.status}</span></td>
                <td>${a.status === 'active' ? `
                  <button class="btn btn-sm btn-secondary" style="color:var(--accent-red);" data-alloc="${a.allocation_id}">Revoke</button>
                ` : '—'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
    el.querySelectorAll('[data-alloc]').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm('Revoke this allocation? The student will lose their room assignment.')) return;
        btn.disabled = true;
        try {
          await api.delete(`/rooms/allocations/${btn.dataset.alloc}`);
          toast('Allocation revoked.', 'success');
          await reloadFn();
        } catch(err) { toast(err.message, 'error'); btn.disabled = false; }
      });
    });
  }

  // ── Hostel filter ─────────────────────────────────────────────
  document.getElementById('room-hostel-filter').addEventListener('change', e => {
    filterHostel = e.target.value;
    setHostel(filterHostel);
    renderAll();
  });

  // ── Tab switching ─────────────────────────────────────────────
  function showTab(t) {
    tab = t;
    document.querySelectorAll('[data-tab]').forEach(b => b.classList.toggle('active', b.dataset.tab === t));
    ['rooms','add-student','students','allocate','requests','changes','allocs'].forEach(id => {
      const el = document.getElementById(`panel-${id}`);
      if (el) el.style.display = id === t ? '' : 'none';
    });
    renderAll();
  }

  container.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => showTab(btn.dataset.tab));
  });

  function renderAll() {
    if (tab === 'rooms')       renderRoomGrid();
    if (tab === 'add-student') renderAddStudent();
    if (tab === 'students')    renderStudents();
    if (tab === 'allocate')    renderDirectAllocate();
    if (tab === 'requests')    renderBookingRequests();
    if (tab === 'changes')     renderChangeRequests();
    if (tab === 'allocs')      renderAllocations();
  }

  renderAll();
  requestAnimationFrame(() =>
    document.getElementById('admin-rooms-page')?.classList.replace('page-enter', 'page-active')
  );
}
