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
            image={image}
            alt={name}
            sx={{
              pt: "5%",
              borderRadius: "50%",
              padding: "15px",
            }}
          />
          <Typography
            variant="body1"
            gutterBottom
            color="textSecondary"
            sx={{ pt: "5%", align: "center" }}
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
