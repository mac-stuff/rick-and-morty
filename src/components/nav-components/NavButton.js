import "./NavButton.css";

const NavButton = ({ text, setSelectedButton }) => {
  const onButtonClick = (mode) => {
    setSelectedButton(mode);
    console.log(mode.text);
  };

  return (
    <button className="button-53" onClick={() => onButtonClick({ text })}>
      {text}
    </button>
  );
};

export default NavButton;
