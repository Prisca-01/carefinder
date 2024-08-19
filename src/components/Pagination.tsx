// components/Pagination.tsx
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="flex justify-center mt-8">
      <ul className="inline-flex -space-x-px">
        {[...Array(totalPages).keys()].map((num) => (
          <li key={num + 1}>
            <button
              onClick={() => handleClick(num + 1)}
              className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-200 ${
                currentPage === num + 1 && 'bg-blue-500 text-white'
              }`}
            >
              {num + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
