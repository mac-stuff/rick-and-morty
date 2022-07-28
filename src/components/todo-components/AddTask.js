import { useState } from "react";
import "./AddTask.css";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("add a task first");
      return;
    }

    if (!day) {
      alert("add a date first");
      return;
    }

    onAdd({ text, day });
    setText("");
    setDay("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="date"
          placeholder="add day"
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <input type="submit" value="save task" className="add-button" />
    </form>
  );
};

export default AddTask;
