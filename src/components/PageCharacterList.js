import "./PageCharacterList.css";
import Card from "./Card";
import Pagination from "./Pagination";
import React, { useState, useEffect } from "react";

const PageCharacterList = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const { info, results } = fetchedData;
  const api = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="body">
      <div className="button-53">CHARACTERS</div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
};
export default PageCharacterList;
