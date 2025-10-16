import type { Meta, StoryObj } from "@storybook/react";
import { ChatTextInput } from "./ChatTextInput";
import { useState } from "react";

/**
 * ChatTextInput component - specialized input field for chat interfaces
 * with optimized styling and Enter key handling.
 *
 * This component is designed specifically for chat UIs with:
 * - Clean, minimal styling
 * - Enter key to submit
 * - Mobile-responsive sizing
 * - Disabled state support
 */
const meta: Meta<typeof ChatTextInput> = {
  title: "Zenbyte/Atoms/ChatTextInput",
  component: ChatTextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "Current value of the input",
    },
    onChange: {
      description: "Callback when value changes",
      action: "value changed",
    },
    onEnter: {
      description: "Callback when Enter key is pressed",
      action: "enter pressed",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    className: {
      control: "text",
      description: "Optional className for custom styling",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChatTextInput>;

/**
 * Default chat text input
 */
export const Default: Story = {
  args: {
    value: "",
    onChange: (value) => console.log("Value changed:", value),
    onEnter: () => console.log("Enter pressed"),
    placeholder: "Type a message...",
  },
};

/**
 * With initial value
 */
export const WithValue: Story = {
  args: {
    value: "Hello, how are you?",
    onChange: (value) => console.log("Value changed:", value),
    onEnter: () => console.log("Enter pressed"),
    placeholder: "Type a message...",
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    value: "",
    onChange: (value) => console.log("Value changed:", value),
    placeholder: "Type a message...",
    disabled: true,
  },
};

/**
 * Custom placeholder
 */
export const CustomPlaceholder: Story = {
  args: {
    value: "",
    onChange: (value) => console.log("Value changed:", value),
    onEnter: () => console.log("Enter pressed"),
    placeholder: "Ask me anything...",
  },
};

/**
 * Full width example
 */
export const FullWidth: Story = {
  args: {
    value: "",
    onChange: (value) => console.log("Value changed:", value),
    onEnter: () => console.log("Enter pressed"),
    placeholder: "Type a message...",
  },
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
};

/**
 * Interactive example with state
 */
const InteractiveTemplate = () => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleEnter = () => {
    if (value.trim()) {
      setMessages([...messages, value]);
      setValue("");
    }
  };

  return (
    <div className="w-[500px]">
      <div className="mb-4 p-4 bg-zb-gray-100 rounded-zb-cards min-h-[150px]">
        <h3 className="text-zb-desktop-bodySmallMedium mb-2">
          Messages (Press Enter to send):
        </h3>
        {messages.length === 0 ? (
          <p className="text-zb-desktop-bodySmallRegular text-zb-gray-500">
            No messages yet
          </p>
        ) : (
          <ul className="space-y-1">
            {messages.map((msg, index) => (
              <li
                key={index}
                className="text-zb-desktop-bodySmallRegular bg-white p-2 rounded"
              >
                {msg}
              </li>
            ))}
          </ul>
        )}
      </div>
      <ChatTextInput
        value={value}
        onChange={setValue}
        onEnter={handleEnter}
        placeholder="Type and press Enter..."
      />
      <p className="text-zb-desktop-captionRegular text-zb-gray-500 mt-2">
        Current value: "{value}"
      </p>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveTemplate />,
  parameters: {
    docs: {
      description: {
        story: "Interactive example showing state management and Enter key handling",
      },
    },
  },
};
