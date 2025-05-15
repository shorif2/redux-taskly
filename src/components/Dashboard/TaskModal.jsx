import { CiStar } from "react-icons/ci";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BsRepeat } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/features/filterSlice";
import { removeTask } from "../../redux/features/tasksSlice";
const TaskModal = ({ task }) => {
  const { title, id } = task || {};
  const dispatch = useDispatch();

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
    dispatch(closeModal());
  };
  return (
    <div className="bg-sucess taskModal py-4 d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center border-bottom py-3  mx-4">
        <div className="d-flex justify-content-between align-items-center gap-2 px-2">
          <RiCheckboxBlankLine size={22} />

          <h6 className="mb-0 fw-normal">{title}</h6>
        </div>
        <div>
          <CiStar size={24} />
        </div>
      </div>
      {/* step */}
      <div className="flex-grow-1 px-4">
        <div className=" border-bottom py-2 ">
          <div className="d-flex  align-items-center gap-3 ">
            <AiOutlinePlus size={24} />
            <h6 className="mb-0 fw-normal">Add Step</h6>
          </div>
        </div>
        <div className=" border-bottom py-2 ">
          <div className="d-flex  align-items-center gap-3 ">
            <IoMdNotificationsOutline size={20} />
            <h6 className="mb-0 fw-normal">Set Reminder</h6>
          </div>
        </div>
        <div className=" border-bottom py-2 ">
          <div className="d-flex  align-items-center gap-3 ">
            <CiCalendar size={20} />
            <h6 className="mb-0 fw-normal">Add Due Date</h6>
          </div>
          {/* <div className="p-4">
            <Calendar className="" />
          </div> */}
        </div>
        <div className=" border-bottom py-2 ">
          <div className="d-flex  align-items-center gap-3 ">
            <BsRepeat size={18} />
            <h6 className="mb-0 fw-normal">Repeat</h6>
          </div>
        </div>
        <p className="py-2 px-4">Add Notes</p>
      </div>
      {/* modal footer */}
      <div className="d-flex justify-content-between align-items-center border-top px-4 pt-2 ">
        <i
          onClick={() => dispatch(closeModal())}
          className="bi bi-x fs-3 menuHover"
        ></i>
        <p>Created Today</p>
        {/* <RiDeleteBin6Line size={20} /> */}
        <i
          onClick={() => handleRemoveTask(id)}
          className="bi bi-trash3 fs-5 menuHover"
        ></i>
      </div>
    </div>
  );
};

export default TaskModal;
