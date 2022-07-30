import React, { useState } from "react";
import Navigation from "./components/nav-components/Navigation";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Container } from "@mui/material";

function App() {
  const [selectedButton, setSelectedButton] = useState("about me");
  const [logo, setLogo] = useState(false);
  const [logoText, setLogoText] = useState("");

  return (
    <Container maxWidth="lg">
      <Navigation
        setSelectedButton={setSelectedButton}
        logo={logo}
        logoText={logoText}
      />

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
    </Container>
  );
}

export default App;
