import { createTheme, ThemeProvider, colors } from "@mui/material/";
import { CssBaseline, Grid, Box, Container } from "@mui/material/";
import Nav from "./components/nav-component/Nav";
import About from "./components/body-component/about-component/About";
import Character from "./components/body-component/character-component/Character";
import ToDo from "./components/body-component/todo-component/ToDo";
import Contact from "./components/body-component/contact-component/Contact";
import Footer from "./components/footer-component/Footer";

const theme = createTheme({
  palette: {
    primary: { main: colors.orange[500] },
  },
});

const Example = ({ setSelectedButton, logo, logoText, setLogoText }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav
        setSelectedButton={setSelectedButton}
        logo={logo}
        logoText={logoText}
      />

      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={2}>
            <About setLogoText={setLogoText} />
          </Grid>
        </Container>
      </Box>

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

      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container sx={{ py: 8 }} maxWidth="md">
          <ToDo />
        </Container>
      </Box>

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

      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  );
};

export default Example;
