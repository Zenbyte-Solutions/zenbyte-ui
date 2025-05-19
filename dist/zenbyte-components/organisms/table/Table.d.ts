import React from "react";
import { FilterSectionProps } from "../../molecules/filter-section/FilterSection";
import { PaginationProps } from "../../atoms/pagination/Pagination";
/**
 * Column definition for the Table component
 */
export interface TableColumn<T> {
    /**
     * Unique identifier for the column
     */
    id: string;
    /**
     * Header text to display
     */
    header: string;
    /**
     * Function to render the cell content
     */
    cell: (row: T, index: number) => React.ReactNode;
    /**
     * Whether the column is sortable
     */
    sortable?: boolean;
    /**
     * Custom header cell renderer
     */
    headerCell?: (column: TableColumn<T>) => React.ReactNode;
    /**
     * Column width (e.g., "200px" or "20%")
     */
    width?: string;
}
/**
 * Props for the Table component
 */
export interface TableProps<T> {
    /**
     * Array of data to display in the table
     */
    data: T[];
    /**
     * Columns configuration
     */
    columns: TableColumn<T>[];
    /**
     * Unique key for each row
     */
    getRowKey: (row: T, index: number) => string | number;
    /**
     * Function to handle row click
     */
    onRowClick?: (row: T, index: number) => void;
    /**
     * Selected row keys
     */
    selectedRowKeys?: (string | number)[];
    /**
     * Function to handle row selection
     */
    onRowSelect?: (selectedKeys: (string | number)[]) => void;
    /**
     * Whether the table has a striped pattern
     */
    striped?: boolean;
    /**
     * Whether to show the table header
     */
    showHeader?: boolean;
    /**
     * Current sort column
     */
    sortColumn?: string;
    /**
     * Current sort direction
     */
    sortDirection?: "asc" | "desc";
    /**
     * Function to handle sort change
     */
    onSortChange?: (column: string, direction: "asc" | "desc") => void;
    /**
     * Props for the filter section
     */
    filterProps?: Omit<FilterSectionProps, "onButtonClick"> & {
        show?: boolean;
        onFilter?: (filters: any) => void;
    };
    /**
     * Props for the pagination component
     */
    paginationProps?: Omit<PaginationProps, "onPageChange" | "onItemsPerPageChange"> & {
        show?: boolean;
        onPaginationChange?: (page: number, itemsPerPage: number) => void;
    };
    /**
     * Whether the table is loading
     */
    loading?: boolean;
    /**
     * Custom class name
     */
    className?: string;
    /**
     * Custom empty state component
     */
    emptyState?: React.ReactNode;
}
/**
 * Table component for displaying data in rows and columns
 */
export declare const Table: <T extends object>({ data, columns, getRowKey, onRowClick, selectedRowKeys, onRowSelect, striped, showHeader, sortColumn, sortDirection, onSortChange, filterProps, paginationProps, loading, className, emptyState, }: TableProps<T>) => import("react/jsx-runtime").JSX.Element;
export default Table;
