/**
 * src/components/MenuItem/MenuItem.tsx
 *
 * Customizable menu item component following Zenbyte UI design system
 */
import React from "react";
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
export declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
