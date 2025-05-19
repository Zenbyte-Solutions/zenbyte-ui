import type { Meta, StoryObj } from "@storybook/react";
// Add the missing import for LeftNav
import LeftNav from "./LeftNav";

import {
  Home,
  FileText,
  Users,
  Calendar,
  Mail,
  Bell,
  Settings,
  BookOpen,
  Users2,
  Gift,
  BarChart3,
  Building,
  Mountain,
  User,
} from "lucide-react";
import { useState } from "react";
import React from "react";

const meta: Meta<typeof LeftNav> = {
  title: "Zenbyte/Organisms/LeftNav",
  component: LeftNav,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    collapsed: {
      control: "boolean",
    },
    onToggleCollapse: {
      action: "toggled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LeftNav>;

// Default expanded state
export const Default: Story = {
  args: {
    logo: "Zenbyte",
    menuItems: [
      { id: "1", label: "Home", icon: <Home size={18} /> },
      { id: "2", label: "Projects", icon: <FileText size={18} /> },
      { id: "3", label: "Team", icon: <Users size={18} />, active: true },
      { id: "4", label: "Calendar", icon: <Calendar size={18} /> },
      { id: "5", label: "Messages", icon: <Mail size={18} /> },
      { id: "6", label: "Notifications", icon: <Bell size={18} /> },
      { id: "7", label: "Settings", icon: <Settings size={18} /> },
    ],
    userInfo: {
      name: "John Doe",
      email: "john@zenbyte.com",
    },
  },
};

// With nested menu items
export const WithNestedItems: Story = {
  args: {
    logo: "Zenbyte",
    menuItems: [
      { id: "1", label: "Home", icon: <Home size={18} /> },
      {
        id: "2",
        label: "Projects",
        icon: <FileText size={18} />,
        children: [
          { id: "2-1", label: "Active", icon: <BookOpen size={18} /> },
          { id: "2-2", label: "Archived", icon: <Mountain size={18} /> },
        ],
      },
      {
        id: "3",
        label: "Team",
        icon: <Users size={18} />,
        active: true,
        children: [
          { id: "3-1", label: "Members", icon: <Users2 size={18} /> },
          { id: "3-2", label: "Invites", icon: <Mail size={18} /> },
        ],
      },
      {
        id: "4",
        label: "Analytics",
        icon: <BarChart3 size={18} />,
        children: [
          { id: "4-1", label: "Dashboard", icon: <BarChart3 size={18} /> },
          { id: "4-2", label: "Reports", icon: <FileText size={18} /> },
        ],
      },
      { id: "5", label: "Calendar", icon: <Calendar size={18} /> },
      {
        id: "6",
        label: "Organization",
        icon: <Building size={18} />,
        children: [
          { id: "6-1", label: "Company", icon: <Building size={18} /> },
          { id: "6-2", label: "Departments", icon: <Users size={18} /> },
          { id: "6-3", label: "Benefits", icon: <Gift size={18} /> },
        ],
      },
      { id: "7", label: "Profile", icon: <User size={18} /> },
      { id: "8", label: "Settings", icon: <Settings size={18} /> },
    ],
    userInfo: {
      name: "John Doe",
      email: "john@zenbyte.com",
    },
  },
};

// Collapsed state
export const Collapsed: Story = {
  args: {
    ...Default.args,
    collapsed: true,
  },
};

// Collapsed with nested items
export const CollapsedWithNestedItems: Story = {
  args: {
    ...WithNestedItems.args,
    collapsed: true,
  },
};

// Interactive example with toggle
export const Interactive = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <LeftNav
        logo="Zenbyte"
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        menuItems={[
          { id: "1", label: "Home", icon: <Home size={18} /> },
          { id: "2", label: "Projects", icon: <FileText size={18} /> },
          { id: "3", label: "Team", icon: <Users size={18} />, active: true },
          { id: "4", label: "Calendar", icon: <Calendar size={18} /> },
          { id: "5", label: "Messages", icon: <Mail size={18} /> },
          { id: "6", label: "Notifications", icon: <Bell size={18} /> },
          { id: "7", label: "Settings", icon: <Settings size={18} /> },
        ]}
        userInfo={{
          name: "John Doe",
          email: "john@zenbyte.com",
        }}
      />
    </div>
  );
};

// Interactive example with nested menu items
export const InteractiveWithNestedItems = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <LeftNav
        logo="Zenbyte"
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        menuItems={[
          { id: "1", label: "Home", icon: <Home size={18} /> },
          {
            id: "2",
            label: "Projects",
            icon: <FileText size={18} />,
            children: [
              { id: "2-1", label: "Active", icon: <BookOpen size={18} /> },
              { id: "2-2", label: "Archived", icon: <Mountain size={18} /> },
            ],
          },
          {
            id: "3",
            label: "Team",
            icon: <Users size={18} />,
            active: true,
            children: [
              { id: "3-1", label: "Members", icon: <Users2 size={18} /> },
              { id: "3-2", label: "Invites", icon: <Mail size={18} /> },
            ],
          },
          { id: "4", label: "Calendar", icon: <Calendar size={18} /> },
          {
            id: "5",
            label: "Organization",
            icon: <Building size={18} />,
            children: [
              { id: "5-1", label: "Company", icon: <Building size={18} /> },
              { id: "5-2", label: "Departments", icon: <Users size={18} /> },
              { id: "5-3", label: "Benefits", icon: <Gift size={18} /> },
            ],
          },
          { id: "6", label: "Settings", icon: <Settings size={18} /> },
        ]}
        userInfo={{
          name: "John Doe",
          email: "john@zenbyte.com",
        }}
      />
    </div>
  );
};
