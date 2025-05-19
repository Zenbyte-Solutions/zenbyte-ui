import React, { useState } from "react";
import classNames from "classnames";

export interface RadioButtonProps {
  /**
   * Label for the radio button (defaults to "Placeholder" if not provided)
   */
  label?: string;

  /**
   * If true, the radio button is selected
   */
  checked?: boolean;

  /**
   * If true, the radio button is disabled
   */
  disabled?: boolean;

  /**
   * If true, the radio button is in focus state (for demonstration)
   */
  focused?: boolean;

  error?: boolean;

  /**
   * Name attribute for the input
   */
  name?: string;

  /**
   * Optional ID for the input
   */
  id?: string;

  /**
   * Value for the radio button
   */
  value?: string;

  /**
   * Callback when the radio button is changed
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Display variant of the radio button
   * @default 'text-right'
   */
  variant?: "radio-only" | "text-right" | "text-left";
}

/**
 * RadioButton component for selecting a single option from a list
 */
export const RadioButton: React.FC<RadioButtonProps> = ({
  label = "Placeholder",
  checked = false,
  disabled = false,
  focused = false,
  error = false,
  name,
  id,
  value,
  onChange,
  variant = "text-right",
}) => {
  const uniqueId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
  const [isHovered, setIsHovered] = useState(false);

  // Compute the classes for the radio button container
  const radioClasses = classNames(
    "flex items-center justify-center w-6 h-6 rounded-full transition-all duration-150 border-2",
    {
      "border-gray-200 opacity-40 cursor-not-allowed": disabled,
      "border-indigo-600 ring-4 ring-indigo-100 cursor-pointer":
        focused && !disabled,
      "border-indigo-600 bg-indigo-50 cursor-pointer":
        isHovered && !disabled && !focused,
      "border-indigo-600 cursor-pointer": !disabled && !focused && !isHovered,
      "border-zb-coral-400": error,
    }
  );

  // Compute the classes for the inner dot when checked
  const dotClasses = classNames("w-3 h-3 rounded-full", {
    "bg-gray-500": disabled,
    "bg-indigo-600": !disabled,
  });

  // Compute label classes
  const labelClasses = classNames("text-base font-medium", {
    "text-gray-200": disabled,
    "text-gray-900": !disabled,
  });

  const renderRadio = () => (
    <div className="relative flex-shrink-0">
      <input
        type="radio"
        id={uniqueId}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="sr-only"
        aria-checked={checked}
      />
      <label
        htmlFor={uniqueId}
        className={radioClasses}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => !disabled && setIsHovered(false)}
      >
        {checked && <span className={dotClasses}></span>}
      </label>
    </div>
  );

  const renderLabel = () => (
    <label htmlFor={uniqueId} className={labelClasses}>
      {label}
    </label>
  );

  if (variant === "radio-only") {
    return renderRadio();
  }

  return (
    <div className="flex items-center gap-3">
      {variant === "text-left" && renderLabel()}
      {renderRadio()}
      {variant === "text-right" && renderLabel()}
    </div>
  );
};

export default RadioButton;
