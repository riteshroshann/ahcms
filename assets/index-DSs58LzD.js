(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))p(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function l(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function p(r){if(r.ep)return;r.ep=!0;const n=l(r);fetch(r.href,n)}})();const M="ahcms_token",T="ahcms_user";(function(){const o=localStorage.getItem("cw_hostel_token"),l=localStorage.getItem("cw_hostel_user");o&&(localStorage.setItem(M,o),localStorage.removeItem("cw_hostel_token")),l&&(localStorage.setItem(T,l),localStorage.removeItem("cw_hostel_user"))})();function D(t,o){localStorage.setItem(M,t),localStorage.setItem(T,JSON.stringify(o))}function J(){return localStorage.getItem(M)}function H(){try{return JSON.parse(localStorage.getItem(T))}catch{return null}}function z(){var t;return((t=H())==null?void 0:t.role)||null}function Z(){const t=J();if(!t)return!1;try{return JSON.parse(atob(t.split(".")[1])).exp*1e3>Date.now()}catch{return!1}}function Y(){localStorage.removeItem(M),localStorage.removeItem(T)}const $={home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',complaints:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="15" r="0.5" fill="currentColor"/></svg>',booking:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',forum:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-1"/><path d="M15 3H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l4-4h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/></svg>',rooms:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',resources:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',theme:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'},ee=[{id:"home",label:"Home",icon:$.home},{id:"complaints",label:"Complaint",icon:$.complaints},{id:"booking",label:"Room Booking",icon:$.booking},{id:"forum",label:"Community Forum",icon:$.forum},{id:"resources",label:"Resources",icon:$.resources}],te=[{id:"home",label:"Home",icon:$.home},{id:"complaints",label:"Complaints",icon:$.complaints},{id:"rooms",label:"Room Details",icon:$.rooms},{id:"forum",label:"Community Forum",icon:$.forum},{id:"resources",label:"Resources",icon:$.resources}];function ae(t,o,l){var i,s;const p=z(),r=H(),n=p==="admin"?te:ee,c=p==="admin"?"Admin Panel":"Student Portal";t.innerHTML=`
    <div class="sidebar-brand">
      <h1>AHCMS</h1>
      <span>${c}</span>
    </div>

    <div class="sidebar-user">
      <div class="sidebar-user-avatar">${((r==null?void 0:r.name)||"U")[0].toUpperCase()}</div>
      <div class="sidebar-user-info">
        <div class="sidebar-user-name">${(r==null?void 0:r.name)||"User"}</div>
        <div class="sidebar-user-role">${p==="admin"?"Administrator":(r==null?void 0:r.roll_no)||"Student"}</div>
      </div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Navigation</div>
      ${n.map(e=>`
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
        ${$.theme}
        Toggle Theme
      </button>
      <button class="nav-item logout-btn" id="nav-logout">
        ${$.logout}
        Sign Out
      </button>
      <p>v2.0 · 2026</p>
    </div>
  `,t.querySelectorAll(".nav-item[data-page]").forEach(e=>{e.addEventListener("click",()=>l(e.dataset.page)),e.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),e.click())})}),(i=document.getElementById("nav-logout"))==null||i.addEventListener("click",()=>{Y(),window.location.reload()}),(s=document.getElementById("nav-theme"))==null||s.addEventListener("click",()=>{const a=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",a),localStorage.setItem("ahcms_theme",a)})}function oe(){const t=document.createElement("button");t.className="sidebar-toggle",t.id="sidebar-toggle",t.innerHTML=$.menu,t.setAttribute("aria-label","Toggle navigation");const o=document.createElement("div");o.className="sidebar-overlay",o.id="sidebar-overlay",document.body.appendChild(t),document.body.appendChild(o);const l=document.getElementById("sidebar");function p(){l.classList.add("open"),o.classList.add("show"),t.innerHTML=$.close}function r(){l.classList.remove("open"),o.classList.remove("show"),t.innerHTML=$.menu}return t.addEventListener("click",()=>l.classList.contains("open")?r():p()),o.addEventListener("click",r),{close:r}}const se="/api";async function B(t,o,l){const p=J(),r={"Content-Type":"application/json"};p&&(r.Authorization=`Bearer ${p}`);const n=new AbortController,c=setTimeout(()=>n.abort(),1e4);try{const i=await fetch(`${se}${o}`,{method:t,headers:r,body:l!==void 0?JSON.stringify(l):void 0,signal:n.signal});if(i.status===401){Y(),window.location.reload();return}const s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||`Request failed (${i.status})`);return s}catch(i){throw i.name==="AbortError"?new Error("Request timed out — is the server running?"):i}finally{clearTimeout(c)}}const f={get:t=>B("GET",t),post:(t,o)=>B("POST",t,o),patch:(t,o)=>B("PATCH",t,o),put:(t,o)=>B("PUT",t,o),delete:t=>B("DELETE",t)};let S=null;function re(){S||(S=document.createElement("div"),S.className="toast-container",document.body.appendChild(S))}function h(t,o="info",l=3500){re();const p=document.createElement("div");p.className=`toast toast-${o}`,p.textContent=t,S.appendChild(p),requestAnimationFrame(()=>{requestAnimationFrame(()=>{p.classList.add("show")})}),setTimeout(()=>{p.classList.remove("show"),setTimeout(()=>p.remove(),300)},l)}function ie(t){var p;document.body.innerHTML=`
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
  `,(p=document.getElementById("login-theme"))==null||p.addEventListener("click",()=>{const n=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",n),localStorage.setItem("ahcms_theme",n)});let o="student";document.querySelectorAll(".login-tab").forEach(r=>{r.addEventListener("click",()=>{o=r.dataset.tab,document.querySelectorAll(".login-tab").forEach(n=>n.classList.remove("active")),r.classList.add("active"),document.getElementById("form-student").classList.toggle("hidden",o!=="student"),document.getElementById("form-admin").classList.toggle("hidden",o!=="admin"),document.getElementById("form-register").classList.add("hidden")})}),document.getElementById("btn-show-register").addEventListener("click",()=>{document.getElementById("form-admin").classList.add("hidden"),document.getElementById("form-register").classList.remove("hidden")}),document.getElementById("btn-back-login").addEventListener("click",()=>{document.getElementById("form-register").classList.add("hidden"),document.getElementById("form-admin").classList.remove("hidden")});function l(r,n){const c=document.getElementById(r);c.disabled=n,c.textContent=n?"Signing in…":"Sign In"}document.getElementById("form-student").addEventListener("submit",async r=>{r.preventDefault();const n=document.getElementById("s-roll").value.trim(),c=document.getElementById("s-pass").value,i=document.getElementById("err-student");if(i.textContent="",!n||!c){i.textContent="All fields required.";return}l("btn-student-login",!0);try{const{token:s,user:e}=await f.post("/auth/student/login",{roll_no:n,password:c});D(s,e),t()}catch(s){i.textContent=s.message}finally{l("btn-student-login",!1)}}),document.getElementById("form-admin").addEventListener("submit",async r=>{r.preventDefault();const n=document.getElementById("a-email").value.trim(),c=document.getElementById("a-pass").value,i=document.getElementById("err-admin");if(i.textContent="",!n||!c){i.textContent="All fields required.";return}l("btn-admin-login",!0);try{const{token:s,user:e}=await f.post("/auth/admin/login",{email:n,password:c});D(s,e),t()}catch(s){i.textContent=s.message}finally{l("btn-admin-login",!1)}}),document.getElementById("form-register").addEventListener("submit",async r=>{r.preventDefault();const n=document.getElementById("r-name").value.trim(),c=document.getElementById("r-email").value.trim(),i=document.getElementById("r-pass").value,s=document.getElementById("err-register");if(s.textContent="",!n||!c||!i){s.textContent="All fields required.";return}if(i.length<8){s.textContent="Password must be at least 8 characters.";return}const e=document.getElementById("btn-register");e.disabled=!0,e.textContent="Creating…";try{await f.post("/auth/admin/register",{name:n,email:c,password:i}),h("Account created! Please sign in.","success"),document.getElementById("btn-back-login").click(),document.getElementById("a-email").value=c}catch(a){s.textContent=a.message}finally{e.disabled=!1,e.textContent="Create Account"}})}async function ne(t){t.innerHTML='<div class="page-loading">Loading…</div>';try{const{student:o,allocation:l,complaints:p,wardens:r,wardenOfficePhone:n}=await f.get("/dashboard/student");le(t,o,l,p,r,n)}catch(o){t.innerHTML=`<div class="page-error">Failed to load dashboard: ${o.message}</div>`}}function le(t,o,l,p,r,n){var s;const c=r.filter(e=>e.role==="Warden"),i=r.filter(e=>e.role==="Guard");t.innerHTML=`
    <div class="page-enter" id="student-home">
      <div class="page-header">
        <h2>Welcome, ${((s=o==null?void 0:o.name)==null?void 0:s.split(" ")[0])||"Student"} 👋</h2>
        <p>${(o==null?void 0:o.course)||""} · ${(o==null?void 0:o.hostel)||""} · Year ${(o==null?void 0:o.year)||""}</p>
      </div>

      <!-- Student Info Card -->
      <div class="form-section" style="max-width: none; margin-bottom: var(--space-10);">
        <div class="form-section-title">Your Profile</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-4);">
          ${[["Roll No",o==null?void 0:o.roll_no],["Course",o==null?void 0:o.course],["Admission",o==null?void 0:o.adm_year],["Passing Year",o==null?void 0:o.pass_year],["Gender",(o==null?void 0:o.gender)==="M"?"Male":(o==null?void 0:o.gender)==="F"?"Female":o==null?void 0:o.gender],["Address",(o==null?void 0:o.address)||"—"]].map(([e,a])=>`
            <div>
              <div style="font-size: var(--text-xs); color: var(--text-tertiary); text-transform: uppercase; letter-spacing: .06em;">${e}</div>
              <div style="font-size: var(--text-sm); color: var(--text-primary); margin-top: 4px;">${a||"—"}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Room Card -->
      <div class="card-grid">
        <div class="card card-accent-blue" style="grid-column: span 2;">
          <div class="card-label">Your Room</div>
          ${l?`<div class="card-value">${l.room_id}</div>
               <div class="card-sub">${l.hostel} · Floor ${l.floor} · ${l.type} · ${l.status}</div>
               <div style="margin-top: var(--space-2); font-size: var(--text-xs); color: var(--text-tertiary);">
                 ${l.from_date} → ${l.to_date}
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
            ${n?`
              <a href="tel:${n}" style="
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
                Office: ${n}
              </a>`:""}
          </div>
          ${c.length===0?'<p class="empty-msg">No warden data available.</p>':c.map(e=>`
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
          ${i.length===0?'<p class="empty-msg">No guard data.</p>':i.map(e=>`
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
  `,t.querySelectorAll('a.link-accent[href^="#"]').forEach(e=>{e.addEventListener("click",a=>{a.preventDefault(),window.location.hash=e.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var e;return(e=document.getElementById("student-home"))==null?void 0:e.classList.replace("page-enter","page-active")})}const F=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"],_={Plumbing:"🔧",Electricity:"⚡",WiFi:"📶",Cleanliness:"🧹",Carpentry:"🔨",Other:"📋"},de=["open","in-progress","resolved"];async function ce(t){t.innerHTML='<div class="page-loading">Loading…</div>';let o=[];try{o=await f.get("/complaints")}catch(l){t.innerHTML=`<div class="page-error">Failed to load: ${l.message}</div>`;return}pe(t,o)}function pe(t,o){let l=o,p="all",r="";t.innerHTML=`
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
                ${F.map(e=>`<option value="${e}">${_[e]} ${e}</option>`).join("")}
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
          ${F.map(e=>`<option value="${e}">${_[e]} ${e}</option>`).join("")}
        </select>
      </div>

      <!-- My Complaints Table -->
      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">My Complaints</div>
          <div style="display:flex; gap: var(--space-2); flex-wrap: wrap;">
            <button class="filter-chip active" data-status="all">All</button>
            ${de.map(e=>`<button class="filter-chip" data-status="${e}">${e}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-list"></div>
      </div>
    </div>
  `;function n(){let e=l;r&&(e=e.filter(d=>d.category===r)),p!=="all"&&(e=e.filter(d=>d.status===p));const a=document.getElementById("complaints-list");if(e.length===0){a.innerHTML='<p style="padding: var(--space-8); text-align:center; color: var(--text-tertiary);">No complaints found.</p>';return}a.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>#</th><th>Category</th><th>Description</th><th>Date</th><th>Status</th><th>Note</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(d=>`
            <tr>
              <td class="cell-mono">${d.complaint_id}</td>
              <td>${_[d.category]||""} ${d.category}</td>
              <td style="max-width:220px; overflow:hidden; text-overflow:ellipsis;" title="${d.description}">${d.description.slice(0,50)}${d.description.length>50?"…":""}</td>
              <td class="cell-mono">${d.date}</td>
              <td><span class="badge badge-${d.status}">${d.status}</span></td>
              <td style="color: var(--text-tertiary); font-size: var(--text-xs);">${d.admin_note||"—"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `}document.getElementById("cat-filter-select").addEventListener("change",e=>{r=e.target.value,n()}),t.querySelectorAll("[data-status]").forEach(e=>{e.addEventListener("click",()=>{t.querySelectorAll("[data-status]").forEach(a=>a.classList.remove("active")),e.classList.add("active"),p=e.dataset.status,n()})});const c=document.getElementById("cmp-category"),i=document.getElementById("cmp-other-group");c.addEventListener("change",e=>{e.target.value==="Other"?i.style.display="":(i.style.display="none",document.getElementById("cmp-other-type").value="",document.getElementById("err-cmp-other").classList.remove("visible"))});const s=document.getElementById("complaint-form");s.addEventListener("submit",async e=>{e.preventDefault();let a=!0;t.querySelectorAll(".form-error").forEach(v=>v.classList.remove("visible"));const d=document.getElementById("cmp-category").value,u=document.getElementById("cmp-other-type").value.trim(),g=document.getElementById("cmp-desc").value.trim(),y=document.getElementById("cmp-photo").files[0];if(d||(document.getElementById("err-cmp-cat").classList.add("visible"),a=!1),d==="Other"&&!u&&(document.getElementById("err-cmp-other").classList.add("visible"),a=!1),g||(document.getElementById("err-cmp-desc").classList.add("visible"),a=!1),!a){h("Fill in all required fields.","error");return}const m=document.getElementById("cmp-submit");m.disabled=!0,m.textContent="Submitting…";try{let v=null;y&&(v=await new Promise((b,k)=>{const w=new FileReader;w.onload=()=>b(w.result),w.onerror=k,w.readAsDataURL(y)}));const x=d==="Other"&&u?`[Other: ${u}] ${g}`:g,E=await f.post("/complaints",{category:d,description:x,photo_base64:v});l=[E,...l],h(`Complaint #${E.complaint_id} submitted.`,"success"),s.reset(),n()}catch(v){h(v.message,"error")}finally{m.disabled=!1,m.textContent="Submit Complaint"}}),s.addEventListener("reset",()=>{t.querySelectorAll(".form-error").forEach(e=>e.classList.remove("visible")),document.getElementById("cmp-other-group").style.display="none"}),n(),requestAnimationFrame(()=>{var e;return(e=document.getElementById("complaints-page"))==null?void 0:e.classList.replace("page-enter","page-active")})}async function K(t){t.innerHTML='<div class="page-loading">Loading rooms…</div>';try{const[o,{allocation:l},p]=await Promise.all([f.get("/rooms"),f.get("/rooms/my-allocation"),f.get("/rooms/booking-requests")]);me(t,o,l,p)}catch(o){t.innerHTML=`<div class="page-error">Failed to load: ${o.message}</div>`}}function me(t,o,l,p){var g,y,m;const r=H(),n=o.filter(v=>v.hostel===((r==null?void 0:r.hostel)||"")),c=[...new Set(n.map(v=>v.floor))].sort((v,x)=>v-x);let s=c[0]||1,e=null;const a=p.find(v=>v.status==="pending");t.innerHTML=`
    <div class="page-enter" id="booking-page">
      <div class="page-header">
        <h2>Room Booking</h2>
        <p>Select a room from the floor plan to submit a booking request.</p>
      </div>

      ${l?`
        <div style="background:var(--bg-elevated); padding:var(--space-6); border-radius:var(--radius-lg); border:1px solid rgba(52,211,153,.3); margin-bottom:var(--space-6);">
          <div style="color:var(--text-secondary); font-size:var(--text-xs); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:var(--space-2);">Current Room Assignment</div>
          <div style="display:flex; align-items:center; gap:var(--space-3);">
            <div style="font-size:32px; font-weight:700; color:var(--accent-green); line-height:1;">${l.room_id}</div>
            <div style="border-left:1px solid var(--border-subtle); padding-left:var(--space-3);">
              <div style="font-weight:500;">${l.hostel}</div>
              <div style="font-size:var(--text-sm); color:var(--text-secondary);">Floor ${l.floor} • Management Allocated</div>
            </div>
          </div>
        </div>
      `:a?`
        <div class="alert-banner alert-amber" style="margin-bottom:var(--space-6);">
          <strong>Pending request:</strong> Room ${a.room_id} submitted on ${(g=a.created_at)==null?void 0:g.slice(0,10)}. Waiting for admin approval.
        </div>
      `:""}

      <!-- Floor Selector -->
      <div style="display:flex; align-items: center; gap: var(--space-4); margin-bottom: var(--space-6);">
        <span style="font-size: var(--text-sm); color: var(--text-secondary);">Floor:</span>
        <div class="cat-tabs" style="margin:0;">
          ${c.map(v=>`
            <button class="cat-tab${v===s?" active":""}" data-floor="${v}">Floor ${v}</button>
          `).join("")}
        </div>
      </div>

      <!-- Floor Plan -->
      <div class="form-section" style="max-width: none; margin-bottom: var(--space-6);" id="floor-plan-section">
        <div class="form-section-title" id="floor-plan-title">Floor ${s} — ${(r==null?void 0:r.hostel)||""}</div>
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
        ${p.length===0?'<p style="padding: var(--space-6); text-align:center; color:var(--text-tertiary);">No booking requests yet.</p>':`<table>
              <thead><tr><th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th><th>Status</th><th>Note</th><th>Date</th></tr></thead>
              <tbody>
                ${p.map(v=>{var x;return`
                  <tr>
                    <td class="cell-mono">${v.room_id}</td>
                    <td>${v.hostel}</td>
                    <td>${v.floor}</td>
                    <td>${v.type}</td>
                    <td><span class="badge badge-${v.status}">${v.status}</span></td>
                    <td style="color:var(--text-tertiary); font-size:var(--text-xs);">${v.admin_note||"—"}</td>
                    <td class="cell-mono">${(x=v.created_at)==null?void 0:x.slice(0,10)}</td>
                  </tr>
                `}).join("")}
              </tbody>
            </table>`}
      </div>
    </div>
  `;function d(v){const x=n.filter(b=>b.floor===v);document.getElementById("floor-plan-title").textContent=`Floor ${v} — ${(r==null?void 0:r.hostel)||""}`;const E=document.getElementById("floor-plan");if(x.length===0){E.innerHTML='<p style="color:var(--text-tertiary); padding: var(--space-4);">No rooms on this floor.</p>';return}E.innerHTML=x.map(b=>{const k=b.capacity>0?b.current_occupancy/b.capacity:0,w=k===0?"vacant":k<1?"partial":"full",X=(e==null?void 0:e.room_id)===b.room_id;return`
        <button class="room-cell ${w}${X?" selected":""}"
                data-room="${b.room_id}"
                ${w==="full"?"disabled":""}
                title="${b.room_id} · ${b.type} · ${b.current_occupancy}/${b.capacity}">
          <span class="room-cell-id">${b.room_id}</span>
          <span class="room-cell-type">${b.type[0]}</span>
          <span class="room-cell-occ">${b.current_occupancy}/${b.capacity}</span>
        </button>
      `}).join(""),E.querySelectorAll(".room-cell:not([disabled])").forEach(b=>{b.addEventListener("click",()=>{e=n.find(k=>k.room_id===b.dataset.room),d(v),u(e)})})}function u(v){const x=document.getElementById("room-detail-panel"),E=document.getElementById("room-detail-body");document.getElementById("room-detail-title").textContent=`Room ${v.room_id}`,E.innerHTML=`
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: var(--space-4);">
        ${[["Hostel",v.hostel],["Floor",v.floor],["Type",v.type],["Capacity",`${v.capacity} beds`],["Occupied",`${v.current_occupancy} / ${v.capacity}`],["Available",`${v.available_slots} slot(s)`]].map(([b,k])=>`
          <div>
            <div style="font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase; letter-spacing:.06em;">${b}</div>
            <div style="font-size:var(--text-sm); margin-top:4px; color:var(--text-primary);">${k}</div>
          </div>
        `).join("")}
      </div>
    `,x.style.display=l||a?"none":"block",(l||a)&&(x.style.display="none")}t.querySelectorAll(".cat-tab[data-floor]").forEach(v=>{v.addEventListener("click",()=>{t.querySelectorAll(".cat-tab[data-floor]").forEach(x=>x.classList.remove("active")),v.classList.add("active"),s=+v.dataset.floor,e=null,document.getElementById("room-detail-panel").style.display="none",d(s)})}),(y=document.getElementById("btn-cancel-room"))==null||y.addEventListener("click",()=>{e=null,document.getElementById("room-detail-panel").style.display="none",d(s)}),(m=document.getElementById("booking-form"))==null||m.addEventListener("submit",async v=>{if(v.preventDefault(),!e)return;const x=document.getElementById("booking-pref").value.trim(),E=document.getElementById("btn-book");E.disabled=!0,E.textContent="Submitting…";try{await f.post("/rooms/book",{room_id:e.room_id,preferences:x}),h(`Booking request for ${e.room_id} submitted!`,"success"),K(t)}catch(b){h(b.message,"error"),E.disabled=!1,E.textContent="Request This Room"}}),d(s),requestAnimationFrame(()=>{var v;return(v=document.getElementById("booking-page"))==null?void 0:v.classList.replace("page-enter","page-active")})}async function Q(t){t.innerHTML='<div class="page-loading">Loading forum…</div>';try{const o=await f.get("/forum");ve(t,o)}catch(o){t.innerHTML=`<div class="page-error">Failed to load forum: ${o.message}</div>`}}function ve(t,o){const l=z()==="admin";let p=o;t.innerHTML=`
    <div class="page-enter" id="forum-page">
      <div class="page-header">
        <h2>Community Forum</h2>
        <p>${l?"Read all campus posts — posting is disabled for admins.":"Share thoughts anonymously with your campus community."}</p>
      </div>

      ${l?`
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
  `;function r(){const c=document.getElementById("forum-feed"),i=document.getElementById("forum-empty");if(p.length===0){c.innerHTML="",i.style.display="block";return}i.style.display="none",c.innerHTML=p.map(s=>`
      <div class="forum-post card" style="background:var(--bg-primary); padding:var(--space-4); margin-bottom:var(--space-4); border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
        <div class="forum-post-header" style="display:flex; align-items:center; gap:var(--space-3); margin-bottom:var(--space-2);">
          <div class="forum-avatar" style="font-size:24px; background:transparent; border:none;">${s.avatar_icon||"👤"}</div>
          <div>
            <div class="forum-post-title" style="font-weight:600; color:var(--text-primary);">${L(s.title)}</div>
            <div class="forum-post-meta" style="font-size:var(--text-xs); color:var(--text-tertiary);">${L(s.avatar_name||"Anonymous")} · ${j(s.created_at)}</div>
          </div>
        </div>
        <div class="forum-post-body" style="font-size:var(--text-sm); color:var(--text-secondary); line-height:1.6; margin-left:var(--space-10); margin-bottom:var(--space-3);">${L(s.content)}</div>
        
        <div class="forum-post-actions" style="margin-left:var(--space-10); display:flex; gap:var(--space-4); align-items:center; margin-bottom:var(--space-2);">
          <div style="display:flex; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--border-subtle); overflow:hidden;">
            <button class="vote-btn" data-type="post" data-id="${s.post_id}" data-dir="up" style="background:transparent; border:none; padding:4px 8px; cursor:pointer; color:var(--text-secondary);">⇧ ${s.upvotes||0}</button>
            <div style="width:1px; background:var(--border-subtle);"></div>
            <button class="vote-btn" data-type="post" data-id="${s.post_id}" data-dir="down" style="background:transparent; border:none; padding:4px 8px; cursor:pointer; color:var(--text-secondary);">⇩ ${s.downvotes||0}</button>
          </div>
          ${l?"":`<button class="reply-toggle-btn" data-post-id="${s.post_id}" style="background:transparent; border:none; color:var(--text-tertiary); font-size:var(--text-xs); cursor:pointer; display:flex; gap:4px; align-items:center;">💬 Reply</button>`}
        </div>

        <!-- Replies -->
        ${s.replies&&s.replies.length>0?`
          <div class="forum-replies" style="margin-left:var(--space-10); border-left:2px solid var(--border-subtle); padding-left:var(--space-4); margin-top:var(--space-4); display:flex; flex-direction:column; gap:var(--space-4);">
            ${s.replies.map(e=>`
              <div class="forum-reply">
                <div class="forum-post-header" style="display:flex; align-items:center; gap:var(--space-2); margin-bottom:4px;">
                  <div class="forum-avatar" style="font-size:16px; background:transparent; border:none; width:auto; height:auto;">${e.avatar_icon||"👤"}</div>
                  <div class="forum-post-meta" style="font-size:var(--text-xs); color:var(--text-tertiary);">${L(e.avatar_name||"Anonymous")} · ${j(e.created_at)}</div>
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
        ${l?"":`
          <div id="reply-form-${s.post_id}" style="display:none; margin-left:var(--space-10); margin-top:var(--space-4);">
            <textarea id="reply-input-${s.post_id}" class="form-textarea" rows="2" placeholder="Write an anonymous reply..." style="padding:var(--space-2); min-height:60px;"></textarea>
            <div style="margin-top:var(--space-2); display:flex; gap:var(--space-2);">
              <button class="btn btn-primary reply-submit-btn" data-post-id="${s.post_id}" style="padding:4px 12px; font-size:12px;">Submit Reply</button>
              <button class="btn btn-secondary reply-toggle-btn" data-post-id="${s.post_id}" style="padding:4px 12px; font-size:12px;">Cancel</button>
            </div>
          </div>
        `}
      </div>
    `).join("")}if(document.getElementById("forum-feed").addEventListener("click",async c=>{const i=c.target.closest(".vote-btn");if(i&&!i.disabled){const a=i.dataset.type,d=i.dataset.id,u=i.dataset.dir;i.disabled=!0;try{const g=await f.patch("/forum/vote",{type:a,id:parseInt(d,10),dir:u});if(a==="post"){const y=p.find(m=>m.post_id===parseInt(d,10));y&&(y.upvotes=g.upvotes,y.downvotes=g.downvotes)}else for(const y of p)if(y.replies){const m=y.replies.find(v=>v.reply_id===parseInt(d,10));if(m){m.upvotes=g.upvotes,m.downvotes=g.downvotes;break}}r()}catch(g){h(g.message,"error"),i.disabled=!1}return}const s=c.target.closest(".reply-toggle-btn");if(s){const a=s.dataset.postId,d=document.getElementById(`reply-form-${a}`);d&&(d.style.display=d.style.display==="none"?"block":"none");return}const e=c.target.closest(".reply-submit-btn");if(e){const a=e.dataset.postId,d=document.getElementById(`reply-input-${a}`),u=d==null?void 0:d.value.trim();if(!u){h("Reply content cannot be empty","error");return}e.disabled=!0,e.textContent="...";try{const g=await f.post(`/forum/${a}/reply`,{content:u}),y=p.find(m=>m.post_id===parseInt(a,10));y&&(y.replies||(y.replies=[]),y.replies.push(g)),h("Reply posted","success"),r()}catch(g){h(g.message,"error"),e.disabled=!1,e.textContent="Submit Reply"}return}}),!l){const c=document.getElementById("forum-form");c.addEventListener("submit",async i=>{i.preventDefault();let s=!0;t.querySelectorAll(".form-error").forEach(u=>u.classList.remove("visible"));const e=document.getElementById("f-title").value.trim(),a=document.getElementById("f-content").value.trim();if(e||(document.getElementById("err-f-title").classList.add("visible"),s=!1),a||(document.getElementById("err-f-content").classList.add("visible"),s=!1),!s)return;const d=document.getElementById("btn-post");d.disabled=!0,d.textContent="Posting…";try{p=[await f.post("/forum",{title:e,content:a}),...p],h("Posted anonymously!","success"),c.reset(),r()}catch(u){h(u.message,"error")}finally{d.disabled=!1,d.textContent="Post Anonymously"}}),c.addEventListener("reset",()=>t.querySelectorAll(".form-error").forEach(i=>i.classList.remove("visible")))}r(),requestAnimationFrame(()=>{var c;return(c=document.getElementById("forum-page"))==null?void 0:c.classList.replace("page-enter","page-active")})}function L(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function j(t){try{return new Date(t).toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}const N=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ue={breakfast:[["Poori Chole","Matter Kulcha","Kachori Bhaji","Dosa Sambar","Pav Bhaji","Macaroni","Aloo Paratha"],["Chacos","Idli Sambar","Daliya","Chana Chaat","Corn Flakes","Idli Sambar","Cut Fruits"],["Egg","Banana","Egg","—","Egg","—","—"],["Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee"],["Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam"]],lunch:[["Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad"],["Boondi Raita","Mix Veg Raita","Lauki Raita","Mix Veg Raita","Boondi Raita","Mix Veg Raita","Mint Raita"],["A / P / C","A / P / C","A / P / C","A / P / C","A / P / C","A / P / C","A / P / C"],["Mix Dal Tadka","Chole Masala","Kadi Pakora","Lobhiya / Masoor Dal","Rajma Masala","Dal Makhani","Dal Tadka"],["Matar Paneer","Aloo Nutrela","Mixed Vegetable","Paneer Do Pyaza","Handi Kofta Curry","Aloo Gobhi Masala","Chap Masala"],["Aloo Palak","Boiled Rice","Soya Chap Gravy","Boiled Rice","Boiled Rice","Boiled Rice","Veg Biryani"],["Boiled Rice","Chapathi","Jeera Rice","Cut Fruits","Chapathi","Chapathi","Chapathi"],["Chapathi","Ice Cream","Chapathi","Chapathi","—","Besan Barfi","Fruit Custard"]],hitea:[["Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee"],["Veg Hakka Noodles","Bhaji Pakora","Veg Sandwich","Bread Pakora","Cake Slice","Potato Wedges","Aloo Sandwich"]],dinner:[["Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad"],["Dal Bukhara","Curd","Rajma Masala","Curd","Dal Palak","Khichdi","Curd"],["Veg Jalfrezi","Arhar Dal Fry","Palak Paneer","Mix Dal Tadka","Soya Matar Masala","Mix Vegetable","Dal Dhaba"],["Jeera Pulao","Crispy Veg Sweet Chilly","Onion Pulao","Aloo Chole","Tomato Rice","Chapati","Paneer Lababdar"],["Chapathi","Aloo Jeera","Chapathi","Masala Rice","Chapathi","Hot Milk","Jeera Pulao"],["Milk","Soya Biryani","Milk","Chapathi","Milk","—","Chapathi"],["Rice Kheer","Chapathi","Fruit Custard","Milk","Boondi","—","Milk"]]},ge=[{key:"breakfast",label:"Breakfast",time:"7:30 – 9:30 AM"},{key:"lunch",label:"Lunch",time:"12:30 – 2:30 PM"},{key:"hitea",label:"Evening Hi-Tea",time:"5:00 – 6:30 PM"},{key:"dinner",label:"Dinner",time:"7:30 – 9:30 PM"}];function ye(){const t=new Date().getDay();return t===0?6:t-1}function fe(){const t=new Date().getHours();return t<10?"breakfast":t<15?"lunch":t<19?"hitea":"dinner"}async function be(t){t.innerHTML='<div class="page-loading">Loading…</div>';let o=[];try{o=await f.get("/resources")}catch{}he(t,o)}function he(t,o){const l=ye();let p=fe(),r=l;if(t.innerHTML=`
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
          ${ge.map(c=>`
            <button data-meal="${c.key}" class="res-meal-tab${c.key===p?" active":""}">
              <span class="res-meal-name">${c.label}</span>
              <span class="res-meal-time">${c.time}</span>
            </button>
          `).join("")}
        </div>

        <!-- Day selector -->
        <div style="display:flex; gap:var(--space-2); margin-bottom:var(--space-5); flex-wrap:wrap;" id="day-tabs">
          ${N.map((c,i)=>`
            <button class="res-day-tab${i===r?" active":""}" data-day="${i}">
              ${c.slice(0,3)}${i===l?" ·":""}
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
        ${A("Pharmacy",`
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
        ${A("Hospital Appointment",`
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
        ${A("Laundry",`
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-6);">
            <div>
              <div class="res-info-place" style="margin-bottom:var(--space-4);">Collection</div>
              ${[["Monday","Boys Hostel (Senior MBBS)"],["Tuesday","Girls Hostel (Senior MBBS)"],["Wednesday","Sardha Block A & B"]].map(([c,i])=>`<div class="res-laundry-row"><span>${c}</span><span>${i}</span></div>`).join("")}
            </div>
            <div>
              <div class="res-info-place" style="margin-bottom:var(--space-4);">Delivery</div>
              ${[["Thursday","Boys Hostel (Senior MBBS)"],["Friday","Girls Hostel (Senior MBBS)"],["Saturday","Sardha Block A & B"]].map(([c,i])=>`<div class="res-laundry-row"><span>${c}</span><span>${i}</span></div>`).join("")}
            </div>
          </div>
          <div class="res-info-block" style="margin-top:var(--space-6); padding-top:var(--space-6); border-top:1px solid var(--border-subtle);">
            <div class="res-info-line">Label all items with name & roll number. Dry-clean items separately.</div>
            <a href="tel:9999000001" class="res-phone" style="margin-top:var(--space-3);">9999-000-001</a>
          </div>
        `)}

        <!-- Canteens -->
        ${A("Canteens",`
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
          <div id="contacts-body">${xe(o)}</div>
        </section>
      `:""}

    </div>
  `,!document.getElementById("res-styles")){const c=document.createElement("style");c.id="res-styles",c.textContent=`
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
        padding: var(--space-3) var(--space-5);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-md);
        background: var(--bg-elevated);
        cursor: pointer;
        transition: all .15s;
        text-align: left;
        gap: 2px;
      }
      .res-meal-tab:hover { border-color: var(--border-default); }
      .res-meal-tab.active {
        border-color: var(--text-primary);
        background: var(--text-primary);
        color: var(--text-inverse);
      }
      .res-meal-name { font-size: var(--text-sm); font-weight: 600; }
      .res-meal-time { font-size: 10px; opacity: .6; }
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
    `,document.head.appendChild(c)}function n(){const c=ue[p],i=document.getElementById("menu-panel");i&&(i.innerHTML=`
      <table>
        <thead>
          <tr>
            ${N.map((s,e)=>`<th class="${e===r?"today":""}">${s}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${c.map(s=>`
            <tr>
              ${s.map((e,a)=>`<td class="${a===r?"today":""}">${e}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    `)}document.getElementById("meal-tabs").querySelectorAll(".res-meal-tab").forEach(c=>{c.addEventListener("click",()=>{document.getElementById("meal-tabs").querySelectorAll(".res-meal-tab").forEach(i=>i.classList.remove("active")),c.classList.add("active"),p=c.dataset.meal,n()})}),document.getElementById("day-tabs").querySelectorAll(".res-day-tab").forEach(c=>{c.addEventListener("click",()=>{document.getElementById("day-tabs").querySelectorAll(".res-day-tab").forEach(i=>i.classList.remove("active")),c.classList.add("active"),r=+c.dataset.day,n()})}),n(),requestAnimationFrame(()=>{var c;return(c=document.getElementById("res-page"))==null?void 0:c.classList.replace("page-enter","page-active")})}function A(t,o){return`
    <div class="res-big-card">
      <div class="res-card-title">${t}</div>
      ${o}
    </div>
  `}function xe(t){const o={Plumber:"Plumber",Electrician:"Electrician",WiFi:"Wi-Fi / IT",Authority:"Authority",Other:"Other"},l={};return t.forEach(p=>{(l[p.category]=l[p.category]||[]).push(p)}),`
    <div class="res-staff-grid">
      ${Object.entries(l).map(([p,r])=>`
        <div class="res-staff-card">
          <div class="res-staff-cat">${o[p]||p}</div>
          ${r.map(n=>`
            <div class="res-staff-entry">
              <div class="res-staff-name">${n.name}</div>
              ${n.phone?`<a href="tel:${n.phone}" style="display:block;font-size:var(--text-xs);font-family:var(--font-mono);font-weight:600;color:var(--text-primary);text-decoration:none;margin-top:2px;">${n.phone}</a>`:""}
              ${n.notes?`<div class="res-staff-meta">${n.notes}</div>`:""}
            </div>
          `).join("")}
        </div>
      `).join("")}
    </div>
  `}async function $e(t){let o="";async function l(){t.innerHTML='<div class="page-loading">Loading</div>';try{const r=o?`?hostel=${encodeURIComponent(o)}`:"",[n,c]=await Promise.all([f.get(`/dashboard/admin${r}`),f.get("/rooms")]),i=[...new Set(c.map(s=>s.hostel))].sort();p(t,n,i,o,l)}catch(r){t.innerHTML=`<div class="page-error">Failed to load: ${r.message}</div>`}}await l();function p(r,{stats:n,recentComplaints:c,wardens:i,wardenOfficePhone:s},e,a,d){const u=i.filter(m=>m.role==="Warden"),g=i.filter(m=>m.role==="Guard"),y=n.totalCapacity>0?Math.round(n.totalOccupied/n.totalCapacity*100):0;r.innerHTML=`
      <div class="page-enter" id="admin-home">
        <div class="page-header" style="display: flex; justify-content: space-between; align-items: flex-end;">
          <div>
            <h2>Admin Dashboard</h2>
            <p>System-wide overview  hostel occupancy, complaints, and on-duty staff.</p>
          </div>
          <div style="display: flex; align-items: center; gap: var(--space-3);">
            <label style="font-size: var(--text-sm); color: var(--text-secondary);">Filter by Hostel:</label>
            <select class="form-input" id="hostel-filter" style="width: auto; min-width: 250px; padding: var(--space-2); height: auto;">
              <option value="">All Hostels</option>
              ${e.map(m=>`<option value="${m}" ${m===a?"selected":""}>${Ee(m)}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Stat Cards -->
        <div class="card-grid">
          <div class="card card-accent-blue">
            <div class="card-label">Total Rooms</div>
            <div class="card-value">${n.totalRooms}</div>
            <div class="card-sub">${n.vacantRooms} vacant  ${y}% utilized</div>
          </div>
          <div class="card card-accent-amber">
            <div class="card-label">Open Complaints</div>
            <div class="card-value">${n.openComplaints}</div>
            <div class="card-sub">${n.inProgressComplaints} in progress</div>
          </div>
          <div class="card card-accent-green">
            <div class="card-label">Resolved</div>
            <div class="card-value">${n.resolvedComplaints}</div>
            <div class="card-sub">complaints closed</div>
          </div>
          <div class="card card-accent-purple">
            <div class="card-label">Students</div>
            <div class="card-value">${n.totalStudents}</div>
            <div class="card-sub">${n.pendingBookings} pending bookings</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6);">
          <!-- On-duty Wardens -->
          <div class="form-section" style="max-width: none;">
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:var(--space-2); margin-bottom:var(--space-4);">
              <div class="form-section-title" style="margin-bottom:0;">On-Duty Wardens</div>
              ${s?`
                <a href="tel:${s}" style="
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
                  Office: ${s}
                </a>`:""}
            </div>
            ${u.length===0?'<p class="empty-msg">No warden data available.</p>':u.map(m=>`
              <div class="contact-row" style="align-items: flex-start;">
                <div class="contact-avatar">${m.name[0]}</div>
                <div class="contact-info" style="flex: 1;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2px;">
                    <div class="contact-name">${m.name}</div>
                    <a href="tel:${m.phone}" class="contact-phone" style="margin-left: auto;">${m.phone||""}</a>
                  </div>
                  <div class="contact-meta">${m.hostel}  ${m.email||""}</div>
                  <div style="display: flex; flex-wrap: wrap; gap: 12px; font-size: 11px; margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--border-color); color: var(--text-secondary);">
                    <span><span style="font-weight:600; color:var(--text-tertiary);">Last:</span> ${m.previous?m.previous.name:"Unknown"}</span>
                    <span style="color:var(--accent-green);"><span style="font-weight:600;">Current:</span> Active</span>
                    <span><span style="font-weight:600; color:var(--text-tertiary);">Next:</span> ${m.next?m.next.name:"Unknown"}</span>
                  </div>
                </div>
              </div>
            `).join("")}
            <div class="form-section-title" style="margin-top: var(--space-5);">On-Duty Guards</div>
            ${g.length===0?'<p class="empty-msg">No guard data.</p>':g.map(m=>`
              <div class="contact-row">
                <div class="contact-avatar guard">${m.name[0]}</div>
                <div class="contact-info">
                  <div class="contact-name">${m.name}</div>
                  <div class="contact-meta">${m.hostel}  ${m.shift} shift</div>
                </div>
                <a href="tel:${m.phone}" class="contact-phone">${m.phone||""}</a>
              </div>
            `).join("")}
          </div>

          <!-- Recent Complaints -->
          <div class="form-section" style="max-width: none;">
            <div class="form-section-title">Recent Complaints</div>
            ${c.length===0?'<p class="empty-msg">No recent complaints.</p>':`
            <div class="activity-list">
              ${c.map(m=>`
                  <div class="activity-item">
                    <div class="activity-dot" style="background:${m.status==="open"?"var(--accent-amber)":m.status==="in-progress"?"var(--accent-blue)":"var(--accent-green)"}"></div>
                    <div class="activity-content">
                      <div class="activity-text">
                        <strong>${m.student_name||m.student_id}</strong>  ${m.category}
                        <span class="badge badge-${m.status}">${m.status}</span>
                      </div>
                      <div class="activity-time">${m.date}  ${m.room_id||""}</div>
                    </div>
                  </div>
                `).join("")}
            </div>
            `}
            <a class="link-accent" href="#complaints" style="display:block;margin-top:var(--space-4);font-size:var(--text-sm);">Manage all complaints </a>
          </div>
        </div>

        <!-- Occupancy Bar -->
        <div class="form-section" style="max-width: none; margin-top: var(--space-6);">
          <div class="form-section-title">Occupancy Overview</div>
          <div class="occ-overview">
            <div class="occ-track-outer">
              <div class="occ-track-inner" style="width: ${y}%"></div>
            </div>
            <span style="font-size:var(--text-sm); color:var(--text-secondary);">${n.totalOccupied} / ${n.totalCapacity} beds  ${y}%</span>
          </div>
          <div class="card-grid" style="margin-top: var(--space-4); margin-bottom: 0;">
            <div class="card" style="text-align:center;">
              <div class="card-label">Total Beds</div>
              <div class="card-value" style="font-size:var(--text-2xl);">${n.totalCapacity}</div>
            </div>
            <div class="card" style="text-align:center;">
              <div class="card-label">Occupied</div>
              <div class="card-value" style="font-size:var(--text-2xl);">${n.totalOccupied}</div>
            </div>
            <div class="card" style="text-align:center;">
              <div class="card-label">Vacant</div>
              <div class="card-value" style="font-size:var(--text-2xl); color: var(--accent-green);">${n.totalCapacity-n.totalOccupied}</div>
            </div>
          </div>
        </div>
      </div>
    `,r.querySelector("#hostel-filter").addEventListener("change",m=>{a=m.target.value,d()}),r.querySelectorAll('a.link-accent[href^="#"]').forEach(m=>{m.addEventListener("click",v=>{v.preventDefault(),window.location.hash=m.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var m;return(m=document.getElementById("admin-home"))==null?void 0:m.classList.replace("page-enter","page-active")})}}function Ee(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const O={Plumbing:"🔧",Electricity:"⚡",WiFi:"📶",Cleanliness:"🧹",Carpentry:"🔨",Other:"📋"},G=["open","in-progress","resolved"],ke=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"];async function we(t){t.innerHTML='<div class="page-loading">Loading…</div>';try{const o=await f.get("/complaints");Ce(t,o)}catch(o){t.innerHTML=`<div class="page-error">Failed to load: ${o.message}</div>`}}function Ce(t,o){let l=o,p="all",r="",n=null;t.innerHTML=`
    <div class="page-enter" id="admin-complaints-page">
      <div class="page-header">
        <h2>Complaints Management</h2>
        <p>Review, approve, and update status of all hostel complaints.</p>
      </div>

      <!-- Summary chips -->
      <div class="card-grid" style="margin-bottom: var(--space-6);">
        <div class="card" style="text-align:center; cursor:pointer;" data-quick="all">
          <div class="card-label">Total</div>
          <div class="card-value" style="font-size:var(--text-2xl);">${l.length}</div>
        </div>
        ${G.map(s=>{const e=l.filter(d=>d.status===s).length;return`<div class="card card-accent-${s==="open"?"amber":s==="in-progress"?"blue":"green"}" style="text-align:center; cursor:pointer;" data-quick="${s}">
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
              ${ke.map(s=>`<option value="${s}">${O[s]} ${s}</option>`).join("")}
            </select>
            <button class="filter-chip active" data-status="all">All</button>
            ${G.map(s=>`<button class="filter-chip" data-status="${s}">${s}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-body"></div>
      </div>
    </div>
  `;function c(){let s=l;return r&&(s=s.filter(e=>e.category===r)),p!=="all"&&(s=s.filter(e=>e.status===p)),s}function i(){const s=c(),e=document.getElementById("complaints-body");if(s.length===0){e.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No complaints match the current filter.</p>';return}e.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>#</th><th>Student</th><th>Room</th><th>Category</th>
            <th>Description</th><th>Date</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody id="cmp-tbody">
          ${s.map(a=>`
            <tr class="cmp-row${n===a.complaint_id?" expanded-row":""}" data-id="${a.complaint_id}">
              <td class="cell-mono">${a.complaint_id}</td>
              <td><div>${a.student_name||a.student_id}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${a.roll_no||""}</div></td>
              <td class="cell-mono">${a.room_id||"—"}</td>
              <td>${O[a.category]||""} ${a.category}</td>
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
              <tr class="photo-row" data-for="${a.complaint_id}" style="${n===a.complaint_id?"":"display:none"}">
                <td colspan="8" style="padding: var(--space-3) var(--space-6); background: var(--bg-elevated);">
                  <img src="${a.photo_base64}" alt="Complaint photo" style="max-width:280px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);" />
                  ${a.admin_note?`<p style="font-size:var(--text-xs); color:var(--text-secondary); margin-top: var(--space-2);">Note: ${a.admin_note}</p>`:""}
                </td>
              </tr>
            `:""}
          `).join("")}
        </tbody>
      </table>
    `,e.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",async()=>{const d=+a.dataset.id,u=a.dataset.action;a.disabled=!0;try{const g=await f.patch(`/complaints/${d}/status`,{status:u});l=l.map(y=>y.complaint_id===d?{...y,...g}:y),h(`Complaint #${d} → ${u}`,"success"),i()}catch(g){h(g.message,"error"),a.disabled=!1}})}),e.querySelectorAll(".cmp-row").forEach(a=>{a.addEventListener("click",()=>{const d=+a.dataset.id;n=n===d?null:d,i()})})}t.querySelectorAll("[data-status]").forEach(s=>{s.addEventListener("click",()=>{t.querySelectorAll("[data-status]").forEach(e=>e.classList.remove("active")),s.classList.add("active"),p=s.dataset.status,i()})}),t.querySelectorAll("[data-quick]").forEach(s=>{s.addEventListener("click",()=>{var e;p=s.dataset.quick,t.querySelectorAll("[data-status]").forEach(a=>a.classList.remove("active")),(e=t.querySelector(`[data-status="${p}"]`))==null||e.classList.add("active"),i()})}),document.getElementById("cat-filter").addEventListener("change",s=>{r=s.target.value,i()}),i(),requestAnimationFrame(()=>{var s;return(s=document.getElementById("admin-complaints-page"))==null?void 0:s.classList.replace("page-enter","page-active")})}async function Be(t){t.innerHTML='<div class="page-loading">Loading…</div>';try{const[o,l]=await Promise.all([f.get("/rooms"),f.get("/rooms/booking-requests")]);Le(t,o,l)}catch(o){t.innerHTML=`<div class="page-error">Failed to load: ${o.message}</div>`}}function Le(t,o,l){let p=l,r="",n="rooms";const c=[...new Set(o.map(e=>e.hostel))].sort();t.innerHTML=`
    <div class="page-enter" id="admin-rooms-page">
      <div class="page-header">
        <h2>Room Information</h2>
        <p>Full room listing with occupancy and student assignments. Manage booking requests.</p>
      </div>

      <div class="cat-tabs" style="margin-bottom: var(--space-6);">
        <button class="cat-tab active" data-tab="rooms">Room Listing</button>
        <button class="cat-tab" data-tab="requests">
          Booking Requests
          ${p.filter(e=>e.status==="pending").length>0?`<span class="badge badge-open" style="margin-left:4px;">${p.filter(e=>e.status==="pending").length}</span>`:""}
        </button>
      </div>

      <!-- Rooms Panel -->
      <div id="panel-rooms">
        <div style="display:flex; gap: var(--space-3); align-items: center; margin-bottom: var(--space-4);">
          <span style="font-size: var(--text-sm); color: var(--text-secondary);">Hostel:</span>
          <div class="cat-tabs" style="margin:0;">
            <button class="cat-tab active" data-hostel="">All</button>
            ${c.map(e=>`<button class="cat-tab" data-hostel="${e}">${e}</button>`).join("")}
          </div>
        </div>
        <div id="rooms-body"></div>
      </div>

      <!-- Requests Panel -->
      <div id="panel-requests" style="display:none;">
        <div id="requests-body"></div>
      </div>
    </div>
  `;function i(){const e=r?o.filter(d=>d.hostel===r):o,a=document.getElementById("rooms-body");a.innerHTML=`
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th>
              <th>Occupancy</th><th>Students</th>
            </tr>
          </thead>
          <tbody>
            ${e.map(d=>{const u=d.capacity>0?d.current_occupancy/d.capacity:0,g=u===0?"vacant":u<1?"partial":"full",y=g==="vacant"?"var(--accent-green)":g==="partial"?"var(--accent-amber)":"var(--accent-red)",m=(d.students||[]).map(v=>`<span style="font-size:var(--text-xs); color:var(--text-secondary); display:block;">${v.name} (Yr ${v.year})</span>`).join("");return`
                <tr>
                  <td class="cell-mono">${d.room_id}</td>
                  <td>${d.hostel}</td>
                  <td>${d.floor}</td>
                  <td>${d.type}</td>
                  <td>
                    <div class="occupancy-bar">
                      <div class="occupancy-track">
                        <div class="occupancy-fill" style="width:${u*100}%; background:${y};"></div>
                      </div>
                      <span style="font-size:var(--text-xs); font-family: var(--font-mono); color:var(--text-secondary);">${d.current_occupancy}/${d.capacity}</span>
                    </div>
                  </td>
                  <td>${m||'<span style="color:var(--text-tertiary); font-size:var(--text-xs);">Vacant</span>'}</td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    `}function s(){const e=document.getElementById("requests-body");if(p.length===0){e.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No booking requests yet.</p>';return}e.innerHTML=`
      <div class="table-container">
        <table>
          <thead>
            <tr><th>Student</th><th>Year</th><th>Room</th><th>Type</th><th>Preferences</th><th>Status</th><th>Date</th><th>Action</th></tr>
          </thead>
          <tbody>
            ${p.map(a=>{var d;return`
              <tr>
                <td><div>${a.student_name}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${a.roll_no}</div></td>
                <td>${a.year}</td>
                <td class="cell-mono">${a.room_id}</td>
                <td>${a.type}</td>
                <td style="max-width:140px; font-size:var(--text-xs); color:var(--text-secondary);">${a.preferences||"—"}</td>
                <td><span class="badge badge-${a.status}">${a.status}</span></td>
                <td class="cell-mono">${(d=a.created_at)==null?void 0:d.slice(0,10)}</td>
                <td>
                  ${a.status==="pending"?`
                    <div style="display:flex; gap:4px;">
                      <button class="btn btn-sm btn-primary" data-req="${a.request_id}" data-action="approved">Approve</button>
                      <button class="btn btn-sm btn-secondary" data-req="${a.request_id}" data-action="rejected">Reject</button>
                    </div>
                  `:`<span style="color:var(--text-tertiary); font-size:var(--text-xs);">${a.admin_note||"—"}</span>`}
                </td>
              </tr>
            `}).join("")}
          </tbody>
        </table>
      </div>
    `,e.querySelectorAll("[data-req]").forEach(a=>{a.addEventListener("click",async()=>{const d=a.dataset.req,u=a.dataset.action;a.disabled=!0;try{const g=await f.patch(`/rooms/booking-requests/${d}`,{status:u});p=p.map(y=>y.request_id===+d?{...y,...g}:y),h(`Request ${u}.`,"success"),s()}catch(g){h(g.message,"error"),a.disabled=!1}})})}t.querySelectorAll("[data-tab]").forEach(e=>{e.addEventListener("click",()=>{t.querySelectorAll("[data-tab]").forEach(a=>a.classList.remove("active")),e.classList.add("active"),n=e.dataset.tab,document.getElementById("panel-rooms").style.display=n==="rooms"?"":"none",document.getElementById("panel-requests").style.display=n==="requests"?"":"none"})}),t.querySelectorAll("[data-hostel]").forEach(e=>{e.addEventListener("click",()=>{t.querySelectorAll("[data-hostel]").forEach(a=>a.classList.remove("active")),e.classList.add("active"),r=e.dataset.hostel,i()})}),i(),s(),requestAnimationFrame(()=>{var e;return(e=document.getElementById("admin-rooms-page"))==null?void 0:e.classList.replace("page-enter","page-active")})}const U=["Plumber","Electrician","WiFi","Authority","Other"],q={Plumber:"🔧",Electrician:"⚡",WiFi:"📶",Authority:"🏛️",Other:"📋"};async function Se(t){t.innerHTML='<div class="page-loading">Loading…</div>';try{const o=await f.get("/resources");Ae(t,o)}catch(o){t.innerHTML=`<div class="page-error">Failed to load: ${o.message}</div>`}}function Ae(t,o){let l=o,p="",r=null;t.innerHTML=`
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
                ${U.map(i=>`<option value="${i}">${q[i]} ${i}</option>`).join("")}
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
            ${U.map(i=>`<button class="filter-chip" data-cat="${i}">${q[i]} ${i}</button>`).join("")}
          </div>
        </div>
        <div id="resources-body"></div>
      </div>
    </div>
  `;function n(){const i=p?l.filter(a=>a.category===p):l,s=document.getElementById("resources-body");if(i.length===0){s.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No contacts in this category.</p>';return}const e={};i.forEach(a=>{e[a.category]||(e[a.category]=[]),e[a.category].push(a)}),s.innerHTML=Object.entries(e).map(([a,d])=>`
      <div style="padding: var(--space-4) var(--space-6);">
        <div style="font-size: var(--text-xs); font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: var(--text-tertiary); margin-bottom: var(--space-3);">
          ${q[a]||""} ${a}
        </div>
        ${d.map(u=>`
          <div class="contact-row" style="margin-bottom: var(--space-2);">
            <div class="contact-avatar">${u.name[0].toUpperCase()}</div>
            <div class="contact-info" style="flex:1;">
              <div class="contact-name">${u.name}</div>
              <div class="contact-meta">
                ${u.phone?`📞 <a href="tel:${u.phone}" style="color:inherit;">${u.phone}</a>`:""}
                ${u.email?` · 📧 <a href="mailto:${u.email}" style="color:inherit;">${u.email}</a>`:""}
              </div>
              ${u.notes?`<div style="font-size:var(--text-xs); color:var(--text-tertiary); margin-top:2px;">${u.notes}</div>`:""}
            </div>
            <div style="display:flex; gap:4px; flex-shrink:0;">
              <button class="btn btn-sm btn-secondary" data-edit="${u.resource_id}">Edit</button>
              <button class="btn btn-sm btn-secondary" data-delete="${u.resource_id}" style="color:var(--accent-red);">Del</button>
            </div>
          </div>
        `).join("")}
        <hr style="border:none; border-top: 1px solid var(--border-subtle); margin: var(--space-3) 0;" />
      </div>
    `).join(""),s.querySelectorAll("[data-edit]").forEach(a=>{a.addEventListener("click",()=>{const d=l.find(u=>u.resource_id===+a.dataset.edit);d&&(r=d.resource_id,document.getElementById("res-cat").value=d.category,document.getElementById("res-name").value=d.name,document.getElementById("res-phone").value=d.phone||"",document.getElementById("res-email").value=d.email||"",document.getElementById("res-notes").value=d.notes||"",document.getElementById("resource-form-title").textContent="Edit Contact",document.getElementById("btn-res-submit").textContent="Save Changes",document.getElementById("btn-res-cancel").style.display="",document.getElementById("resource-form").scrollIntoView({behavior:"smooth"}))})}),s.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("Delete this contact?")){a.disabled=!0;try{await f.delete(`/resources/${a.dataset.delete}`),l=l.filter(d=>d.resource_id!==+a.dataset.delete),h("Contact deleted.","success"),n()}catch(d){h(d.message,"error"),a.disabled=!1}}})})}t.querySelectorAll("[data-cat]").forEach(i=>{i.addEventListener("click",()=>{t.querySelectorAll("[data-cat]").forEach(s=>s.classList.remove("active")),i.classList.add("active"),p=i.dataset.cat,n()})}),document.getElementById("btn-res-cancel").addEventListener("click",()=>{r=null,document.getElementById("resource-form").reset(),document.getElementById("resource-form-title").textContent="Add New Contact",document.getElementById("btn-res-submit").textContent="Add Contact",document.getElementById("btn-res-cancel").style.display="none"});const c=document.getElementById("resource-form");c.addEventListener("submit",async i=>{i.preventDefault(),t.querySelectorAll(".form-error").forEach(g=>g.classList.remove("visible"));let s=!0;const e=document.getElementById("res-cat").value,a=document.getElementById("res-name").value.trim();if(e||(document.getElementById("err-res-cat").classList.add("visible"),s=!1),a||(document.getElementById("err-res-name").classList.add("visible"),s=!1),!s)return;const d={category:e,name:a,phone:document.getElementById("res-phone").value.trim()||null,email:document.getElementById("res-email").value.trim()||null,notes:document.getElementById("res-notes").value.trim()||null},u=document.getElementById("btn-res-submit");u.disabled=!0;try{if(r){const g=await f.put(`/resources/${r}`,d);l=l.map(y=>y.resource_id===r?g:y),h("Contact updated.","success"),document.getElementById("btn-res-cancel").click()}else l=[await f.post("/resources",d),...l],h("Contact added.","success"),c.reset();n()}catch(g){h(g.message,"error")}finally{u.disabled=!1}}),n(),requestAnimationFrame(()=>{var i;return(i=document.getElementById("resources-page"))==null?void 0:i.classList.replace("page-enter","page-active")})}const Ie={home:ne,complaints:ce,booking:K,forum:Q,resources:be},Me={home:$e,complaints:we,rooms:Be,forum:Q,resources:Se};let C="home",P=null;function R(){return z()==="admin"?Me:Ie}function I(t){const o=R();o[t]||(t="home"),C=t,window.location.hash=t;const l=document.getElementById("sidebar"),p=document.getElementById("main-content");ae(l,C,I),o[t](p,()=>I(C)),P&&P.close()}function V(){document.body.innerHTML=`
    <div id="app">
      <aside id="sidebar" class="sidebar"></aside>
      <main id="main-content" class="main"></main>
    </div>
  `}function Te(){if(!Z()){ie(()=>{V(),W()});return}V(),W()}function W(){P=oe();const t=window.location.hash.replace("#","");C=R()[t]?t:"home",I(C),window.addEventListener("hashchange",()=>{const l=window.location.hash.replace("#","");R()[l]&&l!==C&&I(l)})}(function(){const t=localStorage.getItem("ahcms_theme")||"light";document.documentElement.setAttribute("data-theme",t)})();Te();
