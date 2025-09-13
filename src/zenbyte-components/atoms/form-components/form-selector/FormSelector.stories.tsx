import type { Meta, StoryObj } from "@storybook/react";
import { FormSelector, SelectorOption } from "./FormSelector";
import { Form } from "../form/Form";
import { z } from "zod";
import { User } from "lucide-react";

const meta: Meta<typeof FormSelector> = {
  title: "Zenbyte/Atoms/FormSelector",
  component: FormSelector,
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
  },
};

export default meta;
type Story = StoryObj<typeof FormSelector>;

const schema = z.object({
  selectedUser: z.string().min(1, "Please select a user"),
  selectedProduct: z.string().min(1, "Please select a product"),
  optionalField: z.string().optional(),
});

// Sample data
const users: SelectorOption[] = [
  { id: "1", label: "John Doe", subtitle: "john.doe@example.com", avatar: "https://via.placeholder.com/32" },
  { id: "2", label: "Jane Smith", subtitle: "jane.smith@example.com" },
  { id: "3", label: "Mike Johnson", subtitle: "mike.johnson@example.com" },
  { id: "4", label: "Sarah Wilson", subtitle: "sarah.wilson@example.com" },
  { id: "5", label: "Tom Brown", subtitle: "tom.brown@example.com" },
  { id: "6", label: "Lisa Davis", subtitle: "lisa.davis@example.com" },
  { id: "7", label: "Chris Anderson", subtitle: "chris.anderson@example.com" },
  { id: "8", label: "Emma Martinez", subtitle: "emma.martinez@example.com" },
  { id: "9", label: "Ryan Garcia", subtitle: "ryan.garcia@example.com" },
  { id: "10", label: "Amy Taylor", subtitle: "amy.taylor@example.com" },
  { id: "11", label: "David Lee", subtitle: "david.lee@example.com" },
  { id: "12", label: "Rachel White", subtitle: "rachel.white@example.com" },
];

const products: SelectorOption[] = [
  { id: "prod-1", label: "MacBook Pro", subtitle: "$2,499.00" },
  { id: "prod-2", label: "iPhone 15", subtitle: "$999.00" },
  { id: "prod-3", label: "iPad Air", subtitle: "$599.00" },
  { id: "prod-4", label: "Apple Watch", subtitle: "$399.00" },
  { id: "prod-5", label: "AirPods Pro", subtitle: "$249.00" },
];

const Template = (args: any) => (
  <div style={{ height: '600px', padding: '20px' }}>
    <Form schema={schema} onSubmit={(values) => console.log(values)} buttonText="Submit">
      <FormSelector {...args} name="selectedUser" />
    </Form>
  </div>
);

const MultiFieldTemplate = (args: any) => (
  <div style={{ height: '600px', padding: '20px' }}>
    <Form schema={schema} onSubmit={(values) => console.log(values)} buttonText="Submit">
      <FormSelector 
        name="selectedUser"
        label="Select User"
        options={users}
        placeholder="Choose a user..."
        modalTitle="Select User"
        searchPlaceholder="Search users..."
      />
      <FormSelector 
        name="selectedProduct"
        label="Select Product"
        options={products}
        placeholder="Choose a product..."
        modalTitle="Select Product"
        searchPlaceholder="Search products..."
      />
    </Form>
  </div>
);

// Component Variants
export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Select User",
    options: users,
    placeholder: "Choose a user...",
    variant: "default",
    helperText: "Select a user from the list",
    modalTitle: "Select User",
    searchPlaceholder: "Search users...",
  },
};

export const Filled: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Filled Selector",
    options: users,
    variant: "filled",
  },
};

export const Hover: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Hover Selector",
    options: users,
    variant: "hover",
  },
};

export const Focus: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Focus Selector",
    options: users,
    variant: "focus",
  },
};

export const Disabled: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Disabled Selector",
    options: users,
    variant: "disabled",
  },
};

export const Success: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Success Selector",
    options: users,
    variant: "success",
    helperText: "Great choice!",
  },
};

export const Info: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Info Selector",
    options: users,
    variant: "info",
    helperText: "Additional information here",
  },
};

export const Warning: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Warning Selector",
    options: users,
    variant: "warning",
    helperText: "Please be careful with your selection",
  },
};

export const Error: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Error Selector",
    options: users,
    variant: "error",
    helperText: "This field has an error",
  },
};

// Use Cases
export const WithPagination: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Users with Pagination",
    options: users,
    placeholder: "Choose from many users...",
    itemsPerPage: 5,
    modalTitle: "Select User (Paginated)",
    searchPlaceholder: "Search users...",
    helperText: "This list is paginated for better performance",
  },
};

export const ProductSelector: Story = {
  render: (args) => (
    <div style={{ height: '600px', padding: '20px' }}>
      <Form schema={schema} onSubmit={(values) => console.log(values)} buttonText="Add to Cart">
        <FormSelector {...args} name="selectedProduct" />
      </Form>
    </div>
  ),
  args: {
    label: "Select Product",
    options: products,
    placeholder: "Choose a product...",
    modalTitle: "Select Product",
    searchPlaceholder: "Search products...",
    helperText: "Select the product you want to purchase",
  },
};

export const CustomRendering: Story = {
  render: (args) => (
    <div style={{ height: '600px', padding: '20px' }}>
      <Form schema={schema} onSubmit={(values) => console.log(values)} buttonText="Submit">
        <FormSelector 
          {...args}
          name="selectedUser"
          renderOption={(option) => (
            <div className="flex items-center p-3 rounded-zb-cards hover:bg-zb-indigo-50 cursor-pointer transition-colors duration-200">
              <div className="w-10 h-10 rounded-full bg-zb-indigo-100 flex items-center justify-center mr-3">
                <User className="w-5 h-5 text-zb-indigo-500" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-zb-indigo-900">{option.label}</div>
                <div className="text-xs text-zb-indigo-600">{option.subtitle}</div>
              </div>
            </div>
          )}
          renderSelected={(option) => (
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-zb-indigo-500 flex items-center justify-center mr-2">
                <User className="w-3 h-3 text-white" />
              </div>
              <span className="font-semibold text-zb-indigo-900">{option.label}</span>
            </div>
          )}
        />
      </Form>
    </div>
  ),
  args: {
    label: "Custom Styled Selector",
    options: users,
    placeholder: "Choose with custom styling...",
    modalTitle: "Custom User Selector",
    helperText: "This selector has custom rendering",
  },
};

export const LoadingState: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Loading Selector",
    options: [],
    placeholder: "Select when loaded...",
    isLoading: true,
    loadingText: "Loading users...",
    modalTitle: "Select User",
  },
};

export const EmptyState: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Empty Selector",
    options: [],
    placeholder: "No options available",
    modalTitle: "Select User",
    noResultsText: "No users found in the system",
    helperText: "There are no options to choose from",
  },
};

export const MultipleSelectors: Story = {
  render: (args) => <MultiFieldTemplate {...args} />,
  args: {},
};

export const ZodValidationExample: Story = {
  render: (args) => (
    <div style={{ height: '600px', padding: '20px' }}>
      <Form 
        schema={z.object({ 
          requiredUser: z.string().min(1, "User selection is required"),
          optionalUser: z.string().optional() 
        })} 
        onSubmit={(values) => console.log("Form submitted:", values)} 
        buttonText="Validate & Submit"
      >
        <FormSelector 
          name="requiredUser"
          label="Required User Selection"
          options={users}
          placeholder="This field is required..."
          helperText="Try submitting without selecting to see validation"
        />
        <FormSelector 
          name="optionalUser"
          label="Optional User Selection"
          options={users}
          placeholder="This field is optional..."
          helperText="This field is optional"
        />
      </Form>
    </div>
  ),
  args: {},
};