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
export const ChatButton: React.FC<ChatButtonProps> = ({
  onClick,
  showBadge = false,
  badgeCount,
  className = "",
  icon,
  position = "bottom-right",
}) => {
  const positionClasses = {
    "bottom-right": "bottom-4 right-4 md:bottom-6 md:right-6",
    "bottom-left": "bottom-4 left-4 md:bottom-6 md:left-6",
  };

  const defaultIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );

  return (
    <button
      onClick={onClick}
      className={`
        fixed
        ${positionClasses[position]}
        w-14 h-14 md:w-16 md:h-16
        bg-zb-indigo-500
        hover:bg-zb-indigo-600
        active:bg-zb-indigo-700
        text-zb-white
        rounded-full
        shadow-zb-500
        hover:shadow-zb-600
        flex
        items-center
        justify-center
        transition-all
        duration-zb-default
        z-50
        focus:outline-none
        focus:ring-4
        focus:ring-zb-indigo-200
        ${className}
      `}
      aria-label="Open chat"
    >
      {icon || defaultIcon}

      {showBadge && (
        <span
          className="
            absolute
            -top-1
            -right-1
            w-5 h-5
            bg-zb-coral-400
            text-zb-white
            rounded-full
            flex
            items-center
            justify-center
            text-zb-desktop-captionMedium
            shadow-zb-200
          "
        >
          {badgeCount && badgeCount > 0 ? (badgeCount > 9 ? "9+" : badgeCount) : ""}
        </span>
      )}
    </button>
  );
};

export default ChatButton;
