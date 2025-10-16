import React from "react";
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
export declare const ChatInput: React.FC<ChatInputProps>;
export default ChatInput;
