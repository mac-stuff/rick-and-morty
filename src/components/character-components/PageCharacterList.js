import "./PageCharacterList.css";
import Card from "./Card";
import Pagination from "../character-components/Pagination";
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
      <div className="title">Rick and Morty characters</div>
      <div className="card">
        <Card results={results} />
      </div>
      <div className="pagination">
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
