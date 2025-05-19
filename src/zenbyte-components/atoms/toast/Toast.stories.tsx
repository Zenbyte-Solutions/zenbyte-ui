import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";
import React from "react";

/**
 * Toast component - Metadata
 *
 * Displays informational messages, alerts, and notifications as temporary pop-ups.
 * Toasts are used to communicate brief messages to users without interrupting their workflow.
 */
const meta: Meta<typeof Toast> = {
  title: "Zenbyte/Atoms/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Toast components are used to display brief notifications or messages to the user. Available in multiple variants to indicate different states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the toast message",
    },
    description: {
      control: "text",
      description: "Optional description or supplementary text",
    },
    variant: {
      control: "select",
      options: ["general", "info", "success", "alert", "error"],
      description: "Visual style variant of the toast",
    },
    dismissible: {
      control: "boolean",
      description: "Whether the toast has a dismiss button",
    },
    onDismiss: {
      action: "dismissed",
      description: "Function called when the toast is dismissed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

/**
 * General Toast - Purple variant for general notifications
 */
export const General: Story = {
  args: {
    title: "Title",
    description: "Get immediate alerts and a notification badge.",
    variant: "general",
  },
};

/**
 * Info Toast - Blue variant for informational messages
 */
export const Info: Story = {
  args: {
    title: "Title",
    description: "Get immediate alerts and a notification badge.",
    variant: "info",
  },
};

/**
 * Success Toast - Green variant to confirm successful completion of an action
 */
export const Success: Story = {
  args: {
    title: "Title",
    description: "Get immediate alerts and a notification badge.",
    variant: "success",
  },
};

/**
 * Alert Toast - Yellow variant for warning messages that require attention
 */
export const Alert: Story = {
  args: {
    title: "Title",
    description: "Get immediate alerts and a notification badge.",
    variant: "alert",
  },
};

/**
 * Error Toast - Red variant to communicate errors or problems
 */
export const Error: Story = {
  args: {
    title: "Title",
    description: "Get immediate alerts and a notification badge.",
    variant: "error",
  },
};
