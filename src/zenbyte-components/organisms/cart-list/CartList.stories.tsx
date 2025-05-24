import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import CartList from "./CartList";
import { CartItemProps } from "../../molecules/cart-item/CartItem";
import { Container } from "../../atoms/container/Container";

const meta: Meta<typeof CartList> = {
  title: "Zenbyte/Organisms/Ecommerce/CartList",
  component: CartList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CartList>;

export const Default: Story = {
  render: () => {
    const [items, setItems] = useState<(CartItemProps & { id: string })[]>([
      {
        id: "1",
        image: "src/images/ipad-paars.jpg",
        title: "Apple iPad Pro 11-inch (4e generatie)",
        price: 1099,
        inStock: 20,
        quantity: 1,
        properties: {
          Kleur: "Spacezwart",
          Maat: "256GB",
          Stijlnaam: "Wi-Fi",
        },
        onQuantityChange: () => {},
        onRemove: () => {},
      },
      {
        id: "5",
        image: "src/images/ipad-oranje.jpg",
        title: "Apple iPad Air 10.9-inch (5e generatie)",
        price: 973.99,
        inStock: 10,
        quantity: 3,
        properties: {
          Kleur: "Paars",
          Maat: "128GB",
          Stijlnaam: "Wi-Fi + Cellular",
        },
        onQuantityChange: () => {},
        onRemove: () => {},
      },
      {
        id: "6",
        image: "src/images/ipad-blauw.jpg",
        title: "Apple iPad Air 10.9-inch (5e generatie)",
        price: 973.99,
        inStock: 10,
        quantity: 3,
        properties: {
          Kleur: "Paars",
          Maat: "128GB",
          Stijlnaam: "Wi-Fi + Cellular",
        },
        onQuantityChange: () => {},
        onRemove: () => {},
      },
      {
        id: "7",
        image: "src/images/ipad-silver.jpg",
        title: "Apple iPad Air 10.9-inch (5e generatie)",
        price: 973.99,
        inStock: 10,
        quantity: 3,
        maxQuantity: 1000,
        properties: {
          Kleur: "Paars",
          Maat: "128GB",
          Stijlnaam: "Wi-Fi + Cellular",
        },
        onQuantityChange: () => {},
        onRemove: () => {},
      },
    ]);

    const handleQuantityChange = (id: string, newQty: number) => {
      console.log(
        `Quantity changed for item with id=${id}, new quantity: ${newQty}`
      );
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQty } : item
        )
      );
    };

    const handleRemove = (id: string) => {
      console.log(`Removed item with id=${id}`);
      setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleCheckout = (cartId: string) => {
      console.log(`Proceeding to checkout with cartId=${cartId}`);
    };

    return (
        <CartList
          cartId="d5905eac-490c-4d37-bbed-d31b8bcd589f"
          items={items}
          onQuantityChange={handleQuantityChange}
          onRemove={handleRemove}
          onCheckout={handleCheckout}
        />
    );
  },
};
