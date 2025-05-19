import type { Meta, StoryObj } from "@storybook/react";
import { FormDatePicker } from "./FormDatePicker";
import { Form } from "../form/Form";
import { z } from "zod";
import { addDays, subDays } from "date-fns";

const meta: Meta<typeof FormDatePicker> = {
  title: "Zenbyte/Atoms/FormDatePicker",
  component: FormDatePicker,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: { type: "radio" },
      options: ["single", "range"],
    },
    helperText: {
      control: "text",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "success", "error"],
    },
    minDate: { control: "date" },
    maxDate: { control: "date" },
    months: { control: "number" },
    direction: {
      control: { type: "select", options: ["horizontal", "vertical"] },
    },
    weekStartsOn: {
      control: { type: "select", options: [0, 1, 2, 3, 4, 5, 6] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormDatePicker>;

// ----------------
// Shared template
// ----------------

const Template = (args: any) => {
  const schema = z.object({
    test: args.mode === "range"
      ? z.array(
          z.object({
            startDate: z.date(),
            endDate: z.date(),
            key: z.string(),
          })
        )
      : z.date({
          required_error: "Please select a date",
          invalid_type_error: "Invalid date",
        }),
  });

  return (
    <Form schema={schema} onSubmit={() => {}} buttonText="Opslaan">
      <FormDatePicker {...args} name="test" />
    </Form>
  );
};

// ----------------
// Stories
// ----------------

export const SingleDateDefault: Story = {
  render: (args) => <Template {...args} />,
  args: {
    mode: "single",
    label: "Select a date",
    helperText: "Choose a date",
    months: 1,
  },
};

export const SingleDateWithLimits: Story = {
  render: (args) => <Template {...args} />,
  args: {
    mode: "single",
    label: "Date with limits",
    helperText: "Limited selection available",
    minDate: subDays(new Date(), 10),
    maxDate: addDays(new Date(), 10),
  },
};

export const RangeDefault: Story = {
  render: (args) => <Template {...args} />,
  args: {
    mode: "range",
    label: "Select a date range",
    helperText: "Choose a date range",
    months: 2,
    direction: "horizontal",
  },
};

export const RangeWithLimits: Story = {
  render: (args) => <Template {...args} />,
  args: {
    mode: "range",
    label: "Date range with limits",
    helperText: "Limited selection available",
    minDate: subDays(new Date(), 30),
    maxDate: addDays(new Date(), 60),
    months: 2,
    direction: "horizontal",
  },
};

export const VerticalRange: Story = {
  render: (args) => <Template {...args} />,
  args: {
    mode: "range",
    label: "Vertical date range",
    months: 2,
    direction: "vertical",
    helperText: "Two months in vertical view",
  },
};

export const MondayFirstDay: Story = {
  render: (args) => <Template {...args} />,
  args: {
    mode: "single",
    label: "Week starts on Monday",
    weekStartsOn: 1,
  },
};
