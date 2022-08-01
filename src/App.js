import React, { useState } from "react";
import Nav from "./components/nav-component/Nav";
import Body from "./components/body-component/Body";
import Footer from "./components/footer-component/Footer";
import {
  Container,
  Grid,
  Paper,
  createTheme,
  ThemeProvider,
  CssBaseline,
  colors,
} from "@mui/material/";

const theme = createTheme({
  palette: {
    primary: { main: colors.orange[500] },
  },
});

function App() {
  const [selectedButton, setSelectedButton] = useState("about");
  const [logo, setLogo] = useState("LOGO");

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Paper
          style={{
            backgroundColor: "green",
            minHeight: "800px",
            padding: "5px",
            borderRadius: "15px",
          }}
        >
          <Grid item xs={12}>
            <CssBaseline />
            <Nav setSelectedButton={setSelectedButton} logo={logo} />
          </Grid>
          <Grid
            item
            xs={12}
            spacing={15}
            style={{
              backgroundColor: "yellow",
              borderRadius: "15px",
              margin: "2px",
              padding: "2px",
              minHeight: "900px",
            }}
          >
            <Body
              selectedButton={selectedButton}
              logo={logo}
              setLogo={setLogo}
            />
          </Grid>
          <Grid
            item
            xs={12}
            spacing={5}
            style={{ backgroundColor: "blue", borderRadius: "15px" }}
          >
            <Footer />
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
