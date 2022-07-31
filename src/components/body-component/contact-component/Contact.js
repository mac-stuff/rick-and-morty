import React, { useState } from "react";
import MessageContent from "./MessageContent";
import { Container, Button, TextField, Stack } from "@mui/material";

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
    <Container>
      <form onSubmit={submitHandler}>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <TextField
            id="filled-basic"
            label="email"
            variant="filled"
            onChange={emailHandler}
            value={email}
          ></TextField>
          <TextField
            id="filled-basic"
            label="message"
            variant="filled"
            onChange={messageHandler}
            value={message}
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

      {isSent ? <MessageContent data={data} /> : ""}
    </Container>
  );
};
export default Contact;
