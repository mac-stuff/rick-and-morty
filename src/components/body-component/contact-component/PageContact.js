import React, { useState } from "react";
import MessageContent from "./MessageContent";
import { Container, Button, TextField } from "@mui/material";

const PageContact = () => {
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
        <TextField
          id="filled-basic"
          label="add a email"
          variant="filled"
          onChange={emailHandler}
          value={email}
        ></TextField>
        <TextField
          id="filled-basic"
          label="add a message"
          variant="filled"
          onChange={messageHandler}
          value={message}
        ></TextField>
        <Button variant="contained" color="primary" type="submit" size="medium">
          sent
        </Button>
      </form>
      <div className="message-content">
        {isSent ? <MessageContent data={data} /> : ""}
      </div>
    </Container>
  );
};
export default PageContact;
