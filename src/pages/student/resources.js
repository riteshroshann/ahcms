/* ─────────────────────────────────
   Student Resources Hub
   Mess menu · Pharmacy · Hospital
   Laundry · Canteens · Contacts
   ───────────────────────────────── */

import { api } from '../../api.js';

// ── Meal data ──────────────────────────────────────────────────
const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

const MENU = {
  breakfast: [
    ['Poori Chole',    'Matter Kulcha',   'Kachori Bhaji',   'Dosa Sambar',          'Pav Bhaji',     'Macaroni',   'Aloo Paratha'],
    ['Chacos',         'Idli Sambar',     'Daliya',          'Chana Chaat',           'Corn Flakes',   'Idli Sambar','Cut Fruits'],
    ['Egg',            'Banana',          'Egg',             '—',                     'Egg',           '—',          '—'],
    ['Tea / Coffee',   'Tea / Coffee',    'Tea / Coffee',    'Tea / Coffee',          'Tea / Coffee',  'Tea / Coffee','Tea / Coffee'],
    ['Bread & Jam / Butter','Bread & Jam / Butter','Bread & Jam / Butter','Bread & Jam / Butter','Bread & Jam / Butter','Bread & Jam / Butter','Bread & Jam / Butter'],
  ],
  lunch: [
    ['Green Salad',    'Green Salad',     'Green Salad',     'Green Salad',           'Green Salad',   'Green Salad','Green Salad'],
    ['Boondi Raita',   'Mix Veg Raita',   'Lauki Raita',     'Mix Veg Raita',         'Boondi Raita',  'Mix Veg Raita','Mint Raita'],
    ['A / P / C',      'A / P / C',       'A / P / C',       'A / P / C',             'A / P / C',     'A / P / C',  'A / P / C'],
    ['Mix Dal Tadka',  'Chole Masala',    'Kadi Pakora',     'Lobhiya / Black Masoor Dal','Rajma Masala','Dal Makhani','Dal Tadka'],
    ['Matar Paneer',   'Aloo Nutrela',    'Mixed Vegetable', 'Paneer Do Pyaza',       'Handi Kofta Curry','Aloo Gobhi Masala','Chap Masala'],
    ['Aloo Palak',     'Boiled Rice',     'Soya Chap Gravy', 'Boiled Rice',           'Boiled Rice',   'Boiled Rice','Veg Biryani'],
    ['Boiled Rice',    'Chapathi',        'Jeera Rice',      'Cut Fruits',            'Chapathi',      'Chapathi',   'Chapathi'],
    ['Chapathi',       'Ice Cream',       'Chapathi',        'Chapathi',              '—',             'Besan Barfi','Fruit Custard'],
  ],
  hitea: [
    ['Tea / Coffee',   'Tea / Coffee',    'Tea / Coffee',    'Tea / Coffee',          'Tea / Coffee',  'Tea / Coffee','Tea / Coffee'],
    ['Veg Hakka Noodles','Bhaji Pakora',  'Veg Sandwich',    'Bread Pakora',          'Cake Slice',    'Potato Wedges','Aloo Sandwich'],
  ],
  dinner: [
    ['Green Salad',    'Green Salad',     'Green Salad',     'Green Salad',           'Green Salad',   'Green Salad','Green Salad'],
    ['Dal Bukhara',    'Curd',            'Rajma Masala',    'Curd',                  'Dal Palak',     'Khichdi',    'Curd'],
    ['Veg Jalfrezi',   'Arhar Dal Fry',   'Palak Paneer',    'Mix Dal Tadka',         'Soya Matar Masala','Mix Vegetable','Dal Dhaba'],
    ['Jeera Dhaniya Pulao','Crispy Veg in Sweet Chilly','Onion Pulao','Aloo Chole',  'Tomato Rice',   'Chapati',    'Paneer Lababdar'],
    ['Chapathi',       'Aloo Jeera',      'Chapathi',        'Masala Rice',           'Chapathi',      'Hot Milk',   'Jeera Pulao'],
    ['Milk',           'Soya Biryani',    'Milk',            'Chapathi',              'Milk',          '—',          'Chapathi'],
    ['Rice Kheer',     'Chapathi',        'Fruit Custard',   'Milk',                  'Boondi',        '—',          'Milk'],
    ['—',              'Milk',            '—',               '—',                     '—',             '—',          '—'],
  ],
};

const MEAL_META = {
  breakfast: { label: 'Breakfast',     emoji: '🌅', time: '7:30 – 9:30 AM'  },
  lunch:     { label: 'Lunch',         emoji: '☀️', time: '12:30 – 2:30 PM' },
  hitea:     { label: 'Evening Hi-Tea',emoji: '🫖', time: '5:00 – 6:30 PM'  },
  dinner:    { label: 'Dinner',        emoji: '🌙', time: '7:30 – 9:30 PM'  },
};

// ── Helpers ────────────────────────────────────────────────────
function todayColIndex() {
  // 0=Sun → we want Mon=0
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1;
}

function todayMeal() {
  const h = new Date().getHours();
  if (h < 10)  return 'breakfast';
  if (h < 15)  return 'lunch';
  if (h < 19)  return 'hitea';
  return 'dinner';
}

// ── Main renderer ──────────────────────────────────────────────
export async function renderStudentResources(container) {
  container.innerHTML = `<div class="page-loading">Loading resources…</div>`;
  let contacts = [];
  try { contacts = await api.get('/resources'); } catch(_) {}
  renderPage(container, contacts);
}

function renderPage(container, contacts) {
  const todayIdx  = todayColIndex();
  const activeMeal = todayMeal();

  container.innerHTML = `
    <div class="page-enter" id="student-resources-page">

      <!-- ── Header ─────────────────────────────────── -->
      <div class="page-header" style="margin-bottom: var(--space-8);">
        <h2 style="font-size: clamp(1.5rem, 3vw, 2rem);">Student Resources</h2>
        <p style="color: var(--text-secondary);">Mess menu · Pharmacy · Hospital · Laundry · Canteens · Contacts</p>
      </div>

      <!-- ── Quick-access cards ─────────────────────── -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-8);">
        ${quickCard('🍽️','Mess Menu','#section-menu')}
        ${quickCard('💊','Pharmacy','#section-pharmacy')}
        ${quickCard('🏥','Hospital Booking','#section-hospital')}
        ${quickCard('👕','Laundry', '#section-laundry')}
        ${quickCard('🍕','Canteens','#section-canteens')}
        ${quickCard('📞','Contacts','#section-contacts')}
      </div>

      <!-- ══════════════════════════════════════════════
           MESS MENU
      ══════════════════════════════════════════════ -->
      <section id="section-menu" style="margin-bottom: var(--space-10);">
        <div style="display:flex; align-items:center; gap:var(--space-3); margin-bottom:var(--space-6);">
          <span style="font-size:1.6rem;">🍽️</span>
          <div>
            <h3 style="margin:0; font-size:1.25rem;">Weekly Mess Menu</h3>
            <span style="font-size:var(--text-xs); color:var(--text-tertiary);">Menu may be amended based on seasonal vegetable availability</span>
          </div>
        </div>

        <!-- Meal tabs -->
        <div class="cat-tabs" style="margin-bottom: var(--space-6);" id="meal-tabs">
          ${Object.entries(MEAL_META).map(([key, m]) => `
            <button class="cat-tab${key === activeMeal ? ' active' : ''}" data-meal="${key}">
              ${m.emoji} ${m.label}
              <span style="font-size:10px; opacity:0.7; display:block; line-height:1.2;">${m.time}</span>
            </button>
          `).join('')}
        </div>

        <!-- Day selector (mobile) -->
        <div style="display:flex; gap:var(--space-2); flex-wrap:wrap; margin-bottom:var(--space-4);" id="day-tabs">
          ${DAYS.map((d, i) => `
            <button class="filter-chip${i === todayIdx ? ' active' : ''}" data-day="${i}" style="font-size:var(--text-xs);">
              ${d.slice(0,3)}${i === todayIdx ? ' 📍' : ''}
            </button>
          `).join('')}
        </div>

        <!-- Menu grid -->
        <div id="menu-panel"></div>

        <!-- Friday Live Counter note -->
        <div style="margin-top:var(--space-5); padding:var(--space-4) var(--space-5); background:var(--bg-elevated); border-radius:var(--radius-lg); border:1px solid rgba(251,191,36,.25);">
          <div style="font-size:var(--text-sm); color:var(--accent-amber, #f59e0b); font-weight:600; margin-bottom:var(--space-2);">⭐ Monthly Live Food Counter (One Friday/month)</div>
          <div style="display:flex; gap:var(--space-6); flex-wrap:wrap;">
            ${['Tandoor / Poori','Matar Paneer','One Sweet'].map(i=>`
              <span style="font-size:var(--text-sm); color:var(--text-secondary);">• ${i}</span>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════
           PHARMACY
      ══════════════════════════════════════════════ -->
      <section id="section-pharmacy" style="margin-bottom: var(--space-10);">
        <div style="display:flex; align-items:center; gap:var(--space-3); margin-bottom:var(--space-5);">
          <span style="font-size:1.6rem;">💊</span>
          <h3 style="margin:0; font-size:1.25rem;">Pharmacy / Medical Store</h3>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:var(--space-4);">
          ${infoCard('🏪 Campus Pharmacy',`
            <div class="info-row">📍 Ground Floor, OPD Block, Amrita Hospital</div>
            <div class="info-row">📞 <a href="tel:01294090000" class="link-call">0129-409-0000</a></div>
            <div class="info-row">🕐 Mon–Sat: 8 AM – 9 PM &nbsp;|&nbsp; Sun: 9 AM – 6 PM</div>
            <div class="info-row" style="color:var(--accent-green)">✅ Prescription medicines · OTC drugs · Medical supplies</div>
          `)}
          ${infoCard('🏥 24-Hour Emergency Pharmacy',`
            <div class="info-row">📍 Emergency Block, Ground Floor</div>
            <div class="info-row">📞 <a href="tel:01294090911" class="link-call">0129-409-0911</a></div>
            <div class="info-row">🕐 Open 24 × 7</div>
            <div class="info-row" style="color:var(--accent-amber, #f59e0b)">⚡ Emergency medications only</div>
          `)}
        </div>
      </section>

      <!-- ══════════════════════════════════════════════
           HOSPITAL APPOINTMENT
      ══════════════════════════════════════════════ -->
      <section id="section-hospital" style="margin-bottom: var(--space-10);">
        <div style="display:flex; align-items:center; gap:var(--space-3); margin-bottom:var(--space-5);">
          <span style="font-size:1.6rem;">🏥</span>
          <h3 style="margin:0; font-size:1.25rem;">Hospital Appointment Booking</h3>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:var(--space-4);">
          ${infoCard('🌐 Online Booking — Amrita Hospital Faridabad',`
            <div class="info-row" style="margin-bottom:var(--space-3);">Book OPD appointments directly on the Amrita portal.</div>
            <a href="https://www.amritahospitals.org/faridabad/book-appointment"
               target="_blank" rel="noopener"
               style="display:inline-flex; align-items:center; gap:var(--space-2); padding:10px 20px; background:var(--accent-blue,#3b82f6); color:#fff; border-radius:var(--radius-md); font-size:var(--text-sm); font-weight:600; text-decoration:none; transition:opacity .2s;"
               onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
              📅 Book Appointment →
            </a>
          `)}
          ${infoCard('☎️ Appointment Helpline',`
            <div class="info-row">📞 <a href="tel:01294090100" class="link-call">0129-409-0100</a></div>
            <div class="info-row">📞 <a href="tel:18001024647" class="link-call">1800-102-4647</a> (Toll Free)</div>
            <div class="info-row">🕐 Mon–Sat: 8 AM – 6 PM</div>
            <div class="info-row">📧 <a href="mailto:appointments.fbd@amrita.edu" style="color:var(--accent-blue,#3b82f6);">appointments.fbd@amrita.edu</a></div>
          `)}
        </div>
      </section>

      <!-- ══════════════════════════════════════════════
           LAUNDRY
      ══════════════════════════════════════════════ -->
      <section id="section-laundry" style="margin-bottom: var(--space-10);">
        <div style="display:flex; align-items:center; gap:var(--space-3); margin-bottom:var(--space-5);">
          <span style="font-size:1.6rem;">👕</span>
          <h3 style="margin:0; font-size:1.25rem;">Laundry Schedule</h3>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:var(--space-4);">
          ${infoCard('📅 Collection & Delivery Days',`
            <div style="display:grid; gap:var(--space-2);">
              ${[
                ['Monday',    'Collection – Boys Hostel (Senior MBBS)'],
                ['Tuesday',   'Collection – Girls Hostel (Senior MBBS)'],
                ['Wednesday', 'Collection – Sardha Block A & B'],
                ['Thursday',  'Delivery – Boys Hostel (Senior MBBS)'],
                ['Friday',    'Delivery – Girls Hostel (Senior MBBS)'],
                ['Saturday',  'Delivery – Sardha Block A & B'],
              ].map(([d,t])=>`
                <div style="display:flex; gap:var(--space-3); align-items:flex-start; font-size:var(--text-sm);">
                  <span style="min-width:90px; font-weight:600; color:var(--text-primary);">${d}</span>
                  <span style="color:var(--text-secondary);">${t}</span>
                </div>
              `).join('')}
            </div>
          `)}
          ${infoCard('ℹ️ Instructions',`
            <div style="display:grid; gap:var(--space-2); font-size:var(--text-sm); color:var(--text-secondary);">
              <div>• Keep clothes in the bag provided by the laundry service</div>
              <div>• Label all items with your name & roll number</div>
              <div>• Dry-clean items must be given separately</div>
              <div>• Lost/damaged items — report within 24 hrs of delivery</div>
              <div>📞 Laundry helpline: <a href="tel:9999000001" class="link-call">9999-000-001</a></div>
            </div>
          `)}
        </div>
      </section>

      <!-- ══════════════════════════════════════════════
           CANTEENS
      ══════════════════════════════════════════════ -->
      <section id="section-canteens" style="margin-bottom: var(--space-10);">
        <div style="display:flex; align-items:center; gap:var(--space-3); margin-bottom:var(--space-5);">
          <span style="font-size:1.6rem;">🍕</span>
          <h3 style="margin:0; font-size:1.25rem;">Canteen & Food Delivery</h3>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(290px, 1fr)); gap:var(--space-4);">

          <!-- Oasis -->
          ${infoCard('🌿 Oasis Canteen — Day Delivery',`
            <div class="info-row" style="margin-bottom:var(--space-1);">Delivers to hostel rooms during daytime hours.</div>
            <div class="info-row">📞 <a href="tel:9876540001" class="link-call">98765-40001</a></div>
            <div class="info-row">📞 <a href="tel:9876540002" class="link-call">98765-40002</a></div>
            <div class="info-row">🕐 <strong>Delivery hours:</strong> 10 AM – 5 PM</div>
            <div class="info-row">📍 Near the Main Gate, Ground Floor</div>
            <div style="margin-top:var(--space-3); padding:var(--space-3); background:rgba(52,211,153,.08); border-radius:var(--radius-md); border-left:3px solid var(--accent-green); font-size:var(--text-xs); color:var(--text-secondary);">
              ☑️ Snacks · Beverages · Meals · Juices<br>
              ☑️ Min order ₹50 for hostel delivery<br>
              ☑️ UPI / Cash accepted
            </div>
          `)}

          <!-- NT1 -->
          ${infoCard('🌙 NT1 Canteen — Night Delivery',`
            <div class="info-row" style="margin-bottom:var(--space-1);">Night delivery to hostel rooms after mess closes.</div>
            <div class="info-row">📞 <a href="tel:9876540010" class="link-call">98765-40010</a></div>
            <div class="info-row">📞 <a href="tel:9876540011" class="link-call">98765-40011</a></div>
            <div class="info-row">🕐 <strong>Delivery hours:</strong> 9:30 PM – 1 AM</div>
            <div class="info-row">📍 Near Hostel Block Entrance</div>
            <div style="margin-top:var(--space-3); padding:var(--space-3); background:rgba(139,92,246,.08); border-radius:var(--radius-md); border-left:3px solid #8b5cf6; font-size:var(--text-xs); color:var(--text-secondary);">
              ☑️ Maggi · Sandwiches · Omelettes · Parathas<br>
              ☑️ Hot beverages · Instant meals<br>
              ☑️ UPI / Cash accepted
            </div>
          `)}

        </div>
      </section>

      <!-- ══════════════════════════════════════════════
           CONTACTS (from DB)
      ══════════════════════════════════════════════ -->
      <section id="section-contacts" style="margin-bottom: var(--space-10);">
        <div style="display:flex; align-items:center; gap:var(--space-3); margin-bottom:var(--space-5);">
          <span style="font-size:1.6rem;">📞</span>
          <h3 style="margin:0; font-size:1.25rem;">Staff & Authority Directory</h3>
        </div>
        <div id="contacts-body">${renderContactsHTML(contacts)}</div>
      </section>

    </div>
  `;

  // ── Wire up interactions ───────────────────────────────────
  let activeMealKey = activeMeal;
  let activeDayIdx  = todayIdx;

  function renderMenu() {
    const rows = MENU[activeMealKey];
    const panel = document.getElementById('menu-panel');
    if (!panel) return;

    // Build a per-day column view
    panel.innerHTML = `
      <div style="overflow-x:auto; border-radius:var(--radius-lg); border:1px solid var(--border-subtle);">
        <table style="width:100%; border-collapse:collapse; min-width:700px;">
          <thead>
            <tr>
              ${DAYS.map((d, i) => `
                <th style="
                  padding: 12px 10px;
                  font-size: var(--text-xs);
                  font-weight: 700;
                  text-transform: uppercase;
                  letter-spacing: .06em;
                  background: ${i === activeDayIdx
                    ? 'linear-gradient(135deg, var(--accent-blue,#3b82f6) 0%, #6366f1 100%)'
                    : 'var(--bg-elevated)'};
                  color: ${i === activeDayIdx ? '#fff' : 'var(--text-secondary)'};
                  border-bottom: 2px solid ${i === activeDayIdx ? 'transparent' : 'var(--border-subtle)'};
                  text-align: center;
                  position: sticky;
                  top: 0;
                ">
                  ${d}${i === activeDayIdx ? ' 📍' : ''}
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            ${rows.map((row, ri) => `
              <tr style="background: ${ri % 2 === 0 ? 'transparent' : 'var(--bg-elevated)'};">
                ${row.map((cell, ci) => `
                  <td style="
                    padding: 10px;
                    font-size: var(--text-xs);
                    text-align: center;
                    color: ${cell === '—' ? 'var(--text-tertiary)' : ci === activeDayIdx ? 'var(--text-primary)' : 'var(--text-secondary)'};
                    font-weight: ${ci === activeDayIdx ? '600' : '400'};
                    border-bottom: 1px solid var(--border-subtle);
                    background: ${ci === activeDayIdx ? 'rgba(99,102,241,.06)' : 'transparent'};
                    text-transform: uppercase;
                    letter-spacing: .03em;
                  ">${cell}</td>
                `).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // Meal tab clicks
  document.getElementById('meal-tabs')?.querySelectorAll('.cat-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('meal-tabs').querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeMealKey = btn.dataset.meal;
      renderMenu();
    });
  });

  // Day chip clicks
  document.getElementById('day-tabs')?.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('day-tabs').querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeDayIdx = +btn.dataset.day;
      renderMenu();
    });
  });

  // Quick-card smooth scroll
  container.querySelectorAll('a[href^="#section-"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  renderMenu();
  requestAnimationFrame(() =>
    document.getElementById('student-resources-page')?.classList.replace('page-enter','page-active')
  );
}

// ── Template helpers ───────────────────────────────────────────
function quickCard(emoji, label, href) {
  return `
    <a href="${href}" style="
      display:flex; flex-direction:column; align-items:center; justify-content:center;
      gap:var(--space-2); padding:var(--space-5) var(--space-3);
      background:var(--bg-elevated); border-radius:var(--radius-lg);
      border:1px solid var(--border-subtle);
      text-decoration:none; color:var(--text-primary);
      transition: transform .15s, box-shadow .15s, border-color .15s;
      cursor:pointer;
    "
    onmouseover="this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 24px rgba(0,0,0,.15)';this.style.borderColor='var(--accent-blue,#3b82f6)'"
    onmouseout="this.style.transform='';this.style.boxShadow='';this.style.borderColor='var(--border-subtle)'">
      <span style="font-size:1.75rem;">${emoji}</span>
      <span style="font-size:var(--text-xs); font-weight:600; text-align:center; color:var(--text-secondary);">${label}</span>
    </a>
  `;
}

function infoCard(title, bodyHTML) {
  return `
    <div style="
      background:var(--bg-elevated); border-radius:var(--radius-lg);
      border:1px solid var(--border-subtle); overflow:hidden;
    ">
      <div style="
        padding:var(--space-3) var(--space-5);
        background:var(--bg-subtle,var(--bg-elevated));
        border-bottom:1px solid var(--border-subtle);
        font-size:var(--text-sm); font-weight:700;
        color:var(--text-primary);
      ">${title}</div>
      <div style="padding:var(--space-4) var(--space-5); display:grid; gap:var(--space-2);">
        ${bodyHTML}
      </div>
    </div>
  `;
}

function renderContactsHTML(contacts) {
  if (!contacts || contacts.length === 0) {
    return `<p style="color:var(--text-tertiary); padding:var(--space-6); text-align:center;">No contacts added yet.</p>`;
  }
  const CAT_ICONS = { Plumber:'🔧', Electrician:'⚡', WiFi:'📶', Authority:'🏛️', Other:'📋' };
  const grouped = {};
  contacts.forEach(r => { if (!grouped[r.category]) grouped[r.category] = []; grouped[r.category].push(r); });

  return `
    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:var(--space-4);">
      ${Object.entries(grouped).map(([cat, items]) => `
        <div style="background:var(--bg-elevated); border-radius:var(--radius-lg); border:1px solid var(--border-subtle); overflow:hidden;">
          <div style="padding:var(--space-3) var(--space-5); border-bottom:1px solid var(--border-subtle); font-size:var(--text-xs); font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:var(--text-tertiary);">
            ${CAT_ICONS[cat] || '📋'} ${cat}
          </div>
          <div style="padding:var(--space-3) var(--space-5); display:grid; gap:var(--space-3);">
            ${items.map(r => `
              <div class="contact-row" style="margin:0;">
                <div class="contact-avatar">${r.name[0].toUpperCase()}</div>
                <div class="contact-info">
                  <div class="contact-name">${r.name}</div>
                  <div class="contact-meta">
                    ${r.phone ? `📞 <a href="tel:${r.phone}" class="link-call">${r.phone}</a>` : ''}
                    ${r.email ? `· 📧 <a href="mailto:${r.email}" style="color:var(--accent-blue,#3b82f6);">${r.email}</a>` : ''}
                  </div>
                  ${r.notes ? `<div style="font-size:var(--text-xs); color:var(--text-tertiary);">${r.notes}</div>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
