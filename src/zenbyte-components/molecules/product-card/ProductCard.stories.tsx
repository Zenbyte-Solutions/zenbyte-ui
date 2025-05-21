import { Meta, StoryObj } from "@storybook/react";
import ProductCard, { ProductCardProps } from "./ProductCard";

const meta: Meta<typeof ProductCard> = {
  title: "Zenbyte/Molecules/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
  args: {
    imageUrl: "src/images/login.jpg",
    title: "Choco Bommetje deluxe met extra pure topping en karamel Choco Bommetje deluxe met extra pure topping en karamel",
    discountPercentage: 14,
    price: "4,99",
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {};

export const WithoutDiscount: Story = {
  args: {
    discountPercentage: undefined,
  },
};

export const WithDiscountWithoutPrice: Story = {
  args: {
    discountPercentage: 14,
    price: "",
  },
};

export const WithoutPrice: Story = {
  args: {
    price: undefined,
  },
};

export const WithClickHandler: Story = {
  args: {
    onClick: () => alert("Clicked!"),
  },
};
