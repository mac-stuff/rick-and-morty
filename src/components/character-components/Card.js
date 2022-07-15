import "./Card.css";

const Card = ({ results }) => {
  let display = "";

  if (results) {
    display = results.map((result) => {
      const { id, name, image, species, status } = result;

      return (
        <div key={id} className="card">
          <img src={image} alt="~" className="card-image" />
          <div className="card-content">
            <div className="card-text">{name}</div>
            <div className="card-text">{species}</div>
            <div className="card-text">{status}</div>
          </div>
        </div>
      );
    });
  } else {
    display = "No found!";
  }

  return <div>{display}</div>;
};
export default Card;
