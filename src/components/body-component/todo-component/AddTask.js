import { useState } from "react";
import { Grid, Stack, TextField, Button } from "@mui/material";

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
    <Grid
      item
      xs={12}
      spacing={15}
      style={{
        backgroundColor: "yellow",
        borderRadius: "15px",
        margin: "2px",
        padding: "10px",
      }}
    >
      <form onSubmit={onSubmit}>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <TextField
            variant="filled"
            label="add task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></TextField>
          <TextField
            variant="filled"
            label="add a date"
            type="date"
            defaultValue="2022-07-13"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setDay(e.target.value)}
          ></TextField>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            size="medium"
          >
            send
          </Button>
        </Stack>
      </form>
    </Grid>
  );
};

export default AddTask;
