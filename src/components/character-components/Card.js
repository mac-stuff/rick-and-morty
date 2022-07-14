const Card = ({ results }) => {
  let display = "";

  if (results) {
    display = results.map((result) => {
      const { id, name, image, species, status } = result;

      return (
        <div key={id} className="col-4">
          <div className="">
            <img src={image} alt="" className="img-fluid" />
            <div className="content">
              <div className="fs-4">{name}</div>
              <div className="fs-5">
                <div>{species}</div>
                <div>{status}</div>
              </div>
            </div>
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
