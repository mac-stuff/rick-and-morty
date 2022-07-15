import "./PageAboutMe.css";
import React, { useState } from "react";

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
        <div className="name">{name}</div>
        <div className="cv">{cv}</div>
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
        <button className="about-me-button" type="submit">
          costom logo
        </button>
      </form>
    </div>
  );
};
export default PageAboutMe;
