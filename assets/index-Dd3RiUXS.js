(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const f={dashboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',allocation:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',rooms:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',complaints:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="15" r="0.5" fill="currentColor"/></svg>',chatbot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 3.87-3.13 7-7 7v4l-3-3c-3.31-.63-5.97-3.53-5.97-7A7 7 0 0 1 12 2z"/><circle cx="9" cy="9" r="1" fill="currentColor"/><circle cx="15" cy="9" r="1" fill="currentColor"/></svg>',menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'},P=[{id:"dashboard",label:"Dashboard",icon:f.dashboard},{id:"allocation",label:"Room Allocation",icon:f.allocation},{id:"rooms",label:"Room Details",icon:f.rooms},{id:"complaints",label:"Complaints",icon:f.complaints},{id:"chatbot",label:"Query Console",icon:f.chatbot}];function G(t,e,s){t.innerHTML=`
    <div class="sidebar-brand">
      <h1>Hostel Portal</h1>
      <span>Management System</span>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Modules</div>
      ${P.map(n=>`
        <a class="nav-item${n.id===e?" active":""}"
           data-page="${n.id}"
           id="nav-${n.id}"
           role="button"
           tabindex="0">
          ${n.icon}
          ${n.label}
        </a>
      `).join("")}
    </div>

    <div class="sidebar-footer">
      <p>v1.0.0 — 2026</p>
    </div>
  `,t.querySelectorAll(".nav-item").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.page;s(a)}),n.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n.click())})})}function O(){const t=document.createElement("button");t.className="sidebar-toggle",t.id="sidebar-toggle",t.innerHTML=f.menu,t.setAttribute("aria-label","Toggle navigation");const e=document.createElement("div");e.className="sidebar-overlay",e.id="sidebar-overlay",document.body.appendChild(t),document.body.appendChild(e);const s=document.getElementById("sidebar");function n(){s.classList.add("open"),e.classList.add("show"),t.innerHTML=f.close}function a(){s.classList.remove("open"),e.classList.remove("show"),t.innerHTML=f.menu}return t.addEventListener("click",()=>{s.classList.contains("open")?a():n()}),e.addEventListener("click",a),{close:a}}const $=[{student_id:"STU001",name:"Arjun Mehta",gender:"M",year:2,hostel:"Aryabhatta"},{student_id:"STU002",name:"Priya Sharma",gender:"F",year:3,hostel:"Gargi"},{student_id:"STU003",name:"Rahul Verma",gender:"M",year:1,hostel:"Aryabhatta"},{student_id:"STU004",name:"Sneha Iyer",gender:"F",year:2,hostel:"Gargi"},{student_id:"STU005",name:"Vikram Singh",gender:"M",year:4,hostel:"Ramanujan"},{student_id:"STU006",name:"Ananya Das",gender:"F",year:1,hostel:"Gargi"},{student_id:"STU007",name:"Karthik Nair",gender:"M",year:3,hostel:"Ramanujan"},{student_id:"STU008",name:"Diya Patel",gender:"F",year:2,hostel:"Maitreyi"},{student_id:"STU009",name:"Aditya Rao",gender:"M",year:1,hostel:"Aryabhatta"},{student_id:"STU010",name:"Meera Joshi",gender:"F",year:4,hostel:"Maitreyi"},{student_id:"STU011",name:"Rohan Gupta",gender:"M",year:2,hostel:"Ramanujan"},{student_id:"STU012",name:"Ishita Banerjee",gender:"F",year:3,hostel:"Gargi"},{student_id:"STU013",name:"Siddharth Jain",gender:"M",year:1,hostel:"Aryabhatta"},{student_id:"STU014",name:"Kavya Reddy",gender:"F",year:2,hostel:"Maitreyi"},{student_id:"STU015",name:"Nikhil Choudhary",gender:"M",year:3,hostel:"Ramanujan"}],y=[{room_id:"A101",hostel:"Aryabhatta",floor:1,type:"Single",capacity:1,current_occupancy:1},{room_id:"A102",hostel:"Aryabhatta",floor:1,type:"Double",capacity:2,current_occupancy:1},{room_id:"A103",hostel:"Aryabhatta",floor:1,type:"Triple",capacity:3,current_occupancy:3},{room_id:"A201",hostel:"Aryabhatta",floor:2,type:"Single",capacity:1,current_occupancy:0},{room_id:"A202",hostel:"Aryabhatta",floor:2,type:"Double",capacity:2,current_occupancy:2},{room_id:"A203",hostel:"Aryabhatta",floor:2,type:"Double",capacity:2,current_occupancy:0},{room_id:"G101",hostel:"Gargi",floor:1,type:"Single",capacity:1,current_occupancy:1},{room_id:"G102",hostel:"Gargi",floor:1,type:"Double",capacity:2,current_occupancy:2},{room_id:"G103",hostel:"Gargi",floor:1,type:"Triple",capacity:3,current_occupancy:1},{room_id:"G201",hostel:"Gargi",floor:2,type:"Single",capacity:1,current_occupancy:0},{room_id:"G202",hostel:"Gargi",floor:2,type:"Double",capacity:2,current_occupancy:1},{room_id:"R101",hostel:"Ramanujan",floor:1,type:"Single",capacity:1,current_occupancy:1},{room_id:"R102",hostel:"Ramanujan",floor:1,type:"Double",capacity:2,current_occupancy:0},{room_id:"R103",hostel:"Ramanujan",floor:1,type:"Triple",capacity:3,current_occupancy:2},{room_id:"R201",hostel:"Ramanujan",floor:2,type:"Single",capacity:1,current_occupancy:0},{room_id:"R202",hostel:"Ramanujan",floor:2,type:"Double",capacity:2,current_occupancy:1},{room_id:"M101",hostel:"Maitreyi",floor:1,type:"Single",capacity:1,current_occupancy:1},{room_id:"M102",hostel:"Maitreyi",floor:1,type:"Double",capacity:2,current_occupancy:2},{room_id:"M103",hostel:"Maitreyi",floor:1,type:"Triple",capacity:3,current_occupancy:0},{room_id:"M201",hostel:"Maitreyi",floor:2,type:"Single",capacity:1,current_occupancy:0},{room_id:"M202",hostel:"Maitreyi",floor:2,type:"Double",capacity:2,current_occupancy:1},{room_id:"M203",hostel:"Maitreyi",floor:2,type:"Triple",capacity:3,current_occupancy:3}],w=[{allocation_id:"AL001",student_id:"STU001",room_id:"A101",from_date:"2025-08-01",to_date:"2026-05-31",status:"active"},{allocation_id:"AL002",student_id:"STU002",room_id:"G101",from_date:"2025-08-01",to_date:"2026-05-31",status:"active"},{allocation_id:"AL003",student_id:"STU003",room_id:"A102",from_date:"2025-08-01",to_date:"2026-05-31",status:"active"},{allocation_id:"AL004",student_id:"STU004",room_id:"G102",from_date:"2025-08-01",to_date:"2026-05-31",status:"active"},{allocation_id:"AL005",student_id:"STU005",room_id:"R101",from_date:"2025-08-01",to_date:"2026-05-31",status:"active"},{allocation_id:"AL006",student_id:"STU007",room_id:"R202",from_date:"2025-08-01",to_date:"2026-05-31",status:"active"},{allocation_id:"AL007",student_id:"STU008",room_id:"M101",from_date:"2025-08-01",to_date:"2026-05-31",status:"active"},{allocation_id:"AL008",student_id:"STU010",room_id:"M102",from_date:"2024-08-01",to_date:"2025-05-31",status:"expired"},{allocation_id:"AL009",student_id:"STU012",room_id:"G102",from_date:"2025-08-01",to_date:"2026-05-31",status:"active"},{allocation_id:"AL010",student_id:"STU014",room_id:"M102",from_date:"2025-08-01",to_date:"2026-05-31",status:"active"}],g=[{complaint_id:"CMP001",student_id:"STU001",room_id:"A101",category:"Electricity",description:"Frequent power outages in the evening.",date:"2026-02-15",status:"resolved"},{complaint_id:"CMP002",student_id:"STU002",room_id:"G101",category:"Water",description:"No hot water supply in the mornings.",date:"2026-03-01",status:"in-progress"},{complaint_id:"CMP003",student_id:"STU003",room_id:"A102",category:"Cleanliness",description:"Washroom not cleaned for two days.",date:"2026-03-05",status:"open"},{complaint_id:"CMP004",student_id:"STU001",room_id:"A101",category:"Water",description:"Water leakage from ceiling during rain.",date:"2026-03-10",status:"open"},{complaint_id:"CMP005",student_id:"STU005",room_id:"R101",category:"Electricity",description:"Socket near bed not working.",date:"2026-03-12",status:"in-progress"},{complaint_id:"CMP006",student_id:"STU004",room_id:"G102",category:"Cleanliness",description:"Pest infestation in the corridor.",date:"2026-03-14",status:"open"},{complaint_id:"CMP007",student_id:"STU001",room_id:"A101",category:"Electricity",description:"Fan making loud noise and vibrating.",date:"2026-03-15",status:"open"},{complaint_id:"CMP008",student_id:"STU008",room_id:"M101",category:"Water",description:"Low water pressure on second floor.",date:"2026-03-16",status:"resolved"},{complaint_id:"CMP009",student_id:"STU007",room_id:"R202",category:"Cleanliness",description:"Common room not maintained.",date:"2026-03-17",status:"open"},{complaint_id:"CMP010",student_id:"STU012",room_id:"G102",category:"Electricity",description:"Corridor light flickering intermittently.",date:"2026-03-18",status:"in-progress"},{complaint_id:"CMP011",student_id:"STU004",room_id:"G102",category:"Water",description:"Bathroom tap dripping continuously.",date:"2026-03-19",status:"open"}];let N=11,z=12;function T(){return[...$]}function E(t){return $.find(e=>e.student_id===t)||null}function I(){return y.map(t=>({...t}))}function k(){return w.map(t=>({...t}))}function A(){return g.map(t=>({...t}))}function U(t=null,e=null){return y.filter(s=>{const n=s.current_occupancy<s.capacity,a=t?s.hostel===t:!0,o=e?s.type===e:!0;return n&&a&&o})}function q(){const t={};return g.forEach(e=>{(e.status==="open"||e.status==="in-progress")&&(t[e.student_id]=(t[e.student_id]||0)+1)}),Object.entries(t).filter(([,e])=>e>1).map(([e,s])=>({...$.find(n=>n.student_id===e),unresolved_count:s}))}function W(t,e,s=""){if(!$.find(u=>u.student_id===t))return{success:!1,error:"Student not found."};if(w.find(u=>u.student_id===t&&u.status==="active"))return{success:!1,error:"Student already has an active room allocation."};const o=y.find(u=>u.room_id===e);if(!o)return{success:!1,error:"Room not found."};if(o.current_occupancy>=o.capacity)return{success:!1,error:"Room is at full capacity."};const c=`AL${String(N++).padStart(3,"0")}`,d=new Date,r=d.toISOString().split("T")[0],i=`${d.getFullYear()+1}-05-31`,l={allocation_id:c,student_id:t,room_id:e,from_date:r,to_date:i,status:"active",preferences:s};return w.push(l),o.current_occupancy+=1,{success:!0,allocation:l}}function V(t){return w.some(e=>e.student_id===t&&(e.status==="active"||e.status==="pending"))}function Q(t,e,s,n){if(!$.find(r=>r.student_id===t))return{success:!1,error:"Student not found."};if(!y.find(r=>r.room_id===e))return{success:!1,error:"Room not found."};const d={complaint_id:`CMP${String(z++).padStart(3,"0")}`,student_id:t,room_id:e,category:s,description:n,date:new Date().toISOString().split("T")[0],status:"open"};return g.push(d),{success:!0,complaint:d}}function K(t,e){const s=g.find(n=>n.complaint_id===t);return s?(s.status=e,{success:!0,complaint:s}):{success:!1,error:"Complaint not found."}}function M(){return[...new Set(y.map(t=>t.hostel))]}function D(){return[...new Set(y.map(t=>t.type))]}function F(){const t=y.length,e=y.reduce((i,l)=>i+l.capacity,0),s=y.reduce((i,l)=>i+l.current_occupancy,0),n=y.filter(i=>i.current_occupancy<i.capacity).length,a=y.filter(i=>i.current_occupancy>=i.capacity).length,o=g.filter(i=>i.status==="open").length,c=g.filter(i=>i.status==="in-progress").length,d=g.filter(i=>i.status==="resolved").length,r=w.filter(i=>i.status==="active").length;return{totalRooms:t,totalCapacity:e,totalOccupied:s,vacantRooms:n,fullRooms:a,openComplaints:o,inProgressComplaints:c,resolvedComplaints:d,totalComplaints:g.length,activeAllocations:r,totalStudents:$.length}}function Y(t){const e=F(),n=A().sort((o,c)=>c.date.localeCompare(o.date)).slice(0,5),a=q();t.innerHTML=`
    <div class="page-enter" id="dashboard-page">
      <div class="page-header">
        <h2>Dashboard</h2>
        <p>Overview of hostel occupancy, allocations, and complaint statuses across all hostels.</p>
      </div>

      <div class="card-grid">
        <div class="card card-accent-blue">
          <div class="card-label">Total Rooms</div>
          <div class="card-value">${e.totalRooms}</div>
          <div class="card-sub">Across all hostels</div>
        </div>
        <div class="card card-accent-green">
          <div class="card-label">Vacant Rooms</div>
          <div class="card-value">${e.vacantRooms}</div>
          <div class="card-sub">${e.fullRooms} at full capacity</div>
        </div>
        <div class="card card-accent-purple">
          <div class="card-label">Active Allocations</div>
          <div class="card-value">${e.activeAllocations}</div>
          <div class="card-sub">${e.totalStudents} registered students</div>
        </div>
        <div class="card card-accent-amber">
          <div class="card-label">Open Complaints</div>
          <div class="card-value">${e.openComplaints}</div>
          <div class="card-sub">${e.inProgressComplaints} in progress</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6);">
        <!-- Recent Complaints -->
        <div class="form-section" style="max-width: none;">
          <div class="form-section-title">Recent Complaints</div>
          <div class="activity-list">
            ${n.map(o=>{const c=E(o.student_id);return`
                <div class="activity-item">
                  <div class="activity-dot" style="background: ${o.status==="open"?"var(--accent-amber)":o.status==="in-progress"?"var(--accent-blue)":"var(--accent-green)"}"></div>
                  <div class="activity-content">
                    <div class="activity-text">
                      <strong>${(c==null?void 0:c.name)||o.student_id}</strong> — ${o.category}
                      <span class="badge badge-${o.status}">${o.status}</span>
                    </div>
                    <div class="activity-time">${o.room_id} · ${o.date}</div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>

        <!-- Flagged Students -->
        <div class="form-section" style="max-width: none;">
          <div class="form-section-title">Flagged Students</div>
          <p style="font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: var(--space-4);">
            Students with multiple unresolved complaints
          </p>
          ${a.length===0?'<p style="font-size: var(--text-sm); color: var(--text-tertiary); padding: var(--space-8) 0; text-align: center;">No flagged students</p>':`<div class="activity-list">
                ${a.map(o=>`
                  <div class="activity-item">
                    <div class="activity-dot" style="background: var(--accent-red)"></div>
                    <div class="activity-content">
                      <div class="activity-text"><strong>${o.name}</strong></div>
                      <div class="activity-time">${o.student_id} · ${o.unresolved_count} unresolved · ${o.hostel}</div>
                    </div>
                  </div>
                `).join("")}
              </div>`}
        </div>
      </div>

      <!-- Occupancy Summary -->
      <div class="form-section" style="max-width: none; margin-top: var(--space-6);">
        <div class="form-section-title">Occupancy Overview</div>
        <div class="card-grid" style="margin-bottom: 0;">
          <div class="card" style="text-align: center;">
            <div class="card-label">Total Capacity</div>
            <div class="card-value" style="font-size: var(--text-2xl);">${e.totalCapacity}</div>
            <div class="card-sub">beds available</div>
          </div>
          <div class="card" style="text-align: center;">
            <div class="card-label">Occupied</div>
            <div class="card-value" style="font-size: var(--text-2xl);">${e.totalOccupied}</div>
            <div class="card-sub">${Math.round(e.totalOccupied/e.totalCapacity*100)}% utilization</div>
          </div>
          <div class="card" style="text-align: center;">
            <div class="card-label">Resolved</div>
            <div class="card-value" style="font-size: var(--text-2xl);">${e.resolvedComplaints}</div>
            <div class="card-sub">of ${e.totalComplaints} total</div>
          </div>
        </div>
      </div>
    </div>
  `,requestAnimationFrame(()=>{var o;(o=document.getElementById("dashboard-page"))==null||o.classList.replace("page-enter","page-active")})}let C=null;function J(){C||(C=document.createElement("div"),C.className="toast-container",document.body.appendChild(C))}function h(t,e="info",s=3500){J();const n=document.createElement("div");n.className=`toast toast-${e}`,n.textContent=t,C.appendChild(n),requestAnimationFrame(()=>{requestAnimationFrame(()=>{n.classList.add("show")})}),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},s)}function X(t,e){const s=T(),n=M(),a=D();t.innerHTML=`
    <div class="page-enter" id="allocation-page">
      <div class="page-header">
        <h2>Room Allocation</h2>
        <p>Submit a room application. Each student may only have one active allocation at a time.</p>
      </div>

      <div class="form-section">
        <div class="form-section-title">New Room Application</div>
        <form id="allocation-form" novalidate>
          <div class="form-grid">

            <div class="form-group">
              <label class="form-label" for="alloc-student">Student</label>
              <select class="form-select" id="alloc-student" required>
                <option value="">Select student…</option>
                ${s.map(l=>`<option value="${l.student_id}">${l.name} (${l.student_id})</option>`).join("")}
              </select>
              <div class="form-error" id="err-student">Student is required</div>
            </div>

            <div class="form-group">
              <label class="form-label" for="alloc-hostel">Preferred Hostel</label>
              <select class="form-select" id="alloc-hostel">
                <option value="">Any hostel</option>
                ${n.map(l=>`<option value="${l}">${l}</option>`).join("")}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="alloc-type">Room Type</label>
              <select class="form-select" id="alloc-type">
                <option value="">Any type</option>
                ${a.map(l=>`<option value="${l}">${l}</option>`).join("")}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="alloc-room">Available Room</label>
              <select class="form-select" id="alloc-room" required>
                <option value="">Select room…</option>
              </select>
              <div class="form-error" id="err-room">Room selection is required</div>
            </div>

            <div class="form-group full-width">
              <label class="form-label" for="alloc-prefs">Additional Preferences</label>
              <textarea class="form-textarea" id="alloc-prefs" placeholder="e.g. ground floor, near washroom, vegetarian mess proximity…" rows="3"></textarea>
            </div>

          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary" id="alloc-submit">Submit Application</button>
            <button type="reset" class="btn btn-secondary">Clear</button>
          </div>
        </form>
      </div>

      <!-- Vacant Rooms Preview -->
      <div class="table-container" style="margin-top: var(--space-8);">
        <div class="table-toolbar">
          <div class="table-toolbar-title">Available Rooms</div>
          <span style="font-size: var(--text-xs); color: var(--text-tertiary);" id="vacant-count"></span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Room ID</th>
              <th>Hostel</th>
              <th>Floor</th>
              <th>Type</th>
              <th>Capacity</th>
              <th>Occupancy</th>
            </tr>
          </thead>
          <tbody id="vacant-rooms-body"></tbody>
        </table>
      </div>
    </div>
  `;const o=document.getElementById("alloc-hostel"),c=document.getElementById("alloc-type"),d=document.getElementById("alloc-room"),r=document.getElementById("allocation-form");function i(){const l=o.value||null,u=c.value||null,m=U(l,u);d.innerHTML='<option value="">Select room…</option>'+m.map(p=>`<option value="${p.room_id}">${p.room_id} — ${p.hostel} F${p.floor} (${p.type}, ${p.current_occupancy}/${p.capacity})</option>`).join("");const v=document.getElementById("vacant-rooms-body"),b=document.getElementById("vacant-count");if(b.textContent=`${m.length} room${m.length!==1?"s":""} available`,m.length===0){v.innerHTML='<tr><td colspan="6" class="table-empty">No vacant rooms matching these filters</td></tr>';return}v.innerHTML=m.map(p=>{const S=p.capacity>0?p.current_occupancy/p.capacity*100:0,H=S>=100?"full":S>=50?"mid":"low";return`
        <tr>
          <td class="cell-mono">${p.room_id}</td>
          <td>${p.hostel}</td>
          <td>Floor ${p.floor}</td>
          <td>${p.type}</td>
          <td>${p.capacity}</td>
          <td>
            <div class="occupancy-bar">
              <div class="occupancy-track"><div class="occupancy-fill ${H}" style="width: ${S}%"></div></div>
              <span class="cell-mono">${p.current_occupancy}/${p.capacity}</span>
            </div>
          </td>
        </tr>
      `}).join("")}o.addEventListener("change",i),c.addEventListener("change",i),i(),r.addEventListener("submit",l=>{l.preventDefault();let u=!0;const m=document.getElementById("alloc-student").value,v=d.value;if(document.querySelectorAll(".form-error").forEach(S=>S.classList.remove("visible")),m||(document.getElementById("err-student").classList.add("visible"),u=!1),v||(document.getElementById("err-room").classList.add("visible"),u=!1),m&&V(m)&&(document.getElementById("err-student").textContent="This student already has an active allocation.",document.getElementById("err-student").classList.add("visible"),u=!1),!u){h("Please fix the errors above.","error");return}const b=document.getElementById("alloc-prefs").value,p=W(m,v,b);p.success?(h(`Room ${v} allocated successfully!`,"success"),r.reset(),i(),e&&e()):h(p.error,"error")}),r.addEventListener("reset",()=>{document.querySelectorAll(".form-error").forEach(l=>l.classList.remove("visible")),setTimeout(i,0)}),requestAnimationFrame(()=>{var l;(l=document.getElementById("allocation-page"))==null||l.classList.replace("page-enter","page-active")})}function Z(t){const e=M(),s=D();t.innerHTML=`
    <div class="page-enter" id="rooms-page">
      <div class="page-header">
        <h2>Room Details</h2>
        <p>Browse all rooms across hostels. Filter by occupancy status, hostel, or room type.</p>
      </div>

      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">All Rooms</div>

          <div style="display: flex; gap: var(--space-2); flex-wrap: wrap;">
            <button class="filter-chip active" data-filter-occupancy="all">All</button>
            <button class="filter-chip" data-filter-occupancy="vacant">Vacant</button>
            <button class="filter-chip" data-filter-occupancy="partial">Partial</button>
            <button class="filter-chip" data-filter-occupancy="full">Full</button>
          </div>

          <select class="form-select" id="rooms-filter-hostel" style="width: auto; padding: var(--space-1) var(--space-6) var(--space-1) var(--space-3); font-size: var(--text-xs);">
            <option value="">All Hostels</option>
            ${e.map(o=>`<option value="${o}">${o}</option>`).join("")}
          </select>

          <select class="form-select" id="rooms-filter-type" style="width: auto; padding: var(--space-1) var(--space-6) var(--space-1) var(--space-3); font-size: var(--text-xs);">
            <option value="">All Types</option>
            ${s.map(o=>`<option value="${o}">${o}</option>`).join("")}
          </select>
        </div>

        <table>
          <thead>
            <tr>
              <th>Room ID</th>
              <th>Hostel</th>
              <th>Floor</th>
              <th>Type</th>
              <th>Capacity</th>
              <th>Occupancy</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody id="rooms-table-body"></tbody>
        </table>
      </div>
    </div>
  `;let n="all";function a(){let o=I();const c=document.getElementById("rooms-filter-hostel").value,d=document.getElementById("rooms-filter-type").value;c&&(o=o.filter(i=>i.hostel===c)),d&&(o=o.filter(i=>i.type===d)),n==="vacant"?o=o.filter(i=>i.current_occupancy===0):n==="partial"?o=o.filter(i=>i.current_occupancy>0&&i.current_occupancy<i.capacity):n==="full"&&(o=o.filter(i=>i.current_occupancy>=i.capacity));const r=document.getElementById("rooms-table-body");if(o.length===0){r.innerHTML='<tr><td colspan="7" class="table-empty">No rooms match the current filters</td></tr>';return}r.innerHTML=o.map(i=>{const l=i.capacity>0?i.current_occupancy/i.capacity*100:0,u=l>=100?"full":l>=50?"mid":"low";let m;return i.current_occupancy>=i.capacity?m='<span class="badge badge-expired">Full</span>':i.current_occupancy===0?m='<span class="badge badge-active">Vacant</span>':m='<span class="badge badge-in-progress">Partial</span>',`
        <tr>
          <td class="cell-mono">${i.room_id}</td>
          <td>${i.hostel}</td>
          <td>Floor ${i.floor}</td>
          <td>${i.type}</td>
          <td>${i.capacity}</td>
          <td>
            <div class="occupancy-bar">
              <div class="occupancy-track"><div class="occupancy-fill ${u}" style="width: ${l}%"></div></div>
              <span class="cell-mono">${i.current_occupancy}/${i.capacity}</span>
            </div>
          </td>
          <td>${m}</td>
        </tr>
      `}).join("")}t.querySelectorAll("[data-filter-occupancy]").forEach(o=>{o.addEventListener("click",()=>{t.querySelectorAll("[data-filter-occupancy]").forEach(c=>c.classList.remove("active")),o.classList.add("active"),n=o.dataset.filterOccupancy,a()})}),document.getElementById("rooms-filter-hostel").addEventListener("change",a),document.getElementById("rooms-filter-type").addEventListener("change",a),a(),requestAnimationFrame(()=>{var o;(o=document.getElementById("rooms-page"))==null||o.classList.replace("page-enter","page-active")})}const B=["Water","Electricity","Cleanliness"],tt=["open","in-progress","resolved"];function et(t){const e=T();t.innerHTML=`
    <div class="page-enter" id="complaints-page">
      <div class="page-header">
        <h2>Complaints</h2>
        <p>Lodge a new complaint or track existing ones. Statuses are color-coded for quick scanning.</p>
      </div>

      <!-- Complaint Form -->
      <div class="form-section" style="margin-bottom: var(--space-8);">
        <div class="form-section-title">Lodge a Complaint</div>
        <form id="complaint-form" novalidate>
          <div class="form-grid">

            <div class="form-group">
              <label class="form-label" for="cmp-student">Student</label>
              <select class="form-select" id="cmp-student" required>
                <option value="">Select student…</option>
                ${e.map(r=>`<option value="${r.student_id}">${r.name} (${r.student_id})</option>`).join("")}
              </select>
              <div class="form-error" id="err-cmp-student">Student is required</div>
            </div>

            <div class="form-group">
              <label class="form-label" for="cmp-room">Room</label>
              <select class="form-select" id="cmp-room" required>
                <option value="">Select room…</option>
              </select>
              <div class="form-error" id="err-cmp-room">Room is required</div>
            </div>

            <div class="form-group">
              <label class="form-label" for="cmp-category">Category</label>
              <select class="form-select" id="cmp-category" required>
                <option value="">Select category…</option>
                ${B.map(r=>`<option value="${r}">${r}</option>`).join("")}
              </select>
              <div class="form-error" id="err-cmp-category">Category is required</div>
            </div>

            <div class="form-group">
              <label class="form-label">&nbsp;</label>
              <div style="display: flex; gap: var(--space-2); flex-wrap: wrap; padding-top: var(--space-1);">
                ${B.map(r=>{const i={Water:"blue",Electricity:"amber",Cleanliness:"green"};return`<span class="badge badge-${i[r]==="blue"?"in-progress":i[r]==="amber"?"open":"resolved"}" style="cursor: default;">${r}</span>`}).join("")}
              </div>
            </div>

            <div class="form-group full-width">
              <label class="form-label" for="cmp-desc">Description</label>
              <textarea class="form-textarea" id="cmp-desc" placeholder="Describe the issue in detail…" rows="3" required></textarea>
              <div class="form-error" id="err-cmp-desc">Description is required</div>
            </div>

          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary" id="cmp-submit">Submit Complaint</button>
            <button type="reset" class="btn btn-secondary">Clear</button>
          </div>
        </form>
      </div>

      <!-- Status Tracking Table -->
      <div class="table-container">
        <div class="table-toolbar">
          <div class="table-toolbar-title">Complaint Tracker</div>
          <div style="display: flex; gap: var(--space-2); flex-wrap: wrap;">
            <button class="filter-chip active" data-filter-status="all">All</button>
            ${tt.map(r=>`<button class="filter-chip" data-filter-status="${r}">${r}</button>`).join("")}
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student</th>
              <th>Room</th>
              <th>Category</th>
              <th>Description</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="complaints-table-body"></tbody>
        </table>
      </div>
    </div>
  `;let s="all";const n=document.getElementById("cmp-student"),a=document.getElementById("cmp-room"),o=I();n.addEventListener("change",()=>{const r=n.value;if(!r){a.innerHTML='<option value="">Select room…</option>';return}const i=E(r),l=i?o.filter(u=>u.hostel===i.hostel):o;a.innerHTML='<option value="">Select room…</option>'+l.map(u=>`<option value="${u.room_id}">${u.room_id} — ${u.hostel} F${u.floor}</option>`).join("")});function c(){let r=A().sort((l,u)=>u.date.localeCompare(l.date));s!=="all"&&(r=r.filter(l=>l.status===s));const i=document.getElementById("complaints-table-body");if(r.length===0){i.innerHTML='<tr><td colspan="8" class="table-empty">No complaints found</td></tr>';return}i.innerHTML=r.map(l=>{const u=E(l.student_id),m=l.description.length>40?l.description.slice(0,40)+"…":l.description;let v="";return l.status==="open"?v=`<button class="btn btn-sm btn-secondary" data-action="in-progress" data-id="${l.complaint_id}">Start</button>`:l.status==="in-progress"?v=`<button class="btn btn-sm btn-secondary" data-action="resolved" data-id="${l.complaint_id}">Resolve</button>`:v='<span style="color: var(--text-tertiary); font-size: var(--text-xs);">—</span>',`
        <tr>
          <td class="cell-mono">${l.complaint_id}</td>
          <td>${(u==null?void 0:u.name)||l.student_id}</td>
          <td class="cell-mono">${l.room_id}</td>
          <td>${l.category}</td>
          <td title="${l.description}" style="max-width: 200px; overflow: hidden; text-overflow: ellipsis;">${m}</td>
          <td class="cell-mono">${l.date}</td>
          <td><span class="badge badge-${l.status}">${l.status}</span></td>
          <td>${v}</td>
        </tr>
      `}).join(""),i.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{const u=l.dataset.action,m=l.dataset.id,v=K(m,u);v.success?(h(`Complaint ${m} → ${u}`,"success"),c()):h(v.error,"error")})})}t.querySelectorAll("[data-filter-status]").forEach(r=>{r.addEventListener("click",()=>{t.querySelectorAll("[data-filter-status]").forEach(i=>i.classList.remove("active")),r.classList.add("active"),s=r.dataset.filterStatus,c()})});const d=document.getElementById("complaint-form");d.addEventListener("submit",r=>{r.preventDefault();let i=!0;document.querySelectorAll("#complaint-form .form-error").forEach(p=>p.classList.remove("visible"));const l=n.value,u=a.value,m=document.getElementById("cmp-category").value,v=document.getElementById("cmp-desc").value.trim();if(l||(document.getElementById("err-cmp-student").classList.add("visible"),i=!1),u||(document.getElementById("err-cmp-room").classList.add("visible"),i=!1),m||(document.getElementById("err-cmp-category").classList.add("visible"),i=!1),v||(document.getElementById("err-cmp-desc").classList.add("visible"),i=!1),!i){h("Please fill in all required fields.","error");return}const b=Q(l,u,m,v);b.success?(h(`Complaint ${b.complaint.complaint_id} lodged successfully.`,"success"),d.reset(),c()):h(b.error,"error")}),d.addEventListener("reset",()=>{document.querySelectorAll("#complaint-form .form-error").forEach(r=>r.classList.remove("visible"))}),c(),requestAnimationFrame(()=>{var r;(r=document.getElementById("complaints-page"))==null||r.classList.replace("page-enter","page-active")})}const ot=[{patterns:[/vacant\s*rooms?/i,/available\s*rooms?/i,/empty\s*rooms?/i,/free\s*rooms?/i],handler:t=>{const e=t.match(/(?:in|at|for)\s+(\w+)/i),s=t.match(/(single|double|triple)/i),n=e?j(e[1]):null,a=s?at(s[1]):null,o=U(n,a);if(o.length===0)return`No vacant rooms found${n?` in ${n}`:""}${a?` of type ${a}`:""}.`;let c=`**${o.length} vacant room${o.length>1?"s":""}**${n?` in ${n}`:""}${a?` (${a})`:""}:

`;return c+=`| Room | Hostel | Floor | Type | Availability |
|------|--------|-------|------|--------------|
`,o.forEach(d=>{c+=`| \`${d.room_id}\` | ${d.hostel} | ${d.floor} | ${d.type} | ${d.current_occupancy}/${d.capacity} |
`}),c}},{patterns:[/unresolved\s*complaints?/i,/multiple\s*complaints?/i,/flagged\s*students?/i,/pending\s*complaints?.*students?/i],handler:()=>{const t=q();if(t.length===0)return"No students with multiple unresolved complaints.";let e=`**${t.length} student${t.length>1?"s":""}** with multiple unresolved complaints:

`;return t.forEach(s=>{e+=`- **${s.name}** (\`${s.student_id}\`) — ${s.unresolved_count} unresolved, ${s.hostel}
`}),e}},{patterns:[/all\s*rooms?/i,/list\s*rooms?/i,/show\s*rooms?/i,/room\s*details?/i],handler:t=>{let e=I();const s=t.match(/(?:in|at|for)\s+(\w+)/i);if(s){const a=j(s[1]);a&&(e=e.filter(o=>o.hostel===a))}let n=`**${e.length} rooms**:

| Room | Hostel | Floor | Type | Occupancy |
|------|--------|-------|------|-----------|
`;return e.forEach(a=>{n+=`| \`${a.room_id}\` | ${a.hostel} | ${a.floor} | ${a.type} | ${a.current_occupancy}/${a.capacity} |
`}),n}},{patterns:[/all\s*students?/i,/list\s*students?/i,/show\s*students?/i],handler:()=>{const t=T();let e=`**${t.length} students**:

| ID | Name | Gender | Year | Hostel |
|----|------|--------|------|--------|
`;return t.forEach(s=>{e+=`| \`${s.student_id}\` | ${s.name} | ${s.gender} | ${s.year} | ${s.hostel} |
`}),e}},{patterns:[/complaints?\s*(list|all|show)?/i,/show\s*complaints?/i,/list\s*complaints?/i],handler:t=>{let e=A();const s=t.match(/(open|in-progress|resolved)/i);s&&(e=e.filter(o=>o.status===s[1].toLowerCase())),e.sort((o,c)=>c.date.localeCompare(o.date));const n=e.slice(0,15);let a=`**${e.length} complaint${e.length!==1?"s":""}**${s?` (${s[1]})`:""}:

`;return a+=`| ID | Student | Room | Category | Status | Date |
|----|---------|------|----------|--------|------|
`,n.forEach(o=>{const c=E(o.student_id);a+=`| \`${o.complaint_id}\` | ${(c==null?void 0:c.name)||o.student_id} | \`${o.room_id}\` | ${o.category} | ${o.status} | ${o.date} |
`}),e.length>15&&(a+=`
_…and ${e.length-15} more._`),a}},{patterns:[/allocations?/i],handler:()=>{const t=k();let e=`**${t.length} allocations**:

| ID | Student | Room | From | To | Status |
|----|---------|------|------|----|--------|
`;return t.forEach(s=>{const n=E(s.student_id);e+=`| \`${s.allocation_id}\` | ${(n==null?void 0:n.name)||s.student_id} | \`${s.room_id}\` | ${s.from_date} | ${s.to_date} | ${s.status} |
`}),e}},{patterns:[/stats?/i,/overview/i,/summary/i,/dashboard/i,/how\s*many/i],handler:()=>{const t=F();return`**System Overview**

- Rooms: **${t.totalRooms}** (${t.vacantRooms} vacant, ${t.fullRooms} full)
- Capacity: **${t.totalOccupied}/${t.totalCapacity}** beds occupied (${Math.round(t.totalOccupied/t.totalCapacity*100)}%)
- Students: **${t.totalStudents}** registered
- Allocations: **${t.activeAllocations}** active
- Complaints: **${t.totalComplaints}** total — ${t.openComplaints} open, ${t.inProgressComplaints} in progress, ${t.resolvedComplaints} resolved`}},{patterns:[/student\s+(\w+)/i,/find\s+(\w+)/i,/search\s+(\w+)/i],handler:t=>{const e=t.replace(/^(student|find|search)\s*/i,"").trim(),s=T().filter(a=>a.name.toLowerCase().includes(e.toLowerCase())||a.student_id.toLowerCase().includes(e.toLowerCase()));if(s.length===0)return`No students found matching "${e}".`;let n="";return s.forEach(a=>{const o=k().filter(d=>d.student_id===a.student_id),c=A().filter(d=>d.student_id===a.student_id);n+=`**${a.name}** (\`${a.student_id}\`)
`,n+=`- Gender: ${a.gender==="M"?"Male":"Female"} · Year ${a.year} · ${a.hostel}
`,n+=`- Allocations: ${o.length} · Complaints: ${c.length}

`}),n.trim()}},{patterns:[/hostels?/i],handler:()=>`**Hostels:** ${M().join(", ")}`},{patterns:[/help/i,/what\s*can/i,/commands?/i],handler:()=>"**Available queries:**\n\n- `vacant rooms` — list available rooms (optionally: `in Gargi`, `single`)\n- `all rooms` / `rooms in Aryabhatta` — room details\n- `all students` — student list\n- `complaints` / `open complaints` — complaint tracker\n- `allocations` — allocation records\n- `flagged students` — students with multiple unresolved complaints\n- `stats` / `summary` — system overview\n- `student Arjun` / `find STU001` — search students\n- `hostels` — list all hostels"}];function j(t){return M().find(s=>s.toLowerCase().startsWith(t.toLowerCase()))||null}function at(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}function st(t){const e=t.trim();if(!e)return null;for(const s of ot)for(const n of s.patterns)if(n.test(e))return s.handler(e);return"I don't understand that query. Type **help** to see what I can answer."}function nt(t){const s=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/_([^_]+)_/g,"<em>$1</em>").split(`
`);let n=!1,a=[];for(let o=0;o<s.length;o++){const c=s[o];if(c.trim().startsWith("|")&&c.trim().endsWith("|")){if(n||(a.push("<table>"),n=!0),/^\|\s*-+/.test(c.trim()))continue;const d=c.split("|").filter(i=>i.trim()!==""),r=a.includes("<tbody>")?"td":"th";r==="th"&&a.push("<thead>"),a.push("<tr>"+d.map(i=>`<${r}>${i.trim()}</${r}>`).join("")+"</tr>"),r==="th"&&a.push("</thead><tbody>")}else n&&(a.push("</tbody></table>"),n=!1),c.trim().startsWith("- ")?a.push("<li>"+c.trim().slice(2)+"</li>"):c.trim()===""?a.push("<br>"):a.push("<p>"+c+"</p>")}return n&&a.push("</tbody></table>"),a.join("")}function it(t){t.innerHTML=`
    <div class="page-enter" id="chatbot-page">
      <div class="page-header">
        <h2>Query Console</h2>
        <p>Ask questions about rooms, students, complaints, or allocations in plain English.</p>
      </div>

      <div class="chat-container">
        <div class="chat-messages" id="chat-messages">
          <div class="chat-msg chat-bot">
            <div class="chat-bubble">
              Welcome. Type <strong>help</strong> to see available queries, or just ask something like <code>vacant rooms in Gargi</code>.
            </div>
          </div>
        </div>

        <form class="chat-input-bar" id="chat-form">
          <input type="text" class="chat-input" id="chat-input" placeholder="Ask a question…" autocomplete="off" spellcheck="false" />
          <button type="submit" class="chat-send" id="chat-send" aria-label="Send">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  `;const e=document.getElementById("chat-messages"),s=document.getElementById("chat-form"),n=document.getElementById("chat-input");function a(o,c){const d=document.createElement("div");d.className=`chat-msg ${c?"chat-user":"chat-bot"}`;const r=document.createElement("div");r.className="chat-bubble",c?r.textContent=o:r.innerHTML=nt(o),d.appendChild(r),e.appendChild(d),e.scrollTop=e.scrollHeight}s.addEventListener("submit",o=>{o.preventDefault();const c=n.value.trim();c&&(a(c,!0),n.value="",setTimeout(()=>{const d=st(c);a(d,!1)},150))}),n.focus(),requestAnimationFrame(()=>{var o;(o=document.getElementById("chatbot-page"))==null||o.classList.replace("page-enter","page-active")})}const lt=document.getElementById("sidebar"),rt=document.getElementById("main-content"),x={dashboard:Y,allocation:X,rooms:Z,complaints:et,chatbot:it};let _="dashboard",R=null;function L(t){x[t]&&(_=t,window.location.hash=t,G(lt,_,L),x[t](rt,()=>L(_)),R&&R.close())}function ct(){R=O();const t=window.location.hash.replace("#","");x[t]&&(_=t),L(_),window.addEventListener("hashchange",()=>{const e=window.location.hash.replace("#","");x[e]&&e!==_&&L(e)})}ct();
