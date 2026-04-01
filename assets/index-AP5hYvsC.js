(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))v(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&v(p)}).observe(document,{childList:!0,subtree:!0});function i(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function v(n){if(n.ep)return;n.ep=!0;const l=i(n);fetch(n.href,l)}})();const N="ahcms_token",O="ahcms_user";(function(){const r=localStorage.getItem("cw_hostel_token"),i=localStorage.getItem("cw_hostel_user");r&&(localStorage.setItem(N,r),localStorage.removeItem("cw_hostel_token")),i&&(localStorage.setItem(O,i),localStorage.removeItem("cw_hostel_user"))})();function ae(a,r){localStorage.setItem(N,a),localStorage.setItem(O,JSON.stringify(r))}function me(){return localStorage.getItem(N)}function Q(){try{return JSON.parse(localStorage.getItem(O))}catch{return null}}function X(){var a;return((a=Q())==null?void 0:a.role)||null}function fe(){const a=me();if(!a)return!1;try{return JSON.parse(atob(a.split(".")[1])).exp*1e3>Date.now()}catch{return!1}}function ve(){localStorage.removeItem(N),localStorage.removeItem(O)}const C={home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',complaints:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="15" r="0.5" fill="currentColor"/></svg>',booking:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',forum:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-1"/><path d="M15 3H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l4-4h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/></svg>',rooms:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',resources:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',theme:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'},be=[{id:"home",label:"Home",icon:C.home},{id:"complaints",label:"Complaint",icon:C.complaints},{id:"booking",label:"Room Booking",icon:C.booking},{id:"forum",label:"Community Forum",icon:C.forum},{id:"resources",label:"Resources",icon:C.resources}],he=[{id:"home",label:"Home",icon:C.home},{id:"complaints",label:"Complaints",icon:C.complaints},{id:"rooms",label:"Room Details",icon:C.rooms},{id:"forum",label:"Community Forum",icon:C.forum},{id:"resources",label:"Resources",icon:C.resources}];function xe(a,r,i){var d,c;const v=X(),n=Q(),l=v==="admin"?he:be,p=v==="admin"?"Admin Panel":"Student Portal";a.innerHTML=`
    <div class="sidebar-brand">
      <h1>AHCMS</h1>
      <span>${p}</span>
    </div>

    <div class="sidebar-user">
      <div class="sidebar-user-avatar">${((n==null?void 0:n.name)||"U")[0].toUpperCase()}</div>
      <div class="sidebar-user-info">
        <div class="sidebar-user-name">${(n==null?void 0:n.name)||"User"}</div>
        <div class="sidebar-user-role">${v==="admin"?"Administrator":(n==null?void 0:n.roll_no)||"Student"}</div>
      </div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Navigation</div>
      ${l.map(e=>`
        <a class="nav-item${e.id===r?" active":""}"
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
        ${C.theme}
        Toggle Theme
      </button>
      <button class="nav-item logout-btn" id="nav-logout">
        ${C.logout}
        Sign Out
      </button>
      <p>v2.0 · 2026</p>
    </div>
  `,a.querySelectorAll(".nav-item[data-page]").forEach(e=>{e.addEventListener("click",()=>i(e.dataset.page)),e.addEventListener("keydown",m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),e.click())})}),(d=document.getElementById("nav-logout"))==null||d.addEventListener("click",()=>{ve(),window.location.reload()}),(c=document.getElementById("nav-theme"))==null||c.addEventListener("click",()=>{const m=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",m),localStorage.setItem("ahcms_theme",m)})}function $e(){const a=document.createElement("button");a.className="sidebar-toggle",a.id="sidebar-toggle",a.innerHTML=C.menu,a.setAttribute("aria-label","Toggle navigation");const r=document.createElement("div");r.className="sidebar-overlay",r.id="sidebar-overlay",document.body.appendChild(a),document.body.appendChild(r);const i=document.getElementById("sidebar");function v(){i.classList.add("open"),r.classList.add("show"),a.innerHTML=C.close}function n(){i.classList.remove("open"),r.classList.remove("show"),a.innerHTML=C.menu}return a.addEventListener("click",()=>i.classList.contains("open")?n():v()),r.addEventListener("click",n),{close:n}}const we="/api";async function z(a,r,i){const v=me(),n={"Content-Type":"application/json"};v&&(n.Authorization=`Bearer ${v}`);const l=new AbortController,p=setTimeout(()=>l.abort(),1e4);try{const d=await fetch(`${we}${r}`,{method:a,headers:n,body:i!==void 0?JSON.stringify(i):void 0,signal:l.signal});if(d.status===401){ve(),window.location.reload();return}const c=await d.json().catch(()=>({}));if(!d.ok)throw new Error(c.error||`Request failed (${d.status})`);return c}catch(d){throw d.name==="AbortError"?new Error("Request timed out — is the server running?"):d}finally{clearTimeout(p)}}const h={get:a=>z("GET",a),post:(a,r)=>z("POST",a,r),patch:(a,r)=>z("PATCH",a,r),put:(a,r)=>z("PUT",a,r),delete:a=>z("DELETE",a)};let P=null;function Ee(){P||(P=document.createElement("div"),P.className="toast-container",document.body.appendChild(P))}function w(a,r="info",i=3500){Ee();const v=document.createElement("div");v.className=`toast toast-${r}`,v.textContent=a,P.appendChild(v),requestAnimationFrame(()=>{requestAnimationFrame(()=>{v.classList.add("show")})}),setTimeout(()=>{v.classList.remove("show"),setTimeout(()=>v.remove(),300)},i)}function ke(a){var v;document.body.innerHTML=`
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
  `,(v=document.getElementById("login-theme"))==null||v.addEventListener("click",()=>{const l=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",l),localStorage.setItem("ahcms_theme",l)});let r="student";document.querySelectorAll(".login-tab").forEach(n=>{n.addEventListener("click",()=>{r=n.dataset.tab,document.querySelectorAll(".login-tab").forEach(l=>l.classList.remove("active")),n.classList.add("active"),document.getElementById("form-student").classList.toggle("hidden",r!=="student"),document.getElementById("form-admin").classList.toggle("hidden",r!=="admin"),document.getElementById("form-register").classList.add("hidden")})}),document.getElementById("btn-show-register").addEventListener("click",()=>{document.getElementById("form-admin").classList.add("hidden"),document.getElementById("form-register").classList.remove("hidden")}),document.getElementById("btn-back-login").addEventListener("click",()=>{document.getElementById("form-register").classList.add("hidden"),document.getElementById("form-admin").classList.remove("hidden")});function i(n,l){const p=document.getElementById(n);p.disabled=l,p.textContent=l?"Signing in…":"Sign In"}document.getElementById("form-student").addEventListener("submit",async n=>{n.preventDefault();const l=document.getElementById("s-roll").value.trim(),p=document.getElementById("s-pass").value,d=document.getElementById("err-student");if(d.textContent="",!l||!p){d.textContent="All fields required.";return}i("btn-student-login",!0);try{const{token:c,user:e}=await h.post("/auth/student/login",{roll_no:l,password:p});ae(c,e),a()}catch(c){d.textContent=c.message}finally{i("btn-student-login",!1)}}),document.getElementById("form-admin").addEventListener("submit",async n=>{n.preventDefault();const l=document.getElementById("a-email").value.trim(),p=document.getElementById("a-pass").value,d=document.getElementById("err-admin");if(d.textContent="",!l||!p){d.textContent="All fields required.";return}i("btn-admin-login",!0);try{const{token:c,user:e}=await h.post("/auth/admin/login",{email:l,password:p});ae(c,e),a()}catch(c){d.textContent=c.message}finally{i("btn-admin-login",!1)}}),document.getElementById("form-register").addEventListener("submit",async n=>{n.preventDefault();const l=document.getElementById("r-name").value.trim(),p=document.getElementById("r-email").value.trim(),d=document.getElementById("r-pass").value,c=document.getElementById("err-register");if(c.textContent="",!l||!p||!d){c.textContent="All fields required.";return}if(d.length<8){c.textContent="Password must be at least 8 characters.";return}const e=document.getElementById("btn-register");e.disabled=!0,e.textContent="Creating…";try{await h.post("/auth/admin/register",{name:l,email:p,password:d}),w("Account created! Please sign in.","success"),document.getElementById("btn-back-login").click(),document.getElementById("a-email").value=p}catch(m){c.textContent=m.message}finally{e.disabled=!1,e.textContent="Create Account"}})}async function Ce(a){a.innerHTML='<div class="page-loading">Loading…</div>';try{const{student:r,allocation:i,complaints:v,wardens:n,wardenOfficePhone:l}=await h.get("/dashboard/student");Be(a,r,i,v,n,l)}catch(r){a.innerHTML=`<div class="page-error">Failed to load dashboard: ${r.message}</div>`}}function Be(a,r,i,v,n,l){var c;const p=n.filter(e=>e.role==="Warden"),d=n.filter(e=>e.role==="Guard");a.innerHTML=`
    <div class="page-enter" id="student-home">
      <div class="page-header">
        <h2>Welcome, ${((c=r==null?void 0:r.name)==null?void 0:c.split(" ")[0])||"Student"} 👋</h2>
        <p>${(r==null?void 0:r.course)||""} · ${(r==null?void 0:r.hostel)||""} · Year ${(r==null?void 0:r.year)||""}</p>
      </div>

      <!-- Student Info Card -->
      <div class="form-section" style="max-width: none; margin-bottom: var(--space-10);">
        <div class="form-section-title">Your Profile</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-4);">
          ${[["Roll No",r==null?void 0:r.roll_no],["Course",r==null?void 0:r.course],["Admission",r==null?void 0:r.adm_year],["Passing Year",r==null?void 0:r.pass_year],["Gender",(r==null?void 0:r.gender)==="M"?"Male":(r==null?void 0:r.gender)==="F"?"Female":r==null?void 0:r.gender],["Address",(r==null?void 0:r.address)||"—"]].map(([e,m])=>`
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
          ${i?`<div class="card-value">${i.room_id}</div>
               <div class="card-sub">${i.hostel} · Floor ${i.floor} · ${i.type} · ${i.status}</div>
               <div style="margin-top: var(--space-2); font-size: var(--text-xs); color: var(--text-tertiary);">
                 ${i.from_date} → ${i.to_date}
               </div>`:`<div style="color: var(--text-tertiary); font-size: var(--text-sm); padding: var(--space-2) 0;">
                 No active room allocation. <a class="link-accent" href="#booking">Book a room →</a>
               </div>`}
        </div>

        <div class="card card-accent-amber">
          <div class="card-label">Open Complaints</div>
          <div class="card-value">${v.filter(e=>e.status==="open").length}</div>
          <div class="card-sub">${v.filter(e=>e.status==="in-progress").length} in progress</div>
        </div>

        <div class="card card-accent-green">
          <div class="card-label">Resolved</div>
          <div class="card-value">${v.filter(e=>e.status==="resolved").length}</div>
          <div class="card-sub">of ${v.length} total</div>
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
          ${v.length===0?'<p class="empty-msg">No complaints filed yet.</p>':`<div class="activity-list">
                ${v.slice(0,5).map(e=>`
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
  `,a.querySelectorAll('a.link-accent[href^="#"]').forEach(e=>{e.addEventListener("click",m=>{m.preventDefault(),window.location.hash=e.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var e;return(e=document.getElementById("student-home"))==null?void 0:e.classList.replace("page-enter","page-active")})}const oe=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"],U={Plumbing:"🔧",Electricity:"⚡",WiFi:"📶",Cleanliness:"🧹",Carpentry:"🔨",Other:"📋"},Se=["open","in-progress","resolved"];async function _e(a){a.innerHTML='<div class="page-loading">Loading…</div>';let r=[];try{r=await h.get("/complaints")}catch(i){a.innerHTML=`<div class="page-error">Failed to load: ${i.message}</div>`;return}Le(a,r)}function Le(a,r){let i=r,v="all",n="";a.innerHTML=`
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
                ${oe.map(e=>`<option value="${e}">${U[e]} ${e}</option>`).join("")}
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
          ${oe.map(e=>`<option value="${e}">${U[e]} ${e}</option>`).join("")}
        </select>
      </div>

      <!-- My Complaints Table -->
      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">My Complaints</div>
          <div style="display:flex; gap: var(--space-2); flex-wrap: wrap;">
            <button class="filter-chip active" data-status="all">All</button>
            ${Se.map(e=>`<button class="filter-chip" data-status="${e}">${e}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-list"></div>
      </div>
    </div>
  `;function l(){let e=i;n&&(e=e.filter(s=>s.category===n)),v!=="all"&&(e=e.filter(s=>s.status===v));const m=document.getElementById("complaints-list");if(e.length===0){m.innerHTML='<p style="padding: var(--space-8); text-align:center; color: var(--text-tertiary);">No complaints found.</p>';return}m.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>#</th><th>Category</th><th>Description</th><th>Date</th><th>Status</th><th>Note</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(s=>`
            <tr>
              <td class="cell-mono">${s.complaint_id}</td>
              <td>${U[s.category]||""} ${s.category}</td>
              <td style="max-width:220px; overflow:hidden; text-overflow:ellipsis;" title="${s.description}">${s.description.slice(0,50)}${s.description.length>50?"…":""}</td>
              <td class="cell-mono">${s.date}</td>
              <td><span class="badge badge-${s.status}">${s.status}</span></td>
              <td style="color: var(--text-tertiary); font-size: var(--text-xs);">${s.admin_note||"—"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `}document.getElementById("cat-filter-select").addEventListener("change",e=>{n=e.target.value,l()}),a.querySelectorAll("[data-status]").forEach(e=>{e.addEventListener("click",()=>{a.querySelectorAll("[data-status]").forEach(m=>m.classList.remove("active")),e.classList.add("active"),v=e.dataset.status,l()})});const p=document.getElementById("cmp-category"),d=document.getElementById("cmp-other-group");p.addEventListener("change",e=>{e.target.value==="Other"?d.style.display="":(d.style.display="none",document.getElementById("cmp-other-type").value="",document.getElementById("err-cmp-other").classList.remove("visible"))});const c=document.getElementById("complaint-form");c.addEventListener("submit",async e=>{e.preventDefault();let m=!0;a.querySelectorAll(".form-error").forEach(B=>B.classList.remove("visible"));const s=document.getElementById("cmp-category").value,y=document.getElementById("cmp-other-type").value.trim(),$=document.getElementById("cmp-desc").value.trim(),u=document.getElementById("cmp-photo").files[0];if(s||(document.getElementById("err-cmp-cat").classList.add("visible"),m=!1),s==="Other"&&!y&&(document.getElementById("err-cmp-other").classList.add("visible"),m=!1),$||(document.getElementById("err-cmp-desc").classList.add("visible"),m=!1),!m){w("Fill in all required fields.","error");return}const E=document.getElementById("cmp-submit");E.disabled=!0,E.textContent="Submitting…";try{let B=null;u&&(B=await new Promise((M,L)=>{const o=new FileReader;o.onload=()=>M(o.result),o.onerror=L,o.readAsDataURL(u)}));const A=s==="Other"&&y?`[Other: ${y}] ${$}`:$,I=await h.post("/complaints",{category:s,description:A,photo_base64:B});i=[I,...i],w(`Complaint #${I.complaint_id} submitted.`,"success"),c.reset(),l()}catch(B){w(B.message,"error")}finally{E.disabled=!1,E.textContent="Submit Complaint"}}),c.addEventListener("reset",()=>{a.querySelectorAll(".form-error").forEach(e=>e.classList.remove("visible")),document.getElementById("cmp-other-group").style.display="none"}),l(),requestAnimationFrame(()=>{var e;return(e=document.getElementById("complaints-page"))==null?void 0:e.classList.replace("page-enter","page-active")})}async function Y(a){a.innerHTML='<div class="page-loading">Loading rooms…</div>';try{const[r,{allocation:i},v,n]=await Promise.all([h.get("/rooms"),h.get("/rooms/my-allocation"),h.get("/rooms/booking-requests"),h.get("/rooms/change-requests")]);Ie(a,r,i,v,n)}catch(r){a.innerHTML=`<div class="page-error">Failed to load: ${r.message}</div>`}}function Ie(a,r,i,v,n){var u,E,B,A,I,M,L;const l=Q(),p=r.filter(o=>o.hostel===((l==null?void 0:l.hostel)||"")),d=[...new Set(p.map(o=>o.floor))].sort((o,g)=>o-g);let c=d[0]||1,e=null;const m=v.find(o=>o.status==="pending"),s=n.find(o=>o.status==="pending");if(a.innerHTML=`
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
      ${i?`
        <div class="alloc-card">
          <div style="display:flex; align-items:flex-start; justify-content:space-between; flex-wrap:wrap; gap:var(--space-4);">
            <div>
              <div style="font-size:var(--text-xs); font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:var(--text-tertiary); margin-bottom:var(--space-2);">Your Room</div>
              <div class="alloc-room-num">${i.room_id}</div>
              <div class="alloc-meta">${i.hostel}</div>
              <div class="alloc-meta">Floor ${i.floor} · ${i.type} · ${i.current_occupancy}/${i.capacity} occupied</div>
              <div class="alloc-meta" style="margin-top:var(--space-2);">Since ${i.from_date} · Until ${i.to_date}</div>
            </div>
            <div style="display:flex; flex-direction:column; gap:var(--space-2); align-items:flex-end;">
              <span class="badge badge-in-progress" style="font-size:13px; padding:6px 14px;">Active</span>
              ${s?'<div style="font-size:var(--text-xs); color:var(--accent-amber); margin-top:var(--space-2);">Room change pending review</div>':'<button class="btn btn-secondary" id="btn-show-change" style="margin-top:var(--space-2);">Request Room Change</button>'}
            </div>
          </div>

          <!-- Room change request form (hidden until button click) -->
          <div class="change-req-form" id="change-req-section" style="display:${s?"block":"none"};">
            ${s?`
              <div style="font-size:var(--text-sm); font-weight:600; color:var(--accent-amber); margin-bottom:var(--space-3);">Pending Room Change Request</div>
              <div style="font-size:var(--text-sm); color:var(--text-secondary);">
                You have requested to move to <strong>${s.to_room_id}</strong> (${s.to_hostel}, Floor ${s.to_floor}).
                Submitted on ${(u=s.created_at)==null?void 0:u.slice(0,10)}. Awaiting warden approval.
              </div>
            `:`
              <div style="font-size:var(--text-sm); font-weight:600; margin-bottom:var(--space-4);">Request a Room Change</div>
              <div id="change-msg"></div>
              <form id="change-req-form">
                <div class="form-group">
                  <label class="form-label">Target Room *</label>
                  <select class="form-select" id="change-target-room" name="to_room_id" required>
                    <option value="">— select a different room —</option>
                    ${r.filter(o=>o.room_id!==i.room_id&&o.current_occupancy<o.capacity).sort((o,g)=>o.hostel.localeCompare(g.hostel)||o.floor-g.floor||o.room_id.localeCompare(g.room_id)).map(o=>`<option value="${o.room_id}">[${o.type[0]}] ${o.room_id} · ${o.hostel} · Fl ${o.floor} · ${o.current_occupancy}/${o.capacity}</option>`).join("")}
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
          <div style="font-size:var(--text-sm); color:var(--text-secondary); margin-top:4px;">Submitted ${(E=m.created_at)==null?void 0:E.slice(0,10)} · Waiting for warden approval</div>
        </div>
      `:""}

      <!-- ③ Floor Plan (only shown if not yet allocated) -->
      ${i?"":`
        <div style="display:flex; align-items:center; gap:var(--space-4); margin-bottom:var(--space-5);">
          <span style="font-size:var(--text-sm); color:var(--text-secondary); font-weight:500;">Floor:</span>
          <div class="cat-tabs" style="margin:0;">
            ${d.map(o=>`
              <button class="cat-tab${o===c?" active":""}" data-floor="${o}">Floor ${o}</button>
            `).join("")}
          </div>
        </div>

        <div class="form-section" style="max-width:none; margin-bottom:var(--space-6);" id="floor-plan-section">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:var(--space-4);">
            <div class="form-section-title" id="floor-plan-title" style="margin-bottom:0;">Floor ${c} — ${(l==null?void 0:l.hostel)||""}</div>
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
        ${v.length===0?'<p style="padding:var(--space-6); text-align:center; color:var(--text-tertiary);">No booking requests yet.</p>':`<table>
              <thead><tr><th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th><th>Status</th><th>Note</th><th>Date</th></tr></thead>
              <tbody>
                ${v.map(o=>{var g;return`
                  <tr>
                    <td class="cell-mono">${o.room_id}</td>
                    <td style="font-size:var(--text-xs);">${o.hostel}</td>
                    <td>${o.floor}</td>
                    <td>${o.type}</td>
                    <td><span class="badge badge-${o.status}">${o.status}</span></td>
                    <td style="color:var(--text-tertiary); font-size:var(--text-xs);">${o.admin_note||"—"}</td>
                    <td class="cell-mono">${(g=o.created_at)==null?void 0:g.slice(0,10)}</td>
                  </tr>
                `}).join("")}
              </tbody>
            </table>`}
      </div>

      ${n.length>0?`
      <div class="table-container">
        <div class="table-toolbar"><div class="table-toolbar-title">My Room Change Requests</div></div>
        <table>
          <thead><tr><th>From</th><th>To</th><th>To Hostel</th><th>Reason</th><th>Status</th><th>Note</th><th>Date</th></tr></thead>
          <tbody>
            ${n.map(o=>{var g;return`
              <tr>
                <td class="cell-mono">${o.from_room_id}</td>
                <td class="cell-mono">${o.to_room_id}</td>
                <td style="font-size:var(--text-xs);">${o.to_hostel}</td>
                <td style="max-width:160px; font-size:var(--text-xs);" title="${o.reason}">${o.reason.slice(0,50)}${o.reason.length>50?"…":""}</td>
                <td><span class="badge badge-${o.status==="pending"?"open":o.status==="approved"?"in-progress":"resolved"}">${o.status}</span></td>
                <td style="color:var(--text-tertiary); font-size:var(--text-xs);">${o.admin_note||"—"}</td>
                <td class="cell-mono">${(g=o.created_at)==null?void 0:g.slice(0,10)}</td>
              </tr>
            `}).join("")}
          </tbody>
        </table>
      </div>
      `:""}
    </div>
  `,!i){let o=function(t){const f=p.filter(b=>b.floor===t);document.getElementById("floor-plan-title").textContent=`Floor ${t} — ${(l==null?void 0:l.hostel)||""}`;const k=document.getElementById("floor-plan");if(!f.length){k.innerHTML='<p style="color:var(--text-tertiary); padding:var(--space-4);">No rooms on this floor.</p>';return}k.innerHTML=f.sort((b,x)=>b.room_id.localeCompare(x.room_id)).map(b=>{const x=b.capacity>0?b.current_occupancy/b.capacity:0,R=x===0?"vacant":x<1?"partial":"full",T=(e==null?void 0:e.room_id)===b.room_id;return`
            <button class="room-cell ${R}${T?" selected":""}"
                    data-room="${b.room_id}"
                    ${R==="full"?"disabled":""}
                    title="${b.room_id} · ${b.type} · ${b.current_occupancy}/${b.capacity}">
              <span class="room-cell-id">${b.room_id}</span>
              <span class="room-cell-type">${b.type[0]}</span>
              <span class="room-cell-occ">${b.current_occupancy}/${b.capacity}</span>
            </button>`}).join(""),k.querySelectorAll(".room-cell:not([disabled])").forEach(b=>{b.addEventListener("click",()=>{e=p.find(x=>x.room_id===b.dataset.room),o(t),g(e)})})},g=function(t){const f=document.getElementById("room-detail-panel");document.getElementById("room-detail-title").textContent=`Room ${t.room_id}`,document.getElementById("room-detail-body").innerHTML=`
        <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(130px,1fr)); gap:var(--space-4);">
          ${[["Hostel",t.hostel],["Floor",t.floor],["Type",t.type],["Capacity",`${t.capacity} beds`],["Occupied",`${t.current_occupancy}/${t.capacity}`],["Available",`${t.available_slots} slot(s)`]].map(([k,b])=>`<div>
              <div style="font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase; letter-spacing:.06em;">${k}</div>
              <div style="font-size:var(--text-sm); margin-top:4px;">${b}</div>
            </div>`).join("")}
        </div>
      `,f.style.display=m?"none":"block"};var y=o,$=g;a.querySelectorAll(".cat-tab[data-floor]").forEach(t=>{t.addEventListener("click",()=>{a.querySelectorAll(".cat-tab[data-floor]").forEach(f=>f.classList.remove("active")),t.classList.add("active"),c=+t.dataset.floor,e=null,document.getElementById("room-detail-panel").style.display="none",o(c)})}),(B=document.getElementById("btn-cancel-room"))==null||B.addEventListener("click",()=>{e=null,document.getElementById("room-detail-panel").style.display="none",o(c)}),(A=document.getElementById("booking-form"))==null||A.addEventListener("submit",async t=>{if(t.preventDefault(),!e)return;const f=document.getElementById("btn-book");f.disabled=!0,f.textContent="Submitting…";try{await h.post("/rooms/book",{room_id:e.room_id,preferences:document.getElementById("booking-pref").value.trim()}),w(`Booking request for ${e.room_id} submitted!`,"success"),Y(a)}catch(k){w(k.message,"error"),f.disabled=!1,f.textContent="Request This Room"}}),o(c)}i&&!s&&((I=document.getElementById("btn-show-change"))==null||I.addEventListener("click",()=>{document.getElementById("change-req-section").style.display="block",document.getElementById("btn-show-change").style.display="none"}),(M=document.getElementById("btn-cancel-change"))==null||M.addEventListener("click",()=>{document.getElementById("change-req-section").style.display="none",document.getElementById("btn-show-change").style.display=""}),(L=document.getElementById("change-req-form"))==null||L.addEventListener("submit",async o=>{o.preventDefault();const g=new FormData(o.target),t=document.getElementById("btn-submit-change"),f=document.getElementById("change-msg");t.disabled=!0,t.textContent="Submitting…",f.innerHTML="";try{await h.post("/rooms/change-requests",Object.fromEntries(g.entries())),w("Room change request submitted. Awaiting warden approval.","success"),Y(a)}catch(k){f.innerHTML=`<div style="color:var(--accent-red); font-size:var(--text-sm); margin-bottom:var(--space-3); padding:var(--space-3); background:color-mix(in srgb,var(--accent-red) 10%,transparent); border-radius:8px;">${k.message}</div>`,t.disabled=!1,t.textContent="Submit Request"}})),requestAnimationFrame(()=>{var o;return(o=document.getElementById("booking-page"))==null?void 0:o.classList.replace("page-enter","page-active")})}async function ue(a){a.innerHTML='<div class="page-loading">Loading forum…</div>';try{const r=await h.get("/forum");Ae(a,r)}catch(r){a.innerHTML=`<div class="page-error">Failed to load forum: ${r.message}</div>`}}function Ae(a,r){const i=X()==="admin";let v=r;a.innerHTML=`
    <div class="page-enter" id="forum-page">
      <div class="page-header">
        <h2>Community Forum</h2>
        <p>${i?"Read all campus posts — posting is disabled for admins.":"Share thoughts anonymously with your campus community."}</p>
      </div>

      ${i?`
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
  `;function n(){const p=document.getElementById("forum-feed"),d=document.getElementById("forum-empty");if(v.length===0){p.innerHTML="",d.style.display="block";return}d.style.display="none",p.innerHTML=v.map(c=>`
      <div class="forum-post card" style="background:var(--bg-primary); padding:var(--space-4); margin-bottom:var(--space-4); border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
        <div class="forum-post-header" style="display:flex; align-items:center; gap:var(--space-3); margin-bottom:var(--space-2);">
          <div class="forum-avatar" style="font-size:24px; background:transparent; border:none;">${c.avatar_icon||"👤"}</div>
          <div>
            <div class="forum-post-title" style="font-weight:600; color:var(--text-primary);">${H(c.title)}</div>
            <div class="forum-post-meta" style="font-size:var(--text-xs); color:var(--text-tertiary);">${H(c.avatar_name||"Anonymous")} · ${re(c.created_at)}</div>
          </div>
        </div>
        <div class="forum-post-body" style="font-size:var(--text-sm); color:var(--text-secondary); line-height:1.6; margin-left:var(--space-10); margin-bottom:var(--space-3);">${H(c.content)}</div>
        
        <div class="forum-post-actions" style="margin-left:var(--space-10); display:flex; gap:var(--space-4); align-items:center; margin-bottom:var(--space-2);">
          <div style="display:flex; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--border-subtle); overflow:hidden;">
            <button class="vote-btn" data-type="post" data-id="${c.post_id}" data-dir="up" style="background:transparent; border:none; padding:4px 8px; cursor:pointer; color:var(--text-secondary);">⇧ ${c.upvotes||0}</button>
            <div style="width:1px; background:var(--border-subtle);"></div>
            <button class="vote-btn" data-type="post" data-id="${c.post_id}" data-dir="down" style="background:transparent; border:none; padding:4px 8px; cursor:pointer; color:var(--text-secondary);">⇩ ${c.downvotes||0}</button>
          </div>
          ${i?"":`<button class="reply-toggle-btn" data-post-id="${c.post_id}" style="background:transparent; border:none; color:var(--text-tertiary); font-size:var(--text-xs); cursor:pointer; display:flex; gap:4px; align-items:center;">💬 Reply</button>`}
        </div>

        <!-- Replies -->
        ${c.replies&&c.replies.length>0?`
          <div class="forum-replies" style="margin-left:var(--space-10); border-left:2px solid var(--border-subtle); padding-left:var(--space-4); margin-top:var(--space-4); display:flex; flex-direction:column; gap:var(--space-4);">
            ${c.replies.map(e=>`
              <div class="forum-reply">
                <div class="forum-post-header" style="display:flex; align-items:center; gap:var(--space-2); margin-bottom:4px;">
                  <div class="forum-avatar" style="font-size:16px; background:transparent; border:none; width:auto; height:auto;">${e.avatar_icon||"👤"}</div>
                  <div class="forum-post-meta" style="font-size:var(--text-xs); color:var(--text-tertiary);">${H(e.avatar_name||"Anonymous")} · ${re(e.created_at)}</div>
                </div>
                <div class="forum-post-body" style="font-size:var(--text-sm); line-height:1.5; color:var(--text-secondary); margin-left:var(--space-6);">${H(e.content)}</div>
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
        ${i?"":`
          <div id="reply-form-${c.post_id}" style="display:none; margin-left:var(--space-10); margin-top:var(--space-4);">
            <textarea id="reply-input-${c.post_id}" class="form-textarea" rows="2" placeholder="Write an anonymous reply..." style="padding:var(--space-2); min-height:60px;"></textarea>
            <div style="margin-top:var(--space-2); display:flex; gap:var(--space-2);">
              <button class="btn btn-primary reply-submit-btn" data-post-id="${c.post_id}" style="padding:4px 12px; font-size:12px;">Submit Reply</button>
              <button class="btn btn-secondary reply-toggle-btn" data-post-id="${c.post_id}" style="padding:4px 12px; font-size:12px;">Cancel</button>
            </div>
          </div>
        `}
      </div>
    `).join("")}if(document.getElementById("forum-feed").addEventListener("click",async p=>{const d=p.target.closest(".vote-btn");if(d&&!d.disabled){const m=d.dataset.type,s=d.dataset.id,y=d.dataset.dir;d.disabled=!0;try{const $=await h.patch("/forum/vote",{type:m,id:parseInt(s,10),dir:y});if(m==="post"){const u=v.find(E=>E.post_id===parseInt(s,10));u&&(u.upvotes=$.upvotes,u.downvotes=$.downvotes)}else for(const u of v)if(u.replies){const E=u.replies.find(B=>B.reply_id===parseInt(s,10));if(E){E.upvotes=$.upvotes,E.downvotes=$.downvotes;break}}n()}catch($){w($.message,"error"),d.disabled=!1}return}const c=p.target.closest(".reply-toggle-btn");if(c){const m=c.dataset.postId,s=document.getElementById(`reply-form-${m}`);s&&(s.style.display=s.style.display==="none"?"block":"none");return}const e=p.target.closest(".reply-submit-btn");if(e){const m=e.dataset.postId,s=document.getElementById(`reply-input-${m}`),y=s==null?void 0:s.value.trim();if(!y){w("Reply content cannot be empty","error");return}e.disabled=!0,e.textContent="...";try{const $=await h.post(`/forum/${m}/reply`,{content:y}),u=v.find(E=>E.post_id===parseInt(m,10));u&&(u.replies||(u.replies=[]),u.replies.push($)),w("Reply posted","success"),n()}catch($){w($.message,"error"),e.disabled=!1,e.textContent="Submit Reply"}return}}),!i){const p=document.getElementById("forum-form");p.addEventListener("submit",async d=>{d.preventDefault();let c=!0;a.querySelectorAll(".form-error").forEach(y=>y.classList.remove("visible"));const e=document.getElementById("f-title").value.trim(),m=document.getElementById("f-content").value.trim();if(e||(document.getElementById("err-f-title").classList.add("visible"),c=!1),m||(document.getElementById("err-f-content").classList.add("visible"),c=!1),!c)return;const s=document.getElementById("btn-post");s.disabled=!0,s.textContent="Posting…";try{v=[await h.post("/forum",{title:e,content:m}),...v],w("Posted anonymously!","success"),p.reset(),n()}catch(y){w(y.message,"error")}finally{s.disabled=!1,s.textContent="Post Anonymously"}}),p.addEventListener("reset",()=>a.querySelectorAll(".form-error").forEach(d=>d.classList.remove("visible")))}n(),requestAnimationFrame(()=>{var p;return(p=document.getElementById("forum-page"))==null?void 0:p.classList.replace("page-enter","page-active")})}function H(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function re(a){try{return new Date(a).toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return a}}const se=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Me={breakfast:[["Poori Chole","Matter Kulcha","Kachori Bhaji","Dosa Sambar","Pav Bhaji","Macaroni","Aloo Paratha"],["Chacos","Idli Sambar","Daliya","Chana Chaat","Corn Flakes","Idli Sambar","Cut Fruits"],["Egg","Banana","Egg","—","Egg","—","—"],["Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee"],["Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam","Bread & Jam"]],lunch:[["Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad"],["Boondi Raita","Mix Veg Raita","Lauki Raita","Mix Veg Raita","Boondi Raita","Mix Veg Raita","Mint Raita"],["A / P / C","A / P / C","A / P / C","A / P / C","A / P / C","A / P / C","A / P / C"],["Mix Dal Tadka","Chole Masala","Kadi Pakora","Lobhiya / Masoor Dal","Rajma Masala","Dal Makhani","Dal Tadka"],["Matar Paneer","Aloo Nutrela","Mixed Vegetable","Paneer Do Pyaza","Handi Kofta Curry","Aloo Gobhi Masala","Chap Masala"],["Aloo Palak","Boiled Rice","Soya Chap Gravy","Boiled Rice","Boiled Rice","Boiled Rice","Veg Biryani"],["Boiled Rice","Chapathi","Jeera Rice","Cut Fruits","Chapathi","Chapathi","Chapathi"],["Chapathi","Ice Cream","Chapathi","Chapathi","—","Besan Barfi","Fruit Custard"]],hitea:[["Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee","Tea / Coffee"],["Veg Hakka Noodles","Bhaji Pakora","Veg Sandwich","Bread Pakora","Cake Slice","Potato Wedges","Aloo Sandwich"]],dinner:[["Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad","Green Salad"],["Dal Bukhara","Curd","Rajma Masala","Curd","Dal Palak","Khichdi","Curd"],["Veg Jalfrezi","Arhar Dal Fry","Palak Paneer","Mix Dal Tadka","Soya Matar Masala","Mix Vegetable","Dal Dhaba"],["Jeera Pulao","Crispy Veg Sweet Chilly","Onion Pulao","Aloo Chole","Tomato Rice","Chapati","Paneer Lababdar"],["Chapathi","Aloo Jeera","Chapathi","Masala Rice","Chapathi","Hot Milk","Jeera Pulao"],["Milk","Soya Biryani","Milk","Chapathi","Milk","—","Chapathi"],["Rice Kheer","Chapathi","Fruit Custard","Milk","Boondi","—","Milk"]]},Te=[{key:"breakfast",label:"Breakfast",time:"7:30 – 9:30 AM"},{key:"lunch",label:"Lunch",time:"12:30 – 2:30 PM"},{key:"hitea",label:"Evening Hi-Tea",time:"5:00 – 6:30 PM"},{key:"dinner",label:"Dinner",time:"7:30 – 9:30 PM"}];function qe(){const a=new Date().getDay();return a===0?6:a-1}function Re(){const a=new Date().getHours();return a<10?"breakfast":a<15?"lunch":a<19?"hitea":"dinner"}async function ze(a){a.innerHTML='<div class="page-loading">Loading…</div>';let r=[];try{r=await h.get("/resources")}catch{}He(a,r)}function He(a,r){const i=qe();let v=Re(),n=i;if(a.innerHTML=`
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
          ${Te.map(p=>`
            <button data-meal="${p.key}" class="res-meal-tab${p.key===v?" active":""}">
              <span class="res-meal-name">${p.label}</span>
              <span class="res-meal-time">${p.time}</span>
            </button>
          `).join("")}
        </div>

        <!-- Day selector -->
        <div style="display:flex; gap:var(--space-2); margin-bottom:var(--space-5); flex-wrap:wrap;" id="day-tabs">
          ${se.map((p,d)=>`
            <button class="res-day-tab${d===n?" active":""}" data-day="${d}">
              ${p.slice(0,3)}${d===i?" ·":""}
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
        ${F("Pharmacy",`
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
        ${F("Hospital Appointment",`
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
        ${F("Laundry",`
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-6);">
            <div>
              <div class="res-info-place" style="margin-bottom:var(--space-4);">Collection</div>
              ${[["Monday","Boys Hostel (Senior MBBS)"],["Tuesday","Girls Hostel (Senior MBBS)"],["Wednesday","Sardha Block A & B"]].map(([p,d])=>`<div class="res-laundry-row"><span>${p}</span><span>${d}</span></div>`).join("")}
            </div>
            <div>
              <div class="res-info-place" style="margin-bottom:var(--space-4);">Delivery</div>
              ${[["Thursday","Boys Hostel (Senior MBBS)"],["Friday","Girls Hostel (Senior MBBS)"],["Saturday","Sardha Block A & B"]].map(([p,d])=>`<div class="res-laundry-row"><span>${p}</span><span>${d}</span></div>`).join("")}
            </div>
          </div>
          <div class="res-info-block" style="margin-top:var(--space-6); padding-top:var(--space-6); border-top:1px solid var(--border-subtle);">
            <div class="res-info-line">Label all items with name & roll number. Dry-clean items separately.</div>
            <a href="tel:9999000001" class="res-phone" style="margin-top:var(--space-3);">9999-000-001</a>
          </div>
        `)}

        <!-- Canteens -->
        ${F("Canteens",`
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
      ${r.length>0?`
        <section>
          <div class="res-section-label" style="margin-bottom:var(--space-5);">Staff Directory</div>
          <div id="contacts-body">${Pe(r)}</div>
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
    `,document.head.appendChild(p)}function l(){const p=Me[v],d=document.getElementById("menu-panel");d&&(d.innerHTML=`
      <table>
        <thead>
          <tr>
            ${se.map((c,e)=>`<th class="${e===n?"today":""}">${c}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${p.map(c=>`
            <tr>
              ${c.map((e,m)=>`<td class="${m===n?"today":""}">${e}</td>`).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    `)}document.getElementById("meal-tabs").querySelectorAll(".res-meal-tab").forEach(p=>{p.addEventListener("click",()=>{document.getElementById("meal-tabs").querySelectorAll(".res-meal-tab").forEach(d=>d.classList.remove("active")),p.classList.add("active"),v=p.dataset.meal,l()})}),document.getElementById("day-tabs").querySelectorAll(".res-day-tab").forEach(p=>{p.addEventListener("click",()=>{document.getElementById("day-tabs").querySelectorAll(".res-day-tab").forEach(d=>d.classList.remove("active")),p.classList.add("active"),n=+p.dataset.day,l()})}),l(),requestAnimationFrame(()=>{var p;return(p=document.getElementById("res-page"))==null?void 0:p.classList.replace("page-enter","page-active")})}function F(a,r){return`
    <div class="res-big-card">
      <div class="res-card-title">${a}</div>
      ${r}
    </div>
  `}function Pe(a){const r={Plumber:"Plumber",Electrician:"Electrician",WiFi:"Wi-Fi / IT",Authority:"Authority",Other:"Other"},i={};return a.forEach(v=>{(i[v.category]=i[v.category]||[]).push(v)}),`
    <div class="res-staff-grid">
      ${Object.entries(i).map(([v,n])=>`
        <div class="res-staff-card">
          <div class="res-staff-cat">${r[v]||v}</div>
          ${n.map(l=>`
            <div class="res-staff-entry">
              <div class="res-staff-name">${l.name}</div>
              ${l.phone?`<a href="tel:${l.phone}" style="display:block;font-size:var(--text-xs);font-family:var(--font-mono);font-weight:600;color:var(--text-primary);text-decoration:none;margin-top:2px;">${l.phone}</a>`:""}
              ${l.notes?`<div class="res-staff-meta">${l.notes}</div>`:""}
            </div>
          `).join("")}
        </div>
      `).join("")}
    </div>
  `}const W="ahcms_hostel_filter";function Z(){return localStorage.getItem(W)||""}function ge(a){a?localStorage.setItem(W,a):localStorage.removeItem(W),window.dispatchEvent(new CustomEvent("hostel-change",{detail:a}))}function ee(a){window.addEventListener("hostel-change",r=>a(r.detail))}async function De(a){let r=[];async function i(){a.innerHTML='<div class="page-loading">Loading</div>';try{const n=Z(),l=n?`?hostel=${encodeURIComponent(n)}`:"",[p,d]=await Promise.all([h.get(`/dashboard/admin${l}`),h.get("/rooms")]);r=[...new Set(d.map(c=>c.hostel))].sort(),v(a,p,r,n)}catch(n){a.innerHTML=`<div class="page-error">Failed to load: ${n.message}</div>`}}ee(()=>i()),await i();function v(n,{stats:l,recentComplaints:p,wardens:d,wardenOfficePhone:c},e,m){const s=d.filter(u=>u.role==="Warden"),y=d.filter(u=>u.role==="Guard"),$=l.totalCapacity>0?Math.round(l.totalOccupied/l.totalCapacity*100):0;n.innerHTML=`
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
              ${e.map(u=>`<option value="${u}" ${u===m?"selected":""}>${Fe(u)}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Stat Cards -->
        <div class="card-grid">
          <div class="card card-accent-blue">
            <div class="card-label">Total Rooms</div>
            <div class="card-value">${l.totalRooms}</div>
            <div class="card-sub">${l.vacantRooms} vacant · ${$}% utilized</div>
          </div>
          <div class="card card-accent-amber">
            <div class="card-label">Open Complaints</div>
            <div class="card-value">${l.openComplaints}</div>
            <div class="card-sub">${l.inProgressComplaints} in progress</div>
          </div>
          <div class="card card-accent-green">
            <div class="card-label">Resolved</div>
            <div class="card-value">${l.resolvedComplaints}</div>
            <div class="card-sub">complaints closed</div>
          </div>
          <div class="card card-accent-purple">
            <div class="card-label">Students</div>
            <div class="card-value">${l.totalStudents}</div>
            <div class="card-sub">${l.pendingBookings} pending bookings</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-6);">
          <!-- Wardens & Guards -->
          <div class="form-section" style="max-width:none;">
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:var(--space-2); margin-bottom:var(--space-4);">
              <div class="form-section-title" style="margin-bottom:0;">On-Duty Wardens</div>
              ${c?`
                <a href="tel:${c}" style="
                  display:inline-flex; align-items:center; gap:6px;
                  background:color-mix(in srgb,var(--accent-green) 12%,transparent);
                  border:1px solid color-mix(in srgb,var(--accent-green) 30%,transparent);
                  color:var(--accent-green); font-size:var(--text-xs); font-weight:600;
                  letter-spacing:.04em; padding:4px 10px; border-radius:999px;
                  text-decoration:none; transition:background .15s;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Office: ${c}
                </a>`:""}
            </div>
            ${s.length===0?'<p class="empty-msg">No warden data available.</p>':s.map(u=>`
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
            ${y.length===0?'<p class="empty-msg">No guard data.</p>':y.map(u=>`
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
            <span style="font-size:var(--text-sm); color:var(--text-secondary);">${l.totalOccupied} / ${l.totalCapacity} beds · ${$}%</span>
          </div>
          <div class="card-grid" style="margin-top:var(--space-4); margin-bottom:0;">
            <div class="card" style="text-align:center;">
              <div class="card-label">Total Beds</div>
              <div class="card-value" style="font-size:var(--text-2xl);">${l.totalCapacity}</div>
            </div>
            <div class="card" style="text-align:center;">
              <div class="card-label">Occupied</div>
              <div class="card-value" style="font-size:var(--text-2xl);">${l.totalOccupied}</div>
            </div>
            <div class="card" style="text-align:center;">
              <div class="card-label">Vacant</div>
              <div class="card-value" style="font-size:var(--text-2xl); color:var(--accent-green);">${l.totalCapacity-l.totalOccupied}</div>
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("hostel-filter").addEventListener("change",u=>{ge(u.target.value),i()}),n.querySelectorAll('a.link-accent[href^="#"]').forEach(u=>{u.addEventListener("click",E=>{E.preventDefault(),window.location.hash=u.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var u;return(u=document.getElementById("admin-home"))==null?void 0:u.classList.replace("page-enter","page-active")})}}function Fe(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const ie={Plumbing:"🔧",Electricity:"⚡",WiFi:"📶",Cleanliness:"🧹",Carpentry:"🔨",Other:"📋"},ne=["open","in-progress","resolved"],je=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"];async function Ne(a){async function r(){a.innerHTML='<div class="page-loading">Loading…</div>';try{const i=Z(),v=i?`?hostel=${encodeURIComponent(i)}`:"",n=await h.get(`/complaints${v}`);Oe(a,n,r)}catch(i){a.innerHTML=`<div class="page-error">Failed to load: ${i.message}</div>`}}ee(()=>r()),await r()}function Oe(a,r,i){let v=r,n="all",l="",p=null;a.innerHTML=`
    <div class="page-enter" id="admin-complaints-page">
      <div class="page-header">
        <h2>Complaints Management</h2>
        <p>Review, approve, and update status of all hostel complaints.</p>
      </div>

      <!-- Summary chips -->
      <div class="card-grid" style="margin-bottom: var(--space-6);">
        <div class="card" style="text-align:center; cursor:pointer;" data-quick="all">
          <div class="card-label">Total</div>
          <div class="card-value" style="font-size:var(--text-2xl);">${v.length}</div>
        </div>
        ${ne.map(e=>{const m=v.filter(y=>y.status===e).length;return`<div class="card card-accent-${e==="open"?"amber":e==="in-progress"?"blue":"green"}" style="text-align:center; cursor:pointer;" data-quick="${e}">
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
              ${je.map(e=>`<option value="${e}">${ie[e]} ${e}</option>`).join("")}
            </select>
            <button class="filter-chip active" data-status="all">All</button>
            ${ne.map(e=>`<button class="filter-chip" data-status="${e}">${e}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-body"></div>
      </div>
    </div>
  `;function d(){let e=v;return l&&(e=e.filter(m=>m.category===l)),n!=="all"&&(e=e.filter(m=>m.status===n)),e}function c(){const e=d(),m=document.getElementById("complaints-body");if(e.length===0){m.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No complaints match the current filter.</p>';return}m.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>#</th><th>Student</th><th>Room</th><th>Category</th>
            <th>Description</th><th>Date</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody id="cmp-tbody">
          ${e.map(s=>`
            <tr class="cmp-row${p===s.complaint_id?" expanded-row":""}" data-id="${s.complaint_id}">
              <td class="cell-mono">${s.complaint_id}</td>
              <td><div>${s.student_name||s.student_id}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${s.roll_no||""}</div></td>
              <td class="cell-mono">${s.room_id||"—"}</td>
              <td>${ie[s.category]||""} ${s.category}</td>
              <td style="max-width:180px; overflow:hidden; text-overflow:ellipsis;" title="${s.description}">${s.description.slice(0,45)}${s.description.length>45?"…":""}</td>
              <td class="cell-mono">
                <div>${s.date}</div>
                ${s.resolved_date?`<div style="font-size:10px; color:var(--accent-green); margin-top:2px;">Res: ${s.resolved_date}</div>`:""}
              </td>
              <td><span class="badge badge-${s.status}">${s.status}</span></td>
              <td>
                ${s.status!=="resolved"?`
                  <div style="display:flex; gap:4px;">
                    ${s.status==="open"?`<button class="btn btn-sm btn-secondary" data-action="in-progress" data-id="${s.complaint_id}">Start</button>`:""}
                    <button class="btn btn-sm btn-primary" data-action="resolved" data-id="${s.complaint_id}">Resolve</button>
                  </div>
                `:'<span style="color:var(--text-tertiary); font-size:var(--text-xs);">Done</span>'}
              </td>
            </tr>
            ${s.photo_base64?`
              <tr class="photo-row" data-for="${s.complaint_id}" style="${p===s.complaint_id?"":"display:none"}">
                <td colspan="8" style="padding: var(--space-3) var(--space-6); background: var(--bg-elevated);">
                  <img src="${s.photo_base64}" alt="Complaint photo" style="max-width:280px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);" />
                  ${s.admin_note?`<p style="font-size:var(--text-xs); color:var(--text-secondary); margin-top: var(--space-2);">Note: ${s.admin_note}</p>`:""}
                </td>
              </tr>
            `:""}
          `).join("")}
        </tbody>
      </table>
    `,m.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",async()=>{const y=+s.dataset.id,$=s.dataset.action;s.disabled=!0;try{const u=await h.patch(`/complaints/${y}/status`,{status:$});v=v.map(E=>E.complaint_id===y?{...E,...u}:E),w(`Complaint #${y} → ${$}`,"success"),c()}catch(u){w(u.message,"error"),s.disabled=!1}})}),m.querySelectorAll(".cmp-row").forEach(s=>{s.addEventListener("click",()=>{const y=+s.dataset.id;p=p===y?null:y,c()})})}a.querySelectorAll("[data-status]").forEach(e=>{e.addEventListener("click",()=>{a.querySelectorAll("[data-status]").forEach(m=>m.classList.remove("active")),e.classList.add("active"),n=e.dataset.status,c()})}),a.querySelectorAll("[data-quick]").forEach(e=>{e.addEventListener("click",()=>{var m;n=e.dataset.quick,a.querySelectorAll("[data-status]").forEach(s=>s.classList.remove("active")),(m=a.querySelector(`[data-status="${n}"]`))==null||m.classList.add("active"),c()})}),document.getElementById("cat-filter").addEventListener("change",e=>{l=e.target.value,c()}),c(),requestAnimationFrame(()=>{var e;return(e=document.getElementById("admin-complaints-page"))==null?void 0:e.classList.replace("page-enter","page-active")})}const _=a=>String(a??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Ge=()=>new Date().toISOString().split("T")[0],le=["Senior MBBS boys hostel","Senior MBBS girls hostel","Sardha building : Block A (girls)","Sardha building : Block B (boys)"];async function Ue(a){async function r(){a.innerHTML='<div class="page-loading">Loading…</div>';try{const[i,v,n,l,p]=await Promise.all([h.get("/rooms"),h.get("/rooms/booking-requests"),h.get("/rooms/change-requests"),h.get("/rooms/allocations"),h.get("/students")]);Ve(a,{rooms:i,requests:v,changeReqs:n,allocs:l,students:p},r)}catch(i){a.innerHTML=`<div class="page-error">Failed to load: ${i.message}</div>`}}ee(()=>r()),await r()}function Ve(a,r,i){let{rooms:v,requests:n,changeReqs:l,allocs:p,students:d}=r,c="rooms",e=Z();const m=n.filter(o=>o.status==="pending").length,s=l.filter(o=>o.status==="pending").length;a.innerHTML=`
    <style>
      /* ── Room corridor layout ── */
      .floor-corridor {
        display: flex;
        flex-direction: column;
        gap: 3px;
        margin-bottom: var(--space-5);
      }
      .corridor-row {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px;
      }
      .corridor-strip {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 3px 0;
      }
      .corridor-strip-line { flex:1; height:1px; background:var(--border-subtle); }
      .corridor-strip-label { font-size:9px; letter-spacing:.1em; color:var(--text-tertiary); text-transform:uppercase; white-space:nowrap; }
      /* ── Room cells ── */
      .room-cell {
        border-radius:8px; display:flex; flex-direction:column;
        align-items:center; justify-content:center;
        padding: 10px 4px 8px;
        font-size:10px; font-weight:600; line-height:1.3; text-align:center;
        border:1px solid transparent; transition:transform .12s, box-shadow .12s;
        cursor:default;
      }
      .room-cell:hover { transform:translateY(-2px); box-shadow:0 4px 12px rgba(0,0,0,.3); z-index:1; }
      .room-cell.vacant  { background:color-mix(in srgb,var(--accent-green) 10%,transparent); border-color:color-mix(in srgb,var(--accent-green) 25%,transparent); color:var(--accent-green); }
      .room-cell.partial { background:color-mix(in srgb,var(--accent-amber) 10%,transparent); border-color:color-mix(in srgb,var(--accent-amber) 25%,transparent); color:var(--accent-amber); }
      .room-cell.full    { background:color-mix(in srgb,var(--accent-red)   10%,transparent); border-color:color-mix(in srgb,var(--accent-red)   25%,transparent); color:var(--accent-red); opacity:.7; }
      .rc-id  { font-family:var(--font-mono); font-size:9px; opacity:.75; }
      /* ── Minimal tabs ── */
      #room-tabs .cat-tab {
        background: none;
        border: none;
        border-bottom: 2px solid transparent;
        border-radius: 0;
        padding: 8px 4px;
        font-size: var(--text-sm);
        color: var(--text-tertiary);
        cursor: pointer;
        transition: color .15s, border-color .15s;
        font-weight: 500;
      }
      #room-tabs .cat-tab:hover  { color: var(--text-primary); }
      #room-tabs .cat-tab.active { color: var(--text-primary); border-bottom-color: var(--text-primary); }
      .floor-label { font-size:var(--text-xs); font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:var(--text-tertiary); margin:var(--space-5) 0 var(--space-3); }
      .legend-dot { width:8px; height:8px; border-radius:50%; display:inline-block; }
      .alloc-tab-badge { background:var(--accent-amber); color:#000; border-radius:999px; font-size:10px; font-weight:700; padding:1px 6px; margin-left:4px; }
    </style>

    <div class="page-enter" id="admin-rooms-page">
      <!-- Header -->
      <div class="page-header" style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:var(--space-4);">
        <div>
          <h2>Room Management</h2>
          <p>Full allocation control — direct assign, booking requests, and student room changes.</p>
        </div>
        <div class="hostel-filter-bar">
          <label class="hostel-filter-label">Hostel</label>
          <select class="hostel-filter-select" id="room-hostel-filter">
            <option value="">All Hostels</option>
            ${le.map(o=>`<option value="${o}" ${o===e?"selected":""}>${o}</option>`).join("")}
          </select>
        </div>
      </div>

      <!-- Tabs -->
      <div id="room-tabs" style="display:flex; gap:var(--space-5); margin-bottom:var(--space-6); border-bottom:1px solid var(--border-subtle); flex-wrap:wrap;">
        <button class="cat-tab active" data-tab="rooms">Room Grid</button>
        <button class="cat-tab" data-tab="add-student">Add Student</button>
        <button class="cat-tab" data-tab="students">Students (${d.length})</button>
        <button class="cat-tab" data-tab="allocate">Direct Allocate</button>
        <button class="cat-tab" data-tab="requests">Booking Requests${m>0?`<span class="alloc-tab-badge">${m}</span>`:""}</button>
        <button class="cat-tab" data-tab="changes">Room Changes${s>0?`<span class="alloc-tab-badge">${s}</span>`:""}</button>
        <button class="cat-tab" data-tab="allocs">Allocations</button>
      </div>

      <!-- Panels -->
      <div id="panel-rooms"></div>
      <div id="panel-add-student"  style="display:none;"></div>
      <div id="panel-students"     style="display:none;"></div>
      <div id="panel-allocate"     style="display:none;"></div>
      <div id="panel-requests"     style="display:none;"></div>
      <div id="panel-changes"      style="display:none;"></div>
      <div id="panel-allocs"       style="display:none;"></div>
    </div>
  `;function y(){const o=e?v.filter(x=>x.hostel===e):v,g={};o.forEach(x=>{g[x.hostel]||(g[x.hostel]={}),g[x.hostel][x.floor]||(g[x.hostel][x.floor]=[]),g[x.hostel][x.floor].push(x)});const t=o.filter(x=>x.current_occupancy===0).length,f=o.filter(x=>x.current_occupancy>0&&x.current_occupancy<x.capacity).length,k=o.filter(x=>x.current_occupancy>=x.capacity).length;let b=`
      <div style="display:flex; align-items:center; gap:var(--space-5); margin-bottom:var(--space-5);">
        <span style="display:flex; align-items:center; gap:6px; font-size:var(--text-xs); color:var(--text-secondary);"><span class="legend-dot" style="background:var(--accent-green);"></span>Vacant (${t})</span>
        <span style="display:flex; align-items:center; gap:6px; font-size:var(--text-xs); color:var(--text-secondary);"><span class="legend-dot" style="background:var(--accent-amber);"></span>Partial (${f})</span>
        <span style="display:flex; align-items:center; gap:6px; font-size:var(--text-xs); color:var(--text-secondary);"><span class="legend-dot" style="background:var(--accent-red);"></span>Full (${k})</span>
      </div>
    `;for(const x of Object.keys(g).sort()){b+=`<div style="font-size:var(--text-sm); font-weight:600; color:var(--text-primary); margin:var(--space-6) 0 var(--space-3); padding-bottom:var(--space-2); border-bottom:1px solid var(--border-subtle);">${x}</div>`;for(const R of Object.keys(g[x]).sort((T,G)=>+T-+G)){const T=g[x][R].sort((S,D)=>S.room_id.localeCompare(D.room_id)),G=T.slice(0,5),ye=T.slice(5,10),te=S=>{const D=S.capacity>0?S.current_occupancy/S.capacity:0;return`<div class="room-cell ${D===0?"vacant":D<1?"partial":"full"}" title="${S.room_id} — ${S.type} (${S.current_occupancy}/${S.capacity})">
            <div class="rc-id">${S.room_id}</div>
            <div style="font-size:9px; opacity:.55;">${S.current_occupancy}/${S.capacity}</div>
          </div>`};b+=`
          <div class="floor-label">Floor ${R}</div>
          <div class="floor-corridor">
            <div class="corridor-row">${G.map(te).join("")}</div>
            <div class="corridor-strip">
              <div class="corridor-strip-line"></div>
              <div class="corridor-strip-label">corridor</div>
              <div class="corridor-strip-line"></div>
            </div>
            <div class="corridor-row">${ye.map(te).join("")}</div>
          </div>`}}Object.keys(g).length||(b+='<p style="color:var(--text-tertiary); padding:var(--space-8); text-align:center;">No rooms match the current filter.</p>'),document.getElementById("panel-rooms").innerHTML=b}function $(){document.getElementById("panel-add-student").innerHTML=`
      <div class="form-section" style="max-width:640px;">
        <div class="form-section-title">Register New Student</div>
        <p style="font-size:var(--text-sm); color:var(--text-secondary); margin-bottom:var(--space-5);">
          Default login password is <code style="background:var(--bg-elevated); padding:2px 6px; border-radius:4px;">Student@123</code>. Communicate to student to change on first login.
        </p>
        <div id="add-student-msg"></div>
        <form id="add-student-form">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-4);">
            <div class="form-group">
              <label class="form-label">Roll Number *</label>
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
              <select class="form-select" name="gender" required>
                <option value="">Select</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Course *</label>
              <select class="form-select" name="course" required>
                <option value="">Select</option>
                <option value="MBBS">MBBS</option>
                <option value="Nursing">Nursing</option>
                <option value="AHS">AHS</option>
                <option value="BDS">BDS</option>
                <option value="MD">MD</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Year (current) *</label>
              <select class="form-select" name="year" required>
                <option value="">Select</option>
                ${[1,2,3,4,5].map(o=>`<option value="${o}">Year ${o}</option>`).join("")}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Admission Year *</label>
              <input class="form-input" type="number" name="adm_year" min="2015" max="2030" placeholder="2024" required />
            </div>
            <div class="form-group">
              <label class="form-label">Pass-out Year *</label>
              <input class="form-input" type="number" name="pass_year" min="2015" max="2035" placeholder="2029" required />
            </div>
            <div class="form-group" style="grid-column:span 2;">
              <label class="form-label">Hostel *</label>
              <select class="form-select" name="hostel" required>
                <option value="">Select Hostel</option>
                ${le.map(o=>`<option value="${o}">${o}</option>`).join("")}
              </select>
            </div>
            <div class="form-group" style="grid-column:span 2;">
              <label class="form-label">Home Address</label>
              <input class="form-input" name="address" placeholder="City, State" />
            </div>
          </div>

          <hr style="border-color:var(--border-subtle); margin:var(--space-5) 0;" />
          <div style="display:flex; align-items:center; gap:var(--space-3); margin-bottom:var(--space-4);">
            <input type="checkbox" id="also-allocate" style="width:16px; height:16px;" />
            <label for="also-allocate" style="font-size:var(--text-sm); font-weight:500; cursor:pointer;">Also assign a room immediately</label>
          </div>
          <div id="alloc-section" style="display:none; margin-bottom:var(--space-4);">
            <label class="form-label">Assign Room</label>
            <select class="form-select" name="alloc_room" id="alloc-room-select">
              <option value="">— pick a vacant room —</option>
              ${v.filter(o=>o.current_occupancy<o.capacity).sort((o,g)=>o.hostel.localeCompare(g.hostel)||o.floor-g.floor||o.room_id.localeCompare(g.room_id)).map(o=>`<option value="${o.room_id}">[${o.type}] ${o.room_id} — ${o.hostel}, Floor ${o.floor} (${o.current_occupancy}/${o.capacity})</option>`).join("")}
            </select>
          </div>

          <button type="submit" class="btn btn-primary" style="width:100%;">Register Student</button>
        </form>
      </div>
    `,document.getElementById("also-allocate").addEventListener("change",o=>{document.getElementById("alloc-section").style.display=o.target.checked?"":"none"}),document.getElementById("add-student-form").addEventListener("submit",async o=>{o.preventDefault();const g=new FormData(o.target),t=Object.fromEntries(g.entries()),f=document.getElementById("add-student-msg");f.innerHTML="";const k=o.target.querySelector("[type=submit]");k.disabled=!0,k.textContent="Registering…";try{const b=await h.post("/students",t);t.also_allocate==="on"&&t.alloc_room&&await h.post("/rooms/direct-allocate",{student_id:b.student_id,room_id:t.alloc_room}),w(`Student ${b.name} (${b.student_id}) registered!`,"success"),f.innerHTML=`<div style="background:color-mix(in srgb,var(--accent-green) 12%,transparent); border:1px solid color-mix(in srgb,var(--accent-green) 30%,transparent); border-radius:8px; padding:var(--space-3) var(--space-4); font-size:var(--text-sm); color:var(--accent-green); margin-bottom:var(--space-4);">
          ✓ Student registered. ID: <strong>${b.student_id}</strong>. Login: <strong>${b.default_password}</strong>
        </div>`,o.target.reset(),i()}catch(b){f.innerHTML=`<div style="background:color-mix(in srgb,var(--accent-red) 12%,transparent); border:1px solid color-mix(in srgb,var(--accent-red) 30%,transparent); border-radius:8px; padding:var(--space-3) var(--space-4); font-size:var(--text-sm); color:var(--accent-red); margin-bottom:var(--space-4);">${b.message}</div>`}finally{k.disabled=!1,k.textContent="Register Student"}})}function u(){const o=e?d.filter(t=>t.hostel===e):d,g=document.getElementById("panel-students");if(!o.length){g.innerHTML=`<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No students${e?" in this hostel":""}.</p>`;return}g.innerHTML=`
      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">Students (${o.length})</div>
        </div>
        <table>
          <thead>
            <tr><th>ID</th><th>Roll No</th><th>Name</th><th>Gender</th><th>Course / Yr</th><th>Hostel</th><th>Room</th><th>Status</th></tr>
          </thead>
          <tbody>
            ${o.map(t=>`
              <tr>
                <td class="cell-mono" style="color:var(--text-tertiary);">${t.student_id}</td>
                <td class="cell-mono">${t.roll_no}</td>
                <td style="font-weight:500;">${_(t.name)}</td>
                <td>${t.gender==="M"?"Male":t.gender==="F"?"Female":t.gender}</td>
                <td>${t.course} / Yr ${t.year}</td>
                <td style="font-size:var(--text-xs);">${_(t.hostel)}</td>
                <td class="cell-mono">${t.alloc_room||'<span style="color:var(--text-tertiary);">—</span>'}</td>
                <td><span class="badge ${t.alloc_room?"badge-in-progress":"badge-open"}">${t.alloc_room?"Allocated":"Unallocated"}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `}function E(){const o=d.filter(t=>!t.alloc_room),g=v.filter(t=>t.current_occupancy<t.capacity&&(!e||t.hostel===e)).sort((t,f)=>t.hostel.localeCompare(f.hostel)||t.floor-f.floor||t.room_id.localeCompare(f.room_id));document.getElementById("panel-allocate").innerHTML=`
      <div class="form-section" style="max-width:560px;">
        <div class="form-section-title">Direct Room Allocation</div>
        <p style="font-size:var(--text-sm); color:var(--text-secondary); margin-bottom:var(--space-5);">
          Assign any unallocated student to any room that has available capacity. Transaction-safe: capacity is checked at the moment of assignment.
        </p>
        <div id="alloc-msg"></div>
        <form id="direct-alloc-form">
          <div class="form-group">
            <label class="form-label">Student *</label>
            <select class="form-select" name="student_id" id="da-student" required>
              <option value="">— select student —</option>
              ${o.map(t=>`<option value="${t.student_id}">${t.name} (${t.roll_no}) — ${t.course} Yr ${t.year}</option>`).join("")}
            </select>
            ${d.filter(t=>t.alloc_room).length>0?`<div style="font-size:var(--text-xs); color:var(--text-tertiary); margin-top:4px;">${d.filter(t=>t.alloc_room).length} student(s) already allocated not shown.</div>`:""}
          </div>
          <div class="form-group">
            <label class="form-label">Room *</label>
            <select class="form-select" name="room_id" id="da-room" required>
              <option value="">— select room —</option>
              ${g.map(t=>`<option value="${t.room_id}">[${t.type[0]}] ${t.room_id} · ${t.hostel} · Floor ${t.floor} · ${t.current_occupancy}/${t.capacity} occupied</option>`).join("")}
            </select>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-4);">
            <div class="form-group">
              <label class="form-label">From Date</label>
              <input class="form-input" type="date" name="from_date" value="${Ge()}" />
            </div>
            <div class="form-group">
              <label class="form-label">To Date</label>
              <input class="form-input" type="date" name="to_date" value="${new Date().getFullYear()+1}-05-31" />
            </div>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%; margin-top:var(--space-2);">Allocate Room</button>
        </form>
      </div>
    `,document.getElementById("direct-alloc-form").addEventListener("submit",async t=>{t.preventDefault();const f=new FormData(t.target),k=t.target.querySelector("[type=submit]");k.disabled=!0,k.textContent="Allocating…";const b=document.getElementById("alloc-msg");b.innerHTML="";try{await h.post("/rooms/direct-allocate",Object.fromEntries(f.entries())),w("Room allocated successfully!","success"),await i()}catch(x){b.innerHTML=`<div style="color:var(--accent-red); font-size:var(--text-sm); margin-bottom:var(--space-3); padding:var(--space-3); background:color-mix(in srgb,var(--accent-red) 10%,transparent); border-radius:8px;">${x.message}</div>`,k.disabled=!1,k.textContent="Allocate Room"}})}function B(){const o=e?n.filter(t=>t.room_hostel===e):n,g=document.getElementById("panel-requests");if(!o.length){g.innerHTML=`<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No booking requests${e?" for this hostel":""}.</p>`;return}g.innerHTML=`
      <div class="table-container">
        <table>
          <thead><tr><th>Student</th><th>Room</th><th>Hostel</th><th>Type</th><th>Cap</th><th>Preferences</th><th>Status</th><th>Date</th><th>Action</th></tr></thead>
          <tbody>
            ${o.map(t=>{var f;return`
              <tr>
                <td><div style="font-weight:500;">${_(t.student_name)}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${t.roll_no}</div></td>
                <td class="cell-mono">${t.room_id}</td>
                <td style="font-size:var(--text-xs);">${_(t.room_hostel||t.hostel)}</td>
                <td>${t.type}</td>
                <td class="cell-mono">${t.current_occupancy}/${t.capacity}</td>
                <td style="font-size:var(--text-xs); max-width:120px;">${_(t.preferences||"—")}</td>
                <td><span class="badge badge-${t.status}">${t.status}</span></td>
                <td class="cell-mono">${(f=t.created_at)==null?void 0:f.slice(0,10)}</td>
                <td>${t.status==="pending"?`
                  <div style="display:flex; gap:4px;">
                    <button class="btn btn-sm btn-primary" data-req="${t.request_id}" data-action="approved">Approve</button>
                    <button class="btn btn-sm btn-secondary" style="color:var(--accent-red);" data-req="${t.request_id}" data-action="rejected">Reject</button>
                  </div>`:`<span style="color:var(--text-tertiary); font-size:var(--text-xs);">${t.admin_note||t.status}</span>`}
                </td>
              </tr>
            `}).join("")}
          </tbody>
        </table>
      </div>
    `,g.querySelectorAll("[data-req]").forEach(t=>{t.addEventListener("click",async()=>{t.disabled=!0;try{await h.patch(`/rooms/booking-requests/${t.dataset.req}`,{status:t.dataset.action}),w(`Request ${t.dataset.action}.`,"success"),await i()}catch(f){w(f.message,"error"),t.disabled=!1}})})}function A(){const o=e?l.filter(t=>t.from_hostel===e||t.to_hostel===e):l,g=document.getElementById("panel-changes");if(!o.length){g.innerHTML=`<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No room change requests${e?" involving this hostel":""}.</p>`;return}g.innerHTML=`
      <div class="table-container">
        <table>
          <thead><tr><th>Student</th><th>From Room</th><th>To Room</th><th>To Hostel</th><th>Cap</th><th>Reason</th><th>Status</th><th>Date</th><th>Action</th></tr></thead>
          <tbody>
            ${o.map(t=>{var f;return`
              <tr>
                <td><div style="font-weight:500;">${_(t.student_name)}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${t.roll_no}</div></td>
                <td class="cell-mono">${t.from_room_id}<div style="font-size:9px; color:var(--text-tertiary);">${t.from_type}</div></td>
                <td class="cell-mono">${t.to_room_id}<div style="font-size:9px; color:var(--text-tertiary);">${t.to_type}</div></td>
                <td style="font-size:var(--text-xs);">${_(t.to_hostel)}</td>
                <td class="cell-mono">${t.to_occupancy}/${t.to_capacity}</td>
                <td style="max-width:160px; font-size:var(--text-xs);" title="${_(t.reason)}">${_(t.reason).slice(0,60)}${t.reason.length>60?"…":""}</td>
                <td><span class="badge badge-${t.status==="pending"?"open":t.status==="approved"?"in-progress":"resolved"}">${t.status}</span></td>
                <td class="cell-mono">${(f=t.created_at)==null?void 0:f.slice(0,10)}</td>
                <td>${t.status==="pending"?`
                  <div style="display:flex; gap:4px;">
                    <button class="btn btn-sm btn-primary" data-cr="${t.change_id}" data-action="approved">Approve</button>
                    <button class="btn btn-sm btn-secondary" style="color:var(--accent-red);" data-cr="${t.change_id}" data-action="rejected">Reject</button>
                  </div>`:`<span style="color:var(--text-tertiary); font-size:var(--text-xs);">${t.admin_note||t.status}</span>`}
                </td>
              </tr>
            `}).join("")}
          </tbody>
        </table>
      </div>
    `,g.querySelectorAll("[data-cr]").forEach(t=>{t.addEventListener("click",async()=>{t.disabled=!0;try{await h.patch(`/rooms/change-requests/${t.dataset.cr}`,{status:t.dataset.action}),w(`Room change ${t.dataset.action}.`,"success"),await i()}catch(f){w(f.message,"error"),t.disabled=!1}})})}function I(){const o=e?p.filter(t=>t.hostel===e):p,g=document.getElementById("panel-allocs");if(!o.length){g.innerHTML=`<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No allocations${e?" for this hostel":""}.</p>`;return}g.innerHTML=`
      <div class="table-container">
        <table>
          <thead><tr><th>ID</th><th>Student</th><th>Room</th><th>Hostel</th><th>Type/Floor</th><th>From</th><th>To</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            ${o.map(t=>`
              <tr>
                <td class="cell-mono" style="font-size:10px; color:var(--text-tertiary);">${t.allocation_id.slice(0,10)}</td>
                <td><div style="font-weight:500;">${_(t.student_name)}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${t.roll_no}</div></td>
                <td class="cell-mono">${t.room_id}</td>
                <td style="font-size:var(--text-xs);">${_(t.hostel)}</td>
                <td style="font-size:var(--text-xs);">${t.type} · Fl ${t.floor}</td>
                <td class="cell-mono">${t.from_date}</td>
                <td class="cell-mono">${t.to_date}</td>
                <td><span class="badge badge-${t.status==="active"?"in-progress":"resolved"}">${t.status}</span></td>
                <td>${t.status==="active"?`
                  <button class="btn btn-sm btn-secondary" style="color:var(--accent-red);" data-alloc="${t.allocation_id}">Revoke</button>
                `:"—"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `,g.querySelectorAll("[data-alloc]").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("Revoke this allocation? The student will lose their room assignment.")){t.disabled=!0;try{await h.delete(`/rooms/allocations/${t.dataset.alloc}`),w("Allocation revoked.","success"),await i()}catch(f){w(f.message,"error"),t.disabled=!1}}})})}document.getElementById("room-hostel-filter").addEventListener("change",o=>{e=o.target.value,ge(e),L()});function M(o){c=o,document.querySelectorAll("[data-tab]").forEach(g=>g.classList.toggle("active",g.dataset.tab===o)),["rooms","add-student","students","allocate","requests","changes","allocs"].forEach(g=>{const t=document.getElementById(`panel-${g}`);t&&(t.style.display=g===o?"":"none")}),L()}a.querySelectorAll("[data-tab]").forEach(o=>{o.addEventListener("click",()=>M(o.dataset.tab))});function L(){c==="rooms"&&y(),c==="add-student"&&$(),c==="students"&&u(),c==="allocate"&&E(),c==="requests"&&B(),c==="changes"&&A(),c==="allocs"&&I()}L(),requestAnimationFrame(()=>{var o;return(o=document.getElementById("admin-rooms-page"))==null?void 0:o.classList.replace("page-enter","page-active")})}const de=["Plumber","Electrician","WiFi","Authority","Other"],V={Plumber:"🔧",Electrician:"⚡",WiFi:"📶",Authority:"🏛️",Other:"📋"};async function Ye(a){a.innerHTML='<div class="page-loading">Loading…</div>';try{const r=await h.get("/resources");We(a,r)}catch(r){a.innerHTML=`<div class="page-error">Failed to load: ${r.message}</div>`}}function We(a,r){let i=r,v="",n=null;a.innerHTML=`
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
                ${de.map(d=>`<option value="${d}">${V[d]} ${d}</option>`).join("")}
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
              ${de.map(d=>`<option value="${d}">${V[d]} ${d}</option>`).join("")}
            </select>
          </div>
        </div>
        <div id="resources-body"></div>
      </div>
    </div>
  `;function l(){const d=v?i.filter(m=>m.category===v):i,c=document.getElementById("resources-body");if(d.length===0){c.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No contacts in this category.</p>';return}const e={};d.forEach(m=>{e[m.category]||(e[m.category]=[]),e[m.category].push(m)}),c.innerHTML=Object.entries(e).map(([m,s])=>`
      <div style="padding: var(--space-4) var(--space-6);">
        <div style="font-size: var(--text-xs); font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: var(--text-tertiary); margin-bottom: var(--space-3);">
          ${V[m]||""} ${m}
        </div>
        ${s.map(y=>`
          <div class="contact-row" style="margin-bottom: var(--space-2);">
            <div class="contact-avatar">${y.name[0].toUpperCase()}</div>
            <div class="contact-info" style="flex:1;">
              <div class="contact-name">${y.name}</div>
              <div class="contact-meta">
                ${y.phone?`📞 <a href="tel:${y.phone}" style="color:inherit;">${y.phone}</a>`:""}
                ${y.email?` · 📧 <a href="mailto:${y.email}" style="color:inherit;">${y.email}</a>`:""}
              </div>
              ${y.notes?`<div style="font-size:var(--text-xs); color:var(--text-tertiary); margin-top:2px;">${y.notes}</div>`:""}
            </div>
            <div style="display:flex; gap:4px; flex-shrink:0;">
              <button class="btn btn-sm btn-secondary" data-edit="${y.resource_id}">Edit</button>
              <button class="btn btn-sm btn-secondary" data-delete="${y.resource_id}" style="color:var(--accent-red);">Del</button>
            </div>
          </div>
        `).join("")}
        <hr style="border:none; border-top: 1px solid var(--border-subtle); margin: var(--space-3) 0;" />
      </div>
    `).join(""),c.querySelectorAll("[data-edit]").forEach(m=>{m.addEventListener("click",()=>{const s=i.find(y=>y.resource_id===+m.dataset.edit);s&&(n=s.resource_id,document.getElementById("res-cat").value=s.category,document.getElementById("res-name").value=s.name,document.getElementById("res-phone").value=s.phone||"",document.getElementById("res-email").value=s.email||"",document.getElementById("res-notes").value=s.notes||"",document.getElementById("resource-form-title").textContent="Edit Contact",document.getElementById("btn-res-submit").textContent="Save Changes",document.getElementById("btn-res-cancel").style.display="",document.getElementById("resource-form").scrollIntoView({behavior:"smooth"}))})}),c.querySelectorAll("[data-delete]").forEach(m=>{m.addEventListener("click",async()=>{if(confirm("Delete this contact?")){m.disabled=!0;try{await h.delete(`/resources/${m.dataset.delete}`),i=i.filter(s=>s.resource_id!==+m.dataset.delete),w("Contact deleted.","success"),l()}catch(s){w(s.message,"error"),m.disabled=!1}}})})}document.getElementById("cat-filter-select").addEventListener("change",d=>{v=d.target.value,l()}),document.getElementById("btn-res-cancel").addEventListener("click",()=>{n=null,document.getElementById("resource-form").reset(),document.getElementById("resource-form-title").textContent="Add New Contact",document.getElementById("btn-res-submit").textContent="Add Contact",document.getElementById("btn-res-cancel").style.display="none"});const p=document.getElementById("resource-form");p.addEventListener("submit",async d=>{d.preventDefault(),a.querySelectorAll(".form-error").forEach($=>$.classList.remove("visible"));let c=!0;const e=document.getElementById("res-cat").value,m=document.getElementById("res-name").value.trim();if(e||(document.getElementById("err-res-cat").classList.add("visible"),c=!1),m||(document.getElementById("err-res-name").classList.add("visible"),c=!1),!c)return;const s={category:e,name:m,phone:document.getElementById("res-phone").value.trim()||null,email:document.getElementById("res-email").value.trim()||null,notes:document.getElementById("res-notes").value.trim()||null},y=document.getElementById("btn-res-submit");y.disabled=!0;try{if(n){const $=await h.put(`/resources/${n}`,s);i=i.map(u=>u.resource_id===n?$:u),w("Contact updated.","success"),document.getElementById("btn-res-cancel").click()}else i=[await h.post("/resources",s),...i],w("Contact added.","success"),p.reset();l()}catch($){w($.message,"error")}finally{y.disabled=!1}}),l(),requestAnimationFrame(()=>{var d;return(d=document.getElementById("resources-page"))==null?void 0:d.classList.replace("page-enter","page-active")})}const Je={home:Ce,complaints:_e,booking:Y,forum:ue,resources:ze},Ke={home:De,complaints:Ne,rooms:Ue,forum:ue,resources:Ye};let q="home",J=null;function K(){return X()==="admin"?Ke:Je}function j(a){const r=K();r[a]||(a="home"),q=a,window.location.hash=a;const i=document.getElementById("sidebar"),v=document.getElementById("main-content");xe(i,q,j),r[a](v,()=>j(q)),J&&J.close()}function ce(){document.body.innerHTML=`
    <div id="app">
      <aside id="sidebar" class="sidebar"></aside>
      <main id="main-content" class="main"></main>
    </div>
  `}function Qe(){if(!fe()){ke(()=>{ce(),pe()});return}ce(),pe()}function pe(){J=$e();const a=window.location.hash.replace("#","");q=K()[a]?a:"home",j(q),window.addEventListener("hashchange",()=>{const i=window.location.hash.replace("#","");K()[i]&&i!==q&&j(i)})}(function(){const a=localStorage.getItem("ahcms_theme")||"light";document.documentElement.setAttribute("data-theme",a)})();Qe();
