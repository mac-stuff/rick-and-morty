import React, { useState } from "react";
import "./PageContact.css";
import MessageContent from "./MessageContent";

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
    <div className="body">
      <form className="form" onSubmit={submitHandler}>
        <div className="text-up">write message</div>
        <input
          className="input"
          type="email"
          value={email}
          onChange={emailHandler}
          placeholder="email"
        ></input>
        <br />
        <input
          className="input-text"
          type="text"
          value={message}
          onChange={messageHandler}
          placeholder="message"
        ></input>
        <br />
        <button className="button" type="submit">
          sent
        </button>
      </form>
      <div className="message-content">
        {isSent ? <MessageContent data={data} /> : ""}
      </div>
    </div>
  );
};
export default PageContact;
