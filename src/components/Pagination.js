import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination"
      nextLabel="Next"
      previosLabel="Prev"
      onPageChange={(data) => setPageNumber(data.selected + 1)}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
