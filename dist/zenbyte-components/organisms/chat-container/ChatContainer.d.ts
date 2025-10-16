import React from "react";
import { ChatMessageProps } from "../../atoms/chat-message/ChatMessage";
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
export declare const ChatContainer: React.FC<ChatContainerProps>;
export default ChatContainer;
