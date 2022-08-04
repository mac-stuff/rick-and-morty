import AboutData from "./AboutData";
import AboutForm from "./AboutForm";
import { Grid } from "@mui/material";

const About = ({ logo, setLogo }) => {
  return (
    <Grid>
      <AboutData />
      <AboutForm logo={logo} setLogo={setLogo} />
    </Grid>
  );
};
export default About;
