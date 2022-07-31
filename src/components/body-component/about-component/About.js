import AboutData from "./AboutData";
import AboutForm from "./AboutForm";
import { Container } from "@mui/material";

const AboutMe = ({ setLogoText }) => {
  return (
    <Container>
      <AboutData />
      <AboutForm setLogoText={setLogoText} />
    </Container>
  );
};
export default AboutMe;
