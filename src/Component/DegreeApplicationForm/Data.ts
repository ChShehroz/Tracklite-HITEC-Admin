// data.ts

export const columns = [
  { name: "Application ID", uid: "id", sortable: true },
  { name: "Name", uid: "name", sortable: true },
  { name: "Roll No", uid: "rollNo", sortable: true },
  { name: "Status", uid: "status", sortable: true },
  { name: "Application Date", uid: "applicationDate", sortable: true },
  { name: "Last Update", uid: "lastUpdate", sortable: true },
  { name: "Action", uid: "actions" },
];

export const statusOptions = [
  { name: "Working", uid: "Working" },
  { name: "Approved", uid: "Approved" },
  { name: "Rejected", uid: "Rejected" },
  { name: "Pending", uid: "Pending" },
];
