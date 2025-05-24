import React, { useState, useEffect } from "react";
import { X, Check } from "lucide-react";

interface NumberInputProps {
  value?: number;
  onChange?: (value: number | null) => void;
  onBlur?: () => void;
  label?: string;
  helperText?: string | null;
  placeholder?: string;
  variant?:
    | "default"
    | "filled"
    | "hover"
    | "focus"
    | "disabled"
    | "success"
    | "error";
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  value = null,
  onChange,
  onBlur,
  label,
  helperText,
  placeholder = "0",
  variant = "default",
  required = false,
  min,
  max,
  step = 1,
  className = ""
}) => {
  const [inputValue, setInputValue] = useState(value?.toString() ?? "");
  const [isFocused, setIsFocused] = useState(variant === "focus");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setInputValue(value?.toString() ?? "");
  }, [value]);

  const validate = (val: string) => {
    if (!val && required) return false;

    const number = parseFloat(val.replace(",", "."));
    if (isNaN(number)) return false;
    if (min !== undefined && number < min) return false;
    if (max !== undefined && number > max) return false;

    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);

    const valid = validate(val);
    setIsValid(valid);

    if (valid && onChange) {
      const parsed = parseFloat(val.replace(",", "."));
      onChange(!isNaN(parsed) ? parsed : null);
    } else if (!valid && onChange) {
      onChange(null);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) onBlur();
  };

  const currentVariant =
    !isValid
      ? "error"
      : isFocused && variant !== "disabled"
      ? "focus"
      : variant;

  const variantStyles: Record<string, { border: string; text: string; helper: string }> = {
    default: {
      border: "border border-gray-200",
      text: "text-gray-700",
      helper: "text-gray-500",
    },
    filled: {
      border: "border border-gray-200",
      text: "text-gray-700",
      helper: "text-gray-500",
    },
    hover: {
      border: "border border-indigo-400",
      text: "text-gray-700",
      helper: "text-gray-500",
    },
    focus: {
      border: "border-2 border-indigo-400",
      text: "text-gray-900",
      helper: "text-indigo-400",
    },
    disabled: {
      border: "border border-gray-200",
      text: "text-gray-400",
      helper: "text-gray-400",
    },
    success: {
      border: "border-2 border-emerald-400",
      text: "text-emerald-500",
      helper: "text-emerald-400",
    },
    error: {
      border: "border-2 border-zb-coral-400",
      text: "text-zb-coral-400",
      helper: "text-zb-coral-400",
    },
  };

  const { border, text, helper } = variantStyles[currentVariant];

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label className={`text-bodySmallMedium font-semibold ${text}`}>
          {label}
        </label>
      )}

      <div
        className={`
          flex items-center
          h-10 rounded-md px-3
          bg-white
          ${border}
          transition-colors duration-150
        `}
      >
        <input
          type="text"
          inputMode="decimal"
          pattern="[0-9]*[.,]?[0-9]*"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          disabled={variant === "disabled"}
          className={`
            w-full outline-none bg-transparent text-sm
            placeholder-gray-400 ${text}
          `}
        />
        {currentVariant === "error" && (
          <X className="w-4 h-4 text-zb-coral-400 ml-2" />
        )}
        {currentVariant === "success" && (
          <Check className="w-4 h-4 text-emerald-400 ml-2" />
        )}
      </div>

      {helperText !== null && (
        <p className={`text-headlineLarge ${helper}`}>
          {!isValid ? "Ongeldige waarde" : helperText || ""}
        </p>
      )}
    </div>
  );
};

export default NumberInput;