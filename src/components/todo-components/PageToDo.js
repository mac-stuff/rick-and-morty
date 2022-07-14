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
      text: "”Sometimes science is more art than science.”",
      day: "20-01-2021",
    },
    {
      id: 2,
      text: "”Weddings are basically funerals with a cake.”",
      day: "05-09-2021",
    },
  ]);
  const [title, setTitle] = useState(`You have ${tasks.length} task`);

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
    <div className="todo-body">
      <Header onAdd={() => setShowAddTask(!showAddTask)} title={title} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks To Show"
      )}
      <ChangeLogo setLogo={props.setLogo} logo={props.logo} />
    </div>
  );
};
export default PageToDo;
