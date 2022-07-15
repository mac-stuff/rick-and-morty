import ToDoTask from "./ToDoTask";
import "./ToDoTasks.css";

const ToDoTasks = ({ tasks, onDelete }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <ToDoTask key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ToDoTasks;
