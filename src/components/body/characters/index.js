import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import CharacterPagination from "./CharacterPagination";
import { Grid } from "@mui/material";

const Characters = () => {
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
    <Grid
      item
      xs={12}
      sx={{
        backgroundColor: "#FF0099",
        borderRadius: "15px",
        padding: "15px",
        margin: "2px",
        justifyItems: "center",
      }}
    >
      <Grid container>
        <CharacterCard results={results} />
      </Grid>
      <CharacterPagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </Grid>
  );
};

export default Characters;
