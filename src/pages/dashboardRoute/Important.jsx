import CompleteTask from "../../components/Dashboard/CompleteTask";
const Important = () => {
  return (
    <div>
      <div>
        <h6>Importent Tasks</h6>
      </div>
      {/* task container */}
      {/* single task */}
      <div className="pt-2">
        <CompleteTask />
        <CompleteTask />
        <CompleteTask />
        <CompleteTask />
        <CompleteTask />
      </div>
    </div>
  );
};

export default Important;
