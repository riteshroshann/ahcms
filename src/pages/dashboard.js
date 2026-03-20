/* ─────────────────────────────────
   Dashboard Page
   Overview cards + activity feed
   ───────────────────────────────── */

import { getStats, getComplaints, getAllocations, getStudentById, getStudentsWithUnresolvedComplaints } from '../db.js';

export function renderDashboard(container) {
  const stats = getStats();
  const complaints = getComplaints().sort((a, b) => b.date.localeCompare(a.date));
  const recentComplaints = complaints.slice(0, 5);
  const flaggedStudents = getStudentsWithUnresolvedComplaints();

  container.innerHTML = `
    <div class="page-enter" id="dashboard-page">
      <div class="page-header">
        <h2>Dashboard</h2>
        <p>Overview of hostel occupancy, allocations, and complaint statuses across all hostels.</p>
      </div>

      <div class="card-grid">
        <div class="card card-accent-blue">
          <div class="card-label">Total Rooms</div>
          <div class="card-value">${stats.totalRooms}</div>
          <div class="card-sub">Across all hostels</div>
        </div>
        <div class="card card-accent-green">
          <div class="card-label">Vacant Rooms</div>
          <div class="card-value">${stats.vacantRooms}</div>
          <div class="card-sub">${stats.fullRooms} at full capacity</div>
        </div>
        <div class="card card-accent-purple">
          <div class="card-label">Active Allocations</div>
          <div class="card-value">${stats.activeAllocations}</div>
          <div class="card-sub">${stats.totalStudents} registered students</div>
        </div>
        <div class="card card-accent-amber">
          <div class="card-label">Open Complaints</div>
          <div class="card-value">${stats.openComplaints}</div>
          <div class="card-sub">${stats.inProgressComplaints} in progress</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6);">
        <!-- Recent Complaints -->
        <div class="form-section" style="max-width: none;">
          <div class="form-section-title">Recent Complaints</div>
          <div class="activity-list">
            ${recentComplaints.map(c => {
              const student = getStudentById(c.student_id);
              const dotColor = c.status === 'open' ? 'var(--accent-amber)'
                : c.status === 'in-progress' ? 'var(--accent-blue)'
                : 'var(--accent-green)';
              return `
                <div class="activity-item">
                  <div class="activity-dot" style="background: ${dotColor}"></div>
                  <div class="activity-content">
                    <div class="activity-text">
                      <strong>${student?.name || c.student_id}</strong> — ${c.category}
                      <span class="badge badge-${c.status}">${c.status}</span>
                    </div>
                    <div class="activity-time">${c.room_id} · ${c.date}</div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Flagged Students -->
        <div class="form-section" style="max-width: none;">
          <div class="form-section-title">Flagged Students</div>
          <p style="font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: var(--space-4);">
            Students with multiple unresolved complaints
          </p>
          ${flaggedStudents.length === 0
            ? '<p style="font-size: var(--text-sm); color: var(--text-tertiary); padding: var(--space-8) 0; text-align: center;">No flagged students</p>'
            : `<div class="activity-list">
                ${flaggedStudents.map(s => `
                  <div class="activity-item">
                    <div class="activity-dot" style="background: var(--accent-red)"></div>
                    <div class="activity-content">
                      <div class="activity-text"><strong>${s.name}</strong></div>
                      <div class="activity-time">${s.student_id} · ${s.unresolved_count} unresolved · ${s.hostel}</div>
                    </div>
                  </div>
                `).join('')}
              </div>`
          }
        </div>
      </div>

      <!-- Occupancy Summary -->
      <div class="form-section" style="max-width: none; margin-top: var(--space-6);">
        <div class="form-section-title">Occupancy Overview</div>
        <div class="card-grid" style="margin-bottom: 0;">
          <div class="card" style="text-align: center;">
            <div class="card-label">Total Capacity</div>
            <div class="card-value" style="font-size: var(--text-2xl);">${stats.totalCapacity}</div>
            <div class="card-sub">beds available</div>
          </div>
          <div class="card" style="text-align: center;">
            <div class="card-label">Occupied</div>
            <div class="card-value" style="font-size: var(--text-2xl);">${stats.totalOccupied}</div>
            <div class="card-sub">${Math.round((stats.totalOccupied / stats.totalCapacity) * 100)}% utilization</div>
          </div>
          <div class="card" style="text-align: center;">
            <div class="card-label">Resolved</div>
            <div class="card-value" style="font-size: var(--text-2xl);">${stats.resolvedComplaints}</div>
            <div class="card-sub">of ${stats.totalComplaints} total</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Animate in
  requestAnimationFrame(() => {
    document.getElementById('dashboard-page')?.classList.replace('page-enter', 'page-active');
  });
}
