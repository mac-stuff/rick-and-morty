import Character from "./Character";

const Characters = ({ results }) => {
  if (results) {
    return results.map((result) => {
      return <Character result={result} key={result.id} />;
    });
  } else {
    return <div>Not found</div>;
  }
};
export default Characters;
