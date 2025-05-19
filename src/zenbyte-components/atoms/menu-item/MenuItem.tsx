/**
 * src/components/MenuItem/MenuItem.tsx
 *
 * Customizable menu item component following Zenbyte UI design system
 */
import React from "react";
import classNames from "classnames";
import { ChevronRight } from "lucide-react";

export interface MenuItemProps {
  /** Text label for the menu item (optional) */
  label?: string;
  /** Indicates if the item is selected */
  selected?: boolean;
  /** Indicates if the item is active */
  active?: boolean;
  /** Disables the menu item */
  disabled?: boolean;
  /** Click event handler */
  onClick?: () => void;
  /** Displays trailing icon */
  showChevron?: boolean;
  /** Icon component */
  icon?: React.ReactNode;
  /** Custom trailing icon (replaces default chevron) */
  trailingIcon?: React.ReactNode;
  /** Tooltip text for when label isn't visible */
  tooltip?: string;
  /** Indicates if parent menu is collapsed */
  collapsed?: boolean;
  /** Callback to toggle parent menu's collapsed state */
  onToggleCollapse?: () => void;
}

/**
 * MenuItem component with flexible styling and interaction states
 * Supports nested menu structures with customizable trailing icons
 */
export const MenuItem: React.FC<MenuItemProps> = ({
  label,
  selected = false,
  active = false,
  disabled = false,
  onClick,
  showChevron = true,
  collapsed = false,
  onToggleCollapse,
  icon,
  trailingIcon,
  tooltip,
}) => {
  // Compute classes for the menu item using design system utilities
  const itemClasses = classNames(
    // Base classes
    "flex items-center justify-between px-3 py-2 pl-[14px] rounded-md transition-colors duration-300 w-full",
    "text-zb-desktop-bodySmallRegular", // Consistent typography from design system

    // Layout based on collapsed state
    {
      "justify-between": label, // Space between when label exists
      "justify-center": !label, // Center when no label (collapsed)
    },

    // State-based styling
    {
      // Default state
      "bg-white text-zb-gray-700": !selected && !active && !disabled,

      // Selected state
      "bg-zb-indigo-50 text-zb-gray-700": selected && !active && !disabled,

      // Active state
      "bg-zb-indigo-500 text-white": active && !disabled,

      // Disabled state
      "bg-zb-gray-100 text-zb-gray-400 cursor-not-allowed": disabled,

      // Interaction states
      "cursor-pointer": !disabled,
      "hover:bg-zb-indigo-50 hover:text-zb-gray-900":
        !selected && !active && !disabled,
    }
  );

  // Chevron icon classes
  const chevronClasses = classNames({
    "text-zb-gray-400": !active && !disabled,
    "text-white": active,
    "text-zb-gray-300": disabled,
    hidden: !label, // Hide chevron when no label
  });

  // Handle click event
  const handleClick = () => {
    if (disabled) return;

    // If menu is collapsed, expand it first
    if (collapsed && onToggleCollapse) {
      onToggleCollapse();
      return;
    }

    // Otherwise proceed with normal click handler
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={itemClasses}
      onClick={handleClick}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      title={tooltip}
    >
      <div className="flex items-center">
        {icon && (
          <span className={label ? "mr-3 flex-shrink-0" : ""}>{icon}</span>
        )}
        {label && <span className="truncate">{label}</span>}
      </div>
      {showChevron &&
        label &&
        (trailingIcon || <ChevronRight size={16} className={chevronClasses} />)}
    </div>
  );
};

export default MenuItem;
