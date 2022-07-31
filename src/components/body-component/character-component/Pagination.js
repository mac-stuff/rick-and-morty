import ReactPaginate from "react-paginate";
import { Grid } from "@mui/material";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  console.log(info);
  console.log(pageNumber);

  return (
    <Grid item>
      <ReactPaginate
        previosLabel="Prev"
        nextLabel="Next"
        pageCount={info?.pages}
        onPageChange={(data) => setPageNumber(data.selected + 1)}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </Grid>
  );
};

export default Pagination;
