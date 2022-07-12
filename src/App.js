import React, { useState } from "react";
import "./App.css";
import logo from "./assets/ram-logo.jpeg";
import Nav from "./components/Nav";
import Body from "./components/Body";

function App() {
  const [selectedButton, setSelectedButton] = useState("about me");

  return (
    <div className="App">
      <Nav logo={logo} setSelectedButton={setSelectedButton} />
      <Body selectedButton={selectedButton} />
    </div>
  );
}

export default App;
