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

export const Avatar: React.FC<AvatarProps> = ({
  size = "md",
  src,
  alt = "OP",
  badge,
  groupCount,
  badgeColor = "emerald",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs", // 32px
    md: "w-10 h-10 text-sm", // 40px
    lg: "w-12 h-12 text-base", // 48px
  };

  // Smaller badge sizes
  const badgeClasses = {
    sm: "w-3 h-3 -bottom-0.5 -right-0.5 text-[8px]",
    md: "w-3.5 h-3.5 -bottom-0.5 -right-0.5 text-[9px]",
    lg: "w-4 h-4 -bottom-0.5 -right-0.5 text-[10px]",
  };

  const badgeColors = {
    emerald: "bg-emerald-400",
    indigo: "bg-indigo-600",
    coral: "bg-coral-400",
    amber: "bg-amber-400",
  };

  // Generate initials (first letters of each word)
  const initials = alt
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  if (groupCount) {
    return (
      <div className="flex items-center">
        {/* First avatar */}
        <div
          className={`w-8 h-8 rounded-full bg-gray-200 border-2 border-white relative z-10 flex items-center justify-center`}
        >
          <span className="font-medium text-gray-600 text-xs">N</span>
        </div>

        {/* Second avatar */}
        <div
          className={`w-8 h-8 rounded-full bg-gray-200 border-2 border-white relative -ml-2 z-20 flex items-center justify-center`}
        >
          <span className="font-medium text-gray-600 text-xs">OP</span>
        </div>

        {/* Group count */}
        <div
          className={`w-8 h-8 rounded-full bg-gray-200 border-2 border-white relative -ml-2 z-30 flex items-center justify-center`}
        >
          <span className="font-medium text-gray-600 text-xs">
            +{groupCount}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block">
      <div
        className={`${sizeClasses[size]} rounded-full bg-gray-200 flex items-center justify-center overflow-hidden`}
      >
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <span className="font-medium text-gray-600">{initials}</span>
        )}
      </div>

      {badge && (
        <span
          className={`absolute ${badgeClasses[size]} ${badgeColors[badgeColor]} text-white rounded-full flex items-center justify-center`}
        ></span>
      )}
    </div>
  );
};

export default Avatar;
