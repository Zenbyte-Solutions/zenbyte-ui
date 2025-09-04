import React, { useState } from "react";
import { useFormContext } from "../form/Form";
import { Plus, Check, X, AlertCircle, Pencil } from "lucide-react";

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

interface FormNumberInputProps {
  /** The name of the field in the form */
  name: string;
  /** Label text displayed above the input */
  label?: string;
  /** Placeholder text shown when input is empty */
  placeholder?: string;
  /** Visual variant of the input */
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
  /** Helper text shown below the input */
  helperText?: string | null;
  /** Minimum allowed value */
  min?: number;
  /** Maximum allowed value */
  max?: number;
  /** Step increment for number input */
  step?: number;
  /** Additional CSS classes */
  className?: string;
}

export const FormNumberInput: React.FC<FormNumberInputProps> = ({
  name,
  label,
  placeholder: customPlaceholder,
  variant = "default",
  helperText,
  min,
  max,
  step = 1,
  className = ""
}) => {
  const { values, errors, setValue } = useFormContext();

  const [isFocused, setIsFocused] = useState(false);
  const value = values[name] || "";
  const error = errors[name];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    if (newValue === "" || newValue === null || newValue === undefined) {
      setValue(name, undefined);
    } else {
      const numValue = Number(newValue);
      setValue(name, isNaN(numValue) ? undefined : numValue);
    }
  };

  const variants: Record<string, VariantConfig> = {
    default: {
      label: "Default",
      borderClass: "border border-zb-gray-200",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      icon: <Plus className="w-4 h-4" />,
      helperTextClass: "text-zb-gray-500",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "0",
    },
    filled: {
      label: "Label - Filled",
      borderClass: "border border-zb-gray-200",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      icon: null,
      helperTextClass: "text-zb-gray-500",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "0",
    },
    hover: {
      label: "Label - Hover",
      borderClass: "border border-zb-indigo-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      icon: null,
      helperTextClass: "text-zb-gray-500",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "0",
    },
    focus: {
      label: "Focus",
      borderClass: "border-2 border-zb-indigo-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-900",
      icon: null,
      helperTextClass: "text-zb-indigo-400",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Type here...",
    },
    disabled: {
      label: "Disabled",
      borderClass: "border border-zb-gray-200",
      bgClass: "bg-zb-gray-100",
      textClass: "text-zb-gray-500",
      icon: null,
      helperTextClass: "text-zb-gray-500",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "0",
    },
    success: {
      label: "Success",
      borderClass: "border-2 border-zb-emerald-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      icon: <Check className="w-4 h-4 text-zb-emerald-400" />,
      helperTextClass: "text-zb-emerald-400",
      helperText: "Success",
      placeholder: customPlaceholder || "0",
    },
    info: {
      label: "Info",
      borderClass: "border-2 border-zb-cyan-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      icon: <Pencil className="w-4 h-4 text-zb-cyan-400" />,
      helperTextClass: "text-zb-cyan-400",
      helperText: "Info Text",
      placeholder: customPlaceholder || "0",
    },
    warning: {
      label: "Warning",
      borderClass: "border-2 border-zb-amber-300",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      icon: <AlertCircle className="w-4 h-4 text-zb-amber-300" />,
      helperTextClass: "text-zb-amber-300",
      helperText: "Warning Text",
      placeholder: customPlaceholder || "0",
    },
    error: {
      label: "Error",
      borderClass: "border-2 border-zb-coral-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      icon: <X className="w-4 h-4 text-zb-coral-400" />,
      helperTextClass: "text-zb-coral-400",
      helperText: error || "Error",
      placeholder: customPlaceholder || "0",
    },
  };

  const currentVariant = error
    ? "error"
    : value !== null && value !== undefined && value !== ""
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
            currentVariant === "disabled" ? "text-zb-gray-500" : "text-zb-gray-700"
          }`}
        >
          {label || current.label}
        </label>
      )}
      <div
        className={`
        flex items-center 
        rounded-zb-input h-10
        ${current.borderClass} 
        ${current.bgClass}
        p-0
        transition-all 
        duration-300 
        ease-in-out
       hover:border-zb-indigo-400`}
      >
        <input
          type="number"
          value={value}
          placeholder={current.placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={currentVariant === "disabled"}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          className={`
            w-full h-full
            px-3 py-2
            border-none outline-none
            bg-transparent
            text-bodySmallRegular
            ${current.textClass}
            rounded-zb-input
          `}
        />
        {current.icon && (
          <div className="flex items-center pr-3">{current.icon}</div>
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

export default FormNumberInput;