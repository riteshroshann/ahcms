(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))p(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&p(m)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const N="ahcms_token",O="ahcms_user";(function(){const a=localStorage.getItem("cw_hostel_token"),s=localStorage.getItem("cw_hostel_user");a&&(localStorage.setItem(N,a),localStorage.removeItem("cw_hostel_token")),s&&(localStorage.setItem(O,s),localStorage.removeItem("cw_hostel_user"))})();function Z(t,a){localStorage.setItem(N,t),localStorage.setItem(O,JSON.stringify(a))}function de(){return localStorage.getItem(N)}function J(){try{return JSON.parse(localStorage.getItem(O))}catch{return null}}function K(){var t;return((t=J())==null?void 0:t.role)||null}function ue(){const t=de();if(!t)return!1;if(t.startsWith("mock_token"))return!0;try{return JSON.parse(atob(t.split(".")[1])).exp*1e3>Date.now()}catch{return!1}}function ce(){localStorage.removeItem(N),localStorage.removeItem(O)}const L={home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',complaints:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="15" r="0.5" fill="currentColor"/></svg>',booking:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',forum:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-1"/><path d="M15 3H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l4-4h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/></svg>',rooms:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',resources:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',theme:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'},ge=[{id:"home",label:"Home",icon:L.home},{id:"complaints",label:"Complaint",icon:L.complaints},{id:"booking",label:"Room Booking",icon:L.booking},{id:"forum",label:"Community Forum",icon:L.forum},{id:"resources",label:"Resources",icon:L.resources}],ye=[{id:"home",label:"Home",icon:L.home},{id:"complaints",label:"Complaints",icon:L.complaints},{id:"rooms",label:"Room Details",icon:L.rooms},{id:"forum",label:"Community Forum",icon:L.forum},{id:"resources",label:"Resources",icon:L.resources}];function fe(t,a,s){var l,n;const p=K(),i=J(),o=p==="admin"?ye:ge,m=p==="admin"?"Admin Panel":"Student Portal";t.innerHTML=`
    <div class="sidebar-brand">
      <h1>AHCMS</h1>
      <span>${m}</span>
    </div>

    <div class="sidebar-user">
      <div class="sidebar-user-avatar">${((i==null?void 0:i.name)||"U")[0].toUpperCase()}</div>
      <div class="sidebar-user-info">
        <div class="sidebar-user-name">${(i==null?void 0:i.name)||"User"}</div>
        <div class="sidebar-user-role">${p==="admin"?"Administrator":(i==null?void 0:i.roll_no)||"Student"}</div>
      </div>
    </div>

    <div class="sidebar-section">
      ${o.map(e=>`
        <a class="nav-item${e.id===a?" active":""}"
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
        ${L.theme}
        Toggle Theme
      </button>
      <button class="nav-item logout-btn" id="nav-logout">
        ${L.logout}
        Sign Out
      </button>
      <p>AHCMS · Amrita Delhi NCR</p>
    </div>
  `,t.querySelectorAll(".nav-item[data-page]").forEach(e=>{e.addEventListener("click",()=>s(e.dataset.page)),e.addEventListener("keydown",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),e.click())})}),(l=document.getElementById("nav-logout"))==null||l.addEventListener("click",()=>{ce(),window.location.reload()}),(n=document.getElementById("nav-theme"))==null||n.addEventListener("click",()=>{const c=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",c),localStorage.setItem("ahcms_theme",c)})}function be(){const t=document.createElement("button");t.className="sidebar-toggle",t.id="sidebar-toggle",t.innerHTML=L.menu,t.setAttribute("aria-label","Toggle navigation");const a=document.createElement("div");a.className="sidebar-overlay",a.id="sidebar-overlay",document.body.appendChild(t),document.body.appendChild(a);const s=document.getElementById("sidebar");function p(){s.classList.add("open"),a.classList.add("show"),t.innerHTML=L.close}function i(){s.classList.remove("open"),a.classList.remove("show"),t.innerHTML=L.menu}return t.addEventListener("click",()=>s.classList.contains("open")?i():p()),a.addEventListener("click",i),{close:i}}const he="/api";async function R(t,a,s){const p=de(),i={"Content-Type":"application/json"};p&&(i.Authorization=`Bearer ${p}`);const o=new AbortController,m=setTimeout(()=>o.abort(),1e4);try{const l=await fetch(`${he}${a}`,{method:t,headers:i,body:s!==void 0?JSON.stringify(s):void 0,signal:o.signal});if(l.status===401){ce(),window.location.reload();return}const n=await l.json().catch(()=>({}));if(!l.ok)throw new Error(n.error||`Request failed (${l.status})`);return n}catch(l){throw l.name==="AbortError"?new Error("Request timed out — is the server running?"):l}finally{clearTimeout(m)}}const $={get:t=>R("GET",t),post:(t,a)=>R("POST",t,a),patch:(t,a)=>R("PATCH",t,a),put:(t,a)=>R("PUT",t,a),delete:t=>R("DELETE",t)};let H=null;function xe(){H||(H=document.createElement("div"),H.className="toast-container",document.body.appendChild(H))}function C(t,a="info",s=3500){xe();const p=document.createElement("div");p.className=`toast toast-${a}`,p.textContent=t,H.appendChild(p),requestAnimationFrame(()=>{requestAnimationFrame(()=>{p.classList.add("show")})}),setTimeout(()=>{p.classList.remove("show"),setTimeout(()=>p.remove(),300)},s)}function $e(t){var p;document.body.innerHTML=`
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
            <input type="text" id="s-roll" class="login-input" placeholder="e.g. DL.MBBS.U4AID24120" autocomplete="username" />
          </div>
          <div class="login-form-group">
            <label for="s-pass">Password</label>
            <input type="password" id="s-pass" class="login-input" placeholder="Enter your password" autocomplete="current-password" />
          </div>
          <p class="login-hint">Demo credentials &mdash; Roll: <code>DL.MBBS.U4AID24120</code> Pass: <code>Student@123</code></p>
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
          <h2>Amrita Hostel,<br>Delhi NCR.</h2>
          <p>One portal for room allocation, grievance tracking, and campus community.</p>
          <div class="login-art-features">
            <div class="login-art-feature">Room booking & floor plans</div>
            <div class="login-art-feature">Complaint tracking & escalation</div>
            <div class="login-art-feature">Community forum</div>
            <div class="login-art-feature">Warden & admin resources</div>
          </div>
        </div>
      </div>
    </div>
  `,(p=document.getElementById("login-theme"))==null||p.addEventListener("click",()=>{const o=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",o),localStorage.setItem("ahcms_theme",o)});let a="student";document.querySelectorAll(".login-tab").forEach(i=>{i.addEventListener("click",()=>{a=i.dataset.tab,document.querySelectorAll(".login-tab").forEach(o=>o.classList.remove("active")),i.classList.add("active"),document.getElementById("form-student").classList.toggle("hidden",a!=="student"),document.getElementById("form-admin").classList.toggle("hidden",a!=="admin"),document.getElementById("form-register").classList.add("hidden")})}),document.getElementById("btn-show-register").addEventListener("click",()=>{document.getElementById("form-admin").classList.add("hidden"),document.getElementById("form-register").classList.remove("hidden")}),document.getElementById("btn-back-login").addEventListener("click",()=>{document.getElementById("form-register").classList.add("hidden"),document.getElementById("form-admin").classList.remove("hidden")});function s(i,o){const m=document.getElementById(i);m.disabled=o,m.textContent=o?"Signing in…":"Sign In"}document.getElementById("form-student").addEventListener("submit",async i=>{i.preventDefault();const o=document.getElementById("s-roll").value.trim(),m=document.getElementById("s-pass").value,l=document.getElementById("err-student");if(l.textContent="",!o||!m){l.textContent="All fields required.";return}s("btn-student-login",!0),setTimeout(()=>{Z("mock_token_123",{name:"Demo Student",roll_no:o,role:"student"}),t(),s("btn-student-login",!1)},500)}),document.getElementById("form-admin").addEventListener("submit",async i=>{i.preventDefault();const o=document.getElementById("a-email").value.trim(),m=document.getElementById("a-pass").value,l=document.getElementById("err-admin");if(l.textContent="",!o||!m){l.textContent="All fields required.";return}s("btn-admin-login",!0),setTimeout(()=>{Z("mock_token_admin_123",{name:"Admin User",email:o,role:"admin"}),t(),s("btn-admin-login",!1)},500)}),document.getElementById("form-register").addEventListener("submit",async i=>{i.preventDefault();const o=document.getElementById("r-name").value.trim(),m=document.getElementById("r-email").value.trim(),l=document.getElementById("r-pass").value,n=document.getElementById("err-register");if(n.textContent="",!o||!m||!l){n.textContent="All fields required.";return}if(l.length<8){n.textContent="Password must be at least 8 characters.";return}const e=document.getElementById("btn-register");e.disabled=!0,e.textContent="Creating…";try{await $.post("/auth/admin/register",{name:o,email:m,password:l}),C("Account created! Please sign in.","success"),document.getElementById("btn-back-login").click(),document.getElementById("a-email").value=m}catch(c){n.textContent=c.message}finally{e.disabled=!1,e.textContent="Create Account"}})}async function we(t){t.innerHTML='<div class="page-loading">Loading…</div>';try{const{student:a,allocation:s,complaints:p,wardens:i,wardenOfficePhone:o}=await $.get("/dashboard/student");ke(t,a,s,p,i,o)}catch(a){t.innerHTML=`<div class="page-error">Failed to load dashboard: ${a.message}</div>`}}function ke(t,a,s,p,i,o){var n;const m=i.filter(e=>e.role==="Warden"),l=i.filter(e=>e.role==="Guard");t.innerHTML=`
    <div class="page-enter" id="student-home">
      <div class="page-header">
        <h2>Welcome, ${((n=a==null?void 0:a.name)==null?void 0:n.split(" ")[0])||"Student"}</h2>
        <p>${(a==null?void 0:a.course)||""} · ${(a==null?void 0:a.hostel)||""} · Year ${(a==null?void 0:a.year)||""}</p>
      </div>

      <!-- Student Info Card -->
      <div class="form-section" style="max-width: none; margin-bottom: var(--space-10);">
        <div class="form-section-title">Your Profile</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-4);">
          ${[["Roll No",a==null?void 0:a.roll_no],["Course",a==null?void 0:a.course],["Admission",a==null?void 0:a.adm_year],["Passing Year",a==null?void 0:a.pass_year],["Gender",(a==null?void 0:a.gender)==="M"?"Male":(a==null?void 0:a.gender)==="F"?"Female":a==null?void 0:a.gender],["Address",(a==null?void 0:a.address)||"—"]].map(([e,c])=>`
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
          ${s?`<div class="card-value">${s.room_id}</div>
               <div class="card-sub">${s.hostel} · Floor ${s.floor} · ${s.type} · ${s.status}</div>
               <div style="margin-top: var(--space-2); font-size: var(--text-xs); color: var(--text-tertiary);">
                 ${s.from_date} → ${s.to_date}
               </div>`:`<div style="color: var(--text-tertiary); font-size: var(--text-sm); padding: var(--space-2) 0;">
                 No active room allocation. <a class="link-accent" href="#booking">Book a room →</a>
               </div>`}
        </div>

        <div class="card card-accent-amber">
          <div class="card-label">Open Complaints</div>
          <div class="card-value">${p.filter(e=>e.status==="open").length}</div>
          <div class="card-sub">${p.filter(e=>e.status==="in-progress").length} in progress</div>
        </div>

        <div class="card card-accent-green">
          <div class="card-label">Resolved</div>
          <div class="card-value">${p.filter(e=>e.status==="resolved").length}</div>
          <div class="card-sub">of ${p.length} total</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6);">
        <!-- On-Duty Wardens -->
        <div class="form-section" style="max-width: none;">
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:var(--space-2); margin-bottom:var(--space-4);">
            <div class="form-section-title" style="margin-bottom:0;">On-Duty Wardens</div>
            ${o?`
              <a href="tel:${o}" style="
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
                Office: ${o}
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
          ${l.length===0?'<p class="empty-msg">No guard data.</p>':l.map(e=>`
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
          ${p.length===0?'<p class="empty-msg">No complaints filed yet.</p>':`<div class="activity-list">
                ${p.slice(0,5).map(e=>`
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
  `,t.querySelectorAll('a.link-accent[href^="#"]').forEach(e=>{e.addEventListener("click",c=>{c.preventDefault(),window.location.hash=e.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var e;return(e=document.getElementById("student-home"))==null?void 0:e.classList.replace("page-enter","page-active")})}const ee=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"],T=t=>`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;opacity:.6;vertical-align:middle;">${t}</svg>`,Ee={Plumbing:T('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),Electricity:T('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'),WiFi:T('<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>'),Cleanliness:T('<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'),Carpentry:T('<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'),Other:T('<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>')},Ce=["open","in-progress","resolved"];async function Be(t){t.innerHTML='<div class="page-loading">Loading…</div>';let a=[];try{a=await $.get("/complaints")}catch(s){console.warn("Backend unavailable, using mock data for UI testing:",s),a=[{complaint_id:104,category:"Plumbing",description:"Leaking tap in bathroom on 2nd floor.",date:"2026-05-04",status:"open"},{complaint_id:103,category:"WiFi",description:"No internet connection in room 204 since morning.",date:"2026-05-03",status:"in-progress"},{complaint_id:102,category:"Cleanliness",description:"Corridor dustbins are overflowing.",date:"2026-05-01",status:"resolved",admin_note:"Cleaned by staff."},{complaint_id:101,category:"Electricity",description:"Fan regulator is broken.",date:"2026-04-28",status:"resolved",admin_note:"Replaced regulator."}]}_e(t,a)}function _e(t,a){let s=a,p="all",i="";t.innerHTML=`
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
                ${ee.map(e=>`<option value="${e}">${e}</option>`).join("")}
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
          ${ee.map(e=>`<option value="${e}">${e}</option>`).join("")}
        </select>
      </div>

      <!-- My Complaints Table -->
      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">My Complaints</div>
          <div style="display:flex; gap: var(--space-2); flex-wrap: wrap;">
            <button class="filter-chip active" data-status="all">All</button>
            ${Ce.map(e=>`<button class="filter-chip" data-status="${e}">${e}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-list"></div>
      </div>
    </div>
  `;function o(){let e=s;i&&(e=e.filter(r=>r.category===i)),p!=="all"&&(e=e.filter(r=>r.status===p));const c=document.getElementById("complaints-list");if(e.length===0){c.innerHTML='<p style="padding: var(--space-8); text-align:center; color: var(--text-tertiary);">No complaints found.</p>';return}c.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>#</th><th>Category</th><th>Description</th><th>Date</th><th>Status</th><th>Note</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(r=>`
            <tr>
              <td class="cell-mono">${r.complaint_id}</td>
              <td><span style="display:inline-flex;align-items:center;gap:5px;">${Ee[r.category]||""} ${r.category}</span></td>
              <td style="max-width:220px; overflow:hidden; text-overflow:ellipsis;" title="${r.description}">${r.description.slice(0,50)}${r.description.length>50?"…":""}</td>
              <td class="cell-mono">${r.date}</td>
              <td><span class="badge badge-${r.status}">${r.status}</span></td>
              <td style="color: var(--text-tertiary); font-size: var(--text-xs);">${r.admin_note||"—"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `}document.getElementById("cat-filter-select").addEventListener("change",e=>{i=e.target.value,o()}),t.querySelectorAll("[data-status]").forEach(e=>{e.addEventListener("click",()=>{t.querySelectorAll("[data-status]").forEach(c=>c.classList.remove("active")),e.classList.add("active"),p=e.dataset.status,o()})});const m=document.getElementById("cmp-category"),l=document.getElementById("cmp-other-group");m.addEventListener("change",e=>{e.target.value==="Other"?l.style.display="":(l.style.display="none",document.getElementById("cmp-other-type").value="",document.getElementById("err-cmp-other").classList.remove("visible"))});const n=document.getElementById("complaint-form");n.addEventListener("submit",async e=>{e.preventDefault();let c=!0;t.querySelectorAll(".form-error").forEach(x=>x.classList.remove("visible"));const r=document.getElementById("cmp-category").value,b=document.getElementById("cmp-other-type").value.trim(),E=document.getElementById("cmp-desc").value.trim(),u=document.getElementById("cmp-photo").files[0];if(r||(document.getElementById("err-cmp-cat").classList.add("visible"),c=!1),r==="Other"&&!b&&(document.getElementById("err-cmp-other").classList.add("visible"),c=!1),E||(document.getElementById("err-cmp-desc").classList.add("visible"),c=!1),!c){C("Fill in all required fields.","error");return}const y=document.getElementById("cmp-submit");y.disabled=!0,y.textContent="Submitting…";try{let x=null;u&&(x=await new Promise((d,w)=>{const v=new FileReader;v.onload=()=>d(v.result),v.onerror=w,v.readAsDataURL(u)}));const f=r==="Other"&&b?`[Other: ${b}] ${E}`:E,B=await $.post("/complaints",{category:r,description:f,photo_base64:x});s=[B,...s],C(`Complaint #${B.complaint_id} submitted.`,"success"),n.reset(),o()}catch(x){C(x.message,"error")}finally{y.disabled=!1,y.textContent="Submit Complaint"}}),n.addEventListener("reset",()=>{t.querySelectorAll(".form-error").forEach(e=>e.classList.remove("visible")),document.getElementById("cmp-other-group").style.display="none"}),o(),requestAnimationFrame(()=>{var e;return(e=document.getElementById("complaints-page"))==null?void 0:e.classList.replace("page-enter","page-active")})}async function G(t){t.innerHTML='<div class="page-loading">Loading rooms…</div>';try{const[a,{allocation:s},p,i]=await Promise.all([$.get("/rooms"),$.get("/rooms/my-allocation"),$.get("/rooms/booking-requests"),$.get("/rooms/change-requests")]);Se(t,a,s,p,i)}catch(a){t.innerHTML=`<div class="page-error">Failed to load: ${a.message}</div>`}}function Se(t,a,s,p,i){var u,y,x,f,B,d,w;const o=J(),m=a.filter(v=>v.hostel===((o==null?void 0:o.hostel)||"")),l=[...new Set(m.map(v=>v.floor))].sort((v,g)=>v-g);let n=l[0]||1,e=null;const c=p.find(v=>v.status==="pending"),r=i.find(v=>v.status==="pending");if(t.innerHTML=`
    <style>
      .alloc-card {
        background: var(--bg-elevated);
        border: 1px solid color-mix(in srgb, var(--accent-green) 30%, transparent);
        border-radius: var(--radius-lg);
        padding: var(--space-6);
        margin-bottom: var(--space-6);
      }
      .alloc-room-num {
        font-size: 48px; font-weight: 800; color: var(--accent-green);
        letter-spacing: -2px; line-height: 1;
      }
      .alloc-meta { font-size: var(--text-sm); color: var(--text-secondary); margin-top: 4px; }
      .change-req-form { margin-top: var(--space-8); padding-top: var(--space-8); border-top: 1px solid var(--border-subtle); }
    </style>

    <div class="page-enter" id="booking-page">
      <div class="page-header">
        <h2>My Room</h2>
        <p>View your room assignment, request a room change, or apply for initial allocation.</p>
      </div>

      <!-- ① Allocated: room card + change request -->
      ${s?`
        <div class="alloc-card">
          <div style="display:flex; align-items:flex-start; justify-content:space-between; flex-wrap:wrap; gap:var(--space-4);">
            <div>
              <div style="font-size:var(--text-xs); font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:var(--text-tertiary); margin-bottom:var(--space-2);">Your Room</div>
              <div class="alloc-room-num">${s.room_id}</div>
              <div class="alloc-meta">${s.hostel}</div>
              <div class="alloc-meta">Floor ${s.floor} · ${s.type} · ${s.current_occupancy}/${s.capacity} occupied</div>
              <div class="alloc-meta" style="margin-top:var(--space-2);">Since ${s.from_date} · Until ${s.to_date}</div>
            </div>
            <div style="display:flex; flex-direction:column; gap:var(--space-2); align-items:flex-end;">
              <span class="badge badge-in-progress" style="font-size:13px; padding:6px 14px;">Active</span>
              ${r?'<div style="font-size:var(--text-xs); color:var(--accent-amber); margin-top:var(--space-2);">Room change pending review</div>':'<button class="btn btn-secondary" id="btn-show-change" style="margin-top:var(--space-2);">Request Room Change</button>'}
            </div>
          </div>

          <!-- Room change request form (hidden until button click) -->
                <div id="change-req-section" class="change-req-form" style="display:${r?"block":"none"}">
            ${r?`
              <div style="font-size:var(--text-sm); font-weight:600; color:var(--accent-amber); margin-bottom:var(--space-3);">Pending Room Change Request</div>
              <div style="font-size:var(--text-sm); color:var(--text-secondary);">
                You have requested to move to <strong>${r.to_room_id}</strong> (${r.to_hostel}, Floor ${r.to_floor}).
                Submitted on ${(u=r.created_at)==null?void 0:u.slice(0,10)}. Awaiting warden approval.
              </div>
            `:(()=>{const v=a.filter(h=>h.hostel===s.hostel&&h.floor===s.floor&&h.room_id!==s.room_id&&h.current_occupancy<h.capacity).sort((h,S)=>h.room_id.localeCompare(S.room_id)),g=v.length===0,k=g?a.filter(h=>h.hostel===s.hostel&&h.room_id!==s.room_id&&h.current_occupancy<h.capacity).sort((h,S)=>h.floor-S.floor||h.room_id.localeCompare(S.room_id)):v;return`
              <div style="font-size:var(--text-sm); font-weight:600; margin-bottom:var(--space-4);">Request a Room Change</div>
              ${g?`
                <div style="font-size:var(--text-xs); background:color-mix(in srgb,var(--accent-amber) 10%,transparent); border:1px solid color-mix(in srgb,var(--accent-amber) 25%,transparent); border-radius:8px; padding:var(--space-3) var(--space-4); color:var(--accent-amber); margin-bottom:var(--space-4);">
                  All rooms on your floor (Floor ${s.floor}) are currently full. You may request a transfer to another floor.
                </div>
              `:`
                <div style="font-size:var(--text-xs); color:var(--text-tertiary); margin-bottom:var(--space-4);">
                  Only rooms on your current floor (Floor ${s.floor}) are shown. Cross-floor transfers are only allowed when your floor has no available rooms.
                </div>
              `}
              <div id="change-msg"></div>
              <form id="change-req-form">
                <div class="form-group">
                  <label class="form-label">Target Room *</label>
                  <select class="form-select" id="change-target-room" name="to_room_id" required>
                    <option value="">— select a room —</option>
                    ${k.map(h=>`<option value="${h.room_id}">${h.room_id} · Fl ${h.floor} · ${h.type} · ${h.current_occupancy}/${h.capacity}</option>`).join("")}
                  </select>
                  ${k.length===0?'<div style="font-size:var(--text-xs); color:var(--accent-red); margin-top:4px;">No available rooms in your hostel.</div>':""}
                </div>
                <div class="form-group">
                  <label class="form-label">Reason for Change *</label>
                  <textarea class="form-textarea" name="reason" rows="3" placeholder="Explain why you need a different room…" required></textarea>
                </div>
                <div class="form-actions">
                  <button type="submit" class="btn btn-primary" id="btn-submit-change">Submit Request</button>
                  <button type="button" class="btn btn-secondary" id="btn-cancel-change">Cancel</button>
                </div>
              </form>`})()}
          </div>
        </div>
      `:c?`
        <!-- ② No allocation but pending booking -->
        <div style="background:var(--bg-elevated); border:1px solid color-mix(in srgb,var(--accent-amber) 30%,transparent); border-radius:var(--radius-lg); padding:var(--space-6); margin-bottom:var(--space-6);">
          <div style="font-size:var(--text-xs); font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:var(--text-tertiary); margin-bottom:var(--space-2);">Pending Booking Request</div>
          <div style="font-size:var(--text-2xl); font-weight:700; color:var(--accent-amber);">${c.room_id}</div>
          <div style="font-size:var(--text-sm); color:var(--text-secondary); margin-top:4px;">Submitted ${(y=c.created_at)==null?void 0:y.slice(0,10)} · Waiting for warden approval</div>
        </div>
      `:""}

      <!-- ③ Floor Plan (only shown if not yet allocated) -->
      ${s?"":`
        <div style="display:flex; align-items:center; gap:var(--space-4); margin-bottom:var(--space-5);">
          <span style="font-size:var(--text-sm); color:var(--text-secondary); font-weight:500;">Floor:</span>
          <div class="cat-tabs" style="margin:0;">
            ${l.map(v=>`
              <button class="cat-tab${v===n?" active":""}" data-floor="${v}">Floor ${v}</button>
            `).join("")}
          </div>
        </div>

        <div class="form-section" style="max-width:none; margin-bottom:var(--space-6);" id="floor-plan-section">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:var(--space-4);">
            <div class="form-section-title" id="floor-plan-title" style="margin-bottom:0;">Floor ${n} — ${(o==null?void 0:o.hostel)||""}</div>
            <div style="display:flex; gap:var(--space-4);">
              <span style="display:flex; align-items:center; gap:6px; font-size:var(--text-xs); color:var(--text-tertiary);"><span style="width:10px;height:10px;border-radius:50%;background:var(--accent-green); display:inline-block;"></span>Vacant</span>
              <span style="display:flex; align-items:center; gap:6px; font-size:var(--text-xs); color:var(--text-tertiary);"><span style="width:10px;height:10px;border-radius:50%;background:var(--accent-amber); display:inline-block;"></span>Partial</span>
              <span style="display:flex; align-items:center; gap:6px; font-size:var(--text-xs); color:var(--text-tertiary);"><span style="width:10px;height:10px;border-radius:50%;background:var(--accent-red); display:inline-block;"></span>Full</span>
            </div>
          </div>
          <div class="floor-plan" id="floor-plan"></div>
        </div>

        <div id="room-detail-panel" class="form-section" style="max-width:none; display:none; margin-bottom:var(--space-6);">
          <div class="form-section-title" id="room-detail-title">Room Details</div>
          <div id="room-detail-body"></div>
          <form id="booking-form" style="margin-top:var(--space-5);" novalidate>
            <div class="form-group" style="max-width:480px;">
              <label class="form-label" for="booking-pref">Preferences <span style="color:var(--text-tertiary)">(optional)</span></label>
              <textarea class="form-textarea" id="booking-pref" rows="2" placeholder="e.g. prefer window side, near bathroom…"></textarea>
            </div>
            <div class="form-actions">
              <button type="submit" class="btn btn-primary" id="btn-book">Request This Room</button>
              <button type="button" class="btn btn-secondary" id="btn-cancel-room">Cancel</button>
            </div>
          </form>
        </div>
      `}

      <!-- History -->
      <div class="table-container" style="margin-bottom:var(--space-6);">
        <div class="table-toolbar"><div class="table-toolbar-title">My Booking Requests</div></div>
        ${p.length===0?'<p style="padding:var(--space-6); text-align:center; color:var(--text-tertiary);">No booking requests yet.</p>':`<table>
              <thead><tr><th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th><th>Status</th><th>Note</th><th>Date</th></tr></thead>
              <tbody>
                ${p.map(v=>{var g;return`
                    <tr>
                      <td class="cell-mono">${v.room_id}</td>
                      <td style="font-size:var(--text-xs);">${v.hostel}</td>
                      <td>${v.floor}</td>
                      <td>${v.type}</td>
                      <td><span class="badge badge-${v.status==="pending"?"open":v.status==="approved"?"in-progress":"resolved"}">${v.status}</span></td>
                      <td style="color:var(--text-tertiary); font-size:var(--text-xs);">${v.admin_note||"—"}</td>
                      <td class="cell-mono">${(g=v.created_at)==null?void 0:g.slice(0,10)}</td>
                    </tr>
                `}).join("")}
              </tbody>
            </table>`}
      </div>

      ${i.length>0?`
      <div class="table-container">
        <div class="table-toolbar"><div class="table-toolbar-title">My Room Change Requests</div></div>
        <table>
          <thead><tr><th>From</th><th>To</th><th>To Hostel</th><th>Reason</th><th>Status</th><th>Note</th><th>Date</th></tr></thead>
          <tbody>
            ${i.map(v=>{var g;return`
              <tr>
                <td class="cell-mono">${v.from_room_id}</td>
                <td class="cell-mono">${v.to_room_id}</td>
                <td style="font-size:var(--text-xs);">${v.to_hostel}</td>
                <td style="max-width:160px; font-size:var(--text-xs);" title="${v.reason}">${v.reason.slice(0,50)}${v.reason.length>50?"…":""}</td>
                <td><span class="badge badge-${v.status==="pending"?"open":v.status==="approved"?"in-progress":"resolved"}">${v.status}</span></td>
                <td style="color:var(--text-tertiary); font-size:var(--text-xs);">${v.admin_note||"—"}</td>
                <td class="cell-mono">${(g=v.created_at)==null?void 0:g.slice(0,10)}</td>
              </tr>
            `}).join("")}
          </tbody>
        </table>
      </div>
      `:""}
    </div>
  `,!s){let v=function(k){const h=m.filter(_=>_.floor===k);document.getElementById("floor-plan-title").textContent=`Floor ${k} — ${(o==null?void 0:o.hostel)||""}`;const S=document.getElementById("floor-plan");if(!h.length){S.innerHTML='<p style="color:var(--text-tertiary); padding:var(--space-4);">No rooms on this floor.</p>';return}S.innerHTML=h.sort((_,M)=>_.room_id.localeCompare(M.room_id)).map(_=>{const M=_.capacity>0?_.current_occupancy/_.capacity:0,F=M===0?"vacant":M<1?"partial":"full",ve=(e==null?void 0:e.room_id)===_.room_id;return`
            <button class="room-cell ${F}${ve?" selected":""}"
                    data-room="${_.room_id}"
                    ${F==="full"?"disabled":""}
                    title="${_.room_id} · ${_.type} · ${_.current_occupancy}/${_.capacity}">
              <span class="room-cell-id">${_.room_id}</span>
              <span class="room-cell-type">${_.type[0]}</span>
              <span class="room-cell-occ">${_.current_occupancy}/${_.capacity}</span>
            </button>`}).join(""),S.querySelectorAll(".room-cell:not([disabled])").forEach(_=>{_.addEventListener("click",()=>{e=m.find(M=>M.room_id===_.dataset.room),v(k),g(e)})})},g=function(k){const h=document.getElementById("room-detail-panel");document.getElementById("room-detail-title").textContent=`Room ${k.room_id}`,document.getElementById("room-detail-body").innerHTML=`
        <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(130px,1fr)); gap:var(--space-4);">
          ${[["Hostel",k.hostel],["Floor",k.floor],["Type",k.type],["Capacity",`${k.capacity} beds`],["Occupied",`${k.current_occupancy}/${k.capacity}`],["Available",`${k.available_slots} slot(s)`]].map(([S,_])=>`<div>
              <div style="font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase; letter-spacing:.06em;">${S}</div>
              <div style="font-size:var(--text-sm); margin-top:4px;">${_}</div>
            </div>`).join("")}
        </div>
      `,h.style.display=c?"none":"block"};var b=v,E=g;t.querySelectorAll(".cat-tab[data-floor]").forEach(k=>{k.addEventListener("click",()=>{t.querySelectorAll(".cat-tab[data-floor]").forEach(h=>h.classList.remove("active")),k.classList.add("active"),n=+k.dataset.floor,e=null,document.getElementById("room-detail-panel").style.display="none",v(n)})}),(x=document.getElementById("btn-cancel-room"))==null||x.addEventListener("click",()=>{e=null,document.getElementById("room-detail-panel").style.display="none",v(n)}),(f=document.getElementById("booking-form"))==null||f.addEventListener("submit",async k=>{if(k.preventDefault(),!e)return;const h=document.getElementById("btn-book");h.disabled=!0,h.textContent="Submitting…";try{await $.post("/rooms/book",{room_id:e.room_id,preferences:document.getElementById("booking-pref").value.trim()}),C(`Booking request for ${e.room_id} submitted!`,"success"),G(t)}catch(S){C(S.message,"error"),h.disabled=!1,h.textContent="Request This Room"}}),v(n)}s&&!r&&((B=document.getElementById("btn-show-change"))==null||B.addEventListener("click",()=>{document.getElementById("change-req-section").style.display="block",document.getElementById("btn-show-change").style.display="none"}),(d=document.getElementById("btn-cancel-change"))==null||d.addEventListener("click",()=>{document.getElementById("change-req-section").style.display="none",document.getElementById("btn-show-change").style.display=""}),(w=document.getElementById("change-req-form"))==null||w.addEventListener("submit",async v=>{v.preventDefault();const g=new FormData(v.target),k=document.getElementById("btn-submit-change"),h=document.getElementById("change-msg");k.disabled=!0,k.textContent="Submitting…",h.innerHTML="";try{await $.post("/rooms/change-requests",Object.fromEntries(g.entries())),C("Room change request submitted. Awaiting warden approval.","success"),G(t)}catch(S){h.innerHTML=`<div style="color:var(--accent-red); font-size:var(--text-sm); margin-bottom:var(--space-3); padding:var(--space-3); background:color-mix(in srgb,var(--accent-red) 10%,transparent); border-radius:8px;">${S.message}</div>`,k.disabled=!1,k.textContent="Submit Request"}})),requestAnimationFrame(()=>{var v;return(v=document.getElementById("booking-page"))==null?void 0:v.classList.replace("page-enter","page-active")})}async function pe(t){t.innerHTML='<div class="page-loading">Loading forum…</div>';try{const a=await $.get("/forum");Le(t,a)}catch(a){t.innerHTML=`<div class="page-error">Failed to load forum: ${a.message}</div>`}}function Le(t,a){const s=K()==="admin";let p=a;t.innerHTML=`
    <div class="page-enter" id="forum-page">
      <div class="page-header">
        <h2>Community Forum</h2>
        <p>${s?"Read all campus posts — posting is disabled for admins.":"Share thoughts anonymously with your campus community."}</p>
      </div>

      ${s?`
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
  `;function i(){const m=document.getElementById("forum-feed"),l=document.getElementById("forum-empty");if(p.length===0){m.innerHTML="",l.style.display="block";return}l.style.display="none",m.innerHTML=p.map(n=>`
      <div class="forum-post card" style="background:var(--bg-primary); padding:var(--space-4); margin-bottom:var(--space-4); border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
        <div class="forum-post-header" style="display:flex; align-items:center; gap:var(--space-3); margin-bottom:var(--space-2);">
          <div class="forum-avatar" style="font-size:24px; background:transparent; border:none;">${n.avatar_icon||"👤"}</div>
          <div>
            <div class="forum-post-title" style="font-weight:600; color:var(--text-primary);">${P(n.title)}</div>
            <div class="forum-post-meta" style="font-size:var(--text-xs); color:var(--text-tertiary);">${P(n.avatar_name||"Anonymous")} · ${te(n.created_at)}</div>
          </div>
        </div>
        <div class="forum-post-body" style="font-size:var(--text-sm); color:var(--text-secondary); line-height:1.6; margin-left:var(--space-10); margin-bottom:var(--space-3);">${P(n.content)}</div>
        
        <div class="forum-post-actions" style="margin-left:var(--space-10); display:flex; gap:var(--space-4); align-items:center; margin-bottom:var(--space-2);">
          <div style="display:flex; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--border-subtle); overflow:hidden;">
            <button class="vote-btn" data-type="post" data-id="${n.post_id}" data-dir="up" style="background:transparent; border:none; padding:4px 8px; cursor:pointer; color:var(--text-secondary);">⇧ ${n.upvotes||0}</button>
            <div style="width:1px; background:var(--border-subtle);"></div>
            <button class="vote-btn" data-type="post" data-id="${n.post_id}" data-dir="down" style="background:transparent; border:none; padding:4px 8px; cursor:pointer; color:var(--text-secondary);">⇩ ${n.downvotes||0}</button>
          </div>
          ${s?"":`<button class="reply-toggle-btn" data-post-id="${n.post_id}" style="background:transparent; border:none; color:var(--text-tertiary); font-size:var(--text-xs); cursor:pointer; display:flex; gap:4px; align-items:center;">💬 Reply</button>`}
        </div>

        <!-- Replies -->
        ${n.replies&&n.replies.length>0?`
          <div class="forum-replies" style="margin-left:var(--space-10); border-left:2px solid var(--border-subtle); padding-left:var(--space-4); margin-top:var(--space-4); display:flex; flex-direction:column; gap:var(--space-4);">
            ${n.replies.map(e=>`
              <div class="forum-reply">
                <div class="forum-post-header" style="display:flex; align-items:center; gap:var(--space-2); margin-bottom:4px;">
                  <div class="forum-avatar" style="font-size:16px; background:transparent; border:none; width:auto; height:auto;">${e.avatar_icon||"👤"}</div>
                  <div class="forum-post-meta" style="font-size:var(--text-xs); color:var(--text-tertiary);">${P(e.avatar_name||"Anonymous")} · ${te(e.created_at)}</div>
                </div>
                <div class="forum-post-body" style="font-size:var(--text-sm); line-height:1.5; color:var(--text-secondary); margin-left:var(--space-6);">${P(e.content)}</div>
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
        ${s?"":`
          <div id="reply-form-${n.post_id}" style="display:none; margin-left:var(--space-10); margin-top:var(--space-4);">
            <textarea id="reply-input-${n.post_id}" class="form-textarea" rows="2" placeholder="Write an anonymous reply..." style="padding:var(--space-2); min-height:60px;"></textarea>
            <div style="margin-top:var(--space-2); display:flex; gap:var(--space-2);">
              <button class="btn btn-primary reply-submit-btn" data-post-id="${n.post_id}" style="padding:4px 12px; font-size:12px;">Submit Reply</button>
              <button class="btn btn-secondary reply-toggle-btn" data-post-id="${n.post_id}" style="padding:4px 12px; font-size:12px;">Cancel</button>
            </div>
          </div>
        `}
      </div>
    `).join("")}if(document.getElementById("forum-feed").addEventListener("click",async m=>{const l=m.target.closest(".vote-btn");if(l&&!l.disabled){const c=l.dataset.type,r=l.dataset.id,b=l.dataset.dir;l.disabled=!0;try{const E=await $.patch("/forum/vote",{type:c,id:parseInt(r,10),dir:b});if(c==="post"){const u=p.find(y=>y.post_id===parseInt(r,10));u&&(u.upvotes=E.upvotes,u.downvotes=E.downvotes)}else for(const u of p)if(u.replies){const y=u.replies.find(x=>x.reply_id===parseInt(r,10));if(y){y.upvotes=E.upvotes,y.downvotes=E.downvotes;break}}i()}catch(E){C(E.message,"error"),l.disabled=!1}return}const n=m.target.closest(".reply-toggle-btn");if(n){const c=n.dataset.postId,r=document.getElementById(`reply-form-${c}`);r&&(r.style.display=r.style.display==="none"?"block":"none");return}const e=m.target.closest(".reply-submit-btn");if(e){const c=e.dataset.postId,r=document.getElementById(`reply-input-${c}`),b=r==null?void 0:r.value.trim();if(!b){C("Reply content cannot be empty","error");return}e.disabled=!0,e.textContent="...";try{const E=await $.post(`/forum/${c}/reply`,{content:b}),u=p.find(y=>y.post_id===parseInt(c,10));u&&(u.replies||(u.replies=[]),u.replies.push(E)),C("Reply posted","success"),i()}catch(E){C(E.message,"error"),e.disabled=!1,e.textContent="Submit Reply"}return}}),!s){const m=document.getElementById("forum-form");m.addEventListener("submit",async l=>{l.preventDefault();let n=!0;t.querySelectorAll(".form-error").forEach(b=>b.classList.remove("visible"));const e=document.getElementById("f-title").value.trim(),c=document.getElementById("f-content").value.trim();if(e||(document.getElementById("err-f-title").classList.add("visible"),n=!1),c||(document.getElementById("err-f-content").classList.add("visible"),n=!1),!n)return;const r=document.getElementById("btn-post");r.disabled=!0,r.textContent="Posting…";try{p=[await $.post("/forum",{title:e,content:c}),...p],C("Posted anonymously!","success"),m.reset(),i()}catch(b){C(b.message,"error")}finally{r.disabled=!1,r.textContent="Post Anonymously"}}),m.addEventListener("reset",()=>t.querySelectorAll(".form-error").forEach(l=>l.classList.remove("visible")))}i(),requestAnimationFrame(()=>{var m;return(m=document.getElementById("forum-page"))==null?void 0:m.classList.replace("page-enter","page-active")})}function P(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function te(t){try{return new Date(t).toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}const ae=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Ie={breakfast:[["Poori Chole","Matter Kulcha","Kachori Bhaji","Dosa Sambar","Pav Bhaji","Macaroni","Aloo Paratha"],["Chacos","Idli Sambar","Daliya","Chana Chaat","Corn Flakes","Idli Sambar","Cut Fruits"],["Egg","Banana","Egg","—","Egg","—","—"],["Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee"],["Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam"]],lunch:[["Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad"],["Boondi Raita","Mix Veg Raita","Lauki Raita","Mix Veg Raita","Boondi Raita","Mix Veg Raita","Mint Raita"],["A / P / C","A / P / C","A / P / C","A / P / C","A / P / C","A / P / C","A / P / C"],["Mix Dal Tadka","Chole Masala","Kadi Pakora","Lobhiya / Masoor Dal","Rajma Masala","Dal Makhani","Dal Tadka"],["Matar Paneer","Aloo Nutrela","Mixed Vegetable","Paneer Do Pyaza","Handi Kofta Curry","Aloo Gobhi Masala","Chap Masala"],["Aloo Palak","Boiled Rice","Soya Chap Gravy","Boiled Rice","Boiled Rice","Boiled Rice","Veg Biryani"],["Boiled Rice","Chapathi","Jeera Rice","Cut Fruits","Chapathi","Chapathi","Chapathi"],["Chapathi","Ice Cream","Chapathi","Chapathi","—","Besan Barfi","Fruit Custard"]],hitea:[["Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee"],["Veg Hakka Noodles","Bhaji Pakora","Veg Sandwich","Bread Pakora","Cake Slice","Potato Wedges","Aloo Sandwich"]],dinner:[["Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad"],["Dal Bukhara","Curd","Rajma Masala","Curd","Dal Palak","Khichdi","Curd"],["Veg Jalfrezi","Arhar Dal Fry","Palak Paneer","Mix Dal Tadka","Soya Matar Masala","Mix Vegetable","Dal Dhaba"],["Jeera Pulao","Crispy Veg Sweet Chilly","Onion Pulao","Aloo Chole","Tomato Rice","Chapati","Paneer Lababdar"],["Chapathi","Aloo Jeera","Chapathi","Masala Rice","Chapathi","Hot Milk","Jeera Pulao"],["Milk","Soya Biryani","Milk","Chapathi","Milk","—","Chapathi"],["Rice Kheer","Chapathi","Fruit Custard","Milk","Boondi","—","Milk"]]},Me=[{key:"breakfast",label:"Breakfast",time:"7:30 – 9:30 AM"},{key:"lunch",label:"Lunch",time:"12:30 – 2:30 PM"},{key:"hitea",label:"Evening Hi-Tea",time:"5:00 – 6:30 PM"},{key:"dinner",label:"Dinner",time:"7:30 – 9:30 PM"}];function Ae(){const t=new Date().getDay();return t===0?6:t-1}function Te(){const t=new Date().getHours();return t<10?"breakfast":t<15?"lunch":t<19?"hitea":"dinner"}async function qe(t){t.innerHTML='<div class="page-loading">Loading…</div>';let a=[];try{a=await $.get("/resources")}catch{}ze(t,a)}function ze(t,a){const s=Ae();let p=Te(),i=s;t.innerHTML=`
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
          ${Me.map(l=>`
            <button data-meal="${l.key}" class="res-meal-tab${l.key===p?" active":""}">
              <span class="res-meal-name">${l.label}</span>
              <span class="res-meal-time">${l.time}</span>
            </button>
          `).join("")}
        </div>

        <!-- Day selector -->
        <div style="display:flex; gap:var(--space-2); margin-bottom:var(--space-5); flex-wrap:wrap;" id="day-tabs">
          ${ae.map((l,n)=>`
            <button class="res-day-tab${n===i?" active":""}" data-day="${n}">
              ${l.slice(0,3)}${n===s?" ·":""}
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
        ${j("Pharmacy",`
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
        ${j("Hospital Appointment",`
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
        ${j("Laundry",`
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-6);">
            <div>
              <div class="res-info-place" style="margin-bottom:var(--space-4);">Collection</div>
              ${[["Monday","Boys Hostel (Senior MBBS)"],["Wednesday","Girls Hostel (Senior MBBS)"]].map(([l,n])=>`<div class="res-laundry-row"><span>${l}</span><span>${n}</span></div>`).join("")}
            </div>
            <div>
              <div class="res-info-place" style="margin-bottom:var(--space-4);">Delivery</div>
              ${[["Thursday","Boys Hostel (Senior MBBS)"],["Saturday","Girls Hostel (Senior MBBS)"]].map(([l,n])=>`<div class="res-laundry-row"><span>${l}</span><span>${n}</span></div>`).join("")}
            </div>
          </div>
          <div class="res-info-block" style="margin-top:var(--space-6); padding-top:var(--space-6); border-top:1px solid var(--border-subtle);">
            <div class="res-info-line">Label all items with name & roll number. Dry-clean items separately.</div>
            <a href="tel:9999000001" class="res-phone" style="margin-top:var(--space-3);">9999-000-001</a>
          </div>
        `)}

        <!-- Canteens -->
        ${j("Canteens",`
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
      ${a.length>0?`
        <section>
          <div class="res-section-label" style="margin-bottom:var(--space-5);">Staff Directory</div>
          <div id="contacts-body">${Re(a)}</div>
        </section>
      `:""}

    </div>
  `;let o=document.getElementById("res-styles");o&&o.remove(),o=document.createElement("style"),o.id="res-styles",o.textContent=`
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
        border-radius: var(--radius-lg);
        background: var(--bg-secondary);
        cursor: pointer;
        transition: all .25s var(--ease-out);
        text-align: left;
        gap: 6px;
        min-width: 150px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.02);
      }
      .res-meal-tab:hover {
        border-color: var(--border-default);
        background: var(--bg-hover);
        transform: translateY(-2px);
      }
      .res-meal-tab.active {
        border-color: var(--accent-amber);
        background: var(--accent-amber-bg);
        box-shadow: 0 6px 16px rgba(0,0,0,0.06);
      }
      .res-meal-name {
        font-family: var(--font-serif);
        font-size: var(--text-lg);
        font-weight: 500;
        color: var(--text-primary);
        letter-spacing: 0.01em;
      }
      .res-meal-tab.active .res-meal-name {
        color: var(--accent-amber);
      }
      .res-meal-time {
        font-family: var(--font-mono);
        font-size: 11px;
        color: var(--text-tertiary);
        letter-spacing: 0.05em;
      }
      .res-meal-tab.active .res-meal-time {
        color: var(--accent-amber);
        opacity: 0.8;
      }

      /* Day tabs */
      .res-day-tab {
        padding: 8px 18px;
        font-size: var(--text-xs);
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-full, 999px);
        background: var(--bg-secondary);
        color: var(--text-tertiary);
        cursor: pointer;
        transition: all .25s var(--ease-out);
        box-shadow: 0 1px 2px rgba(0,0,0,0.02);
      }
      .res-day-tab:hover {
        color: var(--text-primary);
        border-color: var(--border-default);
        background: var(--bg-hover);
      }
      .res-day-tab.active {
        background: var(--accent-amber-bg);
        color: var(--accent-amber);
        border-color: var(--accent-amber);
      }

      /* Big info cards */
      .res-big-card {
        background: var(--bg-secondary);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-xl);
        padding: var(--space-8);
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        transition: transform .25s var(--ease-out), box-shadow .25s var(--ease-out);
      }
      .res-big-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.06);
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
        font-family: var(--font-serif);
        font-size: var(--text-xl);
        font-weight: 500;
        color: var(--text-primary);
        margin-bottom: var(--space-2);
        letter-spacing: 0.01em;
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
      .res-phone:hover { color: var(--accent-amber); }
      .res-book-btn {
        display: inline-flex;
        align-items: center;
        padding: 10px 24px;
        background: var(--accent-amber);
        color: var(--bg-root);
        border-radius: var(--radius-full);
        font-size: var(--text-sm);
        font-weight: 600;
        text-decoration: none;
        transition: all .25s var(--ease-out);
        align-self: flex-start;
        box-shadow: 0 2px 8px rgba(232, 160, 104, 0.2);
      }
      .res-book-btn:hover {
        background: var(--accent-amber);
        opacity: 0.9;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(232, 160, 104, 0.3);
      }

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
      #menu-panel {
        background: var(--bg-secondary);
        border-radius: var(--radius-xl);
        border: 1px solid var(--border-subtle);
        padding: var(--space-4);
        box-shadow: 0 4px 12px rgba(0,0,0,0.02);
      }
      #menu-panel table {
        width: 100%;
        border-collapse: collapse;
      }
      #menu-panel th {
        padding: 16px 14px;
        font-size: var(--text-xs);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: .06em;
        text-align: center;
        color: var(--text-tertiary);
        border-bottom: 2px solid var(--border-subtle);
      }
      #menu-panel th.today {
        color: var(--accent-amber);
      }
      #menu-panel td {
        padding: 14px 14px;
        font-size: var(--text-sm);
        text-align: center;
        color: var(--text-secondary);
        border-bottom: 1px solid var(--border-subtle);
      }
      #menu-panel td.today {
        color: var(--text-primary);
        font-weight: 500;
        background: var(--accent-amber-bg);
      }
      #menu-panel tr:last-child td { border-bottom: none; }

      /* Contact directory */
      .res-dir { display: flex; flex-direction: column; }
      .res-dir-group { margin-bottom: var(--space-8); }
      .res-dir-cat {
        font-size: 10px; font-weight: 700; text-transform: uppercase;
        letter-spacing: .12em; color: var(--text-tertiary);
        padding-bottom: var(--space-3);
        border-bottom: 1px solid var(--border-subtle);
        margin-bottom: var(--space-4);
      }
      .res-dir-row {
        display: flex; align-items: baseline;
        justify-content: space-between; flex-wrap: wrap;
        gap: var(--space-2) var(--space-6);
        padding: var(--space-4) 0;
        border-bottom: 1px solid var(--border-subtle);
      }
      .res-dir-row:last-child { border-bottom: none; }
      .res-dir-name {
        font-size: var(--text-sm); font-weight: 600;
        color: var(--text-primary); flex-shrink: 0;
      }
      .res-dir-note {
        font-size: var(--text-xs); color: var(--text-tertiary);
        margin-top: 2px;
      }
      .res-dir-contacts {
        display: flex; align-items: center; gap: var(--space-4);
        flex-shrink: 0; flex-wrap: wrap;
      }
      .res-dir-phone {
        font-size: var(--text-xs); font-family: var(--font-mono);
        font-weight: 600; color: var(--text-primary);
        text-decoration: none; white-space: nowrap;
      }
      .res-dir-phone:hover { opacity: .65; }
      .res-dir-email {
        font-size: var(--text-xs); color: var(--text-tertiary);
        text-decoration: none; white-space: nowrap;
      }
      .res-dir-email:hover { color: var(--text-primary); }

      @media (max-width: 768px) {
        .res-big-grid { grid-template-columns: 1fr !important; }
      }
    `,document.head.appendChild(o);function m(){const l=Ie[p],n=document.getElementById("menu-panel");n&&(n.innerHTML=`
      <table>
        <thead>
          <tr>
            ${ae.map((e,c)=>`<th class="${c===i?"today":""}">${e}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${l.map(e=>`
            <tr>
              ${e.map((c,r)=>`<td class="${r===i?"today":""}">${c}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    `)}document.getElementById("meal-tabs").querySelectorAll(".res-meal-tab").forEach(l=>{l.addEventListener("click",()=>{document.getElementById("meal-tabs").querySelectorAll(".res-meal-tab").forEach(n=>n.classList.remove("active")),l.classList.add("active"),p=l.dataset.meal,m()})}),document.getElementById("day-tabs").querySelectorAll(".res-day-tab").forEach(l=>{l.addEventListener("click",()=>{document.getElementById("day-tabs").querySelectorAll(".res-day-tab").forEach(n=>n.classList.remove("active")),l.classList.add("active"),i=+l.dataset.day,m()})}),m(),requestAnimationFrame(()=>{var l;return(l=document.getElementById("res-page"))==null?void 0:l.classList.replace("page-enter","page-active")})}function j(t,a){return`
    <div class="res-big-card">
      <div class="res-card-title">${t}</div>
      ${a}
    </div>
  `}function Re(t){const a=["Authority","Electrician","Plumber","WiFi","Other"],s={Authority:"Authority",Electrician:"Electrician",Plumber:"Plumber",WiFi:"Wi-Fi / IT",Other:"Other"},p={};return t.forEach(o=>{(p[o.category]=p[o.category]||[]).push(o)}),`<div class="res-dir">${[...a.filter(o=>p[o]),...Object.keys(p).filter(o=>!a.includes(o))].map(o=>`
    <div class="res-dir-group">
      <div class="res-dir-cat">${s[o]||o}</div>
      ${p[o].map(m=>`
        <div class="res-dir-row">
          <div>
            <div class="res-dir-name">${m.name}</div>
            ${m.notes?`<div class="res-dir-note">${m.notes}</div>`:""}
          </div>
          <div class="res-dir-contacts">
            ${m.phone?`<a class="res-dir-phone" href="tel:${m.phone}">${m.phone}</a>`:""}
            ${m.email?`<a class="res-dir-email" href="mailto:${m.email}">${m.email}</a>`:""}
          </div>
        </div>
      `).join("")}
    </div>
  `).join("")}</div>`}const U="ahcms_hostel_filter";function Q(){return localStorage.getItem(U)||""}function me(t){t?localStorage.setItem(U,t):localStorage.removeItem(U),window.dispatchEvent(new CustomEvent("hostel-change",{detail:t}))}function X(t){window.addEventListener("hostel-change",a=>t(a.detail))}async function Pe(t){let a=[];async function s(){t.innerHTML='<div class="page-loading">Loading</div>';try{const i=Q(),o=i?`?hostel=${encodeURIComponent(i)}`:"",[m,l]=await Promise.all([$.get(`/dashboard/admin${o}`),$.get("/rooms")]);a=[...new Set(l.map(n=>n.hostel))].sort(),p(t,m,a,i)}catch(i){t.innerHTML=`<div class="page-error">Failed to load: ${i.message}</div>`}}X(()=>s()),await s();function p(i,{stats:o,recentComplaints:m,wardens:l,wardenOfficePhone:n},e,c){const r=l.filter(u=>u.role==="Warden"),b=l.filter(u=>u.role==="Guard"),E=o.totalCapacity>0?Math.round(o.totalOccupied/o.totalCapacity*100):0;i.innerHTML=`
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
              ${e.map(u=>`<option value="${u}" ${u===c?"selected":""}>${He(u)}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Stat Cards -->
        <div class="card-grid">
          <div class="card card-accent-blue">
            <div class="card-label">Total Rooms</div>
            <div class="card-value">${o.totalRooms}</div>
            <div class="card-sub">${o.vacantRooms} vacant · ${E}% utilized</div>
          </div>
          <div class="card card-accent-amber">
            <div class="card-label">Open Complaints</div>
            <div class="card-value">${o.openComplaints}</div>
            <div class="card-sub">${o.inProgressComplaints} in progress</div>
          </div>
          <div class="card card-accent-green">
            <div class="card-label">Resolved</div>
            <div class="card-value">${o.resolvedComplaints}</div>
            <div class="card-sub">complaints closed</div>
          </div>
          <div class="card card-accent-purple">
            <div class="card-label">Students</div>
            <div class="card-value">${o.totalStudents}</div>
            <div class="card-sub">${o.pendingBookings} pending bookings</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-6);">
          <!-- Wardens & Guards -->
          <div class="form-section" style="max-width:none;">
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:var(--space-2); margin-bottom:var(--space-4);">
              <div class="form-section-title" style="margin-bottom:0;">On-Duty Wardens</div>
              ${n?`
                <a href="tel:${n}" style="
                  display:inline-flex; align-items:center; gap:6px;
                  background:color-mix(in srgb,var(--accent-green) 12%,transparent);
                  border:1px solid color-mix(in srgb,var(--accent-green) 30%,transparent);
                  color:var(--accent-green); font-size:var(--text-xs); font-weight:600;
                  letter-spacing:.04em; padding:4px 10px; border-radius:999px;
                  text-decoration:none; transition:background .15s;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Office: ${n}
                </a>`:""}
            </div>
            ${r.length===0?'<p class="empty-msg">No warden data available.</p>':r.map(u=>`
              <div class="contact-row" style="align-items:flex-start;">
                <div class="contact-avatar">${u.name[0]}</div>
                <div class="contact-info" style="flex:1;">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:2px;">
                    <div class="contact-name">${u.name}</div>
                    <a href="tel:${u.phone}" class="contact-phone" style="margin-left:auto;">${u.phone||""}</a>
                  </div>
                  <div class="contact-meta">${u.hostel} · ${u.email||""}</div>
                  <div style="display:flex; flex-wrap:wrap; gap:12px; font-size:11px; margin-top:8px; padding-top:8px; border-top:1px solid var(--border-subtle); color:var(--text-secondary);">
                    <span><span style="font-weight:600; color:var(--text-tertiary);">Last:</span> ${u.previous?u.previous.name:"Unknown"}</span>
                    <span style="color:var(--accent-green);"><span style="font-weight:600;">Current:</span> Active</span>
                    <span><span style="font-weight:600; color:var(--text-tertiary);">Next:</span> ${u.next?u.next.name:"Unknown"}</span>
                  </div>
                </div>
              </div>
            `).join("")}
            <div class="form-section-title" style="margin-top:var(--space-5);">On-Duty Guards</div>
            ${b.length===0?'<p class="empty-msg">No guard data.</p>':b.map(u=>`
              <div class="contact-row">
                <div class="contact-avatar guard">${u.name[0]}</div>
                <div class="contact-info">
                  <div class="contact-name">${u.name}</div>
                  <div class="contact-meta">${u.hostel} · ${u.shift} shift</div>
                </div>
                <a href="tel:${u.phone}" class="contact-phone">${u.phone||""}</a>
              </div>
            `).join("")}
          </div>

          <!-- Recent Complaints -->
          <div class="form-section" style="max-width:none;">
            <div class="form-section-title">Recent Complaints</div>
            ${m.length===0?'<p class="empty-msg">No recent complaints.</p>':`
            <div class="activity-list">
              ${m.map(u=>`
                  <div class="activity-item">
                    <div class="activity-dot" style="background:${u.status==="open"?"var(--accent-amber)":u.status==="in-progress"?"var(--accent-blue)":"var(--accent-green)"}"></div>
                    <div class="activity-content">
                      <div class="activity-text">
                        <strong>${u.student_name||u.student_id}</strong> · ${u.category}
                        <span class="badge badge-${u.status}">${u.status}</span>
                      </div>
                      <div class="activity-time">${u.date} · ${u.room_id||""}</div>
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
              <div class="occ-track-inner" style="width:${E}%"></div>
            </div>
            <span style="font-size:var(--text-sm); color:var(--text-secondary);">${o.totalOccupied} / ${o.totalCapacity} beds · ${E}%</span>
          </div>
          <div class="card-grid" style="margin-top:var(--space-4); margin-bottom:0;">
            <div class="card" style="text-align:center;">
              <div class="card-label">Total Beds</div>
              <div class="card-value" style="font-size:var(--text-2xl);">${o.totalCapacity}</div>
            </div>
            <div class="card" style="text-align:center;">
              <div class="card-label">Occupied</div>
              <div class="card-value" style="font-size:var(--text-2xl);">${o.totalOccupied}</div>
            </div>
            <div class="card" style="text-align:center;">
              <div class="card-label">Vacant</div>
              <div class="card-value" style="font-size:var(--text-2xl); color:var(--accent-green);">${o.totalCapacity-o.totalOccupied}</div>
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("hostel-filter").addEventListener("change",u=>{me(u.target.value),s()}),i.querySelectorAll('a.link-accent[href^="#"]').forEach(u=>{u.addEventListener("click",y=>{y.preventDefault(),window.location.hash=u.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var u;return(u=document.getElementById("admin-home"))==null?void 0:u.classList.replace("page-enter","page-active")})}}function He(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const q=t=>`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;opacity:.6;vertical-align:middle;">${t}</svg>`,Fe={Plumbing:q('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),Electricity:q('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'),WiFi:q('<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>'),Cleanliness:q('<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'),Carpentry:q('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),Other:q('<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>')},oe=["open","in-progress","resolved"],je=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"];async function De(t){async function a(){t.innerHTML='<div class="page-loading">Loading…</div>';try{const s=Q(),p=s?`?hostel=${encodeURIComponent(s)}`:"",i=await $.get(`/complaints${p}`);Ne(t,i,a)}catch(s){t.innerHTML=`<div class="page-error">Failed to load: ${s.message}</div>`}}X(()=>a()),await a()}function Ne(t,a,s){let p=a,i="all",o="",m=null;t.innerHTML=`
    <div class="page-enter" id="admin-complaints-page">
      <div class="page-header">
        <h2>Complaints Management</h2>
        <p>Review, approve, and update status of all hostel complaints.</p>
      </div>

      <!-- Summary chips -->
      <div class="card-grid" style="margin-bottom: var(--space-6);">
        <div class="card" style="text-align:center; cursor:pointer;" data-quick="all">
          <div class="card-label">Total</div>
          <div class="card-value" style="font-size:var(--text-2xl);">${p.length}</div>
        </div>
        ${oe.map(e=>{const c=p.filter(b=>b.status===e).length;return`<div class="card card-accent-${e==="open"?"amber":e==="in-progress"?"blue":"green"}" style="text-align:center; cursor:pointer;" data-quick="${e}">
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
              ${je.map(e=>`<option value="${e}">${e}</option>`).join("")}
            </select>
            <button class="filter-chip active" data-status="all">All</button>
            ${oe.map(e=>`<button class="filter-chip" data-status="${e}">${e}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-body"></div>
      </div>
    </div>
  `;function l(){let e=p;return o&&(e=e.filter(c=>c.category===o)),i!=="all"&&(e=e.filter(c=>c.status===i)),e}function n(){const e=l(),c=document.getElementById("complaints-body");if(e.length===0){c.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No complaints match the current filter.</p>';return}c.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>#</th><th>Student</th><th>Room</th><th>Category</th>
            <th>Description</th><th>Date</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody id="cmp-tbody">
          ${e.map(r=>`
            <tr class="cmp-row${m===r.complaint_id?" expanded-row":""}" data-id="${r.complaint_id}">
              <td class="cell-mono">${r.complaint_id}</td>
              <td><div>${r.student_name||r.student_id}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${r.roll_no||""}</div></td>
              <td class="cell-mono">${r.room_id||"—"}</td>
              <td><span style="display:inline-flex;align-items:center;gap:5px;">${Fe[r.category]||""} ${r.category}</span></td>
              <td style="max-width:180px; overflow:hidden; text-overflow:ellipsis;" title="${r.description}">${r.description.slice(0,45)}${r.description.length>45?"…":""}</td>
              <td class="cell-mono">
                <div>${r.date}</div>
                ${r.resolved_date?`<div style="font-size:10px; color:var(--accent-green); margin-top:2px;">Res: ${r.resolved_date}</div>`:""}
              </td>
              <td><span class="badge badge-${r.status}">${r.status}</span></td>
              <td>
                ${r.status!=="resolved"?`
                  <div style="display:flex; gap:4px;">
                    ${r.status==="open"?`<button class="btn btn-sm btn-secondary" data-action="in-progress" data-id="${r.complaint_id}">Start</button>`:""}
                    <button class="btn btn-sm btn-primary" data-action="resolved" data-id="${r.complaint_id}">Resolve</button>
                  </div>
                `:'<span style="color:var(--text-tertiary); font-size:var(--text-xs);">Done</span>'}
              </td>
            </tr>
            ${r.photo_base64?`
              <tr class="photo-row" data-for="${r.complaint_id}" style="${m===r.complaint_id?"":"display:none"}">
                <td colspan="8" style="padding: var(--space-3) var(--space-6); background: var(--bg-elevated);">
                  <img src="${r.photo_base64}" alt="Complaint photo" style="max-width:280px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);" />
                  ${r.admin_note?`<p style="font-size:var(--text-xs); color:var(--text-secondary); margin-top: var(--space-2);">Note: ${r.admin_note}</p>`:""}
                </td>
              </tr>
            `:""}
          `).join("")}
        </tbody>
      </table>
    `,c.querySelectorAll("[data-action]").forEach(r=>{r.addEventListener("click",async()=>{const b=+r.dataset.id,E=r.dataset.action;r.disabled=!0;try{const u=await $.patch(`/complaints/${b}/status`,{status:E});p=p.map(y=>y.complaint_id===b?{...y,...u}:y),C(`Complaint #${b} → ${E}`,"success"),n()}catch(u){C(u.message,"error"),r.disabled=!1}})}),c.querySelectorAll(".cmp-row").forEach(r=>{r.addEventListener("click",()=>{const b=+r.dataset.id;m=m===b?null:b,n()})})}t.querySelectorAll("[data-status]").forEach(e=>{e.addEventListener("click",()=>{t.querySelectorAll("[data-status]").forEach(c=>c.classList.remove("active")),e.classList.add("active"),i=e.dataset.status,n()})}),t.querySelectorAll("[data-quick]").forEach(e=>{e.addEventListener("click",()=>{var c;i=e.dataset.quick,t.querySelectorAll("[data-status]").forEach(r=>r.classList.remove("active")),(c=t.querySelector(`[data-status="${i}"]`))==null||c.classList.add("active"),n()})}),document.getElementById("cat-filter").addEventListener("change",e=>{o=e.target.value,n()}),n(),requestAnimationFrame(()=>{var e;return(e=document.getElementById("admin-complaints-page"))==null?void 0:e.classList.replace("page-enter","page-active")})}const I=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Oe=["Senior MBBS boys hostel","Senior MBBS girls hostel"],V={"M-MBBS":{hostel:"Senior MBBS boys hostel",floor:8},"M-B.Tech":{hostel:"Senior MBBS boys hostel",floor:9},"F-MBBS":{hostel:"Senior MBBS girls hostel",floor:7},"F-B.Tech":{hostel:"Senior MBBS girls hostel",floor:8}};function re(t,a,s){const p=a&&s?`${a}-${s}`:null,i=p?V[p]:null;return t.filter(o=>{if(o.current_occupancy>=o.capacity)return!1;if(!i){const m=a==="M"?"boys":a==="F"?"girls":"";return m?o.hostel.toLowerCase().includes(m):!0}return o.hostel===i.hostel&&o.floor===i.floor}).sort((o,m)=>o.room_id.localeCompare(m.room_id))}function se(t){return`<option value="${t.room_id}">${t.room_id} · Fl ${t.floor} · ${t.type} · ${t.current_occupancy}/${t.capacity}</option>`}async function Ge(t){async function a(){t.innerHTML='<div class="page-loading">Loading…</div>';try{const[s,p,i,o,m]=await Promise.all([$.get("/rooms"),$.get("/rooms/booking-requests"),$.get("/rooms/change-requests"),$.get("/rooms/allocations"),$.get("/students")]);Ue(t,{rooms:s,bookReqs:p,changeReqs:i,allocs:o,students:m},a)}catch(s){t.innerHTML=`<div class="page-error">Failed to load: ${s.message}</div>`}}X(()=>a()),await a()}function Ue(t,a,s){const{rooms:p,bookReqs:i,changeReqs:o,students:m}=a;let l="grid",n=Q();const e=i.filter(y=>y.status==="pending").length+o.filter(y=>y.status==="pending").length;t.innerHTML=`
    <style>
      /* corridor layout */
      .floor-corridor { display:flex; flex-direction:column; gap:3px; margin-bottom:var(--space-5); }
      .corridor-row { display:grid; grid-template-columns:repeat(5,1fr); gap:5px; }
      .corridor-strip { display:flex; align-items:center; gap:8px; padding:3px 0; }
      .corridor-strip-line { flex:1; height:1px; background:var(--border-subtle); }
      .corridor-strip-label { font-size:9px; letter-spacing:.1em; color:var(--text-tertiary); text-transform:uppercase; }
      /* room cells */
      .room-cell {
        border-radius:8px; padding:10px 4px 8px; display:flex; flex-direction:column;
        align-items:center; justify-content:center; font-size:10px; font-weight:600;
        line-height:1.3; text-align:center; border:1px solid transparent;
        transition:transform .12s, box-shadow .12s; cursor:default;
      }
      .room-cell:hover { transform:translateY(-2px); box-shadow:0 4px 12px rgba(0,0,0,.3); }
      .room-cell.vacant  { background:color-mix(in srgb,var(--accent-green) 10%,transparent); border-color:color-mix(in srgb,var(--accent-green) 25%,transparent); color:var(--accent-green); }
      .room-cell.partial { background:color-mix(in srgb,var(--accent-amber) 10%,transparent); border-color:color-mix(in srgb,var(--accent-amber) 25%,transparent); color:var(--accent-amber); }
      .room-cell.full    { background:color-mix(in srgb,var(--accent-red) 10%,transparent);   border-color:color-mix(in srgb,var(--accent-red) 25%,transparent);   color:var(--accent-red); opacity:.65; }
      .rc-id { font-family:var(--font-mono); font-size:9px; opacity:.7; }
      /* minimal tabs */
      #rm-tabs { display:flex; gap:var(--space-6); border-bottom:1px solid var(--border-subtle); margin-bottom:var(--space-6); }
      #rm-tabs button {
        background:none; border:none; border-bottom:2px solid transparent;
        padding:8px 0; font-size:var(--text-sm); font-weight:500;
        color:var(--text-tertiary); cursor:pointer; transition:color .15s, border-color .15s;
      }
      #rm-tabs button:hover  { color:var(--text-primary); }
      #rm-tabs button.active { color:var(--text-primary); border-bottom-color:var(--text-primary); }
      .pending-badge { background:var(--accent-amber); color:#000; border-radius:999px; font-size:10px; font-weight:700; padding:1px 6px; margin-left:4px; }
      .floor-label { font-size:var(--text-xs); font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:var(--text-tertiary); margin:var(--space-5) 0 var(--space-3); }
      .legend-dot { width:8px; height:8px; border-radius:50%; display:inline-block; }
    </style>

    <div id="admin-rooms-page" class="page-enter">
      <div class="page-header" style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:var(--space-4); margin-bottom:var(--space-5);">
        <div>
          <h2>Room Management</h2>
          <p>Allocate rooms, manage students, handle requests.</p>
        </div>
        <div class="hostel-filter-bar">
          <label class="hostel-filter-label">Hostel</label>
          <select class="hostel-filter-select" id="rm-hostel-filter">
            <option value="">All</option>
            ${Oe.map(y=>`<option value="${y}" ${y===n?"selected":""}>${y}</option>`).join("")}
          </select>
        </div>
      </div>

      <div id="rm-tabs">
        <button data-tab="grid"    class="active">Room Grid</button>
        <button data-tab="student">Add Student</button>
        <button data-tab="pending">Pending${e>0?`<span class="pending-badge">${e}</span>`:""}</button>
        <button data-tab="history">All Requests</button>
      </div>

      <div id="rm-panel-grid"></div>
      <div id="rm-panel-student" style="display:none;"></div>
      <div id="rm-panel-pending" style="display:none;"></div>
      <div id="rm-panel-history" style="display:none;"></div>
    </div>
  `,document.getElementById("rm-hostel-filter").addEventListener("change",y=>{n=y.target.value,me(n),c()}),document.querySelectorAll("#rm-tabs button").forEach(y=>{y.addEventListener("click",()=>{l=y.dataset.tab,document.querySelectorAll("#rm-tabs button").forEach(x=>x.classList.toggle("active",x.dataset.tab===l)),["grid","student","pending","history"].forEach(x=>{document.getElementById(`rm-panel-${x}`).style.display=x===l?"":"none"}),c()})});function c(){l==="grid"&&r(),l==="student"&&b(),l==="pending"&&E(),l==="history"&&u()}function r(){const y=n?p.filter(g=>g.hostel===n):p,x={};y.forEach(g=>{(x[g.hostel]=x[g.hostel]||{})[g.floor]=(x[g.hostel][g.floor]||[]).concat(g)});const f=y.filter(g=>g.current_occupancy===0).length,B=y.filter(g=>g.current_occupancy>0&&g.current_occupancy<g.capacity).length,d=y.filter(g=>g.current_occupancy>=g.capacity).length,w=g=>{const k=g.capacity>0?g.current_occupancy/g.capacity:0;return`<div class="room-cell ${k===0?"vacant":k<1?"partial":"full"}" title="${g.room_id} — ${g.type} ${g.current_occupancy}/${g.capacity}">
        <div class="rc-id">${g.room_id}</div>
        <div style="font-size:9px;opacity:.5;">${g.current_occupancy}/${g.capacity}</div>
      </div>`};let v=`<div style="display:flex;gap:var(--space-5);margin-bottom:var(--space-5);">
      <span style="display:flex;align-items:center;gap:6px;font-size:var(--text-xs);color:var(--text-secondary);"><span class="legend-dot" style="background:var(--accent-green);"></span>Vacant (${f})</span>
      <span style="display:flex;align-items:center;gap:6px;font-size:var(--text-xs);color:var(--text-secondary);"><span class="legend-dot" style="background:var(--accent-amber);"></span>Partial (${B})</span>
      <span style="display:flex;align-items:center;gap:6px;font-size:var(--text-xs);color:var(--text-secondary);"><span class="legend-dot" style="background:var(--accent-red);"></span>Full (${d})</span>
    </div>`;for(const g of Object.keys(x).sort()){v+=`<div style="font-size:var(--text-sm);font-weight:600;margin:var(--space-6) 0 var(--space-3);padding-bottom:var(--space-2);border-bottom:1px solid var(--border-subtle);">${g}</div>`;for(const k of Object.keys(x[g]).sort((h,S)=>+h-+S)){const h=x[g][k].sort((M,F)=>M.room_id.localeCompare(F.room_id)),S=h.slice(0,5),_=h.slice(5,10);v+=`<div class="floor-label">Floor ${k}</div>
          <div class="floor-corridor">
            <div class="corridor-row">${S.map(w).join("")}</div>
            <div class="corridor-strip"><div class="corridor-strip-line"></div><div class="corridor-strip-label">corridor</div><div class="corridor-strip-line"></div></div>
            <div class="corridor-row">${_.map(w).join("")}</div>
          </div>`}}y.length||(v+='<p style="padding:var(--space-8);text-align:center;color:var(--text-tertiary);">No rooms.</p>'),document.getElementById("rm-panel-grid").innerHTML=v}function b(){const y=document.getElementById("rm-panel-student");y.innerHTML=`
      <div style="display:grid; grid-template-columns:minmax(0,1.2fr) minmax(0,1fr); gap:var(--space-8); align-items:start;">

        <!-- LEFT: Register form -->
        <div>
          <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-tertiary);margin-bottom:var(--space-5);">Register Student</div>
          <div id="add-msg"></div>
          <form id="add-form" autocomplete="off">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);">
              <div class="form-group">
                <label class="form-label">Roll No *</label>
                <input class="form-input" name="roll_no" placeholder="DL.AI.U4AID24200" required />
              </div>
              <div class="form-group">
                <label class="form-label">Full Name *</label>
                <input class="form-input" name="name" placeholder="Priya Mehta" required />
              </div>
              <div class="form-group">
                <label class="form-label">Email *</label>
                <input class="form-input" type="email" name="email" placeholder="priya@ahcms.edu.in" required />
              </div>
              <div class="form-group">
                <label class="form-label">Gender *</label>
                <select class="form-select" name="gender" id="add-gender" required>
                  <option value="">Select</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Course *</label>
                <select class="form-select" name="course" id="add-course" required>
                  <option value="">Select</option>
                  <option value="MBBS">MBBS</option>
                  <option value="B.Tech">B.Tech</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Year *</label>
                <select class="form-select" name="year" id="add-year" required>
                  <option value="">Select course first</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Adm. Year *</label>
                <input class="form-input" type="number" name="adm_year" min="2015" max="2030" placeholder="2024" required />
              </div>
              <div class="form-group">
                <label class="form-label">Pass-out Year *</label>
                <input class="form-input" type="number" name="pass_year" min="2015" max="2035" placeholder="2029" required />
              </div>
              <div class="form-group" style="grid-column:span 2;">
                <label class="form-label">Home Address</label>
                <input class="form-input" name="address" placeholder="City, State" />
              </div>
            </div>

            <hr style="border-color:var(--border-subtle);margin:var(--space-5) 0;" />
            <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-4);">
              <input type="checkbox" id="also-alloc" style="width:15px;height:15px;" />
              <label for="also-alloc" style="font-size:var(--text-sm);cursor:pointer;font-weight:500;">Assign room immediately</label>
            </div>
            <div id="alloc-room-wrap" style="display:none;margin-bottom:var(--space-4);">
              <label class="form-label">Room</label>
              <select class="form-select" name="alloc_room" id="alloc-room-select">
                <option value="">— pick gender first —</option>
              </select>
            </div>

            <button type="submit" class="btn btn-primary" style="width:100%;" id="add-btn">Register Student</button>
          </form>
        </div>

        <!-- RIGHT: Students list + quick allocate -->
        <div>
          <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-tertiary);margin-bottom:var(--space-5);">
            Students (${m.length})
          </div>
          <div id="quick-alloc-msg"></div>
          <div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-bottom:var(--space-3);">Unallocated · click  Assign to allocate a room</div>
          <div style="display:flex;flex-direction:column;gap:var(--space-3);" id="student-quick-list">
            ${m.map(f=>`
              <div style="display:flex;align-items:center;justify-content:space-between;padding:var(--space-3) var(--space-4);background:var(--bg-elevated);border-radius:var(--radius-md);border:1px solid var(--border-subtle);gap:var(--space-3);">
                <div>
                  <div style="font-size:var(--text-sm);font-weight:500;">${I(f.name)}</div>
                  <div style="font-size:var(--text-xs);color:var(--text-tertiary);">${f.roll_no} · ${f.gender==="M"?"Male":"Female"} · ${f.course} Yr ${f.year}</div>
                </div>
                <div style="display:flex;align-items:center;gap:var(--space-3);flex-shrink:0;">
                  ${f.alloc_room?`<span class="cell-mono" style="font-size:var(--text-xs);color:var(--accent-green);">${f.alloc_room}</span>`:`<select class="form-select" style="padding:4px 8px;font-size:var(--text-xs);min-width:130px;" data-stu="${f.student_id}" data-gender="${f.gender}" id="qs-room-${f.student_id}">
                        <option value="">— room —</option>
                        ${re(p,f.gender,f.course).map(se).join("")}
                      </select>
                      <button class="btn btn-sm btn-primary" data-assign="${f.student_id}" style="white-space:nowrap;">Assign</button>`}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `,document.getElementById("also-alloc").addEventListener("change",f=>{document.getElementById("alloc-room-wrap").style.display=f.target.checked?"":"none",x()}),document.getElementById("add-gender").addEventListener("change",x),document.getElementById("add-course").addEventListener("change",f=>{const B=f.target.value==="MBBS"?5:f.target.value==="B.Tech"?4:0,d=document.getElementById("add-year");d.innerHTML=B?'<option value="">Select</option>'+Array.from({length:B},(w,v)=>`<option value="${v+1}">Year ${v+1}</option>`).join(""):'<option value="">Select course first</option>',x()});function x(){const f=document.getElementById("add-gender").value,B=document.getElementById("add-course").value,d=re(p,f,B),w=document.getElementById("alloc-room-select"),v=V[`${f}-${B}`]?`Floor ${V[`${f}-${B}`].floor} rooms`:"rooms";w.innerHTML=d.length?`<option value="">— pick a room (${v}) —</option>${d.map(se).join("")}`:`<option value="">No vacant ${v}</option>`}y.querySelectorAll("[data-assign]").forEach(f=>{f.addEventListener("click",async()=>{const B=f.dataset.assign,d=document.getElementById(`qs-room-${B}`),w=d==null?void 0:d.value;if(!w){C("Select a room first.","error");return}f.disabled=!0,f.textContent="…";try{await $.post("/rooms/direct-allocate",{student_id:B,room_id:w}),C("Room assigned!","success"),await s()}catch(v){C(v.message,"error"),f.disabled=!1,f.textContent="Assign"}})}),document.getElementById("add-form").addEventListener("submit",async f=>{f.preventDefault();const B=new FormData(f.target),d=Object.fromEntries(B.entries());d.hostel=d.gender==="M"?"Senior MBBS boys hostel":d.gender==="F"?"Senior MBBS girls hostel":"";const w=document.getElementById("add-btn"),v=document.getElementById("add-msg");w.disabled=!0,w.textContent="Registering…",v.innerHTML="";try{const g=await $.post("/students",d);document.getElementById("also-alloc").checked&&d.alloc_room&&await $.post("/rooms/direct-allocate",{student_id:g.student_id,room_id:d.alloc_room}),v.innerHTML=`<div style="background:color-mix(in srgb,var(--accent-green) 10%,transparent);border:1px solid color-mix(in srgb,var(--accent-green) 25%,transparent);border-radius:8px;padding:var(--space-3) var(--space-4);font-size:var(--text-sm);color:var(--accent-green);margin-bottom:var(--space-4);">
          ✓ ${g.name} registered. ID: <strong>${g.student_id}</strong> · Login: <strong>${g.default_password}</strong>
        </div>`,f.target.reset(),document.getElementById("alloc-room-wrap").style.display="none",await s()}catch(g){v.innerHTML=`<div style="background:color-mix(in srgb,var(--accent-red) 10%,transparent);border:1px solid color-mix(in srgb,var(--accent-red) 25%,transparent);border-radius:8px;padding:var(--space-3) var(--space-4);font-size:var(--text-sm);color:var(--accent-red);margin-bottom:var(--space-4);">${g.message}</div>`,w.disabled=!1,w.textContent="Register Student"}})}function E(){const y=document.getElementById("rm-panel-pending"),x=i.filter(d=>d.status==="pending"),f=o.filter(d=>d.status==="pending");if(!x.length&&!f.length){y.innerHTML='<p style="padding:var(--space-10);text-align:center;color:var(--text-tertiary);">No pending requests. All clear.</p>';return}let B="";x.length&&(B+=`<div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-tertiary);margin-bottom:var(--space-4);">Booking Requests (${x.length})</div>
      <div style="display:flex;flex-direction:column;gap:var(--space-3);margin-bottom:var(--space-8);">
        ${x.map(d=>{var w;return`
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-3);padding:var(--space-4) var(--space-5);background:var(--bg-elevated);border:1px solid var(--border-subtle);border-radius:var(--radius-md);">
            <div>
              <div style="font-weight:500;font-size:var(--text-sm);">${I(d.student_name)} <span style="font-size:var(--text-xs);color:var(--text-tertiary);font-weight:400;">· ${d.roll_no}</span></div>
              <div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-top:2px;">Room <strong style="color:var(--text-secondary);">${d.room_id}</strong> · ${I(d.room_hostel||d.hostel)} · Floor ${d.floor} · ${d.type} · ${d.current_occupancy}/${d.capacity}</div>
              ${d.preferences?`<div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-top:2px;">Pref: ${I(d.preferences)}</div>`:""}
              <div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-top:2px;">${(w=d.created_at)==null?void 0:w.slice(0,10)}</div>
            </div>
            <div style="display:flex;gap:var(--space-2);">
              <button class="btn btn-sm btn-primary" data-breq="${d.request_id}" data-action="approved">Approve</button>
              <button class="btn btn-sm btn-secondary" style="color:var(--accent-red);" data-breq="${d.request_id}" data-action="rejected">Reject</button>
            </div>
          </div>`}).join("")}
      </div>`),f.length&&(B+=`<div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-tertiary);margin-bottom:var(--space-4);">Room Change Requests (${f.length})</div>
      <div style="display:flex;flex-direction:column;gap:var(--space-3);">
        ${f.map(d=>{var w;return`
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-3);padding:var(--space-4) var(--space-5);background:var(--bg-elevated);border:1px solid var(--border-subtle);border-radius:var(--radius-md);">
            <div>
              <div style="font-weight:500;font-size:var(--text-sm);">${I(d.student_name)} <span style="font-size:var(--text-xs);color:var(--text-tertiary);font-weight:400;">· ${d.roll_no}</span></div>
              <div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-top:2px;"><strong style="color:var(--text-secondary);">${d.from_room_id}</strong> → <strong style="color:var(--text-secondary);">${d.to_room_id}</strong> · ${I(d.to_hostel)} · Fl ${d.to_floor} · ${d.to_occupancy}/${d.to_capacity}</div>
              <div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-top:2px;">Reason: ${I(d.reason)}</div>
              <div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-top:2px;">${(w=d.created_at)==null?void 0:w.slice(0,10)}</div>
            </div>
            <div style="display:flex;gap:var(--space-2);">
              <button class="btn btn-sm btn-primary" data-creq="${d.change_id}" data-action="approved">Approve</button>
              <button class="btn btn-sm btn-secondary" style="color:var(--accent-red);" data-creq="${d.change_id}" data-action="rejected">Reject</button>
            </div>
          </div>`}).join("")}
      </div>`),y.innerHTML=B,y.querySelectorAll("[data-breq]").forEach(d=>{d.addEventListener("click",async()=>{d.disabled=!0;try{await $.patch(`/rooms/booking-requests/${d.dataset.breq}`,{status:d.dataset.action}),C(`Request ${d.dataset.action}.`,"success"),await s()}catch(w){C(w.message,"error"),d.disabled=!1}})}),y.querySelectorAll("[data-creq]").forEach(d=>{d.addEventListener("click",async()=>{d.disabled=!0;try{await $.patch(`/rooms/change-requests/${d.dataset.creq}`,{status:d.dataset.action}),C(`Room change ${d.dataset.action}.`,"success"),await s()}catch(w){C(w.message,"error"),d.disabled=!1}})})}function u(){const y=document.getElementById("rm-panel-history"),x=n?i.filter(d=>d.room_hostel===n||d.hostel===n):i,f=n?o.filter(d=>d.from_hostel===n||d.to_hostel===n):o,B=[...x.map(d=>({type:"booking",...d})),...f.map(d=>({type:"change",...d}))].sort((d,w)=>(w.created_at||"").localeCompare(d.created_at||""));if(!B.length){y.innerHTML='<p style="padding:var(--space-10);text-align:center;color:var(--text-tertiary);">No requests yet.</p>';return}y.innerHTML=`
      <div class="table-container">
        <table>
          <thead><tr><th>Type</th><th>Student</th><th>Details</th><th>Status</th><th>Date</th></tr></thead>
          <tbody>
            ${B.map(d=>{var g;const w=d.type==="booking"?`Room ${d.room_id} · ${I(d.room_hostel||d.hostel)} · Fl ${d.floor}`:`${d.from_room_id} → ${d.to_room_id} · ${I(d.to_hostel)}`,v=d.status==="pending"?"open":d.status==="approved"?"in-progress":"resolved";return`<tr>
                <td style="font-size:var(--text-xs);color:var(--text-tertiary);">${d.type==="booking"?"Booking":"Transfer"}</td>
                <td><div style="font-weight:500;font-size:var(--text-sm);">${I(d.student_name)}</div><div style="font-size:var(--text-xs);color:var(--text-tertiary);">${d.roll_no}</div></td>
                <td style="font-size:var(--text-xs);">${w}</td>
                <td><span class="badge badge-${v}">${d.status}</span></td>
                <td class="cell-mono">${(g=d.created_at)==null?void 0:g.slice(0,10)}</td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>`}r(),requestAnimationFrame(()=>{var y;return(y=document.getElementById("admin-rooms-page"))==null?void 0:y.classList.replace("page-enter","page-active")})}const ie=["Plumber","Electrician","WiFi","Authority","Other"],A=(t,a="")=>`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;opacity:.65;" ${a}>${t}</svg>`,Ve={Plumber:A('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),Electrician:A('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'),WiFi:A('<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>'),Authority:A('<line x1="3" y1="22" x2="21" y2="22"/><rect x="2" y="11" width="20" height="11" rx="1"/><polygon points="12 2 2 7 22 7"/><line x1="12" y1="7" x2="12" y2="11"/><rect x="9" y="15" width="6" height="7" rx="1"/>'),Other:A('<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>')},We=A('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>'),Ye=A('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>');async function Je(t){t.innerHTML='<div class="page-loading">Loading…</div>';try{const a=await $.get("/resources");Ke(t,a)}catch(a){t.innerHTML=`<div class="page-error">Failed to load: ${a.message}</div>`}}function Ke(t,a){let s=a,p="",i=null;t.innerHTML=`
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
                ${ie.map(l=>`<option value="${l}">${l}</option>`).join("")}
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
              ${ie.map(l=>`<option value="${l}">${l}</option>`).join("")}
            </select>
          </div>
        </div>
        <div id="resources-body"></div>
      </div>
    </div>
  `;function o(){const l=p?s.filter(c=>c.category===p):s,n=document.getElementById("resources-body");if(l.length===0){n.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No contacts in this category.</p>';return}const e={};l.forEach(c=>{e[c.category]||(e[c.category]=[]),e[c.category].push(c)}),n.innerHTML=Object.entries(e).map(([c,r])=>`
      <div style="padding: var(--space-4) var(--space-6);">
        <div style="display:flex; align-items:center; gap:6px; font-size: var(--text-xs); font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: var(--text-tertiary); margin-bottom: var(--space-3);">
          ${Ve[c]||""} ${c}
        </div>
        ${r.map(b=>`
          <div class="contact-row" style="margin-bottom: var(--space-2);">
            <div class="contact-avatar">${b.name[0].toUpperCase()}</div>
            <div class="contact-info" style="flex:1;">
              <div class="contact-name">${b.name}</div>
              <div class="contact-meta" style="display:flex; flex-wrap:wrap; align-items:center; gap:var(--space-4);">
                ${b.phone?`<span style="display:inline-flex;align-items:center;gap:4px;">${We}<a href="tel:${b.phone}" style="color:inherit;">${b.phone}</a></span>`:""}
                ${b.email?`<span style="display:inline-flex;align-items:center;gap:4px;">${Ye}<a href="mailto:${b.email}" style="color:inherit;">${b.email}</a></span>`:""}
              </div>
              ${b.notes?`<div style="font-size:var(--text-xs); color:var(--text-tertiary); margin-top:2px;">${b.notes}</div>`:""}
            </div>
            <div style="display:flex; gap:4px; flex-shrink:0;">
              <button class="btn btn-sm btn-secondary" data-edit="${b.resource_id}">Edit</button>
              <button class="btn btn-sm btn-secondary" data-delete="${b.resource_id}" style="color:var(--accent-red);">Del</button>
            </div>
          </div>
        `).join("")}
        <hr style="border:none; border-top: 1px solid var(--border-subtle); margin: var(--space-3) 0;" />
      </div>
    `).join(""),n.querySelectorAll("[data-edit]").forEach(c=>{c.addEventListener("click",()=>{const r=s.find(b=>b.resource_id===+c.dataset.edit);r&&(i=r.resource_id,document.getElementById("res-cat").value=r.category,document.getElementById("res-name").value=r.name,document.getElementById("res-phone").value=r.phone||"",document.getElementById("res-email").value=r.email||"",document.getElementById("res-notes").value=r.notes||"",document.getElementById("resource-form-title").textContent="Edit Contact",document.getElementById("btn-res-submit").textContent="Save Changes",document.getElementById("btn-res-cancel").style.display="",document.getElementById("resource-form").scrollIntoView({behavior:"smooth"}))})}),n.querySelectorAll("[data-delete]").forEach(c=>{c.addEventListener("click",async()=>{if(confirm("Delete this contact?")){c.disabled=!0;try{await $.delete(`/resources/${c.dataset.delete}`),s=s.filter(r=>r.resource_id!==+c.dataset.delete),C("Contact deleted.","success"),o()}catch(r){C(r.message,"error"),c.disabled=!1}}})})}document.getElementById("cat-filter-select").addEventListener("change",l=>{p=l.target.value,o()}),document.getElementById("btn-res-cancel").addEventListener("click",()=>{i=null,document.getElementById("resource-form").reset(),document.getElementById("resource-form-title").textContent="Add New Contact",document.getElementById("btn-res-submit").textContent="Add Contact",document.getElementById("btn-res-cancel").style.display="none"});const m=document.getElementById("resource-form");m.addEventListener("submit",async l=>{l.preventDefault(),t.querySelectorAll(".form-error").forEach(E=>E.classList.remove("visible"));let n=!0;const e=document.getElementById("res-cat").value,c=document.getElementById("res-name").value.trim();if(e||(document.getElementById("err-res-cat").classList.add("visible"),n=!1),c||(document.getElementById("err-res-name").classList.add("visible"),n=!1),!n)return;const r={category:e,name:c,phone:document.getElementById("res-phone").value.trim()||null,email:document.getElementById("res-email").value.trim()||null,notes:document.getElementById("res-notes").value.trim()||null},b=document.getElementById("btn-res-submit");b.disabled=!0;try{if(i){const E=await $.put(`/resources/${i}`,r);s=s.map(u=>u.resource_id===i?E:u),C("Contact updated.","success"),document.getElementById("btn-res-cancel").click()}else s=[await $.post("/resources",r),...s],C("Contact added.","success"),m.reset();o()}catch(E){C(E.message,"error")}finally{b.disabled=!1}}),o(),requestAnimationFrame(()=>{var l;return(l=document.getElementById("resources-page"))==null?void 0:l.classList.replace("page-enter","page-active")})}const Qe={home:we,complaints:Be,booking:G,forum:pe,resources:qe},Xe={home:Pe,complaints:De,rooms:Ge,forum:pe,resources:Je};let z="home",W=null;function Y(){return K()==="admin"?Xe:Qe}function D(t){const a=Y();a[t]||(t="home"),z=t,window.location.hash=t;const s=document.getElementById("sidebar"),p=document.getElementById("main-content");fe(s,z,D),a[t](p,()=>D(z)),W&&W.close()}function ne(){document.body.innerHTML=`
    <div id="app">
      <aside id="sidebar" class="sidebar"></aside>
      <main id="main-content" class="main"></main>
    </div>
  `}function Ze(){if(!ue()){$e(()=>{ne(),le()});return}ne(),le()}function le(){W=be();const t=window.location.hash.replace("#","");z=Y()[t]?t:"home",D(z),window.addEventListener("hashchange",()=>{const s=window.location.hash.replace("#","");Y()[s]&&s!==z&&D(s)})}(function(){const t=localStorage.getItem("ahcms_theme")||"dark";document.documentElement.setAttribute("data-theme",t)})();Ze();
