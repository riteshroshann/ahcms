/* ─────────────────────────────────
   Student Resources Page
   Read-only contact directory
   ───────────────────────────────── */

import { api } from '../../api.js';

const CAT_ICONS = { Plumber:'🔧', Electrician:'⚡', WiFi:'📶', Authority:'🏛️', Other:'📋' };
const CATEGORIES = ['Plumber','Electrician','WiFi','Authority','Other'];

export async function renderStudentResources(container) {
  container.innerHTML = `<div class="page-loading">Loading resources…</div>`;
  try {
    const resources = await api.get('/resources');
    renderPage(container, resources);
  } catch(e) {
    container.innerHTML = `<div class="page-error">Failed to load: ${e.message}</div>`;
  }
}

function renderPage(container, resources) {
  let filterCat = '';

  container.innerHTML = `
    <div class="page-enter" id="student-resources-page">
      <div class="page-header">
        <h2>Resources &amp; Contacts</h2>
        <p>Emergency contacts, maintenance staff, and hostel authorities.</p>
      </div>

      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">Contact Directory</div>
          <div style="display:flex; gap:var(--space-2); flex-wrap:wrap;">
            <button class="filter-chip active" data-cat="">All</button>
            ${CATEGORIES.map(c => `<button class="filter-chip" data-cat="${c}">${CAT_ICONS[c]} ${c}</button>`).join('')}
          </div>
        </div>
        <div id="student-resources-body"></div>
      </div>
    </div>
  `;

  function renderDirectory() {
    const filtered = filterCat ? resources.filter(r => r.category === filterCat) : resources;
    const el = document.getElementById('student-resources-body');

    if (filtered.length === 0) {
      el.innerHTML = `<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No contacts in this category.</p>`;
      return;
    }

    const grouped = {};
    filtered.forEach(r => {
      if (!grouped[r.category]) grouped[r.category] = [];
      grouped[r.category].push(r);
    });

    el.innerHTML = Object.entries(grouped).map(([cat, items]) => `
      <div style="padding: var(--space-4) var(--space-6);">
        <div style="font-size: var(--text-xs); font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: var(--text-tertiary); margin-bottom: var(--space-3);">
          ${CAT_ICONS[cat] || ''} ${cat}
        </div>
        ${items.map(r => `
          <div class="contact-row" style="margin-bottom: var(--space-2);">
            <div class="contact-avatar">${r.name[0].toUpperCase()}</div>
            <div class="contact-info" style="flex:1;">
              <div class="contact-name">${r.name}</div>
              <div class="contact-meta">
                ${r.phone ? `📞 <a href="tel:${r.phone}" style="color:inherit;">${r.phone}</a>` : ''}
                ${r.email ? ` · 📧 <a href="mailto:${r.email}" style="color:inherit;">${r.email}</a>` : ''}
              </div>
              ${r.notes ? `<div style="font-size:var(--text-xs); color:var(--text-tertiary); margin-top:2px;">${r.notes}</div>` : ''}
            </div>
          </div>
        `).join('')}
        <hr style="border:none; border-top: 1px solid var(--border-subtle); margin: var(--space-3) 0;" />
      </div>
    `).join('');
  }

  container.querySelectorAll('[data-cat]').forEach(chip => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('[data-cat]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filterCat = chip.dataset.cat;
      renderDirectory();
    });
  });

  renderDirectory();
  requestAnimationFrame(() =>
    document.getElementById('student-resources-page')?.classList.replace('page-enter', 'page-active')
  );
}
