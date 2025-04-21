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
}: ButtonProps) => {
  // Base classes
  const baseClasses = "rounded focus:outline-none focus:ring-2";

  // Size classes with typography
  const sizeClasses = {
    small: "px-3 py-1.5 dc2", // Using caption style for small buttons
    medium: "px-4 py-2 db2", // Using body medium style for regular buttons
    large: "px-6 py-3 ds2", // Using subtitle style for large buttons
  };

  // Variant classes using the zenbyte colors
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

  // Disabled classes
  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type={type}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
