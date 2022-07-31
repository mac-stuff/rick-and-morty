import React, { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";

const AboutMeForm = ({ logo, setLogo }) => {
  const [customLogo, setCustomLogo] = useState("");

  const logoHandler = (event) => {
    setCustomLogo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!customLogo) {
      alert("add a text first");
      return;
    }
    const split = logo.split(" ");
    split[0] === "LOGO"
      ? setLogo(split[0] + " " + customLogo)
      : setLogo(split[0] + " " + split[1] + " " + customLogo);
    setCustomLogo("");
  };

  return (
    <form onSubmit={submitHandler}>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <TextField
          id="filled-basic"
          label="custom logo"
          variant="filled"
          value={customLogo}
          onChange={logoHandler}
        ></TextField>
        <Button variant="outlined" color="primary" type="submit" size="medium">
          send
        </Button>
      </Stack>
    </form>
  );
};

export default AboutMeForm;
