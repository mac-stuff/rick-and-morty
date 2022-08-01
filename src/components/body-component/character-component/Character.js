import React, { useState, useEffect } from "react";
import Characters from "./Characters";
import CharactersPagination from "./CharactersPagination";
import { Grid } from "@mui/material";

const Character = () => {
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
    <Grid container>
      <Characters results={results} />
      <CharactersPagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </Grid>
  );
};

export default Character;
