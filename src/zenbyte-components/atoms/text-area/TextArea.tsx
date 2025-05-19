import React, { useState } from "react";

interface VariantConfig {
  label: string;
  borderClass: string;
  bgClass: string;
  textClass: string;
  icon: React.ReactNode;
  helperClass: string;
  helperText: string;
  placeholder: string;
  outlineClass?: string;
}

export interface TextAreaProps {
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
  value?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  variant = "default",
  placeholder: customPlaceholder,
  value: initialValue = "",
  rows = 4,
  onChange,
  className = "",
}) => {
  // State to track textarea value
  const [value, setValue] = useState(initialValue);
  // State to track focus and hover states
  const [isFocused, setIsFocused] = useState(variant === "focus");
  const [isHovered, setIsHovered] = useState(variant === "hover");

  // Handle textarea change
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
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

  const handleBlur = () => {
    setIsFocused(false);
  };

  // Handle mouse events for hover
  const handleMouseEnter = () => {
    if (variant !== "disabled" && !isFocused) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Variant configurations with Zenbyte prefixed Tailwind classes
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
      label: "Label - Focus",
      borderClass: "border-2 border-zb-indigo-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-900",
      icon: null,
      helperClass: "text-zb-indigo-400",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Type here...",
    },
    disabled: {
      label: "Label - Disable",
      borderClass: "border border-zb-gray-200",
      bgClass: "bg-zb-gray-100",
      textClass: "text-zb-gray-500",
      icon: null,
      helperClass: "text-zb-gray-500",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    success: {
      label: "Label",
      borderClass: "border-2 border-zb-emerald-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      icon: "", // You can add a success icon component here
      helperClass: "text-zb-emerald-400",
      helperText: "Success Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    info: {
      label: "Label",
      borderClass: "border-2 border-zb-cyan-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      icon: "", // You can add an info icon component here
      helperClass: "text-zb-cyan-400",
      helperText: "Info Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    warning: {
      label: "Label",
      borderClass: "border-2 border-zb-amber-300",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      icon: "", // You can add a warning icon component here
      helperClass: "text-zb-amber-300",
      helperText: "Warning Text",
      placeholder: customPlaceholder || "Placeholder",
    },
    error: {
      label: "Label",
      borderClass: "border-2 border-zb-coral-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      icon: "", // You can add an error icon component here
      helperClass: "text-zb-coral-400",
      helperText: "Error Text",
      placeholder: customPlaceholder || "Placeholder",
    },
  };

  // Determine which variant to use based on hover and focus states
  let currentVariant = variant;
  if (isHovered && variant === "default" && !isFocused) {
    currentVariant = "hover";
  } else if (isFocused && variant !== "disabled") {
    currentVariant = "focus";
  }

  const current = variants[currentVariant];

  return (
    <div className={`flex flex-col gap-zb-v-8 w-60 ${className}`}>
      {/* Label */}
      <label
        className={`text-zb-desktop-bodySmallRegular font-medium ${
          currentVariant === "disabled"
            ? "text-zb-gray-400"
            : "text-zb-gray-700"
        }`}
      >
        {current.label}
      </label>

      {/* TextArea Container */}
      <div
        className={`relative rounded-zb-textarea ${current.borderClass} ${
          current.bgClass
        } ${current.outlineClass || ""}`}
        style={{ outlineOffset: current.outlineClass ? "2px" : "0" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Actual TextArea Element */}
        <textarea
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={current.placeholder}
          disabled={currentVariant === "disabled"}
          rows={rows}
          className={`w-full p-2 border-none outline-none ${current.bgClass} ${current.textClass} rounded-zb-textarea resize-vertical text-zb-desktop-bodySmallRegular min-h-20 font-inherit`}
        />

        {/* Icon Container - positioned at top-right for textareas */}
        {current.icon && (
          <div className="absolute flex items-center top-2 right-3">
            {current.icon}
          </div>
        )}
      </div>

      {/* Helper Text */}
      <p className={`text-xs ${current.helperClass} m-0`}>
        {current.helperText}
      </p>
    </div>
  );
};

export default TextArea;
