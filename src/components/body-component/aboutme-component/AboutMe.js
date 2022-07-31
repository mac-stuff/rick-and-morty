import AboutMeData from "./AboutMeData";
import AboutMeForm from "./AboutMeForm";
import { Container } from "@mui/material";

const AboutMe = ({ setLogoText }) => {
  return (
    <Container>
      <AboutMeData />
      <AboutMeForm setLogoText={setLogoText} />
    </Container>
  );
};
export default AboutMe;
