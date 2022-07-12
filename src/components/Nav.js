import NavButtons from "./NavButtons";
import Logo from "./Logo";
import "./Nav.css";

const Nav = ({ logo, setSelectedButton }) => {
  return (
    <div className="nav">
      <Logo logo={logo} />
      <NavButtons setSelectedButton={setSelectedButton} />
    </div>
  );
};

export default Nav;
