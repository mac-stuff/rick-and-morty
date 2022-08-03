import { Card, Typography, CardMedia } from "@mui/material";

const CharacterCard = ({ results }) => {
  if (results) {
    return results.map(({ id, image, name, species, status }) => {
      return (
        <Card
          sx={{
            maxWidth: 200,
            flexDirection: "column",
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
              borderRadius: "50px",
            }}
            image={image}
            alt={name}
          />
          <Typography
            variant="body1"
            gutterBottom
            color="textSecondary"
            sx={{ align: "center" }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="textSecondary"
            sx={{ margin: "auto" }}
          >
            {species} - {status}
          </Typography>
        </Card>
      );
    });
  } else {
    return (
      <Typography
        variant="body1"
        gutterBottom
        color="textSecondary"
        sx={{ margin: "auto" }}
      >
        Not found
      </Typography>
    );
  }
};

export default CharacterCard;
