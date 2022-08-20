import React, { useState } from "react";
import Appbar from "./components/appbar/index.js";
import Body from "./components/body/Body";
import Footer from "./components/footer/index.js";
import {
  Container,
  Grid,
  Paper,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material/";

const theme = createTheme({
  palette: {
    primary: { main: "#6E0DD0" },
    secondary: { main: "#E6FB04" },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "#FF0099",
        },
        colorPrimary: {
          "&.Mui-checked": {
            color: "#E6FB04",
          },
        },
        track: {
          opacity: 0.2,
          backgroundColor: "#6E0DD0",
          ".Mui-checked.Mui-checked + &": {
            opacity: 0.7,
            backgroundColor: "#6E0DD0",
          },
        },
      },
    },
  },
});

function App() {
  const [selectedButton, setSelectedButton] = useState("about");
  const [logo, setLogo] = useState("LOGO");

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Paper
          sx={{
            backgroundColor: "#33FF00",
            minHeight: "800px",
            padding: "5px",
            borderRadius: "15px",
          }}
        >
          <Grid item xs={12}>
            <CssBaseline />
            <Appbar setSelectedButton={setSelectedButton} logo={logo} />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#DFFF00",
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
            sx={{ backgroundColor: "#9900FF", borderRadius: "15px" }}
          >
            <Footer />
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
