import { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";
import { z } from "zod";
import { FormInput } from "../form-input/FormInput";
import { FormCheckbox } from "../form-checkbox/FormCheckbox";
import { FormTextArea } from "../form-textarea/FormTextArea";
import { FormRadioButton } from "../form-radiobutton/FormRadioButton";
import { FormDatePicker } from "../form-datepicker/FormDatePicker";
import { FormDropdownList } from "../form-dropdown-list/FormDropdownList";
import { FormMultiSelectDropdown } from "../form-multi-select-dropdown/FormMultiSelectDropdown";
import { FormDynamicArray } from "../form-dynamic-array/FormDynamicArray";
import { FormNumberInput } from "../form-numberinput/FormNumberInput";
import React from "react";

const meta: Meta<typeof Form> = {
  title: "Zenbyte/Atoms/Form",
  component: Form,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => {
    const userSchema = z.object({
      teamNumber: z
        .string()
        .min(1, "Teamnummer is verplicht")
        .regex(/^[0-9a-zA-Z]*$/, "Geen speciale tekens"),
      location: z.string().min(1, "Locatie is verplicht"),
      email: z
        .string()
        .email("Ongeldig e-mailadres")
        .min(1, "E-mailadres is verplicht"),
      password: z
        .string()
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "8+ chars, include uppercase, lowercase, number, special char"
        ),
      acceptTerms: z.literal(true, {
        errorMap: () => ({
          message: "You have to accept the terms and conditions.",
        }),
      }),
      preference: z.string().min(1, "Choose a preference"),
      eventDate: z.date({
        required_error: "Date is required",
      }),
      listoptions: z.string().min(1, "Choose a option"),
      multioptions: z.array(z.string()).min(1, "Select at least one option"),
      quantity: z.number().min(1, "Quantity must be at least 1").max(100, "Maximum 100 items"),
      price: z.number().min(0.01, "Price must be greater than 0"),
      features: z.array(z.string().min(1, "Feature cannot be empty"))
        .min(1, "At least one feature is required")
        .max(5, "Maximum 5 features allowed"),
    });

    const handleSubmit = (values: Record<string, string>) => {
      console.log("Form values:", values);
      // Here you can handle the form submission, e.g., send to an API
    };

    return (
      <Form
        schema={userSchema}
        onSubmit={handleSubmit}
        buttonText="Submit"
        initialValues={{ teamNumber: "Prefilled", features: ["Great quality"], quantity: 5, price: 0 }}
      >
        <FormDatePicker
          name="eventDate"
          mode="single"
          label="Event Date"
          minDate={new Date(2024, 1, 1)}
        />
        <FormTextArea
          label="Team Number"
          name="teamNumber"
          placeholder="Enter Team Number"
        />
        <FormInput
          name="location"
          label="Locatie"
          placeholder="Enter Location"
        />
        <FormInput
          name="email"
          label="Email address"
          validationType="email"
          placeholder="Enter your email"
        />
        <FormInput
          name="password"
          label="Password"
          validationType="password"
          placeholder="Enter your password"
          type="password"
        />
        <FormCheckbox
          label="Ik ga akkoord met de voorwaarden"
          variant="text-right"
          name="acceptTerms"
        />
        <div className="flex gap-2">
          <FormRadioButton
            name="preference"
            label="Preference 1"
            value="preference1"
          />
          <FormRadioButton
            name="preference"
            label="Preference 2"
            value="preference2"
          />
          <FormRadioButton
            name="preference"
            label="Preference 3"
            value="preference3"
            disabled
          />
        </div>
        <FormDropdownList
          name="listoptions"
          dropdownLabel="Select a option"
          options={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3", disabled: true },
          ]}
          placeholder="Select a option"
        />
        <FormMultiSelectDropdown
          name="multioptions"
          placeholder="Select multiple options"
          options={[
            { label: "Multi optie 1", value: "multi1" },
            { label: "Multi optie 2", value: "multi2" },
            { label: "Multi optie 3", value: "multi3", disabled: true },
          ]}
        />
        <FormNumberInput
          name="quantity"
          label="Quantity"
          placeholder="Enter quantity"
          min={1}
          max={100}
          helperText="Number of items (1-100)"
        />
        <FormNumberInput
          name="price"
          label="Price"
          placeholder="0.00"
          min={0.01}
          step={0.01}
          helperText="Price in euros"
        />
        <FormDynamicArray
          name="features"
          label="Product Features"
          placeholder="Enter a product feature"
          helperText="Add key features (1-5 items)"
          minItems={1}
          maxItems={5}
        />
      </Form>
    );
  },
};
