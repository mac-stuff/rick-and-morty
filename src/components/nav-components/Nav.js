import NavButtons from "./NavButtons";
import Logo from "./Logo";
import "./Nav.css";

const Nav = ({ setSelectedButton, logo, logoText }) => {
  return (
    <div className="nav">
      <Logo logo={logo} logoText={logoText} />
      <NavButtons setSelectedButton={setSelectedButton} />
    </div>
  );
};

export default Nav;
