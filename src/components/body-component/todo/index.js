import React, { useState } from "react";
import data from "../assets/data";
import TodoCard from "./TodoCard";
import AddTaskWindow from "./AddTaskWindow";
import { Button, Grid } from "@mui/material";

const Todo = ({ logo, setLogo }) => {
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
        backgroundColor: "#FF0099",
        minHeight: "600px",
        borderRadius: "15px",
        margin: "2px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <Button
        variant="contained"
        onClick={() => setShowAddTask(!showAddTask)}
        size="medium"
        style={{ margin: "25px" }}
      >
        add task
      </Button>
      {showAddTask && <AddTaskWindow onAdd={addTask} />}
      {tasks.length > 0 ? (
        <TodoCard tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks To Show"
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={onButtonClick}
        size="medium"
        style={{ margin: "25px" }}
      >
        change logo
      </Button>
    </Grid>
  );
};

export default Todo;
