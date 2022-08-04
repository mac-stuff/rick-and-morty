import { Grid, Pagination } from "@mui/material";

const CharacterPagination = ({ info, setPageNumber }) => {
  const onChangeHandler = (event, page) => {
    setPageNumber(page);
  };

  return (
    <Grid
      sx={{
        borderRadius: "15px",
        margin: "1px",
        padding: "15px",
      }}
    >
      <Pagination
        count={info?.pages}
        color="primary"
        onChange={onChangeHandler}
      />
    </Grid>
  );
};

export default CharacterPagination;
