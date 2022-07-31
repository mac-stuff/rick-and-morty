import React, { useState } from "react";
import { Container, TextField, Button } from "@mui/material";

const AboutMeForm = ({ setLogoText }) => {
  const [newLogoText, setNewLogoText] = useState("");

  const messageHandler = (event) => {
    setNewLogoText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!newLogoText) {
      alert("add a text first");
      return;
    }
    setLogoText(newLogoText.toString());
    setNewLogoText("");
  };

  return (
    <form onSubmit={submitHandler}>
      <Container>
        <TextField
          id="filled-basic"
          label="add a custom logo text"
          variant="filled"
          value={newLogoText}
          onChange={messageHandler}
        ></TextField>
        <Button variant="contained" color="primary" type="submit" size="medium">
          send
        </Button>
      </Container>
    </form>
  );
};

export default AboutMeForm;
