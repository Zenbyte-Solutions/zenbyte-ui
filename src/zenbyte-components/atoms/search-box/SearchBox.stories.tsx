// src/components/atoms/SearchBox/SearchBox.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { SearchBox } from "./SearchBox";
import React from "react";

const meta: Meta<typeof SearchBox> = {
  title: "Zenbyte/Atoms/SearchBox",
  component: SearchBox,
  argTypes: {
    variant: {
      options: ["default", "filled", "hover", "focus", "disabled"],
      control: { type: "select" },
    },
    placeholder: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

// Individual Variants
export const Default: Story = {
  args: {
    variant: "default",
    placeholder: "Search...",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    value: "Example search",
  },
};

export const Hover: Story = {
  args: {
    variant: "hover",
  },
};

export const Focus: Story = {
  args: {
    variant: "focus",
  },
};

export const Disabled: Story = {
  args: {
    variant: "disabled",
    value: "Can't search",
  },
};

// Interactive Example
export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");

    return (
      <div className="space-y-4">
        <SearchBox
          {...args}
          value={value}
          onChange={(val) => {
            setValue(val);
            console.log("Search value:", val);
          }}
          onClear={() => console.log("Search cleared")}
        />
        <div className="text-sm text-gray-500">
          Current search: {value || "(empty)"}
        </div>
      </div>
    );
  },
};
