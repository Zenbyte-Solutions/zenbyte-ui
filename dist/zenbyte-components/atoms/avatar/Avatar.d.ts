import React from "react";
export interface AvatarProps {
    /**
     * Size variant
     * @default 'md'
     */
    size?: "sm" | "md" | "lg";
    /**
     * Image URL (shows image when provided, initials when not)
     */
    src?: string;
    /**
     * Name for initials (e.g., "N OP" → "N" and "OP")
     */
    alt?: string;
    /**
     * Badge content (shows badge when provided)
     */
    badge?: string | number;
    /**
     * Group count (shows +count when provided)
     */
    groupCount?: number;
    /**
     * Badge color variant
     * @default 'emerald'
     */
    badgeColor?: "emerald" | "indigo" | "coral" | "amber";
}
export declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
