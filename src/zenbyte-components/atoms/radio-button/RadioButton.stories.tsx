import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Zenbyte/Atoms/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Placeholder",
    },
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    focused: {
      control: "boolean",
    },
    variant: {
      options: ["radio-only", "text-right", "text-left"],
      control: { type: "select" },
      defaultValue: "text-right",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

// Variant Stories
export const RadioOnly: Story = {
  args: {
    variant: "radio-only",
  },
};

export const TextRight: Story = {
  args: {
    variant: "text-right",
    label: "Placeholder",
  },
};

export const TextLeft: Story = {
  args: {
    variant: "text-left",
    label: "Placeholder",
  },
};

// State Stories
export const Default: Story = {
  args: {
    label: "Placeholder",
  },
};

export const Hover: Story = {
  args: {
    label: "Placeholder",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  args: {
    label: "Placeholder",
    focused: true,
  },
};

export const Selected: Story = {
  args: {
    label: "Placeholder",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Placeholder",
    disabled: true,
  },
};
