import About from "./about-component/About";
import Character from "./character-component/Character";
import ToDo from "./todo-component/ToDo";
import Contact from "./contact-component/Contact";
import { Container, Box, Grid } from "@mui/material";

const Body = ({ selectedButton, logo, setLogo }) => {
  return (
    <Container>
      {(selectedButton === "about" || selectedButton.text === "about") && (
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={2}>
              <About logo={logo} setLogo={setLogo} />
            </Grid>
          </Container>
        </Box>
      )}
      {selectedButton.text === "characters" && (
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container sx={{ py: 8 }} maxWidth="md">
            <Character />
          </Container>
        </Box>
      )}
      {selectedButton.text === "todo" && (
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container sx={{ py: 8 }} maxWidth="md">
            <ToDo setLogo={setLogo} logo={logo} />
          </Container>
        </Box>
      )}
      {selectedButton.text === "contact" && (
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={2}>
              <Contact />
            </Grid>
          </Container>
        </Box>
      )}
    </Container>
  );
};

export default Body;
