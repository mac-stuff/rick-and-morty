import ToDoTask from "./ToDoTask";
import { Container } from "@mui/material";

const ToDoTasks = ({ tasks, onDelete }) => {
  return (
    <Container>
      {tasks.map((task) => (
        <ToDoTask key={task.id} task={task} onDelete={onDelete} />
      ))}
    </Container>
  );
};

export default ToDoTasks;
