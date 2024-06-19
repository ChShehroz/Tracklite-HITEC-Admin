import { useEffect, useState } from "react";
import ExamTable from "../../Component/ExamQuries/ExamTable";
import SideBar from "../../Component/SideBar/SideBar";
import NavBar from "../../Component/Nav";

const LostFoundReport = () => {
  useEffect(() => {
    document.title = "Lost-Found";
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
          <ExamTable />
        </div>
      </div>
    </>
  );
};

export default LostFoundReport;
