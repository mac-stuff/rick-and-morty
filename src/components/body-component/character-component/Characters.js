import {
  Container,
  Grid,
  Card,
  Avatar,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const Characters = ({ results }) => {
  //   return (
  //     <Grid container spacing={4}>
  //       {results.map((result) => (
  //         <Grid item key={result.id} xs={12} sm={6} md={4}>
  //           <Card
  //             sx={{
  //               height: "100%",
  //               display: "flex",
  //               flexDirection: "column",
  //             }}
  //           >
  //             <CardMedia
  //               component="img"
  //               sx={{
  //                 // 16:9
  //                 pt: "56.25%",
  //               }}
  //               image={result.image}
  //               alt="random"
  //             />
  //             <CardContent sx={{ flexGrow: 1 }}>
  //             </CardContent>
  //             <CardActions>
  //
  //             </CardActions>
  //           </Card>
  //         </Grid>
  //       ))}
  //     </Grid>
  //   );
  // };

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
