import { RiCheckboxBlankLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/features/filterSlice";

const Task = ({ task }) => {
  const { title, important } = task || {};
  const dispatch = useDispatch();
  const handleTaskClick = (task) => {
    dispatch(showModal({ status: true, task }));
  };
  return (
    <div
      onClick={() => handleTaskClick(task)}
      className="d-flex justify-content-between align-items-center border-bottom py-3 px-3"
    >
      <div className="d-flex justify-content-between align-items-center gap-2 ">
        <RiCheckboxBlankLine size={22} />
        <h6 className="mb-0 fw-normal">{title}</h6>
      </div>
      <div>
        <i
          className={`bi  ${important ? "bi-star-fill" : "bi-star"}`}
          style={{ fontSize: "20px" }}
        ></i>
      </div>
    </div>
  );
};

export default Task;
