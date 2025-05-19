import React from "react";
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
export declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
