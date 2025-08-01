"use client";

export default function Pagination({
  currentPage,
  totalPages,
  handlePageClick,
  handlePrevious,
  handleNext,
  handleFirst,
  handleLast,
}) {
  // Create array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex items-center space-x-0">
        <button
          onClick={handleFirst}
          disabled={currentPage === 1}
          className="px-8 py-4 border"
        >
          First
        </button>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-8 py-4 border"
        >
          Prev
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-8 py-4 border ${
              currentPage === page ? "bg-red-600 text-white" : ""
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-8 py-4 border"
        >
          Next
        </button>
        <button
          onClick={handleLast}
          disabled={currentPage === totalPages}
          className="px-8 py-4 border"
        >
          Last
        </button>
      </div>
    </div>
  );
}
