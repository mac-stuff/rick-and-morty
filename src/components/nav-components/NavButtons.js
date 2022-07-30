import NavButton from "./NavButton";

const NavButtons = ({ setSelectedButton }) => {
  const buttons = ["about me", "character list", "todo", "contact"];

  return (
    <div className="nav-buttons">
      {buttons.map((button) => (
        <NavButton
          key={button}
          text={button}
          setSelectedButton={setSelectedButton}
        />
      ))}
    </div>
  );
};

export default NavButtons;
