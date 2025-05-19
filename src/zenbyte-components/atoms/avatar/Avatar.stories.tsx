import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import React from "react";

const meta: Meta<typeof Avatar> = {
  title: "Zenbyte/Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    src: { control: "text" },
    alt: { control: "text" },
    badge: { control: "text" },
    groupCount: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

// Image Avatars
export const SmallImage: Story = {
  args: {
    size: "sm",
    src: "https://i.pravatar.cc/150?img=1",
  },
};

export const MediumImage: Story = {
  args: {
    size: "md",
    src: "https://i.pravatar.cc/150?img=3",
  },
};

export const LargeImage: Story = {
  args: {
    size: "lg",
    src: "https://i.pravatar.cc/150?img=5",
  },
};

// Letter Avatars
export const LetterInitials: Story = {
  args: {
    alt: "N OP",
  },
};

export const WithBadge: Story = {
  args: {
    alt: "OP",
    badge: "3",
  },
};

export const Grouped: Story = {
  args: {
    groupCount: 3,
  },
};
