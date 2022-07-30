const Person = ({ result: { id, image, name, species, status } }) => {
  return (
    <div key={id} className="person">
      <img src={image} alt="~" className="person-image" />
      <div className="person-content">
        <div className="person-text">{name}</div>
        <div className="person-text">{species}</div>
        <div className="person-text">{status}</div>
      </div>
    </div>
  );
};

export default Person;
