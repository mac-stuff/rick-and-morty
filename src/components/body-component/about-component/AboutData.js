import image from "../assets/image.jpeg";
import data from "../assets/data.js";
import { Box, Avatar, Grid, Typography } from "@mui/material";

const AboutMeData = () => {
  return (
    <Grid
      container
      position="static"
      style={{
        borderRadius: "15px",
        margin: "1px",
        padding: "1px",
        backgroundColor: "tomato",
      }}
    >
      <Grid
        item
        xs={12}
        style={{
          backgroundColor: "pink",
          borderRadius: "15px",
          padding: "5px",
          justifyItems: "center",
        }}
      >
        <Avatar
          alt={data.name}
          src={image}
          sx={{ width: 450, height: 450 }}
          style={{ margin: "auto" }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundColor: "pink",
          borderRadius: "15px",
          padding: "5px",
          margin: "1px",
          justifyItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {data.name}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          {data.cv}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutMeData;
