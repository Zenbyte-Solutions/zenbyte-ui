import type { Meta, StoryObj } from "@storybook/react";
import { FormInput } from "./FormInput";
import { Form } from "../form/Form";
import { z } from "zod";

const meta: Meta<typeof FormInput> = {
  title: "Zenbyte/Atoms/FormInput",
  component: FormInput,
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
    validationType: {
      options: ["default", "email", "username", "password"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormInput>;

const schema = z.object({
  test: z.string().min(1, "This field is required"),
});

const Template = (args: any) => (
  <Form schema={schema} onSubmit={() => {}} buttonText="Opslaan">
    <FormInput {...args} name="test" />
  </Form>
);

// Input Variants
export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    placeholder: "Type Something...",
    validationType: "default",
    variant: "default",
    helperText: "This is a default input",
  },
};

export const Filled: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Filled field",
    variant: "filled",
  },
};

export const Hover: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Hover Field",
    variant: "hover",
  },
};

export const Focus: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Focus Field",
    variant: "focus",
  },
};

export const Disabled: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Disabled field",
    variant: "disabled",
  },
};

export const Success: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Success field",
    variant: "success",
    helperText: "Success Text",
  },
};

export const Info: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Info field",
    variant: "info",
    helperText: "Info Text",
  },
};

export const Warning: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Warning field",
    variant: "warning",
    helperText: "Warning Text",
  },
};

export const Error: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Error field",
    variant: "error",
    placeholder: "Required field",
    helperText: "Error Text",
  },
};

// Validaties
export const EmailValidation: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Emailadres",
    placeholder: "Enter your email",
    validationType: "email",
  },
};

// Wachtwoord met zichtbaarheid toggle
export const PasswordVisibility: Story = {
  render: (args) => {
    return (
      <Form schema={schema} onSubmit={() => {}} buttonText="Opslaan">
        <FormInput
          {...args}
          name="test"
          validationType="password"
          placeholder="Voer je wachtwoord in"
        />
      </Form>
    );
  },
  args: {
    label: "Wachtwoord met zichtbaarheid",
    variant: "default",
  },
};

export const HelperTextWithCustomText: Story = {
  render: (args) => {
    return (
      <Form schema={schema} onSubmit={() => {}} buttonText="Opslaan">
        <FormInput
          {...args}
          name="test"
          validationType="email"
        />
      </Form>
    );
  },
  args: {
    label: "Helper Text",
    helperText: "We use this to send you a confirmation email",
    placeholder: "Enter your email",
    variant: "default",
  },
};
