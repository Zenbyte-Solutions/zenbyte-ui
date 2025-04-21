import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonVariant, ButtonSize } from "./button";
import { action } from "@storybook/addon-actions";

// Storybook meta configuratie
const meta = {
  title: "atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: Object.values(ButtonVariant), // Gebruik de enum-waarden voor de variant
    },
    size: {
      control: { type: "select" },
      options: Object.values(ButtonSize), // Gebruik de enum-waarden voor de size
    },
    children: {
      control: "text", // Je kunt de button-tekst in Storybook aanpassen
    },
    onClick: {
      action: "clicked", // Zorgt ervoor dat de click actie zichtbaar is in Storybook
    },
  },
  args: {
    variant: ButtonVariant.Primary, // Gebruik de ButtonVariant enum
    size: ButtonSize.Default, // Gebruik de ButtonSize enum
    children: "Button", // De tekst die in de knop komt
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: ButtonVariant.Primary,
    size: ButtonSize.Large,
    children: "Primary Button",
    onClick: action("clicked"),
  },
};

export const Info: Story = {
  args: {
    variant: ButtonVariant.Info,
    size: ButtonSize.Default,
    children: "Info Button",
    onClick: action("clicked"),
  },
};

export const Success: Story = {
  args: {
    variant: ButtonVariant.Success,
    size: ButtonSize.Small,
    children: "Success Button",
    onClick: action("clicked"),
  },
};

export const Danger: Story = {
  args: {
    variant: ButtonVariant.Danger,
    size: ButtonSize.Small,
    children: "Danger Button",
    onClick: action("clicked"),
  },
};

export const Warning: Story = {
  args: {
    variant: ButtonVariant.Warning,
    size: ButtonSize.Large,
    children: "Warning Button",
    onClick: action("clicked"),
  },
};
