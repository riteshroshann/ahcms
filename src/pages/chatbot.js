/* ─────────────────────────────────
   Chatbot Page
   Natural language query interface
   ───────────────────────────────── */

import {
  getStudents, getStudentById, getRooms, getVacantRooms,
  getAllocations, getComplaints, getHostels, getRoomTypes,
  getStats, getStudentsWithUnresolvedComplaints
} from '../db.js';

const QUERIES = [
  {
    patterns: [/vacant\s*rooms?/i, /available\s*rooms?/i, /empty\s*rooms?/i, /free\s*rooms?/i],
    handler: (input) => {
      const hostelMatch = input.match(/(?:in|at|for)\s+(\w+)/i);
      const typeMatch = input.match(/(single|double|triple)/i);
      const hostel = hostelMatch ? matchHostel(hostelMatch[1]) : null;
      const type = typeMatch ? capitalize(typeMatch[1]) : null;
      const rooms = getVacantRooms(hostel, type);
      if (rooms.length === 0) return `No vacant rooms found${hostel ? ` in ${hostel}` : ''}${type ? ` of type ${type}` : ''}.`;
      let msg = `**${rooms.length} vacant room${rooms.length > 1 ? 's' : ''}**${hostel ? ` in ${hostel}` : ''}${type ? ` (${type})` : ''}:\n\n`;
      msg += `| Room | Hostel | Floor | Type | Availability |\n|------|--------|-------|------|--------------|\n`;
      rooms.forEach(r => { msg += `| \`${r.room_id}\` | ${r.hostel} | ${r.floor} | ${r.type} | ${r.current_occupancy}/${r.capacity} |\n`; });
      return msg;
    }
  },
  {
    patterns: [/unresolved\s*complaints?/i, /multiple\s*complaints?/i, /flagged\s*students?/i, /pending\s*complaints?.*students?/i],
    handler: () => {
      const students = getStudentsWithUnresolvedComplaints();
      if (students.length === 0) return 'No students with multiple unresolved complaints.';
      let msg = `**${students.length} student${students.length > 1 ? 's' : ''}** with multiple unresolved complaints:\n\n`;
      students.forEach(s => { msg += `- **${s.name}** (\`${s.student_id}\`) — ${s.unresolved_count} unresolved, ${s.hostel}\n`; });
      return msg;
    }
  },
  {
    patterns: [/all\s*rooms?/i, /list\s*rooms?/i, /show\s*rooms?/i, /room\s*details?/i],
    handler: (input) => {
      let rooms = getRooms();
      const hostelMatch = input.match(/(?:in|at|for)\s+(\w+)/i);
      if (hostelMatch) {
        const h = matchHostel(hostelMatch[1]);
        if (h) rooms = rooms.filter(r => r.hostel === h);
      }
      let msg = `**${rooms.length} rooms**:\n\n| Room | Hostel | Floor | Type | Occupancy |\n|------|--------|-------|------|-----------|\n`;
      rooms.forEach(r => { msg += `| \`${r.room_id}\` | ${r.hostel} | ${r.floor} | ${r.type} | ${r.current_occupancy}/${r.capacity} |\n`; });
      return msg;
    }
  },
  {
    patterns: [/all\s*students?/i, /list\s*students?/i, /show\s*students?/i],
    handler: () => {
      const students = getStudents();
      let msg = `**${students.length} students**:\n\n| ID | Name | Gender | Year | Hostel |\n|----|------|--------|------|--------|\n`;
      students.forEach(s => { msg += `| \`${s.student_id}\` | ${s.name} | ${s.gender} | ${s.year} | ${s.hostel} |\n`; });
      return msg;
    }
  },
  {
    patterns: [/complaints?\s*(list|all|show)?/i, /show\s*complaints?/i, /list\s*complaints?/i],
    handler: (input) => {
      let complaints = getComplaints();
      const statusMatch = input.match(/(open|in-progress|resolved)/i);
      if (statusMatch) complaints = complaints.filter(c => c.status === statusMatch[1].toLowerCase());
      complaints.sort((a, b) => b.date.localeCompare(a.date));
      const shown = complaints.slice(0, 15);
      let msg = `**${complaints.length} complaint${complaints.length !== 1 ? 's' : ''}**${statusMatch ? ` (${statusMatch[1]})` : ''}:\n\n`;
      msg += `| ID | Student | Room | Category | Status | Date |\n|----|---------|------|----------|--------|------|\n`;
      shown.forEach(c => {
        const s = getStudentById(c.student_id);
        msg += `| \`${c.complaint_id}\` | ${s?.name || c.student_id} | \`${c.room_id}\` | ${c.category} | ${c.status} | ${c.date} |\n`;
      });
      if (complaints.length > 15) msg += `\n_…and ${complaints.length - 15} more._`;
      return msg;
    }
  },
  {
    patterns: [/allocations?/i],
    handler: () => {
      const allocs = getAllocations();
      let msg = `**${allocs.length} allocations**:\n\n| ID | Student | Room | From | To | Status |\n|----|---------|------|------|----|--------|\n`;
      allocs.forEach(a => {
        const s = getStudentById(a.student_id);
        msg += `| \`${a.allocation_id}\` | ${s?.name || a.student_id} | \`${a.room_id}\` | ${a.from_date} | ${a.to_date} | ${a.status} |\n`;
      });
      return msg;
    }
  },
  {
    patterns: [/stats?/i, /overview/i, /summary/i, /dashboard/i, /how\s*many/i],
    handler: () => {
      const s = getStats();
      return `**System Overview**\n\n` +
        `- Rooms: **${s.totalRooms}** (${s.vacantRooms} vacant, ${s.fullRooms} full)\n` +
        `- Capacity: **${s.totalOccupied}/${s.totalCapacity}** beds occupied (${Math.round((s.totalOccupied / s.totalCapacity) * 100)}%)\n` +
        `- Students: **${s.totalStudents}** registered\n` +
        `- Allocations: **${s.activeAllocations}** active\n` +
        `- Complaints: **${s.totalComplaints}** total — ${s.openComplaints} open, ${s.inProgressComplaints} in progress, ${s.resolvedComplaints} resolved`;
    }
  },
  {
    patterns: [/student\s+(\w+)/i, /find\s+(\w+)/i, /search\s+(\w+)/i],
    handler: (input) => {
      const term = input.replace(/^(student|find|search)\s*/i, '').trim();
      const students = getStudents().filter(s =>
        s.name.toLowerCase().includes(term.toLowerCase()) ||
        s.student_id.toLowerCase().includes(term.toLowerCase())
      );
      if (students.length === 0) return `No students found matching "${term}".`;
      let msg = '';
      students.forEach(s => {
        const allocs = getAllocations().filter(a => a.student_id === s.student_id);
        const comps = getComplaints().filter(c => c.student_id === s.student_id);
        msg += `**${s.name}** (\`${s.student_id}\`)\n`;
        msg += `- Gender: ${s.gender === 'M' ? 'Male' : 'Female'} · Year ${s.year} · ${s.hostel}\n`;
        msg += `- Allocations: ${allocs.length} · Complaints: ${comps.length}\n\n`;
      });
      return msg.trim();
    }
  },
  {
    patterns: [/hostels?/i],
    handler: () => {
      const hostels = getHostels();
      return `**Hostels:** ${hostels.join(', ')}`;
    }
  },
  {
    patterns: [/help/i, /what\s*can/i, /commands?/i],
    handler: () => {
      return `**Available queries:**\n\n` +
        `- \`vacant rooms\` — list available rooms (optionally: \`in Gargi\`, \`single\`)\n` +
        `- \`all rooms\` / \`rooms in Aryabhatta\` — room details\n` +
        `- \`all students\` — student list\n` +
        `- \`complaints\` / \`open complaints\` — complaint tracker\n` +
        `- \`allocations\` — allocation records\n` +
        `- \`flagged students\` — students with multiple unresolved complaints\n` +
        `- \`stats\` / \`summary\` — system overview\n` +
        `- \`student Arjun\` / \`find STU001\` — search students\n` +
        `- \`hostels\` — list all hostels`;
    }
  }
];

function matchHostel(term) {
  const hostels = getHostels();
  return hostels.find(h => h.toLowerCase().startsWith(term.toLowerCase())) || null;
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function processQuery(input) {
  const trimmed = input.trim();
  if (!trimmed) return null;

  for (const q of QUERIES) {
    for (const p of q.patterns) {
      if (p.test(trimmed)) {
        return q.handler(trimmed);
      }
    }
  }

  return `I don't understand that query. Type **help** to see what I can answer.`;
}

/** Very minimal markdown → HTML (bold, code, tables, lists) */
function miniMarkdown(text) {
  let html = text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/_([^_]+)_/g, '<em>$1</em>');

  // Tables
  const lines = html.split('\n');
  let inTable = false;
  let result = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (!inTable) { result.push('<table>'); inTable = true; }
      // skip separator row
      if (/^\|\s*-+/.test(line.trim())) continue;
      const cells = line.split('|').filter(c => c.trim() !== '');
      const tag = !result.includes('<tbody>') ? 'th' : 'td';
      if (tag === 'th') result.push('<thead>');
      result.push('<tr>' + cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('') + '</tr>');
      if (tag === 'th') { result.push('</thead><tbody>'); }
    } else {
      if (inTable) { result.push('</tbody></table>'); inTable = false; }
      // List items
      if (line.trim().startsWith('- ')) {
        result.push('<li>' + line.trim().slice(2) + '</li>');
      } else if (line.trim() === '') {
        result.push('<br>');
      } else {
        result.push('<p>' + line + '</p>');
      }
    }
  }
  if (inTable) result.push('</tbody></table>');

  return result.join('');
}

export function renderChatbot(container) {
  container.innerHTML = `
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
  `;

  const messages = document.getElementById('chat-messages');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');

  function addMessage(content, isUser) {
    const div = document.createElement('div');
    div.className = `chat-msg ${isUser ? 'chat-user' : 'chat-bot'}`;
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    if (isUser) {
      bubble.textContent = content;
    } else {
      bubble.innerHTML = miniMarkdown(content);
    }
    div.appendChild(bubble);
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value.trim();
    if (!val) return;

    addMessage(val, true);
    input.value = '';

    // Small delay for feel
    setTimeout(() => {
      const response = processQuery(val);
      addMessage(response, false);
    }, 150);
  });

  input.focus();

  requestAnimationFrame(() => {
    document.getElementById('chatbot-page')?.classList.replace('page-enter', 'page-active');
  });
}
