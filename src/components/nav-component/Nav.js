import NavButton from "./NavButton";
import { AppBar, Toolbar, Typography, Stack } from "@mui/material";

const Nav = ({ setSelectedButton, logo, logoText }) => {
  const buttons = ["about me", "characters", "todo", "contact"];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {logo ? "NOWE LOGO " + logoText : "LOGO " + logoText}
        </Typography>
        <Stack direction="row" spacing={2}>
          {buttons.map((button) => (
            <NavButton
              key={button}
              text={button}
              setSelectedButton={setSelectedButton}
            />
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
