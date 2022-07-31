import React, { useState } from "react";
import Nav from "./components/nav-component/Nav";
import Body from "./components/body-component/Body";
import Footer from "./components/footer-component/Footer";
import { Container } from "@mui/material";

function App() {
  const [selectedButton, setSelectedButton] = useState("about me");
  const [logo, setLogo] = useState(false);
  const [logoText, setLogoText] = useState("");

  return (
    <Container maxWidth="lg">
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
      <Footer />
    </Container>
  );
}

export default App;
