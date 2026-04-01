(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const v of r.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function l(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(i){if(i.ep)return;i.ep=!0;const r=l(i);fetch(i.href,r)}})();const S="ahcms_token",_="ahcms_user";(function(){const o=localStorage.getItem("cw_hostel_token"),l=localStorage.getItem("cw_hostel_user");o&&(localStorage.setItem(S,o),localStorage.removeItem("cw_hostel_token")),l&&(localStorage.setItem(_,l),localStorage.removeItem("cw_hostel_user"))})();function F(a,o){localStorage.setItem(S,a),localStorage.setItem(_,JSON.stringify(o))}function V(){return localStorage.getItem(S)}function H(){try{return JSON.parse(localStorage.getItem(_))}catch{return null}}function z(){var a;return((a=H())==null?void 0:a.role)||null}function Q(){const a=V();if(!a)return!1;try{return JSON.parse(atob(a.split(".")[1])).exp*1e3>Date.now()}catch{return!1}}function G(){localStorage.removeItem(S),localStorage.removeItem(_)}const $={home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',complaints:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="15" r="0.5" fill="currentColor"/></svg>',booking:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',forum:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-1"/><path d="M15 3H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l4-4h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/></svg>',rooms:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',resources:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',theme:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'},X=[{id:"home",label:"Home",icon:$.home},{id:"complaints",label:"Complaint",icon:$.complaints},{id:"booking",label:"Room Booking",icon:$.booking},{id:"forum",label:"Community Forum",icon:$.forum}],Z=[{id:"home",label:"Home",icon:$.home},{id:"complaints",label:"Complaints",icon:$.complaints},{id:"rooms",label:"Room Details",icon:$.rooms},{id:"forum",label:"Community Forum",icon:$.forum},{id:"resources",label:"Resources",icon:$.resources}];function ee(a,o,l){var d,s;const c=z(),i=H(),r=c==="admin"?Z:X,v=c==="admin"?"Admin Panel":"Student Portal";a.innerHTML=`
    <div class="sidebar-brand">
      <h1>AHCMS</h1>
      <span>${v}</span>
    </div>

    <div class="sidebar-user">
      <div class="sidebar-user-avatar">${((i==null?void 0:i.name)||"U")[0].toUpperCase()}</div>
      <div class="sidebar-user-info">
        <div class="sidebar-user-name">${(i==null?void 0:i.name)||"User"}</div>
        <div class="sidebar-user-role">${c==="admin"?"Administrator":(i==null?void 0:i.roll_no)||"Student"}</div>
      </div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Navigation</div>
      ${r.map(e=>`
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
  `,a.querySelectorAll(".nav-item[data-page]").forEach(e=>{e.addEventListener("click",()=>l(e.dataset.page)),e.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),e.click())})}),(d=document.getElementById("nav-logout"))==null||d.addEventListener("click",()=>{G(),window.location.reload()}),(s=document.getElementById("nav-theme"))==null||s.addEventListener("click",()=>{const t=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",t),localStorage.setItem("ahcms_theme",t)})}function te(){const a=document.createElement("button");a.className="sidebar-toggle",a.id="sidebar-toggle",a.innerHTML=$.menu,a.setAttribute("aria-label","Toggle navigation");const o=document.createElement("div");o.className="sidebar-overlay",o.id="sidebar-overlay",document.body.appendChild(a),document.body.appendChild(o);const l=document.getElementById("sidebar");function c(){l.classList.add("open"),o.classList.add("show"),a.innerHTML=$.close}function i(){l.classList.remove("open"),o.classList.remove("show"),a.innerHTML=$.menu}return a.addEventListener("click",()=>l.classList.contains("open")?i():c()),o.addEventListener("click",i),{close:i}}const ae="/api";async function I(a,o,l){const c=V(),i={"Content-Type":"application/json"};c&&(i.Authorization=`Bearer ${c}`);const r=await fetch(`${ae}${o}`,{method:a,headers:i,body:l!==void 0?JSON.stringify(l):void 0});if(r.status===401){G(),window.location.reload();return}const v=await r.json().catch(()=>({}));if(!r.ok)throw new Error(v.error||`Request failed (${r.status})`);return v}const f={get:a=>I("GET",a),post:(a,o)=>I("POST",a,o),patch:(a,o)=>I("PATCH",a,o),put:(a,o)=>I("PUT",a,o),delete:a=>I("DELETE",a)};let B=null;function oe(){B||(B=document.createElement("div"),B.className="toast-container",document.body.appendChild(B))}function h(a,o="info",l=3500){oe();const c=document.createElement("div");c.className=`toast toast-${o}`,c.textContent=a,B.appendChild(c),requestAnimationFrame(()=>{requestAnimationFrame(()=>{c.classList.add("show")})}),setTimeout(()=>{c.classList.remove("show"),setTimeout(()=>c.remove(),300)},l)}function se(a){var c;document.body.innerHTML=`
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
  `,(c=document.getElementById("login-theme"))==null||c.addEventListener("click",()=>{const r=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",r),localStorage.setItem("ahcms_theme",r)});let o="student";document.querySelectorAll(".login-tab").forEach(i=>{i.addEventListener("click",()=>{o=i.dataset.tab,document.querySelectorAll(".login-tab").forEach(r=>r.classList.remove("active")),i.classList.add("active"),document.getElementById("form-student").classList.toggle("hidden",o!=="student"),document.getElementById("form-admin").classList.toggle("hidden",o!=="admin"),document.getElementById("form-register").classList.add("hidden")})}),document.getElementById("btn-show-register").addEventListener("click",()=>{document.getElementById("form-admin").classList.add("hidden"),document.getElementById("form-register").classList.remove("hidden")}),document.getElementById("btn-back-login").addEventListener("click",()=>{document.getElementById("form-register").classList.add("hidden"),document.getElementById("form-admin").classList.remove("hidden")});function l(i,r){const v=document.getElementById(i);v.disabled=r,v.textContent=r?"Signing in…":"Sign In"}document.getElementById("form-student").addEventListener("submit",async i=>{i.preventDefault();const r=document.getElementById("s-roll").value.trim(),v=document.getElementById("s-pass").value,d=document.getElementById("err-student");if(d.textContent="",!r||!v){d.textContent="All fields required.";return}l("btn-student-login",!0);try{const{token:s,user:e}=await f.post("/auth/student/login",{roll_no:r,password:v});F(s,e),a()}catch(s){d.textContent=s.message}finally{l("btn-student-login",!1)}}),document.getElementById("form-admin").addEventListener("submit",async i=>{i.preventDefault();const r=document.getElementById("a-email").value.trim(),v=document.getElementById("a-pass").value,d=document.getElementById("err-admin");if(d.textContent="",!r||!v){d.textContent="All fields required.";return}l("btn-admin-login",!0);try{const{token:s,user:e}=await f.post("/auth/admin/login",{email:r,password:v});F(s,e),a()}catch(s){d.textContent=s.message}finally{l("btn-admin-login",!1)}}),document.getElementById("form-register").addEventListener("submit",async i=>{i.preventDefault();const r=document.getElementById("r-name").value.trim(),v=document.getElementById("r-email").value.trim(),d=document.getElementById("r-pass").value,s=document.getElementById("err-register");if(s.textContent="",!r||!v||!d){s.textContent="All fields required.";return}if(d.length<8){s.textContent="Password must be at least 8 characters.";return}const e=document.getElementById("btn-register");e.disabled=!0,e.textContent="Creating…";try{await f.post("/auth/admin/register",{name:r,email:v,password:d}),h("Account created! Please sign in.","success"),document.getElementById("btn-back-login").click(),document.getElementById("a-email").value=v}catch(t){s.textContent=t.message}finally{e.disabled=!1,e.textContent="Create Account"}})}async function ie(a){a.innerHTML='<div class="page-loading">Loading…</div>';try{const{student:o,allocation:l,complaints:c,wardens:i,wardenOfficePhone:r}=await f.get("/dashboard/student");ne(a,o,l,c,i,r)}catch(o){a.innerHTML=`<div class="page-error">Failed to load dashboard: ${o.message}</div>`}}function ne(a,o,l,c,i,r){var s;const v=i.filter(e=>e.role==="Warden"),d=i.filter(e=>e.role==="Guard");a.innerHTML=`
    <div class="page-enter" id="student-home">
      <div class="page-header">
        <h2>Welcome, ${((s=o==null?void 0:o.name)==null?void 0:s.split(" ")[0])||"Student"} 👋</h2>
        <p>${(o==null?void 0:o.course)||""} · ${(o==null?void 0:o.hostel)||""} · Year ${(o==null?void 0:o.year)||""}</p>
      </div>

      <!-- Student Info Card -->
      <div class="form-section" style="max-width: none; margin-bottom: var(--space-10);">
        <div class="form-section-title">Your Profile</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-4);">
          ${[["Roll No",o==null?void 0:o.roll_no],["Course",o==null?void 0:o.course],["Admission",o==null?void 0:o.adm_year],["Passing Year",o==null?void 0:o.pass_year],["Gender",(o==null?void 0:o.gender)==="M"?"Male":(o==null?void 0:o.gender)==="F"?"Female":o==null?void 0:o.gender],["Address",(o==null?void 0:o.address)||"—"]].map(([e,t])=>`
            <div>
              <div style="font-size: var(--text-xs); color: var(--text-tertiary); text-transform: uppercase; letter-spacing: .06em;">${e}</div>
              <div style="font-size: var(--text-sm); color: var(--text-primary); margin-top: 4px;">${t||"—"}</div>
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
            ${r?`
              <a href="tel:${r}" style="
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
                Office: ${r}
              </a>`:""}
          </div>
          ${v.length===0?'<p class="empty-msg">No warden data available.</p>':v.map(e=>`
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
  `,a.querySelectorAll('a.link-accent[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),window.location.hash=e.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var e;return(e=document.getElementById("student-home"))==null?void 0:e.classList.replace("page-enter","page-active")})}const P=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"],q={Plumbing:"🔧",Electricity:"⚡",WiFi:"📶",Cleanliness:"🧹",Carpentry:"🔨",Other:"📋"},re=["open","in-progress","resolved"];async function le(a){a.innerHTML='<div class="page-loading">Loading…</div>';let o=[];try{o=await f.get("/complaints")}catch(l){a.innerHTML=`<div class="page-error">Failed to load: ${l.message}</div>`;return}de(a,o)}function de(a,o){let l=o,c="all",i="";a.innerHTML=`
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
            ${re.map(e=>`<button class="filter-chip" data-status="${e}">${e}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-list"></div>
      </div>
    </div>
  `;function r(){let e=l;i&&(e=e.filter(n=>n.category===i)),c!=="all"&&(e=e.filter(n=>n.status===c));const t=document.getElementById("complaints-list");if(e.length===0){t.innerHTML='<p style="padding: var(--space-8); text-align:center; color: var(--text-tertiary);">No complaints found.</p>';return}t.innerHTML=`
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
              <td>${q[n.category]||""} ${n.category}</td>
              <td style="max-width:220px; overflow:hidden; text-overflow:ellipsis;" title="${n.description}">${n.description.slice(0,50)}${n.description.length>50?"…":""}</td>
              <td class="cell-mono">${n.date}</td>
              <td><span class="badge badge-${n.status}">${n.status}</span></td>
              <td style="color: var(--text-tertiary); font-size: var(--text-xs);">${n.admin_note||"—"}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `}document.getElementById("cat-filter-select").addEventListener("change",e=>{i=e.target.value,r()}),a.querySelectorAll("[data-status]").forEach(e=>{e.addEventListener("click",()=>{a.querySelectorAll("[data-status]").forEach(t=>t.classList.remove("active")),e.classList.add("active"),c=e.dataset.status,r()})});const v=document.getElementById("cmp-category"),d=document.getElementById("cmp-other-group");v.addEventListener("change",e=>{e.target.value==="Other"?d.style.display="":(d.style.display="none",document.getElementById("cmp-other-type").value="",document.getElementById("err-cmp-other").classList.remove("visible"))});const s=document.getElementById("complaint-form");s.addEventListener("submit",async e=>{e.preventDefault();let t=!0;a.querySelectorAll(".form-error").forEach(p=>p.classList.remove("visible"));const n=document.getElementById("cmp-category").value,u=document.getElementById("cmp-other-type").value.trim(),g=document.getElementById("cmp-desc").value.trim(),y=document.getElementById("cmp-photo").files[0];if(n||(document.getElementById("err-cmp-cat").classList.add("visible"),t=!1),n==="Other"&&!u&&(document.getElementById("err-cmp-other").classList.add("visible"),t=!1),g||(document.getElementById("err-cmp-desc").classList.add("visible"),t=!1),!t){h("Fill in all required fields.","error");return}const m=document.getElementById("cmp-submit");m.disabled=!0,m.textContent="Submitting…";try{let p=null;y&&(p=await new Promise((b,w)=>{const k=new FileReader;k.onload=()=>b(k.result),k.onerror=w,k.readAsDataURL(y)}));const x=n==="Other"&&u?`[Other: ${u}] ${g}`:g,E=await f.post("/complaints",{category:n,description:x,photo_base64:p});l=[E,...l],h(`Complaint #${E.complaint_id} submitted.`,"success"),s.reset(),r()}catch(p){h(p.message,"error")}finally{m.disabled=!1,m.textContent="Submit Complaint"}}),s.addEventListener("reset",()=>{a.querySelectorAll(".form-error").forEach(e=>e.classList.remove("visible")),document.getElementById("cmp-other-group").style.display="none"}),r(),requestAnimationFrame(()=>{var e;return(e=document.getElementById("complaints-page"))==null?void 0:e.classList.replace("page-enter","page-active")})}async function Y(a){a.innerHTML='<div class="page-loading">Loading rooms…</div>';try{const[o,{allocation:l},c]=await Promise.all([f.get("/rooms"),f.get("/rooms/my-allocation"),f.get("/rooms/booking-requests")]);ce(a,o,l,c)}catch(o){a.innerHTML=`<div class="page-error">Failed to load: ${o.message}</div>`}}function ce(a,o,l,c){var g,y,m;const i=H(),r=o.filter(p=>p.hostel===((i==null?void 0:i.hostel)||"")),v=[...new Set(r.map(p=>p.floor))].sort((p,x)=>p-x);let s=v[0]||1,e=null;const t=c.find(p=>p.status==="pending");a.innerHTML=`
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
      `:t?`
        <div class="alert-banner alert-amber" style="margin-bottom:var(--space-6);">
          <strong>Pending request:</strong> Room ${t.room_id} submitted on ${(g=t.created_at)==null?void 0:g.slice(0,10)}. Waiting for admin approval.
        </div>
      `:""}

      <!-- Floor Selector -->
      <div style="display:flex; align-items: center; gap: var(--space-4); margin-bottom: var(--space-6);">
        <span style="font-size: var(--text-sm); color: var(--text-secondary);">Floor:</span>
        <div class="cat-tabs" style="margin:0;">
          ${v.map(p=>`
            <button class="cat-tab${p===s?" active":""}" data-floor="${p}">Floor ${p}</button>
          `).join("")}
        </div>
      </div>

      <!-- Floor Plan -->
      <div class="form-section" style="max-width: none; margin-bottom: var(--space-6);" id="floor-plan-section">
        <div class="form-section-title" id="floor-plan-title">Floor ${s} — ${(i==null?void 0:i.hostel)||""}</div>
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
        ${c.length===0?'<p style="padding: var(--space-6); text-align:center; color:var(--text-tertiary);">No booking requests yet.</p>':`<table>
              <thead><tr><th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th><th>Status</th><th>Note</th><th>Date</th></tr></thead>
              <tbody>
                ${c.map(p=>{var x;return`
                  <tr>
                    <td class="cell-mono">${p.room_id}</td>
                    <td>${p.hostel}</td>
                    <td>${p.floor}</td>
                    <td>${p.type}</td>
                    <td><span class="badge badge-${p.status}">${p.status}</span></td>
                    <td style="color:var(--text-tertiary); font-size:var(--text-xs);">${p.admin_note||"—"}</td>
                    <td class="cell-mono">${(x=p.created_at)==null?void 0:x.slice(0,10)}</td>
                  </tr>
                `}).join("")}
              </tbody>
            </table>`}
      </div>
    </div>
  `;function n(p){const x=r.filter(b=>b.floor===p);document.getElementById("floor-plan-title").textContent=`Floor ${p} — ${(i==null?void 0:i.hostel)||""}`;const E=document.getElementById("floor-plan");if(x.length===0){E.innerHTML='<p style="color:var(--text-tertiary); padding: var(--space-4);">No rooms on this floor.</p>';return}E.innerHTML=x.map(b=>{const w=b.capacity>0?b.current_occupancy/b.capacity:0,k=w===0?"vacant":w<1?"partial":"full",J=(e==null?void 0:e.room_id)===b.room_id;return`
        <button class="room-cell ${k}${J?" selected":""}"
                data-room="${b.room_id}"
                ${k==="full"?"disabled":""}
                title="${b.room_id} · ${b.type} · ${b.current_occupancy}/${b.capacity}">
          <span class="room-cell-id">${b.room_id}</span>
          <span class="room-cell-type">${b.type[0]}</span>
          <span class="room-cell-occ">${b.current_occupancy}/${b.capacity}</span>
        </button>
      `}).join(""),E.querySelectorAll(".room-cell:not([disabled])").forEach(b=>{b.addEventListener("click",()=>{e=r.find(w=>w.room_id===b.dataset.room),n(p),u(e)})})}function u(p){const x=document.getElementById("room-detail-panel"),E=document.getElementById("room-detail-body");document.getElementById("room-detail-title").textContent=`Room ${p.room_id}`,E.innerHTML=`
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: var(--space-4);">
        ${[["Hostel",p.hostel],["Floor",p.floor],["Type",p.type],["Capacity",`${p.capacity} beds`],["Occupied",`${p.current_occupancy} / ${p.capacity}`],["Available",`${p.available_slots} slot(s)`]].map(([b,w])=>`
          <div>
            <div style="font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase; letter-spacing:.06em;">${b}</div>
            <div style="font-size:var(--text-sm); margin-top:4px; color:var(--text-primary);">${w}</div>
          </div>
        `).join("")}
      </div>
    `,x.style.display=l||t?"none":"block",(l||t)&&(x.style.display="none")}a.querySelectorAll(".cat-tab[data-floor]").forEach(p=>{p.addEventListener("click",()=>{a.querySelectorAll(".cat-tab[data-floor]").forEach(x=>x.classList.remove("active")),p.classList.add("active"),s=+p.dataset.floor,e=null,document.getElementById("room-detail-panel").style.display="none",n(s)})}),(y=document.getElementById("btn-cancel-room"))==null||y.addEventListener("click",()=>{e=null,document.getElementById("room-detail-panel").style.display="none",n(s)}),(m=document.getElementById("booking-form"))==null||m.addEventListener("submit",async p=>{if(p.preventDefault(),!e)return;const x=document.getElementById("booking-pref").value.trim(),E=document.getElementById("btn-book");E.disabled=!0,E.textContent="Submitting…";try{await f.post("/rooms/book",{room_id:e.room_id,preferences:x}),h(`Booking request for ${e.room_id} submitted!`,"success"),Y(a)}catch(b){h(b.message,"error"),E.disabled=!1,E.textContent="Request This Room"}}),n(s),requestAnimationFrame(()=>{var p;return(p=document.getElementById("booking-page"))==null?void 0:p.classList.replace("page-enter","page-active")})}async function K(a){a.innerHTML='<div class="page-loading">Loading forum…</div>';try{const o=await f.get("/forum");me(a,o)}catch(o){a.innerHTML=`<div class="page-error">Failed to load forum: ${o.message}</div>`}}function me(a,o){const l=z()==="admin";let c=o;a.innerHTML=`
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
  `;function i(){const v=document.getElementById("forum-feed"),d=document.getElementById("forum-empty");if(c.length===0){v.innerHTML="",d.style.display="block";return}d.style.display="none",v.innerHTML=c.map(s=>`
      <div class="forum-post card" style="background:var(--bg-primary); padding:var(--space-4); margin-bottom:var(--space-4); border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
        <div class="forum-post-header" style="display:flex; align-items:center; gap:var(--space-3); margin-bottom:var(--space-2);">
          <div class="forum-avatar" style="font-size:24px; background:transparent; border:none;">${s.avatar_icon||"👤"}</div>
          <div>
            <div class="forum-post-title" style="font-weight:600; color:var(--text-primary);">${C(s.title)}</div>
            <div class="forum-post-meta" style="font-size:var(--text-xs); color:var(--text-tertiary);">${C(s.avatar_name||"Anonymous")} · ${N(s.created_at)}</div>
          </div>
        </div>
        <div class="forum-post-body" style="font-size:var(--text-sm); color:var(--text-secondary); line-height:1.6; margin-left:var(--space-10); margin-bottom:var(--space-3);">${C(s.content)}</div>
        
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
                  <div class="forum-post-meta" style="font-size:var(--text-xs); color:var(--text-tertiary);">${C(e.avatar_name||"Anonymous")} · ${N(e.created_at)}</div>
                </div>
                <div class="forum-post-body" style="font-size:var(--text-sm); line-height:1.5; color:var(--text-secondary); margin-left:var(--space-6);">${C(e.content)}</div>
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
    `).join("")}if(document.getElementById("forum-feed").addEventListener("click",async v=>{const d=v.target.closest(".vote-btn");if(d&&!d.disabled){const t=d.dataset.type,n=d.dataset.id,u=d.dataset.dir;d.disabled=!0;try{const g=await f.patch("/forum/vote",{type:t,id:parseInt(n,10),dir:u});if(t==="post"){const y=c.find(m=>m.post_id===parseInt(n,10));y&&(y.upvotes=g.upvotes,y.downvotes=g.downvotes)}else for(const y of c)if(y.replies){const m=y.replies.find(p=>p.reply_id===parseInt(n,10));if(m){m.upvotes=g.upvotes,m.downvotes=g.downvotes;break}}i()}catch(g){h(g.message,"error"),d.disabled=!1}return}const s=v.target.closest(".reply-toggle-btn");if(s){const t=s.dataset.postId,n=document.getElementById(`reply-form-${t}`);n&&(n.style.display=n.style.display==="none"?"block":"none");return}const e=v.target.closest(".reply-submit-btn");if(e){const t=e.dataset.postId,n=document.getElementById(`reply-input-${t}`),u=n==null?void 0:n.value.trim();if(!u){h("Reply content cannot be empty","error");return}e.disabled=!0,e.textContent="...";try{const g=await f.post(`/forum/${t}/reply`,{content:u}),y=c.find(m=>m.post_id===parseInt(t,10));y&&(y.replies||(y.replies=[]),y.replies.push(g)),h("Reply posted","success"),i()}catch(g){h(g.message,"error"),e.disabled=!1,e.textContent="Submit Reply"}return}}),!l){const v=document.getElementById("forum-form");v.addEventListener("submit",async d=>{d.preventDefault();let s=!0;a.querySelectorAll(".form-error").forEach(u=>u.classList.remove("visible"));const e=document.getElementById("f-title").value.trim(),t=document.getElementById("f-content").value.trim();if(e||(document.getElementById("err-f-title").classList.add("visible"),s=!1),t||(document.getElementById("err-f-content").classList.add("visible"),s=!1),!s)return;const n=document.getElementById("btn-post");n.disabled=!0,n.textContent="Posting…";try{c=[await f.post("/forum",{title:e,content:t}),...c],h("Posted anonymously!","success"),v.reset(),i()}catch(u){h(u.message,"error")}finally{n.disabled=!1,n.textContent="Post Anonymously"}}),v.addEventListener("reset",()=>a.querySelectorAll(".form-error").forEach(d=>d.classList.remove("visible")))}i(),requestAnimationFrame(()=>{var v;return(v=document.getElementById("forum-page"))==null?void 0:v.classList.replace("page-enter","page-active")})}function C(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function N(a){try{return new Date(a).toLocaleString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return a}}async function pe(a){let o="";async function l(){a.innerHTML='<div class="page-loading">Loading</div>';try{const i=o?`?hostel=${encodeURIComponent(o)}`:"",[r,v]=await Promise.all([f.get(`/dashboard/admin${i}`),f.get("/rooms")]),d=[...new Set(v.map(s=>s.hostel))].sort();c(a,r,d,o,l)}catch(i){a.innerHTML=`<div class="page-error">Failed to load: ${i.message}</div>`}}await l();function c(i,{stats:r,recentComplaints:v,wardens:d,wardenOfficePhone:s},e,t,n){const u=d.filter(m=>m.role==="Warden"),g=d.filter(m=>m.role==="Guard"),y=r.totalCapacity>0?Math.round(r.totalOccupied/r.totalCapacity*100):0;i.innerHTML=`
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
              ${e.map(m=>`<option value="${m}" ${m===t?"selected":""}>${ve(m)}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Stat Cards -->
        <div class="card-grid">
          <div class="card card-accent-blue">
            <div class="card-label">Total Rooms</div>
            <div class="card-value">${r.totalRooms}</div>
            <div class="card-sub">${r.vacantRooms} vacant  ${y}% utilized</div>
          </div>
          <div class="card card-accent-amber">
            <div class="card-label">Open Complaints</div>
            <div class="card-value">${r.openComplaints}</div>
            <div class="card-sub">${r.inProgressComplaints} in progress</div>
          </div>
          <div class="card card-accent-green">
            <div class="card-label">Resolved</div>
            <div class="card-value">${r.resolvedComplaints}</div>
            <div class="card-sub">complaints closed</div>
          </div>
          <div class="card card-accent-purple">
            <div class="card-label">Students</div>
            <div class="card-value">${r.totalStudents}</div>
            <div class="card-sub">${r.pendingBookings} pending bookings</div>
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
            ${v.length===0?'<p class="empty-msg">No recent complaints.</p>':`
            <div class="activity-list">
              ${v.map(m=>`
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
            <span style="font-size:var(--text-sm); color:var(--text-secondary);">${r.totalOccupied} / ${r.totalCapacity} beds  ${y}%</span>
          </div>
          <div class="card-grid" style="margin-top: var(--space-4); margin-bottom: 0;">
            <div class="card" style="text-align:center;">
              <div class="card-label">Total Beds</div>
              <div class="card-value" style="font-size:var(--text-2xl);">${r.totalCapacity}</div>
            </div>
            <div class="card" style="text-align:center;">
              <div class="card-label">Occupied</div>
              <div class="card-value" style="font-size:var(--text-2xl);">${r.totalOccupied}</div>
            </div>
            <div class="card" style="text-align:center;">
              <div class="card-label">Vacant</div>
              <div class="card-value" style="font-size:var(--text-2xl); color: var(--accent-green);">${r.totalCapacity-r.totalOccupied}</div>
            </div>
          </div>
        </div>
      </div>
    `,i.querySelector("#hostel-filter").addEventListener("change",m=>{t=m.target.value,n()}),i.querySelectorAll('a.link-accent[href^="#"]').forEach(m=>{m.addEventListener("click",p=>{p.preventDefault(),window.location.hash=m.getAttribute("href").slice(1)})}),requestAnimationFrame(()=>{var m;return(m=document.getElementById("admin-home"))==null?void 0:m.classList.replace("page-enter","page-active")})}}function ve(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const j={Plumbing:"🔧",Electricity:"⚡",WiFi:"📶",Cleanliness:"🧹",Carpentry:"🔨",Other:"📋"},D=["open","in-progress","resolved"],ue=["Plumbing","Electricity","WiFi","Cleanliness","Carpentry","Other"];async function ge(a){a.innerHTML='<div class="page-loading">Loading…</div>';try{const o=await f.get("/complaints");ye(a,o)}catch(o){a.innerHTML=`<div class="page-error">Failed to load: ${o.message}</div>`}}function ye(a,o){let l=o,c="all",i="",r=null;a.innerHTML=`
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
        ${D.map(s=>{const e=l.filter(n=>n.status===s).length;return`<div class="card card-accent-${s==="open"?"amber":s==="in-progress"?"blue":"green"}" style="text-align:center; cursor:pointer;" data-quick="${s}">
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
              ${ue.map(s=>`<option value="${s}">${j[s]} ${s}</option>`).join("")}
            </select>
            <button class="filter-chip active" data-status="all">All</button>
            ${D.map(s=>`<button class="filter-chip" data-status="${s}">${s}</button>`).join("")}
          </div>
        </div>
        <div id="complaints-body"></div>
      </div>
    </div>
  `;function v(){let s=l;return i&&(s=s.filter(e=>e.category===i)),c!=="all"&&(s=s.filter(e=>e.status===c)),s}function d(){const s=v(),e=document.getElementById("complaints-body");if(s.length===0){e.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No complaints match the current filter.</p>';return}e.innerHTML=`
      <table>
        <thead>
          <tr>
            <th>#</th><th>Student</th><th>Room</th><th>Category</th>
            <th>Description</th><th>Date</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody id="cmp-tbody">
          ${s.map(t=>`
            <tr class="cmp-row${r===t.complaint_id?" expanded-row":""}" data-id="${t.complaint_id}">
              <td class="cell-mono">${t.complaint_id}</td>
              <td><div>${t.student_name||t.student_id}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${t.roll_no||""}</div></td>
              <td class="cell-mono">${t.room_id||"—"}</td>
              <td>${j[t.category]||""} ${t.category}</td>
              <td style="max-width:180px; overflow:hidden; text-overflow:ellipsis;" title="${t.description}">${t.description.slice(0,45)}${t.description.length>45?"…":""}</td>
              <td class="cell-mono">
                <div>${t.date}</div>
                ${t.resolved_date?`<div style="font-size:10px; color:var(--accent-green); margin-top:2px;">Res: ${t.resolved_date}</div>`:""}
              </td>
              <td><span class="badge badge-${t.status}">${t.status}</span></td>
              <td>
                ${t.status!=="resolved"?`
                  <div style="display:flex; gap:4px;">
                    ${t.status==="open"?`<button class="btn btn-sm btn-secondary" data-action="in-progress" data-id="${t.complaint_id}">Start</button>`:""}
                    <button class="btn btn-sm btn-primary" data-action="resolved" data-id="${t.complaint_id}">Resolve</button>
                  </div>
                `:'<span style="color:var(--text-tertiary); font-size:var(--text-xs);">Done</span>'}
              </td>
            </tr>
            ${t.photo_base64?`
              <tr class="photo-row" data-for="${t.complaint_id}" style="${r===t.complaint_id?"":"display:none"}">
                <td colspan="8" style="padding: var(--space-3) var(--space-6); background: var(--bg-elevated);">
                  <img src="${t.photo_base64}" alt="Complaint photo" style="max-width:280px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);" />
                  ${t.admin_note?`<p style="font-size:var(--text-xs); color:var(--text-secondary); margin-top: var(--space-2);">Note: ${t.admin_note}</p>`:""}
                </td>
              </tr>
            `:""}
          `).join("")}
        </tbody>
      </table>
    `,e.querySelectorAll("[data-action]").forEach(t=>{t.addEventListener("click",async()=>{const n=+t.dataset.id,u=t.dataset.action;t.disabled=!0;try{const g=await f.patch(`/complaints/${n}/status`,{status:u});l=l.map(y=>y.complaint_id===n?{...y,...g}:y),h(`Complaint #${n} → ${u}`,"success"),d()}catch(g){h(g.message,"error"),t.disabled=!1}})}),e.querySelectorAll(".cmp-row").forEach(t=>{t.addEventListener("click",()=>{const n=+t.dataset.id;r=r===n?null:n,d()})})}a.querySelectorAll("[data-status]").forEach(s=>{s.addEventListener("click",()=>{a.querySelectorAll("[data-status]").forEach(e=>e.classList.remove("active")),s.classList.add("active"),c=s.dataset.status,d()})}),a.querySelectorAll("[data-quick]").forEach(s=>{s.addEventListener("click",()=>{var e;c=s.dataset.quick,a.querySelectorAll("[data-status]").forEach(t=>t.classList.remove("active")),(e=a.querySelector(`[data-status="${c}"]`))==null||e.classList.add("active"),d()})}),document.getElementById("cat-filter").addEventListener("change",s=>{i=s.target.value,d()}),d(),requestAnimationFrame(()=>{var s;return(s=document.getElementById("admin-complaints-page"))==null?void 0:s.classList.replace("page-enter","page-active")})}async function fe(a){a.innerHTML='<div class="page-loading">Loading…</div>';try{const[o,l]=await Promise.all([f.get("/rooms"),f.get("/rooms/booking-requests")]);be(a,o,l)}catch(o){a.innerHTML=`<div class="page-error">Failed to load: ${o.message}</div>`}}function be(a,o,l){let c=l,i="",r="rooms";const v=[...new Set(o.map(e=>e.hostel))].sort();a.innerHTML=`
    <div class="page-enter" id="admin-rooms-page">
      <div class="page-header">
        <h2>Room Information</h2>
        <p>Full room listing with occupancy and student assignments. Manage booking requests.</p>
      </div>

      <div class="cat-tabs" style="margin-bottom: var(--space-6);">
        <button class="cat-tab active" data-tab="rooms">Room Listing</button>
        <button class="cat-tab" data-tab="requests">
          Booking Requests
          ${c.filter(e=>e.status==="pending").length>0?`<span class="badge badge-open" style="margin-left:4px;">${c.filter(e=>e.status==="pending").length}</span>`:""}
        </button>
      </div>

      <!-- Rooms Panel -->
      <div id="panel-rooms">
        <div style="display:flex; gap: var(--space-3); align-items: center; margin-bottom: var(--space-4);">
          <span style="font-size: var(--text-sm); color: var(--text-secondary);">Hostel:</span>
          <div class="cat-tabs" style="margin:0;">
            <button class="cat-tab active" data-hostel="">All</button>
            ${v.map(e=>`<button class="cat-tab" data-hostel="${e}">${e}</button>`).join("")}
          </div>
        </div>
        <div id="rooms-body"></div>
      </div>

      <!-- Requests Panel -->
      <div id="panel-requests" style="display:none;">
        <div id="requests-body"></div>
      </div>
    </div>
  `;function d(){const e=i?o.filter(n=>n.hostel===i):o,t=document.getElementById("rooms-body");t.innerHTML=`
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Room</th><th>Hostel</th><th>Floor</th><th>Type</th>
              <th>Occupancy</th><th>Students</th>
            </tr>
          </thead>
          <tbody>
            ${e.map(n=>{const u=n.capacity>0?n.current_occupancy/n.capacity:0,g=u===0?"vacant":u<1?"partial":"full",y=g==="vacant"?"var(--accent-green)":g==="partial"?"var(--accent-amber)":"var(--accent-red)",m=(n.students||[]).map(p=>`<span style="font-size:var(--text-xs); color:var(--text-secondary); display:block;">${p.name} (Yr ${p.year})</span>`).join("");return`
                <tr>
                  <td class="cell-mono">${n.room_id}</td>
                  <td>${n.hostel}</td>
                  <td>${n.floor}</td>
                  <td>${n.type}</td>
                  <td>
                    <div class="occupancy-bar">
                      <div class="occupancy-track">
                        <div class="occupancy-fill" style="width:${u*100}%; background:${y};"></div>
                      </div>
                      <span style="font-size:var(--text-xs); font-family: var(--font-mono); color:var(--text-secondary);">${n.current_occupancy}/${n.capacity}</span>
                    </div>
                  </td>
                  <td>${m||'<span style="color:var(--text-tertiary); font-size:var(--text-xs);">Vacant</span>'}</td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    `}function s(){const e=document.getElementById("requests-body");if(c.length===0){e.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No booking requests yet.</p>';return}e.innerHTML=`
      <div class="table-container">
        <table>
          <thead>
            <tr><th>Student</th><th>Year</th><th>Room</th><th>Type</th><th>Preferences</th><th>Status</th><th>Date</th><th>Action</th></tr>
          </thead>
          <tbody>
            ${c.map(t=>{var n;return`
              <tr>
                <td><div>${t.student_name}</div><div style="font-size:var(--text-xs); color:var(--text-tertiary);">${t.roll_no}</div></td>
                <td>${t.year}</td>
                <td class="cell-mono">${t.room_id}</td>
                <td>${t.type}</td>
                <td style="max-width:140px; font-size:var(--text-xs); color:var(--text-secondary);">${t.preferences||"—"}</td>
                <td><span class="badge badge-${t.status}">${t.status}</span></td>
                <td class="cell-mono">${(n=t.created_at)==null?void 0:n.slice(0,10)}</td>
                <td>
                  ${t.status==="pending"?`
                    <div style="display:flex; gap:4px;">
                      <button class="btn btn-sm btn-primary" data-req="${t.request_id}" data-action="approved">Approve</button>
                      <button class="btn btn-sm btn-secondary" data-req="${t.request_id}" data-action="rejected">Reject</button>
                    </div>
                  `:`<span style="color:var(--text-tertiary); font-size:var(--text-xs);">${t.admin_note||"—"}</span>`}
                </td>
              </tr>
            `}).join("")}
          </tbody>
        </table>
      </div>
    `,e.querySelectorAll("[data-req]").forEach(t=>{t.addEventListener("click",async()=>{const n=t.dataset.req,u=t.dataset.action;t.disabled=!0;try{const g=await f.patch(`/rooms/booking-requests/${n}`,{status:u});c=c.map(y=>y.request_id===+n?{...y,...g}:y),h(`Request ${u}.`,"success"),s()}catch(g){h(g.message,"error"),t.disabled=!1}})})}a.querySelectorAll("[data-tab]").forEach(e=>{e.addEventListener("click",()=>{a.querySelectorAll("[data-tab]").forEach(t=>t.classList.remove("active")),e.classList.add("active"),r=e.dataset.tab,document.getElementById("panel-rooms").style.display=r==="rooms"?"":"none",document.getElementById("panel-requests").style.display=r==="requests"?"":"none"})}),a.querySelectorAll("[data-hostel]").forEach(e=>{e.addEventListener("click",()=>{a.querySelectorAll("[data-hostel]").forEach(t=>t.classList.remove("active")),e.classList.add("active"),i=e.dataset.hostel,d()})}),d(),s(),requestAnimationFrame(()=>{var e;return(e=document.getElementById("admin-rooms-page"))==null?void 0:e.classList.replace("page-enter","page-active")})}const O=["Plumber","Electrician","WiFi","Authority","Other"],T={Plumber:"🔧",Electrician:"⚡",WiFi:"📶",Authority:"🏛️",Other:"📋"};async function he(a){a.innerHTML='<div class="page-loading">Loading…</div>';try{const o=await f.get("/resources");xe(a,o)}catch(o){a.innerHTML=`<div class="page-error">Failed to load: ${o.message}</div>`}}function xe(a,o){let l=o,c="",i=null;a.innerHTML=`
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
                ${O.map(d=>`<option value="${d}">${T[d]} ${d}</option>`).join("")}
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
            ${O.map(d=>`<button class="filter-chip" data-cat="${d}">${T[d]} ${d}</button>`).join("")}
          </div>
        </div>
        <div id="resources-body"></div>
      </div>
    </div>
  `;function r(){const d=c?l.filter(t=>t.category===c):l,s=document.getElementById("resources-body");if(d.length===0){s.innerHTML='<p style="padding:var(--space-8); text-align:center; color:var(--text-tertiary);">No contacts in this category.</p>';return}const e={};d.forEach(t=>{e[t.category]||(e[t.category]=[]),e[t.category].push(t)}),s.innerHTML=Object.entries(e).map(([t,n])=>`
      <div style="padding: var(--space-4) var(--space-6);">
        <div style="font-size: var(--text-xs); font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: var(--text-tertiary); margin-bottom: var(--space-3);">
          ${T[t]||""} ${t}
        </div>
        ${n.map(u=>`
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
    `).join(""),s.querySelectorAll("[data-edit]").forEach(t=>{t.addEventListener("click",()=>{const n=l.find(u=>u.resource_id===+t.dataset.edit);n&&(i=n.resource_id,document.getElementById("res-cat").value=n.category,document.getElementById("res-name").value=n.name,document.getElementById("res-phone").value=n.phone||"",document.getElementById("res-email").value=n.email||"",document.getElementById("res-notes").value=n.notes||"",document.getElementById("resource-form-title").textContent="Edit Contact",document.getElementById("btn-res-submit").textContent="Save Changes",document.getElementById("btn-res-cancel").style.display="",document.getElementById("resource-form").scrollIntoView({behavior:"smooth"}))})}),s.querySelectorAll("[data-delete]").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("Delete this contact?")){t.disabled=!0;try{await f.delete(`/resources/${t.dataset.delete}`),l=l.filter(n=>n.resource_id!==+t.dataset.delete),h("Contact deleted.","success"),r()}catch(n){h(n.message,"error"),t.disabled=!1}}})})}a.querySelectorAll("[data-cat]").forEach(d=>{d.addEventListener("click",()=>{a.querySelectorAll("[data-cat]").forEach(s=>s.classList.remove("active")),d.classList.add("active"),c=d.dataset.cat,r()})}),document.getElementById("btn-res-cancel").addEventListener("click",()=>{i=null,document.getElementById("resource-form").reset(),document.getElementById("resource-form-title").textContent="Add New Contact",document.getElementById("btn-res-submit").textContent="Add Contact",document.getElementById("btn-res-cancel").style.display="none"});const v=document.getElementById("resource-form");v.addEventListener("submit",async d=>{d.preventDefault(),a.querySelectorAll(".form-error").forEach(g=>g.classList.remove("visible"));let s=!0;const e=document.getElementById("res-cat").value,t=document.getElementById("res-name").value.trim();if(e||(document.getElementById("err-res-cat").classList.add("visible"),s=!1),t||(document.getElementById("err-res-name").classList.add("visible"),s=!1),!s)return;const n={category:e,name:t,phone:document.getElementById("res-phone").value.trim()||null,email:document.getElementById("res-email").value.trim()||null,notes:document.getElementById("res-notes").value.trim()||null},u=document.getElementById("btn-res-submit");u.disabled=!0;try{if(i){const g=await f.put(`/resources/${i}`,n);l=l.map(y=>y.resource_id===i?g:y),h("Contact updated.","success"),document.getElementById("btn-res-cancel").click()}else l=[await f.post("/resources",n),...l],h("Contact added.","success"),v.reset();r()}catch(g){h(g.message,"error")}finally{u.disabled=!1}}),r(),requestAnimationFrame(()=>{var d;return(d=document.getElementById("resources-page"))==null?void 0:d.classList.replace("page-enter","page-active")})}const $e={home:ie,complaints:le,booking:Y,forum:K},Ee={home:pe,complaints:ge,rooms:fe,forum:K,resources:he};let L="home",M=null;function R(){return z()==="admin"?Ee:$e}function A(a){const o=R();o[a]||(a="home"),L=a,window.location.hash=a;const l=document.getElementById("sidebar"),c=document.getElementById("main-content");ee(l,L,A),o[a](c,()=>A(L)),M&&M.close()}function U(){document.body.innerHTML=`
    <div id="app">
      <aside id="sidebar" class="sidebar"></aside>
      <main id="main-content" class="main"></main>
    </div>
  `}function we(){if(!Q()){se(()=>{U(),W()});return}U(),W()}function W(){M=te();const a=window.location.hash.replace("#","");L=R()[a]?a:"home",A(L),window.addEventListener("hashchange",()=>{const l=window.location.hash.replace("#","");R()[l]&&l!==L&&A(l)})}(function(){const a=localStorage.getItem("ahcms_theme")||"light";document.documentElement.setAttribute("data-theme",a)})();we();
