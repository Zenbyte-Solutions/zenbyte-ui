import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";
import React from "react";

/**
 * Spinner component meta information
 */
const meta = {
  title: "Zenbyte/Atoms/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A circular loading indicator with configurable sizes and speeds.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Size of the spinner",
    },
    color: {
      control: "text",
      description: "Color of the spinner (Tailwind color class)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    strokeWidth: {
      control: "number",
      description: "Width of the spinner stroke",
    },
    speed: {
      control: { type: "select" },
      options: ["slow", "default", "fast"],
      description: "Speed of the spinner rotation",
    },
    ariaLabel: {
      control: "text",
      description: "Accessibility label for the spinner",
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default spinner at medium size
 */
export const Default: Story = {
  args: {
    size: "md",
    color: "indigo-600",
    speed: "default",
  },
};

/**
 * Extra small spinner
 */
export const ExtraSmall: Story = {
  args: {
    size: "xs",
    color: "indigo-600",
  },
};

/**
 * Small spinner
 */
export const Small: Story = {
  args: {
    size: "sm",
    color: "indigo-600",
  },
};

/**
 * Medium spinner (default)
 */
export const Medium: Story = {
  args: {
    size: "md",
    color: "indigo-600",
  },
};

/**
 * Large spinner
 */
export const Large: Story = {
  args: {
    size: "lg",
    color: "indigo-600",
  },
};
