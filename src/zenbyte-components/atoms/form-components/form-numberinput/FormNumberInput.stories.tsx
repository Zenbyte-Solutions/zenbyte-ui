import type { Meta, StoryObj } from "@storybook/react";
import { FormNumberInput } from "./FormNumberInput";
import { Form } from "../form/Form";
import { z } from "zod";

const meta: Meta<typeof FormNumberInput> = {
  title: "Zenbyte/Atoms/FormNumberInput",
  component: FormNumberInput,
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
        "info",
        "warning",
        "error",
      ],
      control: { type: "select" },
    },
    min: {
      control: { type: "number" },
    },
    max: {
      control: { type: "number" },
    },
    step: {
      control: { type: "number" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormNumberInput>;

const schema = z.object({
  numberField: z.number().min(0, "Value must be at least 0"),
});

const Template = (args: any) => (
  <Form schema={schema} onSubmit={() => {}} buttonText="Submit">
    <FormNumberInput {...args} name="numberField" />
  </Form>
);

// Input Variants
export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    placeholder: "Enter a number...",
    variant: "default",
    helperText: "This is a number input",
  },
};

export const Filled: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Filled Number Field",
    variant: "filled",
  },
};

export const Hover: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Hover Number Field",
    variant: "hover",
  },
};

export const Focus: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Focus Number Field",
    variant: "focus",
  },
};

export const Disabled: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Disabled Number Field",
    variant: "disabled",
  },
};

export const Success: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Success Number Field",
    variant: "success",
    helperText: "Valid number entered",
  },
};

export const Info: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Info Number Field",
    variant: "info",
    helperText: "Enter any positive number",
  },
};

export const Warning: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Warning Number Field",
    variant: "warning",
    helperText: "Check your input carefully",
  },
};

export const Error: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Error Number Field",
    variant: "error",
    placeholder: "Required field",
    helperText: "This field is required",
  },
};

// Number-specific examples
export const WithMinMax: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Number with Min/Max",
    placeholder: "Enter value between 10 and 100",
    min: 10,
    max: 100,
    helperText: "Value must be between 10 and 100",
  },
};

export const WithStep: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Number with Step",
    placeholder: "Enter value in steps of 5",
    step: 5,
    helperText: "Use step controls or enter multiples of 5",
  },
};

export const DecimalNumbers: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Decimal Number",
    placeholder: "Enter decimal value",
    step: 0.01,
    helperText: "Accepts decimal values",
  },
};

export const PriceInput: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Price",
    placeholder: "0.00",
    min: 0,
    step: 0.01,
    helperText: "Enter price in euros",
  },
};

// Optional field example
export const OptionalField: Story = {
  render: (args) => {
    const optionalSchema = z.object({
      numberField: z.number().optional(),
    });
    
    return (
      <Form schema={optionalSchema} onSubmit={() => {}} buttonText="Submit">
        <FormNumberInput {...args} name="numberField" />
      </Form>
    );
  },
  args: {
    label: "Optional Number (leave empty if not needed)",
    placeholder: "Enter number or leave empty",
    helperText: "This field is optional",
  },
};