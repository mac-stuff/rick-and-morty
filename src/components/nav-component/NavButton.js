import { Button } from "@mui/material";

const NavButton = ({ text, setSelectedButton }) => {
  const onButtonClick = (mode) => {
    setSelectedButton(mode);
  };
  return (
    <Button color="inherit" onClick={() => onButtonClick({ text })}>
      {text}
    </Button>
  );
};

export default NavButton;
