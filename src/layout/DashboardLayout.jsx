import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardNav from "../components/DashboardNav";
import TaskModal from "../components/Dashboard/TaskModal";

import { useSelector } from "react-redux";

const DashboardLayout = () => {
  const { isModalShow, isSidebarShow, manageTask } = useSelector(
    (state) => state.filter
  );

  return (
    <div className="vh-100 d-flex flex-column">
      <DashboardNav />
      <div className="w-100  d-flex gap-4 flex-grow-1 px-5">
        {!isSidebarShow && <Sidebar />}
        <div className="flex-grow-1 ">
          <Outlet />
        </div>
        {isModalShow && <TaskModal task={manageTask} />}
      </div>
    </div>
  );
};

export default DashboardLayout;
