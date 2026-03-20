/* ─────────────────────────────────
   Room Details Page
   Table + filters
   ───────────────────────────────── */

import { getRooms, getHostels, getRoomTypes } from '../db.js';

export function renderRooms(container) {
  const hostels = getHostels();
  const types = getRoomTypes();

  container.innerHTML = `
    <div class="page-enter" id="rooms-page">
      <div class="page-header">
        <h2>Room Details</h2>
        <p>Browse all rooms across hostels. Filter by occupancy status, hostel, or room type.</p>
      </div>

      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">All Rooms</div>

          <div style="display: flex; gap: var(--space-2); flex-wrap: wrap;">
            <button class="filter-chip active" data-filter-occupancy="all">All</button>
            <button class="filter-chip" data-filter-occupancy="vacant">Vacant</button>
            <button class="filter-chip" data-filter-occupancy="partial">Partial</button>
            <button class="filter-chip" data-filter-occupancy="full">Full</button>
          </div>

          <select class="form-select" id="rooms-filter-hostel" style="width: auto; padding: var(--space-1) var(--space-6) var(--space-1) var(--space-3); font-size: var(--text-xs);">
            <option value="">All Hostels</option>
            ${hostels.map(h => `<option value="${h}">${h}</option>`).join('')}
          </select>

          <select class="form-select" id="rooms-filter-type" style="width: auto; padding: var(--space-1) var(--space-6) var(--space-1) var(--space-3); font-size: var(--text-xs);">
            <option value="">All Types</option>
            ${types.map(t => `<option value="${t}">${t}</option>`).join('')}
          </select>
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
              <th>Status</th>
            </tr>
          </thead>
          <tbody id="rooms-table-body"></tbody>
        </table>
      </div>
    </div>
  `;

  let occupancyFilter = 'all';

  function renderTable() {
    let rooms = getRooms();
    const hostel = document.getElementById('rooms-filter-hostel').value;
    const type = document.getElementById('rooms-filter-type').value;

    if (hostel) rooms = rooms.filter(r => r.hostel === hostel);
    if (type) rooms = rooms.filter(r => r.type === type);

    if (occupancyFilter === 'vacant') {
      rooms = rooms.filter(r => r.current_occupancy === 0);
    } else if (occupancyFilter === 'partial') {
      rooms = rooms.filter(r => r.current_occupancy > 0 && r.current_occupancy < r.capacity);
    } else if (occupancyFilter === 'full') {
      rooms = rooms.filter(r => r.current_occupancy >= r.capacity);
    }

    const tbody = document.getElementById('rooms-table-body');

    if (rooms.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="table-empty">No rooms match the current filters</td></tr>`;
      return;
    }

    tbody.innerHTML = rooms.map(r => {
      const pct = r.capacity > 0 ? (r.current_occupancy / r.capacity) * 100 : 0;
      const barClass = pct >= 100 ? 'full' : pct >= 50 ? 'mid' : 'low';

      let statusBadge;
      if (r.current_occupancy >= r.capacity) {
        statusBadge = '<span class="badge badge-expired">Full</span>';
      } else if (r.current_occupancy === 0) {
        statusBadge = '<span class="badge badge-active">Vacant</span>';
      } else {
        statusBadge = '<span class="badge badge-in-progress">Partial</span>';
      }

      return `
        <tr>
          <td class="cell-mono">${r.room_id}</td>
          <td>${r.hostel}</td>
          <td>Floor ${r.floor}</td>
          <td>${r.type}</td>
          <td>${r.capacity}</td>
          <td>
            <div class="occupancy-bar">
              <div class="occupancy-track"><div class="occupancy-fill ${barClass}" style="width: ${pct}%"></div></div>
              <span class="cell-mono">${r.current_occupancy}/${r.capacity}</span>
            </div>
          </td>
          <td>${statusBadge}</td>
        </tr>
      `;
    }).join('');
  }

  // Occupancy filter chips
  container.querySelectorAll('[data-filter-occupancy]').forEach(chip => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('[data-filter-occupancy]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      occupancyFilter = chip.dataset.filterOccupancy;
      renderTable();
    });
  });

  document.getElementById('rooms-filter-hostel').addEventListener('change', renderTable);
  document.getElementById('rooms-filter-type').addEventListener('change', renderTable);

  renderTable();

  requestAnimationFrame(() => {
    document.getElementById('rooms-page')?.classList.replace('page-enter', 'page-active');
  });
}
