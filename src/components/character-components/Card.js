import "./Card.css";

const Card = ({ results }) => {
  let display = "No found!";

  if (results) {
    display = results.map((result) => {
      return (
        <div key={result.id} className="card">
          <img src={result.image} alt="~" className="card-image" />
          <div className="card-content">
            <div className="card-text">{result.name}</div>
            <div className="card-text">{result.species}</div>
            <div className="card-text">{result.status}</div>
          </div>
        </div>
      );
    });
  }

  return <div>{display}</div>;
};
export default Card;
