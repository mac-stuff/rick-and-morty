import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <div className="card-pagination">
      {/* <ReactPaginate
        className="pagination"
        nextLabel="Next"
        previosLabel="Prev"
        onPageChange={(data) => setPageNumber(data.selected + 1)}
        pageCount={info?.pages}
      /> */}
    </div>
  );
};

export default Pagination;
