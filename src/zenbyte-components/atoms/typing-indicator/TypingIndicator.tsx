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
export const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex items-center gap-1 px-4 py-3 bg-zb-gray-100 rounded-zb-cards w-fit ${className}`}
      role="status"
      aria-label="AI is typing"
    >
      <span
        className="w-2 h-2 bg-zb-gray-500 rounded-full animate-bounce"
        style={{ animationDelay: "0ms", animationDuration: "1.4s" }}
      />
      <span
        className="w-2 h-2 bg-zb-gray-500 rounded-full animate-bounce"
        style={{ animationDelay: "200ms", animationDuration: "1.4s" }}
      />
      <span
        className="w-2 h-2 bg-zb-gray-500 rounded-full animate-bounce"
        style={{ animationDelay: "400ms", animationDuration: "1.4s" }}
      />
    </div>
  );
};

export default TypingIndicator;
