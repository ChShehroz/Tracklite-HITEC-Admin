import { useEffect, useState } from "react";
import NavBar from "../../Component/Nav";
import SideBar from "../../Component/SideBar/SideBar";
import Dashboard from "../../Component/Dashboard";

const Home = () => {
  useEffect(() => {
    document.title = "TrackLite HITEC | Home";
  });

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
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default Home;
