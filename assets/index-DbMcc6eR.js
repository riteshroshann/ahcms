(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const D="ahcms_token",j="ahcms_user";(function(){const a=localStorage.getItem("cw_hostel_token"),r=localStorage.getItem("cw_hostel_user");a&&(localStorage.setItem(D,a),localStorage.removeItem("cw_hostel_token")),r&&(localStorage.setItem(j,r),localStorage.removeItem("cw_hostel_user"))})();function Q(t,a){localStorage.setItem(D,t),localStorage.setItem(j,JSON.stringify(a))}function le(){return localStorage.getItem(D)}function W(){try{return JSON.parse(localStorage.getItem(j))}catch{return null}}function Y(){var t;return((t=W())==null?void 0:t.role)||null}function ve(){const t=le();if(!t)return!1;try{return JSON.parse(atob(t.split(".")[1])).exp*1e3>Date.now()}catch{return!1}}function de(){localStorage.removeItem(D),localStorage.removeItem(j)}const _={home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',complaints:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="15" r="0.5" fill="currentColor"/></svg>',booking:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',forum:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-1"/><path d="M15 3H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l4-4h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/></svg>',rooms:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',resources:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',theme:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'},ue=[{id:"home",label:"Home",icon:_.home},{id:"complaints",label:"Complaint",icon:_.complaints},{id:"booking",label:"Room Booking",icon:_.booking},{id:"forum",label:"Community Forum",icon:_.forum},{id:"resources",label:"Resources",icon:_.resources}],ge=[{id:"home",label:"Home",icon:_.home},{id:"complaints",label:"Complaints",icon:_.complaints},{id:"rooms",label:"Room Details",icon:_.rooms},{id:"forum",label:"Community Forum",icon:_.forum},{id:"resources",label:"Resources",icon:_.resources}];function ye(t,a,r){var d,n;const c=Y(),s=W(),i=c==="admin"?ge:ue,p=c==="admin"?"Admin Panel":"Student Portal";t.innerHTML=`
    <div class="sidebar-brand">
      <h1>AHCMS</h1>
      <span>${p}</span>
    </div>

    <div class="sidebar-user">
      <div class="sidebar-user-avatar">${((s==null?void 0:s.name)||"U")[0].toUpperCase()}</div>
      <div class="sidebar-user-info">
        <div class="sidebar-user-name">${(s==null?void 0:s.name)||"User"}</div>
        <div class="sidebar-user-role">${c==="admin"?"Administrator":(s==null?void 0:s.roll_no)||"Student"}</div>
      </div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Navigation</div>
      ${i.map(e=>`
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
        ${_.theme}
        Toggle Theme
      </button>
      <button class="nav-item logout-btn" id="nav-logout">
        ${_.logout}
        Sign Out
      </button>
      <p>v2.0 · 2026</p>
    </div>
  `,t.querySelectorAll(".nav-item[data-page]").forEach(e=>{e.addEventListener("click",()=>r(e.dataset.page)),e.addEventListener("keydown",m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),e.click())})}),(d=document.getElementById("nav-logout"))==null||d.addEventListener("click",()=>{de(),window.location.reload()}),(n=document.getElementById("nav-theme"))==null||n.addEventListener("click",()=>{const m=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",m),localStorage.setItem("ahcms_theme",m)})}function fe(){const t=document.createElement("button");t.className="sidebar-toggle",t.id="sidebar-toggle",t.innerHTML=_.menu,t.setAttribute("aria-label","Toggle navigation");const a=document.createElement("div");a.className="sidebar-overlay",a.id="sidebar-overlay",document.body.appendChild(t),document.body.appendChild(a);const r=document.getElementById("sidebar");function c(){r.classList.add("open"),a.classList.add("show"),t.innerHTML=_.close}function s(){r.classList.remove("open"),a.classList.remove("show"),t.innerHTML=_.menu}return t.addEventListener("click",()=>r.classList.contains("open")?s():c()),a.addEventListener("click",s),{close:s}}const be="/api";async function T(t,a,r){const c=le(),s={"Content-Type":"application/json"};c&&(s.Authorization=`Bearer ${c}`);const i=new AbortController,p=setTimeout(()=>i.abort(),1e4);try{const d=await fetch(`${be}${a}`,{method:t,headers:s,body:r!==void 0?JSON.stringify(r):void 0,signal:i.signal});if(d.status===401){de(),window.location.reload();return}const n=await d.json().catch(()=>({}));if(!d.ok)throw new Error(n.error||`Request failed (${d.status})`);return n}catch(d){throw d.name==="AbortError"?new Error("Request timed out — is the server running?"):d}finally{clearTimeout(p)}}const h={get:t=>T("GET",t),post:(t,a)=>T("POST",t,a),patch:(t,a)=>T("PATCH",t,a),put:(t,a)=>T("PUT",t,a),delete:t=>T("DELETE",t)};let z=null;function he(){z||(z=document.createElement("div"),z.className="toast-container",document.body.appendChild(z))}function k(t,a="info",r=3500){he();const c=document.createElement("div");c.className=`toast toast-${a}`,c.textContent=t,z.appendChild(c),requestAnimationFrame(()=>{requestAnimationFrame(()=>{c.classList.add("show")})}),setTimeout(()=>{c.classList.remove("show"),setTimeout(()=>c.remove(),300)},r)}function xe(t){var c;document.body.innerHTML=`
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
  `,(c=document.getElementById("login-theme"))==null||c.addEventListener("click",()=>{const i=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",i),localStorage.setItem("ahcms_theme",i)});let a="student";document.querySelectorAll(".login-tab").forEach(s=>{s.addEventListener("click",()=>{a=s.dataset.tab,document.querySelectorAll(".login-tab").forEach(i=>i.classList.remove("active")),s.classList.add("active"),document.getElementById("form-student").classList.toggle("hidden",a!=="student"),document.getElementById("form-admin").classList.toggle("hidden",a!=="admin"),document.getElementById("form-register").classList.add("hidden")})}),document.getElementById("btn-show-register").addEventListener("click",()=>{document.getElementById("form-admin").classList.add("hidden"),document.getElementById("form-register").classList.remove("hidden")}),document.getElementById("btn-back-login").addEventListener("click",()=>{document.getElementById("form-register").classList.add("hidden"),document.getElementById("form-admin").classList.remove("hidden")});function r(s,i){const p=document.getElementById(s);p.disabled=i,p.textContent=i?"Signing in…":"Sign In"}document.getElementById("form-student").addEventListener("submit",async s=>{s.preventDefault();const i=document.getElementById("s-roll").value.trim(),p=document.getElementById("s-pass").value,d=document.getElementById("err-student");if(d.textContent="",!i||!p){d.textContent="All fields required.";return}r("btn-student-login",!0);try{const{token:n,user:e}=await h.post("/auth/student/login",{roll_no:i,password:p});Q(n,e),t()}catch(n){d.textContent=n.message}finally{r("btn-student-login",!1)}}),document.getElementById("form-admin").addEventListener("submit",async s=>{s.preventDefault();const i=document.getElementById("a-email").value.trim(),p=document.getElementById("a-pass").value,d=document.getElementById("err-admin");if(d.textContent="",!i||!p){d.textContent="All fields required.";return}r("btn-admin-login",!0);try{const{token:n,user:e}=await h.post("/auth/admin/login",{email:i,password:p});Q(n,e),t()}catch(n){d.textContent=n.message}finally{r("btn-admin-login",!1)}}),document.getElementById("form-register").addEventListener("submit",async s=>{s.preventDefault();const i=document.getElementById("r-name").value.trim(),p=document.getElementById("r-email").value.trim(),d=document.getElementById("r-pass").value,n=document.getElementById("err-register");if(n.textContent="",!i||!p||!d){n.textContent="All fields required.";return}if(d.length<8){n.textContent="Password must be at least 8 characters.";return}const e=document.getElementById("btn-register");e.disabled=!0,e.textContent="Creating…";try{await h.post("/auth/admin/register",{name:i,email:p,password:d}),k("Account created! Please sign in.","success"),document.getElementById("btn-back-login").click(),document.getElementById("a-email").value=p}catch(m){n.textContent=m.message}finally{e.disabled=!1,e.textContent="Create Account"}})}async function $e(t){t.innerHTML='<div class="page-loading">Loading…</div>';try{const{student:a,allocation:r,complaints:c,wardens:s,wardenOfficePhone:i}=await h.get("/dashboard/student");we(t,a,r,c,s,i)}catch(a){t.innerHTML=`<div class="page-error">Failed to load dashboard: ${a.message}</div>`}}function we(t,a,r,c,s,i){var n;const p=s.filter(e=>e.role==="Warden"),d=s.filter(e=>e.role==="Guard");t.innerHTML=`
    <div class="page-enter" id="student-home">
      <div class="page-header">
        <h2>Welcome, ${((n=a==null?void 0:a.name)==null?void 0:n.split(" ")[0])||"Student"} 👋</h2>
        <p>${(a==null?void 0:a.course)||""} · ${(a==null?void 0:a.hostel)||""} · Year ${(a==null?void 0:a.year)||""}</p>
      </div>

      <!-- Student Info Card -->
      <div class="form-section" style="max-width: none; margin-bottom: var(--space-10);">
        <div class="form-section-title">Your Profile</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-4);">
          ${[["Roll No",a==null?void 0:a.roll_no],["Course",a==null?void 0:a.course],["Admission",a==null?void 0:a.adm_year],["Passing Year",a==null?void 0:a.pass_year],["Gender",(a==null?void 0:a.gender)==="M"?"Male":(a==null?void 0:a.gender)==="F"?"Female":a==null?void 0:a.gender],["Address",(a==null?void 0:a.address)||"—"]].map(([e,m])=>`
            <div>
              <div style="font-size: var(--text-xs); color: var(--text-tertiary); text-transform: uppercase; letter-spacing: .06em;">${e}</div>
              <div style="font-size: var(--text-sm); color: var(--text-primary); margin-top: 4px;">${m||"—"}</div>
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
          <div class="card-value">${c.filter(e=>e.status==="open").length}</div>
          <div class="card-sub">${c.filter(e=>e.status==="in-progress").length} in progress</div>
        </div>

        <div class="card card-accent-green">
          <div class="card-label">Resolved</div>
          <div class="card-value">${c.filter(e=>e.status==="resolved").length}</div>
          <div class="card-sub">of ${c.length} total</div>
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
          ${d.length===0?'<p class="empty-msg">No guard data.</p>':d.map(e=>`
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
          ${c.length===0?'<p class="empty-msg">No complaints filed yet.</p>':`<div class="activity-list">
                ${c.slice(0,5).map(e=>`
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
  `,t.querySelectorAll('a.link-accent[href^="#"]').forEach(e=>{e.addEventListener("click",m=>{m.preventDefault(),window.location.hash=e.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var e;return(e=document.getElementById("student-home"))==null?void 0:e.classList.replace("page-enter","page-active")})}const X=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"],F={Plumbing:"🔧",Electricity:"⚡",WiFi:"📶",Cleanliness:"🧹",Carpentry:"🔨",Other:"📋"},Ee=["open","in-progress","resolved"];async function ke(t){t.innerHTML='<div class="page-loading">Loading…</div>';let a=[];try{a=await h.get("/complaints")}catch(r){t.innerHTML=`<div class="page-error">Failed to load: ${r.message}</div>`;return}Ce(t,a)}function Ce(t,a){let r=a,c="all",s="";t.innerHTML=`
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
                ${X.map(e=>`<option value="${e}">${F[e]} ${e}</option>`).join("")}
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
          ${X.map(e=>`<option value="${e}">${F[e]} ${e}</option>`).join("")}
        </select>
      </div>

      <!-- My Complaints Table -->
      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">My Complaints</div>
          <div style="display:flex; gap: var(--space-2); flex-wrap: wrap;">
            <button class="filter-chip active" data-status="all">All</button>
            ${Ee.map(e=>`<button class="filter-chip" data-status="${e}">${e}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-list"></div>
      </div>
    </div>
  `;function i(){let e=r;s&&(e=e.filter(o=>o.category===s)),c!=="all"&&(e=e.filter(o=>o.status===c));const m=document.getElementById("complaints-list");if(e.length===0){m.innerHTML='<p style="padding: var(--space-8); text-align:center; color: var(--text-tertiary);">No complaints found.</p>';return}m.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>#</th><th>Category</th><th>Description</th><th>Date</th><th>Status</th><th>Note</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(o=>`
            <tr>
              <td class="cell-mono">${o.complaint_id}</td>
              <td>${F[o.category]||""} ${o.category}</td>
              <td style="max-width:220px; overflow:hidden; text-overflow:ellipsis;" title="${o.description}">${o.description.slice(0,50)}${o.description.length>50?"…":""}</td>
              <td class="cell-mono">${o.date}</td>
              <td><span class="badge badge-${o.status}">${o.status}</span></td>
              <td style="color: var(--text-tertiary); font-size: var(--text-xs);">${o.admin_note||"—"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `}document.getElementById("cat-filter-select").addEventListener("change",e=>{s=e.target.value,i()}),t.querySelectorAll("[data-status]").forEach(e=>{e.addEventListener("click",()=>{t.querySelectorAll("[data-status]").forEach(m=>m.classList.remove("active")),e.classList.add("active"),c=e.dataset.status,i()})});const p=document.getElementById("cmp-category"),d=document.getElementById("cmp-other-group");p.addEventListener("change",e=>{e.target.value==="Other"?d.style.display="":(d.style.display="none",document.getElementById("cmp-other-type").value="",document.getElementById("err-cmp-other").classList.remove("visible"))});const n=document.getElementById("complaint-form");n.addEventListener("submit",async e=>{e.preventDefault();let m=!0;t.querySelectorAll(".form-error").forEach(x=>x.classList.remove("visible"));const o=document.getElementById("cmp-category").value,f=document.getElementById("cmp-other-type").value.trim(),$=document.getElementById("cmp-desc").value.trim(),u=document.getElementById("cmp-photo").files[0];if(o||(document.getElementById("err-cmp-cat").classList.add("visible"),m=!1),o==="Other"&&!f&&(document.getElementById("err-cmp-other").classList.add("visible"),m=!1),$||(document.getElementById("err-cmp-desc").classList.add("visible"),m=!1),!m){k("Fill in all required fields.","error");return}const y=document.getElementById("cmp-submit");y.disabled=!0,y.textContent="Submitting…";try{let x=null;u&&(x=await new Promise((l,w)=>{const v=new FileReader;v.onload=()=>l(v.result),v.onerror=w,v.readAsDataURL(u)}));const b=o==="Other"&&f?`[Other: ${f}] ${$}`:$,B=await h.post("/complaints",{category:o,description:b,photo_base64:x});r=[B,...r],k(`Complaint #${B.complaint_id} submitted.`,"success"),n.reset(),i()}catch(x){k(x.message,"error")}finally{y.disabled=!1,y.textContent="Submit Complaint"}}),n.addEventListener("reset",()=>{t.querySelectorAll(".form-error").forEach(e=>e.classList.remove("visible")),document.getElementById("cmp-other-group").style.display="none"}),i(),requestAnimationFrame(()=>{var e;return(e=document.getElementById("complaints-page"))==null?void 0:e.classList.replace("page-enter","page-active")})}async function O(t){t.innerHTML='<div class="page-loading">Loading rooms…</div>';try{const[a,{allocation:r},c,s]=await Promise.all([h.get("/rooms"),h.get("/rooms/my-allocation"),h.get("/rooms/booking-requests"),h.get("/rooms/change-requests")]);Be(t,a,r,c,s)}catch(a){t.innerHTML=`<div class="page-error">Failed to load: ${a.message}</div>`}}function Be(t,a,r,c,s){var u,y,x,b,B,l,w;const i=W(),p=a.filter(v=>v.hostel===((i==null?void 0:i.hostel)||"")),d=[...new Set(p.map(v=>v.floor))].sort((v,g)=>v-g);let n=d[0]||1,e=null;const m=c.find(v=>v.status==="pending"),o=s.find(v=>v.status==="pending");if(t.innerHTML=`
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
      .change-req-form { margin-top: var(--space-5); padding-top: var(--space-5); border-top: 1px solid var(--border-subtle); }
    </style>

    <div class="page-enter" id="booking-page">
      <div class="page-header">
        <h2>My Room</h2>
        <p>View your room assignment, request a room change, or apply for initial allocation.</p>
      </div>

      <!-- ① Allocated: room card + change request -->
      ${r?`
        <div class="alloc-card">
          <div style="display:flex; align-items:flex-start; justify-content:space-between; flex-wrap:wrap; gap:var(--space-4);">
            <div>
              <div style="font-size:var(--text-xs); font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:var(--text-tertiary); margin-bottom:var(--space-2);">Your Room</div>
              <div class="alloc-room-num">${r.room_id}</div>
              <div class="alloc-meta">${r.hostel}</div>
              <div class="alloc-meta">Floor ${r.floor} · ${r.type} · ${r.current_occupancy}/${r.capacity} occupied</div>
              <div class="alloc-meta" style="margin-top:var(--space-2);">Since ${r.from_date} · Until ${r.to_date}</div>
            </div>
            <div style="display:flex; flex-direction:column; gap:var(--space-2); align-items:flex-end;">
              <span class="badge badge-in-progress" style="font-size:13px; padding:6px 14px;">Active</span>
              ${o?'<div style="font-size:var(--text-xs); color:var(--accent-amber); margin-top:var(--space-2);">Room change pending review</div>':'<button class="btn btn-secondary" id="btn-show-change" style="margin-top:var(--space-2);">Request Room Change</button>'}
            </div>
          </div>

          <!-- Room change request form (hidden until button click) -->
          <div class="change-req-form" id="change-req-section" style="display:${o?"block":"none"};">
            ${o?`
              <div style="font-size:var(--text-sm); font-weight:600; color:var(--accent-amber); margin-bottom:var(--space-3);">Pending Room Change Request</div>
              <div style="font-size:var(--text-sm); color:var(--text-secondary);">
                You have requested to move to <strong>${o.to_room_id}</strong> (${o.to_hostel}, Floor ${o.to_floor}).
                Submitted on ${(u=o.created_at)==null?void 0:u.slice(0,10)}. Awaiting warden approval.
              </div>
            `:`
              <div style="font-size:var(--text-sm); font-weight:600; margin-bottom:var(--space-4);">Request a Room Change</div>
              <div id="change-msg"></div>
              <form id="change-req-form">
                <div class="form-group">
                  <label class="form-label">Target Room *</label>
                  <select class="form-select" id="change-target-room" name="to_room_id" required>
                    <option value="">— select a different room —</option>
                    ${a.filter(v=>v.room_id!==r.room_id&&v.current_occupancy<v.capacity&&v.hostel===r.hostel).sort((v,g)=>v.floor-g.floor||v.room_id.localeCompare(g.room_id)).map(v=>`<option value="${v.room_id}">${v.room_id} · Fl ${v.floor} · ${v.type} · ${v.current_occupancy}/${v.capacity}</option>`).join("")}
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Reason for Change *</label>
                  <textarea class="form-textarea" name="reason" rows="3" placeholder="Explain why you need a different room…" required></textarea>
                </div>
                <div class="form-actions">
                  <button type="submit" class="btn btn-primary" id="btn-submit-change">Submit Request</button>
                  <button type="button" class="btn btn-secondary" id="btn-cancel-change">Cancel</button>
                </div>
              </form>
            `}
          </div>
        </div>
      `:m?`
        <!-- ② No allocation but pending booking -->
        <div style="background:var(--bg-elevated); border:1px solid color-mix(in srgb,var(--accent-amber) 30%,transparent); border-radius:var(--radius-lg); padding:var(--space-6); margin-bottom:var(--space-6);">
          <div style="font-size:var(--text-xs); font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:var(--text-tertiary); margin-bottom:var(--space-2);">Pending Booking Request</div>
          <div style="font-size:var(--text-2xl); font-weight:700; color:var(--accent-amber);">${m.room_id}</div>
          <div style="font-size:var(--text-sm); color:var(--text-secondary); margin-top:4px;">Submitted ${(y=m.created_at)==null?void 0:y.slice(0,10)} · Waiting for warden approval</div>
        </div>
      `:""}

      <!-- ③ Floor Plan (only shown if not yet allocated) -->
      ${r?"":`
        <div style="display:flex; align-items:center; gap:var(--space-4); margin-bottom:var(--space-5);">
          <span style="font-size:var(--text-sm); color:var(--text-secondary); font-weight:500;">Floor:</span>
          <div class="cat-tabs" style="margin:0;">
            ${d.map(v=>`
              <button class="cat-tab${v===n?" active":""}" data-floor="${v}">Floor ${v}</button>
            `).join("")}
          </div>
        </div>

        <div class="form-section" style="max-width:none; margin-bottom:var(--space-6);" id="floor-plan-section">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:var(--space-4);">
            <div class="form-section-title" id="floor-plan-title" style="margin-bottom:0;">Floor ${n} — ${(i==null?void 0:i.hostel)||""}</div>
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
        ${c.length===0?'<p style="padding:var(--space-6); text-align:center; color:var(--text-tertiary);">No booking requests yet.</p>':`<table>
              <thead><tr><th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th><th>Status</th><th>Note</th><th>Date</th></tr></thead>
              <tbody>
                ${c.map(v=>{var g;return`
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

      ${s.length>0?`
      <div class="table-container">
        <div class="table-toolbar"><div class="table-toolbar-title">My Room Change Requests</div></div>
        <table>
          <thead><tr><th>From</th><th>To</th><th>To Hostel</th><th>Reason</th><th>Status</th><th>Note</th><th>Date</th></tr></thead>
          <tbody>
            ${s.map(v=>{var g;return`
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
  `,!r){let v=function(E){const L=p.filter(C=>C.floor===E);document.getElementById("floor-plan-title").textContent=`Floor ${E} — ${(i==null?void 0:i.hostel)||""}`;const I=document.getElementById("floor-plan");if(!L.length){I.innerHTML='<p style="color:var(--text-tertiary); padding:var(--space-4);">No rooms on this floor.</p>';return}I.innerHTML=L.sort((C,A)=>C.room_id.localeCompare(A.room_id)).map(C=>{const A=C.capacity>0?C.current_occupancy/C.capacity:0,R=A===0?"vacant":A<1?"partial":"full",me=(e==null?void 0:e.room_id)===C.room_id;return`
            <button class="room-cell ${R}${me?" selected":""}"
                    data-room="${C.room_id}"
                    ${R==="full"?"disabled":""}
                    title="${C.room_id} · ${C.type} · ${C.current_occupancy}/${C.capacity}">
              <span class="room-cell-id">${C.room_id}</span>
              <span class="room-cell-type">${C.type[0]}</span>
              <span class="room-cell-occ">${C.current_occupancy}/${C.capacity}</span>
            </button>`}).join(""),I.querySelectorAll(".room-cell:not([disabled])").forEach(C=>{C.addEventListener("click",()=>{e=p.find(A=>A.room_id===C.dataset.room),v(E),g(e)})})},g=function(E){const L=document.getElementById("room-detail-panel");document.getElementById("room-detail-title").textContent=`Room ${E.room_id}`,document.getElementById("room-detail-body").innerHTML=`
        <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(130px,1fr)); gap:var(--space-4);">
          ${[["Hostel",E.hostel],["Floor",E.floor],["Type",E.type],["Capacity",`${E.capacity} beds`],["Occupied",`${E.current_occupancy}/${E.capacity}`],["Available",`${E.available_slots} slot(s)`]].map(([I,C])=>`<div>
              <div style="font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase; letter-spacing:.06em;">${I}</div>
              <div style="font-size:var(--text-sm); margin-top:4px;">${C}</div>
            </div>`).join("")}
        </div>
      `,L.style.display=m?"none":"block"};var f=v,$=g;t.querySelectorAll(".cat-tab[data-floor]").forEach(E=>{E.addEventListener("click",()=>{t.querySelectorAll(".cat-tab[data-floor]").forEach(L=>L.classList.remove("active")),E.classList.add("active"),n=+E.dataset.floor,e=null,document.getElementById("room-detail-panel").style.display="none",v(n)})}),(x=document.getElementById("btn-cancel-room"))==null||x.addEventListener("click",()=>{e=null,document.getElementById("room-detail-panel").style.display="none",v(n)}),(b=document.getElementById("booking-form"))==null||b.addEventListener("submit",async E=>{if(E.preventDefault(),!e)return;const L=document.getElementById("btn-book");L.disabled=!0,L.textContent="Submitting…";try{await h.post("/rooms/book",{room_id:e.room_id,preferences:document.getElementById("booking-pref").value.trim()}),k(`Booking request for ${e.room_id} submitted!`,"success"),O(t)}catch(I){k(I.message,"error"),L.disabled=!1,L.textContent="Request This Room"}}),v(n)}r&&!o&&((B=document.getElementById("btn-show-change"))==null||B.addEventListener("click",()=>{document.getElementById("change-req-section").style.display="block",document.getElementById("btn-show-change").style.display="none"}),(l=document.getElementById("btn-cancel-change"))==null||l.addEventListener("click",()=>{document.getElementById("change-req-section").style.display="none",document.getElementById("btn-show-change").style.display=""}),(w=document.getElementById("change-req-form"))==null||w.addEventListener("submit",async v=>{v.preventDefault();const g=new FormData(v.target),E=document.getElementById("btn-submit-change"),L=document.getElementById("change-msg");E.disabled=!0,E.textContent="Submitting…",L.innerHTML="";try{await h.post("/rooms/change-requests",Object.fromEntries(g.entries())),k("Room change request submitted. Awaiting warden approval.","success"),O(t)}catch(I){L.innerHTML=`<div style="color:var(--accent-red); font-size:var(--text-sm); margin-bottom:var(--space-3); padding:var(--space-3); background:color-mix(in srgb,var(--accent-red) 10%,transparent); border-radius:8px;">${I.message}</div>`,E.disabled=!1,E.textContent="Submit Request"}})),requestAnimationFrame(()=>{var v;return(v=document.getElementById("booking-page"))==null?void 0:v.classList.replace("page-enter","page-active")})}async function ce(t){t.innerHTML='<div class="page-loading">Loading forum…</div>';try{const a=await h.get("/forum");Le(t,a)}catch(a){t.innerHTML=`<div class="page-error">Failed to load forum: ${a.message}</div>`}}function Le(t,a){const r=Y()==="admin";let c=a;t.innerHTML=`
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
  `;function s(){const p=document.getElementById("forum-feed"),d=document.getElementById("forum-empty");if(c.length===0){p.innerHTML="",d.style.display="block";return}d.style.display="none",p.innerHTML=c.map(n=>`
      <div class="forum-post card" style="background:var(--bg-primary); padding:var(--space-4); margin-bottom:var(--space-4); border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
        <div class="forum-post-header" style="display:flex; align-items:center; gap:var(--space-3); margin-bottom:var(--space-2);">
          <div class="forum-avatar" style="font-size:24px; background:transparent; border:none;">${n.avatar_icon||"👤"}</div>
          <div>
            <div class="forum-post-title" style="font-weight:600; color:var(--text-primary);">${q(n.title)}</div>
            <div class="forum-post-meta" style="font-size:var(--text-xs); color:var(--text-tertiary);">${q(n.avatar_name||"Anonymous")} · ${Z(n.created_at)}</div>
          </div>
        </div>
        <div class="forum-post-body" style="font-size:var(--text-sm); color:var(--text-secondary); line-height:1.6; margin-left:var(--space-10); margin-bottom:var(--space-3);">${q(n.content)}</div>
        
        <div class="forum-post-actions" style="margin-left:var(--space-10); display:flex; gap:var(--space-4); align-items:center; margin-bottom:var(--space-2);">
          <div style="display:flex; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--border-subtle); overflow:hidden;">
            <button class="vote-btn" data-type="post" data-id="${n.post_id}" data-dir="up" style="background:transparent; border:none; padding:4px 8px; cursor:pointer; color:var(--text-secondary);">⇧ ${n.upvotes||0}</button>
            <div style="width:1px; background:var(--border-subtle);"></div>
            <button class="vote-btn" data-type="post" data-id="${n.post_id}" data-dir="down" style="background:transparent; border:none; padding:4px 8px; cursor:pointer; color:var(--text-secondary);">⇩ ${n.downvotes||0}</button>
          </div>
          ${r?"":`<button class="reply-toggle-btn" data-post-id="${n.post_id}" style="background:transparent; border:none; color:var(--text-tertiary); font-size:var(--text-xs); cursor:pointer; display:flex; gap:4px; align-items:center;">💬 Reply</button>`}
        </div>

        <!-- Replies -->
        ${n.replies&&n.replies.length>0?`
          <div class="forum-replies" style="margin-left:var(--space-10); border-left:2px solid var(--border-subtle); padding-left:var(--space-4); margin-top:var(--space-4); display:flex; flex-direction:column; gap:var(--space-4);">
            ${n.replies.map(e=>`
              <div class="forum-reply">
                <div class="forum-post-header" style="display:flex; align-items:center; gap:var(--space-2); margin-bottom:4px;">
                  <div class="forum-avatar" style="font-size:16px; background:transparent; border:none; width:auto; height:auto;">${e.avatar_icon||"👤"}</div>
                  <div class="forum-post-meta" style="font-size:var(--text-xs); color:var(--text-tertiary);">${q(e.avatar_name||"Anonymous")} · ${Z(e.created_at)}</div>
                </div>
                <div class="forum-post-body" style="font-size:var(--text-sm); line-height:1.5; color:var(--text-secondary); margin-left:var(--space-6);">${q(e.content)}</div>
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
        ${r?"":`
          <div id="reply-form-${n.post_id}" style="display:none; margin-left:var(--space-10); margin-top:var(--space-4);">
            <textarea id="reply-input-${n.post_id}" class="form-textarea" rows="2" placeholder="Write an anonymous reply..." style="padding:var(--space-2); min-height:60px;"></textarea>
            <div style="margin-top:var(--space-2); display:flex; gap:var(--space-2);">
              <button class="btn btn-primary reply-submit-btn" data-post-id="${n.post_id}" style="padding:4px 12px; font-size:12px;">Submit Reply</button>
              <button class="btn btn-secondary reply-toggle-btn" data-post-id="${n.post_id}" style="padding:4px 12px; font-size:12px;">Cancel</button>
            </div>
          </div>
        `}
      </div>
    `).join("")}if(document.getElementById("forum-feed").addEventListener("click",async p=>{const d=p.target.closest(".vote-btn");if(d&&!d.disabled){const m=d.dataset.type,o=d.dataset.id,f=d.dataset.dir;d.disabled=!0;try{const $=await h.patch("/forum/vote",{type:m,id:parseInt(o,10),dir:f});if(m==="post"){const u=c.find(y=>y.post_id===parseInt(o,10));u&&(u.upvotes=$.upvotes,u.downvotes=$.downvotes)}else for(const u of c)if(u.replies){const y=u.replies.find(x=>x.reply_id===parseInt(o,10));if(y){y.upvotes=$.upvotes,y.downvotes=$.downvotes;break}}s()}catch($){k($.message,"error"),d.disabled=!1}return}const n=p.target.closest(".reply-toggle-btn");if(n){const m=n.dataset.postId,o=document.getElementById(`reply-form-${m}`);o&&(o.style.display=o.style.display==="none"?"block":"none");return}const e=p.target.closest(".reply-submit-btn");if(e){const m=e.dataset.postId,o=document.getElementById(`reply-input-${m}`),f=o==null?void 0:o.value.trim();if(!f){k("Reply content cannot be empty","error");return}e.disabled=!0,e.textContent="...";try{const $=await h.post(`/forum/${m}/reply`,{content:f}),u=c.find(y=>y.post_id===parseInt(m,10));u&&(u.replies||(u.replies=[]),u.replies.push($)),k("Reply posted","success"),s()}catch($){k($.message,"error"),e.disabled=!1,e.textContent="Submit Reply"}return}}),!r){const p=document.getElementById("forum-form");p.addEventListener("submit",async d=>{d.preventDefault();let n=!0;t.querySelectorAll(".form-error").forEach(f=>f.classList.remove("visible"));const e=document.getElementById("f-title").value.trim(),m=document.getElementById("f-content").value.trim();if(e||(document.getElementById("err-f-title").classList.add("visible"),n=!1),m||(document.getElementById("err-f-content").classList.add("visible"),n=!1),!n)return;const o=document.getElementById("btn-post");o.disabled=!0,o.textContent="Posting…";try{c=[await h.post("/forum",{title:e,content:m}),...c],k("Posted anonymously!","success"),p.reset(),s()}catch(f){k(f.message,"error")}finally{o.disabled=!1,o.textContent="Post Anonymously"}}),p.addEventListener("reset",()=>t.querySelectorAll(".form-error").forEach(d=>d.classList.remove("visible")))}s(),requestAnimationFrame(()=>{var p;return(p=document.getElementById("forum-page"))==null?void 0:p.classList.replace("page-enter","page-active")})}function q(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Z(t){try{return new Date(t).toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}const ee=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],_e={breakfast:[["Poori Chole","Matter Kulcha","Kachori Bhaji","Dosa Sambar","Pav Bhaji","Macaroni","Aloo Paratha"],["Chacos","Idli Sambar","Daliya","Chana Chaat","Corn Flakes","Idli Sambar","Cut Fruits"],["Egg","Banana","Egg","—","Egg","—","—"],["Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee"],["Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam"]],lunch:[["Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad"],["Boondi Raita","Mix Veg Raita","Lauki Raita","Mix Veg Raita","Boondi Raita","Mix Veg Raita","Mint Raita"],["A / P / C","A / P / C","A / P / C","A / P / C","A / P / C","A / P / C","A / P / C"],["Mix Dal Tadka","Chole Masala","Kadi Pakora","Lobhiya / Masoor Dal","Rajma Masala","Dal Makhani","Dal Tadka"],["Matar Paneer","Aloo Nutrela","Mixed Vegetable","Paneer Do Pyaza","Handi Kofta Curry","Aloo Gobhi Masala","Chap Masala"],["Aloo Palak","Boiled Rice","Soya Chap Gravy","Boiled Rice","Boiled Rice","Boiled Rice","Veg Biryani"],["Boiled Rice","Chapathi","Jeera Rice","Cut Fruits","Chapathi","Chapathi","Chapathi"],["Chapathi","Ice Cream","Chapathi","Chapathi","—","Besan Barfi","Fruit Custard"]],hitea:[["Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee"],["Veg Hakka Noodles","Bhaji Pakora","Veg Sandwich","Bread Pakora","Cake Slice","Potato Wedges","Aloo Sandwich"]],dinner:[["Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad"],["Dal Bukhara","Curd","Rajma Masala","Curd","Dal Palak","Khichdi","Curd"],["Veg Jalfrezi","Arhar Dal Fry","Palak Paneer","Mix Dal Tadka","Soya Matar Masala","Mix Vegetable","Dal Dhaba"],["Jeera Pulao","Crispy Veg Sweet Chilly","Onion Pulao","Aloo Chole","Tomato Rice","Chapati","Paneer Lababdar"],["Chapathi","Aloo Jeera","Chapathi","Masala Rice","Chapathi","Hot Milk","Jeera Pulao"],["Milk","Soya Biryani","Milk","Chapathi","Milk","—","Chapathi"],["Rice Kheer","Chapathi","Fruit Custard","Milk","Boondi","—","Milk"]]},Ie=[{key:"breakfast",label:"Breakfast",time:"7:30 – 9:30 AM"},{key:"lunch",label:"Lunch",time:"12:30 – 2:30 PM"},{key:"hitea",label:"Evening Hi-Tea",time:"5:00 – 6:30 PM"},{key:"dinner",label:"Dinner",time:"7:30 – 9:30 PM"}];function Se(){const t=new Date().getDay();return t===0?6:t-1}function Ae(){const t=new Date().getHours();return t<10?"breakfast":t<15?"lunch":t<19?"hitea":"dinner"}async function Me(t){t.innerHTML='<div class="page-loading">Loading…</div>';let a=[];try{a=await h.get("/resources")}catch{}Te(t,a)}function Te(t,a){const r=Se();let c=Ae(),s=r;if(t.innerHTML=`
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
          ${Ie.map(p=>`
            <button data-meal="${p.key}" class="res-meal-tab${p.key===c?" active":""}">
              <span class="res-meal-name">${p.label}</span>
              <span class="res-meal-time">${p.time}</span>
            </button>
          `).join("")}
        </div>

        <!-- Day selector -->
        <div style="display:flex; gap:var(--space-2); margin-bottom:var(--space-5); flex-wrap:wrap;" id="day-tabs">
          ${ee.map((p,d)=>`
            <button class="res-day-tab${d===s?" active":""}" data-day="${d}">
              ${p.slice(0,3)}${d===r?" ·":""}
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
        ${P("Pharmacy",`
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
        ${P("Hospital Appointment",`
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
        ${P("Laundry",`
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-6);">
            <div>
              <div class="res-info-place" style="margin-bottom:var(--space-4);">Collection</div>
              ${[["Monday","Boys Hostel (Senior MBBS)"],["Wednesday","Girls Hostel (Senior MBBS)"]].map(([p,d])=>`<div class="res-laundry-row"><span>${p}</span><span>${d}</span></div>`).join("")}
            </div>
            <div>
              <div class="res-info-place" style="margin-bottom:var(--space-4);">Delivery</div>
              ${[["Thursday","Boys Hostel (Senior MBBS)"],["Saturday","Girls Hostel (Senior MBBS)"]].map(([p,d])=>`<div class="res-laundry-row"><span>${p}</span><span>${d}</span></div>`).join("")}
            </div>
          </div>
          <div class="res-info-block" style="margin-top:var(--space-6); padding-top:var(--space-6); border-top:1px solid var(--border-subtle);">
            <div class="res-info-line">Label all items with name & roll number. Dry-clean items separately.</div>
            <a href="tel:9999000001" class="res-phone" style="margin-top:var(--space-3);">9999-000-001</a>
          </div>
        `)}

        <!-- Canteens -->
        ${P("Canteens",`
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
          <div id="contacts-body">${qe(a)}</div>
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
    `,document.head.appendChild(p)}function i(){const p=_e[c],d=document.getElementById("menu-panel");d&&(d.innerHTML=`
      <table>
        <thead>
          <tr>
            ${ee.map((n,e)=>`<th class="${e===s?"today":""}">${n}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${p.map(n=>`
            <tr>
              ${n.map((e,m)=>`<td class="${m===s?"today":""}">${e}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    `)}document.getElementById("meal-tabs").querySelectorAll(".res-meal-tab").forEach(p=>{p.addEventListener("click",()=>{document.getElementById("meal-tabs").querySelectorAll(".res-meal-tab").forEach(d=>d.classList.remove("active")),p.classList.add("active"),c=p.dataset.meal,i()})}),document.getElementById("day-tabs").querySelectorAll(".res-day-tab").forEach(p=>{p.addEventListener("click",()=>{document.getElementById("day-tabs").querySelectorAll(".res-day-tab").forEach(d=>d.classList.remove("active")),p.classList.add("active"),s=+p.dataset.day,i()})}),i(),requestAnimationFrame(()=>{var p;return(p=document.getElementById("res-page"))==null?void 0:p.classList.replace("page-enter","page-active")})}function P(t,a){return`
    <div class="res-big-card">
      <div class="res-card-title">${t}</div>
      ${a}
    </div>
  `}function qe(t){const a={Plumber:"Plumber",Electrician:"Electrician",WiFi:"Wi-Fi / IT",Authority:"Authority",Other:"Other"},r={};return t.forEach(c=>{(r[c.category]=r[c.category]||[]).push(c)}),`
    <div class="res-staff-grid">
      ${Object.entries(r).map(([c,s])=>`
        <div class="res-staff-card">
          <div class="res-staff-cat">${a[c]||c}</div>
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
  `}const G="ahcms_hostel_filter";function J(){return localStorage.getItem(G)||""}function pe(t){t?localStorage.setItem(G,t):localStorage.removeItem(G),window.dispatchEvent(new CustomEvent("hostel-change",{detail:t}))}function K(t){window.addEventListener("hostel-change",a=>t(a.detail))}async function ze(t){let a=[];async function r(){t.innerHTML='<div class="page-loading">Loading</div>';try{const s=J(),i=s?`?hostel=${encodeURIComponent(s)}`:"",[p,d]=await Promise.all([h.get(`/dashboard/admin${i}`),h.get("/rooms")]);a=[...new Set(d.map(n=>n.hostel))].sort(),c(t,p,a,s)}catch(s){t.innerHTML=`<div class="page-error">Failed to load: ${s.message}</div>`}}K(()=>r()),await r();function c(s,{stats:i,recentComplaints:p,wardens:d,wardenOfficePhone:n},e,m){const o=d.filter(u=>u.role==="Warden"),f=d.filter(u=>u.role==="Guard"),$=i.totalCapacity>0?Math.round(i.totalOccupied/i.totalCapacity*100):0;s.innerHTML=`
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
              ${e.map(u=>`<option value="${u}" ${u===m?"selected":""}>${Re(u)}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Stat Cards -->
        <div class="card-grid">
          <div class="card card-accent-blue">
            <div class="card-label">Total Rooms</div>
            <div class="card-value">${i.totalRooms}</div>
            <div class="card-sub">${i.vacantRooms} vacant · ${$}% utilized</div>
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
            ${o.length===0?'<p class="empty-msg">No warden data available.</p>':o.map(u=>`
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
            ${f.length===0?'<p class="empty-msg">No guard data.</p>':f.map(u=>`
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
            ${p.length===0?'<p class="empty-msg">No recent complaints.</p>':`
            <div class="activity-list">
              ${p.map(u=>`
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
              <div class="occ-track-inner" style="width:${$}%"></div>
            </div>
            <span style="font-size:var(--text-sm); color:var(--text-secondary);">${i.totalOccupied} / ${i.totalCapacity} beds · ${$}%</span>
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
    `,document.getElementById("hostel-filter").addEventListener("change",u=>{pe(u.target.value),r()}),s.querySelectorAll('a.link-accent[href^="#"]').forEach(u=>{u.addEventListener("click",y=>{y.preventDefault(),window.location.hash=u.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var u;return(u=document.getElementById("admin-home"))==null?void 0:u.classList.replace("page-enter","page-active")})}}function Re(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const te={Plumbing:"🔧",Electricity:"⚡",WiFi:"📶",Cleanliness:"🧹",Carpentry:"🔨",Other:"📋"},ae=["open","in-progress","resolved"],Pe=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"];async function He(t){async function a(){t.innerHTML='<div class="page-loading">Loading…</div>';try{const r=J(),c=r?`?hostel=${encodeURIComponent(r)}`:"",s=await h.get(`/complaints${c}`);De(t,s,a)}catch(r){t.innerHTML=`<div class="page-error">Failed to load: ${r.message}</div>`}}K(()=>a()),await a()}function De(t,a,r){let c=a,s="all",i="",p=null;t.innerHTML=`
    <div class="page-enter" id="admin-complaints-page">
      <div class="page-header">
        <h2>Complaints Management</h2>
        <p>Review, approve, and update status of all hostel complaints.</p>
      </div>

      <!-- Summary chips -->
      <div class="card-grid" style="margin-bottom: var(--space-6);">
        <div class="card" style="text-align:center; cursor:pointer;" data-quick="all">
          <div class="card-label">Total</div>
          <div class="card-value" style="font-size:var(--text-2xl);">${c.length}</div>
        </div>
        ${ae.map(e=>{const m=c.filter(f=>f.status===e).length;return`<div class="card card-accent-${e==="open"?"amber":e==="in-progress"?"blue":"green"}" style="text-align:center; cursor:pointer;" data-quick="${e}">
            <div class="card-label">${e}</div>
            <div class="card-value" style="font-size:var(--text-2xl);">${m}</div>
          </div>`}).join("")}
      </div>

      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">All Complaints</div>
          <div style="display:flex; gap: var(--space-2); flex-wrap: wrap; align-items: center;">
            <select class="form-select" id="cat-filter" style="width: auto; padding: 4px 28px 4px 10px; font-size: var(--text-xs);">
              <option value="">All Categories</option>
              ${Pe.map(e=>`<option value="${e}">${te[e]} ${e}</option>`).join("")}
            </select>
            <button class="filter-chip active" data-status="all">All</button>
            ${ae.map(e=>`<button class="filter-chip" data-status="${e}">${e}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-body"></div>
      </div>
    </div>
  `;function d(){let e=c;return i&&(e=e.filter(m=>m.category===i)),s!=="all"&&(e=e.filter(m=>m.status===s)),e}function n(){const e=d(),m=document.getElementById("complaints-body");if(e.length===0){m.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No complaints match the current filter.</p>';return}m.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>#</th><th>Student</th><th>Room</th><th>Category</th>
            <th>Description</th><th>Date</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody id="cmp-tbody">
          ${e.map(o=>`
            <tr class="cmp-row${p===o.complaint_id?" expanded-row":""}" data-id="${o.complaint_id}">
              <td class="cell-mono">${o.complaint_id}</td>
              <td><div>${o.student_name||o.student_id}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${o.roll_no||""}</div></td>
              <td class="cell-mono">${o.room_id||"—"}</td>
              <td>${te[o.category]||""} ${o.category}</td>
              <td style="max-width:180px; overflow:hidden; text-overflow:ellipsis;" title="${o.description}">${o.description.slice(0,45)}${o.description.length>45?"…":""}</td>
              <td class="cell-mono">
                <div>${o.date}</div>
                ${o.resolved_date?`<div style="font-size:10px; color:var(--accent-green); margin-top:2px;">Res: ${o.resolved_date}</div>`:""}
              </td>
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
              <tr class="photo-row" data-for="${o.complaint_id}" style="${p===o.complaint_id?"":"display:none"}">
                <td colspan="8" style="padding: var(--space-3) var(--space-6); background: var(--bg-elevated);">
                  <img src="${o.photo_base64}" alt="Complaint photo" style="max-width:280px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);" />
                  ${o.admin_note?`<p style="font-size:var(--text-xs); color:var(--text-secondary); margin-top: var(--space-2);">Note: ${o.admin_note}</p>`:""}
                </td>
              </tr>
            `:""}
          `).join("")}
        </tbody>
      </table>
    `,m.querySelectorAll("[data-action]").forEach(o=>{o.addEventListener("click",async()=>{const f=+o.dataset.id,$=o.dataset.action;o.disabled=!0;try{const u=await h.patch(`/complaints/${f}/status`,{status:$});c=c.map(y=>y.complaint_id===f?{...y,...u}:y),k(`Complaint #${f} → ${$}`,"success"),n()}catch(u){k(u.message,"error"),o.disabled=!1}})}),m.querySelectorAll(".cmp-row").forEach(o=>{o.addEventListener("click",()=>{const f=+o.dataset.id;p=p===f?null:f,n()})})}t.querySelectorAll("[data-status]").forEach(e=>{e.addEventListener("click",()=>{t.querySelectorAll("[data-status]").forEach(m=>m.classList.remove("active")),e.classList.add("active"),s=e.dataset.status,n()})}),t.querySelectorAll("[data-quick]").forEach(e=>{e.addEventListener("click",()=>{var m;s=e.dataset.quick,t.querySelectorAll("[data-status]").forEach(o=>o.classList.remove("active")),(m=t.querySelector(`[data-status="${s}"]`))==null||m.classList.add("active"),n()})}),document.getElementById("cat-filter").addEventListener("change",e=>{i=e.target.value,n()}),n(),requestAnimationFrame(()=>{var e;return(e=document.getElementById("admin-complaints-page"))==null?void 0:e.classList.replace("page-enter","page-active")})}const S=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),je=["Senior MBBS boys hostel","Senior MBBS girls hostel"],Fe=t=>t==="M"?"boys":t==="F"?"girls":"";function oe(t,a){const r=Fe(a);return t.filter(c=>c.current_occupancy<c.capacity&&(r?c.hostel.toLowerCase().includes(r):!0)).sort((c,s)=>c.floor-s.floor||c.room_id.localeCompare(s.room_id))}function re(t){return`<option value="${t.room_id}">${t.room_id} · Floor ${t.floor} · ${t.type} · ${t.current_occupancy}/${t.capacity}</option>`}async function Ne(t){async function a(){t.innerHTML='<div class="page-loading">Loading…</div>';try{const[r,c,s,i,p]=await Promise.all([h.get("/rooms"),h.get("/rooms/booking-requests"),h.get("/rooms/change-requests"),h.get("/rooms/allocations"),h.get("/students")]);Oe(t,{rooms:r,bookReqs:c,changeReqs:s,allocs:i,students:p},a)}catch(r){t.innerHTML=`<div class="page-error">Failed to load: ${r.message}</div>`}}K(()=>a()),await a()}function Oe(t,a,r){const{rooms:c,bookReqs:s,changeReqs:i,students:p}=a;let d="grid",n=J();const e=s.filter(y=>y.status==="pending").length+i.filter(y=>y.status==="pending").length;t.innerHTML=`
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
            ${je.map(y=>`<option value="${y}" ${y===n?"selected":""}>${y}</option>`).join("")}
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
  `,document.getElementById("rm-hostel-filter").addEventListener("change",y=>{n=y.target.value,pe(n),m()}),document.querySelectorAll("#rm-tabs button").forEach(y=>{y.addEventListener("click",()=>{d=y.dataset.tab,document.querySelectorAll("#rm-tabs button").forEach(x=>x.classList.toggle("active",x.dataset.tab===d)),["grid","student","pending","history"].forEach(x=>{document.getElementById(`rm-panel-${x}`).style.display=x===d?"":"none"}),m()})});function m(){d==="grid"&&o(),d==="student"&&f(),d==="pending"&&$(),d==="history"&&u()}function o(){const y=n?c.filter(g=>g.hostel===n):c,x={};y.forEach(g=>{(x[g.hostel]=x[g.hostel]||{})[g.floor]=(x[g.hostel][g.floor]||[]).concat(g)});const b=y.filter(g=>g.current_occupancy===0).length,B=y.filter(g=>g.current_occupancy>0&&g.current_occupancy<g.capacity).length,l=y.filter(g=>g.current_occupancy>=g.capacity).length,w=g=>{const E=g.capacity>0?g.current_occupancy/g.capacity:0;return`<div class="room-cell ${E===0?"vacant":E<1?"partial":"full"}" title="${g.room_id} — ${g.type} ${g.current_occupancy}/${g.capacity}">
        <div class="rc-id">${g.room_id}</div>
        <div style="font-size:9px;opacity:.5;">${g.current_occupancy}/${g.capacity}</div>
      </div>`};let v=`<div style="display:flex;gap:var(--space-5);margin-bottom:var(--space-5);">
      <span style="display:flex;align-items:center;gap:6px;font-size:var(--text-xs);color:var(--text-secondary);"><span class="legend-dot" style="background:var(--accent-green);"></span>Vacant (${b})</span>
      <span style="display:flex;align-items:center;gap:6px;font-size:var(--text-xs);color:var(--text-secondary);"><span class="legend-dot" style="background:var(--accent-amber);"></span>Partial (${B})</span>
      <span style="display:flex;align-items:center;gap:6px;font-size:var(--text-xs);color:var(--text-secondary);"><span class="legend-dot" style="background:var(--accent-red);"></span>Full (${l})</span>
    </div>`;for(const g of Object.keys(x).sort()){v+=`<div style="font-size:var(--text-sm);font-weight:600;margin:var(--space-6) 0 var(--space-3);padding-bottom:var(--space-2);border-bottom:1px solid var(--border-subtle);">${g}</div>`;for(const E of Object.keys(x[g]).sort((L,I)=>+L-+I)){const L=x[g][E].sort((A,R)=>A.room_id.localeCompare(R.room_id)),I=L.slice(0,5),C=L.slice(5,10);v+=`<div class="floor-label">Floor ${E}</div>
          <div class="floor-corridor">
            <div class="corridor-row">${I.map(w).join("")}</div>
            <div class="corridor-strip"><div class="corridor-strip-line"></div><div class="corridor-strip-label">corridor</div><div class="corridor-strip-line"></div></div>
            <div class="corridor-row">${C.map(w).join("")}</div>
          </div>`}}y.length||(v+='<p style="padding:var(--space-8);text-align:center;color:var(--text-tertiary);">No rooms.</p>'),document.getElementById("rm-panel-grid").innerHTML=v}function f(){const y=document.getElementById("rm-panel-student");y.innerHTML=`
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
                <select class="form-select" name="course" required>
                  <option value="">Select</option>
                  <option>MBBS</option><option>Nursing</option><option>AHS</option><option>BDS</option><option>MD</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Year *</label>
                <select class="form-select" name="year" required>
                  <option value="">Select</option>
                  ${[1,2,3,4,5].map(b=>`<option value="${b}">Year ${b}</option>`).join("")}
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
            Students (${p.length})
          </div>
          <div id="quick-alloc-msg"></div>
          <div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-bottom:var(--space-3);">Unallocated · click  Assign to allocate a room</div>
          <div style="display:flex;flex-direction:column;gap:var(--space-3);" id="student-quick-list">
            ${p.map(b=>`
              <div style="display:flex;align-items:center;justify-content:space-between;padding:var(--space-3) var(--space-4);background:var(--bg-elevated);border-radius:var(--radius-md);border:1px solid var(--border-subtle);gap:var(--space-3);">
                <div>
                  <div style="font-size:var(--text-sm);font-weight:500;">${S(b.name)}</div>
                  <div style="font-size:var(--text-xs);color:var(--text-tertiary);">${b.roll_no} · ${b.gender==="M"?"Male":"Female"} · ${b.course} Yr ${b.year}</div>
                </div>
                <div style="display:flex;align-items:center;gap:var(--space-3);flex-shrink:0;">
                  ${b.alloc_room?`<span class="cell-mono" style="font-size:var(--text-xs);color:var(--accent-green);">${b.alloc_room}</span>`:`<select class="form-select" style="padding:4px 8px;font-size:var(--text-xs);min-width:130px;" data-stu="${b.student_id}" data-gender="${b.gender}" id="qs-room-${b.student_id}">
                        <option value="">— room —</option>
                        ${oe(c,b.gender).map(re).join("")}
                      </select>
                      <button class="btn btn-sm btn-primary" data-assign="${b.student_id}" style="white-space:nowrap;">Assign</button>`}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `,document.getElementById("also-alloc").addEventListener("change",b=>{document.getElementById("alloc-room-wrap").style.display=b.target.checked?"":"none",x()}),document.getElementById("add-gender").addEventListener("change",x);function x(){const b=document.getElementById("add-gender").value,B=oe(c,b),l=document.getElementById("alloc-room-select");l.innerHTML=B.length?`<option value="">— pick a room —</option>${B.map(re).join("")}`:'<option value="">No vacant rooms for this gender</option>'}y.querySelectorAll("[data-assign]").forEach(b=>{b.addEventListener("click",async()=>{const B=b.dataset.assign,l=document.getElementById(`qs-room-${B}`),w=l==null?void 0:l.value;if(!w){k("Select a room first.","error");return}b.disabled=!0,b.textContent="…";try{await h.post("/rooms/direct-allocate",{student_id:B,room_id:w}),k("Room assigned!","success"),await r()}catch(v){k(v.message,"error"),b.disabled=!1,b.textContent="Assign"}})}),document.getElementById("add-form").addEventListener("submit",async b=>{b.preventDefault();const B=new FormData(b.target),l=Object.fromEntries(B.entries());l.hostel=l.gender==="M"?"Senior MBBS boys hostel":l.gender==="F"?"Senior MBBS girls hostel":"";const w=document.getElementById("add-btn"),v=document.getElementById("add-msg");w.disabled=!0,w.textContent="Registering…",v.innerHTML="";try{const g=await h.post("/students",l);document.getElementById("also-alloc").checked&&l.alloc_room&&await h.post("/rooms/direct-allocate",{student_id:g.student_id,room_id:l.alloc_room}),v.innerHTML=`<div style="background:color-mix(in srgb,var(--accent-green) 10%,transparent);border:1px solid color-mix(in srgb,var(--accent-green) 25%,transparent);border-radius:8px;padding:var(--space-3) var(--space-4);font-size:var(--text-sm);color:var(--accent-green);margin-bottom:var(--space-4);">
          ✓ ${g.name} registered. ID: <strong>${g.student_id}</strong> · Login: <strong>${g.default_password}</strong>
        </div>`,b.target.reset(),document.getElementById("alloc-room-wrap").style.display="none",await r()}catch(g){v.innerHTML=`<div style="background:color-mix(in srgb,var(--accent-red) 10%,transparent);border:1px solid color-mix(in srgb,var(--accent-red) 25%,transparent);border-radius:8px;padding:var(--space-3) var(--space-4);font-size:var(--text-sm);color:var(--accent-red);margin-bottom:var(--space-4);">${g.message}</div>`,w.disabled=!1,w.textContent="Register Student"}})}function $(){const y=document.getElementById("rm-panel-pending"),x=s.filter(l=>l.status==="pending"&&(!n||l.room_hostel===n||l.hostel===n)),b=i.filter(l=>l.status==="pending"&&(!n||l.from_hostel===n||l.to_hostel===n));if(!x.length&&!b.length){y.innerHTML='<p style="padding:var(--space-10);text-align:center;color:var(--text-tertiary);">No pending requests. All clear.</p>';return}let B="";x.length&&(B+=`<div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-tertiary);margin-bottom:var(--space-4);">Booking Requests (${x.length})</div>
      <div style="display:flex;flex-direction:column;gap:var(--space-3);margin-bottom:var(--space-8);">
        ${x.map(l=>{var w;return`
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-3);padding:var(--space-4) var(--space-5);background:var(--bg-elevated);border:1px solid var(--border-subtle);border-radius:var(--radius-md);">
            <div>
              <div style="font-weight:500;font-size:var(--text-sm);">${S(l.student_name)} <span style="font-size:var(--text-xs);color:var(--text-tertiary);font-weight:400;">· ${l.roll_no}</span></div>
              <div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-top:2px;">Room <strong style="color:var(--text-secondary);">${l.room_id}</strong> · ${S(l.room_hostel||l.hostel)} · Floor ${l.floor} · ${l.type} · ${l.current_occupancy}/${l.capacity}</div>
              ${l.preferences?`<div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-top:2px;">Pref: ${S(l.preferences)}</div>`:""}
              <div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-top:2px;">${(w=l.created_at)==null?void 0:w.slice(0,10)}</div>
            </div>
            <div style="display:flex;gap:var(--space-2);">
              <button class="btn btn-sm btn-primary" data-breq="${l.request_id}" data-action="approved">Approve</button>
              <button class="btn btn-sm btn-secondary" style="color:var(--accent-red);" data-breq="${l.request_id}" data-action="rejected">Reject</button>
            </div>
          </div>`}).join("")}
      </div>`),b.length&&(B+=`<div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-tertiary);margin-bottom:var(--space-4);">Room Change Requests (${b.length})</div>
      <div style="display:flex;flex-direction:column;gap:var(--space-3);">
        ${b.map(l=>{var w;return`
          <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-3);padding:var(--space-4) var(--space-5);background:var(--bg-elevated);border:1px solid var(--border-subtle);border-radius:var(--radius-md);">
            <div>
              <div style="font-weight:500;font-size:var(--text-sm);">${S(l.student_name)} <span style="font-size:var(--text-xs);color:var(--text-tertiary);font-weight:400;">· ${l.roll_no}</span></div>
              <div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-top:2px;"><strong style="color:var(--text-secondary);">${l.from_room_id}</strong> → <strong style="color:var(--text-secondary);">${l.to_room_id}</strong> · ${S(l.to_hostel)} · Fl ${l.to_floor} · ${l.to_occupancy}/${l.to_capacity}</div>
              <div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-top:2px;">Reason: ${S(l.reason)}</div>
              <div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-top:2px;">${(w=l.created_at)==null?void 0:w.slice(0,10)}</div>
            </div>
            <div style="display:flex;gap:var(--space-2);">
              <button class="btn btn-sm btn-primary" data-creq="${l.change_id}" data-action="approved">Approve</button>
              <button class="btn btn-sm btn-secondary" style="color:var(--accent-red);" data-creq="${l.change_id}" data-action="rejected">Reject</button>
            </div>
          </div>`}).join("")}
      </div>`),y.innerHTML=B,y.querySelectorAll("[data-breq]").forEach(l=>{l.addEventListener("click",async()=>{l.disabled=!0;try{await h.patch(`/rooms/booking-requests/${l.dataset.breq}`,{status:l.dataset.action}),k(`Request ${l.dataset.action}.`,"success"),await r()}catch(w){k(w.message,"error"),l.disabled=!1}})}),y.querySelectorAll("[data-creq]").forEach(l=>{l.addEventListener("click",async()=>{l.disabled=!0;try{await h.patch(`/rooms/change-requests/${l.dataset.creq}`,{status:l.dataset.action}),k(`Room change ${l.dataset.action}.`,"success"),await r()}catch(w){k(w.message,"error"),l.disabled=!1}})})}function u(){const y=document.getElementById("rm-panel-history"),x=n?s.filter(l=>l.room_hostel===n||l.hostel===n):s,b=n?i.filter(l=>l.from_hostel===n||l.to_hostel===n):i,B=[...x.map(l=>({type:"booking",...l})),...b.map(l=>({type:"change",...l}))].sort((l,w)=>(w.created_at||"").localeCompare(l.created_at||""));if(!B.length){y.innerHTML='<p style="padding:var(--space-10);text-align:center;color:var(--text-tertiary);">No requests yet.</p>';return}y.innerHTML=`
      <div class="table-container">
        <table>
          <thead><tr><th>Type</th><th>Student</th><th>Details</th><th>Status</th><th>Date</th></tr></thead>
          <tbody>
            ${B.map(l=>{var g;const w=l.type==="booking"?`Room ${l.room_id} · ${S(l.room_hostel||l.hostel)} · Fl ${l.floor}`:`${l.from_room_id} → ${l.to_room_id} · ${S(l.to_hostel)}`,v=l.status==="pending"?"open":l.status==="approved"?"in-progress":"resolved";return`<tr>
                <td style="font-size:var(--text-xs);color:var(--text-tertiary);">${l.type==="booking"?"Booking":"Transfer"}</td>
                <td><div style="font-weight:500;font-size:var(--text-sm);">${S(l.student_name)}</div><div style="font-size:var(--text-xs);color:var(--text-tertiary);">${l.roll_no}</div></td>
                <td style="font-size:var(--text-xs);">${w}</td>
                <td><span class="badge badge-${v}">${l.status}</span></td>
                <td class="cell-mono">${(g=l.created_at)==null?void 0:g.slice(0,10)}</td>
              </tr>`}).join("")}
          </tbody>
        </table>
      </div>`}o(),requestAnimationFrame(()=>{var y;return(y=document.getElementById("admin-rooms-page"))==null?void 0:y.classList.replace("page-enter","page-active")})}const se=["Plumber","Electrician","WiFi","Authority","Other"],N={Plumber:"🔧",Electrician:"⚡",WiFi:"📶",Authority:"🏛️",Other:"📋"};async function Ge(t){t.innerHTML='<div class="page-loading">Loading…</div>';try{const a=await h.get("/resources");Ue(t,a)}catch(a){t.innerHTML=`<div class="page-error">Failed to load: ${a.message}</div>`}}function Ue(t,a){let r=a,c="",s=null;t.innerHTML=`
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
                ${se.map(d=>`<option value="${d}">${N[d]} ${d}</option>`).join("")}
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
              ${se.map(d=>`<option value="${d}">${N[d]} ${d}</option>`).join("")}
            </select>
          </div>
        </div>
        <div id="resources-body"></div>
      </div>
    </div>
  `;function i(){const d=c?r.filter(m=>m.category===c):r,n=document.getElementById("resources-body");if(d.length===0){n.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No contacts in this category.</p>';return}const e={};d.forEach(m=>{e[m.category]||(e[m.category]=[]),e[m.category].push(m)}),n.innerHTML=Object.entries(e).map(([m,o])=>`
      <div style="padding: var(--space-4) var(--space-6);">
        <div style="font-size: var(--text-xs); font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: var(--text-tertiary); margin-bottom: var(--space-3);">
          ${N[m]||""} ${m}
        </div>
        ${o.map(f=>`
          <div class="contact-row" style="margin-bottom: var(--space-2);">
            <div class="contact-avatar">${f.name[0].toUpperCase()}</div>
            <div class="contact-info" style="flex:1;">
              <div class="contact-name">${f.name}</div>
              <div class="contact-meta">
                ${f.phone?`📞 <a href="tel:${f.phone}" style="color:inherit;">${f.phone}</a>`:""}
                ${f.email?` · 📧 <a href="mailto:${f.email}" style="color:inherit;">${f.email}</a>`:""}
              </div>
              ${f.notes?`<div style="font-size:var(--text-xs); color:var(--text-tertiary); margin-top:2px;">${f.notes}</div>`:""}
            </div>
            <div style="display:flex; gap:4px; flex-shrink:0;">
              <button class="btn btn-sm btn-secondary" data-edit="${f.resource_id}">Edit</button>
              <button class="btn btn-sm btn-secondary" data-delete="${f.resource_id}" style="color:var(--accent-red);">Del</button>
            </div>
          </div>
        `).join("")}
        <hr style="border:none; border-top: 1px solid var(--border-subtle); margin: var(--space-3) 0;" />
      </div>
    `).join(""),n.querySelectorAll("[data-edit]").forEach(m=>{m.addEventListener("click",()=>{const o=r.find(f=>f.resource_id===+m.dataset.edit);o&&(s=o.resource_id,document.getElementById("res-cat").value=o.category,document.getElementById("res-name").value=o.name,document.getElementById("res-phone").value=o.phone||"",document.getElementById("res-email").value=o.email||"",document.getElementById("res-notes").value=o.notes||"",document.getElementById("resource-form-title").textContent="Edit Contact",document.getElementById("btn-res-submit").textContent="Save Changes",document.getElementById("btn-res-cancel").style.display="",document.getElementById("resource-form").scrollIntoView({behavior:"smooth"}))})}),n.querySelectorAll("[data-delete]").forEach(m=>{m.addEventListener("click",async()=>{if(confirm("Delete this contact?")){m.disabled=!0;try{await h.delete(`/resources/${m.dataset.delete}`),r=r.filter(o=>o.resource_id!==+m.dataset.delete),k("Contact deleted.","success"),i()}catch(o){k(o.message,"error"),m.disabled=!1}}})})}document.getElementById("cat-filter-select").addEventListener("change",d=>{c=d.target.value,i()}),document.getElementById("btn-res-cancel").addEventListener("click",()=>{s=null,document.getElementById("resource-form").reset(),document.getElementById("resource-form-title").textContent="Add New Contact",document.getElementById("btn-res-submit").textContent="Add Contact",document.getElementById("btn-res-cancel").style.display="none"});const p=document.getElementById("resource-form");p.addEventListener("submit",async d=>{d.preventDefault(),t.querySelectorAll(".form-error").forEach($=>$.classList.remove("visible"));let n=!0;const e=document.getElementById("res-cat").value,m=document.getElementById("res-name").value.trim();if(e||(document.getElementById("err-res-cat").classList.add("visible"),n=!1),m||(document.getElementById("err-res-name").classList.add("visible"),n=!1),!n)return;const o={category:e,name:m,phone:document.getElementById("res-phone").value.trim()||null,email:document.getElementById("res-email").value.trim()||null,notes:document.getElementById("res-notes").value.trim()||null},f=document.getElementById("btn-res-submit");f.disabled=!0;try{if(s){const $=await h.put(`/resources/${s}`,o);r=r.map(u=>u.resource_id===s?$:u),k("Contact updated.","success"),document.getElementById("btn-res-cancel").click()}else r=[await h.post("/resources",o),...r],k("Contact added.","success"),p.reset();i()}catch($){k($.message,"error")}finally{f.disabled=!1}}),i(),requestAnimationFrame(()=>{var d;return(d=document.getElementById("resources-page"))==null?void 0:d.classList.replace("page-enter","page-active")})}const Ve={home:$e,complaints:ke,booking:O,forum:ce,resources:Me},We={home:ze,complaints:He,rooms:Ne,forum:ce,resources:Ge};let M="home",U=null;function V(){return Y()==="admin"?We:Ve}function H(t){const a=V();a[t]||(t="home"),M=t,window.location.hash=t;const r=document.getElementById("sidebar"),c=document.getElementById("main-content");ye(r,M,H),a[t](c,()=>H(M)),U&&U.close()}function ie(){document.body.innerHTML=`
    <div id="app">
      <aside id="sidebar" class="sidebar"></aside>
      <main id="main-content" class="main"></main>
    </div>
  `}function Ye(){if(!ve()){xe(()=>{ie(),ne()});return}ie(),ne()}function ne(){U=fe();const t=window.location.hash.replace("#","");M=V()[t]?t:"home",H(M),window.addEventListener("hashchange",()=>{const r=window.location.hash.replace("#","");V()[r]&&r!==M&&H(r)})}(function(){const t=localStorage.getItem("ahcms_theme")||"light";document.documentElement.setAttribute("data-theme",t)})();Ye();
