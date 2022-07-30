import NavButtons from "./NavButtons";
import Logo from "./Logo";
import { Box } from "@mui/material";

const Navigation = ({ setSelectedButton, logo, logoText }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Logo logo={logo} logoText={logoText} />
      <NavButtons setSelectedButton={setSelectedButton} />
    </Box>
  );
};

export default Navigation;
