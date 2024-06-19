// data.ts

export const columns = [
  { name: "Complaint ID", uid: "complaintId", sortable: true },
  { name: "Name", uid: "name", sortable: true },
  { name: "Status", uid: "status", sortable: true },
  { name: "Complaint Date", uid: "complaintDate", sortable: true },
  { name: "Last Update", uid: "lastUpdate", sortable: true },
  { name: "Action", uid: "actions" },
];

export const statusOptions = [
  { name: "Working", uid: "Working" },
  { name: "Approved", uid: "Approved" },
  { name: "Rejected", uid: "Rejected" },
  { name: "Pending", uid: "Pending" },
];
