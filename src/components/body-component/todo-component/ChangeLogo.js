import { Container, Button } from "@mui/material";

const ChangeLogo = ({ setLogo, logo }) => {
  const onButtonClick = () => {
    {
      logo ? setLogo(false) : setLogo(true);
    }
  };
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        onClick={onButtonClick}
        size="medium"
      >
        change logo
      </Button>
    </Container>
  );
};

export default ChangeLogo;
