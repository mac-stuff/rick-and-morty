import React, { useState } from "react";
import ContactWindow from "./ContactWindow";
import { Grid, Button, TextField, Stack } from "@mui/material";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [data, setData] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const messageHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!email) {
      alert("add a email first");
      return;
    }

    if (!message) {
      alert("add a message first");
      return;
    }
    setIsSent(true);
    setData(email + " write message to you: " + message);
    setEmail("");
    setMessage("");
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        backgroundColor: "#FF0099",
        minHeight: "600px",
        borderRadius: "15px",
        margin: "2px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ pt: 4 }}>
        <TextField
          id="filled-basic"
          label="email"
          variant="filled"
          onChange={emailHandler}
          value={email}
          sx={{ backgroundColor: "#DFFF00" }}
        ></TextField>
        <TextField
          id="filled-basic"
          label="message"
          variant="filled"
          onChange={messageHandler}
          value={message}
          sx={{ backgroundColor: "#DFFF00" }}
        ></TextField>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          size="medium"
          onClick={submitHandler}
        >
          send
        </Button>
      </Stack>
      {isSent ? <ContactWindow data={data} /> : ""}
    </Grid>
  );
};

export default Contact;
