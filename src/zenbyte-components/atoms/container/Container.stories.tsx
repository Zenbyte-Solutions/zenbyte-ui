import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";
import { FileText, Plus, Upload } from "lucide-react";
import { Button } from "../button/Button";
import { Table } from "../../organisms/table/Table";
import React from "react";

const meta: Meta<typeof Container> = {
  title: "Zenbyte/Atoms/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
    shadow: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl", "none"],
      description: "Shadow size for the container",
    },
    backgroundColor: {
      control: { type: "select" },
      options: ["white", "stone-100", "indigo-50"],
      description: "Background color variant",
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Content alignment",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    title: "No projects found",
    description: "Create your first project to get started",
    shadow: "md",
  },
};

export const WithIcon: Story = {
  args: {
    title: "No documents",
    description: "Upload your first document to begin organizing",
    icon: <FileText className="w-6 h-6" />,
    shadow: "lg",
  },
};

export const WithAction: Story = {
  args: {
    title: "Empty dashboard",
    description: "Add some widgets to customize your view",
    icon: <Plus className="w-6 h-6" />,
    action: <Button variant="filled">Create Widget</Button>,
    shadow: "xl",
  },
};

export const Minimal: Story = {
  args: {
    title: "Drop files here",
    description: "Or click to browse your computer",
    shadow: "sm",
    backgroundColor: "indigo-50",
    icon: <Upload className="w-6 h-6" />,
  },
};

export const NoShadow: Story = {
  args: {
    title: "Recent activity will appear here",
    description: "As you use the system, we'll show your recent actions",
    shadow: "none",
    backgroundColor: "stone-100",
  },
};

export const LeftAligned: Story = {
  args: {
    title: "Left-aligned content",
    description: "This content is aligned to the left side",
    align: "left",
    shadow: "md",
  },
};

const users = Array.from({ length: 5 }).map((_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: index % 3 === 0 ? "Admin" : index % 3 === 1 ? "Editor" : "User",
  status: index % 4 === 0 ? "inactive" : "active",
  company: `Company ${index + 1}`,
}));

export const WithChildren: Story = {
  args: {
    title: "User List",
    description:
      "Below is a table of users. Add new users or view existing ones.",
    shadow: "md",
    align: "left",
    
    children: (
      <>
        <Table className="md:max-w-[49%] max-w-full"
          data={users} // Gebruik de 'users' data hier
          columns={[
            { id: "name", header: "Name", cell: (row) => row.name },
            { id: "email", header: "Email", cell: (row) => row.email },
            { id: "role", header: "Role", cell: (row) => row.role },
            { id: "status", header: "Status", cell: (row) => row.status },
            { id: "company", header: "Company", cell: (row) => row.company },
          ]}
          getRowKey={(row) => row.id}
        />
        <Table className="md:max-w-[49%] max-w-full"
          data={users} // Gebruik de 'users' data hier
          columns={[
            { id: "name", header: "Name", cell: (row) => row.name },
            { id: "email", header: "Email", cell: (row) => row.email },
            { id: "role", header: "Role", cell: (row) => row.role },
            { id: "status", header: "Status", cell: (row) => row.status },
            { id: "company", header: "Company", cell: (row) => row.company },
          ]}
          getRowKey={(row) => row.id}
        />
      </>
    ),
  },
};
