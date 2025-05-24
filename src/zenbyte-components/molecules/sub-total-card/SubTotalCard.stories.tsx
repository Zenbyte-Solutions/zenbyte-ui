import { Meta, StoryObj } from "@storybook/react";
import SubTotalCard from "./SubTotalCard";

const meta: Meta<typeof SubTotalCard> = {
  title: "Zenbyte/Molecules/Ecommerce/SubTotalCard",
  component: SubTotalCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof SubTotalCard>;

export const Default: Story = {
  args: {
    itemCount: 4,
    totalPrice: 3072.99,
    onCheckout: () => alert("Naar de kassa"),
  },
};
