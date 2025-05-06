import { RiSearchLine } from "react-icons/ri";
import { BsGrid } from "react-icons/bs";
import { RiMoonClearLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
const DashboardNav = () => {
  return (
    <div className="w-100 d-flex justify-content-between align-items-center py-3 px-5">
      <div className="d-flex justify-content-between align-items-center gap-3">
        <IoMdMenu size={24} />
        <h5 className="fs-4">
          # <Link to="/">Taskly</Link>
        </h5>
      </div>

      <div className="d-flex justify-content-between align-items-center gap-4">
        <RiSearchLine size={24} />
        <BsGrid size={24} />
        <RiMoonClearLine size={24} />
      </div>
    </div>
  );
};

export default DashboardNav;
