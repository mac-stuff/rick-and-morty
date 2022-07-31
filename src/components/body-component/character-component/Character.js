import { Grid, Card, Avatar, Typography } from "@mui/material";

const Character = ({ result: { image, name, species, status } }) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ maxWidth: 220 }}>
        <Avatar src={image} alt={name} sx={{ width: 120, height: 120 }} />
        <Typography variant="body1" gutterBottom color="textSecondary">
          {name}
        </Typography>
        <Typography variant="body1" gutterBottom color="textSecondary">
          {species} - {status}
        </Typography>
      </Card>
    </Grid>
  );
};

export default Character;
