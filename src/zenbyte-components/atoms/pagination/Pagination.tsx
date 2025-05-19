// src/components/atoms/Pagination/Pagination.tsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  /** Current page number (1-based) */
  currentPage: number;
  /** Total number of items */
  totalItems: number;
  /** Number of items per page */
  itemsPerPage: number;
  /** Available items per page options */
  itemsPerPageOptions?: number[];
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Callback when items per page changes */
  onItemsPerPageChange?: (itemsPerPage: number) => void;
  /** Custom class name */
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage = 10,
  itemsPerPageOptions = [5, 10, 20, 50],
  onPageChange,
  onItemsPerPageChange,
  className = "",
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = Number(e.target.value);
    if (onItemsPerPageChange) {
      onItemsPerPageChange(newItemsPerPage);
    }
    // Reset to first page when changing items per page
    onPageChange(1);
  };

  return (
    <div className={`flex items-center justify-end gap-4 ${className}`}>
      {/* Items per page selector */}
      <div className="flex items-center space-x-2">
        <span className="text-zb-desktop-bodySmallRegular text-zb-gray-700">
          Rows per page:
        </span>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="border border-zb-gray-200 rounded-md px-2 py-1 text-zb-desktop-bodySmallRegular bg-white focus:border-zb-indigo-400 focus:outline-none focus:ring-1 focus:ring-zb-indigo-400"
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Page info */}
      <span className="text-zb-desktop-bodySmallRegular text-zb-gray-700">
        {startItem}-{endItem} of {totalItems}
      </span>

      {/* Navigation buttons */}
      <div className="flex space-x-2">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`p-1 rounded-md ${
            currentPage === 1
              ? "text-zb-gray-300 cursor-not-allowed"
              : "text-zb-gray-700 hover:bg-zb-gray-100"
          }`}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`p-1 rounded-md ${
            currentPage === totalPages
              ? "text-zb-gray-300 cursor-not-allowed"
              : "text-zb-gray-700 hover:bg-zb-gray-100"
          }`}
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
