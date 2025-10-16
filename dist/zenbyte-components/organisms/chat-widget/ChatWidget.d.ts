import React from "react";
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
export declare const ChatWidget: React.FC<ChatWidgetProps>;
export default ChatWidget;
