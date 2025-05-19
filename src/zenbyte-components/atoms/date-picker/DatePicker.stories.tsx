import type { Meta, StoryObj } from "@storybook/react";
import { addDays, subDays } from "date-fns";
import DatePicker from "./DatePicker";

const meta = {
  title: "Zenbyte/Atoms/DateRangePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile date picker component supporting both single date and date range selection.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: { type: "radio" },
      options: ["single", "range"],
      description: "Select between single date or date range mode",
    },
    initialDateRange: {
      control: "object",
      if: { arg: "mode", eq: "range" },
    },
    initialDate: {
      control: "date",
      if: { arg: "mode", eq: "single" },
    },
    onChange: { action: "onChange" },
    className: { control: "text" },
    minDate: { control: "date" },
    maxDate: { control: "date" },
    showStaticRange: {
      control: "boolean",
      if: { arg: "mode", eq: "range" },
    },
    months: { control: "number" },
    direction: {
      control: { type: "select", options: ["horizontal", "vertical"] },
    },
    weekStartsOn: {
      control: { type: "select", options: [0, 1, 2, 3, 4, 5, 6] },
      description: "First day of week (0 = Sunday, 1 = Monday, etc.)",
    },
    moveRangeOnFirstSelection: {
      control: "boolean",
      if: { arg: "mode", eq: "range" },
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default date range picker with two months displayed horizontally
 */
export const DefaultRange: Story = {
  args: {
    mode: "range",
    initialDateRange: [
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: "selection",
      },
    ],
    showStaticRange: true,
    months: 2,
    direction: "horizontal",
    weekStartsOn: 0,
    moveRangeOnFirstSelection: false,
  },
};

/**
 * Date range picker with limited date selection range
 */
export const DateRangeWithLimits: Story = {
  args: {
    mode: "range",
    initialDateRange: [
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: "selection",
      },
    ],
    minDate: subDays(new Date(), 30),
    maxDate: addDays(new Date(), 90),
    showStaticRange: true,
  },
};

/**
 * Vertical date range picker with two months stacked
 */
export const VerticalDateRange: Story = {
  args: {
    mode: "range",
    initialDateRange: [
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: "selection",
      },
    ],
    months: 2,
    direction: "vertical",
    showStaticRange: true,
  },
};

/**
 * Date range picker without preset ranges
 */
export const RangeWithoutPresets: Story = {
  args: {
    mode: "range",
    initialDateRange: [
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: "selection",
      },
    ],
    showStaticRange: false,
  },
};

/**
 * Single date picker with current date selected by default
 */
export const SingleDatePicker: Story = {
  args: {
    mode: "single",
    initialDate: new Date(),
    months: 1,
  },
};

/**
 * Single date picker with date limits
 */
export const SingleDateWithLimits: Story = {
  args: {
    mode: "single",
    initialDate: new Date(),
    minDate: subDays(new Date(), 15),
    maxDate: addDays(new Date(), 45),
  },
};

/**
 * Single date picker with two months displayed
 */
export const TwoMonthSingleDate: Story = {
  args: {
    mode: "single",
    initialDate: new Date(),
    months: 2,
    direction: "horizontal",
  },
};

/**
 * Single date picker with Monday as first day of the week
 */
export const MondayFirst: Story = {
  args: {
    mode: "single",
    initialDate: new Date(),
    weekStartsOn: 1, // Monday
  },
};
