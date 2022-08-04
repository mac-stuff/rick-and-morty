import React, { useState } from "react";
import { Grid, Stack, TextField, Button } from "@mui/material";

const AboutForm = ({ logo, setLogo }) => {
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
    <Grid
      sx={{
        borderRadius: "15px",
        margin: "1px",
        padding: "15px",
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="center">
        <TextField
          label="custom logo"
          variant="filled"
          value={customLogo}
          onChange={logoHandler}
          sx={{ backgroundColor: "#33FF00" }}
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
    </Grid>
  );
};

export default AboutForm;
