import React from "react";
interface Page {
    label: string;
    href: string;
}
interface TopNavProps {
    logo?: React.ReactNode;
    cartItemCount?: number;
    onCartClick?: () => void;
    onLoginClick?: () => void;
    user?: {
        name: string;
        avatarUrl?: string;
    };
    pages?: Page[];
}
declare const TopNav: React.FC<TopNavProps>;
export default TopNav;
