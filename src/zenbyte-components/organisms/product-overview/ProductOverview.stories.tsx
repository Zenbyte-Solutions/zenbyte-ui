import ProductOverview from "./ProductOverview";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Zenbyte/Organisms/Ecommerce/ProductOverview",
  component: ProductOverview,
} as Meta<typeof ProductOverview>;

export const Default: StoryObj<typeof ProductOverview> = {
  args: {
    products: Array.from({ length: 20 }, (_, i) => ({
      imageUrl: "src/images/login.jpg",
      title: `Product ${i + 1} met lange titel die misschien overloopt`,
      discountPercentage: i % 3 === 0 ? 15 : undefined,
      price: `${(Math.random() * 10 + 5).toFixed(2)}`,
    })),
  },
};

export const Empty: StoryObj<typeof ProductOverview> = {
  args: {
    products: [],
  },
};


export const CustomEmptyText: StoryObj<typeof ProductOverview> = {
  args: {
    products: [],
    noProductText: "Geen producten gevonden",
  },
};

export const WithFilters: StoryObj<typeof ProductOverview> = {
  args: {
    products: Array.from({ length: 20 }, (_, i) => ({
      imageUrl: "src/images/login.jpg",
      title: `Product ${i + 1} met lange titel die misschien overloopt`,
      discountPercentage: i % 3 === 0 ? 15 : undefined,
      price: `${(Math.random() * 10 + 5).toFixed(2)}`,
      category: i % 2 === 0 ? "Category A" : "Category B",
      tags: i % 2 === 0 ? ["Tag A", "Tag B"] : ["Tag C"],
    })),
  },
};

export const SetColumnsInARow: StoryObj<typeof ProductOverview> = {
  args: {
    products: Array.from({ length: 20 }, (_, i) => ({
      imageUrl: "src/images/login.jpg",
      title: `Product ${i + 1} met lange titel die misschien overloopt`,
      discountPercentage: i % 3 === 0 ? 15 : undefined,
      price: `${(Math.random() * 10 + 5).toFixed(2)}`,
      category: i % 2 === 0 ? "Category A" : "Category B",
      tags: i % 2 === 0 ? ["Tag A", "Tag B"] : ["Tag C"],
    })),
    cols: 2
  },
};