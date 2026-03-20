/* ─────────────────────────────────
   Room Allocation Page
   Application form + validation
   ───────────────────────────────── */

import { getStudents, getVacantRooms, getHostels, getRoomTypes, allocateRoom, hasActiveAllocation } from '../db.js';
import { toast } from '../components/toast.js';

export function renderAllocation(container, onRefresh) {
  const students = getStudents();
  const hostels = getHostels();
  const roomTypes = getRoomTypes();

  container.innerHTML = `
    <div class="page-enter" id="allocation-page">
      <div class="page-header">
        <h2>Room Allocation</h2>
        <p>Submit a room application. Each student may only have one active allocation at a time.</p>
      </div>

      <div class="form-section">
        <div class="form-section-title">New Room Application</div>
        <form id="allocation-form" novalidate>
          <div class="form-grid">

            <div class="form-group">
              <label class="form-label" for="alloc-student">Student</label>
              <select class="form-select" id="alloc-student" required>
                <option value="">Select student…</option>
                ${students.map(s => `<option value="${s.student_id}">${s.name} (${s.student_id})</option>`).join('')}
              </select>
              <div class="form-error" id="err-student">Student is required</div>
            </div>

            <div class="form-group">
              <label class="form-label" for="alloc-hostel">Preferred Hostel</label>
              <select class="form-select" id="alloc-hostel">
                <option value="">Any hostel</option>
                ${hostels.map(h => `<option value="${h}">${h}</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="alloc-type">Room Type</label>
              <select class="form-select" id="alloc-type">
                <option value="">Any type</option>
                ${roomTypes.map(t => `<option value="${t}">${t}</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="alloc-room">Available Room</label>
              <select class="form-select" id="alloc-room" required>
                <option value="">Select room…</option>
              </select>
              <div class="form-error" id="err-room">Room selection is required</div>
            </div>

            <div class="form-group full-width">
              <label class="form-label" for="alloc-prefs">Additional Preferences</label>
              <textarea class="form-textarea" id="alloc-prefs" placeholder="e.g. ground floor, near washroom, vegetarian mess proximity…" rows="3"></textarea>
            </div>

          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary" id="alloc-submit">Submit Application</button>
            <button type="reset" class="btn btn-secondary">Clear</button>
          </div>
        </form>
      </div>

      <!-- Vacant Rooms Preview -->
      <div class="table-container" style="margin-top: var(--space-8);">
        <div class="table-toolbar">
          <div class="table-toolbar-title">Available Rooms</div>
          <span style="font-size: var(--text-xs); color: var(--text-tertiary);" id="vacant-count"></span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Room ID</th>
              <th>Hostel</th>
              <th>Floor</th>
              <th>Type</th>
              <th>Capacity</th>
              <th>Occupancy</th>
            </tr>
          </thead>
          <tbody id="vacant-rooms-body"></tbody>
        </table>
      </div>
    </div>
  `;

  const hostelSelect = document.getElementById('alloc-hostel');
  const typeSelect = document.getElementById('alloc-type');
  const roomSelect = document.getElementById('alloc-room');
  const form = document.getElementById('allocation-form');

  function updateVacantRooms() {
    const hostel = hostelSelect.value || null;
    const type = typeSelect.value || null;
    const vacant = getVacantRooms(hostel, type);

    // Update select dropdown
    roomSelect.innerHTML = `<option value="">Select room…</option>` +
      vacant.map(r => `<option value="${r.room_id}">${r.room_id} — ${r.hostel} F${r.floor} (${r.type}, ${r.current_occupancy}/${r.capacity})</option>`).join('');

    // Update preview table
    const tbody = document.getElementById('vacant-rooms-body');
    const countEl = document.getElementById('vacant-count');
    countEl.textContent = `${vacant.length} room${vacant.length !== 1 ? 's' : ''} available`;

    if (vacant.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" class="table-empty">No vacant rooms matching these filters</td></tr>`;
      return;
    }

    tbody.innerHTML = vacant.map(r => {
      const pct = r.capacity > 0 ? (r.current_occupancy / r.capacity) * 100 : 0;
      const cls = pct >= 100 ? 'full' : pct >= 50 ? 'mid' : 'low';
      return `
        <tr>
          <td class="cell-mono">${r.room_id}</td>
          <td>${r.hostel}</td>
          <td>Floor ${r.floor}</td>
          <td>${r.type}</td>
          <td>${r.capacity}</td>
          <td>
            <div class="occupancy-bar">
              <div class="occupancy-track"><div class="occupancy-fill ${cls}" style="width: ${pct}%"></div></div>
              <span class="cell-mono">${r.current_occupancy}/${r.capacity}</span>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  hostelSelect.addEventListener('change', updateVacantRooms);
  typeSelect.addEventListener('change', updateVacantRooms);
  updateVacantRooms();

  // Form validation + submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const studentId = document.getElementById('alloc-student').value;
    const roomId = roomSelect.value;

    // Clear errors
    document.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'));

    if (!studentId) {
      document.getElementById('err-student').classList.add('visible');
      valid = false;
    }

    if (!roomId) {
      document.getElementById('err-room').classList.add('visible');
      valid = false;
    }

    // Check active allocation
    if (studentId && hasActiveAllocation(studentId)) {
      document.getElementById('err-student').textContent = 'This student already has an active allocation.';
      document.getElementById('err-student').classList.add('visible');
      valid = false;
    }

    if (!valid) {
      toast('Please fix the errors above.', 'error');
      return;
    }

    const prefs = document.getElementById('alloc-prefs').value;
    const result = allocateRoom(studentId, roomId, prefs);

    if (result.success) {
      toast(`Room ${roomId} allocated successfully!`, 'success');
      form.reset();
      updateVacantRooms();
      if (onRefresh) onRefresh();
    } else {
      toast(result.error, 'error');
    }
  });

  form.addEventListener('reset', () => {
    document.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'));
    setTimeout(updateVacantRooms, 0);
  });

  // Animate in
  requestAnimationFrame(() => {
    document.getElementById('allocation-page')?.classList.replace('page-enter', 'page-active');
  });
}
