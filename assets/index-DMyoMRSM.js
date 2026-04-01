(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))m(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&m(p)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function m(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const M="ahcms_token",T="ahcms_user";(function(){const o=localStorage.getItem("cw_hostel_token"),n=localStorage.getItem("cw_hostel_user");o&&(localStorage.setItem(M,o),localStorage.removeItem("cw_hostel_token")),n&&(localStorage.setItem(T,n),localStorage.removeItem("cw_hostel_user"))})();function N(t,o){localStorage.setItem(M,t),localStorage.setItem(T,JSON.stringify(o))}function Q(){return localStorage.getItem(M)}function z(){try{return JSON.parse(localStorage.getItem(T))}catch{return null}}function F(){var t;return((t=z())==null?void 0:t.role)||null}function oe(){const t=Q();if(!t)return!1;try{return JSON.parse(atob(t.split(".")[1])).exp*1e3>Date.now()}catch{return!1}}function X(){localStorage.removeItem(M),localStorage.removeItem(T)}const E={home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',complaints:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="15" r="0.5" fill="currentColor"/></svg>',booking:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',forum:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-1"/><path d="M15 3H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l4-4h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/></svg>',rooms:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',resources:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',theme:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'},se=[{id:"home",label:"Home",icon:E.home},{id:"complaints",label:"Complaint",icon:E.complaints},{id:"booking",label:"Room Booking",icon:E.booking},{id:"forum",label:"Community Forum",icon:E.forum},{id:"resources",label:"Resources",icon:E.resources}],re=[{id:"home",label:"Home",icon:E.home},{id:"complaints",label:"Complaints",icon:E.complaints},{id:"rooms",label:"Room Details",icon:E.rooms},{id:"forum",label:"Community Forum",icon:E.forum},{id:"resources",label:"Resources",icon:E.resources}];function ie(t,o,n){var r,d;const m=F(),s=z(),i=m==="admin"?re:se,p=m==="admin"?"Admin Panel":"Student Portal";t.innerHTML=`
    <div class="sidebar-brand">
      <h1>AHCMS</h1>
      <span>${p}</span>
    </div>

    <div class="sidebar-user">
      <div class="sidebar-user-avatar">${((s==null?void 0:s.name)||"U")[0].toUpperCase()}</div>
      <div class="sidebar-user-info">
        <div class="sidebar-user-name">${(s==null?void 0:s.name)||"User"}</div>
        <div class="sidebar-user-role">${m==="admin"?"Administrator":(s==null?void 0:s.roll_no)||"Student"}</div>
      </div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Navigation</div>
      ${i.map(e=>`
        <a class="nav-item${e.id===o?" active":""}"
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
        ${E.theme}
        Toggle Theme
      </button>
      <button class="nav-item logout-btn" id="nav-logout">
        ${E.logout}
        Sign Out
      </button>
      <p>v2.0 · 2026</p>
    </div>
  `,t.querySelectorAll(".nav-item[data-page]").forEach(e=>{e.addEventListener("click",()=>n(e.dataset.page)),e.addEventListener("keydown",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),e.click())})}),(r=document.getElementById("nav-logout"))==null||r.addEventListener("click",()=>{X(),window.location.reload()}),(d=document.getElementById("nav-theme"))==null||d.addEventListener("click",()=>{const c=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",c),localStorage.setItem("ahcms_theme",c)})}function ne(){const t=document.createElement("button");t.className="sidebar-toggle",t.id="sidebar-toggle",t.innerHTML=E.menu,t.setAttribute("aria-label","Toggle navigation");const o=document.createElement("div");o.className="sidebar-overlay",o.id="sidebar-overlay",document.body.appendChild(t),document.body.appendChild(o);const n=document.getElementById("sidebar");function m(){n.classList.add("open"),o.classList.add("show"),t.innerHTML=E.close}function s(){n.classList.remove("open"),o.classList.remove("show"),t.innerHTML=E.menu}return t.addEventListener("click",()=>n.classList.contains("open")?s():m()),o.addEventListener("click",s),{close:s}}const le="/api";async function B(t,o,n){const m=Q(),s={"Content-Type":"application/json"};m&&(s.Authorization=`Bearer ${m}`);const i=new AbortController,p=setTimeout(()=>i.abort(),1e4);try{const r=await fetch(`${le}${o}`,{method:t,headers:s,body:n!==void 0?JSON.stringify(n):void 0,signal:i.signal});if(r.status===401){X(),window.location.reload();return}const d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.error||`Request failed (${r.status})`);return d}catch(r){throw r.name==="AbortError"?new Error("Request timed out — is the server running?"):r}finally{clearTimeout(p)}}const f={get:t=>B("GET",t),post:(t,o)=>B("POST",t,o),patch:(t,o)=>B("PATCH",t,o),put:(t,o)=>B("PUT",t,o),delete:t=>B("DELETE",t)};let I=null;function de(){I||(I=document.createElement("div"),I.className="toast-container",document.body.appendChild(I))}function x(t,o="info",n=3500){de();const m=document.createElement("div");m.className=`toast toast-${o}`,m.textContent=t,I.appendChild(m),requestAnimationFrame(()=>{requestAnimationFrame(()=>{m.classList.add("show")})}),setTimeout(()=>{m.classList.remove("show"),setTimeout(()=>m.remove(),300)},n)}function ce(t){var m;document.body.innerHTML=`
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
            <input type="text" id="s-roll" class="login-input" placeholder="e.g. DL.AI.U4AID24120" autocomplete="username" />
          </div>
          <div class="login-form-group">
            <label for="s-pass">Password</label>
            <input type="password" id="s-pass" class="login-input" placeholder="Enter your password" autocomplete="current-password" />
          </div>
          <p class="login-hint">Demo credentials — Roll: <code>DL.AI.U4AID24120</code> Pass: <code>Student@123</code></p>
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
            <input type="password" id="a-pass" class="login-input" placeholder="Enter your password" autocomplete="current-password" />
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
            <input type="password" id="r-pass" class="login-input" placeholder="Min. 8 characters (e.g. Admin@123)" />
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
  `,(m=document.getElementById("login-theme"))==null||m.addEventListener("click",()=>{const i=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",i),localStorage.setItem("ahcms_theme",i)});let o="student";document.querySelectorAll(".login-tab").forEach(s=>{s.addEventListener("click",()=>{o=s.dataset.tab,document.querySelectorAll(".login-tab").forEach(i=>i.classList.remove("active")),s.classList.add("active"),document.getElementById("form-student").classList.toggle("hidden",o!=="student"),document.getElementById("form-admin").classList.toggle("hidden",o!=="admin"),document.getElementById("form-register").classList.add("hidden")})}),document.getElementById("btn-show-register").addEventListener("click",()=>{document.getElementById("form-admin").classList.add("hidden"),document.getElementById("form-register").classList.remove("hidden")}),document.getElementById("btn-back-login").addEventListener("click",()=>{document.getElementById("form-register").classList.add("hidden"),document.getElementById("form-admin").classList.remove("hidden")});function n(s,i){const p=document.getElementById(s);p.disabled=i,p.textContent=i?"Signing in…":"Sign In"}document.getElementById("form-student").addEventListener("submit",async s=>{s.preventDefault();const i=document.getElementById("s-roll").value.trim(),p=document.getElementById("s-pass").value,r=document.getElementById("err-student");if(r.textContent="",!i||!p){r.textContent="All fields required.";return}n("btn-student-login",!0);try{const{token:d,user:e}=await f.post("/auth/student/login",{roll_no:i,password:p});N(d,e),t()}catch(d){r.textContent=d.message}finally{n("btn-student-login",!1)}}),document.getElementById("form-admin").addEventListener("submit",async s=>{s.preventDefault();const i=document.getElementById("a-email").value.trim(),p=document.getElementById("a-pass").value,r=document.getElementById("err-admin");if(r.textContent="",!i||!p){r.textContent="All fields required.";return}n("btn-admin-login",!0);try{const{token:d,user:e}=await f.post("/auth/admin/login",{email:i,password:p});N(d,e),t()}catch(d){r.textContent=d.message}finally{n("btn-admin-login",!1)}}),document.getElementById("form-register").addEventListener("submit",async s=>{s.preventDefault();const i=document.getElementById("r-name").value.trim(),p=document.getElementById("r-email").value.trim(),r=document.getElementById("r-pass").value,d=document.getElementById("err-register");if(d.textContent="",!i||!p||!r){d.textContent="All fields required.";return}if(r.length<8){d.textContent="Password must be at least 8 characters.";return}const e=document.getElementById("btn-register");e.disabled=!0,e.textContent="Creating…";try{await f.post("/auth/admin/register",{name:i,email:p,password:r}),x("Account created! Please sign in.","success"),document.getElementById("btn-back-login").click(),document.getElementById("a-email").value=p}catch(c){d.textContent=c.message}finally{e.disabled=!1,e.textContent="Create Account"}})}async function pe(t){t.innerHTML='<div class="page-loading">Loading…</div>';try{const{student:o,allocation:n,complaints:m,wardens:s,wardenOfficePhone:i}=await f.get("/dashboard/student");me(t,o,n,m,s,i)}catch(o){t.innerHTML=`<div class="page-error">Failed to load dashboard: ${o.message}</div>`}}function me(t,o,n,m,s,i){var d;const p=s.filter(e=>e.role==="Warden"),r=s.filter(e=>e.role==="Guard");t.innerHTML=`
    <div class="page-enter" id="student-home">
      <div class="page-header">
        <h2>Welcome, ${((d=o==null?void 0:o.name)==null?void 0:d.split(" ")[0])||"Student"} 👋</h2>
        <p>${(o==null?void 0:o.course)||""} · ${(o==null?void 0:o.hostel)||""} · Year ${(o==null?void 0:o.year)||""}</p>
      </div>

      <!-- Student Info Card -->
      <div class="form-section" style="max-width: none; margin-bottom: var(--space-10);">
        <div class="form-section-title">Your Profile</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-4);">
          ${[["Roll No",o==null?void 0:o.roll_no],["Course",o==null?void 0:o.course],["Admission",o==null?void 0:o.adm_year],["Passing Year",o==null?void 0:o.pass_year],["Gender",(o==null?void 0:o.gender)==="M"?"Male":(o==null?void 0:o.gender)==="F"?"Female":o==null?void 0:o.gender],["Address",(o==null?void 0:o.address)||"—"]].map(([e,c])=>`
            <div>
              <div style="font-size: var(--text-xs); color: var(--text-tertiary); text-transform: uppercase; letter-spacing: .06em;">${e}</div>
              <div style="font-size: var(--text-sm); color: var(--text-primary); margin-top: 4px;">${c||"—"}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Room Card -->
      <div class="card-grid">
        <div class="card card-accent-blue" style="grid-column: span 2;">
          <div class="card-label">Your Room</div>
          ${n?`<div class="card-value">${n.room_id}</div>
               <div class="card-sub">${n.hostel} · Floor ${n.floor} · ${n.type} · ${n.status}</div>
               <div style="margin-top: var(--space-2); font-size: var(--text-xs); color: var(--text-tertiary);">
                 ${n.from_date} → ${n.to_date}
               </div>`:`<div style="color: var(--text-tertiary); font-size: var(--text-sm); padding: var(--space-2) 0;">
                 No active room allocation. <a class="link-accent" href="#booking">Book a room →</a>
               </div>`}
        </div>

        <div class="card card-accent-amber">
          <div class="card-label">Open Complaints</div>
          <div class="card-value">${m.filter(e=>e.status==="open").length}</div>
          <div class="card-sub">${m.filter(e=>e.status==="in-progress").length} in progress</div>
        </div>

        <div class="card card-accent-green">
          <div class="card-label">Resolved</div>
          <div class="card-value">${m.filter(e=>e.status==="resolved").length}</div>
          <div class="card-sub">of ${m.length} total</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6);">
        <!-- On-Duty Wardens -->
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
          ${p.length===0?'<p class="empty-msg">No warden data available.</p>':p.map(e=>`
              <div class="contact-row" style="align-items: flex-start;">
                <div class="contact-avatar">${e.name[0]}</div>
                <div class="contact-info" style="flex: 1;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2px;">
                    <div class="contact-name">${e.name}</div>
                    <a href="tel:${e.phone}" class="contact-phone" style="margin-left: auto;">${e.phone||"—"}</a>
                  </div>
                  <div class="contact-meta">${e.hostel}</div>
                  <div style="display: flex; flex-wrap: wrap; gap: 12px; font-size: 11px; margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--border-color); color: var(--text-secondary);">
                    <span><span style="font-weight:600; color:var(--text-tertiary);">Last:</span> ${e.previous?e.previous.name:"Unknown"}</span>
                    <span style="color:var(--accent-green);"><span style="font-weight:600;">Current:</span> Active</span>
                    <span><span style="font-weight:600; color:var(--text-tertiary);">Next:</span> ${e.next?e.next.name:"Unknown"}</span>
                  </div>
                </div>
              </div>
            `).join("")}

          <div class="form-section-title" style="margin-top: var(--space-6);">On-Duty Guards</div>
          ${r.length===0?'<p class="empty-msg">No guard data.</p>':r.map(e=>`
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
          ${m.length===0?'<p class="empty-msg">No complaints filed yet.</p>':`<div class="activity-list">
                ${m.slice(0,5).map(e=>`
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
  `,t.querySelectorAll('a.link-accent[href^="#"]').forEach(e=>{e.addEventListener("click",c=>{c.preventDefault(),window.location.hash=e.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var e;return(e=document.getElementById("student-home"))==null?void 0:e.classList.replace("page-enter","page-active")})}const O=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"],_={Plumbing:"🔧",Electricity:"⚡",WiFi:"📶",Cleanliness:"🧹",Carpentry:"🔨",Other:"📋"},ve=["open","in-progress","resolved"];async function ue(t){t.innerHTML='<div class="page-loading">Loading…</div>';let o=[];try{o=await f.get("/complaints")}catch(n){t.innerHTML=`<div class="page-error">Failed to load: ${n.message}</div>`;return}ge(t,o)}function ge(t,o){let n=o,m="all",s="";t.innerHTML=`
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
                ${O.map(e=>`<option value="${e}">${_[e]} ${e}</option>`).join("")}
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
          ${O.map(e=>`<option value="${e}">${_[e]} ${e}</option>`).join("")}
        </select>
      </div>

      <!-- My Complaints Table -->
      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">My Complaints</div>
          <div style="display:flex; gap: var(--space-2); flex-wrap: wrap;">
            <button class="filter-chip active" data-status="all">All</button>
            ${ve.map(e=>`<button class="filter-chip" data-status="${e}">${e}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-list"></div>
      </div>
    </div>
  `;function i(){let e=n;s&&(e=e.filter(a=>a.category===s)),m!=="all"&&(e=e.filter(a=>a.status===m));const c=document.getElementById("complaints-list");if(e.length===0){c.innerHTML='<p style="padding: var(--space-8); text-align:center; color: var(--text-tertiary);">No complaints found.</p>';return}c.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>#</th><th>Category</th><th>Description</th><th>Date</th><th>Status</th><th>Note</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(a=>`
            <tr>
              <td class="cell-mono">${a.complaint_id}</td>
              <td>${_[a.category]||""} ${a.category}</td>
              <td style="max-width:220px; overflow:hidden; text-overflow:ellipsis;" title="${a.description}">${a.description.slice(0,50)}${a.description.length>50?"…":""}</td>
              <td class="cell-mono">${a.date}</td>
              <td><span class="badge badge-${a.status}">${a.status}</span></td>
              <td style="color: var(--text-tertiary); font-size: var(--text-xs);">${a.admin_note||"—"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `}document.getElementById("cat-filter-select").addEventListener("change",e=>{s=e.target.value,i()}),t.querySelectorAll("[data-status]").forEach(e=>{e.addEventListener("click",()=>{t.querySelectorAll("[data-status]").forEach(c=>c.classList.remove("active")),e.classList.add("active"),m=e.dataset.status,i()})});const p=document.getElementById("cmp-category"),r=document.getElementById("cmp-other-group");p.addEventListener("change",e=>{e.target.value==="Other"?r.style.display="":(r.style.display="none",document.getElementById("cmp-other-type").value="",document.getElementById("err-cmp-other").classList.remove("visible"))});const d=document.getElementById("complaint-form");d.addEventListener("submit",async e=>{e.preventDefault();let c=!0;t.querySelectorAll(".form-error").forEach(u=>u.classList.remove("visible"));const a=document.getElementById("cmp-category").value,g=document.getElementById("cmp-other-type").value.trim(),v=document.getElementById("cmp-desc").value.trim(),l=document.getElementById("cmp-photo").files[0];if(a||(document.getElementById("err-cmp-cat").classList.add("visible"),c=!1),a==="Other"&&!g&&(document.getElementById("err-cmp-other").classList.add("visible"),c=!1),v||(document.getElementById("err-cmp-desc").classList.add("visible"),c=!1),!c){x("Fill in all required fields.","error");return}const y=document.getElementById("cmp-submit");y.disabled=!0,y.textContent="Submitting…";try{let u=null;l&&(u=await new Promise((b,k)=>{const w=new FileReader;w.onload=()=>b(w.result),w.onerror=k,w.readAsDataURL(l)}));const h=a==="Other"&&g?`[Other: ${g}] ${v}`:v,$=await f.post("/complaints",{category:a,description:h,photo_base64:u});n=[$,...n],x(`Complaint #${$.complaint_id} submitted.`,"success"),d.reset(),i()}catch(u){x(u.message,"error")}finally{y.disabled=!1,y.textContent="Submit Complaint"}}),d.addEventListener("reset",()=>{t.querySelectorAll(".form-error").forEach(e=>e.classList.remove("visible")),document.getElementById("cmp-other-group").style.display="none"}),i(),requestAnimationFrame(()=>{var e;return(e=document.getElementById("complaints-page"))==null?void 0:e.classList.replace("page-enter","page-active")})}async function Z(t){t.innerHTML='<div class="page-loading">Loading rooms…</div>';try{const[o,{allocation:n},m]=await Promise.all([f.get("/rooms"),f.get("/rooms/my-allocation"),f.get("/rooms/booking-requests")]);ye(t,o,n,m)}catch(o){t.innerHTML=`<div class="page-error">Failed to load: ${o.message}</div>`}}function ye(t,o,n,m){var v,l,y;const s=z(),i=o.filter(u=>u.hostel===((s==null?void 0:s.hostel)||"")),p=[...new Set(i.map(u=>u.floor))].sort((u,h)=>u-h);let d=p[0]||1,e=null;const c=m.find(u=>u.status==="pending");t.innerHTML=`
    <div class="page-enter" id="booking-page">
      <div class="page-header">
        <h2>Room Booking</h2>
        <p>Select a room from the floor plan to submit a booking request.</p>
      </div>

      ${n?`
        <div style="background:var(--bg-elevated); padding:var(--space-6); border-radius:var(--radius-lg); border:1px solid rgba(52,211,153,.3); margin-bottom:var(--space-6);">
          <div style="color:var(--text-secondary); font-size:var(--text-xs); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:var(--space-2);">Current Room Assignment</div>
          <div style="display:flex; align-items:center; gap:var(--space-3);">
            <div style="font-size:32px; font-weight:700; color:var(--accent-green); line-height:1;">${n.room_id}</div>
            <div style="border-left:1px solid var(--border-subtle); padding-left:var(--space-3);">
              <div style="font-weight:500;">${n.hostel}</div>
              <div style="font-size:var(--text-sm); color:var(--text-secondary);">Floor ${n.floor} • Management Allocated</div>
            </div>
          </div>
        </div>
      `:c?`
        <div class="alert-banner alert-amber" style="margin-bottom:var(--space-6);">
          <strong>Pending request:</strong> Room ${c.room_id} submitted on ${(v=c.created_at)==null?void 0:v.slice(0,10)}. Waiting for admin approval.
        </div>
      `:""}

      <!-- Floor Selector -->
      <div style="display:flex; align-items: center; gap: var(--space-4); margin-bottom: var(--space-6);">
        <span style="font-size: var(--text-sm); color: var(--text-secondary);">Floor:</span>
        <div class="cat-tabs" style="margin:0;">
          ${p.map(u=>`
            <button class="cat-tab${u===d?" active":""}" data-floor="${u}">Floor ${u}</button>
          `).join("")}
        </div>
      </div>

      <!-- Floor Plan -->
      <div class="form-section" style="max-width: none; margin-bottom: var(--space-6);" id="floor-plan-section">
        <div class="form-section-title" id="floor-plan-title">Floor ${d} — ${(s==null?void 0:s.hostel)||""}</div>
        <div class="floor-plan" id="floor-plan"></div>
        <div class="floor-legend">
          <span class="legend-item"><span class="legend-dot vacant"></span> Vacant</span>
          <span class="legend-item"><span class="legend-dot partial"></span> Partially occupied</span>
          <span class="legend-item"><span class="legend-dot full"></span> Full</span>
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
        ${m.length===0?'<p style="padding: var(--space-6); text-align:center; color:var(--text-tertiary);">No booking requests yet.</p>':`<table>
              <thead><tr><th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th><th>Status</th><th>Note</th><th>Date</th></tr></thead>
              <tbody>
                ${m.map(u=>{var h;return`
                  <tr>
                    <td class="cell-mono">${u.room_id}</td>
                    <td>${u.hostel}</td>
                    <td>${u.floor}</td>
                    <td>${u.type}</td>
                    <td><span class="badge badge-${u.status}">${u.status}</span></td>
                    <td style="color:var(--text-tertiary); font-size:var(--text-xs);">${u.admin_note||"—"}</td>
                    <td class="cell-mono">${(h=u.created_at)==null?void 0:h.slice(0,10)}</td>
                  </tr>
                `}).join("")}
              </tbody>
            </table>`}
      </div>
    </div>
  `;function a(u){const h=i.filter(b=>b.floor===u);document.getElementById("floor-plan-title").textContent=`Floor ${u} — ${(s==null?void 0:s.hostel)||""}`;const $=document.getElementById("floor-plan");if(h.length===0){$.innerHTML='<p style="color:var(--text-tertiary); padding: var(--space-4);">No rooms on this floor.</p>';return}$.innerHTML=h.map(b=>{const k=b.capacity>0?b.current_occupancy/b.capacity:0,w=k===0?"vacant":k<1?"partial":"full",ae=(e==null?void 0:e.room_id)===b.room_id;return`
        <button class="room-cell ${w}${ae?" selected":""}"
                data-room="${b.room_id}"
                ${w==="full"?"disabled":""}
                title="${b.room_id} · ${b.type} · ${b.current_occupancy}/${b.capacity}">
          <span class="room-cell-id">${b.room_id}</span>
          <span class="room-cell-type">${b.type[0]}</span>
          <span class="room-cell-occ">${b.current_occupancy}/${b.capacity}</span>
        </button>
      `}).join(""),$.querySelectorAll(".room-cell:not([disabled])").forEach(b=>{b.addEventListener("click",()=>{e=i.find(k=>k.room_id===b.dataset.room),a(u),g(e)})})}function g(u){const h=document.getElementById("room-detail-panel"),$=document.getElementById("room-detail-body");document.getElementById("room-detail-title").textContent=`Room ${u.room_id}`,$.innerHTML=`
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: var(--space-4);">
        ${[["Hostel",u.hostel],["Floor",u.floor],["Type",u.type],["Capacity",`${u.capacity} beds`],["Occupied",`${u.current_occupancy} / ${u.capacity}`],["Available",`${u.available_slots} slot(s)`]].map(([b,k])=>`
          <div>
            <div style="font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase; letter-spacing:.06em;">${b}</div>
            <div style="font-size:var(--text-sm); margin-top:4px; color:var(--text-primary);">${k}</div>
          </div>
        `).join("")}
      </div>
    `,h.style.display=n||c?"none":"block",(n||c)&&(h.style.display="none")}t.querySelectorAll(".cat-tab[data-floor]").forEach(u=>{u.addEventListener("click",()=>{t.querySelectorAll(".cat-tab[data-floor]").forEach(h=>h.classList.remove("active")),u.classList.add("active"),d=+u.dataset.floor,e=null,document.getElementById("room-detail-panel").style.display="none",a(d)})}),(l=document.getElementById("btn-cancel-room"))==null||l.addEventListener("click",()=>{e=null,document.getElementById("room-detail-panel").style.display="none",a(d)}),(y=document.getElementById("booking-form"))==null||y.addEventListener("submit",async u=>{if(u.preventDefault(),!e)return;const h=document.getElementById("booking-pref").value.trim(),$=document.getElementById("btn-book");$.disabled=!0,$.textContent="Submitting…";try{await f.post("/rooms/book",{room_id:e.room_id,preferences:h}),x(`Booking request for ${e.room_id} submitted!`,"success"),Z(t)}catch(b){x(b.message,"error"),$.disabled=!1,$.textContent="Request This Room"}}),a(d),requestAnimationFrame(()=>{var u;return(u=document.getElementById("booking-page"))==null?void 0:u.classList.replace("page-enter","page-active")})}async function ee(t){t.innerHTML='<div class="page-loading">Loading forum…</div>';try{const o=await f.get("/forum");fe(t,o)}catch(o){t.innerHTML=`<div class="page-error">Failed to load forum: ${o.message}</div>`}}function fe(t,o){const n=F()==="admin";let m=o;t.innerHTML=`
    <div class="page-enter" id="forum-page">
      <div class="page-header">
        <h2>Community Forum</h2>
        <p>${n?"Read all campus posts — posting is disabled for admins.":"Share thoughts anonymously with your campus community."}</p>
      </div>

      ${n?`
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
  `;function s(){const p=document.getElementById("forum-feed"),r=document.getElementById("forum-empty");if(m.length===0){p.innerHTML="",r.style.display="block";return}r.style.display="none",p.innerHTML=m.map(d=>`
      <div class="forum-post card" style="background:var(--bg-primary); padding:var(--space-4); margin-bottom:var(--space-4); border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
        <div class="forum-post-header" style="display:flex; align-items:center; gap:var(--space-3); margin-bottom:var(--space-2);">
          <div class="forum-avatar" style="font-size:24px; background:transparent; border:none;">${d.avatar_icon||"👤"}</div>
          <div>
            <div class="forum-post-title" style="font-weight:600; color:var(--text-primary);">${L(d.title)}</div>
            <div class="forum-post-meta" style="font-size:var(--text-xs); color:var(--text-tertiary);">${L(d.avatar_name||"Anonymous")} · ${G(d.created_at)}</div>
          </div>
        </div>
        <div class="forum-post-body" style="font-size:var(--text-sm); color:var(--text-secondary); line-height:1.6; margin-left:var(--space-10); margin-bottom:var(--space-3);">${L(d.content)}</div>
        
        <div class="forum-post-actions" style="margin-left:var(--space-10); display:flex; gap:var(--space-4); align-items:center; margin-bottom:var(--space-2);">
          <div style="display:flex; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--border-subtle); overflow:hidden;">
            <button class="vote-btn" data-type="post" data-id="${d.post_id}" data-dir="up" style="background:transparent; border:none; padding:4px 8px; cursor:pointer; color:var(--text-secondary);">⇧ ${d.upvotes||0}</button>
            <div style="width:1px; background:var(--border-subtle);"></div>
            <button class="vote-btn" data-type="post" data-id="${d.post_id}" data-dir="down" style="background:transparent; border:none; padding:4px 8px; cursor:pointer; color:var(--text-secondary);">⇩ ${d.downvotes||0}</button>
          </div>
          ${n?"":`<button class="reply-toggle-btn" data-post-id="${d.post_id}" style="background:transparent; border:none; color:var(--text-tertiary); font-size:var(--text-xs); cursor:pointer; display:flex; gap:4px; align-items:center;">💬 Reply</button>`}
        </div>

        <!-- Replies -->
        ${d.replies&&d.replies.length>0?`
          <div class="forum-replies" style="margin-left:var(--space-10); border-left:2px solid var(--border-subtle); padding-left:var(--space-4); margin-top:var(--space-4); display:flex; flex-direction:column; gap:var(--space-4);">
            ${d.replies.map(e=>`
              <div class="forum-reply">
                <div class="forum-post-header" style="display:flex; align-items:center; gap:var(--space-2); margin-bottom:4px;">
                  <div class="forum-avatar" style="font-size:16px; background:transparent; border:none; width:auto; height:auto;">${e.avatar_icon||"👤"}</div>
                  <div class="forum-post-meta" style="font-size:var(--text-xs); color:var(--text-tertiary);">${L(e.avatar_name||"Anonymous")} · ${G(e.created_at)}</div>
                </div>
                <div class="forum-post-body" style="font-size:var(--text-sm); line-height:1.5; color:var(--text-secondary); margin-left:var(--space-6);">${L(e.content)}</div>
                <div class="forum-post-actions" style="margin-left:var(--space-6); display:flex; gap:var(--space-3); margin-top:4px;">
                  <div style="display:flex; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--border-subtle); overflow:hidden;">
                    <button class="vote-btn" data-type="reply" data-id="${e.reply_id}" data-dir="up" style="background:transparent; border:none; padding:2px 6px; cursor:pointer; font-size:11px; color:var(--text-secondary);">⇧ ${e.upvotes||0}</button>
                    <div style="width:1px; background:var(--border-subtle);"></div>
                    <button class="vote-btn" data-type="reply" data-id="${e.reply_id}" data-dir="down" style="background:transparent; border:none; padding:2px 6px; cursor:pointer; font-size:11px; color:var(--text-secondary);">⇩ ${e.downvotes||0}</button>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        `:""}

        <!-- Reply Form Content -->
        ${n?"":`
          <div id="reply-form-${d.post_id}" style="display:none; margin-left:var(--space-10); margin-top:var(--space-4);">
            <textarea id="reply-input-${d.post_id}" class="form-textarea" rows="2" placeholder="Write an anonymous reply..." style="padding:var(--space-2); min-height:60px;"></textarea>
            <div style="margin-top:var(--space-2); display:flex; gap:var(--space-2);">
              <button class="btn btn-primary reply-submit-btn" data-post-id="${d.post_id}" style="padding:4px 12px; font-size:12px;">Submit Reply</button>
              <button class="btn btn-secondary reply-toggle-btn" data-post-id="${d.post_id}" style="padding:4px 12px; font-size:12px;">Cancel</button>
            </div>
          </div>
        `}
      </div>
    `).join("")}if(document.getElementById("forum-feed").addEventListener("click",async p=>{const r=p.target.closest(".vote-btn");if(r&&!r.disabled){const c=r.dataset.type,a=r.dataset.id,g=r.dataset.dir;r.disabled=!0;try{const v=await f.patch("/forum/vote",{type:c,id:parseInt(a,10),dir:g});if(c==="post"){const l=m.find(y=>y.post_id===parseInt(a,10));l&&(l.upvotes=v.upvotes,l.downvotes=v.downvotes)}else for(const l of m)if(l.replies){const y=l.replies.find(u=>u.reply_id===parseInt(a,10));if(y){y.upvotes=v.upvotes,y.downvotes=v.downvotes;break}}s()}catch(v){x(v.message,"error"),r.disabled=!1}return}const d=p.target.closest(".reply-toggle-btn");if(d){const c=d.dataset.postId,a=document.getElementById(`reply-form-${c}`);a&&(a.style.display=a.style.display==="none"?"block":"none");return}const e=p.target.closest(".reply-submit-btn");if(e){const c=e.dataset.postId,a=document.getElementById(`reply-input-${c}`),g=a==null?void 0:a.value.trim();if(!g){x("Reply content cannot be empty","error");return}e.disabled=!0,e.textContent="...";try{const v=await f.post(`/forum/${c}/reply`,{content:g}),l=m.find(y=>y.post_id===parseInt(c,10));l&&(l.replies||(l.replies=[]),l.replies.push(v)),x("Reply posted","success"),s()}catch(v){x(v.message,"error"),e.disabled=!1,e.textContent="Submit Reply"}return}}),!n){const p=document.getElementById("forum-form");p.addEventListener("submit",async r=>{r.preventDefault();let d=!0;t.querySelectorAll(".form-error").forEach(g=>g.classList.remove("visible"));const e=document.getElementById("f-title").value.trim(),c=document.getElementById("f-content").value.trim();if(e||(document.getElementById("err-f-title").classList.add("visible"),d=!1),c||(document.getElementById("err-f-content").classList.add("visible"),d=!1),!d)return;const a=document.getElementById("btn-post");a.disabled=!0,a.textContent="Posting…";try{m=[await f.post("/forum",{title:e,content:c}),...m],x("Posted anonymously!","success"),p.reset(),s()}catch(g){x(g.message,"error")}finally{a.disabled=!1,a.textContent="Post Anonymously"}}),p.addEventListener("reset",()=>t.querySelectorAll(".form-error").forEach(r=>r.classList.remove("visible")))}s(),requestAnimationFrame(()=>{var p;return(p=document.getElementById("forum-page"))==null?void 0:p.classList.replace("page-enter","page-active")})}function L(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function G(t){try{return new Date(t).toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}const U=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],be={breakfast:[["Poori Chole","Matter Kulcha","Kachori Bhaji","Dosa Sambar","Pav Bhaji","Macaroni","Aloo Paratha"],["Chacos","Idli Sambar","Daliya","Chana Chaat","Corn Flakes","Idli Sambar","Cut Fruits"],["Egg","Banana","Egg","—","Egg","—","—"],["Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee"],["Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam"]],lunch:[["Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad"],["Boondi Raita","Mix Veg Raita","Lauki Raita","Mix Veg Raita","Boondi Raita","Mix Veg Raita","Mint Raita"],["A / P / C","A / P / C","A / P / C","A / P / C","A / P / C","A / P / C","A / P / C"],["Mix Dal Tadka","Chole Masala","Kadi Pakora","Lobhiya / Masoor Dal","Rajma Masala","Dal Makhani","Dal Tadka"],["Matar Paneer","Aloo Nutrela","Mixed Vegetable","Paneer Do Pyaza","Handi Kofta Curry","Aloo Gobhi Masala","Chap Masala"],["Aloo Palak","Boiled Rice","Soya Chap Gravy","Boiled Rice","Boiled Rice","Boiled Rice","Veg Biryani"],["Boiled Rice","Chapathi","Jeera Rice","Cut Fruits","Chapathi","Chapathi","Chapathi"],["Chapathi","Ice Cream","Chapathi","Chapathi","—","Besan Barfi","Fruit Custard"]],hitea:[["Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee"],["Veg Hakka Noodles","Bhaji Pakora","Veg Sandwich","Bread Pakora","Cake Slice","Potato Wedges","Aloo Sandwich"]],dinner:[["Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad"],["Dal Bukhara","Curd","Rajma Masala","Curd","Dal Palak","Khichdi","Curd"],["Veg Jalfrezi","Arhar Dal Fry","Palak Paneer","Mix Dal Tadka","Soya Matar Masala","Mix Vegetable","Dal Dhaba"],["Jeera Pulao","Crispy Veg Sweet Chilly","Onion Pulao","Aloo Chole","Tomato Rice","Chapati","Paneer Lababdar"],["Chapathi","Aloo Jeera","Chapathi","Masala Rice","Chapathi","Hot Milk","Jeera Pulao"],["Milk","Soya Biryani","Milk","Chapathi","Milk","—","Chapathi"],["Rice Kheer","Chapathi","Fruit Custard","Milk","Boondi","—","Milk"]]},he=[{key:"breakfast",label:"Breakfast",time:"7:30 – 9:30 AM"},{key:"lunch",label:"Lunch",time:"12:30 – 2:30 PM"},{key:"hitea",label:"Evening Hi-Tea",time:"5:00 – 6:30 PM"},{key:"dinner",label:"Dinner",time:"7:30 – 9:30 PM"}];function xe(){const t=new Date().getDay();return t===0?6:t-1}function $e(){const t=new Date().getHours();return t<10?"breakfast":t<15?"lunch":t<19?"hitea":"dinner"}async function Ee(t){t.innerHTML='<div class="page-loading">Loading…</div>';let o=[];try{o=await f.get("/resources")}catch{}ke(t,o)}function ke(t,o){const n=xe();let m=$e(),s=n;if(t.innerHTML=`
    <div class="page-enter" id="res-page" style="max-width:1200px;">

      <!-- Header -->
      <div class="page-header">
        <h2>Resources</h2>
        <p style="color:var(--text-tertiary);">Everything you need — menu, health, services.</p>
      </div>

      <!-- ═══════════════════════════════════════
           MESS MENU
      ═══════════════════════════════════════ -->
      <section style="margin-bottom: var(--space-12);">
        <div class="res-section-label">Mess Menu</div>

        <!-- Meal selector -->
        <div style="display:flex; gap:var(--space-2); margin-bottom:var(--space-6); border-bottom:1px solid var(--border-subtle); padding-bottom:var(--space-4);" id="meal-tabs">
          ${he.map(p=>`
            <button data-meal="${p.key}" class="res-meal-tab${p.key===m?" active":""}">
              <span class="res-meal-name">${p.label}</span>
              <span class="res-meal-time">${p.time}</span>
            </button>
          `).join("")}
        </div>

        <!-- Day selector -->
        <div style="display:flex; gap:var(--space-2); margin-bottom:var(--space-5); flex-wrap:wrap;" id="day-tabs">
          ${U.map((p,r)=>`
            <button class="res-day-tab${r===s?" active":""}" data-day="${r}">
              ${p.slice(0,3)}${r===n?" ·":""}
            </button>
          `).join("")}
        </div>

        <!-- Menu table -->
        <div id="menu-panel" style="overflow-x:auto;"></div>

        <!-- Live counter note -->
        <p style="margin-top:var(--space-5); font-size:var(--text-xs); color:var(--text-tertiary); padding:var(--space-3) var(--space-4); background:var(--bg-elevated); border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
          One Friday/month — Live counter: Tandoor / Poori &nbsp;·&nbsp; Matar Paneer &nbsp;·&nbsp; One Sweet
        </p>
      </section>

      <!-- ═══════════════════════════════════════
           INFO GRID  (pharmacy / hospital / laundry / canteens)
      ═══════════════════════════════════════ -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-6); margin-bottom:var(--space-12);">

        <!-- Pharmacy -->
        ${S("Pharmacy",`
          <div class="res-info-block">
            <div class="res-info-place">Campus Pharmacy</div>
            <div class="res-info-line">Ground Floor, OPD Block, Amrita Hospital</div>
            <div class="res-info-line">Mon – Sat &nbsp; 8 AM – 9 PM &nbsp; · &nbsp; Sun 9 AM – 6 PM</div>
            <a href="tel:01294090000" class="res-phone">0129-409-0000</a>
          </div>
          <div class="res-info-block" style="margin-top:var(--space-6); padding-top:var(--space-6); border-top:1px solid var(--border-subtle);">
            <div class="res-info-place">24-Hour Emergency Pharmacy</div>
            <div class="res-info-line">Emergency Block, Ground Floor &nbsp;·&nbsp; Open 24 × 7</div>
            <a href="tel:01294090911" class="res-phone">0129-409-0911</a>
          </div>
        `)}

        <!-- Hospital Booking -->
        ${S("Hospital Appointment",`
          <div class="res-info-block">
            <div class="res-info-place">Amrita Hospital Faridabad</div>
            <div class="res-info-line" style="margin-bottom:var(--space-5);">Book OPD appointments online via the Amrita patient portal.</div>
            <a href="https://www.amritahospitals.org/faridabad/book-appointment"
               target="_blank" rel="noopener" class="res-book-btn">
              Book Appointment
            </a>
          </div>
          <div class="res-info-block" style="margin-top:var(--space-6); padding-top:var(--space-6); border-top:1px solid var(--border-subtle);">
            <div class="res-info-place">Appointment Helpline</div>
            <div class="res-info-line">Mon – Sat &nbsp; 8 AM – 6 PM</div>
            <a href="tel:01294090100" class="res-phone">0129-409-0100</a>
            <a href="tel:18001024647" class="res-phone" style="margin-top:var(--space-1);">1800-102-4647 &nbsp;<span style="font-weight:400;opacity:.6;">Toll Free</span></a>
          </div>
        `)}

        <!-- Laundry -->
        ${S("Laundry",`
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-6);">
            <div>
              <div class="res-info-place" style="margin-bottom:var(--space-4);">Collection</div>
              ${[["Monday","Boys Hostel (Senior MBBS)"],["Tuesday","Girls Hostel (Senior MBBS)"],["Wednesday","Sardha Block A & B"]].map(([p,r])=>`<div class="res-laundry-row"><span>${p}</span><span>${r}</span></div>`).join("")}
            </div>
            <div>
              <div class="res-info-place" style="margin-bottom:var(--space-4);">Delivery</div>
              ${[["Thursday","Boys Hostel (Senior MBBS)"],["Friday","Girls Hostel (Senior MBBS)"],["Saturday","Sardha Block A & B"]].map(([p,r])=>`<div class="res-laundry-row"><span>${p}</span><span>${r}</span></div>`).join("")}
            </div>
          </div>
          <div class="res-info-block" style="margin-top:var(--space-6); padding-top:var(--space-6); border-top:1px solid var(--border-subtle);">
            <div class="res-info-line">Label all items with name & roll number. Dry-clean items separately.</div>
            <a href="tel:9999000001" class="res-phone" style="margin-top:var(--space-3);">9999-000-001</a>
          </div>
        `)}

        <!-- Canteens -->
        ${S("Canteens",`
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-6);">
            <div>
              <div class="res-info-place">Oasis — Day</div>
              <div class="res-info-line" style="margin-top:var(--space-2);">10 AM – 5 PM</div>
              <div class="res-info-line">Min ₹50 · UPI / Cash</div>
              <a href="tel:9876540001" class="res-phone" style="margin-top:var(--space-3);">98765-40001</a>
              <a href="tel:9876540002" class="res-phone" style="margin-top:var(--space-1);">98765-40002</a>
            </div>
            <div style="padding-left:var(--space-6); border-left:1px solid var(--border-subtle);">
              <div class="res-info-place">NT1 — Night</div>
              <div class="res-info-line" style="margin-top:var(--space-2);">9:30 PM – 1 AM</div>
              <div class="res-info-line">UPI / Cash</div>
              <a href="tel:9876540010" class="res-phone" style="margin-top:var(--space-3);">98765-40010</a>
              <a href="tel:9876540011" class="res-phone" style="margin-top:var(--space-1);">98765-40011</a>
            </div>
          </div>
        `)}

      </div>

      <!-- ═══════════════════════════════════════
           CONTACTS (from DB)
      ═══════════════════════════════════════ -->
      ${o.length>0?`
        <section>
          <div class="res-section-label" style="margin-bottom:var(--space-5);">Staff Directory</div>
          <div id="contacts-body">${we(o)}</div>
        </section>
      `:""}

    </div>
  `,!document.getElementById("res-styles")){const p=document.createElement("style");p.id="res-styles",p.textContent=`
      .res-section-label {
        font-size: var(--text-xs);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .1em;
        color: var(--text-tertiary);
        margin-bottom: var(--space-6);
      }

      /* Meal tabs */
      .res-meal-tab {
        display: flex; flex-direction: column;
        padding: var(--space-4) var(--space-6);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-md);
        background: var(--bg-elevated);
        cursor: pointer;
        transition: all .15s;
        text-align: left;
        gap: 4px;
        min-width: 140px;
      }
      .res-meal-tab:hover { border-color: var(--border-default); }
      .res-meal-tab.active {
        border-color: var(--text-primary);
        background: var(--text-primary);
        color: var(--text-inverse);
      }
      .res-meal-name { font-size: var(--text-sm); font-weight: 600; }
      .res-meal-time { font-size: 11px; opacity: .6; }
      .res-meal-tab.active .res-meal-time { opacity: .7; }

      /* Day tabs */
      .res-day-tab {
        padding: 6px 14px;
        font-size: var(--text-xs);
        font-weight: 500;
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-full, 999px);
        background: transparent;
        color: var(--text-tertiary);
        cursor: pointer;
        transition: all .15s;
      }
      .res-day-tab:hover { color: var(--text-primary); border-color: var(--border-default); }
      .res-day-tab.active {
        background: var(--text-primary);
        color: var(--text-inverse);
        border-color: transparent;
      }

      /* Big info cards */
      .res-big-card {
        background: var(--bg-elevated);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-lg);
        padding: var(--space-8);
        display: flex;
        flex-direction: column;
      }
      .res-card-title {
        font-size: var(--text-xs);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .1em;
        color: var(--text-tertiary);
        margin-bottom: var(--space-6);
        padding-bottom: var(--space-4);
        border-bottom: 1px solid var(--border-subtle);
      }
      .res-info-block { display: flex; flex-direction: column; }
      .res-info-place {
        font-size: var(--text-sm);
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: var(--space-2);
      }
      .res-info-line {
        font-size: var(--text-sm);
        color: var(--text-tertiary);
        line-height: 1.6;
      }
      .res-phone {
        display: inline-block;
        font-size: var(--text-sm);
        font-family: var(--font-mono);
        font-weight: 600;
        color: var(--text-primary);
        text-decoration: none;
        margin-top: var(--space-3);
      }
      .res-phone:hover { opacity: .7; }
      .res-book-btn {
        display: inline-flex;
        align-items: center;
        padding: 10px 20px;
        background: var(--text-primary);
        color: var(--text-inverse);
        border-radius: var(--radius-md);
        font-size: var(--text-sm);
        font-weight: 600;
        text-decoration: none;
        transition: opacity .15s;
        align-self: flex-start;
      }
      .res-book-btn:hover { opacity: .75; }

      /* Laundry rows */
      .res-laundry-row {
        display: flex;
        flex-direction: column;
        margin-bottom: var(--space-4);
      }
      .res-laundry-row > span:first-child {
        font-size: var(--text-xs);
        font-weight: 600;
        color: var(--text-primary);
        text-transform: uppercase;
        letter-spacing: .04em;
      }
      .res-laundry-row > span:last-child {
        font-size: var(--text-sm);
        color: var(--text-tertiary);
        margin-top: 2px;
      }

      /* Menu table */
      #menu-panel table {
        width: 100%;
        border-collapse: collapse;
        border-radius: var(--radius-lg);
        overflow: hidden;
        border: 1px solid var(--border-subtle);
      }
      #menu-panel th {
        padding: 12px 14px;
        font-size: var(--text-xs);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: .06em;
        text-align: center;
        background: var(--bg-elevated);
        color: var(--text-tertiary);
        border-bottom: 1px solid var(--border-subtle);
      }
      #menu-panel th.today {
        background: var(--text-primary);
        color: var(--text-inverse);
      }
      #menu-panel td {
        padding: 10px 14px;
        font-size: var(--text-xs);
        text-align: center;
        color: var(--text-secondary);
        border-bottom: 1px solid var(--border-subtle);
        text-transform: uppercase;
        letter-spacing: .02em;
      }
      #menu-panel td.today {
        color: var(--text-primary);
        font-weight: 600;
        background: rgba(0,0,0,.02);
      }
      [data-theme="dark"] #menu-panel td.today { background: rgba(255,255,255,.03); }
      #menu-panel tr:last-child td { border-bottom: none; }

      /* Staff grid */
      .res-staff-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: var(--space-4);
      }
      .res-staff-card {
        background: var(--bg-elevated);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-lg);
        padding: var(--space-5) var(--space-6);
      }
      .res-staff-cat {
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: .1em;
        color: var(--text-tertiary);
        margin-bottom: var(--space-4);
      }
      .res-staff-entry { margin-bottom: var(--space-4); }
      .res-staff-entry:last-child { margin-bottom: 0; }
      .res-staff-name {
        font-size: var(--text-sm);
        font-weight: 600;
        color: var(--text-primary);
      }
      .res-staff-meta {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
        margin-top: 2px;
      }

      @media (max-width: 768px) {
        .res-big-grid { grid-template-columns: 1fr !important; }
      }
    `,document.head.appendChild(p)}function i(){const p=be[m],r=document.getElementById("menu-panel");r&&(r.innerHTML=`
      <table>
        <thead>
          <tr>
            ${U.map((d,e)=>`<th class="${e===s?"today":""}">${d}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${p.map(d=>`
            <tr>
              ${d.map((e,c)=>`<td class="${c===s?"today":""}">${e}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    `)}document.getElementById("meal-tabs").querySelectorAll(".res-meal-tab").forEach(p=>{p.addEventListener("click",()=>{document.getElementById("meal-tabs").querySelectorAll(".res-meal-tab").forEach(r=>r.classList.remove("active")),p.classList.add("active"),m=p.dataset.meal,i()})}),document.getElementById("day-tabs").querySelectorAll(".res-day-tab").forEach(p=>{p.addEventListener("click",()=>{document.getElementById("day-tabs").querySelectorAll(".res-day-tab").forEach(r=>r.classList.remove("active")),p.classList.add("active"),s=+p.dataset.day,i()})}),i(),requestAnimationFrame(()=>{var p;return(p=document.getElementById("res-page"))==null?void 0:p.classList.replace("page-enter","page-active")})}function S(t,o){return`
    <div class="res-big-card">
      <div class="res-card-title">${t}</div>
      ${o}
    </div>
  `}function we(t){const o={Plumber:"Plumber",Electrician:"Electrician",WiFi:"Wi-Fi / IT",Authority:"Authority",Other:"Other"},n={};return t.forEach(m=>{(n[m.category]=n[m.category]||[]).push(m)}),`
    <div class="res-staff-grid">
      ${Object.entries(n).map(([m,s])=>`
        <div class="res-staff-card">
          <div class="res-staff-cat">${o[m]||m}</div>
          ${s.map(i=>`
            <div class="res-staff-entry">
              <div class="res-staff-name">${i.name}</div>
              ${i.phone?`<a href="tel:${i.phone}" style="display:block;font-size:var(--text-xs);font-family:var(--font-mono);font-weight:600;color:var(--text-primary);text-decoration:none;margin-top:2px;">${i.phone}</a>`:""}
              ${i.notes?`<div class="res-staff-meta">${i.notes}</div>`:""}
            </div>
          `).join("")}
        </div>
      `).join("")}
    </div>
  `}const q="ahcms_hostel_filter";function D(){return localStorage.getItem(q)||""}function te(t){t?localStorage.setItem(q,t):localStorage.removeItem(q),window.dispatchEvent(new CustomEvent("hostel-change",{detail:t}))}function j(t){window.addEventListener("hostel-change",o=>t(o.detail))}async function Ce(t){let o=[];async function n(){t.innerHTML='<div class="page-loading">Loading</div>';try{const s=D(),i=s?`?hostel=${encodeURIComponent(s)}`:"",[p,r]=await Promise.all([f.get(`/dashboard/admin${i}`),f.get("/rooms")]);o=[...new Set(r.map(d=>d.hostel))].sort(),m(t,p,o,s)}catch(s){t.innerHTML=`<div class="page-error">Failed to load: ${s.message}</div>`}}j(()=>n()),await n();function m(s,{stats:i,recentComplaints:p,wardens:r,wardenOfficePhone:d},e,c){const a=r.filter(l=>l.role==="Warden"),g=r.filter(l=>l.role==="Guard"),v=i.totalCapacity>0?Math.round(i.totalOccupied/i.totalCapacity*100):0;s.innerHTML=`
      <div class="page-enter" id="admin-home">
        <div class="page-header" style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:var(--space-4);">
          <div>
            <h2>Admin Dashboard</h2>
            <p>System-wide overview — occupancy, complaints, and on-duty staff.</p>
          </div>
          <div class="hostel-filter-bar">
            <label class="hostel-filter-label">Hostel</label>
            <select class="hostel-filter-select" id="hostel-filter">
              <option value="">All Hostels</option>
              ${e.map(l=>`<option value="${l}" ${l===c?"selected":""}>${Be(l)}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Stat Cards -->
        <div class="card-grid">
          <div class="card card-accent-blue">
            <div class="card-label">Total Rooms</div>
            <div class="card-value">${i.totalRooms}</div>
            <div class="card-sub">${i.vacantRooms} vacant · ${v}% utilized</div>
          </div>
          <div class="card card-accent-amber">
            <div class="card-label">Open Complaints</div>
            <div class="card-value">${i.openComplaints}</div>
            <div class="card-sub">${i.inProgressComplaints} in progress</div>
          </div>
          <div class="card card-accent-green">
            <div class="card-label">Resolved</div>
            <div class="card-value">${i.resolvedComplaints}</div>
            <div class="card-sub">complaints closed</div>
          </div>
          <div class="card card-accent-purple">
            <div class="card-label">Students</div>
            <div class="card-value">${i.totalStudents}</div>
            <div class="card-sub">${i.pendingBookings} pending bookings</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-6);">
          <!-- Wardens & Guards -->
          <div class="form-section" style="max-width:none;">
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:var(--space-2); margin-bottom:var(--space-4);">
              <div class="form-section-title" style="margin-bottom:0;">On-Duty Wardens</div>
              ${d?`
                <a href="tel:${d}" style="
                  display:inline-flex; align-items:center; gap:6px;
                  background:color-mix(in srgb,var(--accent-green) 12%,transparent);
                  border:1px solid color-mix(in srgb,var(--accent-green) 30%,transparent);
                  color:var(--accent-green); font-size:var(--text-xs); font-weight:600;
                  letter-spacing:.04em; padding:4px 10px; border-radius:999px;
                  text-decoration:none; transition:background .15s;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Office: ${d}
                </a>`:""}
            </div>
            ${a.length===0?'<p class="empty-msg">No warden data available.</p>':a.map(l=>`
              <div class="contact-row" style="align-items:flex-start;">
                <div class="contact-avatar">${l.name[0]}</div>
                <div class="contact-info" style="flex:1;">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:2px;">
                    <div class="contact-name">${l.name}</div>
                    <a href="tel:${l.phone}" class="contact-phone" style="margin-left:auto;">${l.phone||""}</a>
                  </div>
                  <div class="contact-meta">${l.hostel} · ${l.email||""}</div>
                  <div style="display:flex; flex-wrap:wrap; gap:12px; font-size:11px; margin-top:8px; padding-top:8px; border-top:1px solid var(--border-subtle); color:var(--text-secondary);">
                    <span><span style="font-weight:600; color:var(--text-tertiary);">Last:</span> ${l.previous?l.previous.name:"Unknown"}</span>
                    <span style="color:var(--accent-green);"><span style="font-weight:600;">Current:</span> Active</span>
                    <span><span style="font-weight:600; color:var(--text-tertiary);">Next:</span> ${l.next?l.next.name:"Unknown"}</span>
                  </div>
                </div>
              </div>
            `).join("")}
            <div class="form-section-title" style="margin-top:var(--space-5);">On-Duty Guards</div>
            ${g.length===0?'<p class="empty-msg">No guard data.</p>':g.map(l=>`
              <div class="contact-row">
                <div class="contact-avatar guard">${l.name[0]}</div>
                <div class="contact-info">
                  <div class="contact-name">${l.name}</div>
                  <div class="contact-meta">${l.hostel} · ${l.shift} shift</div>
                </div>
                <a href="tel:${l.phone}" class="contact-phone">${l.phone||""}</a>
              </div>
            `).join("")}
          </div>

          <!-- Recent Complaints -->
          <div class="form-section" style="max-width:none;">
            <div class="form-section-title">Recent Complaints</div>
            ${p.length===0?'<p class="empty-msg">No recent complaints.</p>':`
            <div class="activity-list">
              ${p.map(l=>`
                  <div class="activity-item">
                    <div class="activity-dot" style="background:${l.status==="open"?"var(--accent-amber)":l.status==="in-progress"?"var(--accent-blue)":"var(--accent-green)"}"></div>
                    <div class="activity-content">
                      <div class="activity-text">
                        <strong>${l.student_name||l.student_id}</strong> · ${l.category}
                        <span class="badge badge-${l.status}">${l.status}</span>
                      </div>
                      <div class="activity-time">${l.date} · ${l.room_id||""}</div>
                    </div>
                  </div>
                `).join("")}
            </div>
            `}
            <a class="link-accent" href="#complaints" style="display:block; margin-top:var(--space-4); font-size:var(--text-sm);">Manage all complaints →</a>
          </div>
        </div>

        <!-- Occupancy Bar -->
        <div class="form-section" style="max-width:none; margin-top:var(--space-6);">
          <div class="form-section-title">Occupancy Overview</div>
          <div class="occ-overview">
            <div class="occ-track-outer">
              <div class="occ-track-inner" style="width:${v}%"></div>
            </div>
            <span style="font-size:var(--text-sm); color:var(--text-secondary);">${i.totalOccupied} / ${i.totalCapacity} beds · ${v}%</span>
          </div>
          <div class="card-grid" style="margin-top:var(--space-4); margin-bottom:0;">
            <div class="card" style="text-align:center;">
              <div class="card-label">Total Beds</div>
              <div class="card-value" style="font-size:var(--text-2xl);">${i.totalCapacity}</div>
            </div>
            <div class="card" style="text-align:center;">
              <div class="card-label">Occupied</div>
              <div class="card-value" style="font-size:var(--text-2xl);">${i.totalOccupied}</div>
            </div>
            <div class="card" style="text-align:center;">
              <div class="card-label">Vacant</div>
              <div class="card-value" style="font-size:var(--text-2xl); color:var(--accent-green);">${i.totalCapacity-i.totalOccupied}</div>
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("hostel-filter").addEventListener("change",l=>{te(l.target.value),n()}),s.querySelectorAll('a.link-accent[href^="#"]').forEach(l=>{l.addEventListener("click",y=>{y.preventDefault(),window.location.hash=l.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var l;return(l=document.getElementById("admin-home"))==null?void 0:l.classList.replace("page-enter","page-active")})}}function Be(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const V={Plumbing:"🔧",Electricity:"⚡",WiFi:"📶",Cleanliness:"🧹",Carpentry:"🔨",Other:"📋"},W=["open","in-progress","resolved"],Le=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"];async function Ie(t){async function o(){t.innerHTML='<div class="page-loading">Loading…</div>';try{const n=D(),m=n?`?hostel=${encodeURIComponent(n)}`:"",s=await f.get(`/complaints${m}`);Se(t,s,o)}catch(n){t.innerHTML=`<div class="page-error">Failed to load: ${n.message}</div>`}}j(()=>o()),await o()}function Se(t,o,n){let m=o,s="all",i="",p=null;t.innerHTML=`
    <div class="page-enter" id="admin-complaints-page">
      <div class="page-header">
        <h2>Complaints Management</h2>
        <p>Review, approve, and update status of all hostel complaints.</p>
      </div>

      <!-- Summary chips -->
      <div class="card-grid" style="margin-bottom: var(--space-6);">
        <div class="card" style="text-align:center; cursor:pointer;" data-quick="all">
          <div class="card-label">Total</div>
          <div class="card-value" style="font-size:var(--text-2xl);">${m.length}</div>
        </div>
        ${W.map(e=>{const c=m.filter(g=>g.status===e).length;return`<div class="card card-accent-${e==="open"?"amber":e==="in-progress"?"blue":"green"}" style="text-align:center; cursor:pointer;" data-quick="${e}">
            <div class="card-label">${e}</div>
            <div class="card-value" style="font-size:var(--text-2xl);">${c}</div>
          </div>`}).join("")}
      </div>

      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">All Complaints</div>
          <div style="display:flex; gap: var(--space-2); flex-wrap: wrap; align-items: center;">
            <select class="form-select" id="cat-filter" style="width: auto; padding: 4px 28px 4px 10px; font-size: var(--text-xs);">
              <option value="">All Categories</option>
              ${Le.map(e=>`<option value="${e}">${V[e]} ${e}</option>`).join("")}
            </select>
            <button class="filter-chip active" data-status="all">All</button>
            ${W.map(e=>`<button class="filter-chip" data-status="${e}">${e}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-body"></div>
      </div>
    </div>
  `;function r(){let e=m;return i&&(e=e.filter(c=>c.category===i)),s!=="all"&&(e=e.filter(c=>c.status===s)),e}function d(){const e=r(),c=document.getElementById("complaints-body");if(e.length===0){c.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No complaints match the current filter.</p>';return}c.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>#</th><th>Student</th><th>Room</th><th>Category</th>
            <th>Description</th><th>Date</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody id="cmp-tbody">
          ${e.map(a=>`
            <tr class="cmp-row${p===a.complaint_id?" expanded-row":""}" data-id="${a.complaint_id}">
              <td class="cell-mono">${a.complaint_id}</td>
              <td><div>${a.student_name||a.student_id}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${a.roll_no||""}</div></td>
              <td class="cell-mono">${a.room_id||"—"}</td>
              <td>${V[a.category]||""} ${a.category}</td>
              <td style="max-width:180px; overflow:hidden; text-overflow:ellipsis;" title="${a.description}">${a.description.slice(0,45)}${a.description.length>45?"…":""}</td>
              <td class="cell-mono">
                <div>${a.date}</div>
                ${a.resolved_date?`<div style="font-size:10px; color:var(--accent-green); margin-top:2px;">Res: ${a.resolved_date}</div>`:""}
              </td>
              <td><span class="badge badge-${a.status}">${a.status}</span></td>
              <td>
                ${a.status!=="resolved"?`
                  <div style="display:flex; gap:4px;">
                    ${a.status==="open"?`<button class="btn btn-sm btn-secondary" data-action="in-progress" data-id="${a.complaint_id}">Start</button>`:""}
                    <button class="btn btn-sm btn-primary" data-action="resolved" data-id="${a.complaint_id}">Resolve</button>
                  </div>
                `:'<span style="color:var(--text-tertiary); font-size:var(--text-xs);">Done</span>'}
              </td>
            </tr>
            ${a.photo_base64?`
              <tr class="photo-row" data-for="${a.complaint_id}" style="${p===a.complaint_id?"":"display:none"}">
                <td colspan="8" style="padding: var(--space-3) var(--space-6); background: var(--bg-elevated);">
                  <img src="${a.photo_base64}" alt="Complaint photo" style="max-width:280px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);" />
                  ${a.admin_note?`<p style="font-size:var(--text-xs); color:var(--text-secondary); margin-top: var(--space-2);">Note: ${a.admin_note}</p>`:""}
                </td>
              </tr>
            `:""}
          `).join("")}
        </tbody>
      </table>
    `,c.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",async()=>{const g=+a.dataset.id,v=a.dataset.action;a.disabled=!0;try{const l=await f.patch(`/complaints/${g}/status`,{status:v});m=m.map(y=>y.complaint_id===g?{...y,...l}:y),x(`Complaint #${g} → ${v}`,"success"),d()}catch(l){x(l.message,"error"),a.disabled=!1}})}),c.querySelectorAll(".cmp-row").forEach(a=>{a.addEventListener("click",()=>{const g=+a.dataset.id;p=p===g?null:g,d()})})}t.querySelectorAll("[data-status]").forEach(e=>{e.addEventListener("click",()=>{t.querySelectorAll("[data-status]").forEach(c=>c.classList.remove("active")),e.classList.add("active"),s=e.dataset.status,d()})}),t.querySelectorAll("[data-quick]").forEach(e=>{e.addEventListener("click",()=>{var c;s=e.dataset.quick,t.querySelectorAll("[data-status]").forEach(a=>a.classList.remove("active")),(c=t.querySelector(`[data-status="${s}"]`))==null||c.classList.add("active"),d()})}),document.getElementById("cat-filter").addEventListener("change",e=>{i=e.target.value,d()}),d(),requestAnimationFrame(()=>{var e;return(e=document.getElementById("admin-complaints-page"))==null?void 0:e.classList.replace("page-enter","page-active")})}async function Ae(t){async function o(){t.innerHTML='<div class="page-loading">Loading…</div>';try{const[n,m]=await Promise.all([f.get("/rooms"),f.get("/rooms/booking-requests")]);Me(t,n,m,o)}catch(n){t.innerHTML=`<div class="page-error">Failed to load: ${n.message}</div>`}}j(()=>o()),await o()}function Me(t,o,n,m){let s=n,i="rooms";const p=[...new Set(o.map(a=>a.hostel))].sort();let r=D();t.innerHTML=`
    <div class="page-enter" id="admin-rooms-page">
      <div class="page-header" style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:var(--space-4);">
        <div>
          <h2>Room Management</h2>
          <p>Room occupancy, student allocations, and booking requests.</p>
        </div>
        <div class="hostel-filter-bar">
          <label class="hostel-filter-label">Hostel</label>
          <select class="hostel-filter-select" id="room-hostel-filter">
            <option value="">All Hostels</option>
            ${p.map(a=>`<option value="${a}" ${a===r?"selected":""}>${a}</option>`).join("")}
          </select>
        </div>
      </div>

      <!-- Tabs -->
      <div class="cat-tabs" style="margin-bottom:var(--space-6);" id="room-tabs">
        <button class="cat-tab active" data-tab="rooms">Room Listing</button>
        <button class="cat-tab" data-tab="requests">
          Booking Requests
          ${s.filter(a=>a.status==="pending").length>0?`<span class="badge badge-open" style="margin-left:4px;">${s.filter(a=>a.status==="pending").length}</span>`:""}
        </button>
        <button class="cat-tab" data-tab="allocations">Active Allocations</button>
      </div>

      <!-- Rooms Panel -->
      <div id="panel-rooms"><div id="rooms-body"></div></div>

      <!-- Requests Panel -->
      <div id="panel-requests" style="display:none;"><div id="requests-body"></div></div>

      <!-- Allocations Panel -->
      <div id="panel-allocations" style="display:none;"><div id="allocations-body"></div></div>
    </div>
  `;function d(){const a=r?o.filter(y=>y.hostel===r):o,g=a.filter(y=>y.current_occupancy===0).length,v=a.filter(y=>y.current_occupancy>0&&y.current_occupancy<y.capacity).length,l=a.filter(y=>y.current_occupancy>=y.capacity).length;document.getElementById("rooms-body").innerHTML=`
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:var(--space-4); margin-bottom:var(--space-6);">
        <div class="card" style="text-align:center;">
          <div class="card-label">Vacant</div>
          <div class="card-value" style="color:var(--accent-green);">${g}</div>
        </div>
        <div class="card" style="text-align:center;">
          <div class="card-label">Partial</div>
          <div class="card-value" style="color:var(--accent-amber);">${v}</div>
        </div>
        <div class="card" style="text-align:center;">
          <div class="card-label">Full</div>
          <div class="card-value" style="color:var(--accent-red);">${l}</div>
        </div>
      </div>
      <div class="table-container">
        <table>
          <thead>
            <tr><th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th><th>Occupancy</th><th>Students</th></tr>
          </thead>
          <tbody>
            ${a.map(y=>{const u=y.capacity>0?y.current_occupancy/y.capacity:0,h=u===0?"vacant":u<1?"partial":"full",$=h==="vacant"?"var(--accent-green)":h==="partial"?"var(--accent-amber)":"var(--accent-red)",b=(y.students||[]).map(k=>`<span style="font-size:var(--text-xs); color:var(--text-secondary); display:block;">${k.name} (Yr ${k.year})</span>`).join("");return`
                <tr>
                  <td class="cell-mono">${y.room_id}</td>
                  <td>${y.hostel}</td>
                  <td>${y.floor}</td>
                  <td>${y.type}</td>
                  <td>
                    <div class="occupancy-bar">
                      <div class="occupancy-track">
                        <div class="occupancy-fill" style="width:${u*100}%; background:${$};"></div>
                      </div>
                      <span style="font-size:var(--text-xs); font-family:var(--font-mono); color:var(--text-secondary);">${y.current_occupancy}/${y.capacity}</span>
                    </div>
                  </td>
                  <td>${b||'<span style="color:var(--text-tertiary); font-size:var(--text-xs);">Vacant</span>'}</td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    `}function e(){const a=r?s.filter(v=>v.room_hostel===r):s,g=document.getElementById("requests-body");if(a.length===0){g.innerHTML=`<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No booking requests${r?" for this hostel":""}.</p>`;return}g.innerHTML=`
      <div class="table-container">
        <table>
          <thead>
            <tr><th>Student</th><th>Year</th><th>Room</th><th>Hostel</th><th>Type</th><th>Floor</th><th>Occ.</th><th>Preferences</th><th>Status</th><th>Date</th><th>Action</th></tr>
          </thead>
          <tbody>
            ${a.map(v=>{var l;return`
              <tr>
                <td>
                  <div style="font-weight:500;">${v.student_name}</div>
                  <div style="font-size:var(--text-xs); color:var(--text-tertiary);">${v.roll_no}</div>
                </td>
                <td>${v.year}</td>
                <td class="cell-mono">${v.room_id}</td>
                <td style="font-size:var(--text-xs);">${v.room_hostel||v.hostel}</td>
                <td>${v.type}</td>
                <td>${v.floor}</td>
                <td style="font-family:var(--font-mono); font-size:var(--text-xs);">${v.current_occupancy}/${v.capacity}</td>
                <td style="max-width:130px; font-size:var(--text-xs); color:var(--text-secondary);">${v.preferences||"—"}</td>
                <td><span class="badge badge-${v.status}">${v.status}</span></td>
                <td class="cell-mono">${(l=v.created_at)==null?void 0:l.slice(0,10)}</td>
                <td>
                  ${v.status==="pending"?`
                    <div style="display:flex; gap:4px;">
                      <button class="btn btn-sm btn-primary" data-req="${v.request_id}" data-action="approved">Approve</button>
                      <button class="btn btn-sm btn-secondary" data-req="${v.request_id}" data-action="rejected" style="color:var(--accent-red);">Reject</button>
                    </div>
                  `:`<span style="color:var(--text-tertiary); font-size:var(--text-xs);">${v.admin_note||v.status}</span>`}
                </td>
              </tr>
            `}).join("")}
          </tbody>
        </table>
      </div>
    `,g.querySelectorAll("[data-req]").forEach(v=>{v.addEventListener("click",async()=>{const l=v.dataset.req,y=v.dataset.action;v.disabled=!0;try{const u=await f.patch(`/rooms/booking-requests/${l}`,{status:y});s=s.map(h=>h.request_id===+l?{...h,...u}:h),x(`Request ${y}.`,"success"),e(),d()}catch(u){x(u.message,"error"),v.disabled=!1}})})}async function c(){const a=document.getElementById("allocations-body");a.innerHTML='<div class="page-loading">Loading allocations…</div>';try{const g=await f.get("/rooms/allocations"),v=r?g.filter(l=>l.hostel===r):g;if(v.length===0){a.innerHTML=`<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No active allocations${r?" for this hostel":""}.</p>`;return}a.innerHTML=`
        <div class="table-container">
          <table>
            <thead>
              <tr><th>ID</th><th>Student</th><th>Room</th><th>Hostel</th><th>Type</th><th>Floor</th><th>From</th><th>To</th><th>Status</th></tr>
            </thead>
            <tbody>
              ${v.map(l=>`
                <tr>
                  <td class="cell-mono">${l.allocation_id}</td>
                  <td>
                    <div style="font-weight:500;">${l.student_name}</div>
                    <div style="font-size:var(--text-xs); color:var(--text-tertiary);">${l.roll_no}</div>
                  </td>
                  <td class="cell-mono">${l.room_id}</td>
                  <td style="font-size:var(--text-xs);">${l.hostel}</td>
                  <td>${l.type}</td>
                  <td>${l.floor}</td>
                  <td class="cell-mono">${l.from_date}</td>
                  <td class="cell-mono">${l.to_date}</td>
                  <td><span class="badge badge-${l.status==="active"?"in-progress":"resolved"}">${l.status}</span></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `}catch(g){a.innerHTML=`<p style="padding:var(--space-8); text-align:center; color:var(--accent-red);">Failed: ${g.message}</p>`}}document.getElementById("room-hostel-filter").addEventListener("change",a=>{r=a.target.value,te(r),d(),e(),i==="allocations"&&c()}),t.querySelectorAll("[data-tab]").forEach(a=>{a.addEventListener("click",()=>{t.querySelectorAll("[data-tab]").forEach(g=>g.classList.remove("active")),a.classList.add("active"),i=a.dataset.tab,document.getElementById("panel-rooms").style.display=i==="rooms"?"":"none",document.getElementById("panel-requests").style.display=i==="requests"?"":"none",document.getElementById("panel-allocations").style.display=i==="allocations"?"":"none",i==="allocations"&&c()})}),d(),e(),requestAnimationFrame(()=>{var a;return(a=document.getElementById("admin-rooms-page"))==null?void 0:a.classList.replace("page-enter","page-active")})}const J=["Plumber","Electrician","WiFi","Authority","Other"],P={Plumber:"🔧",Electrician:"⚡",WiFi:"📶",Authority:"🏛️",Other:"📋"};async function Te(t){t.innerHTML='<div class="page-loading">Loading…</div>';try{const o=await f.get("/resources");_e(t,o)}catch(o){t.innerHTML=`<div class="page-error">Failed to load: ${o.message}</div>`}}function _e(t,o){let n=o,m="",s=null;t.innerHTML=`
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
                ${J.map(r=>`<option value="${r}">${P[r]} ${r}</option>`).join("")}
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
            ${J.map(r=>`<button class="filter-chip" data-cat="${r}">${P[r]} ${r}</button>`).join("")}
          </div>
        </div>
        <div id="resources-body"></div>
      </div>
    </div>
  `;function i(){const r=m?n.filter(c=>c.category===m):n,d=document.getElementById("resources-body");if(r.length===0){d.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No contacts in this category.</p>';return}const e={};r.forEach(c=>{e[c.category]||(e[c.category]=[]),e[c.category].push(c)}),d.innerHTML=Object.entries(e).map(([c,a])=>`
      <div style="padding: var(--space-4) var(--space-6);">
        <div style="font-size: var(--text-xs); font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: var(--text-tertiary); margin-bottom: var(--space-3);">
          ${P[c]||""} ${c}
        </div>
        ${a.map(g=>`
          <div class="contact-row" style="margin-bottom: var(--space-2);">
            <div class="contact-avatar">${g.name[0].toUpperCase()}</div>
            <div class="contact-info" style="flex:1;">
              <div class="contact-name">${g.name}</div>
              <div class="contact-meta">
                ${g.phone?`📞 <a href="tel:${g.phone}" style="color:inherit;">${g.phone}</a>`:""}
                ${g.email?` · 📧 <a href="mailto:${g.email}" style="color:inherit;">${g.email}</a>`:""}
              </div>
              ${g.notes?`<div style="font-size:var(--text-xs); color:var(--text-tertiary); margin-top:2px;">${g.notes}</div>`:""}
            </div>
            <div style="display:flex; gap:4px; flex-shrink:0;">
              <button class="btn btn-sm btn-secondary" data-edit="${g.resource_id}">Edit</button>
              <button class="btn btn-sm btn-secondary" data-delete="${g.resource_id}" style="color:var(--accent-red);">Del</button>
            </div>
          </div>
        `).join("")}
        <hr style="border:none; border-top: 1px solid var(--border-subtle); margin: var(--space-3) 0;" />
      </div>
    `).join(""),d.querySelectorAll("[data-edit]").forEach(c=>{c.addEventListener("click",()=>{const a=n.find(g=>g.resource_id===+c.dataset.edit);a&&(s=a.resource_id,document.getElementById("res-cat").value=a.category,document.getElementById("res-name").value=a.name,document.getElementById("res-phone").value=a.phone||"",document.getElementById("res-email").value=a.email||"",document.getElementById("res-notes").value=a.notes||"",document.getElementById("resource-form-title").textContent="Edit Contact",document.getElementById("btn-res-submit").textContent="Save Changes",document.getElementById("btn-res-cancel").style.display="",document.getElementById("resource-form").scrollIntoView({behavior:"smooth"}))})}),d.querySelectorAll("[data-delete]").forEach(c=>{c.addEventListener("click",async()=>{if(confirm("Delete this contact?")){c.disabled=!0;try{await f.delete(`/resources/${c.dataset.delete}`),n=n.filter(a=>a.resource_id!==+c.dataset.delete),x("Contact deleted.","success"),i()}catch(a){x(a.message,"error"),c.disabled=!1}}})})}t.querySelectorAll("[data-cat]").forEach(r=>{r.addEventListener("click",()=>{t.querySelectorAll("[data-cat]").forEach(d=>d.classList.remove("active")),r.classList.add("active"),m=r.dataset.cat,i()})}),document.getElementById("btn-res-cancel").addEventListener("click",()=>{s=null,document.getElementById("resource-form").reset(),document.getElementById("resource-form-title").textContent="Add New Contact",document.getElementById("btn-res-submit").textContent="Add Contact",document.getElementById("btn-res-cancel").style.display="none"});const p=document.getElementById("resource-form");p.addEventListener("submit",async r=>{r.preventDefault(),t.querySelectorAll(".form-error").forEach(v=>v.classList.remove("visible"));let d=!0;const e=document.getElementById("res-cat").value,c=document.getElementById("res-name").value.trim();if(e||(document.getElementById("err-res-cat").classList.add("visible"),d=!1),c||(document.getElementById("err-res-name").classList.add("visible"),d=!1),!d)return;const a={category:e,name:c,phone:document.getElementById("res-phone").value.trim()||null,email:document.getElementById("res-email").value.trim()||null,notes:document.getElementById("res-notes").value.trim()||null},g=document.getElementById("btn-res-submit");g.disabled=!0;try{if(s){const v=await f.put(`/resources/${s}`,a);n=n.map(l=>l.resource_id===s?v:l),x("Contact updated.","success"),document.getElementById("btn-res-cancel").click()}else n=[await f.post("/resources",a),...n],x("Contact added.","success"),p.reset();i()}catch(v){x(v.message,"error")}finally{g.disabled=!1}}),i(),requestAnimationFrame(()=>{var r;return(r=document.getElementById("resources-page"))==null?void 0:r.classList.replace("page-enter","page-active")})}const Pe={home:pe,complaints:ue,booking:Z,forum:ee,resources:Ee},qe={home:Ce,complaints:Ie,rooms:Ae,forum:ee,resources:Te};let C="home",R=null;function H(){return F()==="admin"?qe:Pe}function A(t){const o=H();o[t]||(t="home"),C=t,window.location.hash=t;const n=document.getElementById("sidebar"),m=document.getElementById("main-content");ie(n,C,A),o[t](m,()=>A(C)),R&&R.close()}function Y(){document.body.innerHTML=`
    <div id="app">
      <aside id="sidebar" class="sidebar"></aside>
      <main id="main-content" class="main"></main>
    </div>
  `}function Re(){if(!oe()){ce(()=>{Y(),K()});return}Y(),K()}function K(){R=ne();const t=window.location.hash.replace("#","");C=H()[t]?t:"home",A(C),window.addEventListener("hashchange",()=>{const n=window.location.hash.replace("#","");H()[n]&&n!==C&&A(n)})}(function(){const t=localStorage.getItem("ahcms_theme")||"light";document.documentElement.setAttribute("data-theme",t)})();Re();
