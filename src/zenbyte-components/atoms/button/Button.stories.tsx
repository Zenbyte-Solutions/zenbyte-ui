import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Zenbyte/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["giant", "large", "medium", "small", "tiny"],
      control: { type: "select" },
      defaultValue: "giant",
    },
    arrowPosition: {
      options: ["left", "right"],
      control: { type: "radio" },
    },
    variant: {
      options: ["filled", "border", "text"],
      control: { type: "radio" },
      defaultValue: "filled",
    },
    color: {
      options: ["primary", "secondary", "danger", "success", "warning"],
      control: { type: "select" },
      defaultValue: "primary",
    },
    type: {
      options: ["default", "non-border"],
      control: { type: "radio" },
      defaultValue: "default",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Size matrix
const sizes = ["giant", "large", "medium", "small", "tiny"] as const;
const variants = ["filled", "border", "text"] as const;
const colors = [
  "primary",
  "secondary",
  "danger",
  "success",
  "warning",
] as const;

// Base template for creating all combinations
const Template: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: "Button",
  },
};

// Default buttons (one for each size)
export const GiantDefault = {
  ...Template,
  args: { ...Template.args, size: "giant" },
};
export const LargeDefault = {
  ...Template,
  args: { ...Template.args, size: "large" },
};
export const MediumDefault = {
  ...Template,
  args: { ...Template.args, size: "medium" },
};
export const SmallDefault = {
  ...Template,
  args: { ...Template.args, size: "small" },
};
export const TinyDefault = {
  ...Template,
  args: { ...Template.args, size: "tiny" },
};

// With left arrow (all sizes)
export const GiantWithLeftArrow = {
  ...Template,
  args: {
    ...Template.args,
    size: "giant",
    showArrow: true,
    arrowPosition: "left",
    children: "Back",
  },
};
export const LargeWithLeftArrow = {
  ...Template,
  args: {
    ...Template.args,
    size: "large",
    showArrow: true,
    arrowPosition: "left",
    children: "Back",
  },
};
export const MediumWithLeftArrow = {
  ...Template,
  args: {
    ...Template.args,
    size: "medium",
    showArrow: true,
    arrowPosition: "left",
    children: "Back",
  },
};
export const SmallWithLeftArrow = {
  ...Template,
  args: {
    ...Template.args,
    size: "small",
    showArrow: true,
    arrowPosition: "left",
    children: "Back",
  },
};
export const TinyWithLeftArrow = {
  ...Template,
  args: {
    ...Template.args,
    size: "tiny",
    showArrow: true,
    arrowPosition: "left",
    children: "Back",
  },
};

// With right arrow (all sizes)
export const GiantWithRightArrow = {
  ...Template,
  args: {
    ...Template.args,
    size: "giant",
    showArrow: true,
    arrowPosition: "right",
    children: "Next",
  },
};
export const LargeWithRightArrow = {
  ...Template,
  args: {
    ...Template.args,
    size: "large",
    showArrow: true,
    arrowPosition: "right",
    children: "Next",
  },
};
export const MediumWithRightArrow = {
  ...Template,
  args: {
    ...Template.args,
    size: "medium",
    showArrow: true,
    arrowPosition: "right",
    children: "Next",
  },
};
export const SmallWithRightArrow = {
  ...Template,
  args: {
    ...Template.args,
    size: "small",
    showArrow: true,
    arrowPosition: "right",
    children: "Next",
  },
};
export const TinyWithRightArrow = {
  ...Template,
  args: {
    ...Template.args,
    size: "tiny",
    showArrow: true,
    arrowPosition: "right",
    children: "Next",
  },
};

// Disabled (all sizes)
export const GiantDisabled = {
  ...Template,
  args: {
    ...Template.args,
    size: "giant",
    disabled: true,
    children: "Disabled",
  },
};
export const LargeDisabled = {
  ...Template,
  args: {
    ...Template.args,
    size: "large",
    disabled: true,
    children: "Disabled",
  },
};
export const MediumDisabled = {
  ...Template,
  args: {
    ...Template.args,
    size: "medium",
    disabled: true,
    children: "Disabled",
  },
};
export const SmallDisabled = {
  ...Template,
  args: {
    ...Template.args,
    size: "small",
    disabled: true,
    children: "Disabled",
  },
};
export const TinyDisabled = {
  ...Template,
  args: {
    ...Template.args,
    size: "tiny",
    disabled: true,
    children: "Disabled",
  },
};

// Hover states (all sizes - using parameters.pseudo)
const createHoverStory = (size: (typeof sizes)[number]) => ({
  ...Template,
  args: {
    ...Template.args,
    size,
    children: "Hover me",
  },
  parameters: {
    pseudo: { hover: true },
  },
});

export const GiantHover = createHoverStory("giant");
export const LargeHover = createHoverStory("large");
export const MediumHover = createHoverStory("medium");
export const SmallHover = createHoverStory("small");
export const TinyHover = createHoverStory("tiny");

// Focus states (all sizes - using parameters.pseudo)
const createFocusStory = (size: (typeof sizes)[number]) => ({
  ...Template,
  args: {
    ...Template.args,
    size,
    children: "Focus me",
  },
  parameters: {
    pseudo: { focus: true },
  },
});

export const GiantFocus = createFocusStory("giant");
export const LargeFocus = createFocusStory("large");
export const MediumFocus = createFocusStory("medium");
export const SmallFocus = createFocusStory("small");
export const TinyFocus = createFocusStory("tiny");

// Non-border variant stories
export const NonBorderDefault = {
  ...Template,
  args: {
    ...Template.args,
    type: "non-border",
    size: "giant",
  },
};

export const NonBorderHover = {
  ...Template,
  args: {
    ...Template.args,
    type: "non-border",
    size: "giant",
    children: "Hover me",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const NonBorderFocus = {
  ...Template,
  args: {
    ...Template.args,
    type: "non-border",
    size: "giant",
    children: "Focus me",
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const NonBorderDisabled = {
  ...Template,
  args: {
    ...Template.args,
    type: "non-border",
    size: "giant",
    disabled: true,
    children: "Disabled",
  },
};
