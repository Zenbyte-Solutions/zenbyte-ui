import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import CartItem, { CartItemProps } from "./CartItem";

const meta: Meta<typeof CartItem> = {
  title: "Zenbyte/Molecules/Ecommerce/CartItem",
  component: CartItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CartItem>;

export const Default: Story = {
  render: () => {
    const [quantity, setQuantity] = useState(1);
    const itemId = "3442bee5-8b9e-4004-a2cb-4d3257c01ccc";

    const mockProps: CartItemProps = {
      id: itemId,
      image: "src/images/ipad-paars.jpg",
      title: "Apple iPad Pro 11-inch (4th generation)",
      price: 1099,
      inStock: 20,
      quantity,
      maxQuantity: 10,
      onQuantityChange: (newQuantity) => {
        console.log(`Quantity changed for ${itemId}: ${newQuantity}`);
        setQuantity(newQuantity);
      },
      onRemove: (id) => console.log(`Item removed: ${id}`),
      properties: {
        Kleur: "Spacezwart",
        Maat: "256GB",
        Stijlnaam: "Wi-Fi",
      },
    };

    return <CartItem {...mockProps} />;
  },
};
