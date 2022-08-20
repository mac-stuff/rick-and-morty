import { useState } from "react";
import { Grid, Stack, TextField, Button } from "@mui/material";

const AddTaskWindow = ({ onAdd }) => {
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
    <Grid
      item
      xs={12}
      sx={{
        backgroundColor: "#DFFF00",
        borderRadius: "15px",
        margin: "2px",
        padding: "10px",
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ pt: 4 }}>
        <TextField
          variant="filled"
          label="add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{
            backgroundColor: "#33FF00",
          }}
        ></TextField>
        <TextField
          variant="filled"
          label="add a date"
          type="date"
          onChange={(e) => setDay(e.target.value)}
          sx={{ width: 220, backgroundColor: "#33FF00" }}
          InputLabelProps={{
            shrink: true,
          }}
        ></TextField>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          size="medium"
          onClick={onSubmit}
        >
          send
        </Button>
      </Stack>
    </Grid>
  );
};

export default AddTaskWindow;
