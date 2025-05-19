import type { Meta, StoryObj } from "@storybook/react";
import { FormCheckbox } from "./FormCheckbox";
import { Form } from "../form/Form";
import { z } from "zod";

const meta: Meta<typeof FormCheckbox> = {
  title: "Zenbyte/Atoms/FormCheckbox",
  component: FormCheckbox,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["text-right", "text-left", "checkbox-only"],
      control: { type: "select" },
    },
    disabled: { control: "boolean" },
    indeterminate: { control: "boolean" },
    focused: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof FormCheckbox>;

const schema = z.object({
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "Je moet akkoord gaan met de voorwaarden." }),
  }),
});

const Template = (args: any) => (
  <Form
    schema={schema}
    onSubmit={() => {}}
    buttonText="Verzenden"
  >
    <FormCheckbox {...args} name="acceptTerms" />
  </Form>
);

// Variants
export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Ik ga akkoord met de voorwaarden",
    variant: "text-right",
  },
};

export const TextLeft: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Ik accepteer de nieuwsbrief",
    variant: "text-left",
  },
};

export const CheckboxOnly: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "",
    variant: "checkbox-only",
  },
};

// States
export const Disabled: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Niet beschikbaar",
    disabled: true,
    variant: "text-right",
  },
};

export const Indeterminate: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Gedeeltelijk geselecteerd",
    indeterminate: true,
    variant: "text-right",
  },
};

export const Focused: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Focus actief",
    focused: true,
    variant: "text-right",
  },
};

export const WithValidationError: Story = {
  render: (args) => (
    <Form
      schema={schema}
      onSubmit={() => {}}
      buttonText="Verstuur"
    >
      <FormCheckbox {...args} name="acceptTerms" />
    </Form>
  ),
  args: {
    label: "Ik ga akkoord met de algemene voorwaarden",
    variant: "text-right",
  },
};
