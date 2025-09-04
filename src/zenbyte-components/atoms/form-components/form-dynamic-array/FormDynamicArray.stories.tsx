import type { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";
import Form from "../form/Form";
import FormDynamicArray from "./FormDynamicArray";

const meta: Meta<typeof FormDynamicArray> = {
  title: "Atoms/Form Components/FormDynamicArray",
  component: FormDynamicArray,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
FormDynamicArray is a form component that allows users to dynamically add and remove array items.
It integrates with the Form context and supports Zod validation for arrays.

**Features:**
- Add items with plus button
- Remove items with minus button
- Configurable min/max items
- Form context integration
- Zod validation support
- Mobile-first responsive design
- Tokenized Tailwind styling
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "The field name in the form schema",
    },
    label: {
      control: "text",
      description: "Label displayed above the array inputs",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for empty input fields",
    },
    helperText: {
      control: "text",
      description: "Helper text displayed below the inputs",
    },
    minItems: {
      control: "number",
      description: "Minimum number of items in the array",
    },
    maxItems: {
      control: "number",
      description: "Maximum number of items in the array",
    },
    initialItems: {
      control: "object",
      description: "Initial items to show when array is empty",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Schema for product features/bullet points
const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  features: z.array(z.string().min(1, "Feature cannot be empty"))
    .min(1, "At least one feature is required")
    .max(10, "Maximum 10 features allowed"),
});

// Schema for tags with no minimum
const tagsSchema = z.object({
  title: z.string().min(1, "Title is required"),
  tags: z.array(z.string().min(1, "Tag cannot be empty")),
});

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Form
        schema={productSchema}
        onSubmit={(data) => console.log("Form submitted:", data)}
        initialValues={{ features: [""] }}
      >
        <FormDynamicArray
          name="features"
          label="Product Features"
          placeholder="Enter a product feature"
          helperText="Add key features of your product"
        />
      </Form>
    </div>
  ),
};

export const WithMinMax: Story = {
  render: () => (
    <div className="w-96">
      <Form
        schema={productSchema}
        onSubmit={(data) => console.log("Form submitted:", data)}
        initialValues={{ features: ["Great quality", "Fast delivery"] }}
      >
        <FormDynamicArray
          name="features"
          label="Product Features (Min: 1, Max: 5)"
          placeholder="Enter a product feature"
          helperText="You must have at least 1 feature, maximum 5"
          minItems={1}
          maxItems={5}
        />
      </Form>
    </div>
  ),
};

export const BulletPoints: Story = {
  render: () => (
    <div className="w-96">
      <Form
        schema={z.object({
          bulletPoints: z.array(z.string().min(1, "Bullet point cannot be empty"))
            .min(3, "At least 3 bullet points required")
            .max(8, "Maximum 8 bullet points allowed"),
        })}
        onSubmit={(data) => console.log("Form submitted:", data)}
        initialValues={{ 
          bulletPoints: [
            "High-quality materials",
            "30-day money-back guarantee", 
            ""
          ] 
        }}
      >
        <FormDynamicArray
          name="bulletPoints"
          label="Product Bullet Points"
          placeholder="• Enter bullet point"
          helperText="Add 3-8 compelling product highlights"
          minItems={3}
          maxItems={8}
        />
      </Form>
    </div>
  ),
};

export const TagsNoMinimum: Story = {
  render: () => (
    <div className="w-96">
      <Form
        schema={tagsSchema}
        onSubmit={(data) => console.log("Form submitted:", data)}
        initialValues={{ tags: [] }}
      >
        <FormDynamicArray
          name="tags"
          label="Tags (Optional)"
          placeholder="Enter tag"
          helperText="Add optional tags to categorize your content"
          minItems={0}
          maxItems={10}
          initialItems={[]}
        />
      </Form>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-96">
      <Form
        schema={productSchema}
        onSubmit={(data) => console.log("Form submitted:", data)}
        initialValues={{ features: [""] }}
      >
        <FormDynamicArray
          name="features"
          label="Product Features"
          placeholder="Enter a product feature"
          helperText="Try submitting with empty fields to see validation"
        />
      </Form>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    name: "items",
    label: "Dynamic Items",
    placeholder: "Enter item",
    helperText: "Add or remove items as needed",
    minItems: 0,
    maxItems: 5,
    initialItems: [""],
  },
  render: (args) => (
    <div className="w-96">
      <Form
        schema={z.object({
          items: z.array(z.string()),
        })}
        onSubmit={(data) => console.log("Form submitted:", data)}
        initialValues={{ items: args.initialItems }}
      >
        <FormDynamicArray name={"dynamicarrayssample"} {...args} />
      </Form>
    </div>
  ),
};