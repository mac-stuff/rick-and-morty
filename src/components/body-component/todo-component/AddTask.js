import { useState } from "react";
import { Box, Container, Stack, TextField, Button } from "@mui/material";

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
    <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
      <Container sx={{ py: 8 }} maxWidth="md">
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
      </Container>
    </Box>
  );
};

export default AddTask;
