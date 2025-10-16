import React, { useEffect, useRef } from "react";
import ChatMessage, {
  ChatMessageProps,
} from "../../atoms/chat-message/ChatMessage";
import TypingIndicator from "../../atoms/typing-indicator/TypingIndicator";

export interface ChatMessageListProps {
  /**
   * Array of messages to display
   */
  messages: ChatMessageProps[];

  /**
   * Whether to show the typing indicator
   * @default false
   */
  isLoading?: boolean;

  /**
   * Whether to auto-scroll to the bottom when new messages arrive
   * @default true
   */
  autoScroll?: boolean;

  /**
   * Custom height for the message list container
   * @default "400px"
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
}

/**
 * ChatMessageList component displays a scrollable list of chat messages
 * with auto-scroll functionality and typing indicator support
 */
export const ChatMessageList: React.FC<ChatMessageListProps> = ({
  messages,
  isLoading = false,
  autoScroll = true,
  height = "400px",
  className = "",
  emptyStateMessage = "No messages yet. Start a conversation!",
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change or loading state changes
  useEffect(() => {
    if (autoScroll && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, autoScroll]);

  return (
    <div
      ref={containerRef}
      className={`overflow-y-auto px-4 py-4 ${className}`}
      style={{ height }}
    >
      {messages.length === 0 && !isLoading ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-zb-mobile-bodyRegular md:text-zb-desktop-bodyRegular text-zb-gray-500 text-center">
            {emptyStateMessage}
          </p>
        </div>
      ) : (
        <>
          {messages.map((message) => (
            <ChatMessage key={message.id} {...message} />
          ))}

          {isLoading && (
            <div className="flex gap-2">
              <div className="w-8 h-8 flex-shrink-0" />
              <TypingIndicator />
            </div>
          )}

          {/* Invisible element to scroll to */}
          <div ref={messagesEndRef} />
        </>
      )}
    </div>
  );
};

export default ChatMessageList;
