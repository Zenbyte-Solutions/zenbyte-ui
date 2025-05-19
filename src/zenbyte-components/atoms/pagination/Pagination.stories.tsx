// src/components/atoms/Pagination/Pagination.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";
import React, { useState } from "react";

const meta: Meta<typeof Pagination> = {
  title: "Zenbyte/Atoms/Pagination",
  component: Pagination,
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1 },
    },
    totalItems: {
      control: { type: "number", min: 0 },
    },
    itemsPerPage: {
      control: { type: "number", min: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// Basic example
export const Basic: Story = {
  args: {
    currentPage: 1,
    totalItems: 13,
    itemsPerPage: 5,
  },
};

// Interactive example
export const Interactive: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    return (
      <Pagination
        currentPage={page}
        totalItems={args.totalItems || 13}
        itemsPerPage={perPage}
        onPageChange={setPage}
        onItemsPerPageChange={setPerPage}
      />
    );
  },
};

// Many items example
export const ManyItems: Story = {
  args: {
    currentPage: 42,
    totalItems: 1000,
    itemsPerPage: 20,
  },
};

// Single page example
export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalItems: 3,
    itemsPerPage: 5,
  },
};
