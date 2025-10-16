import type { Meta, StoryObj } from "@storybook/react";
import { ChatInput } from "./ChatInput";
import { useState } from "react";

/**
 * ChatInput component provides an input field and send button
 * for sending messages in a chat interface.
 *
 * Features include:
 * - Enter key to send messages
 * - Disabled state while loading
 * - Validation (no empty messages)
 * - Mobile-responsive layout
 */
const meta: Meta<typeof ChatInput> = {
  title: "Zenbyte/Molecules/ChatInput",
  component: ChatInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onSend: {
      description: "Callback function when a message is sent",
      action: "message sent",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled (e.g., while loading)",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    className: {
      control: "text",
      description: "Optional className for custom styling",
    },
    buttonText: {
      control: "text",
      description: "Button text",
    },
    showArrow: {
      control: "boolean",
      description: "Show arrow icon on button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChatInput>;

/**
 * Default chat input
 */
export const Default: Story = {
  args: {
    onSend: (message) => console.log("Message sent:", message),
    disabled: false,
  },
};

/**
 * Disabled state (e.g., while waiting for AI response)
 */
export const Disabled: Story = {
  args: {
    onSend: (message) => console.log("Message sent:", message),
    disabled: true,
  },
};

/**
 * Custom placeholder text
 */
export const CustomPlaceholder: Story = {
  args: {
    onSend: (message) => console.log("Message sent:", message),
    placeholder: "Ask me anything...",
  },
};

/**
 * Custom button text
 */
export const CustomButtonText: Story = {
  args: {
    onSend: (message) => console.log("Message sent:", message),
    buttonText: "Submit",
  },
};

/**
 * Without arrow icon
 */
export const NoArrow: Story = {
  args: {
    onSend: (message) => console.log("Message sent:", message),
    showArrow: false,
  },
};

/**
 * Full width example
 */
export const FullWidth: Story = {
  args: {
    onSend: (message) => console.log("Message sent:", message),
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
 * Interactive example with state management
 */
const InteractiveTemplate = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = (message: string) => {
    setMessages([...messages, message]);
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="w-[500px]">
      <div className="mb-4 p-4 bg-zb-gray-100 rounded-zb-cards min-h-[200px]">
        <h3 className="text-zb-desktop-bodySmallMedium mb-2">Messages:</h3>
        {messages.length === 0 ? (
          <p className="text-zb-desktop-bodySmallRegular text-zb-gray-500">
            No messages yet
          </p>
        ) : (
          <ul className="space-y-2">
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
        {isLoading && (
          <p className="text-zb-desktop-bodySmallRegular text-zb-indigo-500 mt-2">
            AI is typing...
          </p>
        )}
      </div>
      <ChatInput
        onSend={handleSend}
        disabled={isLoading}
        placeholder="Type your message..."
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
          "Interactive example showing the input with state management and loading state",
      },
    },
  },
};
