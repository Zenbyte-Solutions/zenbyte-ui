import React from "react";
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
export declare const ChatTextInput: React.FC<ChatTextInputProps>;
export default ChatTextInput;
