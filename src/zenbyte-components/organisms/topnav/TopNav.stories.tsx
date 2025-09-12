import type { Meta, StoryObj } from "@storybook/react";
import TopNav from "./TopNav";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof TopNav> = {
  title: "Zenbyte/Organisms/TopNav",
  component: TopNav,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onCartClick: { action: "cartClicked" },
    onLoginClick: { action: "loginClicked" },
  },
};

export default meta;
type Story = StoryObj<typeof TopNav>;

const pagesWithActions = [
  {
    label: "Home",
    href: "/",
    onClick: () => console.log("navigate-home"),
  },
  {
    label: "Shop",
    href: "/shop",
    onClick: () => console.log("navigate-shop"),
  },
  {
    label: "Contact",
    href: "/contact",
    onClick: () => console.log("navigate-contact"),
  },
];

export const Default: Story = {
  args: {
    user: {
      name: "Jane Doe",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
    logo: "Zenbyte",
    cartItemCount: 2,
  },
};

export const WithLongName: Story = {
  args: {
    user: {
      name: "Dr. Jane Elizabeth Alexandra Doe III",
      avatarUrl: "https://i.pravatar.cc/150?img=2",
    },
    logo: "Zenbyte",
    cartItemCount: 5,
  },
};

export const NotLoggedIn: Story = {
  args: {
    logo: "Zenbyte",
    cartItemCount: 0,
  },
};

export const MobileWithPages: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    logo: "Zenbyte-Shop",
    user: {
      name: "Jane",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    cartItemCount: 3,
    pages: pagesWithActions,
  },
};
