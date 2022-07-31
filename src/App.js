import React, { useState } from "react";
import Nav from "./components/nav-component/Nav";
import Body from "./components/body-component/Body";
import Footer from "./components/footer-component/Footer";
import {
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
      <CssBaseline />
      <Nav setSelectedButton={setSelectedButton} logo={logo} />
      <Body selectedButton={selectedButton} logo={logo} setLogo={setLogo} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
