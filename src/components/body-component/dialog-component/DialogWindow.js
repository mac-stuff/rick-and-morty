import { Grid, Typography } from "@mui/material";

const DialogWindow = ({ stack, level }) => {
  return (
    <Grid
      item
      xs={12}
      spacing={15}
      style={{
        backgroundColor: "#33FF00",
        borderRadius: "15px",
        margin: "20px",
        padding: "2px",
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
        {stack} - {level}
      </Typography>
    </Grid>
  );
};

export default DialogWindow;
