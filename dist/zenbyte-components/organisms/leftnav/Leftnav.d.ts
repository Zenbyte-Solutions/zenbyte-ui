/**
 * src/components/LeftNav/LeftNav.tsx
 */
import React from "react";
export interface MenuItemType {
    id: string;
    label: string;
    icon: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    children?: MenuItemType[];
}
export interface LeftNavProps {
    logo?: React.ReactNode;
    menuItems?: MenuItemType[];
    userInfo?: {
        name: string;
        email: string;
        avatarSrc?: string;
    };
    className?: string;
    collapsed?: boolean;
    onToggleCollapse?: () => void;
}
declare const LeftNav: React.FC<LeftNavProps>;
export default LeftNav;
