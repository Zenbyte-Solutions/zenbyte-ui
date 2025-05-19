import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "./MenuItem";
import React from "react";
import { Home } from "lucide-react";

const meta: Meta<typeof MenuItem> = {
  title: "Zenbyte/Atoms/MenuItem",
  component: MenuItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Option",
    },
    selected: {
      control: "boolean",
    },
    active: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    showChevron: {
      control: "boolean",
      defaultValue: true,
    },
    icon: {
      control: { disable: true },
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

// Individual state stories
export const Default: Story = {
  args: {
    label: "Option",
  },
};

export const Selected: Story = {
  args: {
    label: "Option",
    selected: true,
  },
};

export const Active: Story = {
  args: {
    label: "Option",
    active: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Option",
    disabled: true,
  },
};

// Without chevron
export const WithoutChevron: Story = {
  args: {
    label: "Option",
    showChevron: false,
  },
};

// With icon
export const WithIcon: Story = {
  args: {
    label: "Home",
    icon: <Home size={16} />,
  },
};

// With icon and active
export const WithIconActive: Story = {
  args: {
    label: "Home",
    icon: <Home size={16} />,
    active: true,
  },
};
// Icon-only active state
export const IconOnlyActive: Story = {
  args: {
    icon: <Home size={16} />,
    active: true,
    tooltip: "Home (active)",
  },
};
