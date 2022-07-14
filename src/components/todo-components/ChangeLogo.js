const ChangeLogo = ({ setLogo, logo }) => {
  const onButtonClick = () => {
    {
      logo ? setLogo(false) : setLogo(true);
    }
  };
  return (
    <div>
      <button className="button-53" onClick={onButtonClick}>
        change logo
      </button>
    </div>
  );
};

export default ChangeLogo;
