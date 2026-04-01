/* ─────────────────────────────────
   Admin Rooms Page
   Full listing + allocation management
   Global hostel filter via hostelStore
   ───────────────────────────────── */

import { api } from '../../api.js';
import { toast } from '../../components/toast.js';
import { getHostel, setHostel, onHostelChange } from '../../components/hostelStore.js';

export async function renderAdminRooms(container) {
  async function load() {
    container.innerHTML = `<div class="page-loading">Loading…</div>`;
    try {
      const [rooms, requests] = await Promise.all([
        api.get('/rooms'),
        api.get('/rooms/booking-requests'),
      ]);
      renderPage(container, rooms, requests, load);
    } catch(e) {
      container.innerHTML = `<div class="page-error">Failed to load: ${e.message}</div>`;
    }
  }

  onHostelChange(() => load());
  await load();
}

function renderPage(container, rooms, initialRequests, reloadFn) {
  let requests    = initialRequests;
  let tab         = 'rooms';
  const hostels   = [...new Set(rooms.map(r => r.hostel))].sort();
  // initiate from store, fall back to 'All'
  let filterHostel = getHostel();

  container.innerHTML = `
    <div class="page-enter" id="admin-rooms-page">
      <div class="page-header" style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:var(--space-4);">
        <div>
          <h2>Room Management</h2>
          <p>Room occupancy, student allocations, and booking requests.</p>
        </div>
        <div class="hostel-filter-bar">
          <label class="hostel-filter-label">Hostel</label>
          <select class="hostel-filter-select" id="room-hostel-filter">
            <option value="">All Hostels</option>
            ${hostels.map(h => `<option value="${h}" ${h === filterHostel ? 'selected' : ''}>${h}</option>`).join('')}
          </select>
        </div>
      </div>

      <!-- Tabs -->
      <div class="cat-tabs" style="margin-bottom:var(--space-6);" id="room-tabs">
        <button class="cat-tab active" data-tab="rooms">Room Listing</button>
        <button class="cat-tab" data-tab="requests">
          Booking Requests
          ${requests.filter(r => r.status === 'pending').length > 0
            ? `<span class="badge badge-open" style="margin-left:4px;">${requests.filter(r => r.status === 'pending').length}</span>`
            : ''}
        </button>
        <button class="cat-tab" data-tab="allocations">Active Allocations</button>
      </div>

      <!-- Rooms Panel -->
      <div id="panel-rooms"><div id="rooms-body"></div></div>

      <!-- Requests Panel -->
      <div id="panel-requests" style="display:none;"><div id="requests-body"></div></div>

      <!-- Allocations Panel -->
      <div id="panel-allocations" style="display:none;"><div id="allocations-body"></div></div>
    </div>
  `;

  // ── Room listing ──────────────────────────────────────────────
  function renderRoomsTable() {
    const filtered = filterHostel ? rooms.filter(r => r.hostel === filterHostel) : rooms;
    const vacant   = filtered.filter(r => r.current_occupancy === 0).length;
    const partial  = filtered.filter(r => r.current_occupancy > 0 && r.current_occupancy < r.capacity).length;
    const full     = filtered.filter(r => r.current_occupancy >= r.capacity).length;

    document.getElementById('rooms-body').innerHTML = `
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:var(--space-4); margin-bottom:var(--space-6);">
        <div class="card" style="text-align:center;">
          <div class="card-label">Vacant</div>
          <div class="card-value" style="color:var(--accent-green);">${vacant}</div>
        </div>
        <div class="card" style="text-align:center;">
          <div class="card-label">Partial</div>
          <div class="card-value" style="color:var(--accent-amber);">${partial}</div>
        </div>
        <div class="card" style="text-align:center;">
          <div class="card-label">Full</div>
          <div class="card-value" style="color:var(--accent-red);">${full}</div>
        </div>
      </div>
      <div class="table-container">
        <table>
          <thead>
            <tr><th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th><th>Occupancy</th><th>Students</th></tr>
          </thead>
          <tbody>
            ${filtered.map(r => {
              const pct   = r.capacity > 0 ? r.current_occupancy / r.capacity : 0;
              const state = pct === 0 ? 'vacant' : pct < 1 ? 'partial' : 'full';
              const fillColor = state === 'vacant' ? 'var(--accent-green)' : state === 'partial' ? 'var(--accent-amber)' : 'var(--accent-red)';
              const studentNames = (r.students || []).map(s =>
                `<span style="font-size:var(--text-xs); color:var(--text-secondary); display:block;">${s.name} (Yr ${s.year})</span>`
              ).join('');
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
                      <span style="font-size:var(--text-xs); font-family:var(--font-mono); color:var(--text-secondary);">${r.current_occupancy}/${r.capacity}</span>
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

  // ── Booking requests ──────────────────────────────────────────
  function renderRequestsTable() {
    const filtered = filterHostel
      ? requests.filter(r => r.room_hostel === filterHostel)
      : requests;

    const el = document.getElementById('requests-body');
    if (filtered.length === 0) {
      el.innerHTML = `<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No booking requests${filterHostel ? ' for this hostel' : ''}.</p>`;
      return;
    }
    el.innerHTML = `
      <div class="table-container">
        <table>
          <thead>
            <tr><th>Student</th><th>Year</th><th>Room</th><th>Hostel</th><th>Type</th><th>Floor</th><th>Occ.</th><th>Preferences</th><th>Status</th><th>Date</th><th>Action</th></tr>
          </thead>
          <tbody>
            ${filtered.map(r => `
              <tr>
                <td>
                  <div style="font-weight:500;">${r.student_name}</div>
                  <div style="font-size:var(--text-xs); color:var(--text-tertiary);">${r.roll_no}</div>
                </td>
                <td>${r.year}</td>
                <td class="cell-mono">${r.room_id}</td>
                <td style="font-size:var(--text-xs);">${r.room_hostel || r.hostel}</td>
                <td>${r.type}</td>
                <td>${r.floor}</td>
                <td style="font-family:var(--font-mono); font-size:var(--text-xs);">${r.current_occupancy}/${r.capacity}</td>
                <td style="max-width:130px; font-size:var(--text-xs); color:var(--text-secondary);">${r.preferences || '—'}</td>
                <td><span class="badge badge-${r.status}">${r.status}</span></td>
                <td class="cell-mono">${r.created_at?.slice(0,10)}</td>
                <td>
                  ${r.status === 'pending' ? `
                    <div style="display:flex; gap:4px;">
                      <button class="btn btn-sm btn-primary" data-req="${r.request_id}" data-action="approved">Approve</button>
                      <button class="btn btn-sm btn-secondary" data-req="${r.request_id}" data-action="rejected" style="color:var(--accent-red);">Reject</button>
                    </div>
                  ` : `<span style="color:var(--text-tertiary); font-size:var(--text-xs);">${r.admin_note || r.status}</span>`}
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
          renderRoomsTable(); // update occupancy counts
        } catch(err) {
          toast(err.message, 'error');
          btn.disabled = false;
        }
      });
    });
  }

  // ── Active allocations ────────────────────────────────────────
  async function loadAllocations() {
    const el = document.getElementById('allocations-body');
    el.innerHTML = `<div class="page-loading">Loading allocations…</div>`;
    try {
      const allocs = await api.get('/rooms/allocations');
      const filtered = filterHostel
        ? allocs.filter(a => a.hostel === filterHostel)
        : allocs;

      if (filtered.length === 0) {
        el.innerHTML = `<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No active allocations${filterHostel ? ' for this hostel' : ''}.</p>`;
        return;
      }
      el.innerHTML = `
        <div class="table-container">
          <table>
            <thead>
              <tr><th>ID</th><th>Student</th><th>Room</th><th>Hostel</th><th>Type</th><th>Floor</th><th>From</th><th>To</th><th>Status</th></tr>
            </thead>
            <tbody>
              ${filtered.map(a => `
                <tr>
                  <td class="cell-mono">${a.allocation_id}</td>
                  <td>
                    <div style="font-weight:500;">${a.student_name}</div>
                    <div style="font-size:var(--text-xs); color:var(--text-tertiary);">${a.roll_no}</div>
                  </td>
                  <td class="cell-mono">${a.room_id}</td>
                  <td style="font-size:var(--text-xs);">${a.hostel}</td>
                  <td>${a.type}</td>
                  <td>${a.floor}</td>
                  <td class="cell-mono">${a.from_date}</td>
                  <td class="cell-mono">${a.to_date}</td>
                  <td><span class="badge badge-${a.status === 'active' ? 'in-progress' : 'resolved'}">${a.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } catch(err) {
      el.innerHTML = `<p style="padding:var(--space-8); text-align:center; color:var(--accent-red);">Failed: ${err.message}</p>`;
    }
  }

  // ── Hostel filter ─────────────────────────────────────────────
  document.getElementById('room-hostel-filter').addEventListener('change', e => {
    filterHostel = e.target.value;
    setHostel(filterHostel);
    renderRoomsTable();
    renderRequestsTable();
    if (tab === 'allocations') loadAllocations();
  });

  // ── Tab switching ─────────────────────────────────────────────
  container.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('[data-tab]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tab = btn.dataset.tab;
      document.getElementById('panel-rooms').style.display        = tab === 'rooms'        ? '' : 'none';
      document.getElementById('panel-requests').style.display     = tab === 'requests'     ? '' : 'none';
      document.getElementById('panel-allocations').style.display  = tab === 'allocations'  ? '' : 'none';
      if (tab === 'allocations') loadAllocations();
    });
  });

  renderRoomsTable();
  renderRequestsTable();
  requestAnimationFrame(() =>
    document.getElementById('admin-rooms-page')?.classList.replace('page-enter', 'page-active')
  );
}
