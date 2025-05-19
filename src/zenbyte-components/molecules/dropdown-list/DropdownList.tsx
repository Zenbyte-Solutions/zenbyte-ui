/**
 * src/components/DropdownList/DropdownList.tsx
 *
 * Customizable dropdown list component
 */
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import classNames from "classnames";
import MenuItem from "../../atoms/menu-item/MenuItem";

export interface DropdownListProps {
  options: Array<{
    label: string;
    value: string;
    disabled?: boolean;
  }>;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  errorMessage?: string;
  dropdownLabel?: string;
  onChange?: (value: string) => void;
}

export const DropdownList: React.FC<DropdownListProps> = ({
  options = [],
  value,
  placeholder = "Select an option",
  dropdownLabel = "Dropdown Label",
  disabled = false,
  className,
  errorMessage,
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

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (value: string) => {
    onChange?.(value);
    setIsOpen(false);
  };

  return (
    <div
      className={classNames("relative flex flex-col gap-1.5 w-full", className)}
      ref={dropdownRef}
    >
      <label
        htmlFor="dropdown-select"
        className={classNames(
          "text-bodySmallMedium font-semibold",
          disabled ? "text-zb-gray-400" : "text-zb-gray-700"
        )}
      >
        {dropdownLabel}
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
          className={classNames({
            "text-zb-gray-400": !selectedOption,
            "text-zb-gray-700": selectedOption,
          })}
        >
          {selectedOption?.label || placeholder}
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
          {options.length === 0 ? (
            <MenuItem
              label="No options available"
              disabled
              showChevron={false}
            />
          ) : (
            options.map((option) => (
              <MenuItem
                key={option.value}
                label={option.label}
                disabled={option.disabled}
                active={option.value === value}
                onClick={() => !option.disabled && handleSelect(option.value)}
                showChevron={false}
              />
            ))
          )}
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <p className="text-headlineLarge text-zb-coral-400 m-0">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default DropdownList;
