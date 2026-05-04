/* ─────────────────────────────────
   Main Application — SPA Router
   Role-aware, auth-gated routing
   ───────────────────────────────── */

import './style.css';
import { renderNav, createMobileToggle } from './components/nav.js';
import { isLoggedIn, getRole, logout }   from './auth.js';
import { renderLogin }                   from './pages/login.js';

// Student pages
import { renderStudentHome }      from './pages/student/home.js';
import { renderStudentComplaints} from './pages/student/complaints.js';
import { renderRoomBooking }      from './pages/student/booking.js';
import { renderForum }            from './pages/forum.js';
import { renderStudentResources } from './pages/student/resources.js';

// Admin pages
import { renderAdminHome }        from './pages/admin/home.js';
import { renderAdminComplaints }  from './pages/admin/complaints.js';
import { renderAdminRooms }       from './pages/admin/rooms.js';
import { renderAdminForum }       from './pages/admin/forum.js';
import { renderResources }        from './pages/admin/resources.js';

// ── Page Maps ─────────────────────────────────────────────────
const STUDENT_PAGES = {
  home:       renderStudentHome,
  complaints: renderStudentComplaints,
  booking:    renderRoomBooking,
  forum:      renderForum,
  resources:  renderStudentResources,
};

const ADMIN_PAGES = {
  home:       renderAdminHome,
  complaints: renderAdminComplaints,
  rooms:      renderAdminRooms,
  forum:      renderAdminForum,
  resources:  renderResources,
};

let currentPage   = 'home';
let mobileToggle  = null;

function getPages() {
  return getRole() === 'admin' ? ADMIN_PAGES : STUDENT_PAGES;
}

function navigate(page) {
  const pages = getPages();
  if (!pages[page]) page = 'home';
  currentPage = page;

  window.location.hash = page;

  const sidebar = document.getElementById('sidebar');
  const main    = document.getElementById('main-content');

  renderNav(sidebar, document.getElementById('top-header'), currentPage, navigate);
  pages[page](main, () => navigate(currentPage));

  if (mobileToggle) mobileToggle.close();
}

function buildShell() {
  document.body.innerHTML = `
    <div id="app" class="app-layout">
      <header id="top-header" class="top-header"></header>
      <div class="app-body">
        <aside id="sidebar" class="sidebar"></aside>
        <main id="main-content" class="main"></main>
      </div>
    </div>
  `;
}

function init() {
  if (!isLoggedIn()) {
    renderLogin(() => {
      // After login success, rebuild the shell
      buildShell();
      bootRouter();
    });
    return;
  }
  buildShell();
  bootRouter();
}

function bootRouter() {
  mobileToggle = createMobileToggle();

  const hash = window.location.hash.replace('#', '');
  const pages = getPages();
  currentPage = pages[hash] ? hash : 'home';

  navigate(currentPage);

  window.addEventListener('hashchange', () => {
    const h = window.location.hash.replace('#', '');
    if (getPages()[h] && h !== currentPage) navigate(h);
  });
}

// Apply theme before first render (default: light)
(function () {
  const theme = localStorage.getItem('ahcms_theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
})();

init();
