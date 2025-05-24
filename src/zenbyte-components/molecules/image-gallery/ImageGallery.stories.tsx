import type { Meta, StoryObj } from "@storybook/react";
import ImageGallery from "./ImageGallery";

const placeholderImages = [
  "src/images/ipad-blauw.jpg",
  "src/images/ipad-silver.jpg",
  "src/images/ipad-paars.jpg",
];

const meta: Meta<typeof ImageGallery> = {
  title: "Zenbyte/Molecules/ImageGallery",
  component: ImageGallery,
  tags: ["autodocs"],
    parameters: {
    layout: "centered",
  },
  args: {
    images: placeholderImages,
    fallbackImage: placeholderImages[0],
    variantImage: null,
  },
};

export default meta;

type Story = StoryObj<typeof ImageGallery>;

export const Default: Story = {};

export const WithVariantImage: Story = {
  args: {
    variantImage: "src/images/product-1.jpg",
  },
};

export const WithHoveredImageOnly: Story = {
  args: {
    variantImage: null,
    fallbackImage: undefined,
  },
};
