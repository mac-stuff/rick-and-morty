import image from "../assets/image.jpeg";
import data from "../assets/data.js";
import { Container, Avatar, Typography } from "@mui/material";

const AboutMeData = () => {
  return (
    <Container>
      <Avatar src={image} alt={data.name} sx={{ width: 300, height: 300 }} />
      <Typography variant="h5" gutterBottom color="textSecondary">
        {data.name}
      </Typography>
      <Typography variant="body1" gutterBottom color="textSecondary">
        {data.cv}
      </Typography>
    </Container>
  );
};

export default AboutMeData;
