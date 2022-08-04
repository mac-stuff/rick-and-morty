import image from "../assets/image.jpeg";
import data from "../assets/data.js";
import { Container, CardMedia, Grid, Typography } from "@mui/material";

const AboutData = () => {
  return (
    <Container>
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
        <CardMedia
          component="img"
          image={image}
          alt={data.name}
          sx={{
            maxWidth: 350,
            borderRadius: "50%",
            margin: "2% auto",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "#FF0099",
          borderRadius: "15px",
          padding: "5px",
          margin: "2px",
          justifyItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ padding: "5% 5% 2% 5%", fontSize: "2rem" }}
        >
          {data.name}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ padding: "0% 5% 5% 5%" }}
        >
          {data.cv}
        </Typography>
      </Grid>
    </Container>
  );
};

export default AboutData;
