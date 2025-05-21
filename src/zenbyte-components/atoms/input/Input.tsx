import React, { useEffect, useState } from "react";
import {
  Plus,
  Check,
  X,
  AlertCircle,
  Info,
  Pencil,
  Eye,
  EyeOff,
} from "lucide-react";

/**
 * Configuration for input variants
 */
interface VariantConfig {
  label: string;
  borderClass: string;
  bgClass: string;
  textClass: string;
  icon: React.ReactNode;
  helperTextClass: string;
  helperText: string;
  placeholder: string;
}

export interface InputProps {
  /**
   * Input style variant
   */
  variant?:
    | "default"
    | "filled"
    | "hover"
    | "focus"
    | "disabled"
    | "success"
    | "info"
    | "warning"
    | "error";

  /**
   * Type of validation to apply
   */
  validationType?: "email" | "username" | "password" | "default";

  /**
   * Placeholder text for the input
   */
  placeholder?: string;

  /**
   * Initial value for the input
   */
  value?: string;

  /**
   * Callback function when input value changes
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Callback for validation status
   */
  onValidate?: (isValid: boolean) => void;

  /**
   * Optional label text to display
   */
  label?: string;

  /**
   * Optional helper text to display
   * Set to null to hide helper text completely
   */
  helperText?: string | null;

  /**
   * Input type (text, password, email, etc.)
   */
  type?: string;

  className?: string;
}

/**
 * Input component with multiple style variants
 */
export const Input: React.FC<InputProps> = ({
  variant = "default",
  validationType = "default",
  placeholder: customPlaceholder,
  value: initialValue = "",
  onChange,
  onBlur,
  onValidate,
  label,
  helperText,
  type,
  className = ""
}) => {
  // State to track input value
  const [value, setValue] = useState(initialValue);

  // State to track validation
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // State to track focus state
  const [isFocused, setIsFocused] = useState(variant === "focus");

  // Password visibility state
  const [showPassword, setShowPassword] = useState(false);

  // Password visibility toggle
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    setValue(initialValue);
    setValue(value);
  }, [initialValue, value]);

  // Validation function
  const validateInput = (inputValue: string) => {
    let valid = true;
    let message = "";

    switch (validationType) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        valid = emailRegex.test(inputValue);
        message = "Invalid email address";
        break;

      case "username":
        const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
        valid = usernameRegex.test(inputValue);
        message = "3-16 characters, letters, numbers, or underscore";
        break;

      case "password":
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        valid = passwordRegex.test(inputValue);
        message =
          "8+ chars, include uppercase, lowercase, number, special char";
        break;

      default:
        valid = true;
        message = "";
    }

    setIsValid(valid);
    setErrorMessage(message);

    // Trigger validation callback if provided
    if (onValidate) {
      onValidate(valid);
    }

    return valid;
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    // Validate if not default type
    if (validationType !== "default") {
      validateInput(newValue);
    }

    // Call original onChange if provided
    if (onChange) {
      onChange(e);
    }
  };

  // Handle focus events
  const handleFocus = () => {
    if (variant !== "disabled") {
      setIsFocused(true);
    }
  };

const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
  setIsFocused(false);

  if (validationType !== "default" && value) {
    validateInput(value);
  }

  if (onBlur) {
    // Simuleer een event zoals onChange zou doen
    const syntheticEvent = {
      ...e,
      target: { ...e.target, value },
    } as React.ChangeEvent<HTMLInputElement>;

    onBlur(syntheticEvent);
  }
};

  // Variant configurations with proper Tailwind classes
  const variants: Record<string, VariantConfig> = {
    default: {
      label: "Label - Default",
      borderClass: "border border-gray-200",
      bgClass: "bg-white",
      textClass: "text-gray-500",
      icon:
        validationType === "password" ? (
          showPassword ? (
            <EyeOff className="w-4 h-4 text-gray-500" />
          ) : (
            <Eye className="w-4 h-4 text-gray-500" />
          )
        ) : (
          <Plus className="w-4 h-4" />
        ),
      helperTextClass: "text-gray-500",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    filled: {
      label: "Label - Filled",
      borderClass: "border border-gray-200",
      bgClass: "bg-white",
      textClass: "text-gray-500",
      icon: null,
      helperTextClass: "text-gray-500",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    hover: {
      label: "Label - Hover",
      borderClass: "border border-indigo-400",
      bgClass: "bg-white",
      textClass: "text-gray-500",
      icon: null,
      helperTextClass: "text-gray-500",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    focus: {
      label: "Label - Focus",
      borderClass: "border-2 border-indigo-400",
      bgClass: "bg-white",
      textClass: "text-gray-900",
      icon: null,
      helperTextClass: "text-indigo-400",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Type here...",
    },
    disabled: {
      label: "Label - Disable",
      borderClass: "border border-gray-200",
      bgClass: "bg-gray-100",
      textClass: "text-gray-500",
      icon: <Plus className="w-4 h-4 text-gray-400" />,
      helperTextClass: "text-gray-500",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    success: {
      label: "Label",
      borderClass: "border-2 border-emerald-400",
      bgClass: "bg-white",
      textClass: "text-gray-500",
      icon: <Check className="w-4 h-4 text-emerald-400" />,
      helperTextClass: "text-emerald-400",
      helperText: "Success Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    info: {
      label: "Label",
      borderClass: "border-2 border-cyan-400",
      bgClass: "bg-white",
      textClass: "text-gray-500",
      icon: <Pencil className="w-4 h-4 text-cyan-400" />,
      helperTextClass: "text-cyan-400",
      helperText: "Info Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    warning: {
      label: "Label",
      borderClass: "border-2 border-amber-300",
      bgClass: "bg-white",
      textClass: "text-gray-500",
      icon: <AlertCircle className="w-4 h-4 text-amber-300" />,
      helperTextClass: "text-amber-300",
      helperText: "Warning Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    error: {
      label: "Label",
      borderClass: "border-2 border-zb-coral-400",
      bgClass: "bg-white",
      textClass: "text-gray-500",
      icon: <X className="w-4 h-4 text-coral-400" />,
      helperTextClass: "text-zb-coral-400",
      helperText: errorMessage || "Error Text",
      placeholder: customPlaceholder || "Placeholder",
    },
  };

  // Determine which variant to use based on focus and validation state
  const currentVariant =
    !isValid && validationType !== "default" && value
      ? "error"
      : isValid && validationType !== "default" && value
      ? "success"
      : isFocused && variant !== "disabled"
      ? "focus"
      : variant;

  const current = variants[currentVariant];

  // Determine if helper text should be shown
  // Show validation error message when validation fails
  // Show custom helper text when provided (unless it's explicitly null)
  // Fall back to variant helper text when helperText is undefined
  // Don't show anything when helperText is null
  const showHelperText =
    (!isValid && validationType !== "default") || helperText !== null;

  // Determine input type
  const inputType = type
    ? type
    : validationType === "password"
    ? showPassword
      ? "text"
      : "password"
    : validationType === "email"
    ? "email"
    : "text";

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {/* Label */}
      {(label || current.label) && (
        <label
          className={`text-bodySmallMedium font-semibold ${
            currentVariant === "disabled" ? "text-gray-400" : "text-gray-700"
          }`}
        >
          {label || current.label}
        </label>
      )}

      {/* Input Field Container */}
      <div
        className={`
        flex items-center 
        rounded-md h-10
        ${current.borderClass} 
        ${current.bgClass}
        p-0
        transition-all 
        duration-zb-300 
        ease-in-out
       hover:border-zb-indigo-400`}
      >
        {/* Actual Input Element */}
        <input
          type={inputType}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={current.placeholder}
          disabled={currentVariant === "disabled"}
          className={`
            w-full h-full
            px-3 py-2
            border-none outline-none
            bg-transparent
            text-bodySmallRegular
            ${current.textClass}
            rounded-md
          `}
        />

        {/* Icon Container */}
        {validationType === "password" ? (
          <div className="flex items-center pr-3">
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="p-1 focus:outline-none hover:bg-zb-gray-100 rounded-zb-input transition-zb-transform duration-zb-500"
            >
              {showPassword ? (
                <EyeOff className="w-zb-icon-sm h-zb-icon-sm text-zb-gray-500 hover:text-zb-gray-700" />
              ) : (
                <Eye className="w-zb-icon-sm h-zb-icon-sm text-zb-gray-500 hover:text-zb-gray-700" />
              )}
            </button>
          </div>
        ) : (
          current.icon && (
            <div className="flex items-center pr-3">{current.icon}</div>
          )
        )}
      </div>

      {/* Helper Text - Only show when showHelperText is true */}
      {showHelperText && (
        <p className={`text-headlineLarge ${current.helperTextClass} m-0`}>
          {!isValid && validationType !== "default"
            ? errorMessage
            : helperText !== undefined
            ? helperText
            : current.helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
