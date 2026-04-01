/* ─────────────────────────────────
   Admin Resources Page
   Contact directory — CRUD
   ───────────────────────────────── */

import { api } from '../../api.js';
import { toast } from '../../components/toast.js';

const CATEGORIES = ['Plumber','Electrician','WiFi','Authority','Other'];
const CAT_ICONS  = { Plumber:'🔧', Electrician:'⚡', WiFi:'📶', Authority:'🏛️', Other:'📋' };

export async function renderResources(container) {
  container.innerHTML = `<div class="page-loading">Loading…</div>`;
  try {
    const resources = await api.get('/resources');
    renderPage(container, resources);
  } catch(e) {
    container.innerHTML = `<div class="page-error">Failed to load: ${e.message}</div>`;
  }
}

function renderPage(container, initial) {
  let resources = initial;
  let filterCat = '';
  let editingId = null;

  container.innerHTML = `
    <div class="page-enter" id="resources-page">
      <div class="page-header">
        <h2>Resources &amp; Contacts</h2>
        <p>Manage the contact directory for maintenance staff and authorities.</p>
      </div>

      <!-- Add / Edit Form -->
      <div class="form-section" style="max-width: none; margin-bottom: var(--space-8);">
        <div class="form-section-title" id="resource-form-title">Add New Contact</div>
        <form id="resource-form" novalidate>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label" for="res-cat">Category</label>
              <select class="form-select" id="res-cat" required>
                <option value="">Select…</option>
                ${CATEGORIES.map(c => `<option value="${c}">${CAT_ICONS[c]} ${c}</option>`).join('')}
              </select>
              <div class="form-error" id="err-res-cat">Required</div>
            </div>
            <div class="form-group">
              <label class="form-label" for="res-name">Name / Organisation</label>
              <input type="text" class="form-input" id="res-name" placeholder="e.g. Vijay Electricals" required />
              <div class="form-error" id="err-res-name">Required</div>
            </div>
            <div class="form-group">
              <label class="form-label" for="res-phone">Phone</label>
              <input type="tel" class="form-input" id="res-phone" placeholder="10-digit number" />
            </div>
            <div class="form-group">
              <label class="form-label" for="res-email">Email</label>
              <input type="email" class="form-input" id="res-email" placeholder="contact@example.com" />
            </div>
            <div class="form-group full-width">
              <label class="form-label" for="res-notes">Notes</label>
              <textarea class="form-textarea" id="res-notes" rows="2" placeholder="Availability, instructions, etc."></textarea>
            </div>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary" id="btn-res-submit">Add Contact</button>
            <button type="button" class="btn btn-secondary" id="btn-res-cancel" style="display:none;">Cancel Edit</button>
          </div>
        </form>
      </div>

      <!-- Filter + Directory -->
      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">Contact Directory</div>
          <div style="display:flex; gap:var(--space-2); flex-wrap:wrap;">
            <select class="form-select" id="cat-filter-select" style="width:auto; padding:6px 28px 6px 12px; font-size:var(--text-sm);">
              <option value="">All Categories</option>
              ${CATEGORIES.map(c => `<option value="${c}">${CAT_ICONS[c]} ${c}</option>`).join('')}
            </select>
          </div>
        </div>
        <div id="resources-body"></div>
      </div>
    </div>
  `;

  function renderDirectory() {
    const filtered = filterCat ? resources.filter(r => r.category === filterCat) : resources;
    const el = document.getElementById('resources-body');
    if (filtered.length === 0) {
      el.innerHTML = `<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No contacts in this category.</p>`;
      return;
    }
    // Group by category
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
            <div style="display:flex; gap:4px; flex-shrink:0;">
              <button class="btn btn-sm btn-secondary" data-edit="${r.resource_id}">Edit</button>
              <button class="btn btn-sm btn-secondary" data-delete="${r.resource_id}" style="color:var(--accent-red);">Del</button>
            </div>
          </div>
        `).join('')}
        <hr style="border:none; border-top: 1px solid var(--border-subtle); margin: var(--space-3) 0;" />
      </div>
    `).join('');

    // Edit
    el.querySelectorAll('[data-edit]').forEach(btn => {
      btn.addEventListener('click', () => {
        const r = resources.find(x => x.resource_id === +btn.dataset.edit);
        if (!r) return;
        editingId = r.resource_id;
        document.getElementById('res-cat').value   = r.category;
        document.getElementById('res-name').value  = r.name;
        document.getElementById('res-phone').value = r.phone || '';
        document.getElementById('res-email').value = r.email || '';
        document.getElementById('res-notes').value = r.notes || '';
        document.getElementById('resource-form-title').textContent = 'Edit Contact';
        document.getElementById('btn-res-submit').textContent = 'Save Changes';
        document.getElementById('btn-res-cancel').style.display = '';
        document.getElementById('resource-form').scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Delete
    el.querySelectorAll('[data-delete]').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm('Delete this contact?')) return;
        btn.disabled = true;
        try {
          await api.delete(`/resources/${btn.dataset.delete}`);
          resources = resources.filter(r => r.resource_id !== +btn.dataset.delete);
          toast('Contact deleted.', 'success');
          renderDirectory();
        } catch(err) {
          toast(err.message, 'error');
          btn.disabled = false;
        }
      });
    });
  }

  // Category dropdown filter
  document.getElementById('cat-filter-select').addEventListener('change', e => {
    filterCat = e.target.value;
    renderDirectory();
  });

  // Cancel edit
  document.getElementById('btn-res-cancel').addEventListener('click', () => {
    editingId = null;
    document.getElementById('resource-form').reset();
    document.getElementById('resource-form-title').textContent = 'Add New Contact';
    document.getElementById('btn-res-submit').textContent = 'Add Contact';
    document.getElementById('btn-res-cancel').style.display = 'none';
  });

  // Form submit
  const form = document.getElementById('resource-form');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    container.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'));
    let valid = true;
    const category = document.getElementById('res-cat').value;
    const name     = document.getElementById('res-name').value.trim();
    if (!category) { document.getElementById('err-res-cat').classList.add('visible');  valid = false; }
    if (!name)     { document.getElementById('err-res-name').classList.add('visible'); valid = false; }
    if (!valid) return;

    const payload = {
      category, name,
      phone: document.getElementById('res-phone').value.trim() || null,
      email: document.getElementById('res-email').value.trim() || null,
      notes: document.getElementById('res-notes').value.trim() || null,
    };

    const btn = document.getElementById('btn-res-submit');
    btn.disabled = true;
    try {
      if (editingId) {
        const updated = await api.put(`/resources/${editingId}`, payload);
        resources = resources.map(r => r.resource_id === editingId ? updated : r);
        toast('Contact updated.', 'success');
        document.getElementById('btn-res-cancel').click();
      } else {
        const created = await api.post('/resources', payload);
        resources = [created, ...resources];
        toast('Contact added.', 'success');
        form.reset();
      }
      renderDirectory();
    } catch(err) {
      toast(err.message, 'error');
    } finally {
      btn.disabled = false;
    }
  });

  renderDirectory();
  requestAnimationFrame(() =>
    document.getElementById('resources-page')?.classList.replace('page-enter', 'page-active')
  );
}
