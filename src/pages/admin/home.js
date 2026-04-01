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

function renderPage(container, { stats, recentComplaints, wardens, wardenOfficePhone }) {
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
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:var(--space-2); margin-bottom:var(--space-4);">
            <div class="form-section-title" style="margin-bottom:0;">On-Duty Wardens</div>
            ${wardenOfficePhone ? `
              <a href="tel:${wardenOfficePhone}" style="
                display: inline-flex; align-items: center; gap: 6px;
                background: color-mix(in srgb, var(--accent-green) 12%, transparent);
                border: 1px solid color-mix(in srgb, var(--accent-green) 30%, transparent);
                color: var(--accent-green);
                font-size: var(--text-xs);
                font-weight: 600;
                letter-spacing: .04em;
                padding: 4px 10px;
                border-radius: 999px;
                text-decoration: none;
                transition: background .15s, transform .1s;
              "
              onmouseover="this.style.background='color-mix(in srgb,var(--accent-green) 22%,transparent)'; this.style.transform='scale(1.03)'"
              onmouseout="this.style.background='color-mix(in srgb,var(--accent-green) 12%,transparent)'; this.style.transform='scale(1)'"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Office: ${wardenOfficePhone}
              </a>` : ''}
          </div>
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
