/* ─────────────────────────────────
   Admin Rooms Page
   Full listing + booking approval
   ───────────────────────────────── */

import { api } from '../../api.js';
import { toast } from '../../components/toast.js';

export async function renderAdminRooms(container) {
  container.innerHTML = `<div class="page-loading">Loading…</div>`;
  try {
    const [rooms, requests] = await Promise.all([
      api.get('/rooms'),
      api.get('/rooms/booking-requests'),
    ]);
    renderPage(container, rooms, requests);
  } catch(e) {
    container.innerHTML = `<div class="page-error">Failed to load: ${e.message}</div>`;
  }
}

function renderPage(container, rooms, initialRequests) {
  let requests = initialRequests;
  let filterHostel = '';
  let tab = 'rooms'; // 'rooms' | 'requests'
  const hostels = [...new Set(rooms.map(r => r.hostel))].sort();

  container.innerHTML = `
    <div class="page-enter" id="admin-rooms-page">
      <div class="page-header">
        <h2>Room Information</h2>
        <p>Full room listing with occupancy and student assignments. Manage booking requests.</p>
      </div>

      <div class="cat-tabs" style="margin-bottom: var(--space-6);">
        <button class="cat-tab active" data-tab="rooms">Room Listing</button>
        <button class="cat-tab" data-tab="requests">
          Booking Requests
          ${requests.filter(r => r.status === 'pending').length > 0
            ? `<span class="badge badge-open" style="margin-left:4px;">${requests.filter(r => r.status === 'pending').length}</span>`
            : ''}
        </button>
      </div>

      <!-- Rooms Panel -->
      <div id="panel-rooms">
        <div style="display:flex; gap: var(--space-3); align-items: center; margin-bottom: var(--space-4);">
          <span style="font-size: var(--text-sm); color: var(--text-secondary);">Hostel:</span>
          <div class="cat-tabs" style="margin:0;">
            <button class="cat-tab active" data-hostel="">All</button>
            ${hostels.map(h => `<button class="cat-tab" data-hostel="${h}">${h}</button>`).join('')}
          </div>
        </div>
        <div id="rooms-body"></div>
      </div>

      <!-- Requests Panel -->
      <div id="panel-requests" style="display:none;">
        <div id="requests-body"></div>
      </div>
    </div>
  `;

  function renderRoomsTable() {
    const filtered = filterHostel ? rooms.filter(r => r.hostel === filterHostel) : rooms;
    const el = document.getElementById('rooms-body');
    el.innerHTML = `
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th>
              <th>Occupancy</th><th>Students</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.map(r => {
              const pct = r.capacity > 0 ? r.current_occupancy / r.capacity : 0;
              const state = pct === 0 ? 'vacant' : pct < 1 ? 'partial' : 'full';
              const fillColor = state === 'vacant' ? 'var(--accent-green)' : state === 'partial' ? 'var(--accent-amber)' : 'var(--accent-red)';
              const studentNames = (r.students || []).map(s => `<span style="font-size:var(--text-xs); color:var(--text-secondary); display:block;">${s.name} (Yr ${s.year})</span>`).join('');
              return `
                <tr>
                  <td class="cell-mono">${r.room_id}</td>
                  <td>${r.hostel}</td>
                  <td>${r.floor}</td>
                  <td>${r.type}</td>
                  <td>
                    <div class="occupancy-bar">
                      <div class="occupancy-track">
                        <div class="occupancy-fill" style="width:${pct*100}%; background:${fillColor};"></div>
                      </div>
                      <span style="font-size:var(--text-xs); font-family: var(--font-mono); color:var(--text-secondary);">${r.current_occupancy}/${r.capacity}</span>
                    </div>
                  </td>
                  <td>${studentNames || '<span style="color:var(--text-tertiary); font-size:var(--text-xs);">Vacant</span>'}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderRequestsTable() {
    const el = document.getElementById('requests-body');
    if (requests.length === 0) {
      el.innerHTML = `<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No booking requests yet.</p>`;
      return;
    }
    el.innerHTML = `
      <div class="table-container">
        <table>
          <thead>
            <tr><th>Student</th><th>Year</th><th>Room</th><th>Type</th><th>Preferences</th><th>Status</th><th>Date</th><th>Action</th></tr>
          </thead>
          <tbody>
            ${requests.map(r => `
              <tr>
                <td><div>${r.student_name}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${r.roll_no}</div></td>
                <td>${r.year}</td>
                <td class="cell-mono">${r.room_id}</td>
                <td>${r.type}</td>
                <td style="max-width:140px; font-size:var(--text-xs); color:var(--text-secondary);">${r.preferences || '—'}</td>
                <td><span class="badge badge-${r.status}">${r.status}</span></td>
                <td class="cell-mono">${r.created_at?.slice(0,10)}</td>
                <td>
                  ${r.status === 'pending' ? `
                    <div style="display:flex; gap:4px;">
                      <button class="btn btn-sm btn-primary" data-req="${r.request_id}" data-action="approved">Approve</button>
                      <button class="btn btn-sm btn-secondary" data-req="${r.request_id}" data-action="rejected">Reject</button>
                    </div>
                  ` : `<span style="color:var(--text-tertiary); font-size:var(--text-xs);">${r.admin_note || '—'}</span>`}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    el.querySelectorAll('[data-req]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const reqId  = btn.dataset.req;
        const action = btn.dataset.action;
        btn.disabled = true;
        try {
          const updated = await api.patch(`/rooms/booking-requests/${reqId}`, { status: action });
          requests = requests.map(r => r.request_id === +reqId ? { ...r, ...updated } : r);
          toast(`Request ${action}.`, 'success');
          renderRequestsTable();
        } catch(err) {
          toast(err.message, 'error');
          btn.disabled = false;
        }
      });
    });
  }

  // Tab switching
  container.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('[data-tab]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tab = btn.dataset.tab;
      document.getElementById('panel-rooms').style.display    = tab === 'rooms' ? '' : 'none';
      document.getElementById('panel-requests').style.display = tab === 'requests' ? '' : 'none';
    });
  });

  // Hostel filter
  container.querySelectorAll('[data-hostel]').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('[data-hostel]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterHostel = btn.dataset.hostel;
      renderRoomsTable();
    });
  });

  renderRoomsTable();
  renderRequestsTable();
  requestAnimationFrame(() =>
    document.getElementById('admin-rooms-page')?.classList.replace('page-enter', 'page-active')
  );
}
