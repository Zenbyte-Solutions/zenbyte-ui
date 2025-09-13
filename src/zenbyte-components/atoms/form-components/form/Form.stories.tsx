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
import { FormSelector, SelectorOption } from "../form-selector/FormSelector";
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
    // Sample data for FormSelector with GUID IDs (what you would send to API)
    const users: SelectorOption[] = [
      { id: "550e8400-e29b-41d4-a716-446655440001", label: "John Doe", subtitle: "john.doe@example.com", avatar: "https://via.placeholder.com/32" },
      { id: "550e8400-e29b-41d4-a716-446655440002", label: "Jane Smith", subtitle: "jane.smith@example.com" },
      { id: "550e8400-e29b-41d4-a716-446655440003", label: "Mike Johnson", subtitle: "mike.johnson@example.com" },
      { id: "550e8400-e29b-41d4-a716-446655440004", label: "Sarah Wilson", subtitle: "sarah.wilson@example.com" },
      { id: "550e8400-e29b-41d4-a716-446655440005", label: "Tom Brown", subtitle: "tom.brown@example.com" },
      { id: "550e8400-e29b-41d4-a716-446655440006", label: "Lisa Davis", subtitle: "lisa.davis@example.com" },
      { id: "550e8400-e29b-41d4-a716-446655440007", label: "Chris Anderson", subtitle: "chris.anderson@example.com" },
      { id: "550e8400-e29b-41d4-a716-446655440008", label: "Emma Martinez", subtitle: "emma.martinez@example.com" },
      { id: "550e8400-e29b-41d4-a716-446655440009", label: "Ryan Garcia", subtitle: "ryan.garcia@example.com" },
      { id: "550e8400-e29b-41d4-a716-446655440010", label: "Amy Taylor", subtitle: "amy.taylor@example.com" },
    ];

    const products: SelectorOption[] = [
      { id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11", label: "MacBook Pro", subtitle: "$2,499.00" },
      { id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12", label: "iPhone 15", subtitle: "$999.00" },
      { id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13", label: "iPad Air", subtitle: "$599.00" },
      { id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14", label: "Apple Watch", subtitle: "$399.00" },
      { id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15", label: "AirPods Pro", subtitle: "$249.00" },
    ];

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
      selectedUser: z.string().min(1, "Please select a user"),
      selectedProduct: z.string().min(1, "Please select a product"),
    });

    const handleSubmit = (values: Record<string, any>) => {
      console.log("=== FORM SUBMISSION ===");
      console.log("Full form values:", values);
      console.log("\n=== API READY VALUES ===");
      console.log("Selected User ID (GUID):", values.selectedUser);
      console.log("Selected Product ID (GUID):", values.selectedProduct);
      
      // Find the actual objects for display purposes
      const selectedUser = users.find(u => u.id === values.selectedUser);
      const selectedProduct = products.find(p => p.id === values.selectedProduct);
      
      console.log("\n=== DISPLAY NAMES ===");
      console.log("User Display Name:", selectedUser?.label);
      console.log("Product Display Name:", selectedProduct?.label);
      
      // This is what you would send to your API
      const apiPayload = {
        teamNumber: values.teamNumber,
        location: values.location,
        email: values.email,
        userId: values.selectedUser, // GUID for API
        productId: values.selectedProduct, // GUID for API
        eventDate: values.eventDate,
        // ... other fields
      };
      
      console.log("\n=== API PAYLOAD ===");
      console.log("Ready to send to API:", apiPayload);
    };

    return (
      <div style={{ height: '800px', padding: '20px' }}>
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
        <FormSelector
          name="selectedUser"
          label="Select User"
          options={users}
          placeholder="Choose a user..."
          modalTitle="Select User"
          searchPlaceholder="Search users..."
          helperText="Select from a large list of users"
          itemsPerPage={5}
        />
        <FormSelector
          name="selectedProduct"
          label="Select Product"
          options={products}
          placeholder="Choose a product..."
          modalTitle="Select Product"
          searchPlaceholder="Search products..."
          helperText="Select the product you want"
        />
      </Form>
      </div>
    );
  },
};
