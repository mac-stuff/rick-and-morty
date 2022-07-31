import React, { useState } from "react";
import data from "../assets/data";
import ToDoTasks from "./ToDoTasks";
import AddTask from "./AddTask";
import ChangeLogo from "./ChangeLogo";
import { Container, Grid, Button } from "@mui/material";

const ToDo = ({ setLogo, logo }) => {
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

  return (
    <Container>
      <Button
        variant="contained"
        gutterBottom
        onClick={() => setShowAddTask(!showAddTask)}
        size="medium"
      >
        add a task
      </Button>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <ToDoTasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks To Show"
      )}

      <Grid>
        <ChangeLogo setLogo={setLogo} logo={logo} />
      </Grid>
    </Container>
  );
};
export default ToDo;
