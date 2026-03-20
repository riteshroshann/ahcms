/* ─────────────────────────────────
   Main Application — SPA Router
   ───────────────────────────────── */

import { renderNav, createMobileToggle } from './components/nav.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderAllocation } from './pages/allocation.js';
import { renderRooms } from './pages/rooms.js';
import { renderComplaints } from './pages/complaints.js';
import { renderChatbot } from './pages/chatbot.js';

const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main-content');

const PAGES = {
  dashboard:  renderDashboard,
  allocation: renderAllocation,
  rooms:      renderRooms,
  complaints: renderComplaints,
  chatbot:    renderChatbot,
};

let currentPage = 'dashboard';
let mobileToggle = null;

function navigate(page) {
  if (!PAGES[page]) return;
  currentPage = page;

  // Update URL hash
  window.location.hash = page;

  // Re-render nav with active state
  renderNav(sidebar, currentPage, navigate);

  // Render page content
  PAGES[page](main, () => navigate(currentPage));

  // Close mobile sidebar
  if (mobileToggle) mobileToggle.close();
}

// Initialize
function init() {
  mobileToggle = createMobileToggle();

  // Check URL hash for initial page
  const hash = window.location.hash.replace('#', '');
  if (PAGES[hash]) {
    currentPage = hash;
  }

  navigate(currentPage);

  // Handle browser back/forward
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (PAGES[hash] && hash !== currentPage) {
      navigate(hash);
    }
  });
}

init();
