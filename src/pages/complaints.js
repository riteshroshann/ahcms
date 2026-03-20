/* ─────────────────────────────────
   Complaints Page
   Form + status tracking table
   ───────────────────────────────── */

import { getComplaints, getStudents, getRooms, addComplaint, updateComplaintStatus, getStudentById } from '../db.js';
import { toast } from '../components/toast.js';

const CATEGORIES = ['Water', 'Electricity', 'Cleanliness'];
const STATUSES = ['open', 'in-progress', 'resolved'];

export function renderComplaints(container) {
  const students = getStudents();

  container.innerHTML = `
    <div class="page-enter" id="complaints-page">
      <div class="page-header">
        <h2>Complaints</h2>
        <p>Lodge a new complaint or track existing ones. Statuses are color-coded for quick scanning.</p>
      </div>

      <!-- Complaint Form -->
      <div class="form-section" style="margin-bottom: var(--space-8);">
        <div class="form-section-title">Lodge a Complaint</div>
        <form id="complaint-form" novalidate>
          <div class="form-grid">

            <div class="form-group">
              <label class="form-label" for="cmp-student">Student</label>
              <select class="form-select" id="cmp-student" required>
                <option value="">Select student…</option>
                ${students.map(s => `<option value="${s.student_id}">${s.name} (${s.student_id})</option>`).join('')}
              </select>
              <div class="form-error" id="err-cmp-student">Student is required</div>
            </div>

            <div class="form-group">
              <label class="form-label" for="cmp-room">Room</label>
              <select class="form-select" id="cmp-room" required>
                <option value="">Select room…</option>
              </select>
              <div class="form-error" id="err-cmp-room">Room is required</div>
            </div>

            <div class="form-group">
              <label class="form-label" for="cmp-category">Category</label>
              <select class="form-select" id="cmp-category" required>
                <option value="">Select category…</option>
                ${CATEGORIES.map(c => `<option value="${c}">${c}</option>`).join('')}
              </select>
              <div class="form-error" id="err-cmp-category">Category is required</div>
            </div>

            <div class="form-group">
              <label class="form-label">&nbsp;</label>
              <div style="display: flex; gap: var(--space-2); flex-wrap: wrap; padding-top: var(--space-1);">
                ${CATEGORIES.map(c => {
                  const colors = { Water: 'blue', Electricity: 'amber', Cleanliness: 'green' };
                  return `<span class="badge badge-${colors[c] === 'blue' ? 'in-progress' : colors[c] === 'amber' ? 'open' : 'resolved'}" style="cursor: default;">${c}</span>`;
                }).join('')}
              </div>
            </div>

            <div class="form-group full-width">
              <label class="form-label" for="cmp-desc">Description</label>
              <textarea class="form-textarea" id="cmp-desc" placeholder="Describe the issue in detail…" rows="3" required></textarea>
              <div class="form-error" id="err-cmp-desc">Description is required</div>
            </div>

          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary" id="cmp-submit">Submit Complaint</button>
            <button type="reset" class="btn btn-secondary">Clear</button>
          </div>
        </form>
      </div>

      <!-- Status Tracking Table -->
      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">Complaint Tracker</div>
          <div style="display: flex; gap: var(--space-2); flex-wrap: wrap;">
            <button class="filter-chip active" data-filter-status="all">All</button>
            ${STATUSES.map(s => `<button class="filter-chip" data-filter-status="${s}">${s}</button>`).join('')}
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student</th>
              <th>Room</th>
              <th>Category</th>
              <th>Description</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="complaints-table-body"></tbody>
        </table>
      </div>
    </div>
  `;

  let statusFilter = 'all';

  // Populate room dropdown when student changes
  const studentSelect = document.getElementById('cmp-student');
  const roomSelect = document.getElementById('cmp-room');
  const rooms = getRooms();

  studentSelect.addEventListener('change', () => {
    const sid = studentSelect.value;
    if (!sid) {
      roomSelect.innerHTML = '<option value="">Select room…</option>';
      return;
    }
    const student = getStudentById(sid);
    const hostelRooms = student ? rooms.filter(r => r.hostel === student.hostel) : rooms;
    roomSelect.innerHTML = '<option value="">Select room…</option>' +
      hostelRooms.map(r => `<option value="${r.room_id}">${r.room_id} — ${r.hostel} F${r.floor}</option>`).join('');
  });

  function renderTable() {
    let complaints = getComplaints().sort((a, b) => b.date.localeCompare(a.date));
    if (statusFilter !== 'all') {
      complaints = complaints.filter(c => c.status === statusFilter);
    }

    const tbody = document.getElementById('complaints-table-body');

    if (complaints.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" class="table-empty">No complaints found</td></tr>`;
      return;
    }

    tbody.innerHTML = complaints.map(c => {
      const student = getStudentById(c.student_id);
      const truncDesc = c.description.length > 40 ? c.description.slice(0, 40) + '…' : c.description;

      // Next status transitions
      let actionHtml = '';
      if (c.status === 'open') {
        actionHtml = `<button class="btn btn-sm btn-secondary" data-action="in-progress" data-id="${c.complaint_id}">Start</button>`;
      } else if (c.status === 'in-progress') {
        actionHtml = `<button class="btn btn-sm btn-secondary" data-action="resolved" data-id="${c.complaint_id}">Resolve</button>`;
      } else {
        actionHtml = `<span style="color: var(--text-tertiary); font-size: var(--text-xs);">—</span>`;
      }

      return `
        <tr>
          <td class="cell-mono">${c.complaint_id}</td>
          <td>${student?.name || c.student_id}</td>
          <td class="cell-mono">${c.room_id}</td>
          <td>${c.category}</td>
          <td title="${c.description}" style="max-width: 200px; overflow: hidden; text-overflow: ellipsis;">${truncDesc}</td>
          <td class="cell-mono">${c.date}</td>
          <td><span class="badge badge-${c.status}">${c.status}</span></td>
          <td>${actionHtml}</td>
        </tr>
      `;
    }).join('');

    // Bind action buttons
    tbody.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const newStatus = btn.dataset.action;
        const id = btn.dataset.id;
        const result = updateComplaintStatus(id, newStatus);
        if (result.success) {
          toast(`Complaint ${id} → ${newStatus}`, 'success');
          renderTable();
        } else {
          toast(result.error, 'error');
        }
      });
    });
  }

  // Status filter chips
  container.querySelectorAll('[data-filter-status]').forEach(chip => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('[data-filter-status]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      statusFilter = chip.dataset.filterStatus;
      renderTable();
    });
  });

  // Form validation + submission
  const form = document.getElementById('complaint-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    document.querySelectorAll('#complaint-form .form-error').forEach(el => el.classList.remove('visible'));

    const studentId = studentSelect.value;
    const roomId = roomSelect.value;
    const category = document.getElementById('cmp-category').value;
    const desc = document.getElementById('cmp-desc').value.trim();

    if (!studentId) { document.getElementById('err-cmp-student').classList.add('visible'); valid = false; }
    if (!roomId) { document.getElementById('err-cmp-room').classList.add('visible'); valid = false; }
    if (!category) { document.getElementById('err-cmp-category').classList.add('visible'); valid = false; }
    if (!desc) { document.getElementById('err-cmp-desc').classList.add('visible'); valid = false; }

    if (!valid) {
      toast('Please fill in all required fields.', 'error');
      return;
    }

    const result = addComplaint(studentId, roomId, category, desc);
    if (result.success) {
      toast(`Complaint ${result.complaint.complaint_id} lodged successfully.`, 'success');
      form.reset();
      renderTable();
    } else {
      toast(result.error, 'error');
    }
  });

  form.addEventListener('reset', () => {
    document.querySelectorAll('#complaint-form .form-error').forEach(el => el.classList.remove('visible'));
  });

  renderTable();

  requestAnimationFrame(() => {
    document.getElementById('complaints-page')?.classList.replace('page-enter', 'page-active');
  });
}
