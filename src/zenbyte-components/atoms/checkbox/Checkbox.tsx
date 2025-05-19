import React, { useState } from "react";
import classNames from "classnames";
import { Check, Minus } from "lucide-react";

export interface CheckboxProps {
  /**
   * Label for the checkbox (defaults to "Placeholder" if not provided)
   */
  label?: string;

  /**
   * If true, the checkbox is checked
   */
  checked?: boolean;

  /**
   * If true, the checkbox is in an indeterminate state
   */
  indeterminate?: boolean;

  /**
   * If true, the checkbox is disabled
   */
  disabled?: boolean;

  /**
   * If true, the checkbox is in focus state (for demonstration)
   */
  focused?: boolean;

  /**
   * Name attribute for the input
   */
  name?: string;

  /**
   * Optional ID for the input
   */
  id?: string;

  /**
   * Value for the checkbox
   */
  value?: string;

  /**
   * Callback when the checkbox is changed
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Display variant of the checkbox
   * @default 'text-right'
   */
  variant?: "checkbox-only" | "text-right" | "text-left";
}

/**
 * Checkbox component for selecting multiple options from a list
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  label = "Placeholder",
  checked = false,
  indeterminate = false,
  disabled = false,
  focused = false,
  name,
  id,
  value,
  onChange,
  variant = "text-right",
}) => {
  const uniqueId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  const [isHovered, setIsHovered] = useState(false);

  // Ensure the indeterminate property is set on the input
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  // Compute the classes for the checkbox container
  const checkboxClasses = classNames(
    "flex items-center justify-center w-6 h-6 rounded-md transition-all duration-150 border-2",
    {
      "border-gray-200 bg-gray-100 opacity-40 cursor-not-allowed": disabled,
      "border-indigo-600 ring-4 ring-indigo-100 cursor-pointer":
        focused && !disabled,
      "border-indigo-600 bg-indigo-50 cursor-pointer":
        isHovered && !disabled && !focused,
      "border-indigo-600 cursor-pointer": !disabled && !focused && !isHovered,
      "bg-indigo-600": (checked || indeterminate) && !disabled,
    }
  );

  // Compute label classes
  const labelClasses = classNames("text-zb-desktop-bodyRegular", {
    "text-gray-200": disabled,
    "text-gray-900": !disabled,
  });

  const renderCheckbox = () => (
    <div className="relative flex-shrink-0">
      <input
        type="checkbox"
        id={uniqueId}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="sr-only"
        aria-checked={indeterminate ? "mixed" : checked}
        ref={inputRef}
      />
      <label
        htmlFor={uniqueId}
        className={checkboxClasses}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => !disabled && setIsHovered(false)}
      >
        {checked && !indeterminate && (
          <Check size={16} className="text-white" />
        )}
        {indeterminate && <Minus size={16} className="text-white" />}
      </label>
    </div>
  );

  const renderLabel = () => (
    <label htmlFor={uniqueId} className={labelClasses}>
      {label}
    </label>
  );

  if (variant === "checkbox-only") {
    return renderCheckbox();
  }

  return (
    <div className="flex items-center gap-3">
      {variant === "text-left" && renderLabel()}
      {renderCheckbox()}
      {variant === "text-right" && renderLabel()}
    </div>
  );
};

export default Checkbox;
