import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
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
  );
};

export default Pagination;
