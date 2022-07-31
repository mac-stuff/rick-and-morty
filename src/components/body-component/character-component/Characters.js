import { Grid, Card, Typography, CardMedia, CardContent } from "@mui/material";

const Characters = ({ results }) => {
  if (results) {
    return results.map(({ id, image, name, species, status }) => {
      return (
        <Grid item key={id} xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 220, height: "100%", flexDirection: "column" }}>
            <CardMedia
              component="img"
              sx={{
                pt: "55%",
              }}
              image={image}
              alt={name}
            />
            <CardContent sx={{ flexGrow: 1 }}></CardContent>
            <Typography variant="body1" gutterBottom color="textSecondary">
              {name}
            </Typography>
            <Typography variant="body1" gutterBottom color="textSecondary">
              {species} - {status}
            </Typography>
          </Card>
        </Grid>
      );
    });
  } else {
    return <Typography>Not found</Typography>;
  }
};

export default Characters;
