import React from "react";
import { ChatMessageProps } from "../../atoms/chat-message/ChatMessage";
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
export declare const ChatMessageList: React.FC<ChatMessageListProps>;
export default ChatMessageList;
