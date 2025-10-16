import type { Meta, StoryObj } from "@storybook/react";
import { ChatMessage } from "./ChatMessage";

/**
 * ChatMessage component displays a single message in a chat interface
 * with avatar, message content, and timestamp.
 *
 * This component is used as part of a chat UI to show individual messages
 * from either the user or AI assistant.
 */
const meta: Meta<typeof ChatMessage> = {
  title: "Zenbyte/Atoms/ChatMessage",
  component: ChatMessage,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "Unique identifier for the message",
    },
    user: {
      control: "text",
      description: "Name of the user who sent the message",
    },
    message: {
      control: "text",
      description: "The message content",
    },
    timestamp: {
      control: "date",
      description: "Timestamp when the message was sent",
    },
    isUser: {
      control: "boolean",
      description: "Whether this message is from the current user (true) or AI (false)",
    },
    avatarSrc: {
      control: "text",
      description: "Avatar image URL for the sender",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChatMessage>;

/**
 * Default AI message example
 */
export const AIMessage: Story = {
  args: {
    id: "1",
    user: "AI Assistant",
    message: "Hello! How can I help you today?",
    timestamp: new Date(),
    isUser: false,
  },
};

/**
 * User message example
 */
export const UserMessage: Story = {
  args: {
    id: "2",
    user: "John Doe",
    message: "Can you help me with my project?",
    timestamp: new Date(),
    isUser: true,
  },
};

/**
 * Long AI message example
 */
export const LongAIMessage: Story = {
  args: {
    id: "3",
    user: "AI Assistant",
    message:
      "Of course! I'd be happy to help you with your project. Could you please provide more details about what you're working on? For example, what type of project is it, what technologies are you using, and what specific challenges are you facing? The more information you can share, the better I can assist you.",
    timestamp: new Date(),
    isUser: false,
  },
};

/**
 * Long user message example
 */
export const LongUserMessage: Story = {
  args: {
    id: "4",
    user: "John Doe",
    message:
      "I'm building a React application with TypeScript and I'm having trouble with state management. I've tried using useState but I'm not sure if that's the best approach for my use case. Should I consider using Context API or maybe Redux?",
    timestamp: new Date(),
    isUser: true,
  },
};

/**
 * AI message with custom avatar
 */
export const AIWithAvatar: Story = {
  args: {
    id: "5",
    user: "AI Assistant",
    message: "Here's the information you requested.",
    timestamp: new Date(),
    isUser: false,
    avatarSrc: "https://api.dicebear.com/7.x/bottts/svg?seed=ai",
  },
};

/**
 * User message with custom avatar
 */
export const UserWithAvatar: Story = {
  args: {
    id: "6",
    user: "Jane Smith",
    message: "Thanks for the help!",
    timestamp: new Date(),
    isUser: true,
    avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
  },
};

/**
 * Message with older timestamp
 */
export const OlderMessage: Story = {
  args: {
    id: "7",
    user: "AI Assistant",
    message: "This message was sent earlier today.",
    timestamp: new Date(Date.now() - 3600000 * 5), // 5 hours ago
    isUser: false,
  },
};

/**
 * Code snippet in message
 */
export const MessageWithCode: Story = {
  args: {
    id: "8",
    user: "AI Assistant",
    message: "Here's a code example: const greeting = 'Hello World'; console.log(greeting);",
    timestamp: new Date(),
    isUser: false,
  },
};
