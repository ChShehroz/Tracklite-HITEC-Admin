// data.ts

export const columns = [
  { name: "Item ID", uid: "id", sortable: true },
  { name: "Name", uid: "name" },
  { name: "Location", uid: "location", sortable: true },
  { name: "Status", uid: "status", sortable: true },
  { name: "Type", uid: "reportType", sortable: true },
  { name: "Date Report", uid: "reportDate", sortable: true },
  { name: "Action", uid: "actions" },
];

export const statusOptions = [
  { name: "Found", uid: "Found" },
  { name: "Lost", uid: "Lost" },
];
