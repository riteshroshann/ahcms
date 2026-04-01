(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function d(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();const S="ahcms_token",q="ahcms_user";(function(){const t=localStorage.getItem("cw_hostel_token"),r=localStorage.getItem("cw_hostel_user");t&&(localStorage.setItem(S,t),localStorage.removeItem("cw_hostel_token")),r&&(localStorage.setItem(q,r),localStorage.removeItem("cw_hostel_user"))})();function N(a,t){localStorage.setItem(S,a),localStorage.setItem(q,JSON.stringify(t))}function Y(){return localStorage.getItem(S)}function R(){try{return JSON.parse(localStorage.getItem(q))}catch{return null}}function F(){var a;return((a=R())==null?void 0:a.role)||null}function X(){const a=Y();if(!a)return!1;try{return JSON.parse(atob(a.split(".")[1])).exp*1e3>Date.now()}catch{return!1}}function G(){localStorage.removeItem(S),localStorage.removeItem(q)}const x={home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',complaints:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="15" r="0.5" fill="currentColor"/></svg>',booking:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',forum:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-1"/><path d="M15 3H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l4-4h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/></svg>',rooms:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',resources:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',theme:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'},Z=[{id:"home",label:"Home",icon:x.home},{id:"complaints",label:"Complaint",icon:x.complaints},{id:"booking",label:"Room Booking",icon:x.booking},{id:"forum",label:"Community Forum",icon:x.forum}],ee=[{id:"home",label:"Home",icon:x.home},{id:"complaints",label:"Complaints",icon:x.complaints},{id:"rooms",label:"Room Details",icon:x.rooms},{id:"forum",label:"Community Forum",icon:x.forum},{id:"resources",label:"Resources",icon:x.resources}];function te(a,t,r){var c,s;const d=F(),i=R(),l=d==="admin"?ee:Z,m=d==="admin"?"Admin Panel":"Student Portal";a.innerHTML=`
    <div class="sidebar-brand">
      <h1>AHCMS</h1>
      <span>${m}</span>
    </div>

    <div class="sidebar-user">
      <div class="sidebar-user-avatar">${((i==null?void 0:i.name)||"U")[0].toUpperCase()}</div>
      <div class="sidebar-user-info">
        <div class="sidebar-user-name">${(i==null?void 0:i.name)||"User"}</div>
        <div class="sidebar-user-role">${d==="admin"?"Administrator":(i==null?void 0:i.roll_no)||"Student"}</div>
      </div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Navigation</div>
      ${l.map(e=>`
        <a class="nav-item${e.id===t?" active":""}"
           data-page="${e.id}"
           id="nav-${e.id}"
           role="button"
           tabindex="0">
          ${e.icon}
          ${e.label}
        </a>
      `).join("")}
    </div>

    <div class="sidebar-footer">
      <button class="nav-item logout-btn" id="nav-theme" style="margin-bottom: var(--space-2); color: var(--text-secondary);">
        ${x.theme}
        Toggle Theme
      </button>
      <button class="nav-item logout-btn" id="nav-logout">
        ${x.logout}
        Sign Out
      </button>
      <p>v2.0 · 2026</p>
    </div>
  `,a.querySelectorAll(".nav-item[data-page]").forEach(e=>{e.addEventListener("click",()=>r(e.dataset.page)),e.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),e.click())})}),(c=document.getElementById("nav-logout"))==null||c.addEventListener("click",()=>{G(),window.location.reload()}),(s=document.getElementById("nav-theme"))==null||s.addEventListener("click",()=>{const o=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",o),localStorage.setItem("ahcms_theme",o)})}function ae(){const a=document.createElement("button");a.className="sidebar-toggle",a.id="sidebar-toggle",a.innerHTML=x.menu,a.setAttribute("aria-label","Toggle navigation");const t=document.createElement("div");t.className="sidebar-overlay",t.id="sidebar-overlay",document.body.appendChild(a),document.body.appendChild(t);const r=document.getElementById("sidebar");function d(){r.classList.add("open"),t.classList.add("show"),a.innerHTML=x.close}function i(){r.classList.remove("open"),t.classList.remove("show"),a.innerHTML=x.menu}return a.addEventListener("click",()=>r.classList.contains("open")?i():d()),t.addEventListener("click",i),{close:i}}const oe="/api";async function C(a,t,r){const d=Y(),i={"Content-Type":"application/json"};d&&(i.Authorization=`Bearer ${d}`);const l=await fetch(`${oe}${t}`,{method:a,headers:i,body:r!==void 0?JSON.stringify(r):void 0});if(l.status===401){G(),window.location.reload();return}const m=await l.json().catch(()=>({}));if(!l.ok)throw new Error(m.error||`Request failed (${l.status})`);return m}const y={get:a=>C("GET",a),post:(a,t)=>C("POST",a,t),patch:(a,t)=>C("PATCH",a,t),put:(a,t)=>C("PUT",a,t),delete:a=>C("DELETE",a)};let I=null;function se(){I||(I=document.createElement("div"),I.className="toast-container",document.body.appendChild(I))}function b(a,t="info",r=3500){se();const d=document.createElement("div");d.className=`toast toast-${t}`,d.textContent=a,I.appendChild(d),requestAnimationFrame(()=>{requestAnimationFrame(()=>{d.classList.add("show")})}),setTimeout(()=>{d.classList.remove("show"),setTimeout(()=>d.remove(),300)},r)}function ie(a){var d;document.body.innerHTML=`
    <div class="login-page">
      <div class="login-panel" style="position: relative;">

        <button id="login-theme" style="position: absolute; top: var(--space-6); right: var(--space-6); background: transparent; border: none; color: var(--text-tertiary); cursor: pointer; padding: var(--space-2); border-radius: var(--radius-md);" title="Toggle Theme" aria-label="Toggle Theme">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>

        <div class="login-brand">
          <div class="login-brand-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <h1>AHCMS</h1>
          <p>Amrita Hostel &amp; Complaint Management, Delhi NCR</p>
        </div>

        <div class="login-tabs">
          <button class="login-tab active" id="tab-student" data-tab="student">Student</button>
          <button class="login-tab" id="tab-admin" data-tab="admin">Admin</button>
        </div>

        <!-- Student Login -->
        <form id="form-student" class="login-form" novalidate>
          <div class="login-form-group">
            <label for="s-roll">Roll Number</label>
            <input type="text" id="s-roll" class="login-input" placeholder="e.g. CW2022001" autocomplete="username" />
          </div>
          <div class="login-form-group">
            <label for="s-pass">Password</label>
            <input type="password" id="s-pass" class="login-input" placeholder="••••••••" autocomplete="current-password" />
          </div>
          <p class="login-hint">Demo credentials — Roll: <code>CW2022001</code> Pass: <code>Student@123</code></p>
          <button type="submit" class="login-btn" id="btn-student-login">Sign In</button>
          <div class="login-error" id="err-student"></div>
        </form>

        <!-- Admin Login -->
        <form id="form-admin" class="login-form hidden" novalidate>
          <div class="login-form-group">
            <label for="a-email">Email</label>
            <input type="email" id="a-email" class="login-input" placeholder="admin@ahcms.edu.in" autocomplete="username" />
          </div>
          <div class="login-form-group">
            <label for="a-pass">Password</label>
            <input type="password" id="a-pass" class="login-input" placeholder="••••••••" autocomplete="current-password" />
          </div>
          <p class="login-hint">Demo credentials — Email: <code>admin@ahcms.edu.in</code> Pass: <code>Admin@123</code></p>
          <button type="submit" class="login-btn" id="btn-admin-login">Sign In</button>
          <div class="login-error" id="err-admin"></div>
          <div class="login-divider">or</div>
          <button type="button" class="login-btn login-btn-outline" id="btn-show-register">Create Admin Account</button>
        </form>

        <!-- Admin Register (hidden until clicked) -->
        <form id="form-register" class="login-form hidden" novalidate>
          <div class="login-form-group">
            <label for="r-name">Full Name</label>
            <input type="text" id="r-name" class="login-input" placeholder="Your full name" />
          </div>
          <div class="login-form-group">
            <label for="r-email">Email</label>
            <input type="email" id="r-email" class="login-input" placeholder="you@ahcms.edu.in" />
          </div>
          <div class="login-form-group">
            <label for="r-pass">Password</label>
            <input type="password" id="r-pass" class="login-input" placeholder="Min. 8 characters" />
          </div>
          <button type="submit" class="login-btn" id="btn-register">Create Account</button>
          <div class="login-error" id="err-register"></div>
          <button type="button" class="login-btn login-btn-ghost" id="btn-back-login">← Back to Login</button>
        </form>

      </div>

      <div class="login-art">
        <div class="login-art-content">
          <h2>Your hostel,<br>fully managed.</h2>
          <p>Room allocations, complaints, community — all in one place.</p>
          <div class="login-art-dots">
            <span class="dot dot-blue"></span>
            <span class="dot dot-green"></span>
            <span class="dot dot-purple"></span>
          </div>
        </div>
      </div>
    </div>
  `,(d=document.getElementById("login-theme"))==null||d.addEventListener("click",()=>{const l=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",l),localStorage.setItem("ahcms_theme",l)});let t="student";document.querySelectorAll(".login-tab").forEach(i=>{i.addEventListener("click",()=>{t=i.dataset.tab,document.querySelectorAll(".login-tab").forEach(l=>l.classList.remove("active")),i.classList.add("active"),document.getElementById("form-student").classList.toggle("hidden",t!=="student"),document.getElementById("form-admin").classList.toggle("hidden",t!=="admin"),document.getElementById("form-register").classList.add("hidden")})}),document.getElementById("btn-show-register").addEventListener("click",()=>{document.getElementById("form-admin").classList.add("hidden"),document.getElementById("form-register").classList.remove("hidden")}),document.getElementById("btn-back-login").addEventListener("click",()=>{document.getElementById("form-register").classList.add("hidden"),document.getElementById("form-admin").classList.remove("hidden")});function r(i,l){const m=document.getElementById(i);m.disabled=l,m.textContent=l?"Signing in…":"Sign In"}document.getElementById("form-student").addEventListener("submit",async i=>{i.preventDefault();const l=document.getElementById("s-roll").value.trim(),m=document.getElementById("s-pass").value,c=document.getElementById("err-student");if(c.textContent="",!l||!m){c.textContent="All fields required.";return}r("btn-student-login",!0);try{const{token:s,user:e}=await y.post("/auth/student/login",{roll_no:l,password:m});N(s,e),a()}catch(s){c.textContent=s.message}finally{r("btn-student-login",!1)}}),document.getElementById("form-admin").addEventListener("submit",async i=>{i.preventDefault();const l=document.getElementById("a-email").value.trim(),m=document.getElementById("a-pass").value,c=document.getElementById("err-admin");if(c.textContent="",!l||!m){c.textContent="All fields required.";return}r("btn-admin-login",!0);try{const{token:s,user:e}=await y.post("/auth/admin/login",{email:l,password:m});N(s,e),a()}catch(s){c.textContent=s.message}finally{r("btn-admin-login",!1)}}),document.getElementById("form-register").addEventListener("submit",async i=>{i.preventDefault();const l=document.getElementById("r-name").value.trim(),m=document.getElementById("r-email").value.trim(),c=document.getElementById("r-pass").value,s=document.getElementById("err-register");if(s.textContent="",!l||!m||!c){s.textContent="All fields required.";return}if(c.length<8){s.textContent="Password must be at least 8 characters.";return}const e=document.getElementById("btn-register");e.disabled=!0,e.textContent="Creating…";try{await y.post("/auth/admin/register",{name:l,email:m,password:c}),b("Account created! Please sign in.","success"),document.getElementById("btn-back-login").click(),document.getElementById("a-email").value=m}catch(o){s.textContent=o.message}finally{e.disabled=!1,e.textContent="Create Account"}})}async function ne(a){a.innerHTML='<div class="page-loading">Loading…</div>';try{const{student:t,allocation:r,complaints:d,wardens:i,wardenOfficePhone:l}=await y.get("/dashboard/student");re(a,t,r,d,i,l)}catch(t){a.innerHTML=`<div class="page-error">Failed to load dashboard: ${t.message}</div>`}}function re(a,t,r,d,i,l){var s;const m=i.filter(e=>e.role==="Warden"),c=i.filter(e=>e.role==="Guard");a.innerHTML=`
    <div class="page-enter" id="student-home">
      <div class="page-header">
        <h2>Welcome, ${((s=t==null?void 0:t.name)==null?void 0:s.split(" ")[0])||"Student"} 👋</h2>
        <p>${(t==null?void 0:t.course)||""} · ${(t==null?void 0:t.hostel)||""} Hostel · Year ${(t==null?void 0:t.year)||""}</p>
      </div>

      <!-- Student Info Card -->
      <div class="form-section" style="max-width: none; margin-bottom: var(--space-10);">
        <div class="form-section-title">Your Profile</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-4);">
          ${[["Roll No",t==null?void 0:t.roll_no],["Course",t==null?void 0:t.course],["Admission",t==null?void 0:t.adm_year],["Passing Year",t==null?void 0:t.pass_year],["Gender",(t==null?void 0:t.gender)==="M"?"Male":(t==null?void 0:t.gender)==="F"?"Female":t==null?void 0:t.gender],["Address",(t==null?void 0:t.address)||"—"]].map(([e,o])=>`
            <div>
              <div style="font-size: var(--text-xs); color: var(--text-tertiary); text-transform: uppercase; letter-spacing: .06em;">${e}</div>
              <div style="font-size: var(--text-sm); color: var(--text-primary); margin-top: 4px;">${o||"—"}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Room Card -->
      <div class="card-grid">
        <div class="card card-accent-blue" style="grid-column: span 2;">
          <div class="card-label">Your Room</div>
          ${r?`<div class="card-value">${r.room_id}</div>
               <div class="card-sub">${r.hostel} · Floor ${r.floor} · ${r.type} · ${r.status}</div>
               <div style="margin-top: var(--space-2); font-size: var(--text-xs); color: var(--text-tertiary);">
                 ${r.from_date} → ${r.to_date}
               </div>`:`<div style="color: var(--text-tertiary); font-size: var(--text-sm); padding: var(--space-2) 0;">
                 No active room allocation. <a class="link-accent" href="#booking">Book a room →</a>
               </div>`}
        </div>

        <div class="card card-accent-amber">
          <div class="card-label">Open Complaints</div>
          <div class="card-value">${d.filter(e=>e.status==="open").length}</div>
          <div class="card-sub">${d.filter(e=>e.status==="in-progress").length} in progress</div>
        </div>

        <div class="card card-accent-green">
          <div class="card-label">Resolved</div>
          <div class="card-value">${d.filter(e=>e.status==="resolved").length}</div>
          <div class="card-sub">of ${d.length} total</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6);">
        <!-- On-Duty Wardens -->
        <div class="form-section" style="max-width: none;">
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:var(--space-2); margin-bottom:var(--space-4);">
            <div class="form-section-title" style="margin-bottom:0;">On-Duty Wardens</div>
            ${l?`
              <a href="tel:${l}" style="
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
                Office: ${l}
              </a>`:""}
          </div>
          ${m.length===0?'<p class="empty-msg">No warden data available.</p>':m.map(e=>`
              <div class="contact-row" style="align-items: flex-start;">
                <div class="contact-avatar">${e.name[0]}</div>
                <div class="contact-info" style="flex: 1;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2px;">
                    <div class="contact-name">${e.name}</div>
                    <a href="tel:${e.phone}" class="contact-phone" style="margin-left: auto;">${e.phone||"—"}</a>
                  </div>
                  <div class="contact-meta">${e.hostel} Hostel</div>
                  <div style="display: flex; flex-wrap: wrap; gap: 12px; font-size: 11px; margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--border-color); color: var(--text-secondary);">
                    <span><span style="font-weight:600; color:var(--text-tertiary);">Last:</span> ${e.previous?e.previous.name:"Unknown"}</span>
                    <span style="color:var(--accent-green);"><span style="font-weight:600;">Current:</span> Active</span>
                    <span><span style="font-weight:600; color:var(--text-tertiary);">Next:</span> ${e.next?e.next.name:"Unknown"}</span>
                  </div>
                </div>
              </div>
            `).join("")}

          <div class="form-section-title" style="margin-top: var(--space-6);">On-Duty Guards</div>
          ${c.length===0?'<p class="empty-msg">No guard data.</p>':c.map(e=>`
              <div class="contact-row">
                <div class="contact-avatar guard">${e.name[0]}</div>
                <div class="contact-info">
                  <div class="contact-name">${e.name}</div>
                  <div class="contact-meta">${e.hostel} · ${e.shift} shift</div>
                </div>
                <a href="tel:${e.phone}" class="contact-phone">${e.phone||"—"}</a>
              </div>
            `).join("")}
        </div>

        <!-- Recent Complaints -->
        <div class="form-section" style="max-width: none;">
          <div class="form-section-title">Your Recent Complaints</div>
          ${d.length===0?'<p class="empty-msg">No complaints filed yet.</p>':`<div class="activity-list">
                ${d.slice(0,5).map(e=>`
                    <div class="activity-item">
                      <div class="activity-dot" style="background:${e.status==="open"?"var(--accent-amber)":e.status==="in-progress"?"var(--accent-blue)":"var(--accent-green)"}"></div>
                      <div class="activity-content">
                        <div class="activity-text">${e.category} — <span class="badge badge-${e.status}">${e.status}</span></div>
                        <div class="activity-time">${e.date} · ${e.room_id||"N/A"}</div>
                        <div style="font-size: var(--text-xs); color: var(--text-secondary); margin-top: 2px;">${e.description.slice(0,60)}…</div>
                      </div>
                    </div>
                  `).join("")}
              </div>`}
          <a class="link-accent" href="#complaints" style="display:block; margin-top: var(--space-4); font-size: var(--text-sm);">View all complaints →</a>
        </div>
      </div>


    </div>
  `,a.querySelectorAll('a.link-accent[href^="#"]').forEach(e=>{e.addEventListener("click",o=>{o.preventDefault(),window.location.hash=e.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var e;return(e=document.getElementById("student-home"))==null?void 0:e.classList.replace("page-enter","page-active")})}const j=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"],T={Plumbing:"🔧",Electricity:"⚡",WiFi:"📶",Cleanliness:"🧹",Carpentry:"🔨",Other:"📋"},le=["open","in-progress","resolved"];async function de(a){a.innerHTML='<div class="page-loading">Loading…</div>';let t=[];try{t=await y.get("/complaints")}catch(r){a.innerHTML=`<div class="page-error">Failed to load: ${r.message}</div>`;return}ce(a,t)}function ce(a,t){let r=t,d="all",i="";a.innerHTML=`
    <div class="page-enter" id="complaints-page">
      <div class="page-header">
        <h2>Complaints</h2>
        <p>Lodge a complaint by category or track your existing ones.</p>
      </div>

      <!-- Lodge Form -->
      <div class="form-section" style="margin-bottom: var(--space-6); max-width: none;">
        <div class="form-section-title">Lodge a Complaint</div>
        <form id="complaint-form" novalidate>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label" for="cmp-category">Category <span style="color:var(--danger)">*</span></label>
              <select class="form-select" id="cmp-category" required>
                <option value="">Select category…</option>
                ${j.map(e=>`<option value="${e}">${T[e]} ${e}</option>`).join("")}
              </select>
              <div class="form-error" id="err-cmp-cat">Category is required</div>
            </div>
            <div class="form-group" id="cmp-other-group" style="display: none;">
              <label class="form-label" for="cmp-other-type">Please Specify Category <span style="color:var(--danger)">*</span></label>
              <input type="text" class="form-input" id="cmp-other-type" placeholder="e.g. Pest Control, Room Allocation..." />
              <div class="form-error" id="err-cmp-other">Please specify what the complaint is about.</div>
            </div>
            <div class="form-group">
              <label class="form-label" for="cmp-photo">Attach Photo <span style="color:var(--text-tertiary)">(optional)</span></label>
              <input type="file" class="form-input" id="cmp-photo" accept="image/*" />
            </div>
            <div class="form-group full-width">
              <label class="form-label" for="cmp-desc">Description <span style="color:var(--danger)">*</span></label>
              <textarea class="form-textarea" id="cmp-desc" rows="3" placeholder="Describe the issue in detail…" required></textarea>
              <div class="form-error" id="err-cmp-desc">Description is required</div>
            </div>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary" id="cmp-submit">Submit Complaint</button>
            <button type="reset" class="btn btn-secondary">Clear</button>
          </div>
        </form>
      </div>

      <!-- Category Filter -->
      <div class="cat-filter-row">
        <label class="form-label" for="cat-filter-select">Filter by Category</label>
        <select class="form-select cat-filter-select" id="cat-filter-select">
          <option value="">All Categories</option>
          ${j.map(e=>`<option value="${e}">${T[e]} ${e}</option>`).join("")}
        </select>
      </div>

      <!-- My Complaints Table -->
      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">My Complaints</div>
          <div style="display:flex; gap: var(--space-2); flex-wrap: wrap;">
            <button class="filter-chip active" data-status="all">All</button>
            ${le.map(e=>`<button class="filter-chip" data-status="${e}">${e}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-list"></div>
      </div>
    </div>
  `;function l(){let e=r;i&&(e=e.filter(n=>n.category===i)),d!=="all"&&(e=e.filter(n=>n.status===d));const o=document.getElementById("complaints-list");if(e.length===0){o.innerHTML='<p style="padding: var(--space-8); text-align:center; color: var(--text-tertiary);">No complaints found.</p>';return}o.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>#</th><th>Category</th><th>Description</th><th>Date</th><th>Status</th><th>Note</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(n=>`
            <tr>
              <td class="cell-mono">${n.complaint_id}</td>
              <td>${T[n.category]||""} ${n.category}</td>
              <td style="max-width:220px; overflow:hidden; text-overflow:ellipsis;" title="${n.description}">${n.description.slice(0,50)}${n.description.length>50?"…":""}</td>
              <td class="cell-mono">${n.date}</td>
              <td><span class="badge badge-${n.status}">${n.status}</span></td>
              <td style="color: var(--text-tertiary); font-size: var(--text-xs);">${n.admin_note||"—"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `}document.getElementById("cat-filter-select").addEventListener("change",e=>{i=e.target.value,l()}),a.querySelectorAll("[data-status]").forEach(e=>{e.addEventListener("click",()=>{a.querySelectorAll("[data-status]").forEach(o=>o.classList.remove("active")),e.classList.add("active"),d=e.dataset.status,l()})});const m=document.getElementById("cmp-category"),c=document.getElementById("cmp-other-group");m.addEventListener("change",e=>{e.target.value==="Other"?c.style.display="":(c.style.display="none",document.getElementById("cmp-other-type").value="",document.getElementById("err-cmp-other").classList.remove("visible"))});const s=document.getElementById("complaint-form");s.addEventListener("submit",async e=>{e.preventDefault();let o=!0;a.querySelectorAll(".form-error").forEach($=>$.classList.remove("visible"));const n=document.getElementById("cmp-category").value,v=document.getElementById("cmp-other-type").value.trim(),g=document.getElementById("cmp-desc").value.trim(),f=document.getElementById("cmp-photo").files[0];if(n||(document.getElementById("err-cmp-cat").classList.add("visible"),o=!1),n==="Other"&&!v&&(document.getElementById("err-cmp-other").classList.add("visible"),o=!1),g||(document.getElementById("err-cmp-desc").classList.add("visible"),o=!1),!o){b("Fill in all required fields.","error");return}const k=document.getElementById("cmp-submit");k.disabled=!0,k.textContent="Submitting…";try{let $=null;f&&($=await new Promise((h,E)=>{const u=new FileReader;u.onload=()=>h(u.result),u.onerror=E,u.readAsDataURL(f)}));const B=n==="Other"&&v?`[Other: ${v}] ${g}`:g,p=await y.post("/complaints",{category:n,description:B,photo_base64:$});r=[p,...r],b(`Complaint #${p.complaint_id} submitted.`,"success"),s.reset(),l()}catch($){b($.message,"error")}finally{k.disabled=!1,k.textContent="Submit Complaint"}}),s.addEventListener("reset",()=>{a.querySelectorAll(".form-error").forEach(e=>e.classList.remove("visible")),document.getElementById("cmp-other-group").style.display="none"}),l(),requestAnimationFrame(()=>{var e;return(e=document.getElementById("complaints-page"))==null?void 0:e.classList.replace("page-enter","page-active")})}async function K(a){a.innerHTML='<div class="page-loading">Loading rooms…</div>';try{const[t,{allocation:r},d]=await Promise.all([y.get("/rooms"),y.get("/rooms/my-allocation"),y.get("/rooms/booking-requests")]);me(a,t,r,d)}catch(t){a.innerHTML=`<div class="page-error">Failed to load: ${t.message}</div>`}}function me(a,t,r,d){var k,$,B;const i=R(),l=(i==null?void 0:i.year)||1,m=l<=2?7:l===3?8:9,c=t.filter(p=>p.hostel===((i==null?void 0:i.hostel)||"")),s=[...new Set(c.map(p=>p.floor))].sort((p,h)=>p-h);let o=s.includes(m)?m:s[0]||1,n=null;const v=d.find(p=>p.status==="pending");a.innerHTML=`
    <div class="page-enter" id="booking-page">
      <div class="page-header">
        <h2>Room Booking</h2>
        <p>Select a room from the floor plan to submit a booking request.</p>
      </div>

      ${r?`
        <div class="alert-banner alert-green">
          <strong>You already have an active room allocation:</strong> ${r.room_id} — ${r.hostel}, Floor ${r.floor}
        </div>
      `:v?`
        <div class="alert-banner alert-amber">
          <strong>Pending request:</strong> Room ${v.room_id} submitted on ${(k=v.created_at)==null?void 0:k.slice(0,10)}. Waiting for admin approval.
        </div>
      `:""}

      <!-- Floor Selector -->
      <div style="display:flex; align-items: center; gap: var(--space-4); margin-bottom: var(--space-6);">
        <span style="font-size: var(--text-sm); color: var(--text-secondary);">Floor:</span>
        <div class="cat-tabs" style="margin:0;">
          ${s.map(p=>`
            <button class="cat-tab${p===o?" active":""}" data-floor="${p}">Floor ${p}</button>
          `).join("")}
        </div>
      </div>

      <!-- Floor Plan -->
      <div class="form-section" style="max-width: none; margin-bottom: var(--space-6);" id="floor-plan-section">
        <div class="form-section-title" id="floor-plan-title">Floor ${o} — ${(i==null?void 0:i.hostel)||""} Hostel</div>
        <div class="floor-plan" id="floor-plan"></div>
        <div class="floor-legend">
          <span class="legend-item"><span class="legend-dot vacant"></span> Vacant</span>
          <span class="legend-item"><span class="legend-dot partial"></span> Partially occupied</span>
          <span class="legend-item"><span class="legend-dot full"></span> Full</span>
          <span class="legend-item"><span class="legend-dot selected"></span> Selected</span>
        </div>
      </div>

      <!-- Room Details + Book -->
      <div id="room-detail-panel" class="form-section" style="max-width: none; display: none;">
        <div class="form-section-title" id="room-detail-title">Room Details</div>
        <div id="room-detail-body"></div>
        <form id="booking-form" style="margin-top: var(--space-6);" novalidate>
          <div class="form-group" style="max-width: 480px;">
            <label class="form-label" for="booking-pref">Preferences <span style="color:var(--text-tertiary)">(optional)</span></label>
            <textarea class="form-textarea" id="booking-pref" rows="2" placeholder="e.g. prefer window side, near bathroom…"></textarea>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary" id="btn-book">Request This Room</button>
            <button type="button" class="btn btn-secondary" id="btn-cancel-room">Cancel</button>
          </div>
        </form>
      </div>

      <!-- My Booking History -->
      <div class="table-container" style="margin-top: var(--space-6);">
        <div class="table-toolbar">
          <div class="table-toolbar-title">My Booking Requests</div>
        </div>
        ${d.length===0?'<p style="padding: var(--space-6); text-align:center; color:var(--text-tertiary);">No booking requests yet.</p>':`<table>
              <thead><tr><th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th><th>Status</th><th>Note</th><th>Date</th></tr></thead>
              <tbody>
                ${d.map(p=>{var h;return`
                  <tr>
                    <td class="cell-mono">${p.room_id}</td>
                    <td>${p.hostel}</td>
                    <td>${p.floor}</td>
                    <td>${p.type}</td>
                    <td><span class="badge badge-${p.status}">${p.status}</span></td>
                    <td style="color:var(--text-tertiary); font-size:var(--text-xs);">${p.admin_note||"—"}</td>
                    <td class="cell-mono">${(h=p.created_at)==null?void 0:h.slice(0,10)}</td>
                  </tr>
                `}).join("")}
              </tbody>
            </table>`}
      </div>
    </div>
  `;function g(p){const h=c.filter(u=>u.floor===p);document.getElementById("floor-plan-title").textContent=`Floor ${p} — ${(i==null?void 0:i.hostel)||""} Hostel`;const E=document.getElementById("floor-plan");if(h.length===0){E.innerHTML='<p style="color:var(--text-tertiary); padding: var(--space-4);">No rooms on this floor.</p>';return}E.innerHTML=h.map(u=>{const L=u.capacity>0?u.current_occupancy/u.capacity:0,P=L===0?"vacant":L<1?"partial":"full",Q=(n==null?void 0:n.room_id)===u.room_id;return`
        <button class="room-cell ${P}${Q?" selected":""}"
                data-room="${u.room_id}"
                ${P==="full"?"disabled":""}
                title="${u.room_id} · ${u.type} · ${u.current_occupancy}/${u.capacity}">
          <span class="room-cell-id">${u.room_id}</span>
          <span class="room-cell-type">${u.type[0]}</span>
          <span class="room-cell-occ">${u.current_occupancy}/${u.capacity}</span>
        </button>
      `}).join(""),E.querySelectorAll(".room-cell:not([disabled])").forEach(u=>{u.addEventListener("click",()=>{n=c.find(L=>L.room_id===u.dataset.room),g(p),f(n)})})}function f(p){const h=document.getElementById("room-detail-panel"),E=document.getElementById("room-detail-body");document.getElementById("room-detail-title").textContent=`Room ${p.room_id}`,E.innerHTML=`
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: var(--space-4);">
        ${[["Hostel",p.hostel],["Floor",p.floor],["Type",p.type],["Capacity",`${p.capacity} beds`],["Occupied",`${p.current_occupancy} / ${p.capacity}`],["Available",`${p.available_slots} slot(s)`]].map(([u,L])=>`
          <div>
            <div style="font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase; letter-spacing:.06em;">${u}</div>
            <div style="font-size:var(--text-sm); margin-top:4px; color:var(--text-primary);">${L}</div>
          </div>
        `).join("")}
      </div>
    `,h.style.display=r||v?"none":"block",(r||v)&&(h.style.display="none")}a.querySelectorAll(".cat-tab[data-floor]").forEach(p=>{p.addEventListener("click",()=>{a.querySelectorAll(".cat-tab[data-floor]").forEach(h=>h.classList.remove("active")),p.classList.add("active"),o=+p.dataset.floor,n=null,document.getElementById("room-detail-panel").style.display="none",g(o)})}),($=document.getElementById("btn-cancel-room"))==null||$.addEventListener("click",()=>{n=null,document.getElementById("room-detail-panel").style.display="none",g(o)}),(B=document.getElementById("booking-form"))==null||B.addEventListener("submit",async p=>{if(p.preventDefault(),!n)return;const h=document.getElementById("booking-pref").value.trim(),E=document.getElementById("btn-book");E.disabled=!0,E.textContent="Submitting…";try{await y.post("/rooms/book",{room_id:n.room_id,preferences:h}),b(`Booking request for ${n.room_id} submitted!`,"success"),K(a)}catch(u){b(u.message,"error"),E.disabled=!1,E.textContent="Request This Room"}}),g(o),requestAnimationFrame(()=>{var p;return(p=document.getElementById("booking-page"))==null?void 0:p.classList.replace("page-enter","page-active")})}async function J(a){a.innerHTML='<div class="page-loading">Loading forum…</div>';try{const t=await y.get("/forum");pe(a,t)}catch(t){a.innerHTML=`<div class="page-error">Failed to load forum: ${t.message}</div>`}}function pe(a,t){const r=F()==="admin";let d=t;a.innerHTML=`
    <div class="page-enter" id="forum-page">
      <div class="page-header">
        <h2>Community Forum</h2>
        <p>${r?"Read all campus posts — posting is disabled for admins.":"Share thoughts anonymously with your campus community."}</p>
      </div>

      ${r?`
        <div class="alert-banner alert-blue" style="margin-bottom: var(--space-6);">
          Viewing as Admin — posts are read-only. Student identities are never stored.
        </div>
      `:`
        <div class="form-section" style="max-width: none; margin-bottom: var(--space-8);">
          <div class="form-section-title">✍️ New Post <span class="badge badge-pending" style="font-size: var(--text-xs);">Anonymous</span></div>
          <form id="forum-form" novalidate>
            <div class="form-group" style="margin-bottom: var(--space-4);">
              <label class="form-label" for="f-title">Title</label>
              <input type="text" class="form-input" id="f-title" placeholder="What's on your mind?" maxlength="120" required />
              <div class="form-error" id="err-f-title">Title is required</div>
            </div>
            <div class="form-group">
              <label class="form-label" for="f-content">Message</label>
              <textarea class="form-textarea" id="f-content" rows="3" placeholder="Speak freely — your identity is never stored." required></textarea>
              <div class="form-error" id="err-f-content">Message is required</div>
            </div>
            <div class="form-actions">
              <button type="submit" class="btn btn-primary" id="btn-post">Post Anonymously</button>
              <button type="reset" class="btn btn-secondary">Clear</button>
            </div>
          </form>
        </div>
      `}

      <!-- Posts Feed -->
      <div id="forum-feed"></div>
      <div id="forum-empty" style="display:none; text-align:center; padding: var(--space-16); color: var(--text-tertiary);">
        No posts yet. Be the first to share!
      </div>
    </div>
  `;function i(){const l=document.getElementById("forum-feed"),m=document.getElementById("forum-empty");if(d.length===0){l.innerHTML="",m.style.display="block";return}m.style.display="none",l.innerHTML=d.map(c=>`
      <div class="forum-post">
        <div class="forum-post-header">
          <div class="forum-avatar">A</div>
          <div>
            <div class="forum-post-title">${O(c.title)}</div>
            <div class="forum-post-meta">Anonymous · ${ve(c.created_at)}</div>
          </div>
        </div>
        <div class="forum-post-body">${O(c.content)}</div>
      </div>
    `).join("")}if(!r){const l=document.getElementById("forum-form");l.addEventListener("submit",async m=>{m.preventDefault();let c=!0;a.querySelectorAll(".form-error").forEach(n=>n.classList.remove("visible"));const s=document.getElementById("f-title").value.trim(),e=document.getElementById("f-content").value.trim();if(s||(document.getElementById("err-f-title").classList.add("visible"),c=!1),e||(document.getElementById("err-f-content").classList.add("visible"),c=!1),!c)return;const o=document.getElementById("btn-post");o.disabled=!0,o.textContent="Posting…";try{d=[await y.post("/forum",{title:s,content:e}),...d],b("Posted anonymously!","success"),l.reset(),i()}catch(n){b(n.message,"error")}finally{o.disabled=!1,o.textContent="Post Anonymously"}}),l.addEventListener("reset",()=>a.querySelectorAll(".form-error").forEach(m=>m.classList.remove("visible")))}i(),requestAnimationFrame(()=>{var l;return(l=document.getElementById("forum-page"))==null?void 0:l.classList.replace("page-enter","page-active")})}function O(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ve(a){try{return new Date(a).toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return a}}async function ue(a){a.innerHTML='<div class="page-loading">Loading…</div>';try{const t=await y.get("/dashboard/admin");ge(a,t)}catch(t){a.innerHTML=`<div class="page-error">Failed to load: ${t.message}</div>`}}function ge(a,{stats:t,recentComplaints:r,wardens:d,wardenOfficePhone:i}){const l=d.filter(s=>s.role==="Warden"),m=d.filter(s=>s.role==="Guard"),c=t.totalCapacity>0?Math.round(t.totalOccupied/t.totalCapacity*100):0;a.innerHTML=`
    <div class="page-enter" id="admin-home">
      <div class="page-header">
        <h2>Admin Dashboard</h2>
        <p>System-wide overview — hostel occupancy, complaints, and on-duty staff.</p>
      </div>

      <!-- Stat Cards -->
      <div class="card-grid">
        <div class="card card-accent-blue">
          <div class="card-label">Total Rooms</div>
          <div class="card-value">${t.totalRooms}</div>
          <div class="card-sub">${t.vacantRooms} vacant · ${c}% utilized</div>
        </div>
        <div class="card card-accent-amber">
          <div class="card-label">Open Complaints</div>
          <div class="card-value">${t.openComplaints}</div>
          <div class="card-sub">${t.inProgressComplaints} in progress</div>
        </div>
        <div class="card card-accent-green">
          <div class="card-label">Resolved</div>
          <div class="card-value">${t.resolvedComplaints}</div>
          <div class="card-sub">complaints closed</div>
        </div>
        <div class="card card-accent-purple">
          <div class="card-label">Students</div>
          <div class="card-value">${t.totalStudents}</div>
          <div class="card-sub">${t.pendingBookings} pending bookings</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6);">
        <!-- On-duty Wardens -->
        <div class="form-section" style="max-width: none;">
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:var(--space-2); margin-bottom:var(--space-4);">
            <div class="form-section-title" style="margin-bottom:0;">On-Duty Wardens</div>
            ${i?`
              <a href="tel:${i}" style="
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
                Office: ${i}
              </a>`:""}
          </div>
          ${l.map(s=>`
            <div class="contact-row" style="align-items: flex-start;">
              <div class="contact-avatar">${s.name[0]}</div>
              <div class="contact-info" style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2px;">
                  <div class="contact-name">${s.name}</div>
                  <a href="tel:${s.phone}" class="contact-phone" style="margin-left: auto;">${s.phone||"—"}</a>
                </div>
                <div class="contact-meta">${s.hostel} Hostel · ${s.email||""}</div>
                <div style="display: flex; flex-wrap: wrap; gap: 12px; font-size: 11px; margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--border-color); color: var(--text-secondary);">
                  <span><span style="font-weight:600; color:var(--text-tertiary);">Last:</span> ${s.previous?s.previous.name:"Unknown"}</span>
                  <span style="color:var(--accent-green);"><span style="font-weight:600;">Current:</span> Active</span>
                  <span><span style="font-weight:600; color:var(--text-tertiary);">Next:</span> ${s.next?s.next.name:"Unknown"}</span>
                </div>
              </div>
            </div>
          `).join("")}
          <div class="form-section-title" style="margin-top: var(--space-5);">On-Duty Guards</div>
          ${m.map(s=>`
            <div class="contact-row">
              <div class="contact-avatar guard">${s.name[0]}</div>
              <div class="contact-info">
                <div class="contact-name">${s.name}</div>
                <div class="contact-meta">${s.hostel} · ${s.shift} shift</div>
              </div>
              <a href="tel:${s.phone}" class="contact-phone">${s.phone||"—"}</a>
            </div>
          `).join("")}
        </div>

        <!-- Recent Complaints -->
        <div class="form-section" style="max-width: none;">
          <div class="form-section-title">Recent Complaints</div>
          <div class="activity-list">
            ${r.map(s=>`
                <div class="activity-item">
                  <div class="activity-dot" style="background:${s.status==="open"?"var(--accent-amber)":s.status==="in-progress"?"var(--accent-blue)":"var(--accent-green)"}"></div>
                  <div class="activity-content">
                    <div class="activity-text">
                      <strong>${s.student_name||s.student_id}</strong> — ${s.category}
                      <span class="badge badge-${s.status}">${s.status}</span>
                    </div>
                    <div class="activity-time">${s.date} · ${s.room_id||"—"}</div>
                  </div>
                </div>
              `).join("")}
          </div>
          <a class="link-accent" href="#complaints" style="display:block;margin-top:var(--space-4);font-size:var(--text-sm);">Manage all complaints →</a>
        </div>
      </div>

      <!-- Occupancy Bar -->
      <div class="form-section" style="max-width: none; margin-top: var(--space-6);">
        <div class="form-section-title">Occupancy Overview</div>
        <div class="occ-overview">
          <div class="occ-track-outer">
            <div class="occ-track-inner" style="width: ${c}%"></div>
          </div>
          <span style="font-size:var(--text-sm); color:var(--text-secondary);">${t.totalOccupied} / ${t.totalCapacity} beds · ${c}%</span>
        </div>
        <div class="card-grid" style="margin-top: var(--space-4); margin-bottom: 0;">
          <div class="card" style="text-align:center;">
            <div class="card-label">Total Beds</div>
            <div class="card-value" style="font-size:var(--text-2xl);">${t.totalCapacity}</div>
          </div>
          <div class="card" style="text-align:center;">
            <div class="card-label">Occupied</div>
            <div class="card-value" style="font-size:var(--text-2xl);">${t.totalOccupied}</div>
          </div>
          <div class="card" style="text-align:center;">
            <div class="card-label">Vacant</div>
            <div class="card-value" style="font-size:var(--text-2xl); color: var(--accent-green);">${t.totalCapacity-t.totalOccupied}</div>
          </div>
        </div>
      </div>
    </div>
  `,a.querySelectorAll('a.link-accent[href^="#"]').forEach(s=>{s.addEventListener("click",e=>{e.preventDefault(),window.location.hash=s.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var s;return(s=document.getElementById("admin-home"))==null?void 0:s.classList.replace("page-enter","page-active")})}const D={Plumbing:"🔧",Electricity:"⚡",WiFi:"📶",Cleanliness:"🧹",Carpentry:"🔨",Other:"📋"},z=["open","in-progress","resolved"],ye=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"];async function fe(a){a.innerHTML='<div class="page-loading">Loading…</div>';try{const t=await y.get("/complaints");be(a,t)}catch(t){a.innerHTML=`<div class="page-error">Failed to load: ${t.message}</div>`}}function be(a,t){let r=t,d="all",i="",l=null;a.innerHTML=`
    <div class="page-enter" id="admin-complaints-page">
      <div class="page-header">
        <h2>Complaints Management</h2>
        <p>Review, approve, and update status of all hostel complaints.</p>
      </div>

      <!-- Summary chips -->
      <div class="card-grid" style="margin-bottom: var(--space-6);">
        <div class="card" style="text-align:center; cursor:pointer;" data-quick="all">
          <div class="card-label">Total</div>
          <div class="card-value" style="font-size:var(--text-2xl);">${r.length}</div>
        </div>
        ${z.map(s=>{const e=r.filter(n=>n.status===s).length;return`<div class="card card-accent-${s==="open"?"amber":s==="in-progress"?"blue":"green"}" style="text-align:center; cursor:pointer;" data-quick="${s}">
            <div class="card-label">${s}</div>
            <div class="card-value" style="font-size:var(--text-2xl);">${e}</div>
          </div>`}).join("")}
      </div>

      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">All Complaints</div>
          <div style="display:flex; gap: var(--space-2); flex-wrap: wrap; align-items: center;">
            <select class="form-select" id="cat-filter" style="width: auto; padding: 4px 28px 4px 10px; font-size: var(--text-xs);">
              <option value="">All Categories</option>
              ${ye.map(s=>`<option value="${s}">${D[s]} ${s}</option>`).join("")}
            </select>
            <button class="filter-chip active" data-status="all">All</button>
            ${z.map(s=>`<button class="filter-chip" data-status="${s}">${s}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-body"></div>
      </div>
    </div>
  `;function m(){let s=r;return i&&(s=s.filter(e=>e.category===i)),d!=="all"&&(s=s.filter(e=>e.status===d)),s}function c(){const s=m(),e=document.getElementById("complaints-body");if(s.length===0){e.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No complaints match the current filter.</p>';return}e.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>#</th><th>Student</th><th>Room</th><th>Category</th>
            <th>Description</th><th>Date</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody id="cmp-tbody">
          ${s.map(o=>`
            <tr class="cmp-row${l===o.complaint_id?" expanded-row":""}" data-id="${o.complaint_id}">
              <td class="cell-mono">${o.complaint_id}</td>
              <td><div>${o.student_name||o.student_id}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${o.roll_no||""}</div></td>
              <td class="cell-mono">${o.room_id||"—"}</td>
              <td>${D[o.category]||""} ${o.category}</td>
              <td style="max-width:180px; overflow:hidden; text-overflow:ellipsis;" title="${o.description}">${o.description.slice(0,45)}${o.description.length>45?"…":""}</td>
              <td class="cell-mono">${o.date}</td>
              <td><span class="badge badge-${o.status}">${o.status}</span></td>
              <td>
                ${o.status!=="resolved"?`
                  <div style="display:flex; gap:4px;">
                    ${o.status==="open"?`<button class="btn btn-sm btn-secondary" data-action="in-progress" data-id="${o.complaint_id}">Start</button>`:""}
                    <button class="btn btn-sm btn-primary" data-action="resolved" data-id="${o.complaint_id}">Resolve</button>
                  </div>
                `:'<span style="color:var(--text-tertiary); font-size:var(--text-xs);">Done</span>'}
              </td>
            </tr>
            ${o.photo_base64?`
              <tr class="photo-row" data-for="${o.complaint_id}" style="${l===o.complaint_id?"":"display:none"}">
                <td colspan="8" style="padding: var(--space-3) var(--space-6); background: var(--bg-elevated);">
                  <img src="${o.photo_base64}" alt="Complaint photo" style="max-width:280px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);" />
                  ${o.admin_note?`<p style="font-size:var(--text-xs); color:var(--text-secondary); margin-top: var(--space-2);">Note: ${o.admin_note}</p>`:""}
                </td>
              </tr>
            `:""}
          `).join("")}
        </tbody>
      </table>
    `,e.querySelectorAll("[data-action]").forEach(o=>{o.addEventListener("click",async()=>{const n=+o.dataset.id,v=o.dataset.action;o.disabled=!0;try{const g=await y.patch(`/complaints/${n}/status`,{status:v});r=r.map(f=>f.complaint_id===n?{...f,...g}:f),b(`Complaint #${n} → ${v}`,"success"),c()}catch(g){b(g.message,"error"),o.disabled=!1}})}),e.querySelectorAll(".cmp-row").forEach(o=>{o.addEventListener("click",()=>{const n=+o.dataset.id;l=l===n?null:n,c()})})}a.querySelectorAll("[data-status]").forEach(s=>{s.addEventListener("click",()=>{a.querySelectorAll("[data-status]").forEach(e=>e.classList.remove("active")),s.classList.add("active"),d=s.dataset.status,c()})}),a.querySelectorAll("[data-quick]").forEach(s=>{s.addEventListener("click",()=>{var e;d=s.dataset.quick,a.querySelectorAll("[data-status]").forEach(o=>o.classList.remove("active")),(e=a.querySelector(`[data-status="${d}"]`))==null||e.classList.add("active"),c()})}),document.getElementById("cat-filter").addEventListener("change",s=>{i=s.target.value,c()}),c(),requestAnimationFrame(()=>{var s;return(s=document.getElementById("admin-complaints-page"))==null?void 0:s.classList.replace("page-enter","page-active")})}async function he(a){a.innerHTML='<div class="page-loading">Loading…</div>';try{const[t,r]=await Promise.all([y.get("/rooms"),y.get("/rooms/booking-requests")]);xe(a,t,r)}catch(t){a.innerHTML=`<div class="page-error">Failed to load: ${t.message}</div>`}}function xe(a,t,r){let d=r,i="",l="rooms";const m=[...new Set(t.map(e=>e.hostel))].sort();a.innerHTML=`
    <div class="page-enter" id="admin-rooms-page">
      <div class="page-header">
        <h2>Room Information</h2>
        <p>Full room listing with occupancy and student assignments. Manage booking requests.</p>
      </div>

      <div class="cat-tabs" style="margin-bottom: var(--space-6);">
        <button class="cat-tab active" data-tab="rooms">Room Listing</button>
        <button class="cat-tab" data-tab="requests">
          Booking Requests
          ${d.filter(e=>e.status==="pending").length>0?`<span class="badge badge-open" style="margin-left:4px;">${d.filter(e=>e.status==="pending").length}</span>`:""}
        </button>
      </div>

      <!-- Rooms Panel -->
      <div id="panel-rooms">
        <div style="display:flex; gap: var(--space-3); align-items: center; margin-bottom: var(--space-4);">
          <span style="font-size: var(--text-sm); color: var(--text-secondary);">Hostel:</span>
          <div class="cat-tabs" style="margin:0;">
            <button class="cat-tab active" data-hostel="">All</button>
            ${m.map(e=>`<button class="cat-tab" data-hostel="${e}">${e}</button>`).join("")}
          </div>
        </div>
        <div id="rooms-body"></div>
      </div>

      <!-- Requests Panel -->
      <div id="panel-requests" style="display:none;">
        <div id="requests-body"></div>
      </div>
    </div>
  `;function c(){const e=i?t.filter(n=>n.hostel===i):t,o=document.getElementById("rooms-body");o.innerHTML=`
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th>
              <th>Occupancy</th><th>Students</th>
            </tr>
          </thead>
          <tbody>
            ${e.map(n=>{const v=n.capacity>0?n.current_occupancy/n.capacity:0,g=v===0?"vacant":v<1?"partial":"full",f=g==="vacant"?"var(--accent-green)":g==="partial"?"var(--accent-amber)":"var(--accent-red)",k=(n.students||[]).map($=>`<span style="font-size:var(--text-xs); color:var(--text-secondary); display:block;">${$.name} (Yr ${$.year})</span>`).join("");return`
                <tr>
                  <td class="cell-mono">${n.room_id}</td>
                  <td>${n.hostel}</td>
                  <td>${n.floor}</td>
                  <td>${n.type}</td>
                  <td>
                    <div class="occupancy-bar">
                      <div class="occupancy-track">
                        <div class="occupancy-fill" style="width:${v*100}%; background:${f};"></div>
                      </div>
                      <span style="font-size:var(--text-xs); font-family: var(--font-mono); color:var(--text-secondary);">${n.current_occupancy}/${n.capacity}</span>
                    </div>
                  </td>
                  <td>${k||'<span style="color:var(--text-tertiary); font-size:var(--text-xs);">Vacant</span>'}</td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    `}function s(){const e=document.getElementById("requests-body");if(d.length===0){e.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No booking requests yet.</p>';return}e.innerHTML=`
      <div class="table-container">
        <table>
          <thead>
            <tr><th>Student</th><th>Year</th><th>Room</th><th>Type</th><th>Preferences</th><th>Status</th><th>Date</th><th>Action</th></tr>
          </thead>
          <tbody>
            ${d.map(o=>{var n;return`
              <tr>
                <td><div>${o.student_name}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${o.roll_no}</div></td>
                <td>${o.year}</td>
                <td class="cell-mono">${o.room_id}</td>
                <td>${o.type}</td>
                <td style="max-width:140px; font-size:var(--text-xs); color:var(--text-secondary);">${o.preferences||"—"}</td>
                <td><span class="badge badge-${o.status}">${o.status}</span></td>
                <td class="cell-mono">${(n=o.created_at)==null?void 0:n.slice(0,10)}</td>
                <td>
                  ${o.status==="pending"?`
                    <div style="display:flex; gap:4px;">
                      <button class="btn btn-sm btn-primary" data-req="${o.request_id}" data-action="approved">Approve</button>
                      <button class="btn btn-sm btn-secondary" data-req="${o.request_id}" data-action="rejected">Reject</button>
                    </div>
                  `:`<span style="color:var(--text-tertiary); font-size:var(--text-xs);">${o.admin_note||"—"}</span>`}
                </td>
              </tr>
            `}).join("")}
          </tbody>
        </table>
      </div>
    `,e.querySelectorAll("[data-req]").forEach(o=>{o.addEventListener("click",async()=>{const n=o.dataset.req,v=o.dataset.action;o.disabled=!0;try{const g=await y.patch(`/rooms/booking-requests/${n}`,{status:v});d=d.map(f=>f.request_id===+n?{...f,...g}:f),b(`Request ${v}.`,"success"),s()}catch(g){b(g.message,"error"),o.disabled=!1}})})}a.querySelectorAll("[data-tab]").forEach(e=>{e.addEventListener("click",()=>{a.querySelectorAll("[data-tab]").forEach(o=>o.classList.remove("active")),e.classList.add("active"),l=e.dataset.tab,document.getElementById("panel-rooms").style.display=l==="rooms"?"":"none",document.getElementById("panel-requests").style.display=l==="requests"?"":"none"})}),a.querySelectorAll("[data-hostel]").forEach(e=>{e.addEventListener("click",()=>{a.querySelectorAll("[data-hostel]").forEach(o=>o.classList.remove("active")),e.classList.add("active"),i=e.dataset.hostel,c()})}),c(),s(),requestAnimationFrame(()=>{var e;return(e=document.getElementById("admin-rooms-page"))==null?void 0:e.classList.replace("page-enter","page-active")})}const U=["Plumber","Electrician","WiFi","Authority","Other"],_={Plumber:"🔧",Electrician:"⚡",WiFi:"📶",Authority:"🏛️",Other:"📋"};async function $e(a){a.innerHTML='<div class="page-loading">Loading…</div>';try{const t=await y.get("/resources");Ee(a,t)}catch(t){a.innerHTML=`<div class="page-error">Failed to load: ${t.message}</div>`}}function Ee(a,t){let r=t,d="",i=null;a.innerHTML=`
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
                ${U.map(c=>`<option value="${c}">${_[c]} ${c}</option>`).join("")}
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
            <button class="filter-chip active" data-cat="">All</button>
            ${U.map(c=>`<button class="filter-chip" data-cat="${c}">${_[c]} ${c}</button>`).join("")}
          </div>
        </div>
        <div id="resources-body"></div>
      </div>
    </div>
  `;function l(){const c=d?r.filter(o=>o.category===d):r,s=document.getElementById("resources-body");if(c.length===0){s.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No contacts in this category.</p>';return}const e={};c.forEach(o=>{e[o.category]||(e[o.category]=[]),e[o.category].push(o)}),s.innerHTML=Object.entries(e).map(([o,n])=>`
      <div style="padding: var(--space-4) var(--space-6);">
        <div style="font-size: var(--text-xs); font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: var(--text-tertiary); margin-bottom: var(--space-3);">
          ${_[o]||""} ${o}
        </div>
        ${n.map(v=>`
          <div class="contact-row" style="margin-bottom: var(--space-2);">
            <div class="contact-avatar">${v.name[0].toUpperCase()}</div>
            <div class="contact-info" style="flex:1;">
              <div class="contact-name">${v.name}</div>
              <div class="contact-meta">
                ${v.phone?`📞 <a href="tel:${v.phone}" style="color:inherit;">${v.phone}</a>`:""}
                ${v.email?` · 📧 <a href="mailto:${v.email}" style="color:inherit;">${v.email}</a>`:""}
              </div>
              ${v.notes?`<div style="font-size:var(--text-xs); color:var(--text-tertiary); margin-top:2px;">${v.notes}</div>`:""}
            </div>
            <div style="display:flex; gap:4px; flex-shrink:0;">
              <button class="btn btn-sm btn-secondary" data-edit="${v.resource_id}">Edit</button>
              <button class="btn btn-sm btn-secondary" data-delete="${v.resource_id}" style="color:var(--accent-red);">Del</button>
            </div>
          </div>
        `).join("")}
        <hr style="border:none; border-top: 1px solid var(--border-subtle); margin: var(--space-3) 0;" />
      </div>
    `).join(""),s.querySelectorAll("[data-edit]").forEach(o=>{o.addEventListener("click",()=>{const n=r.find(v=>v.resource_id===+o.dataset.edit);n&&(i=n.resource_id,document.getElementById("res-cat").value=n.category,document.getElementById("res-name").value=n.name,document.getElementById("res-phone").value=n.phone||"",document.getElementById("res-email").value=n.email||"",document.getElementById("res-notes").value=n.notes||"",document.getElementById("resource-form-title").textContent="Edit Contact",document.getElementById("btn-res-submit").textContent="Save Changes",document.getElementById("btn-res-cancel").style.display="",document.getElementById("resource-form").scrollIntoView({behavior:"smooth"}))})}),s.querySelectorAll("[data-delete]").forEach(o=>{o.addEventListener("click",async()=>{if(confirm("Delete this contact?")){o.disabled=!0;try{await y.delete(`/resources/${o.dataset.delete}`),r=r.filter(n=>n.resource_id!==+o.dataset.delete),b("Contact deleted.","success"),l()}catch(n){b(n.message,"error"),o.disabled=!1}}})})}a.querySelectorAll("[data-cat]").forEach(c=>{c.addEventListener("click",()=>{a.querySelectorAll("[data-cat]").forEach(s=>s.classList.remove("active")),c.classList.add("active"),d=c.dataset.cat,l()})}),document.getElementById("btn-res-cancel").addEventListener("click",()=>{i=null,document.getElementById("resource-form").reset(),document.getElementById("resource-form-title").textContent="Add New Contact",document.getElementById("btn-res-submit").textContent="Add Contact",document.getElementById("btn-res-cancel").style.display="none"});const m=document.getElementById("resource-form");m.addEventListener("submit",async c=>{c.preventDefault(),a.querySelectorAll(".form-error").forEach(g=>g.classList.remove("visible"));let s=!0;const e=document.getElementById("res-cat").value,o=document.getElementById("res-name").value.trim();if(e||(document.getElementById("err-res-cat").classList.add("visible"),s=!1),o||(document.getElementById("err-res-name").classList.add("visible"),s=!1),!s)return;const n={category:e,name:o,phone:document.getElementById("res-phone").value.trim()||null,email:document.getElementById("res-email").value.trim()||null,notes:document.getElementById("res-notes").value.trim()||null},v=document.getElementById("btn-res-submit");v.disabled=!0;try{if(i){const g=await y.put(`/resources/${i}`,n);r=r.map(f=>f.resource_id===i?g:f),b("Contact updated.","success"),document.getElementById("btn-res-cancel").click()}else r=[await y.post("/resources",n),...r],b("Contact added.","success"),m.reset();l()}catch(g){b(g.message,"error")}finally{v.disabled=!1}}),l(),requestAnimationFrame(()=>{var c;return(c=document.getElementById("resources-page"))==null?void 0:c.classList.replace("page-enter","page-active")})}const ke={home:ne,complaints:de,booking:K,forum:J},Le={home:ue,complaints:fe,rooms:he,forum:J,resources:$e};let w="home",M=null;function H(){return F()==="admin"?Le:ke}function A(a){const t=H();t[a]||(a="home"),w=a,window.location.hash=a;const r=document.getElementById("sidebar"),d=document.getElementById("main-content");te(r,w,A),t[a](d,()=>A(w)),M&&M.close()}function W(){document.body.innerHTML=`
    <div id="app">
      <aside id="sidebar" class="sidebar"></aside>
      <main id="main-content" class="main"></main>
    </div>
  `}function we(){if(!X()){ie(()=>{W(),V()});return}W(),V()}function V(){M=ae();const a=window.location.hash.replace("#","");w=H()[a]?a:"home",A(w),window.addEventListener("hashchange",()=>{const r=window.location.hash.replace("#","");H()[r]&&r!==w&&A(r)})}(function(){const a=localStorage.getItem("ahcms_theme")||"light";document.documentElement.setAttribute("data-theme",a)})();we();
