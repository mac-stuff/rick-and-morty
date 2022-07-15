import "./PageCharacterList.css";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

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
    <div className="wrapper">
      <div className="header">Rick and Morty characters</div>
      <div className="main">
        <Card results={results} />
      </div>
      <div className="footer">
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
