import AboutMe from "./aboutme-component/AboutMe";
import CharacterList from "./character-component/CharacterList";
import ToDo from "./todo-component/ToDo";
import PageContact from "./contact-component/PageContact";
import { Container } from "@mui/material";

const Body = ({ selectedButton, setLogo, logo, setLogoText }) => {
  return (
    <Container>
      {(selectedButton === "about me" ||
        selectedButton.text === "about me") && (
        <AboutMe setLogoText={setLogoText} />
      )}
      {selectedButton.text === "characters" && <CharacterList />}
      {selectedButton.text === "todo" && <ToDo setLogo={setLogo} logo={logo} />}
      {selectedButton.text === "contact" && <PageContact />}
    </Container>
  );
};

export default Body;
