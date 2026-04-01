/* ─────────────────────────────────
   Room Booking Page
   Floor plan SVG + booking request
   ───────────────────────────────── */

import { api } from '../../api.js';
import { getUser } from '../../auth.js';
import { toast } from '../../components/toast.js';

export async function renderRoomBooking(container) {
  container.innerHTML = `<div class="page-loading">Loading rooms…</div>`;
  try {
    const [allRooms, { allocation }, requests] = await Promise.all([
      api.get('/rooms'),
      api.get('/rooms/my-allocation'),
      api.get('/rooms/booking-requests'),
    ]);
    renderPage(container, allRooms, allocation, requests);
  } catch(e) {
    container.innerHTML = `<div class="page-error">Failed to load: ${e.message}</div>`;
  }
}

function renderPage(container, allRooms, allocation, requests) {
  const user = getUser();

  const hostelRooms = allRooms.filter(r => r.hostel === (user?.hostel || ''));
  const floorsAvailable = [...new Set(hostelRooms.map(r => r.floor))].sort((a,b) => a-b);
  const displayFloor = floorsAvailable[0] || 1;

  let selectedFloor = displayFloor;
  let selectedRoom  = null;

  const pendingRequest = requests.find(r => r.status === 'pending');

  container.innerHTML = `
    <div class="page-enter" id="booking-page">
      <div class="page-header">
        <h2>Room Booking</h2>
        <p>Select a room from the floor plan to submit a booking request.</p>
      </div>

      ${allocation ? `
        <div style="background:var(--bg-elevated); padding:var(--space-6); border-radius:var(--radius-lg); border:1px solid rgba(52,211,153,.3); margin-bottom:var(--space-6);">
          <div style="color:var(--text-secondary); font-size:var(--text-xs); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:var(--space-2);">Current Room Assignment</div>
          <div style="display:flex; align-items:center; gap:var(--space-3);">
            <div style="font-size:32px; font-weight:700; color:var(--accent-green); line-height:1;">${allocation.room_id}</div>
            <div style="border-left:1px solid var(--border-subtle); padding-left:var(--space-3);">
              <div style="font-weight:500;">${allocation.hostel}</div>
              <div style="font-size:var(--text-sm); color:var(--text-secondary);">Floor ${allocation.floor} • Management Allocated</div>
            </div>
          </div>
        </div>
      ` : pendingRequest ? `
        <div class="alert-banner alert-amber" style="margin-bottom:var(--space-6);">
          <strong>Pending request:</strong> Room ${pendingRequest.room_id} submitted on ${pendingRequest.created_at?.slice(0,10)}. Waiting for admin approval.
        </div>
      ` : ''}

      <!-- Floor Selector -->
      <div style="display:flex; align-items: center; gap: var(--space-4); margin-bottom: var(--space-6);">
        <span style="font-size: var(--text-sm); color: var(--text-secondary);">Floor:</span>
        <div class="cat-tabs" style="margin:0;">
          ${floorsAvailable.map(f => `
            <button class="cat-tab${f === selectedFloor ? ' active' : ''}" data-floor="${f}">Floor ${f}</button>
          `).join('')}
        </div>
      </div>

      <!-- Floor Plan -->
      <div class="form-section" style="max-width: none; margin-bottom: var(--space-6);" id="floor-plan-section">
        <div class="form-section-title" id="floor-plan-title">Floor ${selectedFloor} — ${user?.hostel || ''}</div>
        <div class="floor-plan" id="floor-plan"></div>
        <div class="floor-legend">
          <span class="legend-item"><span class="legend-dot vacant"></span> Vacant</span>
          <span class="legend-item"><span class="legend-dot partial"></span> Partially occupied</span>
          <span class="legend-item"><span class="legend-dot full"></span> Full</span>
        </div>
      </div>

      <!-- Room Details + Book -->
      <div id="room-detail-panel" class="form-section" style="max-width: none; display: none;">
        <div class="form-section-title" id="room-detail-title">Room Details</div>
        <div id="room-detail-body"></div>
        <form id="booking-form" style="margin-top: var(--space-6);" novalidate>
          <div class="form-group" style="max-width: 480px;">
            <label class="form-label" for="booking-pref">Preferences <span style="color:var(--text-tertiary)">(optional)</span></label>
            <textarea class="form-textarea" id="booking-pref" rows="2" placeholder="e.g. prefer window side, near bathroom…"></textarea>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary" id="btn-book">Request This Room</button>
            <button type="button" class="btn btn-secondary" id="btn-cancel-room">Cancel</button>
          </div>
        </form>
      </div>

      <!-- My Booking History -->
      <div class="table-container" style="margin-top: var(--space-6);">
        <div class="table-toolbar">
          <div class="table-toolbar-title">My Booking Requests</div>
        </div>
        ${requests.length === 0
          ? `<p style="padding: var(--space-6); text-align:center; color:var(--text-tertiary);">No booking requests yet.</p>`
          : `<table>
              <thead><tr><th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th><th>Status</th><th>Note</th><th>Date</th></tr></thead>
              <tbody>
                ${requests.map(r => `
                  <tr>
                    <td class="cell-mono">${r.room_id}</td>
                    <td>${r.hostel}</td>
                    <td>${r.floor}</td>
                    <td>${r.type}</td>
                    <td><span class="badge badge-${r.status}">${r.status}</span></td>
                    <td style="color:var(--text-tertiary); font-size:var(--text-xs);">${r.admin_note || '—'}</td>
                    <td class="cell-mono">${r.created_at?.slice(0,10)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>`
        }
      </div>
    </div>
  `;

  function renderFloorPlan(floor) {
    const floorRooms = hostelRooms.filter(r => r.floor === floor);
    document.getElementById('floor-plan-title').textContent = `Floor ${floor} — ${user?.hostel || ''}`;
    const plan = document.getElementById('floor-plan');
    if (floorRooms.length === 0) {
      plan.innerHTML = `<p style="color:var(--text-tertiary); padding: var(--space-4);">No rooms on this floor.</p>`;
      return;
    }
    plan.innerHTML = floorRooms.map(r => {
      const pct = r.capacity > 0 ? r.current_occupancy / r.capacity : 0;
      const state = pct === 0 ? 'vacant' : pct < 1 ? 'partial' : 'full';
      const isSelected = selectedRoom?.room_id === r.room_id;
      return `
        <button class="room-cell ${state}${isSelected ? ' selected' : ''}"
                data-room="${r.room_id}"
                ${state === 'full' ? 'disabled' : ''}
                title="${r.room_id} · ${r.type} · ${r.current_occupancy}/${r.capacity}">
          <span class="room-cell-id">${r.room_id}</span>
          <span class="room-cell-type">${r.type[0]}</span>
          <span class="room-cell-occ">${r.current_occupancy}/${r.capacity}</span>
        </button>
      `;
    }).join('');

    plan.querySelectorAll('.room-cell:not([disabled])').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedRoom = hostelRooms.find(r => r.room_id === btn.dataset.room);
        renderFloorPlan(floor);
        showRoomDetail(selectedRoom);
      });
    });
  }

  function showRoomDetail(room) {
    const panel = document.getElementById('room-detail-panel');
    const body  = document.getElementById('room-detail-body');
    document.getElementById('room-detail-title').textContent = `Room ${room.room_id}`;
    body.innerHTML = `
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: var(--space-4);">
        ${[
          ['Hostel',      room.hostel],
          ['Floor',       room.floor],
          ['Type',        room.type],
          ['Capacity',    `${room.capacity} beds`],
          ['Occupied',    `${room.current_occupancy} / ${room.capacity}`],
          ['Available',   `${room.available_slots} slot(s)`],
        ].map(([k,v]) => `
          <div>
            <div style="font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase; letter-spacing:.06em;">${k}</div>
            <div style="font-size:var(--text-sm); margin-top:4px; color:var(--text-primary);">${v}</div>
          </div>
        `).join('')}
      </div>
    `;
    panel.style.display = allocation || pendingRequest ? 'none' : 'block';
    if (allocation || pendingRequest) panel.style.display = 'none';
  }

  // Floor tab switching
  container.querySelectorAll('.cat-tab[data-floor]').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.cat-tab[data-floor]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedFloor = +btn.dataset.floor;
      selectedRoom  = null;
      document.getElementById('room-detail-panel').style.display = 'none';
      renderFloorPlan(selectedFloor);
    });
  });

  // Cancel room selection
  document.getElementById('btn-cancel-room')?.addEventListener('click', () => {
    selectedRoom = null;
    document.getElementById('room-detail-panel').style.display = 'none';
    renderFloorPlan(selectedFloor);
  });

  // Booking form submit
  document.getElementById('booking-form')?.addEventListener('submit', async e => {
    e.preventDefault();
    if (!selectedRoom) return;
    const preferences = document.getElementById('booking-pref').value.trim();
    const btn = document.getElementById('btn-book');
    btn.disabled = true; btn.textContent = 'Submitting…';
    try {
      await api.post('/rooms/book', { room_id: selectedRoom.room_id, preferences });
      toast(`Booking request for ${selectedRoom.room_id} submitted!`, 'success');
      // Reload page
      renderRoomBooking(container);
    } catch(err) {
      toast(err.message, 'error');
      btn.disabled = false; btn.textContent = 'Request This Room';
    }
  });

  renderFloorPlan(selectedFloor);
  requestAnimationFrame(() =>
    document.getElementById('booking-page')?.classList.replace('page-enter', 'page-active')
  );
}
