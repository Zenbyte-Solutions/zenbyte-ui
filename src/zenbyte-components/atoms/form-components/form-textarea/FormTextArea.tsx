import React, { useState } from "react";
import { useFormContext } from "../form/Form";

interface VariantConfig {
  label: string;
  borderClass: string;
  bgClass: string;
  textClass: string;
  icon: React.ReactNode;
  helperClass: string;
  helperText: string;
  placeholder: string;
}

export interface FormTextAreaProps {
  name: string;
  label?: string;
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
  placeholder?: string;
  helperText?: string | null;
  value?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  name,
  label,
  variant = "default",
  placeholder: customPlaceholder,
  helperText,
  value: controlledValue,
  rows = 4,
  onChange,
  className = "",
}) => {
  const form = useFormContext();
  const isInForm = !!form;

  const [localValue, setLocalValue] = useState(controlledValue || "");
  const [isFocused, setIsFocused] = useState(false);

  const value = isInForm ? form.values[name] ?? "" : localValue;
  const error = isInForm ? form.errors[name] : "";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (isInForm) {
      form.setValue(name, val);
    } else {
      setLocalValue(val);
    }
    if (onChange) onChange(e);
  };

  const variants: Record<string, VariantConfig> = {
    default: {
      label: "Label - Default",
      borderClass: "border border-zb-gray-200",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      icon: null,
      helperClass: "text-zb-gray-500",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    filled: {
      label: "Label - Filled",
      borderClass: "border border-zb-gray-200",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      icon: null,
      helperClass: "text-zb-gray-500",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    hover: {
      label: "Label - Hover",
      borderClass: "border border-zb-indigo-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      icon: null,
      helperClass: "text-zb-gray-500",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    focus: {
      label: "Focus",
      borderClass: "border-2 border-zb-indigo-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-900",
      icon: null,
      helperClass: "text-zb-indigo-400",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Type here...",
    },
    success: {
      label: "Success",
      borderClass: "border-2 border-emerald-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-900",
      icon: null,
      helperClass: "text-emerald-400",
      helperText: "Success",
      placeholder: customPlaceholder || "Placeholder",
    },
    info: {
      label: "Info",
      borderClass: "border-2 border-cyan-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-900",
      icon: null,
      helperClass: "text-cyan-400",
      helperText: "Info Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    warning: {
      label: "Warning",
      borderClass: "border-2 border-amber-300",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-900",
      icon: null,
      helperClass: "text-amber-300",
      helperText: "Warning Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    error: {
      label: "Error",
      borderClass: "border-2 border-zb-coral-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-900",
      icon: null,
      helperClass: "text-zb-coral-400",
      helperText: error || "Error",
      placeholder: customPlaceholder || "Placeholder",
    },
  };

  const currentVariant =
    error?.length > 0
      ? "error"
      : value
      ? "success"
      : isFocused
      ? "focus"
      : variant;

  const current = variants[currentVariant] || variants.default;

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {(label || current.label) && (
        <label
          className={`text-bodySmallMedium font-semibold ${
            currentVariant === "disabled" ? "text-zb-gray-400" : "text-zb-gray-700"
          }`}
        >
          {label || current.label}
        </label>
      )}
      <textarea
        name={name}
        rows={rows}
        disabled={currentVariant === "disabled"}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={current.placeholder}
        className={`w-full px-3 py-2 rounded-md
          ${current.borderClass} ${current.bgClass} ${current.textClass}
          transition-all duration-zb-300 ease-in-out outline-none
        `}
      />
      {helperText !== null && (
        <p className={`text-headlineLarge ${current.helperClass} m-0`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default FormTextArea;
