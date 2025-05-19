import type { Meta, StoryObj } from "@storybook/react";
import LoginPage from "./LoginPage";

const meta: Meta<typeof LoginPage> = {
  title: "Zenbyte/Pages/LoginPage",
  component: LoginPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {
  args: {
    loginUrl:
      "https://zenbytesolutionscustomerportal-acc-bdfyheeed3a9cah5.westeurope-01.azurewebsites.net/login",
    redirectUrl: "/dashboard",
    profileUrl:
      "https://zenbytesolutionscustomerportal-acc-bdfyheeed3a9cah5.westeurope-01.azurewebsites.net/roles",
  },
};
