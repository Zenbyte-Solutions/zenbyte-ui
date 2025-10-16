import React, { useState } from "react";
import ChatButton from "../../atoms/chat-button/ChatButton";
import ChatContainer from "../chat-container/ChatContainer";
import { ChatMessageProps } from "../../atoms/chat-message/ChatMessage";

export interface ChatWidgetProps {
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
   * Optional title for the chat
   * @default "Chat Assistant"
   */
  title?: string;

  /**
   * Placeholder text for the input field
   * @default "Type a message..."
   */
  placeholder?: string;

  /**
   * Height of the message list area
   * @default "400px"
   */
  height?: string;

  /**
   * Message to display when there are no messages
   * @default "Hello! How can I help you today?"
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

  /**
   * Position of the floating button
   * @default "bottom-right"
   */
  position?: "bottom-right" | "bottom-left";

  /**
   * Whether to show notification badge on button
   * @default false
   */
  showBadge?: boolean;

  /**
   * Badge count to display on button
   */
  badgeCount?: number;

  /**
   * Custom icon for the chat button
   */
  buttonIcon?: React.ReactNode;

  /**
   * Initial open state
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Callback when chat is opened
   */
  onOpen?: () => void;

  /**
   * Callback when chat is closed
   */
  onClose?: () => void;
}

/**
 * ChatWidget component - a complete floating chat assistant widget
 * with open/close functionality and message persistence
 */
export const ChatWidget: React.FC<ChatWidgetProps> = ({
  messages,
  isLoading = false,
  onSendMessage,
  title = "Chat Assistant",
  placeholder = "Type a message...",
  height = "400px",
  emptyStateMessage = "Hello! How can I help you today?",
  buttonText = "Send",
  showArrow = true,
  position = "bottom-right",
  showBadge = false,
  badgeCount,
  buttonIcon,
  defaultOpen = false,
  onOpen,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);

    if (newState && onOpen) {
      onOpen();
    } else if (!newState && onClose) {
      onClose();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const positionClasses = {
    "bottom-right": "bottom-20 right-4 md:bottom-24 md:right-6",
    "bottom-left": "bottom-20 left-4 md:bottom-24 md:left-6",
  };

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <ChatButton
          onClick={handleToggle}
          showBadge={showBadge}
          badgeCount={badgeCount}
          position={position}
          icon={buttonIcon}
        />
      )}

      {/* Chat Container */}
      {isOpen && (
        <div
          className={`
            fixed
            ${positionClasses[position]}
            w-[calc(100vw-2rem)]
            max-w-[400px]
            md:max-w-[450px]
            z-50
            shadow-zb-700
            rounded-zb-cards
            overflow-hidden
            bg-zb-white
          `}
          style={{
            animation: "slideUp 0.3s ease-out",
          }}
        >
          {/* Custom Header with Close Button */}
          <div className="bg-zb-indigo-500 text-zb-white px-4 py-3 flex items-center justify-between flex-shrink-0">
            <h2 className="text-zb-mobile-headlineXXXSmall font-semibold flex-1 truncate pr-2">
              {title}
            </h2>
            <button
              onClick={handleClose}
              className="
                p-1
                hover:bg-zb-indigo-600
                rounded
                transition-colors
                duration-zb-fast
                focus:outline-none
                focus:ring-2
                focus:ring-zb-white
                focus:ring-opacity-50
                flex-shrink-0
              "
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Chat Container without title and card wrapper */}
          <div className="flex flex-col">
            <ChatContainer
              messages={messages}
              isLoading={isLoading}
              onSendMessage={onSendMessage}
              placeholder={placeholder}
              height={height}
              emptyStateMessage={emptyStateMessage}
              buttonText={buttonText}
              showArrow={showArrow}
              className="!shadow-none !border-0 !rounded-none !min-w-0 !max-w-none"
            />
          </div>
        </div>
      )}

      {/* Slide up animation keyframes */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default ChatWidget;
