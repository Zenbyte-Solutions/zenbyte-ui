import { Meta, StoryObj } from "@storybook/react";
import ProductDetail, { ProductDetailProps } from "./ProductDetail";

const meta: Meta<typeof ProductDetail> = {
  title: "Zenbyte/Organisms/ProductDetail",
  component: ProductDetail,
};

export default meta;

type Story = StoryObj<typeof ProductDetail>;

export const Default: Story = {
  args: {
    productId: "1",
    images: [
      "src/images/product-1.jpg",
      "src/images/product-2.jpg",
      "src/images/login.jpg",
    ],
    title: "Luxe Chocolade Geschenkdoos",
    variants: [
      {
        id: "1",
        name: "Size",
        options: ["Small", "Medium", "Large"],
      },
      {
        id: "2",
        name: "Taste",
        options: ["Pure", "Milk", "White"],
      },
    ],
    variantPriceMap: {
      "Small - Pure": 9.95,
      "Small - Milk": 10.95,
      "Medium - Pure": 14.95,
      "Medium - Milk": 15.95,
      "Large - Pure": 19.95,
      "Large - Milk": 20.95,
      "Large - White": 21.95,
    },
    variantStockMap: {
      "Klein - Pure": 5,
      "Klein - Milk": 0,
      "Medium - Pure": 8,
      "Medium - Milk": 2,
      "Large - Pure": 0,
      "Large - Milk": 12,
      "Large - Wit": 4,
    },
    variantImageMap: {
      "Small - Pure": "src/images/product-1.jpg",
      "Small - Milk": "src/images/product-2.jpg",
      "Medium - Pure": "src/images/product-1.jpg",
      "Medium - Milk": "src/images/product-2.jpg",
      "Large - Pure": "src/images/product-1.jpg",
      "Large - Milk": "src/images/product-2.jpg",
      "Large - White": "src/images/product-1.jpg",
    },
    price: 19.95,
    onAddToCart: (amount, options) =>
      alert(`Toegevoegd: ${amount}x met opties: ${JSON.stringify(options)}`),
  } satisfies ProductDetailProps,
};
