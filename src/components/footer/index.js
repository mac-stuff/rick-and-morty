import { Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Grid item xs={12} container alignItems="center" justify="space-between">
      <Grid>
        <Typography
          align="left"
          variant="h6"
          gutterBottom
          sx={{
            margin: "5px",
            padding: "5px",
            paddingLeft: "20px",
            minHeight: "40px",
          }}
        >
          Made By Marika
        </Typography>
      </Grid>
      <Grid sx={{ marginLeft: "auto", paddingRight: "25px" }}>
        <GitHubIcon color="secondary" fontSize="large" />
        <FacebookIcon color="secondary" fontSize="large" />
      </Grid>
    </Grid>
  );
};

export default Footer;
