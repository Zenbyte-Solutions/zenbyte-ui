import type { Meta, StoryObj } from "@storybook/react";
import { ChatButton } from "./ChatButton";

/**
 * ChatButton component - floating button to open chat widget.
 * Typically positioned in bottom-right corner of the screen.
 *
 * Features:
 * - Fixed positioning with customizable location
 * - Notification badge support
 * - Custom icon support
 * - Mobile-responsive sizing
 * - Hover and focus states
 */
const meta: Meta<typeof ChatButton> = {
  title: "Zenbyte/Atoms/ChatButton",
  component: ChatButton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      description: "Callback when button is clicked",
      action: "clicked",
    },
    showBadge: {
      control: "boolean",
      description: "Whether to show notification badge",
    },
    badgeCount: {
      control: "number",
      description: "Badge count to display",
    },
    className: {
      control: "text",
      description: "Optional className for custom styling",
    },
    icon: {
      description: "Icon to display (defaults to chat icon)",
    },
    position: {
      control: { type: "select" },
      options: ["bottom-right", "bottom-left"],
      description: "Position of the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChatButton>;

/**
 * Default chat button positioned in bottom-right
 */
export const Default: Story = {
  args: {
    onClick: () => console.log("Chat button clicked"),
  },
};

/**
 * Chat button with notification badge
 */
export const WithBadge: Story = {
  args: {
    onClick: () => console.log("Chat button clicked"),
    showBadge: true,
  },
};

/**
 * Chat button with badge count
 */
export const WithBadgeCount: Story = {
  args: {
    onClick: () => console.log("Chat button clicked"),
    showBadge: true,
    badgeCount: 3,
  },
};

/**
 * Chat button with high badge count (shows 9+)
 */
export const WithHighBadgeCount: Story = {
  args: {
    onClick: () => console.log("Chat button clicked"),
    showBadge: true,
    badgeCount: 15,
  },
};

/**
 * Bottom-left positioned chat button
 */
export const BottomLeft: Story = {
  args: {
    onClick: () => console.log("Chat button clicked"),
    position: "bottom-left",
  },
};

/**
 * Bottom-left with badge
 */
export const BottomLeftWithBadge: Story = {
  args: {
    onClick: () => console.log("Chat button clicked"),
    position: "bottom-left",
    showBadge: true,
    badgeCount: 5,
  },
};

/**
 * Custom icon example
 */
export const CustomIcon: Story = {
  args: {
    onClick: () => console.log("Chat button clicked"),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
};

/**
 * Interactive example showing state changes
 */
const InteractiveTemplate = () => {
  const [badgeCount, setBadgeCount] = React.useState(0);

  const handleClick = () => {
    console.log("Chat opened!");
    setBadgeCount(0);
  };

  React.useEffect(() => {
    // Simulate new messages every 3 seconds
    const interval = setInterval(() => {
      setBadgeCount((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-zb-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-zb-desktop-headlineMedium mb-4">
          Interactive Chat Button Demo
        </h1>
        <p className="text-zb-desktop-bodyRegular text-zb-gray-700 mb-2">
          This example simulates new messages arriving every 3 seconds.
        </p>
        <p className="text-zb-desktop-bodyRegular text-zb-gray-700">
          Click the chat button to "open" the chat and reset the badge count.
        </p>
        <p className="text-zb-desktop-bodySmallMedium text-zb-indigo-500 mt-4">
          Current badge count: {badgeCount}
        </p>
      </div>

      <ChatButton
        onClick={handleClick}
        showBadge={badgeCount > 0}
        badgeCount={badgeCount}
      />
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveTemplate />,
  parameters: {
    docs: {
      description: {
        story:
          "Interactive example that simulates new messages and badge updates. Click the button to reset the badge.",
      },
    },
  },
};
