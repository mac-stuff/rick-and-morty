import { useState } from "react";
import { TextField, Button } from "@mui/material";

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
    <form onSubmit={onSubmit}>
      <TextField
        id="filled-basic"
        label="add a task"
        variant="filled"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></TextField>
      <TextField
        id="date"
        label="add a date"
        type="date"
        defaultValue="2022-07-13"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setDay(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit" size="medium">
        save task
      </Button>
    </form>
  );
};

export default AddTask;
