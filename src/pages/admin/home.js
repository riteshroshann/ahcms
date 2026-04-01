/* ─────────────────────────────────
   Admin Home Page
   Stats · Wardens · Recent Complaints
   ───────────────────────────────── */

import { api } from '../../api.js';

export async function renderAdminHome(container) {
  container.innerHTML = `<div class="page-loading">Loading…</div>`;
  try {
    const data = await api.get('/dashboard/admin');
    renderPage(container, data);
  } catch(e) {
    container.innerHTML = `<div class="page-error">Failed to load: ${e.message}</div>`;
  }
}

function renderPage(container, { stats, recentComplaints, wardens }) {
  const wardenList = wardens.filter(w => w.role === 'Warden');
  const guardList  = wardens.filter(w => w.role === 'Guard');
  const occ = stats.totalCapacity > 0 ? Math.round((stats.totalOccupied / stats.totalCapacity) * 100) : 0;

  container.innerHTML = `
    <div class="page-enter" id="admin-home">
      <div class="page-header">
        <h2>Admin Dashboard</h2>
        <p>System-wide overview — hostel occupancy, complaints, and on-duty staff.</p>
      </div>

      <!-- Stat Cards -->
      <div class="card-grid">
        <div class="card card-accent-blue">
          <div class="card-label">Total Rooms</div>
          <div class="card-value">${stats.totalRooms}</div>
          <div class="card-sub">${stats.vacantRooms} vacant · ${occ}% utilized</div>
        </div>
        <div class="card card-accent-amber">
          <div class="card-label">Open Complaints</div>
          <div class="card-value">${stats.openComplaints}</div>
          <div class="card-sub">${stats.inProgressComplaints} in progress</div>
        </div>
        <div class="card card-accent-green">
          <div class="card-label">Resolved</div>
          <div class="card-value">${stats.resolvedComplaints}</div>
          <div class="card-sub">complaints closed</div>
        </div>
        <div class="card card-accent-purple">
          <div class="card-label">Students</div>
          <div class="card-value">${stats.totalStudents}</div>
          <div class="card-sub">${stats.pendingBookings} pending bookings</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6);">
        <!-- On-duty Wardens -->
        <div class="form-section" style="max-width: none;">
          <div class="form-section-title">On-Duty Wardens</div>
          ${wardenList.map(w => `
            <div class="contact-row">
              <div class="contact-avatar">${w.name[0]}</div>
              <div class="contact-info">
                <div class="contact-name">${w.name}</div>
                <div class="contact-meta">${w.hostel} · ${w.shift} · ${w.email || ''}</div>
              </div>
              <a href="tel:${w.phone}" class="contact-phone">${w.phone || '—'}</a>
            </div>
          `).join('')}
          <div class="form-section-title" style="margin-top: var(--space-5);">On-Duty Guards</div>
          ${guardList.map(w => `
            <div class="contact-row">
              <div class="contact-avatar guard">${w.name[0]}</div>
              <div class="contact-info">
                <div class="contact-name">${w.name}</div>
                <div class="contact-meta">${w.hostel} · ${w.shift} shift</div>
              </div>
              <a href="tel:${w.phone}" class="contact-phone">${w.phone || '—'}</a>
            </div>
          `).join('')}
        </div>

        <!-- Recent Complaints -->
        <div class="form-section" style="max-width: none;">
          <div class="form-section-title">Recent Complaints</div>
          <div class="activity-list">
            ${recentComplaints.map(c => {
              const color = c.status === 'open' ? 'var(--accent-amber)'
                : c.status === 'in-progress' ? 'var(--accent-blue)' : 'var(--accent-green)';
              return `
                <div class="activity-item">
                  <div class="activity-dot" style="background:${color}"></div>
                  <div class="activity-content">
                    <div class="activity-text">
                      <strong>${c.student_name || c.student_id}</strong> — ${c.category}
                      <span class="badge badge-${c.status}">${c.status}</span>
                    </div>
                    <div class="activity-time">${c.date} · ${c.room_id || '—'}</div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
          <a class="link-accent" href="#complaints" style="display:block;margin-top:var(--space-4);font-size:var(--text-sm);">Manage all complaints →</a>
        </div>
      </div>

      <!-- Occupancy Bar -->
      <div class="form-section" style="max-width: none; margin-top: var(--space-6);">
        <div class="form-section-title">Occupancy Overview</div>
        <div class="occ-overview">
          <div class="occ-track-outer">
            <div class="occ-track-inner" style="width: ${occ}%"></div>
          </div>
          <span style="font-size:var(--text-sm); color:var(--text-secondary);">${stats.totalOccupied} / ${stats.totalCapacity} beds · ${occ}%</span>
        </div>
        <div class="card-grid" style="margin-top: var(--space-4); margin-bottom: 0;">
          <div class="card" style="text-align:center;">
            <div class="card-label">Total Beds</div>
            <div class="card-value" style="font-size:var(--text-2xl);">${stats.totalCapacity}</div>
          </div>
          <div class="card" style="text-align:center;">
            <div class="card-label">Occupied</div>
            <div class="card-value" style="font-size:var(--text-2xl);">${stats.totalOccupied}</div>
          </div>
          <div class="card" style="text-align:center;">
            <div class="card-label">Vacant</div>
            <div class="card-value" style="font-size:var(--text-2xl); color: var(--accent-green);">${stats.totalCapacity - stats.totalOccupied}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.querySelectorAll('a.link-accent[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      window.location.hash = a.getAttribute('href').slice(1);
    });
  });

  requestAnimationFrame(() =>
    document.getElementById('admin-home')?.classList.replace('page-enter', 'page-active')
  );
}
