import About from "./about-component/About";
import Character from "./character-component/Character";
import ToDo from "./todo-component/ToDo";
import Contact from "./contact-component/Contact";
import { Container } from "@mui/material";

const Body = ({ selectedButton, setLogo, logo, setLogoText }) => {
  return (
    <Container>
      {(selectedButton === "about" || selectedButton.text === "about") && (
        <About setLogoText={setLogoText} />
      )}
      {selectedButton.text === "characters" && <Character />}
      {selectedButton.text === "todo" && <ToDo setLogo={setLogo} logo={logo} />}
      {selectedButton.text === "contact" && <Contact />}
    </Container>
  );
};

export default Body;
