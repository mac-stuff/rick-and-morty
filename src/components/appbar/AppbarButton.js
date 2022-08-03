import { Button } from "@mui/material";

const AppbarButton = ({ text, setSelectedButton }) => {
  const onButtonClick = (mode) => {
    setSelectedButton(mode);
  };

  return (
    <Button color="inherit" onClick={() => onButtonClick({ text })} xs={1}>
      {text}
    </Button>
  );
};

export default AppbarButton;
