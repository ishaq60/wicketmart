"use client"
import { useState } from 'react';

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFirst = () => {
    setCurrentPage(1);
  };

  const handleLast = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div className="flex items-center justify-center p-8 ">
      <div className="flex items-center space-x-0">
        {/* First Button */}
        <button
          onClick={handleFirst}
          className="px-8 py-4 text-black bg-white border border-gray-300 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={currentPage === 1}
        >
          First
        </button>

        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="px-8 py-4 text-black bg-white border-l-0 border border-gray-300 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-8 py-4 border-l-0 border hover:text-red-500 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
              currentPage === page
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-700 hover:text-red-500'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="px-8 py-4 text-black bg-white border-l-0 border border-gray-300 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={currentPage === totalPages}
        >
          Next
        </button>

        {/* Last Button */}
        <button
          onClick={handleLast}
          className="px-8 py-4 text-black bg-white border-l-0 border border-gray-300 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      </div>
    </div>
  );
}