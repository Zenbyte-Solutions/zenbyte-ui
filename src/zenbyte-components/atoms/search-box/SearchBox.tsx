// src/components/atoms/SearchBox/SearchBox.tsx
import React, { useState } from "react";
import { Search, X } from "lucide-react";

interface SearchBoxProps {
  /**
   * Search box variant
   */
  variant?: "default" | "filled" | "hover" | "focus" | "disabled";

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Initial search value
   */
  value?: string;

  /**
   * Callback when search changes
   */
  onChange?: (value: string) => void;

  /**
   * Callback when search is cleared
   */
  onClear?: () => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  variant = "default",
  placeholder = "Search...",
  value: initialValue = "",
  onChange,
  onClear,
}) => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleClear = () => {
    setValue("");
    onClear?.();
  };

  const handleFocus = () => {
    if (variant !== "disabled") {
      setIsFocused(true);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleMouseEnter = () => {
    if (variant !== "disabled") {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Variant styling
  const variantStyles = {
    default: {
      border: isHovered ? "border border-indigo-400" : "border border-gray-200",
      bg: "bg-white",
      text: "text-gray-500",
    },
    filled: {
      border: isHovered ? "border border-indigo-400" : "border border-gray-200",
      bg: "bg-white",
      text: "text-gray-500",
    },
    hover: {
      border: "border border-indigo-400",
      bg: "bg-white",
      text: "text-gray-500",
    },
    focus: {
      border: "border-2 border-indigo-400",
      bg: "bg-white",
      text: "text-gray-900",
    },
    disabled: {
      border: "border border-gray-200",
      bg: "bg-gray-100",
      text: "text-gray-400",
    },
  };

  const currentVariant = isFocused
    ? "focus"
    : variant === "hover" && isHovered
    ? "hover"
    : variant;

  const styles = variantStyles[currentVariant];

  return (
    <div className="flex flex-col gap-1.5 w-60">
      <div
        className={`
          flex items-center 
          rounded-md h-10
          ${styles.border} 
          ${styles.bg}
          p-0
          transition-all duration-default
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="pl-3 pr-2 text-gray-400">
          <Search className="w-4 h-4" />
        </div>

        <input
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={variant === "disabled"}
          className={`
            w-full h-full
            px-0 py-2
            border-none outline-none
            bg-transparent
            text-bodySmallRegular
            ${styles.text}
          `}
        />

        {value && variant !== "disabled" && (
          <button
            onClick={handleClear}
            className="pr-3 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
