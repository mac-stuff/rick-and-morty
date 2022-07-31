import { Grid, Pagination } from "@mui/material";

const CharactersPagination = ({ info, setPageNumber }) => {
  const onChangeHandler = (event, page) => {
    setPageNumber(page);
  };
  return (
    <Grid item>
      <Pagination
        count={info?.pages}
        color="primary"
        onChange={onChangeHandler}
      />
    </Grid>
  );
};

export default CharactersPagination;
