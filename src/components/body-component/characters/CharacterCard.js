import { Card, Typography, CardMedia } from "@mui/material";

const Character = ({ results }) => {
  if (results) {
    return results.map(({ id, image, name, species, status }) => {
      return (
        <Card
          sx={{ maxWidth: 200, flexDirection: "column" }}
          style={{
            borderRadius: "15px",
            margin: "1px",
            padding: "5px",
            backgroundColor: "#FF0099",
            textAlign: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              pt: "5%",
            }}
            style={{ borderRadius: "50px" }}
            image={image}
            alt={name}
          />
          <Typography
            variant="body1"
            gutterBottom
            color="textSecondary"
            style={{ align: "center" }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="textSecondary"
            style={{ margin: "auto" }}
          >
            {species} - {status}
          </Typography>
        </Card>
      );
    });
  } else {
    return <Typography>Not found</Typography>;
  }
};

export default Character;
