// Card.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import React from "react";
import { Button } from "../button/Button";
import { Plus } from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "Zenbyte/Atoms/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    shadow: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl", "none"],
    },
    backgroundColor: {
      control: { type: "select" },
      options: ["white", "stone-100", "indigo-50"],
    },
    rounded: {
      control: { type: "select" },
      options: ["none", "md", "lg", "2xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    shadow: "md",
    backgroundColor: "white",
    rounded: "2xl",
    children: (
      <div className="text-zb-desktop-bodyMedium">
        <p>Here will the Content be.</p>
      </div>
    ),
  },
};

export const WithShadowAndRounded: Story = {
  args: {
    shadow: "lg",
    backgroundColor: "stone-100",
    rounded: "lg",
    children: (
      <div className="text-zb-desktop-bodyMedium">
        <p>Here will the Content be.</p>
      </div>
    ),
  },
};

export const NoShadow: Story = {
  args: {
    shadow: "none",
    backgroundColor: "stone-100",
    children: <div className="text-zb-desktop-bodyMedium"><p>Here will the Content be.</p></div>

  },
};
