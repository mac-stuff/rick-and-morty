import AppbarButton from "./AppbarButton";
import { AppBar, Container, Toolbar, Typography, Stack } from "@mui/material";

const Appbar = ({ setSelectedButton, logo }) => {
  const buttons = [
    "about",
    "characters",
    "todo",
    "contact",
    "dialog",
    "components",
  ];

  return (
    <AppBar position="static" sx={{ borderRadius: "15px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {logo}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
            {buttons.map((button) => (
              <AppbarButton
                key={button}
                text={button}
                setSelectedButton={setSelectedButton}
              />
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Appbar;
