import React from "react";
export interface TypingIndicatorProps {
    /**
     * Optional className for custom styling
     */
    className?: string;
}
/**
 * TypingIndicator component displays an animated three-dot indicator
 * to show that the AI is processing/typing a response
 */
export declare const TypingIndicator: React.FC<TypingIndicatorProps>;
export default TypingIndicator;
