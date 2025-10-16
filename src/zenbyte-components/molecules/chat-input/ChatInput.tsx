import React, { useState } from "react";
import ChatTextInput from "../../atoms/chat-text-input/ChatTextInput";
import Button from "../../atoms/button/Button";

export interface ChatInputProps {
  /**
   * Callback function when a message is sent
   */
  onSend: (message: string) => void;

  /**
   * Whether the input is disabled (e.g., while loading)
   * @default false
   */
  disabled?: boolean;

  /**
   * Placeholder text for the input
   * @default "Type a message..."
   */
  placeholder?: string;

  /**
   * Optional className for custom styling
   */
  className?: string;

  /**
   * Button text
   * @default "Send"
   */
  buttonText?: string;

  /**
   * Show arrow icon on button
   * @default true
   */
  showArrow?: boolean;
}

/**
 * ChatInput component provides an input field and send button
 * for sending messages in a chat interface
 */
export const ChatInput: React.FC<ChatInputProps> = ({
  onSend,
  disabled = false,
  placeholder = "Type a message...",
  className = "",
  buttonText = "Send",
  showArrow = true,
}) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const trimmedMessage = message.trim();
    if (trimmedMessage && !disabled) {
      onSend(trimmedMessage);
      setMessage("");
    }
  };

  return (
    <div
      className={`flex gap-2 items-center px-4 py-3 border-t border-zb-gray-200 ${className}`}
    >
      <div className="flex-1 min-w-0">
        <ChatTextInput
          value={message}
          onChange={setMessage}
          onEnter={handleSend}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
      <Button
        variant="filled"
        color="primary"
        size="small"
        onClick={handleSend}
        disabled={disabled || !message.trim()}
        showArrow={showArrow}
        arrowPosition="right"
        className="flex-shrink-0"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ChatInput;
