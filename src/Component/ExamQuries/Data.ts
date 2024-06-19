// data.ts

export const columns = [
  { name: "Query ID", uid: "id", sortable: true },
  { name: "Name", uid: "name" },
  { name: "Roll No", uid: "rollNo", sortable: true },
  { name: "Course Code", uid: "course", sortable: true },
  { name: "Status", uid: "status", sortable: true },
  { name: "Type", uid: "type", sortable: true },
  { name: "Submission Date", uid: "submissionDate", sortable: true },
  { name: "Last Update", uid: "lastUpdate" },
  { name: "Action", uid: "actions" },
];

export const statusOptions = [
  { name: "Working", uid: "Working" },
  { name: "Approved", uid: "Approved" },
  { name: "Rejected", uid: "Rejected" },
  { name: "Pending", uid: "Pending" },
];
