import React, { useState } from "react";
import "./PageToDo.css";
import ToDoTasks from "./ToDoTasks";
import AddTask from "./AddTask";
import ToDoHeader from "./ToDoHeader";
import ChangeLogo from "./ChangeLogo";

const PageToDo = (props) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "”Rick and Morty” season I premiere",
      day: "2013-02-12",
    },
    {
      id: 2,
      text: "”Rick and Morty” season II premiere",
      day: "2015-07-26",
    },
    {
      id: 3,
      text: "”Rick and Morty” season III premiere",
      day: "2017-04-01",
    },
  ]);
  const [title, setTitle] = useState(`you have ${tasks.length} tasks`);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setTitle(`you have ${tasks.length - 1} tasks`);
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    setTitle(`you have ${tasks.length + 1} tasks`);
  };

  return (
    <div className="todo-body">
      <ToDoHeader onAdd={() => setShowAddTask(!showAddTask)} title={title} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <ToDoTasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks To Show"
      )}
      <div className="change-logo">
        <ChangeLogo setLogo={props.setLogo} logo={props.logo} />
      </div>
    </div>
  );
};
export default PageToDo;
