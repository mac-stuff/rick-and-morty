import About from "./about-component/About";
import Character from "./character-component/Character";
import ToDo from "./todo-component/ToDo";
import Contact from "./contact-component/Contact";
import Dialogs from "./dialog-component/Dialogs";
import { Container, Grid } from "@mui/material";

const Body = ({ selectedButton, logo, setLogo }) => {
  return (
    <Container>
      {(selectedButton === "about" || selectedButton.text === "about") && (
        <About logo={logo} setLogo={setLogo} />
      )}
      {selectedButton.text === "characters" && (
        <Container sx={{ py: 5 }} maxWidth="md">
          <Character />
        </Container>
      )}
      {selectedButton.text === "todo" && (
        <Container sx={{ py: 1 }} maxWidth="md">
          <ToDo setLogo={setLogo} logo={logo} />
        </Container>
      )}
      {selectedButton.text === "contact" && (
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={2}>
            <Contact />
          </Grid>
        </Container>
      )}
      {selectedButton.text === "dialog" && (
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={2}>
            <Dialogs />
          </Grid>
        </Container>
      )}
      {selectedButton.text === "components" && (
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={2}>
            <Dialogs />
          </Grid>
        </Container>
      )}
    </Container>
  );
};

export default Body;
