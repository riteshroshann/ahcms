(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function l(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(n){if(n.ep)return;n.ep=!0;const r=l(n);fetch(n.href,r)}})();const M="cw_hostel_token",H="cw_hostel_user";function N(o,e){localStorage.setItem(M,o),localStorage.setItem(H,JSON.stringify(e))}function U(){return localStorage.getItem(M)}function R(){try{return JSON.parse(localStorage.getItem(H))}catch{return null}}function F(){var o;return((o=R())==null?void 0:o.role)||null}function X(){const o=U();if(!o)return!1;try{return JSON.parse(atob(o.split(".")[1])).exp*1e3>Date.now()}catch{return!1}}function G(){localStorage.removeItem(M),localStorage.removeItem(H)}const $={home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',complaints:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="15" r="0.5" fill="currentColor"/></svg>',booking:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',forum:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-1"/><path d="M15 3H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l4-4h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/></svg>',rooms:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',resources:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',theme:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'},Z=[{id:"home",label:"Home",icon:$.home},{id:"complaints",label:"Complaint",icon:$.complaints},{id:"booking",label:"Room Booking",icon:$.booking},{id:"forum",label:"Community Forum",icon:$.forum}],ee=[{id:"home",label:"Home",icon:$.home},{id:"complaints",label:"Complaints",icon:$.complaints},{id:"rooms",label:"Room Details",icon:$.rooms},{id:"forum",label:"Community Forum",icon:$.forum},{id:"resources",label:"Resources",icon:$.resources}];function te(o,e,l){var t,a;const d=F(),n=R(),r=d==="admin"?ee:Z,m=d==="admin"?"Admin Panel":"Student Portal";o.innerHTML=`
    <div class="sidebar-brand">
      <h1>CW Hostel</h1>
      <span>${m}</span>
    </div>

    <div class="sidebar-user">
      <div class="sidebar-user-avatar">${((n==null?void 0:n.name)||"U")[0].toUpperCase()}</div>
      <div class="sidebar-user-info">
        <div class="sidebar-user-name">${(n==null?void 0:n.name)||"User"}</div>
        <div class="sidebar-user-role">${d==="admin"?"Administrator":(n==null?void 0:n.roll_no)||"Student"}</div>
      </div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Navigation</div>
      ${r.map(i=>`
        <a class="nav-item${i.id===e?" active":""}"
           data-page="${i.id}"
           id="nav-${i.id}"
           role="button"
           tabindex="0">
          ${i.icon}
          ${i.label}
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
  `,o.querySelectorAll(".nav-item[data-page]").forEach(i=>{i.addEventListener("click",()=>l(i.dataset.page)),i.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),i.click())})}),(t=document.getElementById("nav-logout"))==null||t.addEventListener("click",()=>{G(),window.location.reload()}),(a=document.getElementById("nav-theme"))==null||a.addEventListener("click",()=>{const s=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",s),localStorage.setItem("cw_theme",s)})}function ae(){const o=document.createElement("button");o.className="sidebar-toggle",o.id="sidebar-toggle",o.innerHTML=$.menu,o.setAttribute("aria-label","Toggle navigation");const e=document.createElement("div");e.className="sidebar-overlay",e.id="sidebar-overlay",document.body.appendChild(o),document.body.appendChild(e);const l=document.getElementById("sidebar");function d(){l.classList.add("open"),e.classList.add("show"),o.innerHTML=$.close}function n(){l.classList.remove("open"),e.classList.remove("show"),o.innerHTML=$.menu}return o.addEventListener("click",()=>l.classList.contains("open")?n():d()),e.addEventListener("click",n),{close:n}}const oe="/api";async function I(o,e,l){const d=U(),n={"Content-Type":"application/json"};d&&(n.Authorization=`Bearer ${d}`);const r=await fetch(`${oe}${e}`,{method:o,headers:n,body:l!==void 0?JSON.stringify(l):void 0});if(r.status===401){G(),window.location.reload();return}const m=await r.json().catch(()=>({}));if(!r.ok)throw new Error(m.error||`Request failed (${r.status})`);return m}const y={get:o=>I("GET",o),post:(o,e)=>I("POST",o,e),patch:(o,e)=>I("PATCH",o,e),put:(o,e)=>I("PUT",o,e),delete:o=>I("DELETE",o)};let B=null;function se(){B||(B=document.createElement("div"),B.className="toast-container",document.body.appendChild(B))}function b(o,e="info",l=3500){se();const d=document.createElement("div");d.className=`toast toast-${e}`,d.textContent=o,B.appendChild(d),requestAnimationFrame(()=>{requestAnimationFrame(()=>{d.classList.add("show")})}),setTimeout(()=>{d.classList.remove("show"),setTimeout(()=>d.remove(),300)},l)}function ie(o){var d;document.body.innerHTML=`
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
          <h1>CW Hostel</h1>
          <p>Management Portal</p>
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
            <input type="email" id="a-email" class="login-input" placeholder="admin@cwhotel.edu" autocomplete="username" />
          </div>
          <div class="login-form-group">
            <label for="a-pass">Password</label>
            <input type="password" id="a-pass" class="login-input" placeholder="••••••••" autocomplete="current-password" />
          </div>
          <p class="login-hint">Demo credentials — Email: <code>admin@cwhotel.edu</code> Pass: <code>Admin@123</code></p>
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
            <input type="email" id="r-email" class="login-input" placeholder="you@cwhotel.edu" />
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
  `,(d=document.getElementById("login-theme"))==null||d.addEventListener("click",()=>{const r=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",r),localStorage.setItem("cw_theme",r)});let e="student";document.querySelectorAll(".login-tab").forEach(n=>{n.addEventListener("click",()=>{e=n.dataset.tab,document.querySelectorAll(".login-tab").forEach(r=>r.classList.remove("active")),n.classList.add("active"),document.getElementById("form-student").classList.toggle("hidden",e!=="student"),document.getElementById("form-admin").classList.toggle("hidden",e!=="admin"),document.getElementById("form-register").classList.add("hidden")})}),document.getElementById("btn-show-register").addEventListener("click",()=>{document.getElementById("form-admin").classList.add("hidden"),document.getElementById("form-register").classList.remove("hidden")}),document.getElementById("btn-back-login").addEventListener("click",()=>{document.getElementById("form-register").classList.add("hidden"),document.getElementById("form-admin").classList.remove("hidden")});function l(n,r){const m=document.getElementById(n);m.disabled=r,m.textContent=r?"Signing in…":"Sign In"}document.getElementById("form-student").addEventListener("submit",async n=>{n.preventDefault();const r=document.getElementById("s-roll").value.trim(),m=document.getElementById("s-pass").value,t=document.getElementById("err-student");if(t.textContent="",!r||!m){t.textContent="All fields required.";return}l("btn-student-login",!0);try{const{token:a,user:i}=await y.post("/auth/student/login",{roll_no:r,password:m});N(a,i),o()}catch(a){t.textContent=a.message}finally{l("btn-student-login",!1)}}),document.getElementById("form-admin").addEventListener("submit",async n=>{n.preventDefault();const r=document.getElementById("a-email").value.trim(),m=document.getElementById("a-pass").value,t=document.getElementById("err-admin");if(t.textContent="",!r||!m){t.textContent="All fields required.";return}l("btn-admin-login",!0);try{const{token:a,user:i}=await y.post("/auth/admin/login",{email:r,password:m});N(a,i),o()}catch(a){t.textContent=a.message}finally{l("btn-admin-login",!1)}}),document.getElementById("form-register").addEventListener("submit",async n=>{n.preventDefault();const r=document.getElementById("r-name").value.trim(),m=document.getElementById("r-email").value.trim(),t=document.getElementById("r-pass").value,a=document.getElementById("err-register");if(a.textContent="",!r||!m||!t){a.textContent="All fields required.";return}if(t.length<8){a.textContent="Password must be at least 8 characters.";return}const i=document.getElementById("btn-register");i.disabled=!0,i.textContent="Creating…";try{await y.post("/auth/admin/register",{name:r,email:m,password:t}),b("Account created! Please sign in.","success"),document.getElementById("btn-back-login").click(),document.getElementById("a-email").value=m}catch(s){a.textContent=s.message}finally{i.disabled=!1,i.textContent="Create Account"}})}async function ne(o){o.innerHTML='<div class="page-loading">Loading…</div>';try{const{student:e,allocation:l,complaints:d,wardens:n}=await y.get("/dashboard/student");le(o,e,l,d,n)}catch(e){o.innerHTML=`<div class="page-error">Failed to load dashboard: ${e.message}</div>`}}function le(o,e,l,d,n){var t;const r=n.filter(a=>a.role==="Warden"),m=n.filter(a=>a.role==="Guard");o.innerHTML=`
    <div class="page-enter" id="student-home">
      <div class="page-header">
        <h2>Welcome, ${((t=e==null?void 0:e.name)==null?void 0:t.split(" ")[0])||"Student"} 👋</h2>
        <p>${(e==null?void 0:e.course)||""} · ${(e==null?void 0:e.hostel)||""} Hostel · Year ${(e==null?void 0:e.year)||""}</p>
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
          <div class="card-value">${d.filter(a=>a.status==="open").length}</div>
          <div class="card-sub">${d.filter(a=>a.status==="in-progress").length} in progress</div>
        </div>

        <div class="card card-accent-green">
          <div class="card-label">Resolved</div>
          <div class="card-value">${d.filter(a=>a.status==="resolved").length}</div>
          <div class="card-sub">of ${d.length} total</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6);">
        <!-- On-Duty Wardens -->
        <div class="form-section" style="max-width: none;">
          <div class="form-section-title">On-Duty Wardens</div>
          ${r.length===0?'<p class="empty-msg">No warden data available.</p>':r.map(a=>`
              <div class="contact-row">
                <div class="contact-avatar">${a.name[0]}</div>
                <div class="contact-info">
                  <div class="contact-name">${a.name}</div>
                  <div class="contact-meta">${a.hostel} Hostel · ${a.shift}</div>
                </div>
                <a href="tel:${a.phone}" class="contact-phone">${a.phone||"—"}</a>
              </div>
            `).join("")}

          <div class="form-section-title" style="margin-top: var(--space-6);">On-Duty Guards</div>
          ${m.length===0?'<p class="empty-msg">No guard data.</p>':m.map(a=>`
              <div class="contact-row">
                <div class="contact-avatar guard">${a.name[0]}</div>
                <div class="contact-info">
                  <div class="contact-name">${a.name}</div>
                  <div class="contact-meta">${a.hostel} · ${a.shift} shift</div>
                </div>
                <a href="tel:${a.phone}" class="contact-phone">${a.phone||"—"}</a>
              </div>
            `).join("")}
        </div>

        <!-- Recent Complaints -->
        <div class="form-section" style="max-width: none;">
          <div class="form-section-title">Your Recent Complaints</div>
          ${d.length===0?'<p class="empty-msg">No complaints filed yet.</p>':`<div class="activity-list">
                ${d.slice(0,5).map(a=>`
                    <div class="activity-item">
                      <div class="activity-dot" style="background:${a.status==="open"?"var(--accent-amber)":a.status==="in-progress"?"var(--accent-blue)":"var(--accent-green)"}"></div>
                      <div class="activity-content">
                        <div class="activity-text">${a.category} — <span class="badge badge-${a.status}">${a.status}</span></div>
                        <div class="activity-time">${a.date} · ${a.room_id||"N/A"}</div>
                        <div style="font-size: var(--text-xs); color: var(--text-secondary); margin-top: 2px;">${a.description.slice(0,60)}…</div>
                      </div>
                    </div>
                  `).join("")}
              </div>`}
          <a class="link-accent" href="#complaints" style="display:block; margin-top: var(--space-4); font-size: var(--text-sm);">View all complaints →</a>
        </div>
      </div>

      <!-- Student Info Card -->
      <div class="form-section" style="max-width: none; margin-top: var(--space-6);">
        <div class="form-section-title">Your Profile</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-4);">
          ${[["Roll No",e==null?void 0:e.roll_no],["Course",e==null?void 0:e.course],["Admission",e==null?void 0:e.adm_year],["Passing Year",e==null?void 0:e.pass_year],["Gender",(e==null?void 0:e.gender)==="M"?"Male":(e==null?void 0:e.gender)==="F"?"Female":e==null?void 0:e.gender],["Address",(e==null?void 0:e.address)||"—"]].map(([a,i])=>`
            <div>
              <div style="font-size: var(--text-xs); color: var(--text-tertiary); text-transform: uppercase; letter-spacing: .06em;">${a}</div>
              <div style="font-size: var(--text-sm); color: var(--text-primary); margin-top: 4px;">${i||"—"}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `,o.querySelectorAll('a.link-accent[href^="#"]').forEach(a=>{a.addEventListener("click",i=>{i.preventDefault(),window.location.hash=a.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var a;return(a=document.getElementById("student-home"))==null?void 0:a.classList.replace("page-enter","page-active")})}const O=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"],S={Plumbing:"🔧",Electricity:"⚡",WiFi:"📶",Cleanliness:"🧹",Carpentry:"🔨",Other:"📋"},re=["open","in-progress","resolved"];async function de(o){o.innerHTML='<div class="page-loading">Loading…</div>';let e=[];try{e=await y.get("/complaints")}catch(l){o.innerHTML=`<div class="page-error">Failed to load: ${l.message}</div>`;return}ce(o,e)}function ce(o,e){let l=e,d="all",n="";o.innerHTML=`
    <div class="page-enter" id="complaints-page">
      <div class="page-header">
        <h2>Complaints</h2>
        <p>Lodge a complaint by category or track your existing ones.</p>
      </div>

      <!-- Category Tabs -->
      <div class="cat-tabs">
        <button class="cat-tab active" data-cat="">All</button>
        ${O.map(t=>`
          <button class="cat-tab" data-cat="${t}">${S[t]} ${t}</button>
        `).join("")}
      </div>

      <!-- Lodge Form -->
      <div class="form-section" style="margin-bottom: var(--space-8); max-width: none;">
        <div class="form-section-title">Lodge a Complaint</div>
        <form id="complaint-form" novalidate>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label" for="cmp-category">Category</label>
              <select class="form-select" id="cmp-category" required>
                <option value="">Select category…</option>
                ${O.map(t=>`<option value="${t}">${S[t]} ${t}</option>`).join("")}
              </select>
              <div class="form-error" id="err-cmp-cat">Category is required</div>
            </div>
            <div class="form-group">
              <label class="form-label" for="cmp-photo">Attach Photo <span style="color:var(--text-tertiary)">(optional)</span></label>
              <input type="file" class="form-input" id="cmp-photo" accept="image/*" />
            </div>
            <div class="form-group full-width">
              <label class="form-label" for="cmp-desc">Description</label>
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

      <!-- My Complaints Table -->
      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">My Complaints</div>
          <div style="display:flex; gap: var(--space-2); flex-wrap: wrap;">
            <button class="filter-chip active" data-status="all">All</button>
            ${re.map(t=>`<button class="filter-chip" data-status="${t}">${t}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-list"></div>
      </div>
    </div>
  `;function r(){let t=l;n&&(t=t.filter(i=>i.category===n)),d!=="all"&&(t=t.filter(i=>i.status===d));const a=document.getElementById("complaints-list");if(t.length===0){a.innerHTML='<p style="padding: var(--space-8); text-align:center; color: var(--text-tertiary);">No complaints found.</p>';return}a.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>#</th><th>Category</th><th>Description</th><th>Date</th><th>Status</th><th>Note</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(i=>`
            <tr>
              <td class="cell-mono">${i.complaint_id}</td>
              <td>${S[i.category]||""} ${i.category}</td>
              <td style="max-width:220px; overflow:hidden; text-overflow:ellipsis;" title="${i.description}">${i.description.slice(0,50)}${i.description.length>50?"…":""}</td>
              <td class="cell-mono">${i.date}</td>
              <td><span class="badge badge-${i.status}">${i.status}</span></td>
              <td style="color: var(--text-tertiary); font-size: var(--text-xs);">${i.admin_note||"—"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `}o.querySelectorAll(".cat-tab").forEach(t=>{t.addEventListener("click",()=>{o.querySelectorAll(".cat-tab").forEach(a=>a.classList.remove("active")),t.classList.add("active"),n=t.dataset.cat,r()})}),o.querySelectorAll("[data-status]").forEach(t=>{t.addEventListener("click",()=>{o.querySelectorAll("[data-status]").forEach(a=>a.classList.remove("active")),t.classList.add("active"),d=t.dataset.status,r()})});const m=document.getElementById("complaint-form");m.addEventListener("submit",async t=>{t.preventDefault();let a=!0;o.querySelectorAll(".form-error").forEach(u=>u.classList.remove("visible"));const i=document.getElementById("cmp-category").value,s=document.getElementById("cmp-desc").value.trim(),c=document.getElementById("cmp-photo").files[0];if(i||(document.getElementById("err-cmp-cat").classList.add("visible"),a=!1),s||(document.getElementById("err-cmp-desc").classList.add("visible"),a=!1),!a){b("Fill in all required fields.","error");return}const p=document.getElementById("cmp-submit");p.disabled=!0,p.textContent="Submitting…";try{let u=null;c&&(u=await new Promise((k,E)=>{const L=new FileReader;L.onload=()=>k(L.result),L.onerror=E,L.readAsDataURL(c)}));const f=await y.post("/complaints",{category:i,description:s,photo_base64:u});l=[f,...l],b(`Complaint #${f.complaint_id} submitted.`,"success"),m.reset(),r()}catch(u){b(u.message,"error")}finally{p.disabled=!1,p.textContent="Submit Complaint"}}),m.addEventListener("reset",()=>o.querySelectorAll(".form-error").forEach(t=>t.classList.remove("visible"))),r(),requestAnimationFrame(()=>{var t;return(t=document.getElementById("complaints-page"))==null?void 0:t.classList.replace("page-enter","page-active")})}async function J(o){o.innerHTML='<div class="page-loading">Loading rooms…</div>';try{const[e,{allocation:l},d]=await Promise.all([y.get("/rooms"),y.get("/rooms/my-allocation"),y.get("/rooms/booking-requests")]);me(o,e,l,d)}catch(e){o.innerHTML=`<div class="page-error">Failed to load: ${e.message}</div>`}}function me(o,e,l,d){var k,E,L;const n=R(),r=(n==null?void 0:n.year)||1,m=r<=2?7:r===3?8:9,t=e.filter(v=>v.hostel===((n==null?void 0:n.hostel)||"")),a=[...new Set(t.map(v=>v.floor))].sort((v,h)=>v-h);let s=a.includes(m)?m:a[0]||1,c=null;const p=d.find(v=>v.status==="pending");o.innerHTML=`
    <div class="page-enter" id="booking-page">
      <div class="page-header">
        <h2>Room Booking</h2>
        <p>Select a room from the floor plan to submit a booking request.</p>
      </div>

      ${l?`
        <div class="alert-banner alert-green">
          <strong>You already have an active room allocation:</strong> ${l.room_id} — ${l.hostel}, Floor ${l.floor}
        </div>
      `:p?`
        <div class="alert-banner alert-amber">
          <strong>Pending request:</strong> Room ${p.room_id} submitted on ${(k=p.created_at)==null?void 0:k.slice(0,10)}. Waiting for admin approval.
        </div>
      `:""}

      <!-- Floor Selector -->
      <div style="display:flex; align-items: center; gap: var(--space-4); margin-bottom: var(--space-6);">
        <span style="font-size: var(--text-sm); color: var(--text-secondary);">Floor:</span>
        <div class="cat-tabs" style="margin:0;">
          ${a.map(v=>`
            <button class="cat-tab${v===s?" active":""}" data-floor="${v}">Floor ${v}</button>
          `).join("")}
        </div>
      </div>

      <!-- Floor Plan -->
      <div class="form-section" style="max-width: none; margin-bottom: var(--space-6);" id="floor-plan-section">
        <div class="form-section-title" id="floor-plan-title">Floor ${s} — ${(n==null?void 0:n.hostel)||""} Hostel</div>
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
                ${d.map(v=>{var h;return`
                  <tr>
                    <td class="cell-mono">${v.room_id}</td>
                    <td>${v.hostel}</td>
                    <td>${v.floor}</td>
                    <td>${v.type}</td>
                    <td><span class="badge badge-${v.status}">${v.status}</span></td>
                    <td style="color:var(--text-tertiary); font-size:var(--text-xs);">${v.admin_note||"—"}</td>
                    <td class="cell-mono">${(h=v.created_at)==null?void 0:h.slice(0,10)}</td>
                  </tr>
                `}).join("")}
              </tbody>
            </table>`}
      </div>
    </div>
  `;function u(v){const h=t.filter(g=>g.floor===v);document.getElementById("floor-plan-title").textContent=`Floor ${v} — ${(n==null?void 0:n.hostel)||""} Hostel`;const x=document.getElementById("floor-plan");if(h.length===0){x.innerHTML='<p style="color:var(--text-tertiary); padding: var(--space-4);">No rooms on this floor.</p>';return}x.innerHTML=h.map(g=>{const w=g.capacity>0?g.current_occupancy/g.capacity:0,P=w===0?"vacant":w<1?"partial":"full",Q=(c==null?void 0:c.room_id)===g.room_id;return`
        <button class="room-cell ${P}${Q?" selected":""}"
                data-room="${g.room_id}"
                ${P==="full"?"disabled":""}
                title="${g.room_id} · ${g.type} · ${g.current_occupancy}/${g.capacity}">
          <span class="room-cell-id">${g.room_id}</span>
          <span class="room-cell-type">${g.type[0]}</span>
          <span class="room-cell-occ">${g.current_occupancy}/${g.capacity}</span>
        </button>
      `}).join(""),x.querySelectorAll(".room-cell:not([disabled])").forEach(g=>{g.addEventListener("click",()=>{c=t.find(w=>w.room_id===g.dataset.room),u(v),f(c)})})}function f(v){const h=document.getElementById("room-detail-panel"),x=document.getElementById("room-detail-body");document.getElementById("room-detail-title").textContent=`Room ${v.room_id}`,x.innerHTML=`
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: var(--space-4);">
        ${[["Hostel",v.hostel],["Floor",v.floor],["Type",v.type],["Capacity",`${v.capacity} beds`],["Occupied",`${v.current_occupancy} / ${v.capacity}`],["Available",`${v.available_slots} slot(s)`]].map(([g,w])=>`
          <div>
            <div style="font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase; letter-spacing:.06em;">${g}</div>
            <div style="font-size:var(--text-sm); margin-top:4px; color:var(--text-primary);">${w}</div>
          </div>
        `).join("")}
      </div>
    `,h.style.display=l||p?"none":"block",(l||p)&&(h.style.display="none")}o.querySelectorAll(".cat-tab[data-floor]").forEach(v=>{v.addEventListener("click",()=>{o.querySelectorAll(".cat-tab[data-floor]").forEach(h=>h.classList.remove("active")),v.classList.add("active"),s=+v.dataset.floor,c=null,document.getElementById("room-detail-panel").style.display="none",u(s)})}),(E=document.getElementById("btn-cancel-room"))==null||E.addEventListener("click",()=>{c=null,document.getElementById("room-detail-panel").style.display="none",u(s)}),(L=document.getElementById("booking-form"))==null||L.addEventListener("submit",async v=>{if(v.preventDefault(),!c)return;const h=document.getElementById("booking-pref").value.trim(),x=document.getElementById("btn-book");x.disabled=!0,x.textContent="Submitting…";try{await y.post("/rooms/book",{room_id:c.room_id,preferences:h}),b(`Booking request for ${c.room_id} submitted!`,"success"),J(o)}catch(g){b(g.message,"error"),x.disabled=!1,x.textContent="Request This Room"}}),u(s),requestAnimationFrame(()=>{var v;return(v=document.getElementById("booking-page"))==null?void 0:v.classList.replace("page-enter","page-active")})}async function K(o){o.innerHTML='<div class="page-loading">Loading forum…</div>';try{const e=await y.get("/forum");ve(o,e)}catch(e){o.innerHTML=`<div class="page-error">Failed to load forum: ${e.message}</div>`}}function ve(o,e){const l=F()==="admin";let d=e;o.innerHTML=`
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
  `;function n(){const r=document.getElementById("forum-feed"),m=document.getElementById("forum-empty");if(d.length===0){r.innerHTML="",m.style.display="block";return}m.style.display="none",r.innerHTML=d.map(t=>`
      <div class="forum-post">
        <div class="forum-post-header">
          <div class="forum-avatar">A</div>
          <div>
            <div class="forum-post-title">${D(t.title)}</div>
            <div class="forum-post-meta">Anonymous · ${pe(t.created_at)}</div>
          </div>
        </div>
        <div class="forum-post-body">${D(t.content)}</div>
      </div>
    `).join("")}if(!l){const r=document.getElementById("forum-form");r.addEventListener("submit",async m=>{m.preventDefault();let t=!0;o.querySelectorAll(".form-error").forEach(c=>c.classList.remove("visible"));const a=document.getElementById("f-title").value.trim(),i=document.getElementById("f-content").value.trim();if(a||(document.getElementById("err-f-title").classList.add("visible"),t=!1),i||(document.getElementById("err-f-content").classList.add("visible"),t=!1),!t)return;const s=document.getElementById("btn-post");s.disabled=!0,s.textContent="Posting…";try{d=[await y.post("/forum",{title:a,content:i}),...d],b("Posted anonymously!","success"),r.reset(),n()}catch(c){b(c.message,"error")}finally{s.disabled=!1,s.textContent="Post Anonymously"}}),r.addEventListener("reset",()=>o.querySelectorAll(".form-error").forEach(m=>m.classList.remove("visible")))}n(),requestAnimationFrame(()=>{var r;return(r=document.getElementById("forum-page"))==null?void 0:r.classList.replace("page-enter","page-active")})}function D(o){return String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function pe(o){try{return new Date(o).toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return o}}async function ue(o){o.innerHTML='<div class="page-loading">Loading…</div>';try{const e=await y.get("/dashboard/admin");ge(o,e)}catch(e){o.innerHTML=`<div class="page-error">Failed to load: ${e.message}</div>`}}function ge(o,{stats:e,recentComplaints:l,wardens:d}){const n=d.filter(t=>t.role==="Warden"),r=d.filter(t=>t.role==="Guard"),m=e.totalCapacity>0?Math.round(e.totalOccupied/e.totalCapacity*100):0;o.innerHTML=`
    <div class="page-enter" id="admin-home">
      <div class="page-header">
        <h2>Admin Dashboard</h2>
        <p>System-wide overview — hostel occupancy, complaints, and on-duty staff.</p>
      </div>

      <!-- Stat Cards -->
      <div class="card-grid">
        <div class="card card-accent-blue">
          <div class="card-label">Total Rooms</div>
          <div class="card-value">${e.totalRooms}</div>
          <div class="card-sub">${e.vacantRooms} vacant · ${m}% utilized</div>
        </div>
        <div class="card card-accent-amber">
          <div class="card-label">Open Complaints</div>
          <div class="card-value">${e.openComplaints}</div>
          <div class="card-sub">${e.inProgressComplaints} in progress</div>
        </div>
        <div class="card card-accent-green">
          <div class="card-label">Resolved</div>
          <div class="card-value">${e.resolvedComplaints}</div>
          <div class="card-sub">complaints closed</div>
        </div>
        <div class="card card-accent-purple">
          <div class="card-label">Students</div>
          <div class="card-value">${e.totalStudents}</div>
          <div class="card-sub">${e.pendingBookings} pending bookings</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6);">
        <!-- On-duty Wardens -->
        <div class="form-section" style="max-width: none;">
          <div class="form-section-title">On-Duty Wardens</div>
          ${n.map(t=>`
            <div class="contact-row">
              <div class="contact-avatar">${t.name[0]}</div>
              <div class="contact-info">
                <div class="contact-name">${t.name}</div>
                <div class="contact-meta">${t.hostel} · ${t.shift} · ${t.email||""}</div>
              </div>
              <a href="tel:${t.phone}" class="contact-phone">${t.phone||"—"}</a>
            </div>
          `).join("")}
          <div class="form-section-title" style="margin-top: var(--space-5);">On-Duty Guards</div>
          ${r.map(t=>`
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
            ${l.map(t=>`
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
            <div class="occ-track-inner" style="width: ${m}%"></div>
          </div>
          <span style="font-size:var(--text-sm); color:var(--text-secondary);">${e.totalOccupied} / ${e.totalCapacity} beds · ${m}%</span>
        </div>
        <div class="card-grid" style="margin-top: var(--space-4); margin-bottom: 0;">
          <div class="card" style="text-align:center;">
            <div class="card-label">Total Beds</div>
            <div class="card-value" style="font-size:var(--text-2xl);">${e.totalCapacity}</div>
          </div>
          <div class="card" style="text-align:center;">
            <div class="card-label">Occupied</div>
            <div class="card-value" style="font-size:var(--text-2xl);">${e.totalOccupied}</div>
          </div>
          <div class="card" style="text-align:center;">
            <div class="card-label">Vacant</div>
            <div class="card-value" style="font-size:var(--text-2xl); color: var(--accent-green);">${e.totalCapacity-e.totalOccupied}</div>
          </div>
        </div>
      </div>
    </div>
  `,o.querySelectorAll('a.link-accent[href^="#"]').forEach(t=>{t.addEventListener("click",a=>{a.preventDefault(),window.location.hash=t.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var t;return(t=document.getElementById("admin-home"))==null?void 0:t.classList.replace("page-enter","page-active")})}const j={Plumbing:"🔧",Electricity:"⚡",WiFi:"📶",Cleanliness:"🧹",Carpentry:"🔨",Other:"📋"},z=["open","in-progress","resolved"],ye=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"];async function fe(o){o.innerHTML='<div class="page-loading">Loading…</div>';try{const e=await y.get("/complaints");be(o,e)}catch(e){o.innerHTML=`<div class="page-error">Failed to load: ${e.message}</div>`}}function be(o,e){let l=e,d="all",n="",r=null;o.innerHTML=`
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
        ${z.map(a=>{const i=l.filter(c=>c.status===a).length;return`<div class="card card-accent-${a==="open"?"amber":a==="in-progress"?"blue":"green"}" style="text-align:center; cursor:pointer;" data-quick="${a}">
            <div class="card-label">${a}</div>
            <div class="card-value" style="font-size:var(--text-2xl);">${i}</div>
          </div>`}).join("")}
      </div>

      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">All Complaints</div>
          <div style="display:flex; gap: var(--space-2); flex-wrap: wrap; align-items: center;">
            <select class="form-select" id="cat-filter" style="width: auto; padding: 4px 28px 4px 10px; font-size: var(--text-xs);">
              <option value="">All Categories</option>
              ${ye.map(a=>`<option value="${a}">${j[a]} ${a}</option>`).join("")}
            </select>
            <button class="filter-chip active" data-status="all">All</button>
            ${z.map(a=>`<button class="filter-chip" data-status="${a}">${a}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-body"></div>
      </div>
    </div>
  `;function m(){let a=l;return n&&(a=a.filter(i=>i.category===n)),d!=="all"&&(a=a.filter(i=>i.status===d)),a}function t(){const a=m(),i=document.getElementById("complaints-body");if(a.length===0){i.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No complaints match the current filter.</p>';return}i.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>#</th><th>Student</th><th>Room</th><th>Category</th>
            <th>Description</th><th>Date</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody id="cmp-tbody">
          ${a.map(s=>`
            <tr class="cmp-row${r===s.complaint_id?" expanded-row":""}" data-id="${s.complaint_id}">
              <td class="cell-mono">${s.complaint_id}</td>
              <td><div>${s.student_name||s.student_id}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${s.roll_no||""}</div></td>
              <td class="cell-mono">${s.room_id||"—"}</td>
              <td>${j[s.category]||""} ${s.category}</td>
              <td style="max-width:180px; overflow:hidden; text-overflow:ellipsis;" title="${s.description}">${s.description.slice(0,45)}${s.description.length>45?"…":""}</td>
              <td class="cell-mono">${s.date}</td>
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
              <tr class="photo-row" data-for="${s.complaint_id}" style="${r===s.complaint_id?"":"display:none"}">
                <td colspan="8" style="padding: var(--space-3) var(--space-6); background: var(--bg-elevated);">
                  <img src="${s.photo_base64}" alt="Complaint photo" style="max-width:280px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);" />
                  ${s.admin_note?`<p style="font-size:var(--text-xs); color:var(--text-secondary); margin-top: var(--space-2);">Note: ${s.admin_note}</p>`:""}
                </td>
              </tr>
            `:""}
          `).join("")}
        </tbody>
      </table>
    `,i.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",async()=>{const c=+s.dataset.id,p=s.dataset.action;s.disabled=!0;try{const u=await y.patch(`/complaints/${c}/status`,{status:p});l=l.map(f=>f.complaint_id===c?{...f,...u}:f),b(`Complaint #${c} → ${p}`,"success"),t()}catch(u){b(u.message,"error"),s.disabled=!1}})}),i.querySelectorAll(".cmp-row").forEach(s=>{s.addEventListener("click",()=>{const c=+s.dataset.id;r=r===c?null:c,t()})})}o.querySelectorAll("[data-status]").forEach(a=>{a.addEventListener("click",()=>{o.querySelectorAll("[data-status]").forEach(i=>i.classList.remove("active")),a.classList.add("active"),d=a.dataset.status,t()})}),o.querySelectorAll("[data-quick]").forEach(a=>{a.addEventListener("click",()=>{var i;d=a.dataset.quick,o.querySelectorAll("[data-status]").forEach(s=>s.classList.remove("active")),(i=o.querySelector(`[data-status="${d}"]`))==null||i.classList.add("active"),t()})}),document.getElementById("cat-filter").addEventListener("change",a=>{n=a.target.value,t()}),t(),requestAnimationFrame(()=>{var a;return(a=document.getElementById("admin-complaints-page"))==null?void 0:a.classList.replace("page-enter","page-active")})}async function he(o){o.innerHTML='<div class="page-loading">Loading…</div>';try{const[e,l]=await Promise.all([y.get("/rooms"),y.get("/rooms/booking-requests")]);$e(o,e,l)}catch(e){o.innerHTML=`<div class="page-error">Failed to load: ${e.message}</div>`}}function $e(o,e,l){let d=l,n="",r="rooms";const m=[...new Set(e.map(i=>i.hostel))].sort();o.innerHTML=`
    <div class="page-enter" id="admin-rooms-page">
      <div class="page-header">
        <h2>Room Information</h2>
        <p>Full room listing with occupancy and student assignments. Manage booking requests.</p>
      </div>

      <div class="cat-tabs" style="margin-bottom: var(--space-6);">
        <button class="cat-tab active" data-tab="rooms">Room Listing</button>
        <button class="cat-tab" data-tab="requests">
          Booking Requests
          ${d.filter(i=>i.status==="pending").length>0?`<span class="badge badge-open" style="margin-left:4px;">${d.filter(i=>i.status==="pending").length}</span>`:""}
        </button>
      </div>

      <!-- Rooms Panel -->
      <div id="panel-rooms">
        <div style="display:flex; gap: var(--space-3); align-items: center; margin-bottom: var(--space-4);">
          <span style="font-size: var(--text-sm); color: var(--text-secondary);">Hostel:</span>
          <div class="cat-tabs" style="margin:0;">
            <button class="cat-tab active" data-hostel="">All</button>
            ${m.map(i=>`<button class="cat-tab" data-hostel="${i}">${i}</button>`).join("")}
          </div>
        </div>
        <div id="rooms-body"></div>
      </div>

      <!-- Requests Panel -->
      <div id="panel-requests" style="display:none;">
        <div id="requests-body"></div>
      </div>
    </div>
  `;function t(){const i=n?e.filter(c=>c.hostel===n):e,s=document.getElementById("rooms-body");s.innerHTML=`
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th>
              <th>Occupancy</th><th>Students</th>
            </tr>
          </thead>
          <tbody>
            ${i.map(c=>{const p=c.capacity>0?c.current_occupancy/c.capacity:0,u=p===0?"vacant":p<1?"partial":"full",f=u==="vacant"?"var(--accent-green)":u==="partial"?"var(--accent-amber)":"var(--accent-red)",k=(c.students||[]).map(E=>`<span style="font-size:var(--text-xs); color:var(--text-secondary); display:block;">${E.name} (Yr ${E.year})</span>`).join("");return`
                <tr>
                  <td class="cell-mono">${c.room_id}</td>
                  <td>${c.hostel}</td>
                  <td>${c.floor}</td>
                  <td>${c.type}</td>
                  <td>
                    <div class="occupancy-bar">
                      <div class="occupancy-track">
                        <div class="occupancy-fill" style="width:${p*100}%; background:${f};"></div>
                      </div>
                      <span style="font-size:var(--text-xs); font-family: var(--font-mono); color:var(--text-secondary);">${c.current_occupancy}/${c.capacity}</span>
                    </div>
                  </td>
                  <td>${k||'<span style="color:var(--text-tertiary); font-size:var(--text-xs);">Vacant</span>'}</td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    `}function a(){const i=document.getElementById("requests-body");if(d.length===0){i.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No booking requests yet.</p>';return}i.innerHTML=`
      <div class="table-container">
        <table>
          <thead>
            <tr><th>Student</th><th>Year</th><th>Room</th><th>Type</th><th>Preferences</th><th>Status</th><th>Date</th><th>Action</th></tr>
          </thead>
          <tbody>
            ${d.map(s=>{var c;return`
              <tr>
                <td><div>${s.student_name}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${s.roll_no}</div></td>
                <td>${s.year}</td>
                <td class="cell-mono">${s.room_id}</td>
                <td>${s.type}</td>
                <td style="max-width:140px; font-size:var(--text-xs); color:var(--text-secondary);">${s.preferences||"—"}</td>
                <td><span class="badge badge-${s.status}">${s.status}</span></td>
                <td class="cell-mono">${(c=s.created_at)==null?void 0:c.slice(0,10)}</td>
                <td>
                  ${s.status==="pending"?`
                    <div style="display:flex; gap:4px;">
                      <button class="btn btn-sm btn-primary" data-req="${s.request_id}" data-action="approved">Approve</button>
                      <button class="btn btn-sm btn-secondary" data-req="${s.request_id}" data-action="rejected">Reject</button>
                    </div>
                  `:`<span style="color:var(--text-tertiary); font-size:var(--text-xs);">${s.admin_note||"—"}</span>`}
                </td>
              </tr>
            `}).join("")}
          </tbody>
        </table>
      </div>
    `,i.querySelectorAll("[data-req]").forEach(s=>{s.addEventListener("click",async()=>{const c=s.dataset.req,p=s.dataset.action;s.disabled=!0;try{const u=await y.patch(`/rooms/booking-requests/${c}`,{status:p});d=d.map(f=>f.request_id===+c?{...f,...u}:f),b(`Request ${p}.`,"success"),a()}catch(u){b(u.message,"error"),s.disabled=!1}})})}o.querySelectorAll("[data-tab]").forEach(i=>{i.addEventListener("click",()=>{o.querySelectorAll("[data-tab]").forEach(s=>s.classList.remove("active")),i.classList.add("active"),r=i.dataset.tab,document.getElementById("panel-rooms").style.display=r==="rooms"?"":"none",document.getElementById("panel-requests").style.display=r==="requests"?"":"none"})}),o.querySelectorAll("[data-hostel]").forEach(i=>{i.addEventListener("click",()=>{o.querySelectorAll("[data-hostel]").forEach(s=>s.classList.remove("active")),i.classList.add("active"),n=i.dataset.hostel,t()})}),t(),a(),requestAnimationFrame(()=>{var i;return(i=document.getElementById("admin-rooms-page"))==null?void 0:i.classList.replace("page-enter","page-active")})}const W=["Plumber","Electrician","WiFi","Authority","Other"],q={Plumber:"🔧",Electrician:"⚡",WiFi:"📶",Authority:"🏛️",Other:"📋"};async function xe(o){o.innerHTML='<div class="page-loading">Loading…</div>';try{const e=await y.get("/resources");Ee(o,e)}catch(e){o.innerHTML=`<div class="page-error">Failed to load: ${e.message}</div>`}}function Ee(o,e){let l=e,d="",n=null;o.innerHTML=`
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
                ${W.map(t=>`<option value="${t}">${q[t]} ${t}</option>`).join("")}
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
            ${W.map(t=>`<button class="filter-chip" data-cat="${t}">${q[t]} ${t}</button>`).join("")}
          </div>
        </div>
        <div id="resources-body"></div>
      </div>
    </div>
  `;function r(){const t=d?l.filter(s=>s.category===d):l,a=document.getElementById("resources-body");if(t.length===0){a.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No contacts in this category.</p>';return}const i={};t.forEach(s=>{i[s.category]||(i[s.category]=[]),i[s.category].push(s)}),a.innerHTML=Object.entries(i).map(([s,c])=>`
      <div style="padding: var(--space-4) var(--space-6);">
        <div style="font-size: var(--text-xs); font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: var(--text-tertiary); margin-bottom: var(--space-3);">
          ${q[s]||""} ${s}
        </div>
        ${c.map(p=>`
          <div class="contact-row" style="margin-bottom: var(--space-2);">
            <div class="contact-avatar">${p.name[0].toUpperCase()}</div>
            <div class="contact-info" style="flex:1;">
              <div class="contact-name">${p.name}</div>
              <div class="contact-meta">
                ${p.phone?`📞 <a href="tel:${p.phone}" style="color:inherit;">${p.phone}</a>`:""}
                ${p.email?` · 📧 <a href="mailto:${p.email}" style="color:inherit;">${p.email}</a>`:""}
              </div>
              ${p.notes?`<div style="font-size:var(--text-xs); color:var(--text-tertiary); margin-top:2px;">${p.notes}</div>`:""}
            </div>
            <div style="display:flex; gap:4px; flex-shrink:0;">
              <button class="btn btn-sm btn-secondary" data-edit="${p.resource_id}">Edit</button>
              <button class="btn btn-sm btn-secondary" data-delete="${p.resource_id}" style="color:var(--accent-red);">Del</button>
            </div>
          </div>
        `).join("")}
        <hr style="border:none; border-top: 1px solid var(--border-subtle); margin: var(--space-3) 0;" />
      </div>
    `).join(""),a.querySelectorAll("[data-edit]").forEach(s=>{s.addEventListener("click",()=>{const c=l.find(p=>p.resource_id===+s.dataset.edit);c&&(n=c.resource_id,document.getElementById("res-cat").value=c.category,document.getElementById("res-name").value=c.name,document.getElementById("res-phone").value=c.phone||"",document.getElementById("res-email").value=c.email||"",document.getElementById("res-notes").value=c.notes||"",document.getElementById("resource-form-title").textContent="Edit Contact",document.getElementById("btn-res-submit").textContent="Save Changes",document.getElementById("btn-res-cancel").style.display="",document.getElementById("resource-form").scrollIntoView({behavior:"smooth"}))})}),a.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(confirm("Delete this contact?")){s.disabled=!0;try{await y.delete(`/resources/${s.dataset.delete}`),l=l.filter(c=>c.resource_id!==+s.dataset.delete),b("Contact deleted.","success"),r()}catch(c){b(c.message,"error"),s.disabled=!1}}})})}o.querySelectorAll("[data-cat]").forEach(t=>{t.addEventListener("click",()=>{o.querySelectorAll("[data-cat]").forEach(a=>a.classList.remove("active")),t.classList.add("active"),d=t.dataset.cat,r()})}),document.getElementById("btn-res-cancel").addEventListener("click",()=>{n=null,document.getElementById("resource-form").reset(),document.getElementById("resource-form-title").textContent="Add New Contact",document.getElementById("btn-res-submit").textContent="Add Contact",document.getElementById("btn-res-cancel").style.display="none"});const m=document.getElementById("resource-form");m.addEventListener("submit",async t=>{t.preventDefault(),o.querySelectorAll(".form-error").forEach(u=>u.classList.remove("visible"));let a=!0;const i=document.getElementById("res-cat").value,s=document.getElementById("res-name").value.trim();if(i||(document.getElementById("err-res-cat").classList.add("visible"),a=!1),s||(document.getElementById("err-res-name").classList.add("visible"),a=!1),!a)return;const c={category:i,name:s,phone:document.getElementById("res-phone").value.trim()||null,email:document.getElementById("res-email").value.trim()||null,notes:document.getElementById("res-notes").value.trim()||null},p=document.getElementById("btn-res-submit");p.disabled=!0;try{if(n){const u=await y.put(`/resources/${n}`,c);l=l.map(f=>f.resource_id===n?u:f),b("Contact updated.","success"),document.getElementById("btn-res-cancel").click()}else l=[await y.post("/resources",c),...l],b("Contact added.","success"),m.reset();r()}catch(u){b(u.message,"error")}finally{p.disabled=!1}}),r(),requestAnimationFrame(()=>{var t;return(t=document.getElementById("resources-page"))==null?void 0:t.classList.replace("page-enter","page-active")})}const Le={home:ne,complaints:de,booking:J,forum:K},ke={home:ue,complaints:fe,rooms:he,forum:K,resources:xe};let C="home",T=null;function _(){return F()==="admin"?ke:Le}function A(o){const e=_();e[o]||(o="home"),C=o,window.location.hash=o;const l=document.getElementById("sidebar"),d=document.getElementById("main-content");te(l,C,A),e[o](d,()=>A(C)),T&&T.close()}function V(){document.body.innerHTML=`
    <div id="app">
      <aside id="sidebar" class="sidebar"></aside>
      <main id="main-content" class="main"></main>
    </div>
  `}function we(){if(!X()){ie(()=>{V(),Y()});return}V(),Y()}function Y(){T=ae();const o=window.location.hash.replace("#","");C=_()[o]?o:"home",A(C),window.addEventListener("hashchange",()=>{const l=window.location.hash.replace("#","");_()[l]&&l!==C&&A(l)})}we();
