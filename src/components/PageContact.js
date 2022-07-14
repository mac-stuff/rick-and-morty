import React, { useState } from "react";
import MessageContent from "./MessageContent";
import "./PageContact.css";

const PageContact = (props) => {
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
    setIsSent(true);
    setData(email + " write message to you: " + message);
    setEmail("");
    setMessage("");
  };

  return (
    <div className="body">
      <form onSubmit={submitHandler}>
        <div className="button-53">WRITE MESSAGE</div>
        <label>e-mail</label>
        <input type="email" value={email} onChange={emailHandler}></input>
        <label>message</label>
        <input type="text" value={message} onChange={messageHandler}></input>
        <button className="button-53" type="submit">
          sent
        </button>
      </form>
      <div>{isSent ? <MessageContent data={data} /> : "nie wysne"}</div>
    </div>
  );
};
export default PageContact;
