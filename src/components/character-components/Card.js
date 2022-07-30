import Person from "./Person";

const Card = ({ results }) => {
  let display = "No found!";

  if (results) {
    display = results.map((result) => {
      return <Person result={result} key={result.id} />;
    });
  }

  return <div>{display}</div>;
};
export default Card;
