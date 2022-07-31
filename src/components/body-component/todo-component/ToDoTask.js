import { FaTimes } from "react-icons/fa";
import { Container } from "@mui/material";

const ToDoTask = ({ task, onDelete }) => {
  return (
    <Container>
      {task.text}
      <FaTimes
        className="fa"
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => onDelete(task.id)}
      />
      <br />
      {task.day}
    </Container>
  );
};

export default ToDoTask;
