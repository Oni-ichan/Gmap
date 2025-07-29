const manholes = [
  // 🟢 300m exact — 3 manholes
  { id: "MH-001", lat: 28.5634, lng: 77.1572, level: 45, near: "Outer Ring Service Lane" },
  { id: "MH-002", lat: 28.5586, lng: 77.1629, level: 55, near: "Shankar Road Edge" },
  { id: "MH-003", lat: 28.5590, lng: 77.1571, level: 35, near: "Vasant Marg Edge" },

  // 🟡 400–600m — 5 manholes
  { id: "MH-004", lat: 28.5649, lng: 77.1622, level: 60, near: "Palam Marg Inner Lane" },
  { id: "MH-005", lat: 28.5661, lng: 77.1574, level: 50, near: "Shankar Vihar Road" },
  { id: "MH-006", lat: 28.5569, lng: 77.1641, level: 20, near: "Service Road Corner" },
  { id: "MH-007", lat: 28.5567, lng: 77.1555, level: 65, near: "Vasant Vihar Block Road" },
  { id: "MH-008", lat: 28.5636, lng: 77.1553, level: 40, near: "Edge Road" },

  // 🟠 601–700m — 6 manholes
  { id: "MH-009", lat: 28.5679, lng: 77.1576, level: 15, near: "Outer Ring Frontage" },
  { id: "MH-010", lat: 28.5683, lng: 77.1623, level: 95, near: "Palam Marg North" },
  { id: "MH-011", lat: 28.5529, lng: 77.1579, level: 70, near: "Shankar Vihar Lane" },
  { id: "MH-012", lat: 28.5548, lng: 77.1531, level: 85, near: "Side Lane" },
  { id: "MH-013", lat: 28.5575, lng: 77.1672, level: 10, near: "Opposite Ring Road" },
  { id: "MH-014", lat: 28.5663, lng: 77.1660, level: 90, near: "Vasant Enclave Road" },

  // 🔴 701–900m — 6 manholes
  { id: "MH-015", lat: 28.5707, lng: 77.1674, level: 35, near: "Outer Ring Service Lane" },
  { id: "MH-016", lat: 28.5701, lng: 77.1525, level: 60, near: "Palam Marg Turn" },
  { id: "MH-017", lat: 28.5511, lng: 77.1669, level: 45, near: "Shankar Area" },
  { id: "MH-018", lat: 28.5528, lng: 77.1538, level: 75, near: "Rear Road" },
  { id: "MH-019", lat: 28.5533, lng: 77.1606, level: 80, near: "Shankar Vihar Corner" },
  { id: "MH-020", lat: 28.5685, lng: 77.1681, level: 20, near: "Outer Loop Road" }
];







const pipeSegments = [];

for (let i = 0; i < manholes.length - 1; i++) {
  pipeSegments.push({
    from: manholes[i].id,
    to: manholes[i + 1].id,
    flow: "Normal",
    status: "Clear"
  });
}

const cleaningVehicles = [
  { id: "CV-1", lat: 28.5610, lng: 77.1600, status: "Idle" },
  { id: "CV-2", lat: 28.5610, lng: 77.1600, status: "Idle" },
  { id: "CV-3", lat: 28.5610, lng: 77.1600, status: "Idle" },
  { id: "CV-4", lat: 28.5610, lng: 77.1600, status: "Idle" },
  { id: "CV-5", lat: 28.5610, lng: 77.1600, status: "Idle" }
];

const cleaningHub = { lat: 28.5610, lng: 77.1600 };
