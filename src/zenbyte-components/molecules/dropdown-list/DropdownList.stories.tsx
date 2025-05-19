// src/components/DropdownList/DropdownList.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { DropdownList } from "./DropdownList";

const meta: Meta<typeof DropdownList> = {
  title: "Zenbyte/Molecules/DropdownList",
  component: DropdownList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: "object",
      defaultValue: [
        { label: "List Option 1", value: "1" },
        { label: "List Option 2", value: "2" },
        { label: "List Option 3", value: "3" },
        { label: "List Option 4", value: "4", disabled: true },
        { label: "List Option 5", value: "5" },
      ],
    },
    value: {
      control: "text",
    },
    placeholder: {
      control: "text",
      defaultValue: "Select an option",
    },
    disabled: {
      control: "boolean",
    },
    errorMessage: {
      control: "text",
    },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownList>;

export const Default: Story = {
  args: {
    options: [
      { label: "List Option 1", value: "1" },
      { label: "List Option 2", value: "2" },
      { label: "List Option 3", value: "3" },
      { label: "List Option 4", value: "4", disabled: true },
      { label: "List Option 5", value: "5" },
    ],
  },
};

export const WithSelection: Story = {
  args: {
    ...Default.args,
    value: "2",
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Empty: Story = {
  args: {
    options: [],
    placeholder: "No options available",
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    errorMessage: "Please select an option",
  },
};
