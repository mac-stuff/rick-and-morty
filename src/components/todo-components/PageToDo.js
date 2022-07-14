import React, { useState } from "react";
import "./PageToDo.css";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Header from "./Header";
import ChangeLogo from "./ChangeLogo";

const PageToDo = (props) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "First Meeting at School",
      day: "5-06-2022",
    },
  ]);
  const [title, setTitle] = useState(`You have ${tasks.length} to do.`);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setTitle(`You have ${tasks.length - 1} tasks`);
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    setTitle(`You have ${tasks.length + 1} tasks`);
  };

  return (
    <div className="body">
      <Header onAdd={() => setShowAddTask(!showAddTask)} title={title} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks To Show"
      )}
      {showAddTask && <AddTask onAdd={addTask} />}
      <ChangeLogo setLogo={props.setLogo} logo={props.logo} />
    </div>
  );
};
export default PageToDo;
