import { Meta, StoryObj } from "@storybook/react";
import ProductDetail, { ProductDetailProps } from "./ProductDetail";

const meta: Meta<typeof ProductDetail> = {
  title: "Zenbyte/Organisms/ProductDetail",
  component: ProductDetail,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ProductDetail>;

export const Default: Story = {
  args: {
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
      "Small - White": 11.95,
      "Medium - Pure": 14.95,
      "Medium - Milk": 15.95,
      "Medium - White": 16.95,
      "Large - Pure": 19.95,
      "Large - Milk": 20.95,
      "Large - White": 21.95,
    },
    variantStockMap: {
      "Small - Pure": 5,
      "Small - Milk": 0,
      "Small - White": 2,
      "Medium - Pure": 8,
      "Medium - Milk": 2,
      "Medium - White": 0,
      "Large - Pure": 0,
      "Large - Milk": 12,
      "Large - White": 4,
    },
    variantImageMap: {
      "Small - Pure": "src/images/product-1.jpg",
      "Small - Milk": "src/images/product-2.jpg",
      "Small - White": "src/images/product-1.jpg",
      "Medium - Pure": "src/images/product-2.jpg",
      "Medium - Milk": "src/images/product-1.jpg",
      "Medium - White": "src/images/product-2.jpg",
      "Large - Pure": "src/images/product-1.jpg",
      "Large - Milk": "src/images/product-2.jpg",
      "Large - White": "src/images/product-1.jpg",
    },
    variantIdMap: {
      "Small - Pure": "8beb150a-18f5-4325-94b7-9af4da475e6e",
      "Small - Milk": "2b7d2db7-cda7-415e-a13b-a139d5aaca22",
      "Small - White": "e831f72e-ce24-4149-9d89-cc7e15691524",
      "Medium - Pure": "cba75c68-818d-43f6-8949-ddf2dd64ff9e",
      "Medium - Milk": "56015ddd-b370-43a4-b503-23925bfa984c",
      "Medium - White": "9a8032d4-0e68-4474-a741-ec9705e0b556",
      "Large - Pure": "d307ae3e-5723-47d7-8ffc-12d0a9341990",
      "Large - Milk": "dfd50487-a797-4c8e-bc4c-7c44b8b5b344",
      "Large - White": "ce6ab5ab-506e-42ad-b0a7-156c9da894e0",
    },
    bulletPoints: [
      "Bevat een mix van pure, melk en witte chocolade",
      "Verpakt in een luxe cadeauverpakking",
      "Perfect voor de feestdagen of als relatiegeschenk",
    ],
    price: 9.95,
    onAddToCart: (amount, selectedOptions, variantId) => {
      alert(
        `Toegevoegd aan winkelwagen:\nVariant ID: ${variantId ?? "onbekend"}\nAantal: ${amount}\nOpties: ${JSON.stringify(
          selectedOptions,
          null,
          2
        )}`
      );
    },
  } satisfies ProductDetailProps,
};
