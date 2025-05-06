import { TiArrowSortedDown } from "react-icons/ti";
import { BsRepeat } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiCalendar, CiStar } from "react-icons/ci";
import { RiCheckboxBlankLine, RiCheckboxFill } from "react-icons/ri";
import { GoStar, GoStarFill } from "react-icons/go";

const Today = () => {
  return (
    <div>
      <div className="d-flex justify-content-start align-items-center gap-1 border-bottom  border-success-subtle">
        <p className="mb-0">To Do</p>
        <TiArrowSortedDown size={16} />
      </div>
      {/* task container */}
      <div className="addTask p-3 d-flex flex-column">
        <div className="flex-grow-1">
          <p>Add A Task</p>
        </div>
        {/* task input */}
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center gap-4">
            <IoMdNotificationsOutline size={20} />
            <BsRepeat size={20} />
            <CiCalendar size={20} />
          </div>
          <div>
            <button className="btn btn-sm bg-success text-white fw-medium">
              ADD TASK
            </button>
          </div>
        </div>
        {/* tasks */}
      </div>
      {/* single task */}
      <div className="d-flex justify-content-between align-items-center border-bottom py-3 px-3">
        <div className="d-flex justify-content-between align-items-center gap-2 ">
          <RiCheckboxBlankLine size={22} />
          <h6 className="mb-0 fw-normal">Buy groceries</h6>
        </div>
        <div>
          <CiStar size={22} />
        </div>
      </div>
      {/* single task */}
      <div className="d-flex justify-content-between align-items-center border-bottom py-3 px-3">
        <div className="d-flex justify-content-between align-items-center gap-2 ">
          <RiCheckboxBlankLine size={22} />
          <h6 className="mb-0 fw-normal">Buy groceries</h6>
        </div>
        <div>
          <CiStar size={24} />
        </div>
      </div>
      {/* single task */}
      <div className="d-flex justify-content-between align-items-center border-bottom py-3 px-3">
        <div className="d-flex justify-content-between align-items-center gap-2 ">
          <RiCheckboxBlankLine size={22} />
          <h6 className="mb-0 fw-normal">Buy groceries</h6>
        </div>
        <div>
          <CiStar size={24} />
        </div>
      </div>

      {/* complete container <RiCheckboxFill />*/}
      <div className="pt-4">
        <h6 className="pb-2">Completed</h6>
        {/* single completed */}
        <div className="d-flex justify-content-between align-items-center border-top py-2 px-3">
          <div className="d-flex justify-content-between align-items-center gap-2 ">
            <RiCheckboxFill size={22} color="green" />
            <h6 className="mb-0 fw-normal">Buy groceries</h6>
          </div>
          <div>
            <GoStar size={22} />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center border-top py-2 px-3">
          <div className="d-flex justify-content-between align-items-center gap-2 ">
            <RiCheckboxFill size={22} color="green" />
            <h6 className="mb-0 fw-normal">Buy groceries</h6>
          </div>
          <div>
            <GoStar size={22} />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center border-top py-2 px-3">
          <div className="d-flex justify-content-between align-items-center gap-2 ">
            <RiCheckboxFill size={22} color="green" />
            <h6 className="mb-0 fw-normal">Buy groceries</h6>
          </div>
          <div>
            <GoStarFill size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
