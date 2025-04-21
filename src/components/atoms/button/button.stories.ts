import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Zenbyte/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Primary button style using zenbyte-indigo colors
 */
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

/**
 * Secondary button style using zenbyte-gray colors
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

/**
 * Success button style using zenbyte-emerald colors
 */
export const Success: Story = {
  args: {
    variant: "success",
    children: "Button",
  },
};

/**
 * Danger button style using zenbyte-coral colors
 */
export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Button",
  },
};

/**
 * Small size variant
 */
export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};

/**
 * Large size variant
 */
export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};
