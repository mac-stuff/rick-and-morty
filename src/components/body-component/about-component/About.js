import AboutData from "./AboutData";
import AboutForm from "./AboutForm";
import { Container } from "@mui/material";

const AboutMe = ({ logo, setLogo }) => {
  return (
    <Container>
      <AboutData />
      <AboutForm logo={logo} setLogo={setLogo} />
    </Container>
  );
};
export default AboutMe;
