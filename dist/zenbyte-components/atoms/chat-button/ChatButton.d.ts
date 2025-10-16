import React from "react";
export interface ChatButtonProps {
    /**
     * Callback when button is clicked
     */
    onClick: () => void;
    /**
     * Whether to show notification badge
     * @default false
     */
    showBadge?: boolean;
    /**
     * Badge count to display
     */
    badgeCount?: number;
    /**
     * Optional className for custom styling
     */
    className?: string;
    /**
     * Icon to display (defaults to chat icon)
     */
    icon?: React.ReactNode;
    /**
     * Position of the button
     * @default "bottom-right"
     */
    position?: "bottom-right" | "bottom-left";
}
/**
 * ChatButton component - floating button to open chat widget
 * Typically positioned in bottom-right corner of the screen
 */
export declare const ChatButton: React.FC<ChatButtonProps>;
export default ChatButton;
