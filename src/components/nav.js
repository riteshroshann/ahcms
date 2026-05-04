/* ─────────────────────────────────
   Sidebar Navigation — Role-Aware
   ───────────────────────────────── */

import { getRole, getUser, logout } from '../auth.js';

const ICONS = {
  home:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  complaints: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="15" r="0.5" fill="currentColor"/></svg>`,
  booking:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
  forum:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-1"/><path d="M15 3H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l4-4h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/></svg>`,
  rooms:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  resources:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  logout:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  theme:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  menu:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  close:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
};

const STUDENT_NAV = [
  { id: 'home',       label: 'Home',            icon: ICONS.home },
  { id: 'complaints', label: 'Complaint',        icon: ICONS.complaints },
  { id: 'booking',    label: 'Room Booking',     icon: ICONS.booking },
  { id: 'forum',      label: 'Community Forum',  icon: ICONS.forum },
  { id: 'resources',  label: 'Resources',        icon: ICONS.resources },
];

const ADMIN_NAV = [
  { id: 'home',       label: 'Home',            icon: ICONS.home },
  { id: 'complaints', label: 'Complaints',       icon: ICONS.complaints },
  { id: 'rooms',      label: 'Room Details',     icon: ICONS.rooms },
  { id: 'forum',      label: 'Community Forum',  icon: ICONS.forum },
  { id: 'resources',  label: 'Resources',        icon: ICONS.resources },
];

export function renderNav(sidebarContainer, headerContainer, activeId, onNavigate) {
  const role  = getRole();
  const user  = getUser();
  const items = role === 'admin' ? ADMIN_NAV : STUDENT_NAV;
  const label = role === 'admin' ? 'Admin Panel' : 'Student Portal';

  // Format date like: "Mon May 04 2026 6:41:26 PM"
  const now = new Date();
  const dateStr = now.toDateString() + " " + now.toLocaleTimeString();

  if (headerContainer) {
    headerContainer.innerHTML = `
      <div class="header-left">
        <div class="header-logo">
          <div class="logo-circle">
            <svg viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
          </div>
        </div>
        <div class="header-title">
          <div class="title-main">Amrita University</div>
          <div class="title-sub">Management System</div>
        </div>
      </div>
      <div class="header-right">
        <div class="header-user-info">
          <div>Welcome ${user?.name || 'User'}</div>
          <div class="header-date">${dateStr}</div>
        </div>
        <div class="header-icons">
          <button class="header-icon" title="Messages"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></button>
          <button class="header-icon" title="Home" id="header-home"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></button>
          <button class="header-icon" title="Theme" id="header-theme"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></button>
          <button class="header-icon" title="Calendar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></button>
          <button class="header-icon" title="Notifications"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></button>
          <button class="header-icon" title="Logout" id="header-logout"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg></button>
        </div>
      </div>
    `;

    document.getElementById('header-home')?.addEventListener('click', () => onNavigate('home'));
    document.getElementById('header-logout')?.addEventListener('click', () => { logout(); window.location.reload(); });
    document.getElementById('header-theme')?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('ahcms_theme', next);
    });
  }

  sidebarContainer.innerHTML = `
    <div class="sidebar-tabs">
      <button class="sidebar-tab active"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" style="margin-right:4px;"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> Main</button>
      <button class="sidebar-tab"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" style="margin-right:4px;"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> LMS</button>
      <button class="sidebar-tab-menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Main Menu</div>
      ${items.map(item => `
        <a class="nav-item${item.id === activeId ? ' active' : ''}"
           data-page="${item.id}"
           id="nav-${item.id}"
           role="button"
           tabindex="0">
          ${item.icon}
          <span style="flex:1;">${item.label}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="nav-caret"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </a>
      `).join('')}
    </div>
  `;

  sidebarContainer.querySelectorAll('.nav-item[data-page]').forEach(el => {
    el.addEventListener('click', () => onNavigate(el.dataset.page));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
    });
  });
}

export function createMobileToggle() {
  const toggle = document.createElement('button');
  toggle.className = 'sidebar-toggle';
  toggle.id = 'sidebar-toggle';
  toggle.innerHTML = ICONS.menu;
  toggle.setAttribute('aria-label', 'Toggle navigation');

  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebar-overlay';

  document.body.appendChild(toggle);
  document.body.appendChild(overlay);

  const sidebar = document.getElementById('sidebar');

  function openSidebar()  { sidebar.classList.add('open'); overlay.classList.add('show'); toggle.innerHTML = ICONS.close; }
  function closeSidebar() { sidebar.classList.remove('open'); overlay.classList.remove('show'); toggle.innerHTML = ICONS.menu; }

  toggle.addEventListener('click', () => sidebar.classList.contains('open') ? closeSidebar() : openSidebar());
  overlay.addEventListener('click', closeSidebar);

  return { close: closeSidebar };
}
