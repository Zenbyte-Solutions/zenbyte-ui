import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Zenbyte/Atoms/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "filled",
        "hover",
        "focus",
        "disabled",
        "success",
        "info",
        "warning",
        "error",
      ],
      description: "The visual style variant of the textarea",
    },
    placeholder: {
      control: "text",
      description: "Custom placeholder text",
    },
    rows: {
      control: { type: "number", min: 2, max: 10 },
      description: "Number of rows to display",
    },
    value: {
      control: "text",
      description: "Initial value of the textarea",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

// Default story - shows just the default variant
export const Default: Story = {
  args: {
    variant: "default",
    placeholder: "Placeholder",
    rows: 4,
  },
};

export const FilledTextArea: Story = {
  args: {
    variant: "filled",
  },
};

export const HoverTextArea: Story = {
  args: {
    variant: "hover",
  },
};

export const FocusTextArea: Story = {
  args: {
    variant: "focus",
    value: "Typing",
  },
};

export const DisabledTextArea: Story = {
  args: {
    variant: "disabled",
  },
};

export const SuccessTextArea: Story = {
  args: {
    variant: "success",
  },
};

export const InfoTextArea: Story = {
  args: {
    variant: "info",
  },
};

export const WarningTextArea: Story = {
  args: {
    variant: "warning",
  },
};

export const ErrorTextArea: Story = {
  args: {
    variant: "error",
  },
};
