import { Grid, Pagination } from "@mui/material";

const CharactersPagination = ({ info, setPageNumber }) => {
  const onChangeHandler = (event, page) => {
    setPageNumber(page);
  };
  return (
    <Grid
      style={{
        borderRadius: "15px",
        margin: "1px",
        padding: "15px",
        backgroundColor: "tomato",
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

export default CharactersPagination;
