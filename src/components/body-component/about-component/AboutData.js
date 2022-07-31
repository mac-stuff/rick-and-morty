import image from "../assets/image.jpeg";
import data from "../assets/data.js";
import { Container, Avatar, Typography } from "@mui/material";

const AboutMeData = () => {
  return (
    <Container>
      <Avatar src={image} alt={data.name} sx={{ width: 300, height: 300 }} />
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {data.name}
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        {data.cv}
      </Typography>
    </Container>
  );
};

export default AboutMeData;
