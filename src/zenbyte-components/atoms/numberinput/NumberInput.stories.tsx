import type { Meta, StoryObj } from "@storybook/react";
import { NumberInput } from "./NumberInput";
import { useState } from "react";

const meta: Meta<typeof NumberInput> = {
  title: "Zenbyte/Atoms/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "default",
        "filled",
        "hover",
        "focus",
        "disabled",
        "success",
        "error",
      ],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

// Variant Stories
export const Default: Story = { args: { variant: "default", placeholder: "0" } };
export const Filled: Story = { args: { variant: "filled", placeholder: "0" } };
export const Hover: Story = { args: { variant: "hover", placeholder: "0" } };
export const Focus: Story = { args: { variant: "focus", placeholder: "0" } };
export const Disabled: Story = {
  args: {
    variant: "disabled",
    placeholder: "0",
    value: 5,
    onChange: () => {},
  },
};
export const Success: Story = { args: { variant: "success", value: 10 } };
export const Error: Story = { args: { variant: "error", value: 99 } };

// Label & Helper Stories
export const CustomLabel: Story = {
  args: {
    label: "Aantal",
    placeholder: "Aantal",
    variant: "default",
  },
};

export const CustomHelperText: Story = {
  args: {
    helperText: "Voer een geldig getal in",
    variant: "default",
  },
};

export const LabelAndHelperText: Story = {
  args: {
    label: "Leeftijd",
    helperText: "Tussen 18 en 65",
    placeholder: "Bijv. 25",
    variant: "default",
    min: 18,
    max: 65,
  },
};

export const NoLabel: Story = {
  args: {
    label: "",
    placeholder: "Geen label",
    helperText: "Zonder label",
    variant: "default",
  },
};

// State-based Story
export const LiveControlledInput: Story = {
  render: () => {
    const [value, setValue] = useState<number | undefined>(5);

    return (
      <div className="flex flex-col gap-4">
        <NumberInput
          label="Aantal stuks"
          value={value}
          onChange={v => setValue(v === null ? undefined : v)}
          min={0}
          max={10}
          step={1}
          helperText="Kies een getal tussen 0 en 10"
          variant="default"
        />
        <p className="text-bodySmallRegular">Huidige waarde: {value !== undefined ? value : "Ongeldig"}</p>
      </div>
    );
  },
};
