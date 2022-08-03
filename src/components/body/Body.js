import About from "./about/index.js";
import Characters from "./characters/index.js";
import Todo from "./todo/index.js";
import Contact from "./contact/index.js";
import Dialogs from "./dialog/index.js";
import { Container, Grid } from "@mui/material";
import Components from "./components/index.js";

const Body = ({ selectedButton, logo, setLogo }) => {
  return (
    <Container>
      {(selectedButton === "about" || selectedButton.text === "about") && (
        <Container sx={{ py: 5 }} maxWidth="md">
          <Grid container spacing={2}>
            <About logo={logo} setLogo={setLogo} />
          </Grid>
        </Container>
      )}
      {selectedButton.text === "characters" && (
        <Container sx={{ py: 5 }} maxWidth="md">
          <Grid container spacing={2}>
            <Characters />
          </Grid>
        </Container>
      )}
      {selectedButton.text === "todo" && (
        <Container sx={{ py: 5 }} maxWidth="md">
          <Grid container spacing={2}>
            <Todo setLogo={setLogo} logo={logo} />
          </Grid>
        </Container>
      )}
      {selectedButton.text === "contact" && (
        <Container sx={{ py: 5 }} maxWidth="md">
          <Grid container spacing={2}>
            <Contact />
          </Grid>
        </Container>
      )}
      {selectedButton.text === "dialog" && (
        <Container sx={{ py: 5 }} maxWidth="md">
          <Grid container spacing={2}>
            <Dialogs />
          </Grid>
        </Container>
      )}
      {selectedButton.text === "components" && (
        <Container sx={{ py: 5 }} maxWidth="md">
          <Grid container spacing={2}>
            <Components />
          </Grid>
        </Container>
      )}
    </Container>
  );
};

export default Body;
