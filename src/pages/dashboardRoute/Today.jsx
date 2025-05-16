import { TiArrowSortedDown } from "react-icons/ti";
import { BsRepeat } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiCalendar, CiStar } from "react-icons/ci";
import { RiCheckboxBlankLine, RiCheckboxFill } from "react-icons/ri";
import { GoStar, GoStarFill } from "react-icons/go";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "../../components/Dashboard/Task";
import { addTask } from "../../redux/features/tasksSlice";
import CompleteTask from "../../components/Dashboard/CompleteTask";

const Today = () => {
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
      {/* complete container <RiCheckboxFill />*/}
      <div className="">
        <h6 className="pb-2">Completed</h6>
        {/* single completed */}
        <CompleteTask />
        <CompleteTask />
        <CompleteTask />
      </div>
    </div>
  );
};

export default Today;
