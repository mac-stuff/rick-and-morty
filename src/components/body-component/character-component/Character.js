import React, { useState, useEffect } from "react";
import Characters from "./Characters";
import Pagination from "./Pagination";
import { Container, Grid } from "@mui/material";

const CharacterList = () => {
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
    <Container>
      <Grid container>
        <Characters results={results} />
      </Grid>
      <Grid container>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </Grid>
    </Container>
  );
};

export default CharacterList;
