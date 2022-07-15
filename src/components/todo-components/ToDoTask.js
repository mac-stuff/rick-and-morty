import { FaTimes } from "react-icons/fa";
import "./ToDoTask.css";

const ToDoTask = ({ task, onDelete }) => {
  return (
    <div className="task">
      {task.text}
      <FaTimes
        className="fa"
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => onDelete(task.id)}
      />
      <br />
      {task.day}
    </div>
  );
};

export default ToDoTask;
