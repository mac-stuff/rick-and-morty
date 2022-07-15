import "./ChangeLogo.css";

const ChangeLogo = ({ setLogo, logo }) => {
  const onButtonClick = () => {
    {
      logo ? setLogo(false) : setLogo(true);
    }
  };
  return (
    <div className="button-container">
      <button className="button" onClick={onButtonClick}>
        change logo
      </button>
    </div>
  );
};

export default ChangeLogo;
