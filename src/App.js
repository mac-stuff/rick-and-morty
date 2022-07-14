import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/nav-components/Navigation";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [selectedButton, setSelectedButton] = useState("about me");
  const [logo, setLogo] = useState(false);
  const [logoText, setLogoText] = useState("");

  return (
    <div className="wrapper">
      <div className="header">
        <Navigation
          setSelectedButton={setSelectedButton}
          logo={logo}
          logoText={logoText}
        />
      </div>
      <div className="main">
        <Body
          selectedButton={selectedButton}
          logo={logo}
          setLogo={setLogo}
          setLogoText={setLogoText}
        />
      </div>
      <div className="aside aside1"></div>
      <div className="aside aside2"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
