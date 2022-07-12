import "./Logo.css";

const Logo = (props) => {
  return (
    <div className="logo">
      <img src={props.logo} width="150" height="75" alt="" />
    </div>
  );
};

export default Logo;
