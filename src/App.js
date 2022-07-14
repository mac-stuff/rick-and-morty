import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Body from "./components/Body";

function App() {
  const [selectedButton, setSelectedButton] = useState("about me");
  const [logo, setLogo] = useState(false);
  const [logoText, setLogoText] = useState("");

  return (
    <div className="App">
      <Nav
        setSelectedButton={setSelectedButton}
        logo={logo}
        logoText={logoText}
      />
      <Body
        selectedButton={selectedButton}
        logo={logo}
        setLogo={setLogo}
        setLogoText={setLogoText}
      />
    </div>
  );
}

export default App;
