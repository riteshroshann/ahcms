import fs from 'fs';

const tables = [
  {
    id: "STUDENT", title: "STUDENT", x: 40, y: 40,
    rows: [
      { text: "PK  student_id" },
      { text: "UK  roll_no" },
      { text: "name" },
      { text: "UK  email" },
      { text: "password_hash" },
      { text: "gender" },
      { text: "adm_year" },
      { text: "pass_year" },
      { text: "course" },
      { text: "address" },
      { text: "hostel" },
      { text: "year" },
      { text: "created_at" }
    ]
  },
  {
    id: "ROOM", title: "ROOM", x: 280, y: 40,
    rows: [
      { text: "PK  room_id" },
      { text: "hostel" },
      { text: "floor" },
      { text: "type" },
      { text: "capacity" },
      { text: "current_occupancy" }
    ]
  },
  {
    id: "ALLOCATION", title: "ALLOCATION", x: 520, y: 40,
    rows: [
      { text: "PK  allocation_id" },
      { text: "FK  student_id" },
      { text: "FK  room_id" },
      { text: "from_date" },
      { text: "to_date" },
      { text: "status" }
    ]
  },
  {
    id: "BOOKING_REQ", title: "ROOM_BOOKING_REQUEST", x: 760, y: 40,
    rows: [
      { text: "PK  request_id" },
      { text: "FK  student_id" },
      { text: "FK  room_id" },
      { text: "preferences" },
      { text: "status" },
      { text: "admin_note" },
      { text: "created_at" },
      { text: "updated_at" }
    ]
  },
  {
    id: "COMPLAINT", title: "COMPLAINT", x: 40, y: 440,
    rows: [
      { text: "PK  complaint_id" },
      { text: "FK  student_id" },
      { text: "FK  room_id (Optional)" },
      { text: "category" },
      { text: "description" },
      { text: "photo_base64" },
      { text: "date" },
      { text: "status" },
      { text: "admin_note" },
      { text: "resolved_date" },
      { text: "updated_at" }
    ]
  },
  {
    id: "CHANGE_REQ", title: "ROOM_CHANGE_REQUEST", x: 280, y: 440,
    rows: [
      { text: "PK  change_id" },
      { text: "FK  student_id" },
      { text: "FK  from_room_id" },
      { text: "FK  to_room_id" },
      { text: "reason" },
      { text: "status" },
      { text: "admin_note" },
      { text: "created_at" },
      { text: "updated_at" }
    ]
  },
  {
    id: "WARDEN", title: "WARDEN", x: 520, y: 440,
    rows: [
      { text: "PK  warden_id" },
      { text: "name" },
      { text: "role" },
      { text: "phone" },
      { text: "email" },
      { text: "hostel" },
      { text: "shift" },
      { text: "on_duty" }
    ]
  },
  {
    id: "ADMIN", title: "ADMIN", x: 760, y: 440,
    rows: [
      { text: "PK  admin_id" },
      { text: "name" },
      { text: "UK  email" },
      { text: "password_hash" },
      { text: "created_at" }
    ]
  },
  {
    id: "FORUM_POST", title: "FORUM_POST", x: 40, y: 800,
    rows: [
      { text: "PK  post_id" },
      { text: "title" },
      { text: "content" },
      { text: "avatar_name" },
      { text: "avatar_icon" },
      { text: "upvotes" },
      { text: "downvotes" },
      { text: "created_at" }
    ]
  },
  {
    id: "FORUM_REPLY", title: "FORUM_REPLY", x: 280, y: 800,
    rows: [
      { text: "PK  reply_id" },
      { text: "FK  post_id" },
      { text: "content" },
      { text: "avatar_name" },
      { text: "avatar_icon" },
      { text: "upvotes" },
      { text: "downvotes" },
      { text: "created_at" }
    ]
  },
  {
    id: "RESOURCE", title: "RESOURCE", x: 520, y: 800,
    rows: [
      { text: "PK  resource_id" },
      { text: "category" },
      { text: "name" },
      { text: "phone" },
      { text: "email" },
      { text: "notes" },
      { text: "created_at" }
    ]
  }
];

const edges = [
  { id: "e1", source: "STUDENT", target: "ALLOCATION", label: "has" },
  { id: "e2", source: "ROOM", target: "ALLOCATION", label: "contains" },
  { id: "e3", source: "STUDENT", target: "BOOKING_REQ", label: "makes" },
  { id: "e4", source: "ROOM", target: "BOOKING_REQ", label: "" },
  { id: "e5", source: "STUDENT", target: "COMPLAINT", label: "files" },
  { id: "e6", source: "ROOM", target: "COMPLAINT", label: "" },
  { id: "e7", source: "STUDENT", target: "CHANGE_REQ", label: "requests" },
  { id: "e8", source: "ROOM", target: "CHANGE_REQ", label: "from" },
  { id: "e9", source: "FORUM_POST", target: "FORUM_REPLY", label: "has replies" }
];

let xml = [];
xml.push('<?xml version="1.0" encoding="UTF-8"?>');
xml.push('<mxfile host="app.diagrams.net" modified="2024-01-01T00:00:00.000Z" agent="Mozilla/5.0" type="device">');
xml.push('  <diagram id="ahcms_er_diagram" name="AHCMS Schema">');
xml.push('    <mxGraphModel dx="1400" dy="800" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1100" pageHeight="1100" math="0" shadow="0">');
xml.push('      <root>');
xml.push('        <mxCell id="0" />');
xml.push('        <mxCell id="1" parent="0" />');

// Legend
xml.push('        <mxCell id="legend" value="PK - PRIMARY KEY&#10;FK - FOREIGN KEY&#10;UK - UNIQUE KEY" style="shape=note;whiteSpace=wrap;html=1;backgroundOutline=1;darkOpacity=0.05;fillColor=#ffe6cc;strokeColor=#d79b00;fontColor=#000000;align=left;spacingLeft=10;" vertex="1" parent="1">');
xml.push('          <mxGeometry x="800" y="40" width="180" height="80" as="geometry" />');
xml.push('        </mxCell>');

for (let t of tables) {
  const height = 26 + (t.rows.length * 26);
  xml.push('        <!-- Table ' + t.title + ' -->');
  xml.push('        <mxCell id="' + t.id + '" value="' + t.title + '" style="swimlane;fontStyle=1;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=#ffe6cc;strokeColor=#d79b00;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=0;marginBottom=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">');
  xml.push('          <mxGeometry x="' + t.x + '" y="' + t.y + '" width="200" height="' + height + '" as="geometry" />');
  xml.push('        </mxCell>');
  
  t.rows.forEach((row, idx) => {
    const boldTxt = row.text; // XML strict safe
    const yOffset = 26 + (idx * 26);
    xml.push('        <mxCell id="' + t.id + '-r' + idx + '" value="' + boldTxt + '" style="text;strokeColor=#e0e0e0;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;whiteSpace=wrap;html=1;" vertex="1" parent="' + t.id + '">');
    xml.push('          <mxGeometry y="' + yOffset + '" width="200" height="26" as="geometry" />');
    xml.push('        </mxCell>');
  });
}

for (let e of edges) {
  xml.push('        <mxCell id="' + e.id + '" value="' + e.label + '" style="edgeStyle=orthogonalEdgeStyle;rounded=1;orthogonalLoop=1;jettySize=auto;html=1;strokeColor=#d79b00;endArrow=ERmany;startArrow=ERone;endFill=0;startFill=0;" edge="1" parent="1" source="' + e.source + '" target="' + e.target + '">');
  xml.push('          <mxGeometry relative="1" as="geometry" />');
  xml.push('        </mxCell>');
}

xml.push('      </root>');
xml.push('    </mxGraphModel>');
xml.push('  </diagram>');
xml.push('</mxfile>');

fs.writeFileSync('C:\\\\Users\\\\rites\\\\Downloads\\\\database_diagram_fixed.drawio', xml.join('\n'));
console.log('Finished writing XML to Downloads folder.');
