import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import React, { useState } from "react";
import Button from "../../atoms/button/Button";

/**
 * Modal component for displaying information or actions that require attention.
 *
 * This component provides a reusable modal dialog that can be used for notifications,
 * confirmations, or any other content that requires user focus.
 */
const meta: Meta<typeof Modal> = {
  title: "Zenbyte/Organisms/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title displayed at the top of the modal",
    },
    content: {
      control: "text",
      description: "The main content of the modal",
    },
    isOpen: {
      control: "boolean",
      description: "Controls whether the modal is visible",
    },
    onClose: {
      description: "Function called when the close button is clicked",
    },
    onAction: {
      description: "Function called when the primary action button is clicked",
    },
    actionText: {
      control: "text",
      description: "Text displayed on the primary action button",
    },
    actionVariant: {
      control: { type: "select" },
      options: ["filled", "border", "text"],
      description: "Variant for the primary action button",
    },
    actionColor: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "danger",
        "success",
        "warning",
        "error",
        "alert",
      ],
      description: "Color for the primary action button",
    },
    secondaryActionText: {
      control: "text",
      description: "Text displayed on the secondary action button",
    },
    secondaryActionVariant: {
      control: { type: "select" },
      options: ["filled", "border", "text"],
      description: "Variant for the secondary action button",
    },
    secondaryActionColor: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "danger",
        "success",
        "warning",
        "error",
        "alert",
      ],
      description: "Color for the secondary action button",
    },
    onSecondaryAction: {
      description:
        "Function called when the secondary action button is clicked",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

/**
 * The most basic example of a modal with primary and secondary actions.
 */
export const Default: Story = {
  args: {
    title: "Important Information",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus commodo turpis, quis bibendum lectus porttitor eget.",
    isOpen: true,
    actionText: "Agree",
    actionVariant: "filled",
    actionColor: "primary",
    secondaryActionText: "Info",
    secondaryActionVariant: "text",
    secondaryActionColor: "primary",
    onClose: () => console.log("Close clicked"),
    onAction: () => console.log("Primary action clicked"),
    onSecondaryAction: () => console.log("Secondary action clicked"),
  },
};

/**
 * Example of a modal with only a primary action button.
 */
export const SingleAction: Story = {
  args: {
    title: "Confirm Action",
    content: "Are you sure you want to proceed with this action?",
    isOpen: true,
    actionText: "Proceed",
    actionVariant: "filled",
    actionColor: "primary",
    onClose: () => console.log("Close clicked"),
    onAction: () => console.log("Primary action clicked"),
    onSecondaryAction: undefined,
  },
};

/**
 * Modal with longer content.
 */
export const LongContent: Story = {
  args: {
    title: "Terms and Conditions",
    content: (
      <div className="overflow-y-auto max-h-64">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="mb-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p className="mb-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <p className="mb-4">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    ),
    isOpen: true,
    actionText: "Accept",
    actionVariant: "filled",
    actionColor: "primary",
    secondaryActionText: "Decline",
    secondaryActionVariant: "text",
    secondaryActionColor: "primary",
    onClose: () => console.log("Close clicked"),
    onAction: () => console.log("Accept clicked"),
    onSecondaryAction: () => console.log("Decline clicked"),
  },
};

/**
 * Interactive example showing how to toggle the modal.
 */
const InteractiveModalTemplate = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        variant="filled"
        color="primary"
        onClick={() => setIsOpen(true)}
        size="large"
      >
        Open Modal
      </Button>

      <Modal
        title="Interactive Modal"
        content="This modal can be opened and closed with state management."
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAction={() => {
          console.log("Action clicked");
          setIsOpen(false);
        }}
        actionText="Close"
        actionVariant="filled"
        actionColor="primary"
        onSecondaryAction={() => console.log("Secondary action clicked")}
        secondaryActionText="Learn More"
        secondaryActionVariant="text"
        secondaryActionColor="primary"
      />
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveModalTemplate />,
  parameters: {
    docs: {
      story: {
        inline: false,
        height: "300px",
      },
    },
  },
};

/**
 * Example of a warning modal.
 */
export const Warning: Story = {
  args: {
    title: "Warning",
    content: (
      <div className="flex items-start">
        <div className="mt-1 mr-4 text-amber-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
        <p>
          This action will permanently delete this item. This cannot be undone.
        </p>
      </div>
    ),
    isOpen: true,
    actionText: "Delete",
    actionVariant: "filled",
    actionColor: "error",
    secondaryActionText: "Cancel",
    secondaryActionVariant: "text",
    secondaryActionColor: "secondary",
    onClose: () => console.log("Close clicked"),
    onAction: () => console.log("Delete clicked"),
    onSecondaryAction: () => console.log("Cancel clicked"),
  },
};

/**
 * Example of a success modal.
 */
export const Success: Story = {
  args: {
    title: "Success",
    content: (
      <div className="flex items-start">
        <div className="mt-1 mr-4 text-emerald-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <p>Your changes have been successfully saved!</p>
      </div>
    ),
    isOpen: true,
    actionText: "Continue",
    actionVariant: "filled",
    actionColor: "success",
    onClose: () => console.log("Close clicked"),
    onAction: () => console.log("Continue clicked"),
    onSecondaryAction: undefined,
  },
};

/**
 * Example of an alert modal.
 */
export const Alert: Story = {
  args: {
    title: "Alert",
    content: (
      <div className="flex items-start">
        <div className="mt-1 mr-4 text-amber-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <p>Your session will expire in 5 minutes. Do you want to continue?</p>
      </div>
    ),
    isOpen: true,
    actionText: "Continue",
    actionVariant: "filled",
    actionColor: "alert",
    secondaryActionText: "Logout",
    secondaryActionVariant: "border",
    secondaryActionColor: "secondary",
    onClose: () => console.log("Close clicked"),
    onAction: () => console.log("Continue Session clicked"),
    onSecondaryAction: () => console.log("Logout clicked"),
  },
};
