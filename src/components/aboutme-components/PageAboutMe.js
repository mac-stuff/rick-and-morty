import "./PageAboutMe.css";
import React, { useState } from "react";

const PageAboutMe = ({ image, name, cv, setLogoText }) => {
  const [message, setMessage] = useState("");

  const messageHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLogoText(message.toString());
    setMessage("");
  };
  return (
    <div className="about-me">
      <img src={image} alt="" className="image" />
      <div className="data-container">
        <div className="button-53">{name}</div>
        <div className="text">{cv}</div>
      </div>
      <form onSubmit={submitHandler}>
        <label>message</label>
        <input type="text" value={message} onChange={messageHandler}></input>
        <button className="button-53" type="submit">
          sent
        </button>
      </form>
    </div>
  );
};
export default PageAboutMe;
