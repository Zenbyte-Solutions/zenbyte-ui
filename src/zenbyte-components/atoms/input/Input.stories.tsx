import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "Zenbyte/Atoms/Input",
  component: Input,
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
type Story = StoryObj<typeof Input>;

// Individual Variants
export const Default: Story = { args: { variant: "default" } };
export const Filled: Story = { args: { variant: "filled" } };
export const Hover: Story = { args: { variant: "hover" } };
export const Focus: Story = { args: { variant: "focus" } };
export const Disabled: Story = { args: { variant: "disabled" } };
export const Success: Story = { args: { variant: "success" } };
export const Info: Story = { args: { variant: "info" } };
export const Warning: Story = { args: { variant: "warning" } };
export const Error: Story = { args: { variant: "error" } };

// Validation Stories
export const EmailValidation: Story = {
  args: {
    validationType: "email",
    placeholder: "Enter email address",
  },
};

export const UsernameValidation: Story = {
  args: {
    validationType: "username",
    placeholder: "Choose a username",
  },
};

export const PasswordValidation: Story = {
  args: {
    validationType: "password",
    placeholder: "Create a password",
  },
};

// New Password Visibility Story
export const PasswordVisibility: Story = {
  render: () => {
    const [password, setPassword] = useState("");

    return (
      <div className="flex flex-col gap-4">
        <Input
          validationType="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-bodySmallRegular">Current password: {password}</p>
      </div>
    );
  },
};

// NEW STORIES FOR CUSTOM LABEL AND HELPER TEXT
export const CustomLabel: Story = {
  args: {
    variant: "default",
    label: "Custom Label",
    placeholder: "Input with custom label",
  },
};

export const CustomHelperText: Story = {
  args: {
    variant: "default",
    helperText: "This is custom helper text",
    placeholder: "Input with custom helper text",
  },
};

export const CustomLabelAndHelperText: Story = {
  args: {
    variant: "default",
    label: "Email Address",
    helperText: "We'll never share your email",
    placeholder: "john@example.com",
  },
};

export const NoLabel: Story = {
  args: {
    variant: "default",
    label: "",
    helperText: "Input without a label",
    placeholder: "No label above",
  },
};

export const ValidationWithCustomText: Story = {
  render: () => {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);

    return (
      <div className="flex flex-col gap-4">
        <Input
          validationType="email"
          label="Your Email"
          helperText="We'll use this to contact you"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onValidate={setIsValid}
        />
        <p className="text-bodySmallRegular">
          Validation status: {isValid ? "Valid" : "Invalid"}
        </p>
      </div>
    );
  },
};
