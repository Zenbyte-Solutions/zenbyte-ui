import { Meta, StoryObj } from "@storybook/react";
import ProductDetail, { ProductDetailProps } from "./ProductDetail";

const meta: Meta<typeof ProductDetail> = {
  title: "Zenbyte/Organisms/Ecommerce/ProductDetail",
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
      "src/images/ipad-blauw.jpg",
      "src/images/ipad-oranje.jpg",
      "src/images/ipad-silver.jpg",
      "src/images/ipad-paars.jpg"
    ],
    title: "Apple iPad 10e Generatie",
    variants: [
      {
        id: "1",
        name: "Opslagcapaciteit",
        options: ["64 GB", "256 GB"],
      },
      {
        id: "2",
        name: "Kleur",
        options: ["Zilver", "Blauw", "Geel", "Roze"],
      },
    ],
    variantPriceMap: {
      "64 GB - Zilver": 589,
      "64 GB - Blauw": 589,
      "64 GB - Geel": 589,
      "64 GB - Roze": 589,
      "256 GB - Zilver": 789,
      "256 GB - Blauw": 789,
      "256 GB - Geel": 789,
      "256 GB - Roze": 789,
    },
    variantStockMap: {
      "64 GB - Zilver": 10,
      "64 GB - Blauw": 5,
      "64 GB - Geel": 0,
      "64 GB - Roze": 3,
      "256 GB - Zilver": 7,
      "256 GB - Blauw": 4,
      "256 GB - Geel": 0,
      "256 GB - Roze": 2,
    },
    variantImageMap: {
      "64 GB - Zilver": "src/images/ipad-silver.jpg",
      "64 GB - Blauw": "src/images/ipad-blauw.jpg",
      "64 GB - Geel": "src/images/ipad-oranje.jpg",
      "64 GB - Roze": "src/images/ipad-paars.jpg",
      "256 GB - Zilver": "src/images/ipad-silver.jpg",
      "256 GB - Blauw": "src/images/ipad-blauw.jpg",
      "256 GB - Geel": "src/images/ipad-oranje.jpg",
      "256 GB - Roze": "src/images/ipad-paars.jpg",
    },
    variantIdMap: {
      "64 GB - Zilver": "ipad-64gb-silver",
      "64 GB - Blauw": "ipad-64gb-blue",
      "64 GB - Geel": "ipad-64gb-yellow",
      "64 GB - Roze": "ipad-64gb-pink",
      "256 GB - Zilver": "ipad-256gb-silver",
      "256 GB - Blauw": "ipad-256gb-blue",
      "256 GB - Geel": "ipad-256gb-yellow",
      "256 GB - Roze": "ipad-256gb-pink",
    },
    bulletPoints: [
      "10,9‑inch Liquid Retina-display",
      "A14 Bionic-chip voor topprestaties",
      "Touch ID voor veilige verificatie",
      "Ondersteuning voor Apple Pencil en Magic Keyboard Folio",
    ],
    price: 589,
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
