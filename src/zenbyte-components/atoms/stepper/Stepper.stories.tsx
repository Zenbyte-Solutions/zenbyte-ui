import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "./Stepper";
import { useState } from "react";

const meta: Meta<typeof Stepper> = {
  title: "Zenbyte/Atoms/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(1);
    return (
      <div className="flex items-center gap-4">
        <Stepper {...args} value={value} onChange={setValue} />
        <p className="text-sm">Waarde: {value}</p>
      </div>
    );
  },
  args: {
    min: 1,
    max: 5,
    step: 1,
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState(1);
    return (
      <div className="flex items-center gap-4">
        <Stepper {...args} value={value} onChange={setValue} />
        <p className="text-sm">Waarde: {value}</p>
      </div>
    );
  },
  args: {
    disabled: true,
  },
};

export const StepTen: Story = {
  render: (args) => {
    const [value, setValue] = useState(1);
    return (
      <div className="flex items-center gap-4">
        <Stepper {...args} value={value} onChange={setValue} />
        <p className="text-sm">Waarde: {value}</p>
      </div>
    );
  },
  args: {
    min: 0,
    max: 100,
    step: 10,
    disabled: false,
  },
};
