import AboutData from "./AboutData";
import AboutForm from "./AboutForm";
import { Container } from "@mui/material";

const About = ({ logo, setLogo }) => {
  return (
    <Container>
      <AboutData />
      <AboutForm logo={logo} setLogo={setLogo} />
    </Container>
  );
};
export default About;
