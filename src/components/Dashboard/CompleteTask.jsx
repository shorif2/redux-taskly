import { RiCheckboxFill } from "react-icons/ri";

const CompleteTask = () => {
  const important = "";
  return (
    <div className="d-flex justify-content-between align-items-center border-top py-2 px-3">
      <div className="d-flex justify-content-between align-items-center gap-2 ">
        <RiCheckboxFill size={22} color="green" />
        <h6 className="mb-0 fw-normal">Buy groceries</h6>
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

export default CompleteTask;
