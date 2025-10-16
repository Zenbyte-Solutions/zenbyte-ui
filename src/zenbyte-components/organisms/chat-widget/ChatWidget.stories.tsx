import type { Meta, StoryObj } from "@storybook/react";
import { ChatWidget } from "./ChatWidget";
import { ChatMessageProps } from "../../atoms/chat-message/ChatMessage";
import { useState } from "react";

/**
 * ChatWidget component - a complete floating chat assistant widget
 * with open/close functionality and message persistence.
 *
 * This organism combines all chat functionality into a floating widget that can be:
 * - Toggled open/closed with a floating button
 * - Positioned in bottom-right or bottom-left
 * - Configured with notification badges
 * - Customized with various options
 *
 * Messages persist even when the widget is closed, providing a seamless experience.
 */
const meta: Meta<typeof ChatWidget> = {
  title: "Zenbyte/Organisms/ChatWidget",
  component: ChatWidget,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    messages: {
      control: "object",
      description: "Array of chat messages to display",
    },
    isLoading: {
      control: "boolean",
      description: "Whether the AI is currently processing/typing a response",
    },
    onSendMessage: {
      description: "Callback function when a new message is sent",
      action: "message sent",
    },
    title: {
      control: "text",
      description: "Optional title for the chat",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input field",
    },
    height: {
      control: "text",
      description: "Height of the message list area",
    },
    emptyStateMessage: {
      control: "text",
      description: "Message to display when there are no messages",
    },
    buttonText: {
      control: "text",
      description: "Button text for send button",
    },
    showArrow: {
      control: "boolean",
      description: "Whether to show arrow on send button",
    },
    position: {
      control: { type: "select" },
      options: ["bottom-right", "bottom-left"],
      description: "Position of the floating button",
    },
    showBadge: {
      control: "boolean",
      description: "Whether to show notification badge on button",
    },
    badgeCount: {
      control: "number",
      description: "Badge count to display on button",
    },
    defaultOpen: {
      control: "boolean",
      description: "Initial open state",
    },
    onOpen: {
      description: "Callback when chat is opened",
      action: "chat opened",
    },
    onClose: {
      description: "Callback when chat is closed",
      action: "chat closed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChatWidget>;

const sampleMessages: ChatMessageProps[] = [
  {
    id: "1",
    user: "AI Assistant",
    message: "Hello! How can I help you today?",
    timestamp: new Date(Date.now() - 300000),
    isUser: false,
  },
  {
    id: "2",
    user: "You",
    message: "I have a question about your services",
    timestamp: new Date(Date.now() - 240000),
    isUser: true,
  },
  {
    id: "3",
    user: "AI Assistant",
    message: "I'd be happy to help! What would you like to know?",
    timestamp: new Date(Date.now() - 180000),
    isUser: false,
  },
];

/**
 * Default closed widget
 */
export const Default: Story = {
  args: {
    messages: [],
    isLoading: false,
    onSendMessage: (message) => console.log("Message sent:", message),
  },
  decorators: [
    (Story) => (
      <div className="h-screen bg-zb-gray-100">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-zb-desktop-headlineMedium mb-4">
            Chat Widget Demo
          </h1>
          <p className="text-zb-desktop-bodyRegular text-zb-gray-700">
            Click the floating button in the bottom-right corner to open the chat.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * Widget with existing messages
 */
export const WithMessages: Story = {
  args: {
    messages: sampleMessages,
    isLoading: false,
    onSendMessage: (message) => console.log("Message sent:", message),
  },
  decorators: [
    (Story) => (
      <div className="h-screen bg-zb-gray-100">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-zb-desktop-headlineMedium mb-4">
            Chat with Messages
          </h1>
          <p className="text-zb-desktop-bodyRegular text-zb-gray-700">
            This widget has existing messages. Open it to continue the conversation.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * Widget with notification badge
 */
export const WithBadge: Story = {
  args: {
    messages: sampleMessages,
    isLoading: false,
    onSendMessage: (message) => console.log("Message sent:", message),
    showBadge: true,
    badgeCount: 3,
  },
  decorators: [
    (Story) => (
      <div className="h-screen bg-zb-gray-100">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-zb-desktop-headlineMedium mb-4">
            Chat with Notification Badge
          </h1>
          <p className="text-zb-desktop-bodyRegular text-zb-gray-700">
            The button shows a badge with 3 unread messages.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * Widget positioned bottom-left
 */
export const BottomLeft: Story = {
  args: {
    messages: [],
    isLoading: false,
    onSendMessage: (message) => console.log("Message sent:", message),
    position: "bottom-left",
  },
  decorators: [
    (Story) => (
      <div className="h-screen bg-zb-gray-100">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-zb-desktop-headlineMedium mb-4">
            Bottom-Left Positioned Widget
          </h1>
          <p className="text-zb-desktop-bodyRegular text-zb-gray-700">
            The chat button appears in the bottom-left corner.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * Widget open by default
 */
export const DefaultOpen: Story = {
  args: {
    messages: sampleMessages,
    isLoading: false,
    onSendMessage: (message) => console.log("Message sent:", message),
    defaultOpen: true,
  },
  decorators: [
    (Story) => (
      <div className="h-screen bg-zb-gray-100">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-zb-desktop-headlineMedium mb-4">
            Chat Open by Default
          </h1>
          <p className="text-zb-desktop-bodyRegular text-zb-gray-700">
            The chat widget starts in an open state.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * Widget with custom title and styling
 */
export const CustomStyled: Story = {
  args: {
    messages: [],
    isLoading: false,
    onSendMessage: (message) => console.log("Message sent:", message),
    title: "Support Assistant",
    placeholder: "Ask us anything...",
    buttonText: "Ask",
    emptyStateMessage: "Welcome! How can we assist you today?",
  },
  decorators: [
    (Story) => (
      <div className="h-screen bg-zb-gray-100">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-zb-desktop-headlineMedium mb-4">
            Custom Styled Widget
          </h1>
          <p className="text-zb-desktop-bodyRegular text-zb-gray-700">
            Widget with custom title, placeholder, and button text.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * Fully interactive example with state management
 */
const InteractiveTemplate = () => {
  const [messages, setMessages] = useState<ChatMessageProps[]>([
    {
      id: "1",
      user: "AI Assistant",
      message: "Hello! I'm your AI assistant. How can I help you today?",
      timestamp: new Date(),
      isUser: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = (message: string) => {
    // Add user message
    const userMessage: ChatMessageProps = {
      id: Date.now().toString(),
      user: "You",
      message: message,
      timestamp: new Date(),
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: ChatMessageProps = {
        id: (Date.now() + 1).toString(),
        user: "AI Assistant",
        message: `You said: "${message}". This is a simulated response. In a real application, this would connect to your AI backend.`,
        timestamp: new Date(),
        isUser: false,
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);

      // Increment unread count if chat is closed
      if (!isOpen) {
        setUnreadCount((prev) => prev + 1);
      }
    }, 2000);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setUnreadCount(0); // Clear unread count when opened
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="h-screen bg-zb-gray-100">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-zb-desktop-headlineMedium mb-4">
          Fully Interactive Chat Widget
        </h1>
        <p className="text-zb-desktop-bodyRegular text-zb-gray-700 mb-2">
          This example demonstrates a complete chat experience:
        </p>
        <ul className="list-disc list-inside text-zb-desktop-bodyRegular text-zb-gray-700 space-y-1 mb-4">
          <li>Send messages and receive AI responses</li>
          <li>Messages persist when closing/opening the widget</li>
          <li>Notification badge shows unread messages</li>
          <li>Badge clears when chat is opened</li>
        </ul>
        <div className="bg-zb-white p-4 rounded-zb-cards shadow-zb-200">
          <p className="text-zb-desktop-bodySmallMedium text-zb-gray-900">
            Total messages: {messages.length}
          </p>
          <p className="text-zb-desktop-bodySmallMedium text-zb-gray-900">
            Unread: {unreadCount}
          </p>
          <p className="text-zb-desktop-bodySmallMedium text-zb-gray-900">
            Chat open: {isOpen ? "Yes" : "No"}
          </p>
        </div>
      </div>

      <ChatWidget
        messages={messages}
        isLoading={isLoading}
        onSendMessage={handleSendMessage}
        showBadge={unreadCount > 0}
        badgeCount={unreadCount}
        onOpen={handleOpen}
        onClose={handleClose}
        title="Interactive Assistant"
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
          "Fully interactive example with message persistence, unread badges, and simulated AI responses.",
      },
    },
  },
};
