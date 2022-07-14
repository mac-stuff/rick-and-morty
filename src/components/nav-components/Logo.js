import "./Logo.css";

const Logo = ({ logo, logoText }) => {
  return (
    <div className="logo">
      {logo ? "NOWE LOGO " + logoText : "LOGO " + logoText}
    </div>
  );
};

export default Logo;
