import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
  title: "Zenbyte/Atoms/FileUpload",
  component: FileUpload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the file upload component",
    },
    subtitle: {
      control: "text",
      description: "The subtitle or description text",
    },
    acceptedFormats: {
      control: { type: "object" },
      description: "Array of accepted file format strings",
    },
    maxFileSize: {
      control: { type: "number" },
      description: "Maximum file size in bytes (optional)",
    },
    onChange: {
      action: "files changed",
      description: "Callback when files are selected or dropped",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

// Default story
export const Default: Story = {
  args: {
    title: "File Upload",
    subtitle: "Adjust the width accordingly",
    acceptedFormats: ["JPEG", "PNG", "MP4", "PDF", "Excel", "Word", "PPT"],
  },
};

// Example with custom title and subtitle
export const CustomText: Story = {
  args: {
    title: "Upload Documents",
    subtitle: "Upload your identification documents here",
    acceptedFormats: ["PDF", "JPG", "PNG"],
  },
};
