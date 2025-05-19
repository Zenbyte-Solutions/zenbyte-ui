// src/components/MultiSelectDropdown/MultiSelectDropdown.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MultiSelectDropdown } from "./MultiSelectDropdown";
import { useState } from "react";
import React from "react";

const meta: Meta<typeof MultiSelectDropdown> = {
  title: "Zenbyte/Molecules/MultiSelectDropdown",
  component: MultiSelectDropdown,
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
    values: {
      control: "object",
    },
    placeholder: {
      control: "text",
      defaultValue: "Select options",
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
type Story = StoryObj<typeof MultiSelectDropdown>;

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

export const WithInitialSelection: Story = {
  args: {
    ...Default.args,
    values: ["1", "2"],
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    errorMessage: "Please select at least one option",
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [touched, setTouched] = useState(false);

    const handleChange = (values: string[]) => {
      setSelectedValues(values);
      setTouched(true);
    };

    const errorMessage =
      touched && selectedValues.length === 0
        ? "Please select at least one option"
        : undefined;

    return (
      <MultiSelectDropdown
        {...args}
        values={selectedValues}
        onChange={handleChange}
        errorMessage={errorMessage}
      />
    );
  },
  args: {
    ...Default.args,
  },
};
