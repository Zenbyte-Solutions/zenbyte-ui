import type { Meta, StoryObj } from "@storybook/react";
import { FormTextArea } from "./FormTextArea";
import { Form } from "../form/Form";
import { z } from "zod";

const meta: Meta<typeof FormTextArea> = {
  title: "Zenbyte/Atoms/FormTextArea",
  component: FormTextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
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
      description: "The visual style variant of the textarea",
    },
    name: {
      control: "text",
      defaultValue: "message",
      description: "Name used for form binding",
    },
    label: {
      control: "text",
      defaultValue: "Label",
      description: "Optional label for the field",
    },
    placeholder: {
      control: "text",
      description: "Custom placeholder text",
    },
    helperText: {
      control: "text",
      description: "Text displayed below the input",
    },
    rows: {
      control: { type: "number", min: 2, max: 10 },
      description: "Number of rows to display",
    },
    value: {
      control: "text",
      description: "Initial value (when uncontrolled)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormTextArea>;

const schema = z.object({
  message: z.string().min(1, "Message is required!"),
});

const Template = (args: any) => (
  <Form schema={schema} onSubmit={() => {}} buttonText="Opslaan">
    <FormTextArea {...args} />
  </Form>
);

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    name: "message",
    variant: "default",
    label: "Default Label",
    placeholder: "Type something...",
    rows: 4,
    helperText: "This is a default textarea",
  },
};

export const Filled: Story = {
  render: (args) => <Template {...args} />,
  args: {
    name: "message",
    variant: "filled",
    label: "Filled",
    placeholder: "Type something...",
  },
};

export const Hover: Story = {
  render: (args) => <Template {...args} />,
  args: {
    name: "message",
    variant: "hover",
    label: "Hover",
  },
};

export const Focus: Story = {
  render: (args) => <Template {...args} />,
  args: {
    name: "message",
    variant: "focus",
    label: "Focus",
    value: "Typing...",
  },
};

export const Disabled: Story = {
  render: (args) => <Template {...args} />,
  args: {
    name: "message",
    variant: "disabled",
    label: "Disabled",
  },
};

export const Success: Story = {
  render: (args) => <Template {...args} />,
  args: {
    name: "message",
    variant: "success",
    label: "Success",
    helperText: "Success Text",
  },
};

export const Info: Story = {
  render: (args) => <Template {...args} />,
  args: {
    name: "message",
    variant: "info",
    label: "Info",
    helperText: "Info Text",
  },
};

export const Warning: Story = {
  render: (args) => <Template {...args} />,
  args: {
    name: "message",
    variant: "warning",
    label: "Warning",
    helperText: "Warning Text",
  },
};

export const Error: Story = {
  render: (args) => <Template {...args} />,
  args: {
    name: "message",
    variant: "error",
    label: "Error",
    helperText: "Something went wrong!",
    rows: 10
  },
};
