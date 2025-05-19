// src/components/organisms/Table/Table.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { useState } from "react";
import React from "react";

// Sample data interface
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  lastLogin: Date;
}

// Sample data
const users: User[] = Array.from({ length: 50 }).map((_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: index % 3 === 0 ? "Admin" : index % 3 === 1 ? "Editor" : "User",
  status: index % 4 === 0 ? "inactive" : "active",
  lastLogin: new Date(
    Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
  ),
}));

const meta: Meta<typeof Table> = {
  title: "Zenbyte/Organisms/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table<User>>;

// Basic table story
export const Default: Story = {
  args: {
    data: users.slice(0, 5),
    columns: [
      {
        id: "name",
        header: "Name",
        cell: (row) => row.name,
      },
      {
        id: "email",
        header: "Email",
        cell: (row) => row.email,
      },
      {
        id: "role",
        header: "Role",
        cell: (row) => row.role,
      },
      {
        id: "status",
        header: "Status",
        cell: (row) => (
          <span
            className={`inline-flex px-2 py-1 text-zb-desktop-captionMedium rounded-full ${
              row.status === "active"
                ? "bg-zb-emerald-400 bg-opacity-10 text-zb-emerald-400"
                : "bg-zb-coral-50 text-zb-coral-400"
            }`}
          >
            {row.status}
          </span>
        ),
      },
    ],
    getRowKey: (row) => row.id,
  },
};

// Table with all features enabled
export const FullFeatured: Story = {
  render: () => {
    // Use state to track sorting, pagination, and filtering
    const [sortColumn, setSortColumn] = useState<string>("name");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchValue, setSearchValue] = useState("");
    const [propertyValue, setPropertyValue] = useState("contains");
    const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
    const [filteredData, setFilteredData] = useState(users);

    // Handle sort change
    const handleSortChange = (column: string, direction: "asc" | "desc") => {
      setSortColumn(column);
      setSortDirection(direction);

      // Sort data
      const sortedData = [...filteredData].sort((a, b) => {
        const aValue = a[column as keyof User];
        const bValue = b[column as keyof User];

        if (direction === "asc") {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });

      setFilteredData(sortedData);
    };

    // Handle pagination change
    const handlePaginationChange = (page: number, perPage: number) => {
      setCurrentPage(page);
      setItemsPerPage(perPage);
    };

    // Handle filtering
    const handleFilter = (filters: any) => {
      const { search } = filters;

      if (!search) {
        setFilteredData(users);
        return;
      }

      const filtered = users.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase()) ||
          user.role.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredData(filtered);
      setCurrentPage(1); // Reset to first page when filtering
    };

    return (
      <div className="w-full max-w-5xl">
        <Table<User>
          data={filteredData}
          columns={[
            {
              id: "name",
              header: "Name",
              cell: (row) => row.name,
              sortable: true,
              width: "25%",
            },
            {
              id: "email",
              header: "Email",
              cell: (row) => row.email,
              sortable: true,
              width: "30%",
            },
            {
              id: "role",
              header: "Role",
              cell: (row) => row.role,
              sortable: true,
              width: "15%",
            },
            {
              id: "status",
              header: "Status",
              cell: (row) => (
                <span
                  className={`inline-flex px-2 py-1 text-zb-desktop-captionMedium rounded-full ${
                    row.status === "active"
                      ? "bg-zb-emerald-400 bg-opacity-10 text-zb-emerald-400"
                      : "bg-zb-coral-50 text-zb-coral-400"
                  }`}
                >
                  {row.status}
                </span>
              ),
              width: "15%",
            },
            {
              id: "lastLogin",
              header: "Last Login",
              cell: (row) => row.lastLogin.toLocaleDateString(),
              sortable: true,
              width: "15%",
            },
          ]}
          getRowKey={(row) => row.id}
          onRowClick={(row) => console.log("Row clicked:", row)}
          selectedRowKeys={selectedRowKeys}
          //   onRowSelect={setSelectedRowKeys}
          striped={true}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          onSortChange={handleSortChange}
          filterProps={{
            show: true,
            searchPlaceholder: "Search users...",
            searchValue,
            onSearchChange: setSearchValue,
            onSearchClear: () => setSearchValue(""),
            propertyValue,
            onPropertyChange: setPropertyValue,
            propertyOptions: [
              { label: "Contains", value: "contains" },
              { label: "Equals", value: "equals" },
              { label: "Starts with", value: "startsWith" },
            ],
            primaryButtonText: "Apply Filter",
            secondaryButtonText: "Reset Filter",
            onFilter: handleFilter,
          }}
          paginationProps={{
            show: true,
            currentPage,
            totalItems: filteredData.length,
            itemsPerPage,
            itemsPerPageOptions: [5, 10, 20, 50],
            onPaginationChange: handlePaginationChange,
          }}
        />
      </div>
    );
  },
};

// Table with loading state
export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

// Empty table
export const Empty: Story = {
  args: {
    ...Default.args,
    data: [],
    emptyState: (
      <div className="flex flex-col items-center justify-center py-8">
        <svg
          className="w-16 h-16 text-zb-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <h3 className="mt-4 text-zb-desktop-subtitleLarge text-zb-gray-700">
          No data available
        </h3>
        <p className="mt-1 text-zb-desktop-bodyRegular text-zb-gray-500">
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </div>
    ),
  },
};

// Custom styling
export const CustomStyling: Story = {
  args: {
    ...Default.args,
    className: "border-2 border-zb-indigo-500 rounded-xl overflow-hidden",
    striped: false,
  },
};
