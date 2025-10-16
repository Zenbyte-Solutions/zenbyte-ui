import type { Meta, StoryObj } from "@storybook/react";
import { ChatContainer } from "./ChatContainer";
import { ChatMessageProps } from "../../atoms/chat-message/ChatMessage";
import { useState } from "react";

/**
 * ChatContainer component provides a complete AI chat interface
 * composed of message list and input components.
 *
 * This organism combines all chat functionality into a single component,
 * including:
 * - Message display with avatars and timestamps
 * - Typing indicator when AI is processing
 * - Input field with send button
 * - Auto-scroll to newest messages
 * - Empty state handling
 */
const meta: Meta<typeof ChatContainer> = {
  title: "Zenbyte/Organisms/ChatContainer",
  component: ChatContainer,
  parameters: {
    layout: "centered",
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
      description: "Optional title for the chat container",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input field",
    },
    height: {
      control: "text",
      description: "Height of the message list area",
    },
    className: {
      control: "text",
      description: "Optional className for custom styling",
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
  },
};

export default meta;
type Story = StoryObj<typeof ChatContainer>;

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
    user: "John Doe",
    message: "I need help with my React project",
    timestamp: new Date(Date.now() - 240000),
    isUser: true,
  },
  {
    id: "3",
    user: "AI Assistant",
    message:
      "I'd be happy to help! What specific aspect of your React project are you working on?",
    timestamp: new Date(Date.now() - 180000),
    isUser: false,
  },
  {
    id: "4",
    user: "John Doe",
    message: "I'm trying to implement state management with Context API",
    timestamp: new Date(Date.now() - 120000),
    isUser: true,
  },
];

/**
 * Empty chat - no messages yet
 */
export const Empty: Story = {
  args: {
    messages: [],
    isLoading: false,
    onSendMessage: (message) => console.log("Message sent:", message),
  },
};

/**
 * Empty with custom title
 */
export const EmptyWithTitle: Story = {
  args: {
    messages: [],
    isLoading: false,
    onSendMessage: (message) => console.log("Message sent:", message),
    title: "AI Chat Assistant",
  },
};

/**
 * Chat with messages
 */
export const WithMessages: Story = {
  args: {
    messages: sampleMessages,
    isLoading: false,
    onSendMessage: (message) => console.log("Message sent:", message),
    title: "AI Chat Assistant",
  },
};

/**
 * Loading state with typing indicator
 */
export const Loading: Story = {
  args: {
    messages: sampleMessages,
    isLoading: true,
    onSendMessage: (message) => console.log("Message sent:", message),
    title: "AI Chat Assistant",
  },
};

/**
 * Custom placeholder and button text
 */
export const CustomText: Story = {
  args: {
    messages: sampleMessages,
    isLoading: false,
    onSendMessage: (message) => console.log("Message sent:", message),
    title: "Ask Me Anything",
    placeholder: "Ask a question...",
    buttonText: "Ask",
  },
};

/**
 * Taller chat container
 */
export const TallerContainer: Story = {
  args: {
    messages: sampleMessages,
    isLoading: false,
    onSendMessage: (message) => console.log("Message sent:", message),
    title: "AI Chat Assistant",
    height: "700px",
  },
};

/**
 * With avatars
 */
export const WithAvatars: Story = {
  args: {
    messages: [
      {
        id: "1",
        user: "AI Bot",
        message: "Hello! I'm here to assist you with any questions you have.",
        timestamp: new Date(Date.now() - 180000),
        isUser: false,
        avatarSrc: "https://api.dicebear.com/7.x/bottts/svg?seed=ai",
      },
      {
        id: "2",
        user: "Jane Smith",
        message: "Can you help me understand TypeScript interfaces?",
        timestamp: new Date(Date.now() - 120000),
        isUser: true,
        avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
      },
      {
        id: "3",
        user: "AI Bot",
        message:
          "Of course! TypeScript interfaces are a powerful way to define the structure of objects. They help you enforce type checking and provide better IDE support.",
        timestamp: new Date(Date.now() - 60000),
        isUser: false,
        avatarSrc: "https://api.dicebear.com/7.x/bottts/svg?seed=ai",
      },
    ],
    isLoading: false,
    onSendMessage: (message) => console.log("Message sent:", message),
    title: "TypeScript Helper",
  },
};

/**
 * Long conversation
 */
export const LongConversation: Story = {
  args: {
    messages: [
      ...sampleMessages,
      {
        id: "5",
        user: "AI Assistant",
        message:
          "The Context API is a great choice for medium-sized applications. Let me explain how to set it up properly. First, you'll need to create a context using createContext()...",
        timestamp: new Date(Date.now() - 90000),
        isUser: false,
      },
      {
        id: "6",
        user: "John Doe",
        message: "That makes sense! Can you show me an example?",
        timestamp: new Date(Date.now() - 60000),
        isUser: true,
      },
      {
        id: "7",
        user: "AI Assistant",
        message:
          "Of course! Here's a basic example of how to create a context: First, create a new file called ThemeContext.tsx. Then define your context type and create the context...",
        timestamp: new Date(Date.now() - 30000),
        isUser: false,
      },
      {
        id: "8",
        user: "John Doe",
        message: "Perfect! What about using it in components?",
        timestamp: new Date(Date.now() - 10000),
        isUser: true,
      },
    ],
    isLoading: false,
    onSendMessage: (message) => console.log("Message sent:", message),
    title: "AI Chat Assistant",
  },
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
        message: `You said: "${message}". This is a simulated AI response. In a real application, this would be replaced with an actual AI API call.`,
        timestamp: new Date(),
        isUser: false,
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full max-w-4xl">
      <ChatContainer
        messages={messages}
        isLoading={isLoading}
        onSendMessage={handleSendMessage}
        title="Interactive AI Chat"
        placeholder="Ask me anything..."
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
          "Fully interactive example with simulated AI responses. Type a message and see the AI respond after a 2-second delay.",
      },
    },
  },
};
