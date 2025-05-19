// src/components/organisms/Table/Table.tsx
import React, { useState, useMemo } from "react";
import FilterSection, {
  FilterSectionProps,
} from "../../molecules/filter-section/FilterSection";
import Pagination, { PaginationProps } from "../../atoms/pagination/Pagination";

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
  paginationProps?: Omit<
    PaginationProps,
    "onPageChange" | "onItemsPerPageChange"
  > & {
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
export const Table = <T extends object>({
  data,
  columns,
  getRowKey,
  onRowClick,
  selectedRowKeys = [],
  onRowSelect,
  striped = true,
  showHeader = true,
  sortColumn,
  sortDirection,
  onSortChange,
  filterProps,
  paginationProps,
  loading = false,
  className = "",
  emptyState,
}: TableProps<T>) => {
  // Local state for pagination if not controlled externally
  const [currentPage, setCurrentPage] = useState(
    paginationProps?.currentPage || 1
  );
  const [itemsPerPage, setItemsPerPage] = useState(
    paginationProps?.itemsPerPage || 10
  );

  // Handle row selection
  const handleRowSelect = (rowKey: string | number) => {
    if (!onRowSelect) return;

    const newSelectedKeys = selectedRowKeys.includes(rowKey)
      ? selectedRowKeys.filter((key) => key !== rowKey)
      : [...selectedRowKeys, rowKey];

    onRowSelect(newSelectedKeys);
  };

  // Handle sort change
  const handleSortChange = (columnId: string) => {
    if (!onSortChange) return;

    let newDirection: "asc" | "desc" = "asc";

    if (sortColumn === columnId) {
      newDirection = sortDirection === "asc" ? "desc" : "asc";
    }

    onSortChange(columnId, newDirection);
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    if (paginationProps?.onPaginationChange) {
      paginationProps.onPaginationChange(page, itemsPerPage);
    }
  };

  // Handle items per page change
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);

    if (paginationProps?.onPaginationChange) {
      paginationProps.onPaginationChange(1, newItemsPerPage);
    }
  };

  // Calculate paginated data
  const paginatedData = useMemo(() => {
    if (!paginationProps?.show) return data;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return data.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage, paginationProps?.show]);

  // Render the table header
  const renderTableHeader = () => {
    if (!showHeader) return null;

    return (
      <thead>
        <tr className="bg-white border-b border-zb-gray-200">
          {columns.map((column) => {
            const isSorted = sortColumn === column.id;
            const sortIcon = isSorted
              ? sortDirection === "asc"
                ? "↑"
                : "↓"
              : null;

            if (column.headerCell) {
              return (
                <th
                  key={column.id}
                  className="px-4 py-3 text-left font-medium text-zb-desktop-label text-zb-gray-700"
                  style={{ width: column.width }}
                >
                  {column.headerCell(column)}
                </th>
              );
            }

            return (
              <th
                key={column.id}
                className={`px-4 py-3 text-left font-medium text-zb-desktop-label text-zb-gray-700 ${
                  column.sortable ? "cursor-pointer hover:bg-zb-gray-100" : ""
                }`}
                onClick={
                  column.sortable
                    ? () => handleSortChange(column.id)
                    : undefined
                }
                style={{ width: column.width }}
              >
                <div className="flex items-center space-x-1">
                  <span>{column.header}</span>
                  {column.sortable && (
                    <span
                      className={`transition-colors text-xs ${
                        isSorted ? "text-zb-indigo-600" : "text-zb-gray-400"
                      }`}
                    >
                      {sortIcon || "⇅"}
                    </span>
                  )}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
    );
  };

  // Render empty state
  const renderEmptyState = () => {
    if (loading) {
      return (
        <tr>
          <td
            colSpan={columns.length}
            className="px-4 py-8 text-center text-zb-desktop-bodyRegular text-zb-gray-500"
          >
            Loading...
          </td>
        </tr>
      );
    }

    if (data.length === 0) {
      return (
        <tr>
          <td
            colSpan={columns.length}
            className="px-4 py-8 text-center text-zb-desktop-bodyRegular text-zb-gray-500"
          >
            {emptyState || "No data available"}
          </td>
        </tr>
      );
    }

    return null;
  };

  return (
    <div className={`flex flex-col w-full ${className}`}>
      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-zb-gray-200">
        {/* Filter section */}
        {filterProps?.show && (
          <FilterSection
            {...filterProps}
            onPrimaryButtonClick={() =>
              filterProps.onFilter?.({
                search: filterProps.searchValue,
                attribute: filterProps.attributeValue,
                property: filterProps.propertyValue,
              })
            }
            onSecondaryButtonClick={() => {
              filterProps.onSearchClear?.();
            }}
          />
        )}
        <table className="w-full table-auto">
          {renderTableHeader()}
          <tbody>
            {renderEmptyState() ||
              paginatedData.map((row, rowIndex) => {
                const rowKey = getRowKey(row, rowIndex);
                const isSelected = selectedRowKeys.includes(rowKey);

                return (
                  <tr
                    key={rowKey}
                    className={`
                      border-b border-zb-gray-200 last:border-b-0
                      ${onRowClick ? "cursor-pointer hover:bg-zb-gray-50" : ""}
                      ${isSelected ? "bg-zb-indigo-50" : ""}
                      ${striped && rowIndex % 2 === 1 ? "bg-zb-gray-50" : ""}
                    `}
                    onClick={() => {
                      if (onRowClick) onRowClick(row, rowIndex);
                      if (onRowSelect) handleRowSelect(rowKey);
                    }}
                  >
                    {columns.map((column) => (
                      <td
                        key={`${rowKey}-${column.id}`}
                        className="px-4 py-3 text-zb-desktop-bodyRegular text-zb-gray-900"
                      >
                        {column.cell(row, rowIndex)}
                      </td>
                    ))}
                  </tr>
                );
              })}
          </tbody>
        </table>
        {/* Pagination */}
        {paginationProps?.show && (
          <div className="m-4">
            <Pagination
              currentPage={currentPage}
              totalItems={data.length}
              itemsPerPage={itemsPerPage}
              itemsPerPageOptions={paginationProps.itemsPerPageOptions}
              onPageChange={handlePageChange}
              onItemsPerPageChange={handleItemsPerPageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
