import { Grid, Typography } from "@mui/material";

const ContactWindow = ({ data }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
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
        {data}
      </Typography>
    </Grid>
  );
};

export default ContactWindow;
