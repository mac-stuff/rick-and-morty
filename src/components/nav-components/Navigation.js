import "./Navigation.css";
import NavButtons from "./NavButtons";
import Logo from "./Logo";

const Navigation = ({ setSelectedButton, logo, logoText }) => {
  return (
    <div className="nav">
      <Logo logo={logo} logoText={logoText} />
      <NavButtons setSelectedButton={setSelectedButton} />
    </div>
  );
};

export default Navigation;
