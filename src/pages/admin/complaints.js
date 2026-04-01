/* ─────────────────────────────────
   Admin Complaints Page
   View all, update status, filter
   ───────────────────────────────── */

import { api } from '../../api.js';
import { toast } from '../../components/toast.js';

const CAT_ICONS  = { Plumbing:'🔧', Electricity:'⚡', WiFi:'📶', Cleanliness:'🧹', Carpentry:'🔨', Other:'📋' };
const STATUSES   = ['open','in-progress','resolved'];
const CATEGORIES = ['Plumbing','Electricity','WiFi','Cleanliness','Carpentry','Other'];

export async function renderAdminComplaints(container) {
  container.innerHTML = `<div class="page-loading">Loading…</div>`;
  try {
    const complaints = await api.get('/complaints');
    renderPage(container, complaints);
  } catch(e) {
    container.innerHTML = `<div class="page-error">Failed to load: ${e.message}</div>`;
  }
}

function renderPage(container, initial) {
  let complaints = initial;
  let filterStatus = 'all';
  let filterCat = '';
  let expandedId = null;

  container.innerHTML = `
    <div class="page-enter" id="admin-complaints-page">
      <div class="page-header">
        <h2>Complaints Management</h2>
        <p>Review, approve, and update status of all hostel complaints.</p>
      </div>

      <!-- Summary chips -->
      <div class="card-grid" style="margin-bottom: var(--space-6);">
        <div class="card" style="text-align:center; cursor:pointer;" data-quick="all">
          <div class="card-label">Total</div>
          <div class="card-value" style="font-size:var(--text-2xl);">${complaints.length}</div>
        </div>
        ${STATUSES.map(s => {
          const n = complaints.filter(c => c.status === s).length;
          const accent = s === 'open' ? 'amber' : s === 'in-progress' ? 'blue' : 'green';
          return `<div class="card card-accent-${accent}" style="text-align:center; cursor:pointer;" data-quick="${s}">
            <div class="card-label">${s}</div>
            <div class="card-value" style="font-size:var(--text-2xl);">${n}</div>
          </div>`;
        }).join('')}
      </div>

      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">All Complaints</div>
          <div style="display:flex; gap: var(--space-2); flex-wrap: wrap; align-items: center;">
            <select class="form-select" id="cat-filter" style="width: auto; padding: 4px 28px 4px 10px; font-size: var(--text-xs);">
              <option value="">All Categories</option>
              ${CATEGORIES.map(c => `<option value="${c}">${CAT_ICONS[c]} ${c}</option>`).join('')}
            </select>
            <button class="filter-chip active" data-status="all">All</button>
            ${STATUSES.map(s => `<button class="filter-chip" data-status="${s}">${s}</button>`).join('')}
          </div>
        </div>
        <div id="complaints-body"></div>
      </div>
    </div>
  `;

  function filtered() {
    let list = complaints;
    if (filterCat)          list = list.filter(c => c.category === filterCat);
    if (filterStatus !== 'all') list = list.filter(c => c.status === filterStatus);
    return list;
  }

  function renderTable() {
    const items = filtered();
    const el = document.getElementById('complaints-body');

    if (items.length === 0) {
      el.innerHTML = `<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No complaints match the current filter.</p>`;
      return;
    }

    el.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>#</th><th>Student</th><th>Room</th><th>Category</th>
            <th>Description</th><th>Date</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody id="cmp-tbody">
          ${items.map(c => `
            <tr class="cmp-row${expandedId === c.complaint_id ? ' expanded-row' : ''}" data-id="${c.complaint_id}">
              <td class="cell-mono">${c.complaint_id}</td>
              <td><div>${c.student_name || c.student_id}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${c.roll_no || ''}</div></td>
              <td class="cell-mono">${c.room_id || '—'}</td>
              <td>${CAT_ICONS[c.category] || ''} ${c.category}</td>
              <td style="max-width:180px; overflow:hidden; text-overflow:ellipsis;" title="${c.description}">${c.description.slice(0,45)}${c.description.length > 45 ? '…' : ''}</td>
              <td class="cell-mono">
                <div>${c.date}</div>
                ${c.resolved_date ? `<div style="font-size:10px; color:var(--accent-green); margin-top:2px;">Res: ${c.resolved_date}</div>` : ''}
              </td>
              <td><span class="badge badge-${c.status}">${c.status}</span></td>
              <td>
                ${c.status !== 'resolved' ? `
                  <div style="display:flex; gap:4px;">
                    ${c.status === 'open'
                      ? `<button class="btn btn-sm btn-secondary" data-action="in-progress" data-id="${c.complaint_id}">Start</button>`
                      : ''}
                    <button class="btn btn-sm btn-primary" data-action="resolved" data-id="${c.complaint_id}">Resolve</button>
                  </div>
                ` : `<span style="color:var(--text-tertiary); font-size:var(--text-xs);">Done</span>`}
              </td>
            </tr>
            ${c.photo_base64 ? `
              <tr class="photo-row" data-for="${c.complaint_id}" style="${expandedId === c.complaint_id ? '' : 'display:none'}">
                <td colspan="8" style="padding: var(--space-3) var(--space-6); background: var(--bg-elevated);">
                  <img src="${c.photo_base64}" alt="Complaint photo" style="max-width:280px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);" />
                  ${c.admin_note ? `<p style="font-size:var(--text-xs); color:var(--text-secondary); margin-top: var(--space-2);">Note: ${c.admin_note}</p>` : ''}
                </td>
              </tr>
            ` : ''}
          `).join('')}
        </tbody>
      </table>
    `;

    // Action buttons
    el.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const cmpId = +btn.dataset.id;
        const status = btn.dataset.action;
        btn.disabled = true;
        try {
          const updated = await api.patch(`/complaints/${cmpId}/status`, { status });
          complaints = complaints.map(c => c.complaint_id === cmpId ? { ...c, ...updated } : c);
          toast(`Complaint #${cmpId} → ${status}`, 'success');
          renderTable();
        } catch(err) {
          toast(err.message, 'error');
          btn.disabled = false;
        }
      });
    });

    // Expand photo row on row click
    el.querySelectorAll('.cmp-row').forEach(row => {
      row.addEventListener('click', () => {
        const id = +row.dataset.id;
        expandedId = expandedId === id ? null : id;
        renderTable();
      });
    });
  }

  // Status filter chips
  container.querySelectorAll('[data-status]').forEach(chip => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('[data-status]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filterStatus = chip.dataset.status;
      renderTable();
    });
  });

  // Quick filter from cards
  container.querySelectorAll('[data-quick]').forEach(card => {
    card.addEventListener('click', () => {
      filterStatus = card.dataset.quick;
      container.querySelectorAll('[data-status]').forEach(c => c.classList.remove('active'));
      container.querySelector(`[data-status="${filterStatus}"]`)?.classList.add('active');
      renderTable();
    });
  });

  // Category filter
  document.getElementById('cat-filter').addEventListener('change', e => {
    filterCat = e.target.value;
    renderTable();
  });

  renderTable();
  requestAnimationFrame(() =>
    document.getElementById('admin-complaints-page')?.classList.replace('page-enter', 'page-active')
  );
}
