import { useEffect, useState } from "react";
import SideBar from "../../Component/SideBar/SideBar";
import NavBar from "../../Component/Nav";
import ComplaintTable from "../../Component/ComplaintForm/ComplaintTable";

const Complaint = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    document.title = "Complaints";
  });

  return (
    <>
      <div className="flex">
        <div className={`${isSidebarOpen ? "w-[130px] " : "w-[274px]"}`}>
          <SideBar isOpen={isSidebarOpen} />
        </div>
        <div className={`${isSidebarOpen ? "w-[90%]" : "w-[75%]"}`}>
          <NavBar handleSidebarToggle={handleSidebarToggle} />
          <ComplaintTable />
        </div>
      </div>
    </>
  );
};

export default Complaint;
