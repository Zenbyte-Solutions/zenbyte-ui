import type { Meta, StoryObj } from "@storybook/react";
import ProductImageThumbnail from "./ProductImageThumbnail";

const meta: Meta<typeof ProductImageThumbnail> = {
  title: "Zenbyte/Atoms/Ecommerce/ProductImageThumbnail",
  component: ProductImageThumbnail,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductImageThumbnail>;

export const Default: Story = {
  args: {
    src: "src/images/product-1.jpg",
    alt: "Sample thumbnail",
    isActive: true,
    onMouseEnter: () => console.log("hovered"),
    onMouseLeave: () => console.log("left"),
  },
};

export const InActive: Story = {
  args: {
    src: "src/images/product-1.jpg",
    alt: "Sample thumbnail",
    isActive: false,
    onMouseEnter: () => console.log("hovered"),
    onMouseLeave: () => console.log("left"),
  },
};