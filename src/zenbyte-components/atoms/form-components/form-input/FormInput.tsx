import React, { useState } from "react";
import { useFormContext } from "../form/Form";
import { Plus, Check, X, AlertCircle, Pencil, Eye, EyeOff } from "lucide-react";

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

interface FormInputProps {
  name: string;
  label?: string;
  validationType?: "email" | "username" | "password" | "default";
  placeholder?: string;
  type?: string;
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
  helperText?: string | null;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  validationType = "default",
  placeholder: customPlaceholder,
  type,
  variant = "default",
  helperText,
}) => {
  const { values, errors, setValue } = useFormContext();

  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const value = values[name] || "";
  const error = errors[name];

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType =
    validationType === "password"
      ? showPassword
        ? "text"
        : "password"
      : type || (validationType === "email" ? "email" : "text");

  const variants: Record<string, VariantConfig> = {
    default: {
      label: "Default",
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
      label: "Focus",
      borderClass: "border-2 border-indigo-400",
      bgClass: "bg-white",
      textClass: "text-gray-900",
      icon: null,
      helperTextClass: "text-indigo-400",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Type here...",
    },
    success: {
      label: "Success",
      borderClass: "border-2 border-emerald-400",
      bgClass: "bg-white",
      textClass: "text-gray-500",
      icon: <Check className="w-4 h-4 text-emerald-400" />,
      helperTextClass: "text-emerald-400",
      helperText: "Success",
      placeholder: customPlaceholder || "Placeholder",
    },
    info: {
      label: "Info",
      borderClass: "border-2 border-cyan-400",
      bgClass: "bg-white",
      textClass: "text-gray-500",
      icon: <Pencil className="w-4 h-4 text-cyan-400" />,
      helperTextClass: "text-cyan-400",
      helperText: "Info Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    warning: {
      label: "Warning",
      borderClass: "border-2 border-amber-300",
      bgClass: "bg-white",
      textClass: "text-gray-500",
      icon: <AlertCircle className="w-4 h-4 text-amber-300" />,
      helperTextClass: "text-amber-300",
      helperText: "Warning Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    error: {
      label: "Error",
      borderClass: "border-2 border-zb-coral-400",
      bgClass: "bg-white",
      textClass: "text-gray-500",
      icon: <X className="w-4 h-4 text-zb-coral-400" />,
      helperTextClass: "text-zb-coral-400",
      helperText: error || "Error",
      placeholder: customPlaceholder || "Placeholder",
    },
  };

  const currentVariant = error
    ? "error"
    : value
    ? "success"
    : isFocused
    ? "focus"
    : variant;

  const current = variants[currentVariant] || variants.default;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {(label || current.label) && (
        <label
          className={`text-bodySmallMedium font-semibold ${
            currentVariant === "disabled" ? "text-gray-400" : "text-gray-700"
          }`}
        >
          {label || current.label}
        </label>
      )}
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
        <input
          type={inputType}
          value={value}
          placeholder={current.placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={currentVariant === "disabled"}
          onChange={(e) => setValue(name, e.target.value)}
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
      {helperText !== null && (
        <p className={`text-headlineLarge ${current.helperTextClass} m-0`}>
          {error ? error : helperText}
        </p>
      )}
    </div>
  );
};

export default FormInput;
