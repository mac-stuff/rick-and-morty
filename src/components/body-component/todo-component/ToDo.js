import React, { useState } from "react";
import data from "../assets/data";
import ToDoTasks from "./ToDoTasks";
import AddTask from "./AddTask";
import { Button, Grid } from "@mui/material";

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
    <Grid
      item
      xs={12}
      spacing={15}
      style={{
        backgroundColor: "black",
        minHeight: "600px",
        borderRadius: "15px",
        margin: "2px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <Button
        variant="outlined"
        onClick={() => setShowAddTask(!showAddTask)}
        size="medium"
      >
        add task
      </Button>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <ToDoTasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks To Show"
      )}
      <Button
        variant="outlined"
        color="primary"
        onClick={onButtonClick}
        size="medium"
      >
        change logo
      </Button>
    </Grid>
  );
};

export default ToDo;
