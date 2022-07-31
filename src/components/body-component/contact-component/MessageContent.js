import { Container, Typography } from "@mui/material";

const MessageContent = ({ data }) => {
  return (
    <Container>
      <Typography
        component="h2"
        variant="text.secondary"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {data}
      </Typography>
    </Container>
  );
};

export default MessageContent;
