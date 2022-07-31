import image from "../assets/image.jpeg";
import data from "../assets/data.js";
import { Box, CardMedia, Typography } from "@mui/material";

const AboutMeData = () => {
  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      displey={"flex"}
      sx={{ margin: "25px" }}
    >
      <CardMedia
        component="img"
        sx={{
          pt: "35%",
        }}
        image={image}
        alt={data.name}
      />
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
    </Box>
  );
};

export default AboutMeData;
