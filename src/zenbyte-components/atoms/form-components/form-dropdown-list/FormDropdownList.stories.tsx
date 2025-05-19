import type { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";
import { Form } from "../form/Form";
import { FormDropdownList } from "./FormDropdownList";

const meta: Meta<typeof FormDropdownList> = {
  title: "Zenbyte/Atoms/FormDropdownList",
  component: FormDropdownList,
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: "object",
      defaultValue: [
        { label: "Option A", value: "A" },
        { label: "Option B", value: "B" },
        { label: "Option C", value: "C" },
        { label: "Option D (disabled)", value: "D", disabled: true },
      ],
    },
    dropdownLabel: {
      control: "text",
      defaultValue: "Select an Option",
    },
    placeholder: {
      control: "text",
      defaultValue: "Choose...",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormDropdownList>;

const schema = z.object({
  choice: z.string().min(1, "Please select a valid option"),
});

const Template = (args: any) => (
  <Form schema={schema} onSubmit={() => {}} buttonText="Submit">
    <FormDropdownList {...args} name="choice" />
  </Form>
);

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    options: [
      { label: "Option A", value: "A" },
      { label: "Option B", value: "B" },
      { label: "Option C", value: "C" },
    ],
    dropdownLabel: "Choose an option",
    placeholder: "Make a selection",
  },
};

export const WithPreselected: Story = {
  render: (args) => (
    <Form
      schema={schema}
      onSubmit={() => {}}
      buttonText="Submit"
      initialValues={{ choice: "B" }}
    >
      <FormDropdownList {...args} name="choice" />
    </Form>
  ),
  args: {
    dropdownLabel: "With preselected value",
    options: [
      { label: "Option A", value: "A" },
      { label: "Option B", value: "B" },
      { label: "Option C", value: "C" },
    ],
    placeholder: "Select an option",
  },
};

export const Disabled: Story = {
  render: (args) => <Template {...args} />,
  args: {
    dropdownLabel: "Disabled",
    disabled: true,
    placeholder: "Not available",
    options: [
      { label: "Option A", value: "A" },
      { label: "Option B", value: "B" },
    ],
  },
};

export const WithValidationError: Story = {
  render: (args) => (
    <Form schema={schema} onSubmit={() => {}} buttonText="Submit">
      <FormDropdownList {...args} name="choice" />
    </Form>
  ),
  args: {
    dropdownLabel: "Dropdown with validation error",
    placeholder: "Select an option",
    options: [
      { label: "Option A", value: "A" },
      { label: "Option B", value: "B" },
    ],
  },
};
