import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle } from "./PageTitle";

const meta: Meta<typeof PageTitle> = {
  title: "Zenbyte/Atoms/PageTitle",
  component: PageTitle,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "large"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageTitle>;

export const Default: Story = {
  args: {
    title: "Dashboard",
    description: "Welcome to your dashboard overview",
  },
};

export const Large: Story = {
  args: {
    title: "Welcome to Zenbyte",
    description: "Build beautiful applications with our component library",
    variant: "large",
  },
};

export const WithoutDescription: Story = {
  args: {
    title: "Settings",
    variant: "default",
  },
};

export const LargeWithoutDescription: Story = {
  args: {
    title: "Analytics",
    variant: "large",
  },
};

export const CustomClassName: Story = {
  args: {
    title: "Custom Styled Page",
    description: "This page title has additional custom styling",
    className: "border-l-4 border-zb-indigo-500 pl-4",
  },
};