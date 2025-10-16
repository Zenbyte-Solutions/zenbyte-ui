import React from "react";
import Avatar from "../avatar/Avatar";

export interface ChatMessageProps {
  /**
   * Unique identifier for the message
   */
  id: string;

  /**
   * Name of the user who sent the message
   */
  user: string;

  /**
   * The message content
   */
  message: string;

  /**
   * Timestamp when the message was sent
   */
  timestamp: Date;

  /**
   * Whether this message is from the current user (true) or AI (false)
   * @default false
   */
  isUser?: boolean;

  /**
   * Avatar image URL for the sender
   */
  avatarSrc?: string;
}

/**
 * ChatMessage component displays a single message in a chat interface
 * with avatar, message content, and timestamp
 */
export const ChatMessage: React.FC<ChatMessageProps> = ({
  user,
  message,
  timestamp,
  isUser = false,
  avatarSrc,
}) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className={`flex gap-2 md:gap-3 ${isUser ? "flex-row-reverse" : "flex-row"} mb-4 md:mb-6`}
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        <Avatar size="sm" src={avatarSrc} alt={user} />
      </div>

      {/* Message Content */}
      <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} max-w-[75%] md:max-w-[70%]`}>
        {/* User name and timestamp */}
        <div className={`flex items-center gap-2 mb-1 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-zb-mobile-bodySmallMedium md:text-zb-desktop-bodySmallMedium text-zb-gray-700">
            {user}
          </span>
          <span className="text-zb-mobile-captionRegular md:text-zb-desktop-captionRegular text-zb-gray-500">
            {formatTime(timestamp)}
          </span>
        </div>

        {/* Message bubble */}
        <div
          className={`
            inline-block
            min-w-[120px]
            px-3 py-2 md:px-4 md:py-3
            rounded-zb-cards
            text-zb-mobile-bodyRegular md:text-zb-desktop-bodyRegular
            break-words
            ${
              isUser
                ? "bg-zb-indigo-500 text-zb-white"
                : "bg-zb-gray-100 text-zb-gray-900"
            }
          `}
        >
          {message}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
