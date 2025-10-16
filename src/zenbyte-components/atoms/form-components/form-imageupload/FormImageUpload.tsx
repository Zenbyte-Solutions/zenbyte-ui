import React, { useState, useRef } from "react";
import { useFormContext } from "../form/Form";
import { CloudUpload, X, Check, AlertCircle, Image as ImageIcon } from "lucide-react";

interface FormImageUploadProps {
  name: string;
  label?: string;
  helperText?: string | null;
  acceptedFormats?: string[];
  maxFileSize?: number; // in bytes
  multiple?: boolean;
  variant?:
    | "default"
    | "hover"
    | "focus"
    | "success"
    | "error";
}

export const FormImageUpload: React.FC<FormImageUploadProps> = ({
  name,
  label,
  helperText,
  acceptedFormats = ["JPEG", "PNG", "GIF", "WebP"],
  maxFileSize = 5 * 1024 * 1024, // 5MB default
  multiple = false,
  variant = "default",
}) => {
  const { values, errors, setValue } = useFormContext();
  const [dragActive, setDragActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const files = values[name] || [];
  const error = errors[name];

  const formatText = acceptedFormats.join(", ");

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (newFiles: File[]) => {
    // Filter for image files only
    const imageFiles = newFiles.filter((file) => file.type.startsWith("image/"));

    // Validate file size
    const validFiles = imageFiles.filter((file) => file.size <= maxFileSize);

    if (multiple) {
      setValue(name, [...files, ...validFiles]);
    } else {
      setValue(name, validFiles.length > 0 ? [validFiles[0]] : []);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_: File, i: number) => i !== index);
    setValue(name, newFiles);
  };

  const variants = {
    default: {
      borderClass: "border-gray-200",
      bgClass: "bg-white",
      helperTextClass: "text-gray-500",
      icon: <CloudUpload className="w-8 h-8 text-gray-500" />,
    },
    hover: {
      borderClass: "border-indigo-400",
      bgClass: "bg-white",
      helperTextClass: "text-gray-500",
      icon: <CloudUpload className="w-8 h-8 text-indigo-400" />,
    },
    focus: {
      borderClass: "border-indigo-400",
      bgClass: "bg-indigo-50",
      helperTextClass: "text-indigo-400",
      icon: <CloudUpload className="w-8 h-8 text-indigo-400" />,
    },
    success: {
      borderClass: "border-emerald-400",
      bgClass: "bg-white",
      helperTextClass: "text-emerald-400",
      icon: <Check className="w-8 h-8 text-emerald-400" />,
    },
    error: {
      borderClass: "border-zb-coral-400",
      bgClass: "bg-white",
      helperTextClass: "text-zb-coral-400",
      icon: <AlertCircle className="w-8 h-8 text-zb-coral-400" />,
    },
  };

  const currentVariant = error
    ? "error"
    : files.length > 0
    ? "success"
    : dragActive || isFocused
    ? "focus"
    : variant;

  const current = variants[currentVariant] || variants.default;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-bodySmallMedium font-semibold text-gray-700">
          {label}
        </label>
      )}

      <div
        className={`
          flex flex-col items-center justify-center
          p-6 rounded-md cursor-pointer
          border-2 border-dashed transition-all duration-zb-300
          ${current.borderClass}
          ${current.bgClass}
          hover:border-indigo-400
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple={multiple}
          accept="image/*"
          onChange={handleChange}
        />

        {current.icon}

        <p className="mt-2 text-center text-gray-700 text-bodySmallRegular">
          Drag & drop {multiple ? "images" : "an image"} or{" "}
          <span className="text-indigo-500 cursor-pointer font-medium">Browse</span>
        </p>

        <p className="mt-1 text-center text-gray-500 text-captionRegular">
          Supported formats: {formatText}
        </p>
        <p className="text-center text-gray-500 text-captionRegular">
          Max size: {(maxFileSize / (1024 * 1024)).toFixed(1)}MB
        </p>
      </div>

      {/* Display uploaded files */}
      {files.length > 0 && (
        <div className="flex flex-col gap-2 mt-2">
          {files.map((file: File, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <ImageIcon className="w-5 h-5 text-gray-500" />
                <div className="flex flex-col">
                  <span className="text-bodySmallMedium text-gray-700">
                    {file.name}
                  </span>
                  <span className="text-captionRegular text-gray-500">
                    {(file.size / 1024).toFixed(1)} KB
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className="p-1 hover:bg-gray-200 rounded-md transition-all"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          ))}
        </div>
      )}

      {helperText !== null && (
        <p className={`text-captionRegular ${current.helperTextClass} m-0`}>
          {error ? error : helperText}
        </p>
      )}
    </div>
  );
};

export default FormImageUpload;
