import { Container, Typography } from "@mui/material";

const MessageContent = ({ data }) => {
  return (
    <Container>
      <Typography variant="h3" color="textSecondary" gutterBottom>
        {data}
      </Typography>
    </Container>
  );
};

export default MessageContent;
