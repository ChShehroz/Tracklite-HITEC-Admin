import React, { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Textarea,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { DeleteIcon } from "../../assets/Icon/DeleteIcon";
import { EyeIcon } from "../../assets/Icon/EyeIcon";
import { EditIcon } from "../../assets/Icon/EditIcon";
import { columns, statusOptions } from "./Data";

const statusColorMap: Record<string, ChipProps["color"]> = {
  Working: "primary",
  Approved: "success",
  Pending: "warning",
  Rejected: "danger",
};

const INITIAL_VISIBLE_COLUMNS = [
  "id",
  "rollNo",
  "status",
  "applicationDate",
  "actions",
];

type User = {
  id: string;
  name: string;
  father: string;
  rollNo: string;
  email: string;
  reason: string;
  semester: string;
  status: string;
  applicationDate: string;
  lastUpdate: string;
  address: string;
  _id: string;
};

export default function App() {
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = useState<Selection>(new Set([]));
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editStatus, setEditStatus] = useState<string>("");
  const [editComment, setEditComment] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage or cookies
        const response = await axios.get(
          "http://localhost:5000/api/v1/degree",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in headers
            },
          }
        );
        console.log("API Response:", response.data);
        const fetchedUsers = response.data.data.map((user: any) => ({
          _id: user._id,
          id: user.applicationId,
          name: user.studentName,
          father: user.fatherName,
          rollNo: user.rollNo,
          reason: user.reasonForLeaving,
          email: user.email,
          semester: user.semester,
          address: user.postalAddress,
          status: user.status,
          applicationDate: new Date(user.submissionDate).toLocaleDateString(),
          lastUpdate: new Date(user.lastModifiedDate).toLocaleDateString(),
        }));
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId: string) => {
    try {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage or cookies
      await axios.delete(`http://localhost:5000/api/v1/degree/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      });
      setUsers(users.filter((user) => user._id !== userId));
      alert("User deleted successfully.");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setEditStatus(user.status);
    setEditComment("");
    setIsEditModalOpen(true);
  };

  const handleUpdate = async () => {
    if (selectedUser) {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage or cookies
        await axios.put(
          `http://localhost:5000/api/v1/degree/${selectedUser._id}`,
          {
            status: editStatus,
            comment: editComment,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in headers
            },
          }
        );
        setUsers(
          users.map((user) =>
            user._id === selectedUser._id
              ? { ...user, status: editStatus }
              : user
          )
        );
        setIsEditModalOpen(false);
        alert("User updated successfully.");
      } catch (error) {
        console.error("Error updating user:", error);
        alert("Failed to update user.");
      }
    }
  };

  const handleViewDetails = (user: User) => {
    setSelectedUser(user);
    setIsViewModalOpen(true);
  };

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    const activeStatusFilter = Array.from(statusFilter);

    if (activeStatusFilter.length > 0) {
      filteredUsers = filteredUsers.filter((user) =>
        activeStatusFilter.includes(user.status)
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as string | number;
      const second = b[sortDescriptor.column as keyof User] as string | number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback(
    (user: User, columnKey: React.Key) => {
      const cellValue = user[columnKey as keyof User];

      switch (columnKey) {
        case "name":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
              <p className="text-bold text-tiny capitalize text-default-400">
                {user.email}
              </p>
            </div>
          );
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[user.status]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <span
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                  onClick={() => handleViewDetails(user)}
                >
                  <EyeIcon />
                </span>
              </Tooltip>
              <Tooltip content="Update">
                <span
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                  onClick={() => handleEdit(user)}
                >
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span
                  className="text-lg text-danger cursor-pointer active:opacity-50"
                  onClick={() => handleDelete(user._id)}
                >
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [handleDelete, handleEdit, handleViewDetails]
  );

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<FontAwesomeIcon icon={faSearch} />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="text-small"
                    />
                  }
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={(keys) => {
                  setStatusFilter(
                    new Set(Array.from(keys).map((key) => key.toString()))
                  );
                }}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {status.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="text-small"
                    />
                  }
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={(keys) => {
                  setVisibleColumns(
                    new Set(Array.from(keys).map((key) => key.toString()))
                  );
                }}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {column.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {users.length} users
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    users.length,
    hasSearchFilter,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <div className="p-8 min-h-screen" style={{ backgroundColor: "#fffcf1" }}>
      <h1 className="text-4xl font-bold mb-10 text-center text-slate-800">
        Degree Clearance Applications
      </h1>
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <Table
          aria-label="Example table with custom cells, pagination and sorting"
          isHeaderSticky
          bottomContent={bottomContent}
          bottomContentPlacement="outside"
          classNames={{
            wrapper: "max-h-[382px]",
          }}
          selectedKeys={selectedKeys}
          selectionMode="multiple"
          sortDescriptor={sortDescriptor}
          topContent={topContent}
          topContentPlacement="outside"
          onSelectionChange={setSelectedKeys}
          onSortChange={setSortDescriptor}
        >
          <TableHeader columns={headerColumns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
                allowsSorting={column.sortable}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody emptyContent={"No users found"} items={sortedItems}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* View Details Modal */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        size="5xl"
        backdrop="blur"
      >
        <ModalContent>
          <ModalHeader>
            <span className="text-xl font-semibold mb-3">
              Application Details
            </span>
          </ModalHeader>
          <ModalBody className="flex flex-col gap-6">
            {selectedUser && (
              <>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between gap-14">
                    <p className="text-sm">
                      <strong>Student Name:</strong> {selectedUser.name}
                    </p>
                    <p className="text-sm">
                      <strong>Father Name:</strong> {selectedUser.father}
                    </p>
                    <p className="text-sm">
                      <strong>Roll No:</strong> {selectedUser.rollNo}
                    </p>
                    <p className="text-sm">
                      <strong>Email:</strong> {selectedUser.email}
                    </p>
                  </div>
                  <div className="flex justify-between gap-14">
                    <p className="text-sm">
                      <strong>Semester:</strong> {selectedUser.semester}
                    </p>
                    <p className="text-sm">
                      <strong>Status:</strong> {selectedUser.status}
                    </p>
                    <p className="text-sm">
                      <strong>Reason for leaving:</strong> {selectedUser.reason}
                    </p>
                    <p className="text-sm">
                      <strong>Application Date:</strong>{" "}
                      {selectedUser.applicationDate}
                    </p>
                  </div>
                  <div className="flex justify-start gap-14">
                    <p className="text-sm">
                      <strong>Last Update:</strong> {selectedUser.lastUpdate}
                    </p>
                    <p className="text-sm">
                      <strong>Address:</strong> {selectedUser.address}
                    </p>
                  </div>
                </div>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              radius="full"
              variant="flat"
              color="danger"
              onClick={() => setIsViewModalOpen(false)}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        size="lg"
        backdrop="blur"
      >
        <ModalContent>
          <ModalHeader>
            <span className="text-xl font-semibold mb-3">Update Status</span>
          </ModalHeader>
          <ModalBody className="flex flex-col gap-6">
            {selectedUser && (
              <>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between gap-14">
                    <p className="text-sm">
                      <strong>Status:</strong>{" "}
                      <Dropdown>
                        <DropdownTrigger>
                          <Button>{editStatus}</Button>
                        </DropdownTrigger>
                        <DropdownMenu
                          aria-label="Status"
                          onSelectionChange={(keys) => {
                            setEditStatus(Array.from(keys).join(""));
                          }}
                          selectedKeys={new Set([editStatus])}
                          selectionMode="single"
                        >
                          {statusOptions.map((status) => (
                            <DropdownItem
                              key={status.uid}
                              className="capitalize"
                            >
                              {status.name}
                            </DropdownItem>
                          ))}
                        </DropdownMenu>
                      </Dropdown>
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Textarea
                      value={editComment}
                      onChange={(e) => setEditComment(e.target.value)}
                      placeholder="Add a comment"
                    />
                  </div>
                </div>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              radius="full"
              variant="flat"
              color="danger"
              onClick={() => setIsEditModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              radius="full"
              variant="flat"
              color="success"
              onClick={handleUpdate}
            >
              Save Changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
