import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { Check, Minus } from "lucide-react";
import { useFormContext } from "../form/Form";

export interface FormCheckboxProps {
  /**
   * Label for the checkbox (defaults to "Placeholder" if not provided)
   */
  label?: string;
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
  name: string;
  /**
   * Optional ID for the input
   */
  id?: string;
  /**
   * Value for the checkbox
   */
  value?: string;
  /**
   * Display variant of the checkbox
   * @default 'text-right'
   */
  variant?: "checkbox-only" | "text-right" | "text-left";
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  label = "Placeholder",
  indeterminate = false,
  disabled = false,
  focused = false,
  name,
  id,
  value,
  variant = "text-right",
}) => {
  const uniqueId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // ✅ Get form values and errors
  const { values, errors, setValue } = useFormContext();
  const checked = !!values[name];
  const error = errors[name];

  // Set indeterminate if needed
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  // Compute checkbox border classes
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
      "border-zb-coral-400": error,
    }
  );

  const labelClasses = classNames("text-zb-desktop-bodyRegular", {
    "text-gray-200": disabled,
    "text-gray-900": !disabled,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(name, e.target.checked);
  };

  const renderCheckbox = () => (
    <div className="relative flex-shrink-0">
      <input
        type="checkbox"
        id={uniqueId}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
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

  const showError = error && typeof error === "string";

  return (
    <div className="flex flex-col gap-1.5 justify-center">
      <div className="flex items-center gap-3 ">
        {variant === "text-left" && renderLabel()}
        {renderCheckbox()}
        {variant === "text-right" && renderLabel()}
      </div>
      {showError && (
        <p className="text-headlineLarge m-0 text-zb-coral-400">{error}</p>
      )}
    </div>
  );
};

export default FormCheckbox;
