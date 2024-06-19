import { useEffect, useState } from "react";
import SideBar from "../../Component/SideBar/SideBar";
import NavBar from "../../Component/Nav";
import LostFoundTable from "../../Component/LostFoundForm/LostFoundTable";

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
          <LostFoundTable />
        </div>
      </div>
    </>
  );
};

export default LostFoundReport;
