import React from "react";

/**
 * Spinner size variants
 */
export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Spinner component props
 */
export interface SpinnerProps {
  /**
   * The size of the spinner
   * @default 'md'
   */
  size?: SpinnerSize;

  /**
   * The Zenbyte color class to use for the spinner
   * Should be a full class name (e.g., 'text-zb-indigo-600')
   * @default 'text-zb-indigo-600'
   */
  colorClass?: string;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * The thickness of the spinner stroke
   * @default Varies based on size
   */
  strokeWidth?: number;

  /**
   * Speed of rotation animation
   * @default 'default'
   */
  speed?: "slow" | "default" | "fast";

  /**
   * Aria label for accessibility
   * @default 'Loading'
   */
  ariaLabel?: string;
}

/**
 * Spinner component
 *
 * A circular loading indicator with configurable size and rotation speed
 * that uses the Zenbyte UI color system classes.
 */
export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  colorClass = "text-zb-indigo-600",
  className = "",
  strokeWidth,
  speed = "default",
  ariaLabel = "Loading",
}) => {
  // Size mappings
  const sizeMap = {
    xs: {
      dimension: 16,
      defaultStrokeWidth: 2,
    },
    sm: {
      dimension: 24,
      defaultStrokeWidth: 2.5,
    },
    md: {
      dimension: 32,
      defaultStrokeWidth: 3,
    },
    lg: {
      dimension: 48,
      defaultStrokeWidth: 4,
    },
    xl: {
      dimension: 64,
      defaultStrokeWidth: 5,
    },
  };

  // Speed mappings to Zenbyte animation classes
  const speedMap = {
    slow: "animate-zb-spin-slow",
    default: "animate-zb-spin",
    fast: "animate-zb-spin-fast",
  };

  const { dimension, defaultStrokeWidth } = sizeMap[size];
  const actualStrokeWidth = strokeWidth || defaultStrokeWidth;
  const spinnerSpeed = speedMap[speed];

  return (
    <div className={className} role="status">
      <svg
        className={`${spinnerSpeed} ${colorClass}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={dimension}
        height={dimension}
        aria-label={ariaLabel}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth={actualStrokeWidth}
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span className="sr-only">{ariaLabel}</span>
    </div>
  );
};

export default Spinner;
