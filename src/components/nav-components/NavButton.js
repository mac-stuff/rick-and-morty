import { Button, Typography } from "@mui/material";

const NavButton = ({ text, setSelectedButton }) => {
  const onButtonClick = (mode) => {
    setSelectedButton(mode);
    console.log(mode.text);
  };
  return (
    <Button onClick={() => onButtonClick({ text })}>
      <Typography variant="h5" align="center">
        {text}
      </Typography>
    </Button>
  );
};

export default NavButton;
