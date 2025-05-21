/**
 * src/components/MultiSelectDropdown/MultiSelectDropdown.tsx
 *
 * Customizable multi-select dropdown component
 */
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import classNames from "classnames";
import Checkbox from "../../atoms/checkbox/Checkbox";

export interface MultiSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface MultiSelectDropdownProps {
  options: MultiSelectOption[];
  values?: string[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  errorMessage?: string;
  dropDownLabel?: string;
  onChange?: (selectedValues: string[]) => void;
}

export const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options = [],
  values = [],
  placeholder = "Select options",
  disabled = false,
  className,
  errorMessage,
  dropDownLabel = "",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle individual option selection
  const handleOptionToggle = (optionValue: string) => {
    if (disabled) return;

    const newSelectedValues = values.includes(optionValue)
      ? values.filter((value) => value !== optionValue)
      : [...values, optionValue];

    onChange?.(newSelectedValues);
  };

  // Handle select all
  const handleSelectAll = () => {
    if (disabled) return;

    const allValues = options.map((option) => option.value);
    const isCurrentlyAllSelected = values.length === options.length;

    onChange?.(isCurrentlyAllSelected ? [] : allValues);
  };

  // Clear all selections
  const handleClear = () => {
    if (disabled) return;
    onChange?.([]);
  };

  // Determine display text
  const getDisplayText = () => {
    if (values.length === 0) return placeholder;
    if (values.length === 1) {
      return (
        options.find((opt) => opt.value === values[0])?.label || placeholder
      );
    }
    return `${values.length} options selected`;
  };

  return (
    <div
      className={classNames(
        "relative w-[300px] flex flex-col gap-1.5",
        className
      )}
      ref={dropdownRef}
    >
      <label
        htmlFor="multi-select-dropdown"
        className={classNames(
          "text-bodySmallMedium font-semibold",
          disabled ? "text-zb-gray-400" : "text-zb-gray-700"
        )}
      >
        {dropDownLabel}
        {errorMessage && <span className="ml-1 text-zb-coral-400">*</span>}
      </label>

      {/* Trigger */}
      <div
        className={classNames(
          // Base styling
          "flex items-center justify-between px-4 py-3 h-10",
          "rounded-md border",
          "cursor-pointer select-none",
          "transition-all duration-300",

          // State variations
          {
            // Disabled state
            "bg-zb-gray-100 cursor-not-allowed border-zb-gray-200": disabled,

            // Default state
            "bg-zb-white border-zb-gray-300 hover:border-zb-indigo-400 hover:ring-1 hover:ring-zb-indigo-50":
              !disabled,

            // Error state
            "border-zb-coral-400 ring-1 ring-zb-coral-50":
              errorMessage && !disabled,
          }
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span
          className={classNames("text-zb-desktop-bodyRegular", {
            "text-zb-gray-400": values.length === 0,
            "text-zb-gray-700": values.length > 0,
          })}
        >
          {getDisplayText()}
        </span>
        {isOpen ? (
          <ChevronUp size={18} className="text-zb-gray-500" />
        ) : (
          <ChevronDown size={18} className="text-zb-gray-500" />
        )}
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 overflow-auto border rounded-md shadow-lg bg-zb-white border-zb-gray-200 max-h-60">
          {/* Select All and Clear */}
          <div className="flex items-center justify-between px-4 py-3">
            <Checkbox
              label="Select all"
              checked={values.length === options.length}
              onChange={handleSelectAll}
              disabled={disabled}
            />
            <button
              onClick={handleClear}
              disabled={disabled}
              className={classNames(
                "text-zb-desktop-bodyRegular text-zb-indigo-500",
                values.length === 0
                  ? "text-zb-gray-300 cursor-not-allowed"
                  : "text-zb-indigo-500 hover:text-zb-indigo-600"
              )}
            >
              Clear
            </button>
          </div>

          {/* Options */}
          <div className="py-2 pl-4">
            {options.map((option) => (
              <div
                key={option.value}
                className="px-4 py-2 hover:bg-zb-indigo-50"
              >
                <Checkbox
                  label={option.label}
                  checked={values.includes(option.value)}
                  onChange={() => handleOptionToggle(option.value)}
                  disabled={option.disabled || disabled}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <p className="mt-2 text-headlineLarge text-zb-coral-400">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
