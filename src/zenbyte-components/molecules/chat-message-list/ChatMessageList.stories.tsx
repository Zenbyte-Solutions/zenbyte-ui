import type { Meta, StoryObj } from "@storybook/react";
import { ChatMessageList } from "./ChatMessageList";
import { ChatMessageProps } from "../../atoms/chat-message/ChatMessage";

/**
 * ChatMessageList component displays a scrollable list of chat messages
 * with auto-scroll functionality and typing indicator support.
 *
 * This component handles message display, empty states, and loading indicators
 * for a complete chat message viewing experience.
 */
const meta: Meta<typeof ChatMessageList> = {
  title: "Zenbyte/Molecules/ChatMessageList",
  component: ChatMessageList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    messages: {
      control: "object",
      description: "Array of messages to display",
    },
    isLoading: {
      control: "boolean",
      description: "Whether to show the typing indicator",
    },
    autoScroll: {
      control: "boolean",
      description: "Whether to auto-scroll to the bottom when new messages arrive",
    },
    height: {
      control: "text",
      description: "Custom height for the message list container",
    },
    className: {
      control: "text",
      description: "Optional className for custom styling",
    },
    emptyStateMessage: {
      control: "text",
      description: "Message to display when there are no messages",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChatMessageList>;

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
 * Empty state - no messages
 */
export const Empty: Story = {
  args: {
    messages: [],
    isLoading: false,
  },
};

/**
 * Empty state with custom message
 */
export const EmptyWithCustomMessage: Story = {
  args: {
    messages: [],
    isLoading: false,
    emptyStateMessage: "Welcome! Send a message to get started.",
  },
};

/**
 * Single message
 */
export const SingleMessage: Story = {
  args: {
    messages: [sampleMessages[0]],
    isLoading: false,
  },
};

/**
 * Multiple messages conversation
 */
export const MultipleMessages: Story = {
  args: {
    messages: sampleMessages,
    isLoading: false,
  },
};

/**
 * Loading state with typing indicator
 */
export const Loading: Story = {
  args: {
    messages: sampleMessages,
    isLoading: true,
  },
};

/**
 * Long conversation with many messages
 */
export const LongConversation: Story = {
  args: {
    messages: [
      ...sampleMessages,
      {
        id: "5",
        user: "AI Assistant",
        message:
          "The Context API is a great choice for medium-sized applications. Let me explain how to set it up properly...",
        timestamp: new Date(Date.now() - 60000),
        isUser: false,
      },
      {
        id: "6",
        user: "John Doe",
        message: "That makes sense! Can you show me an example?",
        timestamp: new Date(Date.now() - 30000),
        isUser: true,
      },
      {
        id: "7",
        user: "AI Assistant",
        message:
          "Of course! Here's a basic example of how to create a context: First, create a new file called ThemeContext.tsx...",
        timestamp: new Date(Date.now() - 10000),
        isUser: false,
      },
    ],
    isLoading: false,
  },
};

/**
 * Custom height example
 */
export const CustomHeight: Story = {
  args: {
    messages: sampleMessages,
    isLoading: false,
    height: "600px",
  },
};

/**
 * With custom styling
 */
export const WithCustomStyling: Story = {
  args: {
    messages: sampleMessages,
    isLoading: false,
    className: "bg-zb-gray-100 rounded-zb-cards",
  },
};

/**
 * Messages with avatars
 */
export const WithAvatars: Story = {
  args: {
    messages: [
      {
        id: "1",
        user: "AI Bot",
        message: "Hello! I'm here to assist you.",
        timestamp: new Date(Date.now() - 120000),
        isUser: false,
        avatarSrc: "https://api.dicebear.com/7.x/bottts/svg?seed=ai",
      },
      {
        id: "2",
        user: "Jane Smith",
        message: "Hi! I have a question about TypeScript.",
        timestamp: new Date(Date.now() - 60000),
        isUser: true,
        avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
      },
      {
        id: "3",
        user: "AI Bot",
        message: "I'd be happy to help with TypeScript! What would you like to know?",
        timestamp: new Date(),
        isUser: false,
        avatarSrc: "https://api.dicebear.com/7.x/bottts/svg?seed=ai",
      },
    ],
    isLoading: false,
  },
};
