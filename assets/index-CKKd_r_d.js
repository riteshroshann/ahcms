(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}})();const S="ahcms_token",_="ahcms_user";(function(){const a=localStorage.getItem("cw_hostel_token"),n=localStorage.getItem("cw_hostel_user");a&&(localStorage.setItem(S,a),localStorage.removeItem("cw_hostel_token")),n&&(localStorage.setItem(_,n),localStorage.removeItem("cw_hostel_user"))})();function z(s,a){localStorage.setItem(S,s),localStorage.setItem(_,JSON.stringify(a))}function V(){return localStorage.getItem(S)}function H(){try{return JSON.parse(localStorage.getItem(_))}catch{return null}}function F(){var s;return((s=H())==null?void 0:s.role)||null}function Q(){const s=V();if(!s)return!1;try{return JSON.parse(atob(s.split(".")[1])).exp*1e3>Date.now()}catch{return!1}}function G(){localStorage.removeItem(S),localStorage.removeItem(_)}const $={home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',complaints:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="15" r="0.5" fill="currentColor"/></svg>',booking:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',forum:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-1"/><path d="M15 3H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l4-4h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/></svg>',rooms:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',resources:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',theme:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'},X=[{id:"home",label:"Home",icon:$.home},{id:"complaints",label:"Complaint",icon:$.complaints},{id:"booking",label:"Room Booking",icon:$.booking},{id:"forum",label:"Community Forum",icon:$.forum}],Z=[{id:"home",label:"Home",icon:$.home},{id:"complaints",label:"Complaints",icon:$.complaints},{id:"rooms",label:"Room Details",icon:$.rooms},{id:"forum",label:"Community Forum",icon:$.forum},{id:"resources",label:"Resources",icon:$.resources}];function ee(s,a,n){var d,t;const l=F(),i=H(),c=l==="admin"?Z:X,p=l==="admin"?"Admin Panel":"Student Portal";s.innerHTML=`
    <div class="sidebar-brand">
      <h1>AHCMS</h1>
      <span>${p}</span>
    </div>

    <div class="sidebar-user">
      <div class="sidebar-user-avatar">${((i==null?void 0:i.name)||"U")[0].toUpperCase()}</div>
      <div class="sidebar-user-info">
        <div class="sidebar-user-name">${(i==null?void 0:i.name)||"User"}</div>
        <div class="sidebar-user-role">${l==="admin"?"Administrator":(i==null?void 0:i.roll_no)||"Student"}</div>
      </div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Navigation</div>
      ${c.map(e=>`
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
        ${$.theme}
        Toggle Theme
      </button>
      <button class="nav-item logout-btn" id="nav-logout">
        ${$.logout}
        Sign Out
      </button>
      <p>v2.0 · 2026</p>
    </div>
  `,s.querySelectorAll(".nav-item[data-page]").forEach(e=>{e.addEventListener("click",()=>n(e.dataset.page)),e.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),e.click())})}),(d=document.getElementById("nav-logout"))==null||d.addEventListener("click",()=>{G(),window.location.reload()}),(t=document.getElementById("nav-theme"))==null||t.addEventListener("click",()=>{const o=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",o),localStorage.setItem("ahcms_theme",o)})}function te(){const s=document.createElement("button");s.className="sidebar-toggle",s.id="sidebar-toggle",s.innerHTML=$.menu,s.setAttribute("aria-label","Toggle navigation");const a=document.createElement("div");a.className="sidebar-overlay",a.id="sidebar-overlay",document.body.appendChild(s),document.body.appendChild(a);const n=document.getElementById("sidebar");function l(){n.classList.add("open"),a.classList.add("show"),s.innerHTML=$.close}function i(){n.classList.remove("open"),a.classList.remove("show"),s.innerHTML=$.menu}return s.addEventListener("click",()=>n.classList.contains("open")?i():l()),a.addEventListener("click",i),{close:i}}const ae="/api";async function C(s,a,n){const l=V(),i={"Content-Type":"application/json"};l&&(i.Authorization=`Bearer ${l}`);const c=await fetch(`${ae}${a}`,{method:s,headers:i,body:n!==void 0?JSON.stringify(n):void 0});if(c.status===401){G(),window.location.reload();return}const p=await c.json().catch(()=>({}));if(!c.ok)throw new Error(p.error||`Request failed (${c.status})`);return p}const f={get:s=>C("GET",s),post:(s,a)=>C("POST",s,a),patch:(s,a)=>C("PATCH",s,a),put:(s,a)=>C("PUT",s,a),delete:s=>C("DELETE",s)};let B=null;function oe(){B||(B=document.createElement("div"),B.className="toast-container",document.body.appendChild(B))}function b(s,a="info",n=3500){oe();const l=document.createElement("div");l.className=`toast toast-${a}`,l.textContent=s,B.appendChild(l),requestAnimationFrame(()=>{requestAnimationFrame(()=>{l.classList.add("show")})}),setTimeout(()=>{l.classList.remove("show"),setTimeout(()=>l.remove(),300)},n)}function se(s){var l;document.body.innerHTML=`
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
  `,(l=document.getElementById("login-theme"))==null||l.addEventListener("click",()=>{const c=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",c),localStorage.setItem("ahcms_theme",c)});let a="student";document.querySelectorAll(".login-tab").forEach(i=>{i.addEventListener("click",()=>{a=i.dataset.tab,document.querySelectorAll(".login-tab").forEach(c=>c.classList.remove("active")),i.classList.add("active"),document.getElementById("form-student").classList.toggle("hidden",a!=="student"),document.getElementById("form-admin").classList.toggle("hidden",a!=="admin"),document.getElementById("form-register").classList.add("hidden")})}),document.getElementById("btn-show-register").addEventListener("click",()=>{document.getElementById("form-admin").classList.add("hidden"),document.getElementById("form-register").classList.remove("hidden")}),document.getElementById("btn-back-login").addEventListener("click",()=>{document.getElementById("form-register").classList.add("hidden"),document.getElementById("form-admin").classList.remove("hidden")});function n(i,c){const p=document.getElementById(i);p.disabled=c,p.textContent=c?"Signing in…":"Sign In"}document.getElementById("form-student").addEventListener("submit",async i=>{i.preventDefault();const c=document.getElementById("s-roll").value.trim(),p=document.getElementById("s-pass").value,d=document.getElementById("err-student");if(d.textContent="",!c||!p){d.textContent="All fields required.";return}n("btn-student-login",!0);try{const{token:t,user:e}=await f.post("/auth/student/login",{roll_no:c,password:p});z(t,e),s()}catch(t){d.textContent=t.message}finally{n("btn-student-login",!1)}}),document.getElementById("form-admin").addEventListener("submit",async i=>{i.preventDefault();const c=document.getElementById("a-email").value.trim(),p=document.getElementById("a-pass").value,d=document.getElementById("err-admin");if(d.textContent="",!c||!p){d.textContent="All fields required.";return}n("btn-admin-login",!0);try{const{token:t,user:e}=await f.post("/auth/admin/login",{email:c,password:p});z(t,e),s()}catch(t){d.textContent=t.message}finally{n("btn-admin-login",!1)}}),document.getElementById("form-register").addEventListener("submit",async i=>{i.preventDefault();const c=document.getElementById("r-name").value.trim(),p=document.getElementById("r-email").value.trim(),d=document.getElementById("r-pass").value,t=document.getElementById("err-register");if(t.textContent="",!c||!p||!d){t.textContent="All fields required.";return}if(d.length<8){t.textContent="Password must be at least 8 characters.";return}const e=document.getElementById("btn-register");e.disabled=!0,e.textContent="Creating…";try{await f.post("/auth/admin/register",{name:c,email:p,password:d}),b("Account created! Please sign in.","success"),document.getElementById("btn-back-login").click(),document.getElementById("a-email").value=p}catch(o){t.textContent=o.message}finally{e.disabled=!1,e.textContent="Create Account"}})}async function ie(s){s.innerHTML='<div class="page-loading">Loading…</div>';try{const{student:a,allocation:n,complaints:l,wardens:i,wardenOfficePhone:c}=await f.get("/dashboard/student");re(s,a,n,l,i,c)}catch(a){s.innerHTML=`<div class="page-error">Failed to load dashboard: ${a.message}</div>`}}function re(s,a,n,l,i,c){var t;const p=i.filter(e=>e.role==="Warden"),d=i.filter(e=>e.role==="Guard");s.innerHTML=`
    <div class="page-enter" id="student-home">
      <div class="page-header">
        <h2>Welcome, ${((t=a==null?void 0:a.name)==null?void 0:t.split(" ")[0])||"Student"} 👋</h2>
        <p>${(a==null?void 0:a.course)||""} · ${(a==null?void 0:a.hostel)||""} Hostel · Year ${(a==null?void 0:a.year)||""}</p>
      </div>

      <!-- Student Info Card -->
      <div class="form-section" style="max-width: none; margin-bottom: var(--space-10);">
        <div class="form-section-title">Your Profile</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-4);">
          ${[["Roll No",a==null?void 0:a.roll_no],["Course",a==null?void 0:a.course],["Admission",a==null?void 0:a.adm_year],["Passing Year",a==null?void 0:a.pass_year],["Gender",(a==null?void 0:a.gender)==="M"?"Male":(a==null?void 0:a.gender)==="F"?"Female":a==null?void 0:a.gender],["Address",(a==null?void 0:a.address)||"—"]].map(([e,o])=>`
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
          <div class="card-value">${l.filter(e=>e.status==="open").length}</div>
          <div class="card-sub">${l.filter(e=>e.status==="in-progress").length} in progress</div>
        </div>

        <div class="card card-accent-green">
          <div class="card-label">Resolved</div>
          <div class="card-value">${l.filter(e=>e.status==="resolved").length}</div>
          <div class="card-sub">of ${l.length} total</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6);">
        <!-- On-Duty Wardens -->
        <div class="form-section" style="max-width: none;">
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:var(--space-2); margin-bottom:var(--space-4);">
            <div class="form-section-title" style="margin-bottom:0;">On-Duty Wardens</div>
            ${c?`
              <a href="tel:${c}" style="
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
                Office: ${c}
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
          ${l.length===0?'<p class="empty-msg">No complaints filed yet.</p>':`<div class="activity-list">
                ${l.slice(0,5).map(e=>`
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
  `,s.querySelectorAll('a.link-accent[href^="#"]').forEach(e=>{e.addEventListener("click",o=>{o.preventDefault(),window.location.hash=e.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var e;return(e=document.getElementById("student-home"))==null?void 0:e.classList.replace("page-enter","page-active")})}const P=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"],q={Plumbing:"🔧",Electricity:"⚡",WiFi:"📶",Cleanliness:"🧹",Carpentry:"🔨",Other:"📋"},ne=["open","in-progress","resolved"];async function le(s){s.innerHTML='<div class="page-loading">Loading…</div>';let a=[];try{a=await f.get("/complaints")}catch(n){s.innerHTML=`<div class="page-error">Failed to load: ${n.message}</div>`;return}de(s,a)}function de(s,a){let n=a,l="all",i="";s.innerHTML=`
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
                ${P.map(e=>`<option value="${e}">${q[e]} ${e}</option>`).join("")}
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
          ${P.map(e=>`<option value="${e}">${q[e]} ${e}</option>`).join("")}
        </select>
      </div>

      <!-- My Complaints Table -->
      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">My Complaints</div>
          <div style="display:flex; gap: var(--space-2); flex-wrap: wrap;">
            <button class="filter-chip active" data-status="all">All</button>
            ${ne.map(e=>`<button class="filter-chip" data-status="${e}">${e}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-list"></div>
      </div>
    </div>
  `;function c(){let e=n;i&&(e=e.filter(r=>r.category===i)),l!=="all"&&(e=e.filter(r=>r.status===l));const o=document.getElementById("complaints-list");if(e.length===0){o.innerHTML='<p style="padding: var(--space-8); text-align:center; color: var(--text-tertiary);">No complaints found.</p>';return}o.innerHTML=`
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
              <td>${q[r.category]||""} ${r.category}</td>
              <td style="max-width:220px; overflow:hidden; text-overflow:ellipsis;" title="${r.description}">${r.description.slice(0,50)}${r.description.length>50?"…":""}</td>
              <td class="cell-mono">${r.date}</td>
              <td><span class="badge badge-${r.status}">${r.status}</span></td>
              <td style="color: var(--text-tertiary); font-size: var(--text-xs);">${r.admin_note||"—"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `}document.getElementById("cat-filter-select").addEventListener("change",e=>{i=e.target.value,c()}),s.querySelectorAll("[data-status]").forEach(e=>{e.addEventListener("click",()=>{s.querySelectorAll("[data-status]").forEach(o=>o.classList.remove("active")),e.classList.add("active"),l=e.dataset.status,c()})});const p=document.getElementById("cmp-category"),d=document.getElementById("cmp-other-group");p.addEventListener("change",e=>{e.target.value==="Other"?d.style.display="":(d.style.display="none",document.getElementById("cmp-other-type").value="",document.getElementById("err-cmp-other").classList.remove("visible"))});const t=document.getElementById("complaint-form");t.addEventListener("submit",async e=>{e.preventDefault();let o=!0;s.querySelectorAll(".form-error").forEach(m=>m.classList.remove("visible"));const r=document.getElementById("cmp-category").value,v=document.getElementById("cmp-other-type").value.trim(),u=document.getElementById("cmp-desc").value.trim(),g=document.getElementById("cmp-photo").files[0];if(r||(document.getElementById("err-cmp-cat").classList.add("visible"),o=!1),r==="Other"&&!v&&(document.getElementById("err-cmp-other").classList.add("visible"),o=!1),u||(document.getElementById("err-cmp-desc").classList.add("visible"),o=!1),!o){b("Fill in all required fields.","error");return}const h=document.getElementById("cmp-submit");h.disabled=!0,h.textContent="Submitting…";try{let m=null;g&&(m=await new Promise((y,k)=>{const w=new FileReader;w.onload=()=>y(w.result),w.onerror=k,w.readAsDataURL(g)}));const x=r==="Other"&&v?`[Other: ${v}] ${u}`:u,E=await f.post("/complaints",{category:r,description:x,photo_base64:m});n=[E,...n],b(`Complaint #${E.complaint_id} submitted.`,"success"),t.reset(),c()}catch(m){b(m.message,"error")}finally{h.disabled=!1,h.textContent="Submit Complaint"}}),t.addEventListener("reset",()=>{s.querySelectorAll(".form-error").forEach(e=>e.classList.remove("visible")),document.getElementById("cmp-other-group").style.display="none"}),c(),requestAnimationFrame(()=>{var e;return(e=document.getElementById("complaints-page"))==null?void 0:e.classList.replace("page-enter","page-active")})}async function Y(s){s.innerHTML='<div class="page-loading">Loading rooms…</div>';try{const[a,{allocation:n},l]=await Promise.all([f.get("/rooms"),f.get("/rooms/my-allocation"),f.get("/rooms/booking-requests")]);ce(s,a,n,l)}catch(a){s.innerHTML=`<div class="page-error">Failed to load: ${a.message}</div>`}}function ce(s,a,n,l){var u,g,h;const i=H(),c=a.filter(m=>m.hostel===((i==null?void 0:i.hostel)||"")),p=[...new Set(c.map(m=>m.floor))].sort((m,x)=>m-x);let t=p[0]||1,e=null;const o=l.find(m=>m.status==="pending");s.innerHTML=`
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
      `:o?`
        <div class="alert-banner alert-amber" style="margin-bottom:var(--space-6);">
          <strong>Pending request:</strong> Room ${o.room_id} submitted on ${(u=o.created_at)==null?void 0:u.slice(0,10)}. Waiting for admin approval.
        </div>
      `:""}

      <!-- Floor Selector -->
      <div style="display:flex; align-items: center; gap: var(--space-4); margin-bottom: var(--space-6);">
        <span style="font-size: var(--text-sm); color: var(--text-secondary);">Floor:</span>
        <div class="cat-tabs" style="margin:0;">
          ${p.map(m=>`
            <button class="cat-tab${m===t?" active":""}" data-floor="${m}">Floor ${m}</button>
          `).join("")}
        </div>
      </div>

      <!-- Floor Plan -->
      <div class="form-section" style="max-width: none; margin-bottom: var(--space-6);" id="floor-plan-section">
        <div class="form-section-title" id="floor-plan-title">Floor ${t} — ${(i==null?void 0:i.hostel)||""}</div>
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
        ${l.length===0?'<p style="padding: var(--space-6); text-align:center; color:var(--text-tertiary);">No booking requests yet.</p>':`<table>
              <thead><tr><th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th><th>Status</th><th>Note</th><th>Date</th></tr></thead>
              <tbody>
                ${l.map(m=>{var x;return`
                  <tr>
                    <td class="cell-mono">${m.room_id}</td>
                    <td>${m.hostel}</td>
                    <td>${m.floor}</td>
                    <td>${m.type}</td>
                    <td><span class="badge badge-${m.status}">${m.status}</span></td>
                    <td style="color:var(--text-tertiary); font-size:var(--text-xs);">${m.admin_note||"—"}</td>
                    <td class="cell-mono">${(x=m.created_at)==null?void 0:x.slice(0,10)}</td>
                  </tr>
                `}).join("")}
              </tbody>
            </table>`}
      </div>
    </div>
  `;function r(m){const x=c.filter(y=>y.floor===m);document.getElementById("floor-plan-title").textContent=`Floor ${m} — ${(i==null?void 0:i.hostel)||""}`;const E=document.getElementById("floor-plan");if(x.length===0){E.innerHTML='<p style="color:var(--text-tertiary); padding: var(--space-4);">No rooms on this floor.</p>';return}E.innerHTML=x.map(y=>{const k=y.capacity>0?y.current_occupancy/y.capacity:0,w=k===0?"vacant":k<1?"partial":"full",J=(e==null?void 0:e.room_id)===y.room_id;return`
        <button class="room-cell ${w}${J?" selected":""}"
                data-room="${y.room_id}"
                ${w==="full"?"disabled":""}
                title="${y.room_id} · ${y.type} · ${y.current_occupancy}/${y.capacity}">
          <span class="room-cell-id">${y.room_id}</span>
          <span class="room-cell-type">${y.type[0]}</span>
          <span class="room-cell-occ">${y.current_occupancy}/${y.capacity}</span>
        </button>
      `}).join(""),E.querySelectorAll(".room-cell:not([disabled])").forEach(y=>{y.addEventListener("click",()=>{e=c.find(k=>k.room_id===y.dataset.room),r(m),v(e)})})}function v(m){const x=document.getElementById("room-detail-panel"),E=document.getElementById("room-detail-body");document.getElementById("room-detail-title").textContent=`Room ${m.room_id}`,E.innerHTML=`
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: var(--space-4);">
        ${[["Hostel",m.hostel],["Floor",m.floor],["Type",m.type],["Capacity",`${m.capacity} beds`],["Occupied",`${m.current_occupancy} / ${m.capacity}`],["Available",`${m.available_slots} slot(s)`]].map(([y,k])=>`
          <div>
            <div style="font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase; letter-spacing:.06em;">${y}</div>
            <div style="font-size:var(--text-sm); margin-top:4px; color:var(--text-primary);">${k}</div>
          </div>
        `).join("")}
      </div>
    `,x.style.display=n||o?"none":"block",(n||o)&&(x.style.display="none")}s.querySelectorAll(".cat-tab[data-floor]").forEach(m=>{m.addEventListener("click",()=>{s.querySelectorAll(".cat-tab[data-floor]").forEach(x=>x.classList.remove("active")),m.classList.add("active"),t=+m.dataset.floor,e=null,document.getElementById("room-detail-panel").style.display="none",r(t)})}),(g=document.getElementById("btn-cancel-room"))==null||g.addEventListener("click",()=>{e=null,document.getElementById("room-detail-panel").style.display="none",r(t)}),(h=document.getElementById("booking-form"))==null||h.addEventListener("submit",async m=>{if(m.preventDefault(),!e)return;const x=document.getElementById("booking-pref").value.trim(),E=document.getElementById("btn-book");E.disabled=!0,E.textContent="Submitting…";try{await f.post("/rooms/book",{room_id:e.room_id,preferences:x}),b(`Booking request for ${e.room_id} submitted!`,"success"),Y(s)}catch(y){b(y.message,"error"),E.disabled=!1,E.textContent="Request This Room"}}),r(t),requestAnimationFrame(()=>{var m;return(m=document.getElementById("booking-page"))==null?void 0:m.classList.replace("page-enter","page-active")})}async function K(s){s.innerHTML='<div class="page-loading">Loading forum…</div>';try{const a=await f.get("/forum");me(s,a)}catch(a){s.innerHTML=`<div class="page-error">Failed to load forum: ${a.message}</div>`}}function me(s,a){const n=F()==="admin";let l=a;s.innerHTML=`
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
  `;function i(){const p=document.getElementById("forum-feed"),d=document.getElementById("forum-empty");if(l.length===0){p.innerHTML="",d.style.display="block";return}d.style.display="none",p.innerHTML=l.map(t=>`
      <div class="forum-post card" style="background:var(--bg-primary); padding:var(--space-4); margin-bottom:var(--space-4); border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
        <div class="forum-post-header" style="display:flex; align-items:center; gap:var(--space-3); margin-bottom:var(--space-2);">
          <div class="forum-avatar" style="font-size:24px; background:transparent; border:none;">${t.avatar_icon||"👤"}</div>
          <div>
            <div class="forum-post-title" style="font-weight:600; color:var(--text-primary);">${I(t.title)}</div>
            <div class="forum-post-meta" style="font-size:var(--text-xs); color:var(--text-tertiary);">${I(t.avatar_name||"Anonymous")} · ${N(t.created_at)}</div>
          </div>
        </div>
        <div class="forum-post-body" style="font-size:var(--text-sm); color:var(--text-secondary); line-height:1.6; margin-left:var(--space-10); margin-bottom:var(--space-3);">${I(t.content)}</div>
        
        <div class="forum-post-actions" style="margin-left:var(--space-10); display:flex; gap:var(--space-4); align-items:center; margin-bottom:var(--space-2);">
          <div style="display:flex; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--border-subtle); overflow:hidden;">
            <button class="vote-btn" data-type="post" data-id="${t.post_id}" data-dir="up" style="background:transparent; border:none; padding:4px 8px; cursor:pointer; color:var(--text-secondary);">⇧ ${t.upvotes||0}</button>
            <div style="width:1px; background:var(--border-subtle);"></div>
            <button class="vote-btn" data-type="post" data-id="${t.post_id}" data-dir="down" style="background:transparent; border:none; padding:4px 8px; cursor:pointer; color:var(--text-secondary);">⇩ ${t.downvotes||0}</button>
          </div>
          ${n?"":`<button class="reply-toggle-btn" data-post-id="${t.post_id}" style="background:transparent; border:none; color:var(--text-tertiary); font-size:var(--text-xs); cursor:pointer; display:flex; gap:4px; align-items:center;">💬 Reply</button>`}
        </div>

        <!-- Replies -->
        ${t.replies&&t.replies.length>0?`
          <div class="forum-replies" style="margin-left:var(--space-10); border-left:2px solid var(--border-subtle); padding-left:var(--space-4); margin-top:var(--space-4); display:flex; flex-direction:column; gap:var(--space-4);">
            ${t.replies.map(e=>`
              <div class="forum-reply">
                <div class="forum-post-header" style="display:flex; align-items:center; gap:var(--space-2); margin-bottom:4px;">
                  <div class="forum-avatar" style="font-size:16px; background:transparent; border:none; width:auto; height:auto;">${e.avatar_icon||"👤"}</div>
                  <div class="forum-post-meta" style="font-size:var(--text-xs); color:var(--text-tertiary);">${I(e.avatar_name||"Anonymous")} · ${N(e.created_at)}</div>
                </div>
                <div class="forum-post-body" style="font-size:var(--text-sm); line-height:1.5; color:var(--text-secondary); margin-left:var(--space-6);">${I(e.content)}</div>
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
          <div id="reply-form-${t.post_id}" style="display:none; margin-left:var(--space-10); margin-top:var(--space-4);">
            <textarea id="reply-input-${t.post_id}" class="form-textarea" rows="2" placeholder="Write an anonymous reply..." style="padding:var(--space-2); min-height:60px;"></textarea>
            <div style="margin-top:var(--space-2); display:flex; gap:var(--space-2);">
              <button class="btn btn-primary reply-submit-btn" data-post-id="${t.post_id}" style="padding:4px 12px; font-size:12px;">Submit Reply</button>
              <button class="btn btn-secondary reply-toggle-btn" data-post-id="${t.post_id}" style="padding:4px 12px; font-size:12px;">Cancel</button>
            </div>
          </div>
        `}
      </div>
    `).join("")}if(document.getElementById("forum-feed").addEventListener("click",async p=>{const d=p.target.closest(".vote-btn");if(d&&!d.disabled){const o=d.dataset.type,r=d.dataset.id,v=d.dataset.dir;d.disabled=!0;try{const u=await f.patch("/forum/vote",{type:o,id:parseInt(r,10),dir:v});if(o==="post"){const g=l.find(h=>h.post_id===parseInt(r,10));g&&(g.upvotes=u.upvotes,g.downvotes=u.downvotes)}else for(const g of l)if(g.replies){const h=g.replies.find(m=>m.reply_id===parseInt(r,10));if(h){h.upvotes=u.upvotes,h.downvotes=u.downvotes;break}}i()}catch(u){b(u.message,"error"),d.disabled=!1}return}const t=p.target.closest(".reply-toggle-btn");if(t){const o=t.dataset.postId,r=document.getElementById(`reply-form-${o}`);r&&(r.style.display=r.style.display==="none"?"block":"none");return}const e=p.target.closest(".reply-submit-btn");if(e){const o=e.dataset.postId,r=document.getElementById(`reply-input-${o}`),v=r==null?void 0:r.value.trim();if(!v){b("Reply content cannot be empty","error");return}e.disabled=!0,e.textContent="...";try{const u=await f.post(`/forum/${o}/reply`,{content:v}),g=l.find(h=>h.post_id===parseInt(o,10));g&&(g.replies||(g.replies=[]),g.replies.push(u)),b("Reply posted","success"),i()}catch(u){b(u.message,"error"),e.disabled=!1,e.textContent="Submit Reply"}return}}),!n){const p=document.getElementById("forum-form");p.addEventListener("submit",async d=>{d.preventDefault();let t=!0;s.querySelectorAll(".form-error").forEach(v=>v.classList.remove("visible"));const e=document.getElementById("f-title").value.trim(),o=document.getElementById("f-content").value.trim();if(e||(document.getElementById("err-f-title").classList.add("visible"),t=!1),o||(document.getElementById("err-f-content").classList.add("visible"),t=!1),!t)return;const r=document.getElementById("btn-post");r.disabled=!0,r.textContent="Posting…";try{l=[await f.post("/forum",{title:e,content:o}),...l],b("Posted anonymously!","success"),p.reset(),i()}catch(v){b(v.message,"error")}finally{r.disabled=!1,r.textContent="Post Anonymously"}}),p.addEventListener("reset",()=>s.querySelectorAll(".form-error").forEach(d=>d.classList.remove("visible")))}i(),requestAnimationFrame(()=>{var p;return(p=document.getElementById("forum-page"))==null?void 0:p.classList.replace("page-enter","page-active")})}function I(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function N(s){try{return new Date(s).toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return s}}async function pe(s){s.innerHTML='<div class="page-loading">Loading…</div>';try{const a=await f.get("/dashboard/admin");ve(s,a)}catch(a){s.innerHTML=`<div class="page-error">Failed to load: ${a.message}</div>`}}function ve(s,{stats:a,recentComplaints:n,wardens:l,wardenOfficePhone:i}){const c=l.filter(t=>t.role==="Warden"),p=l.filter(t=>t.role==="Guard"),d=a.totalCapacity>0?Math.round(a.totalOccupied/a.totalCapacity*100):0;s.innerHTML=`
    <div class="page-enter" id="admin-home">
      <div class="page-header">
        <h2>Admin Dashboard</h2>
        <p>System-wide overview — hostel occupancy, complaints, and on-duty staff.</p>
      </div>

      <!-- Stat Cards -->
      <div class="card-grid">
        <div class="card card-accent-blue">
          <div class="card-label">Total Rooms</div>
          <div class="card-value">${a.totalRooms}</div>
          <div class="card-sub">${a.vacantRooms} vacant · ${d}% utilized</div>
        </div>
        <div class="card card-accent-amber">
          <div class="card-label">Open Complaints</div>
          <div class="card-value">${a.openComplaints}</div>
          <div class="card-sub">${a.inProgressComplaints} in progress</div>
        </div>
        <div class="card card-accent-green">
          <div class="card-label">Resolved</div>
          <div class="card-value">${a.resolvedComplaints}</div>
          <div class="card-sub">complaints closed</div>
        </div>
        <div class="card card-accent-purple">
          <div class="card-label">Students</div>
          <div class="card-value">${a.totalStudents}</div>
          <div class="card-sub">${a.pendingBookings} pending bookings</div>
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
          ${c.map(t=>`
            <div class="contact-row" style="align-items: flex-start;">
              <div class="contact-avatar">${t.name[0]}</div>
              <div class="contact-info" style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2px;">
                  <div class="contact-name">${t.name}</div>
                  <a href="tel:${t.phone}" class="contact-phone" style="margin-left: auto;">${t.phone||"—"}</a>
                </div>
                <div class="contact-meta">${t.hostel} Hostel · ${t.email||""}</div>
                <div style="display: flex; flex-wrap: wrap; gap: 12px; font-size: 11px; margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--border-color); color: var(--text-secondary);">
                  <span><span style="font-weight:600; color:var(--text-tertiary);">Last:</span> ${t.previous?t.previous.name:"Unknown"}</span>
                  <span style="color:var(--accent-green);"><span style="font-weight:600;">Current:</span> Active</span>
                  <span><span style="font-weight:600; color:var(--text-tertiary);">Next:</span> ${t.next?t.next.name:"Unknown"}</span>
                </div>
              </div>
            </div>
          `).join("")}
          <div class="form-section-title" style="margin-top: var(--space-5);">On-Duty Guards</div>
          ${p.map(t=>`
            <div class="contact-row">
              <div class="contact-avatar guard">${t.name[0]}</div>
              <div class="contact-info">
                <div class="contact-name">${t.name}</div>
                <div class="contact-meta">${t.hostel} · ${t.shift} shift</div>
              </div>
              <a href="tel:${t.phone}" class="contact-phone">${t.phone||"—"}</a>
            </div>
          `).join("")}
        </div>

        <!-- Recent Complaints -->
        <div class="form-section" style="max-width: none;">
          <div class="form-section-title">Recent Complaints</div>
          <div class="activity-list">
            ${n.map(t=>`
                <div class="activity-item">
                  <div class="activity-dot" style="background:${t.status==="open"?"var(--accent-amber)":t.status==="in-progress"?"var(--accent-blue)":"var(--accent-green)"}"></div>
                  <div class="activity-content">
                    <div class="activity-text">
                      <strong>${t.student_name||t.student_id}</strong> — ${t.category}
                      <span class="badge badge-${t.status}">${t.status}</span>
                    </div>
                    <div class="activity-time">${t.date} · ${t.room_id||"—"}</div>
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
            <div class="occ-track-inner" style="width: ${d}%"></div>
          </div>
          <span style="font-size:var(--text-sm); color:var(--text-secondary);">${a.totalOccupied} / ${a.totalCapacity} beds · ${d}%</span>
        </div>
        <div class="card-grid" style="margin-top: var(--space-4); margin-bottom: 0;">
          <div class="card" style="text-align:center;">
            <div class="card-label">Total Beds</div>
            <div class="card-value" style="font-size:var(--text-2xl);">${a.totalCapacity}</div>
          </div>
          <div class="card" style="text-align:center;">
            <div class="card-label">Occupied</div>
            <div class="card-value" style="font-size:var(--text-2xl);">${a.totalOccupied}</div>
          </div>
          <div class="card" style="text-align:center;">
            <div class="card-label">Vacant</div>
            <div class="card-value" style="font-size:var(--text-2xl); color: var(--accent-green);">${a.totalCapacity-a.totalOccupied}</div>
          </div>
        </div>
      </div>
    </div>
  `,s.querySelectorAll('a.link-accent[href^="#"]').forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),window.location.hash=t.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var t;return(t=document.getElementById("admin-home"))==null?void 0:t.classList.replace("page-enter","page-active")})}const j={Plumbing:"🔧",Electricity:"⚡",WiFi:"📶",Cleanliness:"🧹",Carpentry:"🔨",Other:"📋"},O=["open","in-progress","resolved"],ue=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"];async function ge(s){s.innerHTML='<div class="page-loading">Loading…</div>';try{const a=await f.get("/complaints");ye(s,a)}catch(a){s.innerHTML=`<div class="page-error">Failed to load: ${a.message}</div>`}}function ye(s,a){let n=a,l="all",i="",c=null;s.innerHTML=`
    <div class="page-enter" id="admin-complaints-page">
      <div class="page-header">
        <h2>Complaints Management</h2>
        <p>Review, approve, and update status of all hostel complaints.</p>
      </div>

      <!-- Summary chips -->
      <div class="card-grid" style="margin-bottom: var(--space-6);">
        <div class="card" style="text-align:center; cursor:pointer;" data-quick="all">
          <div class="card-label">Total</div>
          <div class="card-value" style="font-size:var(--text-2xl);">${n.length}</div>
        </div>
        ${O.map(t=>{const e=n.filter(r=>r.status===t).length;return`<div class="card card-accent-${t==="open"?"amber":t==="in-progress"?"blue":"green"}" style="text-align:center; cursor:pointer;" data-quick="${t}">
            <div class="card-label">${t}</div>
            <div class="card-value" style="font-size:var(--text-2xl);">${e}</div>
          </div>`}).join("")}
      </div>

      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">All Complaints</div>
          <div style="display:flex; gap: var(--space-2); flex-wrap: wrap; align-items: center;">
            <select class="form-select" id="cat-filter" style="width: auto; padding: 4px 28px 4px 10px; font-size: var(--text-xs);">
              <option value="">All Categories</option>
              ${ue.map(t=>`<option value="${t}">${j[t]} ${t}</option>`).join("")}
            </select>
            <button class="filter-chip active" data-status="all">All</button>
            ${O.map(t=>`<button class="filter-chip" data-status="${t}">${t}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-body"></div>
      </div>
    </div>
  `;function p(){let t=n;return i&&(t=t.filter(e=>e.category===i)),l!=="all"&&(t=t.filter(e=>e.status===l)),t}function d(){const t=p(),e=document.getElementById("complaints-body");if(t.length===0){e.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No complaints match the current filter.</p>';return}e.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>#</th><th>Student</th><th>Room</th><th>Category</th>
            <th>Description</th><th>Date</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody id="cmp-tbody">
          ${t.map(o=>`
            <tr class="cmp-row${c===o.complaint_id?" expanded-row":""}" data-id="${o.complaint_id}">
              <td class="cell-mono">${o.complaint_id}</td>
              <td><div>${o.student_name||o.student_id}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${o.roll_no||""}</div></td>
              <td class="cell-mono">${o.room_id||"—"}</td>
              <td>${j[o.category]||""} ${o.category}</td>
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
              <tr class="photo-row" data-for="${o.complaint_id}" style="${c===o.complaint_id?"":"display:none"}">
                <td colspan="8" style="padding: var(--space-3) var(--space-6); background: var(--bg-elevated);">
                  <img src="${o.photo_base64}" alt="Complaint photo" style="max-width:280px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);" />
                  ${o.admin_note?`<p style="font-size:var(--text-xs); color:var(--text-secondary); margin-top: var(--space-2);">Note: ${o.admin_note}</p>`:""}
                </td>
              </tr>
            `:""}
          `).join("")}
        </tbody>
      </table>
    `,e.querySelectorAll("[data-action]").forEach(o=>{o.addEventListener("click",async()=>{const r=+o.dataset.id,v=o.dataset.action;o.disabled=!0;try{const u=await f.patch(`/complaints/${r}/status`,{status:v});n=n.map(g=>g.complaint_id===r?{...g,...u}:g),b(`Complaint #${r} → ${v}`,"success"),d()}catch(u){b(u.message,"error"),o.disabled=!1}})}),e.querySelectorAll(".cmp-row").forEach(o=>{o.addEventListener("click",()=>{const r=+o.dataset.id;c=c===r?null:r,d()})})}s.querySelectorAll("[data-status]").forEach(t=>{t.addEventListener("click",()=>{s.querySelectorAll("[data-status]").forEach(e=>e.classList.remove("active")),t.classList.add("active"),l=t.dataset.status,d()})}),s.querySelectorAll("[data-quick]").forEach(t=>{t.addEventListener("click",()=>{var e;l=t.dataset.quick,s.querySelectorAll("[data-status]").forEach(o=>o.classList.remove("active")),(e=s.querySelector(`[data-status="${l}"]`))==null||e.classList.add("active"),d()})}),document.getElementById("cat-filter").addEventListener("change",t=>{i=t.target.value,d()}),d(),requestAnimationFrame(()=>{var t;return(t=document.getElementById("admin-complaints-page"))==null?void 0:t.classList.replace("page-enter","page-active")})}async function fe(s){s.innerHTML='<div class="page-loading">Loading…</div>';try{const[a,n]=await Promise.all([f.get("/rooms"),f.get("/rooms/booking-requests")]);be(s,a,n)}catch(a){s.innerHTML=`<div class="page-error">Failed to load: ${a.message}</div>`}}function be(s,a,n){let l=n,i="",c="rooms";const p=[...new Set(a.map(e=>e.hostel))].sort();s.innerHTML=`
    <div class="page-enter" id="admin-rooms-page">
      <div class="page-header">
        <h2>Room Information</h2>
        <p>Full room listing with occupancy and student assignments. Manage booking requests.</p>
      </div>

      <div class="cat-tabs" style="margin-bottom: var(--space-6);">
        <button class="cat-tab active" data-tab="rooms">Room Listing</button>
        <button class="cat-tab" data-tab="requests">
          Booking Requests
          ${l.filter(e=>e.status==="pending").length>0?`<span class="badge badge-open" style="margin-left:4px;">${l.filter(e=>e.status==="pending").length}</span>`:""}
        </button>
      </div>

      <!-- Rooms Panel -->
      <div id="panel-rooms">
        <div style="display:flex; gap: var(--space-3); align-items: center; margin-bottom: var(--space-4);">
          <span style="font-size: var(--text-sm); color: var(--text-secondary);">Hostel:</span>
          <div class="cat-tabs" style="margin:0;">
            <button class="cat-tab active" data-hostel="">All</button>
            ${p.map(e=>`<button class="cat-tab" data-hostel="${e}">${e}</button>`).join("")}
          </div>
        </div>
        <div id="rooms-body"></div>
      </div>

      <!-- Requests Panel -->
      <div id="panel-requests" style="display:none;">
        <div id="requests-body"></div>
      </div>
    </div>
  `;function d(){const e=i?a.filter(r=>r.hostel===i):a,o=document.getElementById("rooms-body");o.innerHTML=`
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th>
              <th>Occupancy</th><th>Students</th>
            </tr>
          </thead>
          <tbody>
            ${e.map(r=>{const v=r.capacity>0?r.current_occupancy/r.capacity:0,u=v===0?"vacant":v<1?"partial":"full",g=u==="vacant"?"var(--accent-green)":u==="partial"?"var(--accent-amber)":"var(--accent-red)",h=(r.students||[]).map(m=>`<span style="font-size:var(--text-xs); color:var(--text-secondary); display:block;">${m.name} (Yr ${m.year})</span>`).join("");return`
                <tr>
                  <td class="cell-mono">${r.room_id}</td>
                  <td>${r.hostel}</td>
                  <td>${r.floor}</td>
                  <td>${r.type}</td>
                  <td>
                    <div class="occupancy-bar">
                      <div class="occupancy-track">
                        <div class="occupancy-fill" style="width:${v*100}%; background:${g};"></div>
                      </div>
                      <span style="font-size:var(--text-xs); font-family: var(--font-mono); color:var(--text-secondary);">${r.current_occupancy}/${r.capacity}</span>
                    </div>
                  </td>
                  <td>${h||'<span style="color:var(--text-tertiary); font-size:var(--text-xs);">Vacant</span>'}</td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    `}function t(){const e=document.getElementById("requests-body");if(l.length===0){e.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No booking requests yet.</p>';return}e.innerHTML=`
      <div class="table-container">
        <table>
          <thead>
            <tr><th>Student</th><th>Year</th><th>Room</th><th>Type</th><th>Preferences</th><th>Status</th><th>Date</th><th>Action</th></tr>
          </thead>
          <tbody>
            ${l.map(o=>{var r;return`
              <tr>
                <td><div>${o.student_name}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${o.roll_no}</div></td>
                <td>${o.year}</td>
                <td class="cell-mono">${o.room_id}</td>
                <td>${o.type}</td>
                <td style="max-width:140px; font-size:var(--text-xs); color:var(--text-secondary);">${o.preferences||"—"}</td>
                <td><span class="badge badge-${o.status}">${o.status}</span></td>
                <td class="cell-mono">${(r=o.created_at)==null?void 0:r.slice(0,10)}</td>
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
    `,e.querySelectorAll("[data-req]").forEach(o=>{o.addEventListener("click",async()=>{const r=o.dataset.req,v=o.dataset.action;o.disabled=!0;try{const u=await f.patch(`/rooms/booking-requests/${r}`,{status:v});l=l.map(g=>g.request_id===+r?{...g,...u}:g),b(`Request ${v}.`,"success"),t()}catch(u){b(u.message,"error"),o.disabled=!1}})})}s.querySelectorAll("[data-tab]").forEach(e=>{e.addEventListener("click",()=>{s.querySelectorAll("[data-tab]").forEach(o=>o.classList.remove("active")),e.classList.add("active"),c=e.dataset.tab,document.getElementById("panel-rooms").style.display=c==="rooms"?"":"none",document.getElementById("panel-requests").style.display=c==="requests"?"":"none"})}),s.querySelectorAll("[data-hostel]").forEach(e=>{e.addEventListener("click",()=>{s.querySelectorAll("[data-hostel]").forEach(o=>o.classList.remove("active")),e.classList.add("active"),i=e.dataset.hostel,d()})}),d(),t(),requestAnimationFrame(()=>{var e;return(e=document.getElementById("admin-rooms-page"))==null?void 0:e.classList.replace("page-enter","page-active")})}const D=["Plumber","Electrician","WiFi","Authority","Other"],T={Plumber:"🔧",Electrician:"⚡",WiFi:"📶",Authority:"🏛️",Other:"📋"};async function he(s){s.innerHTML='<div class="page-loading">Loading…</div>';try{const a=await f.get("/resources");xe(s,a)}catch(a){s.innerHTML=`<div class="page-error">Failed to load: ${a.message}</div>`}}function xe(s,a){let n=a,l="",i=null;s.innerHTML=`
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
                ${D.map(d=>`<option value="${d}">${T[d]} ${d}</option>`).join("")}
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
            ${D.map(d=>`<button class="filter-chip" data-cat="${d}">${T[d]} ${d}</button>`).join("")}
          </div>
        </div>
        <div id="resources-body"></div>
      </div>
    </div>
  `;function c(){const d=l?n.filter(o=>o.category===l):n,t=document.getElementById("resources-body");if(d.length===0){t.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No contacts in this category.</p>';return}const e={};d.forEach(o=>{e[o.category]||(e[o.category]=[]),e[o.category].push(o)}),t.innerHTML=Object.entries(e).map(([o,r])=>`
      <div style="padding: var(--space-4) var(--space-6);">
        <div style="font-size: var(--text-xs); font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: var(--text-tertiary); margin-bottom: var(--space-3);">
          ${T[o]||""} ${o}
        </div>
        ${r.map(v=>`
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
    `).join(""),t.querySelectorAll("[data-edit]").forEach(o=>{o.addEventListener("click",()=>{const r=n.find(v=>v.resource_id===+o.dataset.edit);r&&(i=r.resource_id,document.getElementById("res-cat").value=r.category,document.getElementById("res-name").value=r.name,document.getElementById("res-phone").value=r.phone||"",document.getElementById("res-email").value=r.email||"",document.getElementById("res-notes").value=r.notes||"",document.getElementById("resource-form-title").textContent="Edit Contact",document.getElementById("btn-res-submit").textContent="Save Changes",document.getElementById("btn-res-cancel").style.display="",document.getElementById("resource-form").scrollIntoView({behavior:"smooth"}))})}),t.querySelectorAll("[data-delete]").forEach(o=>{o.addEventListener("click",async()=>{if(confirm("Delete this contact?")){o.disabled=!0;try{await f.delete(`/resources/${o.dataset.delete}`),n=n.filter(r=>r.resource_id!==+o.dataset.delete),b("Contact deleted.","success"),c()}catch(r){b(r.message,"error"),o.disabled=!1}}})})}s.querySelectorAll("[data-cat]").forEach(d=>{d.addEventListener("click",()=>{s.querySelectorAll("[data-cat]").forEach(t=>t.classList.remove("active")),d.classList.add("active"),l=d.dataset.cat,c()})}),document.getElementById("btn-res-cancel").addEventListener("click",()=>{i=null,document.getElementById("resource-form").reset(),document.getElementById("resource-form-title").textContent="Add New Contact",document.getElementById("btn-res-submit").textContent="Add Contact",document.getElementById("btn-res-cancel").style.display="none"});const p=document.getElementById("resource-form");p.addEventListener("submit",async d=>{d.preventDefault(),s.querySelectorAll(".form-error").forEach(u=>u.classList.remove("visible"));let t=!0;const e=document.getElementById("res-cat").value,o=document.getElementById("res-name").value.trim();if(e||(document.getElementById("err-res-cat").classList.add("visible"),t=!1),o||(document.getElementById("err-res-name").classList.add("visible"),t=!1),!t)return;const r={category:e,name:o,phone:document.getElementById("res-phone").value.trim()||null,email:document.getElementById("res-email").value.trim()||null,notes:document.getElementById("res-notes").value.trim()||null},v=document.getElementById("btn-res-submit");v.disabled=!0;try{if(i){const u=await f.put(`/resources/${i}`,r);n=n.map(g=>g.resource_id===i?u:g),b("Contact updated.","success"),document.getElementById("btn-res-cancel").click()}else n=[await f.post("/resources",r),...n],b("Contact added.","success"),p.reset();c()}catch(u){b(u.message,"error")}finally{v.disabled=!1}}),c(),requestAnimationFrame(()=>{var d;return(d=document.getElementById("resources-page"))==null?void 0:d.classList.replace("page-enter","page-active")})}const $e={home:ie,complaints:le,booking:Y,forum:K},Ee={home:pe,complaints:ge,rooms:fe,forum:K,resources:he};let L="home",M=null;function R(){return F()==="admin"?Ee:$e}function A(s){const a=R();a[s]||(s="home"),L=s,window.location.hash=s;const n=document.getElementById("sidebar"),l=document.getElementById("main-content");ee(n,L,A),a[s](l,()=>A(L)),M&&M.close()}function W(){document.body.innerHTML=`
    <div id="app">
      <aside id="sidebar" class="sidebar"></aside>
      <main id="main-content" class="main"></main>
    </div>
  `}function ke(){if(!Q()){se(()=>{W(),U()});return}W(),U()}function U(){M=te();const s=window.location.hash.replace("#","");L=R()[s]?s:"home",A(L),window.addEventListener("hashchange",()=>{const n=window.location.hash.replace("#","");R()[n]&&n!==L&&A(n)})}(function(){const s=localStorage.getItem("ahcms_theme")||"light";document.documentElement.setAttribute("data-theme",s)})();ke();
