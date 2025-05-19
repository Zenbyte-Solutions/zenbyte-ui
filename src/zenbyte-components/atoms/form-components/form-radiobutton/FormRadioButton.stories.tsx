import type { Meta, StoryObj } from "@storybook/react";
import { FormRadioButton } from "./FormRadioButton";
import { Form } from "../form/Form";
import { z } from "zod";

const meta: Meta<typeof FormRadioButton> = {
  title: "Zenbyte/Atoms/FormRadioButton",
  component: FormRadioButton,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      defaultValue: "Option A",
    },
    variant: {
      options: ["radio-only", "text-right", "text-left"],
      control: { type: "select" },
      defaultValue: "text-right",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormRadioButton>;

const schema = z.object({
  choice: z.string().min(1, "Choose an option"),
});

const Template = (args: any) => (
  <Form schema={schema} onSubmit={() => {}} buttonText="Submit" initialValues={{ choice: "B" }}>
    <div className="flex gap-4">
      <FormRadioButton {...args} name="choice" value="A" label="Option A" />
      <FormRadioButton {...args} name="choice" value="B" label="Option B" />
    </div>
  </Form>
);

// Basis story
export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    variant: "text-right",
  },
};

// Varianten
export const RadioOnly: Story = {
  render: (args) => <Template {...args} />,
  args: {
    variant: "radio-only",
  },
};

export const TextLeft: Story = {
  render: (args) => <Template {...args} />,
  args: {
    variant: "text-left",
  },
};

// Disabled voorbeeld
export const Disabled: Story = {
  render: (args) => <Template {...args} />,
  args: {
    disabled: true,
  },
};

