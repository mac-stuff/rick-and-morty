import React, { useState } from "react";
import { Typography, Button } from "@mui/material";

const PageAboutMe = ({ image, name, cv, setLogoText }) => {
  const [message, setMessage] = useState("");

  const messageHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!message) {
      alert("add a text first");
      return;
    }
    setLogoText(message.toString());
    setMessage("");
  };

  return (
    <div className="about-me">
      <img src={image} alt="" className="image" />
      <div className="about-me-data">
        <Typography variant="h6" gutterBottom color="textSecondary">
          {name}
        </Typography>
        <Typography variant="body1" gutterBottom color="textSecondary">
          {cv}
        </Typography>
      </div>

      <form className="about-me-form" onSubmit={submitHandler}>
        <br />
        <input
          className="about-me-input"
          placeholder="add text"
          type="text"
          value={message}
          onChange={messageHandler}
        ></input>
        <br />
        <Button variant="outlined" color="primary" type="submit">
          costom logo
        </Button>
      </form>
    </div>
  );
};
export default PageAboutMe;
