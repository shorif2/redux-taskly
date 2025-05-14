import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardNav from "../components/DashboardNav";
import TaskModal from "../components/Dashboard/TaskModal";
import { useState } from "react";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  const { isModalShow, isSidebarShow } = useSelector((state) => state.filter);
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="vh-100 d-flex flex-column">
      <DashboardNav />
      <div className="w-100  d-flex gap-5 flex-grow-1 px-5">
        {!isSidebarShow && <Sidebar />}
        <div className="flex-grow-1 ">
          <Outlet />
        </div>
        {!isModalShow && <TaskModal />}
      </div>
    </div>
  );
};

export default DashboardLayout;
