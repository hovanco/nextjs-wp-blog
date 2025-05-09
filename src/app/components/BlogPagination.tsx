interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BlogPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: BlogPaginationProps) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <button
          key={i}
          className={`pagination-item ${i === currentPage ? "active" : ""}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return paginationItems;
  };

  return (
    <section className="pagination-section">
      <div className="container">
        <div className="pagination">
          <button onClick={handlePrevClick} disabled={currentPage === 1}>
            Prev
          </button>
          {renderPaginationItems()}
          <button
            className="btn-next"
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPagination;
