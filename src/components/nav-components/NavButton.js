import "./NavButton.css";

const NavButton = ({ text, setSelectedButton }) => {
  const onButtonClick = (mode) => {
    setSelectedButton(mode);
    console.log(mode.text);
  };

  return (
    <button className="nav-button" onClick={() => onButtonClick({ text })}>
      {text}
    </button>
  );
};

export default NavButton;
