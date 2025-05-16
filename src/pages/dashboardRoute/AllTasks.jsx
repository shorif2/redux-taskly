import { BsRepeat } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiCalendar, CiStar } from "react-icons/ci";
import { RiCheckboxFill } from "react-icons/ri";
import { GoStar, GoStarFill } from "react-icons/go";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "../../components/Dashboard/Task";
import { addTask } from "../../redux/features/tasksSlice";
import CompleteTask from "../../components/Dashboard/CompleteTask";

const AllTasks = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");
  const handleForSubmit = (e) => {
    e.preventDefault();

    const tasks1 = {
      id: 3,
      title: taskText,
      status: "complete",
      important: false,
    };
    dispatch(addTask(tasks1));
    setTaskText("");
  };
  return (
    <div>
      {/* <div className="d-flex justify-content-start align-items-center gap-1 border-bottom  border-success-subtle ">
        <p className="mb-0 mt-0 ">To Do</p>
        <TiArrowSortedDown size={16} />
      </div> */}
      {/* task container */}
      <form
        onSubmit={handleForSubmit}
        className="addTask px-3 p-3 d-flex flex-column"
      >
        <div className="flex-grow-1">
          <textarea
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className="border-0 bg-transparent  w-100 focus-ring-light text-secondary custom-textarea"
            placeholder="Add a task..."
          />
        </div>
        {/* task input */}
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center gap-4">
            <IoMdNotificationsOutline size={20} />
            <BsRepeat size={20} />
            <CiCalendar size={20} fill="black" />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-sm bg-success text-white fw-medium"
            >
              ADD TASK
            </button>
          </div>
        </div>
        {/* tasks */}
      </form>
      {/* single task */}
      {tasks?.map((task) => (
        <Task key={task.id} task={task} />
      ))}

      {/* complete container <RiCheckboxFill />*/}
      <div className="pt-4">
        <h6 className="pb-2">Completed</h6>
        {/* single completed */}
        <CompleteTask />
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

export default AllTasks;
