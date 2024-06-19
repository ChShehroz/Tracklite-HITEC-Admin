import { useEffect, useState } from "react";
import DegreeClearanceTable from "../../Component/DegreeApplicationForm/DegreeClearanceTable";
import NavBar from "../../Component/Nav";
import SideBar from "../../Component/SideBar/SideBar";

const DegreeClearance = () => {
  useEffect(() => {
    document.title = "Degree-Clearance";
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex">
        <div className={`${isSidebarOpen ? "w-[130px] " : "w-[274px]"}`}>
          <SideBar isOpen={isSidebarOpen} />
        </div>
        <div className={`${isSidebarOpen ? "w-[90%]" : "w-[75%]"}`}>
          <NavBar handleSidebarToggle={handleSidebarToggle} />
          <DegreeClearanceTable />
        </div>
      </div>
    </>
  );
};

export default DegreeClearance;
