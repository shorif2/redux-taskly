import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardNav from "../components/DashboardNav";
import TaskModal from "../components/Dashboard/TaskModal";

const DashboardLayout = () => {
  return (
    <div className="vh-100 d-flex flex-column">
      <DashboardNav />
      <div className="w-100  d-flex gap-5 flex-grow-1">
        <Sidebar />
        <div className="flex-grow-1">
          <Outlet />
        </div>
        <TaskModal />
      </div>
    </div>
  );
};

export default DashboardLayout;
