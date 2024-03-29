import { Grid, Typography } from "@mui/material";

const DialogWindow = ({ stack, level }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        backgroundColor: "#33FF00",
        borderRadius: "15px",
        margin: "20px",
        padding: "50px",
        minHeight: "500px",
      }}
    >
      <Typography
        component="h2"
        variant="text.secondary"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {stack} {level}
      </Typography>
    </Grid>
  );
};

export default DialogWindow;
