import React, { useState } from "react";
import data from "../assets/data";
import ToDoTasks from "./ToDoTasks";
import AddTask from "./AddTask";
import { Container, Box, Button } from "@mui/material";

const ToDo = ({ logo, setLogo }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(data.todo);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const onButtonClick = () => {
    {
      logo.startsWith("LOGO") ? setLogo("NOWE LOGO") : setLogo("LOGO");
    }
  };

  return (
    <Container>
      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Button
            variant="outlined"
            gutterBottom
            onClick={() => setShowAddTask(!showAddTask)}
            size="medium"
          >
            add a task
          </Button>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Container sx={{ py: 8 }} maxWidth="md">
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
            <ToDoTasks tasks={tasks} onDelete={deleteTask} />
          ) : (
            "No Tasks To Show"
          )}
        </Container>
      </Box>

      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Button
            variant="outlined"
            color="primary"
            onClick={onButtonClick}
            size="medium"
          >
            change logo
          </Button>
        </Container>
      </Box>
    </Container>
  );
};

export default ToDo;
