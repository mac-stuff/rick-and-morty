import "./Logo.css";

const Logo = ({ logo, logoText }) => {
  return (
    <div className="logo">
      <div>{logo ? "nowe logo " + logoText : "logo " + logoText}</div>
    </div>
  );
};

export default Logo;
