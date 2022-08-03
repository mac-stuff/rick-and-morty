import image from "../assets/image.jpeg";
import data from "../assets/data.js";
import { CardMedia, Grid, Typography } from "@mui/material";

const AboutData = () => {
  return (
    <Grid
      container
      position="static"
      sx={{
        borderRadius: "15px",
        marginBottom: "2px",
        padding: "10px",
        margin: "2px",
        backgroundColor: "#DFFF00",
      }}
    >
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
          sx={{ padding: "5% 5% 2% 5%" }}
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
    </Grid>
  );
};

export default AboutData;
