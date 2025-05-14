import { IoAlertCircleOutline } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";
import { AiOutlinePlus, AiOutlineContacts } from "react-icons/ai";
import { CiCalendar, CiStar, CiPaperplane } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { FaRegCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className=" sidebar  p-4 ">
      {/* profile */}
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="rounded-circle">
          <img
            src="/admin.jpg"
            width={118}
            height={118}
            alt="admin"
            className="rounded-circle"
          />
        </div>
        <p className="py-1">Hey,Admin</p>
      </div>
      {/* menu container */}
      <div className="bg-white d-flex flex-column    py-4">
        <div className="d-flex align-items-center px-3 gap-3 py-2 menuHover">
          <GoChecklist size={24} />
          <h6>All Tasks</h6>
        </div>
        <div className="d-flex align-items-center px-3 gap-3 py-2 menuHover">
          <CiCalendar size={24} />
          <h6>Today</h6>
        </div>
        <div className="d-flex align-items-center px-3 gap-3 py-2 menuHover">
          <CiStar size={26} />
          <h6>Important</h6>
        </div>
        <div className="d-flex  align-items-center px-3 gap-3 py-2 menuHover">
          <CiPaperplane size={24} />
          <h6>Planned</h6>
        </div>
        <div className="d-flex  align-items-center px-3 gap-3 py-2 menuHover">
          <AiOutlineContacts size={24} />
          <h6>Assigned to me</h6>
        </div>
      </div>
      {/* Add list container */}
      <div className="bg-white my-2   py-3 ">
        <div className="menuHover d-flex gap-4 w-100 px-4 py-2">
          <AiOutlinePlus size={24} />
          <h6>Add list</h6>
        </div>
      </div>
      {/* Status container */}
      <div className="bg-white   py-4">
        <div className="d-flex justify-content-between border-bottom w-100 mb-3 pb-3">
          <div className="px-4">
            <h6>Today Tasks</h6>
            <p>11</p>
          </div>
          <div className="px-4">
            <IoAlertCircleOutline size={20} />
          </div>
        </div>
        {/* circle */}
        <div>
          <div className="w-100 d-flex justify-content-center align-items-center">
            <FaRegCircle size={100} style={{ strokeWidth: 30 }} />
          </div>
          <div className="d-flex align-items-center gap-2 pt-2">
            <p>
              <GoDotFill color="green" /> Pending
            </p>
            <GoDotFill /> <p>Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
