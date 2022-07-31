import React, { useState } from "react";
import { Container, Stack, TextField, Button } from "@mui/material";

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
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <TextField
          id="filled-basic"
          label="custom logo"
          variant="filled"
          value={newLogoText}
          onChange={messageHandler}
        ></TextField>
        <Button variant="outlined" color="primary" type="submit" size="medium">
          send
        </Button>
      </Stack>
    </form>
  );
};

export default AboutMeForm;
