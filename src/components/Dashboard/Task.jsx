import { RiCheckboxBlankLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
const Task = ({ task }) => {
  const { title, important } = task || {};
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-3 px-3">
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
