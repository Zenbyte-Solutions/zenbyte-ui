// TopNav.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import TopNav from "./TopNav";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof TopNav> = {
  title: "Zenbyte/Organisms/TopNav",
  component: TopNav,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
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
    pages: [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/shop" },
      { label: "Contact", href: "/contact" },
    ],
  },
};