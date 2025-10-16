import React from "react";
import ChatMessageList from "../../molecules/chat-message-list/ChatMessageList";
import ChatInput from "../../molecules/chat-input/ChatInput";
import { ChatMessageProps } from "../../atoms/chat-message/ChatMessage";
import Card from "../../atoms/card/Card";

export interface ChatContainerProps {
  /**
   * Array of chat messages to display
   */
  messages: ChatMessageProps[];

  /**
   * Whether the AI is currently processing/typing a response
   * @default false
   */
  isLoading?: boolean;

  /**
   * Callback function when a new message is sent
   */
  onSendMessage: (message: string) => void;

  /**
   * Optional title for the chat container
   */
  title?: string;

  /**
   * Placeholder text for the input field
   * @default "Type a message..."
   */
  placeholder?: string;

  /**
   * Height of the message list area
   * @default "500px"
   */
  height?: string;

  /**
   * Optional className for custom styling
   */
  className?: string;

  /**
   * Message to display when there are no messages
   * @default "No messages yet. Start a conversation!"
   */
  emptyStateMessage?: string;

  /**
   * Button text for send button
   * @default "Send"
   */
  buttonText?: string;

  /**
   * Whether to show arrow on send button
   * @default true
   */
  showArrow?: boolean;
}

/**
 * ChatContainer component provides a complete AI chat interface
 * composed of message list and input components
 */
export const ChatContainer: React.FC<ChatContainerProps> = ({
  messages,
  isLoading = false,
  onSendMessage,
  title,
  placeholder = "Type a message...",
  height = "500px",
  className = "",
  emptyStateMessage = "No messages yet. Start a conversation!",
  buttonText = "Send",
  showArrow = true,
}) => {
  return (
    <Card className={`flex flex-col w-full min-w-[320px] md:min-w-[500px] max-w-4xl p-0 ${className}`} shadow="none">
      {title && (
        <div className="px-4 py-3 md:px-6 md:py-4 border-b border-zb-gray-200">
          <h2 className="text-zb-mobile-headlineXXXSmall md:text-zb-desktop-headlineXXXSmall text-zb-gray-900">
            {title}
          </h2>
        </div>
      )}

      <ChatMessageList
        messages={messages}
        isLoading={isLoading}
        height={height}
        emptyStateMessage={emptyStateMessage}
      />

      <ChatInput
        onSend={onSendMessage}
        disabled={isLoading}
        placeholder={placeholder}
        buttonText={buttonText}
        showArrow={showArrow}
      />
    </Card>
  );
};

export default ChatContainer;
