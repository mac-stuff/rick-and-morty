import AboutData from "./AboutData";
import AboutForm from "./AboutForm";
import { Grid } from "@mui/material";

const About = ({ logo, setLogo }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        backgroundColor: "#FF0099",
        borderRadius: "15px",
        padding: "15px",
        margin: "2px",
        justifyItems: "center",
      }}
    >
      <AboutData />
      <AboutForm logo={logo} setLogo={setLogo} />
    </Grid>
  );
};
export default About;
