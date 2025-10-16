import React, { KeyboardEvent } from "react";

export interface ChatTextInputProps {
  /**
   * Current value of the input
   */
  value: string;

  /**
   * Callback when value changes
   */
  onChange: (value: string) => void;

  /**
   * Callback when Enter key is pressed
   */
  onEnter?: () => void;

  /**
   * Placeholder text
   * @default "Type a message..."
   */
  placeholder?: string;

  /**
   * Whether the input is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Optional className for custom styling
   */
  className?: string;
}

/**
 * ChatTextInput component - specialized input field for chat interfaces
 * with optimized styling and Enter key handling
 */
export const ChatTextInput: React.FC<ChatTextInputProps> = ({
  value,
  onChange,
  onEnter,
  placeholder = "Type a message...",
  disabled = false,
  className = "",
}) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey && onEnter) {
      e.preventDefault();
      onEnter();
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder={placeholder}
      disabled={disabled}
      className={`
        w-full
        px-3 py-2
        text-zb-mobile-bodyRegular
        text-zb-gray-900
        placeholder:text-zb-gray-500
        bg-zb-white
        border border-zb-gray-200
        rounded-zb-input
        focus:outline-none
        focus:ring-2
        focus:ring-zb-indigo-500
        focus:border-transparent
        disabled:bg-zb-gray-100
        disabled:text-zb-gray-500
        disabled:cursor-not-allowed
        transition-zb-default
        ${className}
      `}
      aria-label="Chat message input"
    />
  );
};

export default ChatTextInput;
