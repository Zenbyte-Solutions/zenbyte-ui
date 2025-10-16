import type { Meta, StoryObj } from "@storybook/react";
import { FormImageUpload } from "./FormImageUpload";
import { Form } from "../form/Form";
import { z } from "zod";

const meta: Meta<typeof FormImageUpload> = {
  title: "Zenbyte/Atoms/FormImageUpload",
  component: FormImageUpload,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "hover", "focus", "success", "error"],
      control: { type: "select" },
    },
    multiple: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormImageUpload>;

const schema = z.object({
  images: z.array(z.any()).min(1, "Please upload at least one image"),
});

const Template = (args: any) => (
  <Form schema={schema} onSubmit={(values) => console.log(values)} buttonText="Submit">
    <FormImageUpload {...args} name="images" />
  </Form>
);

// Image Upload Variants
export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Upload Image",
    helperText: "Upload your profile picture",
    variant: "default",
    multiple: false,
  },
};

export const MultipleImages: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Upload Multiple Images",
    helperText: "You can upload multiple images at once",
    variant: "default",
    multiple: true,
  },
};

export const WithCustomFormats: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Product Images",
    helperText: "Upload product images in high resolution",
    acceptedFormats: ["PNG", "JPEG"],
    maxFileSize: 10 * 1024 * 1024, // 10MB
    multiple: true,
  },
};

export const HoverState: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Hover State",
    variant: "hover",
    multiple: false,
  },
};

export const FocusState: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Focus State",
    variant: "focus",
    multiple: false,
  },
};

export const SuccessState: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Success State",
    variant: "success",
    helperText: "Images uploaded successfully",
    multiple: false,
  },
};

export const ErrorState: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Error State",
    variant: "error",
    helperText: "Please upload a valid image file",
    multiple: false,
  },
};

export const SmallFileSize: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Small File Size Limit",
    helperText: "Maximum file size is 2MB",
    maxFileSize: 2 * 1024 * 1024, // 2MB
    multiple: false,
  },
};

export const WithoutHelperText: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Avatar Upload",
    helperText: null,
    multiple: false,
  },
};
