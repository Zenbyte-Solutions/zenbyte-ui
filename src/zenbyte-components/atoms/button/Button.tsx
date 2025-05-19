import React from "react";
import classNames from "classnames";

export interface ButtonProps {
  /**
   * Button content
   */
  children?: React.ReactNode;

  /**
   * Additional className
   */
  className?: string;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Show arrow on button
   * @default false
   */
  showArrow?: boolean;

  /**
   * Arrow position ('left' or 'right')
   * @default 'right'
   */
  arrowPosition?: "left" | "right";

  /**
   * Button size variant
   * @default 'giant'
   */
  size?: "giant" | "large" | "medium" | "small" | "tiny";

  /**
   * Button variant type
   * @default 'filled'
   */
  variant?: "filled" | "border" | "text";

  /**
   * Button color scheme
   * @default 'primary'
   */
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "error"
    | "alert";

  /**
   * Button type variant
   * @default 'default'
   */
  type?: "default" | "non-border";

  /**
   * HTML button type attribute
   * @default 'button'
   */
  htmlType?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children = "Button",
  className,
  onClick,
  disabled = false,
  showArrow = false,
  arrowPosition = "right",
  size = "giant",
  variant = "filled",
  color = "primary",
  type = "default",
  htmlType = "button",
}) => {
  // Size classes for width, height, and text
  const sizeClasses = {
    giant: "min-w-[118px] h-[56px] text-lg px-6",
    large: "min-w-[104px] h-[48px] text-md px-5",
    medium: "min-w-[90px] h-[40px] text-zb-mobile-bodySmallRegular px-4",
    small: "min-w-[76px] h-[32px] text-zb-mobile-bodySmallRegular px-3",
    tiny: "min-w-[64px] h-[28px] text-xs px-2",
  };

  // Focus ring colors for different button colors
  const focusRingColors = {
    primary: "focus:ring-zb-indigo-300",
    secondary: "focus:ring-zb-gray-300",
    danger: "focus:ring-zb-coral-300",
    success: "focus:ring-zb-emerald-300",
    warning: "focus:ring-zb-amber-300",
    error: "focus:ring-zb-coral-300",
    alert: "focus:ring-zb-amber-300",
  };

  // Color and variant styles
  const colorVariants = {
    primary: {
      filled: {
        base: "bg-zb-indigo-500 text-zb-white",
        hover: "hover:bg-zb-indigo-600",
        active: "active:bg-zb-indigo-700",
        disabled: "bg-zb-gray-200 text-zb-gray-500",
        border: "border-zb-indigo-500",
        text: "text-zb-indigo-500",
      },
      border: {
        base: "border-2 border-zb-indigo-500 text-zb-indigo-500",
        hover:
          "hover:bg-zb-indigo-50 hover:text-zb-indigo-600 hover:border-zb-indigo-600",
        active: "active:bg-zb-indigo-100",
        disabled: "border-zb-gray-300 text-zb-gray-500",
      },
      text: {
        base: "text-zb-indigo-500",
        hover: "hover:bg-zb-indigo-50",
        active: "active:bg-zb-indigo-100",
        disabled: "text-zb-gray-500",
      },
    },
    secondary: {
      filled: {
        base: "bg-zb-gray-700 text-zb-white",
        hover: "hover:bg-zb-gray-900",
        active: "active:bg-zb-shadow",
        disabled: "bg-zb-gray-200 text-zb-gray-500",
        border: "border-zb-gray-700",
        text: "text-zb-gray-700",
      },
      border: {
        base: "border-2 border-zb-gray-700 text-zb-gray-700",
        hover:
          "hover:bg-zb-gray-100 hover:text-zb-gray-900 hover:border-zb-gray-900",
        active: "active:bg-zb-gray-200",
        disabled: "border-zb-gray-300 text-zb-gray-500",
      },
      text: {
        base: "text-zb-gray-700",
        hover: "hover:bg-zb-gray-100",
        active: "active:bg-zb-gray-200",
        disabled: "text-zb-gray-500",
      },
    },
    danger: {
      filled: {
        base: "bg-zb-coral-400 text-zb-white",
        hover: "hover:bg-red-500",
        active: "active:bg-red-600",
        disabled: "bg-zb-gray-200 text-zb-gray-500",
        border: "border-zb-coral-400",
        text: "text-zb-coral-400",
      },
      border: {
        base: "border-2 border-zb-coral-400 text-zb-coral-400",
        hover: "hover:bg-zb-coral-50 hover:text-red-500 hover:border-red-500",
        active: "active:bg-red-100",
        disabled: "border-zb-gray-300 text-zb-gray-500",
      },
      text: {
        base: "text-zb-coral-400",
        hover: "hover:bg-zb-coral-50",
        active: "active:bg-red-100",
        disabled: "text-zb-gray-500",
      },
    },
    success: {
      filled: {
        base: "bg-zb-emerald-400 text-zb-white",
        hover: "hover:bg-green-500",
        active: "active:bg-green-600",
        disabled: "bg-zb-gray-200 text-zb-gray-500",
        border: "border-zb-emerald-400",
        text: "text-zb-emerald-400",
      },
      border: {
        base: "border-2 border-zb-emerald-400 text-zb-emerald-400",
        hover:
          "hover:bg-zb-emerald-50 hover:text-green-500 hover:border-green-500",
        active: "active:bg-green-100",
        disabled: "border-zb-gray-300 text-zb-gray-500",
      },
      text: {
        base: "text-zb-emerald-400",
        hover: "hover:bg-zb-emerald-50",
        active: "active:bg-green-100",
        disabled: "text-zb-gray-500",
      },
    },
    warning: {
      filled: {
        base: "bg-zb-amber-300 text-zb-white",
        hover: "hover:bg-yellow-400",
        active: "active:bg-yellow-500",
        disabled: "bg-zb-gray-200 text-zb-gray-500",
        border: "border-zb-amber-300",
        text: "text-zb-amber-300",
      },
      border: {
        base: "border-2 border-zb-amber-300 text-zb-amber-300",
        hover:
          "hover:bg-zb-amber-50 hover:text-yellow-400 hover:border-yellow-400",
        active: "active:bg-yellow-100",
        disabled: "border-zb-gray-300 text-zb-gray-500",
      },
      text: {
        base: "text-zb-amber-300",
        hover: "hover:bg-zb-amber-50",
        active: "active:bg-yellow-100",
        disabled: "text-zb-gray-500",
      },
    },
    error: {
      filled: {
        base: "bg-zb-coral-400 text-zb-white",
        hover: "hover:bg-red-500",
        active: "active:bg-red-600",
        disabled: "bg-zb-gray-200 text-zb-gray-500",
        border: "border-zb-coral-400",
        text: "text-zb-coral-400",
      },
      border: {
        base: "border-2 border-zb-coral-400 text-zb-coral-400",
        hover: "hover:bg-zb-coral-50 hover:text-red-500 hover:border-red-500",
        active: "active:bg-red-100",
        disabled: "border-zb-gray-300 text-zb-gray-500",
      },
      text: {
        base: "text-zb-coral-400",
        hover: "hover:bg-zb-coral-50",
        active: "active:bg-red-100",
        disabled: "text-zb-gray-500",
      },
    },
    alert: {
      filled: {
        base: "bg-zb-amber-300 text-zb-white",
        hover: "hover:bg-yellow-400",
        active: "active:bg-yellow-500",
        disabled: "bg-zb-gray-200 text-zb-gray-500",
        border: "border-zb-amber-300",
        text: "text-zb-amber-300",
      },
      border: {
        base: "border-2 border-zb-amber-300 text-zb-amber-300",
        hover:
          "hover:bg-zb-amber-50 hover:text-yellow-400 hover:border-yellow-400",
        active: "active:bg-yellow-100",
        disabled: "border-zb-gray-300 text-zb-gray-500",
      },
      text: {
        base: "text-zb-amber-300",
        hover: "hover:bg-zb-amber-50",
        active: "active:bg-yellow-100",
        disabled: "text-zb-gray-500",
      },
    },
  };

  // Non-border specific classes
  const nonBorderClasses = classNames(
    "rounded-zb-button flex items-center justify-center",
    "text-lg font-semibold focus:ring-4 focus:outline-none",
    "transition-colors duration-zb-500",
    disabled
      ? "text-zb-gray-500 cursor-not-allowed"
      : "text-zb-indigo-500 hover:bg-zb-indigo-50 hover:text-zb-indigo-600 active:bg-zb-indigo-100",
    className
  );

  if (type === "non-border") {
    return (
      <button
        type={htmlType}
        className={nonBorderClasses}
        onClick={!disabled ? onClick : undefined}
        disabled={disabled}
        aria-disabled={disabled}
      >
        {children}
      </button>
    );
  }

  // Determine button classes based on variant and state
  const variantStyles = disabled
    ? colorVariants[color][variant].disabled
    : `${colorVariants[color][variant].base} ${colorVariants[color][variant].hover} ${colorVariants[color][variant].active}`;

  const buttonClasses = classNames(
    // Base styles
    "rounded-zb-button flex items-center justify-center font-semibold",
    "focus:ring-4 focus:outline-none",
    focusRingColors[color],
    "transition-colors duration-zb-500",
    disabled ? "cursor-not-allowed" : "cursor-pointer",

    // Size classes
    sizeClasses[size],

    // Variant and color styles
    variantStyles,

    className
  );

  const renderArrow = () => {
    if (!showArrow) return null;

    const arrowSize = {
      giant: 20,
      large: 18,
      medium: 16,
      small: 14,
      tiny: 12,
    };

    const arrowColor = disabled
      ? "text-zb-gray-400"
      : variant === "filled"
      ? "text-zb-white"
      : `text-${colorVariants[color][variant].base.split(" ")[1]}`;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={arrowSize[size]}
        height={arrowSize[size]}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={classNames(
          "inline-block",
          arrowColor,
          arrowPosition === "left" ? "mr-2" : "ml-2"
        )}
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    );
  };

  return (
    <button
      type={htmlType}
      className={buttonClasses}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {arrowPosition === "left" && renderArrow()}
      {children}
      {arrowPosition === "right" && renderArrow()}
    </button>
  );
};

export default Button;
