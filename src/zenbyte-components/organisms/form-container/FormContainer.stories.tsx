import type { Meta, StoryObj } from "@storybook/react";
import CreateItemModal from "./FormContainer";

const meta: Meta<typeof CreateItemModal> = {
  title: "Zenbyte/Organisms/CreateItemModal",
  component: CreateItemModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClose: { action: "closed" },
    onSubmit: { action: "submitted" },
  },
};

export default meta;
type Story = StoryObj<typeof CreateItemModal>;

/**
 * Default view of the Create Item Modal
 */
export const Default: Story = {
  args: {
    onClose: () => console.log("Modal closed"),
    onSubmit: (data) => console.log("Form submitted", data),
  },
};

/**
 * Modal with validation errors
 */
export const WithErrors: Story = {
  args: {
    onClose: () => console.log("Modal closed"),
    onSubmit: (data) => console.log("Form submitted", data),
    initialErrors: {
      teamNumber: "Please do not use special characters.",
      location: "Please select a location to proceed.",
    },
  },
};

/**
 * Modal with pre-filled data
 */
export const WithPrefilledData: Story = {
  args: {
    onClose: () => console.log("Modal closed"),
    onSubmit: (data) => console.log("Form submitted", data),
    initialData: {
      teamNumber: "1234",
      workScope: "Development",
      date: "05/23/2025",
      location: "New York",
      category: "Engineering",
      selectedOption: "two" as const,
    },
  },
};
