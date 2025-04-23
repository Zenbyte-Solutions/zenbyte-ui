import React from "react";

export interface ButtonProps {
  /**
   * Button contents/label
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button variant
   */
  variant?: "primary" | "secondary" | "success" | "danger";
  /**
   * Button size
   */
  size?: "small" | "medium" | "large";
  /**
   * Optional button type
   */
  type?: "button" | "submit" | "reset";
  /**
   * Is button disabled
   */
  disabled?: boolean;
  /**
   * Shadow elevation
   */
  elevation?: "none" | "100" | "200" | "300";
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  type = "button",
  disabled = false,
  elevation = "none",
}: ButtonProps) => {
  // Base classes
  const baseClasses = "rounded focus:outline-none focus:ring-2";

  // Size classes with typography
  const sizeClasses = {
    small: "px-3 py-1.5 dc2",
    medium: "px-4 py-2 db2",
    large: "px-6 py-3 ds2",
  };

  // Variant classes using design system colors
  const variantClasses = {
    primary:
      "bg-zenbyte-indigo-500 hover:bg-zenbyte-indigo-600 text-zenbyte-white focus:ring-zenbyte-indigo-300",
    secondary:
      "bg-zenbyte-gray-200 hover:bg-zenbyte-gray-300 text-zenbyte-gray-900 focus:ring-zenbyte-gray-500",
    success:
      "bg-zenbyte-emerald-400 hover:bg-green-500 text-zenbyte-white focus:ring-green-300",
    danger:
      "bg-zenbyte-coral-400 hover:bg-red-600 text-zenbyte-white focus:ring-red-300",
  };

  // Shadow classes
  const shadowClasses = elevation === "none" ? "" : `shadow-${elevation}`;

  // Disabled classes
  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type={type}
      className={`
        ${baseClasses} 
        ${sizeClasses[size]} 
        ${variantClasses[variant]} 
        ${shadowClasses} 
        ${disabledClasses}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children} {elevation !== "none" && `(shadow-${elevation})`}
    </button>
  );
};

export default Button;
