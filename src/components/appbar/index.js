import AppbarButton from "./AppbarButton";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Stack,
  Grid,
} from "@mui/material";

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
            <Grid spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {buttons.map((button) => (
                <AppbarButton
                  key={button}
                  text={button}
                  setSelectedButton={setSelectedButton}
                />
              ))}
            </Grid>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Appbar;
