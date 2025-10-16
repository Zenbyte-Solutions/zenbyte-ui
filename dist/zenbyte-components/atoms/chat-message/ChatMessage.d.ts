import React from "react";
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
export declare const ChatMessage: React.FC<ChatMessageProps>;
export default ChatMessage;
