import image from "../assets/image.jpeg";
import data from "../assets/data.js";
import { CardMedia, Avatar, Grid, Typography } from "@mui/material";

const AboutMeData = () => {
  return (
    <Grid
      container
      position="static"
      style={{
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
        style={{
          backgroundColor: "#FF0099",
          borderRadius: "15px",
          padding: "5px",
          margin: "2px",
          justifyItems: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            maxWidth: 350,
            borderRadius: "50%",
          }}
          style={{ margin: "2% auto", borderRadius: "50%" }}
          image={image}
          alt={data.name}
        />
      </Grid>
      <Grid
        item
        xs={12}
        style={{
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
          style={{ padding: "5% 5% 2% 5%" }}
        >
          {data.name}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          style={{ padding: "0% 5% 5% 5%" }}
        >
          {data.cv}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutMeData;
