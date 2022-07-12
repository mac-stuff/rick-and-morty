import "./PageAboutMe.css";

const PageAboutMe = ({ image, name, cv }) => {
  return (
    <div className="body">
      <img src={image} alt="" className="image" />
      <div className="data-container">
        <div className="button-53">{name}</div>
        <div className="text">{cv}</div>
      </div>
    </div>
  );
};
export default PageAboutMe;
