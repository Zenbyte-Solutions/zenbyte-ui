import React, { useState, useEffect } from "react";
import { useFormContext } from "../form/Form";
import { Search, ChevronDown, X } from "lucide-react";
import Modal from "../../../organisms/modal/Modal";
import SearchBox from "../../search-box/SearchBox";
import Pagination from "../../pagination/Pagination";

export interface SelectorOption {
  id: string | number;
  label: string;
  subtitle?: string;
  avatar?: string;
  [key: string]: any;
}

interface VariantConfig {
  label: string;
  borderClass: string;
  bgClass: string;
  textClass: string;
  helperTextClass: string;
  helperText: string;
  placeholder: string;
}

export interface FormSelectorProps {
  name: string;
  label?: string;
  placeholder?: string;
  options: SelectorOption[];
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
  itemsPerPage?: number;
  searchPlaceholder?: string;
  modalTitle?: string;
  noResultsText?: string;
  loadingText?: string;
  isLoading?: boolean;
  searchKeys?: string[];
  renderOption?: (option: SelectorOption) => React.ReactNode;
  renderSelected?: (option: SelectorOption) => React.ReactNode;
}

export const FormSelector: React.FC<FormSelectorProps> = ({
  name,
  label,
  placeholder: customPlaceholder,
  options = [],
  variant = "default",
  helperText,
  itemsPerPage = 10,
  searchPlaceholder = "Search...",
  modalTitle = "Select Option",
  noResultsText = "No options found",
  loadingText = "Loading...",
  isLoading = false,
  searchKeys = ["label", "subtitle"],
  renderOption,
  renderSelected,
}) => {
  // Form integration - same pattern as other form components
  const { values, errors, setValue } = useFormContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItemsPerPage, setCurrentItemsPerPage] = useState(itemsPerPage);
  const [isFocused, setIsFocused] = useState(false);

  // Get current value and error from form context
  const selectedOptionId = values[name];
  const error = errors[name];
  const selectedOption = options.find(option => option.id === selectedOptionId);

  // Filter options based on search term and searchKeys
  const filteredOptions = options.filter(option =>
    searchKeys.some(key => {
      const value = option[key];
      return value && value.toString().toLowerCase().includes(searchTerm.toLowerCase());
    })
  );

  // Pagination logic
  const totalItems = filteredOptions.length;
  const startIndex = (currentPage - 1) * currentItemsPerPage;
  const paginatedOptions = filteredOptions.slice(startIndex, startIndex + currentItemsPerPage);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handleOptionSelect = (option: SelectorOption) => {
    setValue(name, option.id); // This will trigger Zod validation automatically
    setIsModalOpen(false);
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handleClearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setValue(name, ""); // This will trigger Zod validation automatically
  };

  const openModal = () => {
    if (variant !== "disabled") {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setCurrentItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  // Default option renderer
  const defaultRenderOption = (option: SelectorOption) => (
    <div className="flex items-center p-3 rounded-zb-cards hover:bg-zb-gray-100 cursor-pointer transition-colors duration-200">
      {option.avatar && (
        <div className="w-8 h-8 rounded-full bg-zb-indigo-100 flex items-center justify-center mr-3 overflow-hidden">
          <img
            src={option.avatar}
            alt={option.label}
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      )}
      <div className="flex-1">
        <div className="font-medium text-zb-gray-900">{option.label}</div>
        {option.subtitle && (
          <div className="text-sm text-zb-gray-500">{option.subtitle}</div>
        )}
      </div>
    </div>
  );

  // Default selected renderer
  const defaultRenderSelected = (option: SelectorOption) => (
    <div className="flex items-center">
      {option.avatar && (
        <div className="w-6 h-6 rounded-full bg-zb-indigo-100 flex items-center justify-center mr-2 overflow-hidden">
          <img
            src={option.avatar}
            alt={option.label}
            className="w-6 h-6 rounded-full object-cover"
          />
        </div>
      )}
      <span className="text-bodySmallRegular text-zb-gray-900 truncate">
        {option.label}
      </span>
    </div>
  );

  // Variant styling - same pattern as FormInput
  const variants: Record<string, VariantConfig> = {
    default: {
      label: "Default",
      borderClass: "border border-zb-gray-200",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      helperTextClass: "text-zb-gray-500",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Select an option",
    },
    filled: {
      label: "Label - Filled",
      borderClass: "border border-zb-gray-200",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      helperTextClass: "text-zb-gray-500",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Select an option",
    },
    hover: {
      label: "Label - Hover",
      borderClass: "border border-zb-indigo-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      helperTextClass: "text-zb-gray-500",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Select an option",
    },
    focus: {
      label: "Focus",
      borderClass: "border-2 border-zb-indigo-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-900",
      helperTextClass: "text-zb-indigo-400",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Select an option...",
    },
    success: {
      label: "Success",
      borderClass: "border-2 border-zb-emerald-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      helperTextClass: "text-zb-emerald-400",
      helperText: "Success",
      placeholder: customPlaceholder || "Select an option",
    },
    info: {
      label: "Info",
      borderClass: "border-2 border-zb-cyan-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      helperTextClass: "text-zb-cyan-400",
      helperText: "Info Text",
      placeholder: customPlaceholder || "Select an option",
    },
    warning: {
      label: "Warning",
      borderClass: "border-2 border-zb-amber-300",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      helperTextClass: "text-zb-amber-300",
      helperText: "Warning Text",
      placeholder: customPlaceholder || "Select an option",
    },
    error: {
      label: "Error",
      borderClass: "border-2 border-zb-coral-400",
      bgClass: "bg-zb-white",
      textClass: "text-zb-gray-500",
      helperTextClass: "text-zb-coral-400",
      helperText: error || "Error",
      placeholder: customPlaceholder || "Select an option",
    },
    disabled: {
      label: "Disabled",
      borderClass: "border border-zb-gray-200",
      bgClass: "bg-zb-gray-100",
      textClass: "text-zb-gray-400",
      helperTextClass: "text-zb-gray-400",
      helperText: "Helper Text",
      placeholder: customPlaceholder || "Select an option",
    },
  };

  // Auto variant logic - same as FormInput and FormTextArea
  const currentVariant = error
    ? "error"
    : selectedOption
    ? "success"
    : isFocused
    ? "focus"
    : variant;

  const current = variants[currentVariant] || variants.default;

  const modalContent = (
    <div className="space-y-4">
      {/* Search Box */}
      <SearchBox
        placeholder={searchPlaceholder}
        value={searchTerm}
        onChange={setSearchTerm}
        onClear={() => setSearchTerm("")}
      />

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="text-zb-gray-500">{loadingText}</div>
        </div>
      )}

      {/* Options List */}
      {!isLoading && (
        <>
          {paginatedOptions.length > 0 ? (
            <div className="max-h-96 overflow-y-auto space-y-2">
              {paginatedOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleOptionSelect(option)}
                >
                  {renderOption ? renderOption(option) : defaultRenderOption(option)}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center py-8">
              <div className="text-zb-gray-500">{noResultsText}</div>
            </div>
          )}

          {/* Pagination */}
          {totalItems > currentItemsPerPage && (
            <div className="border-t border-zb-gray-200 pt-4">
              <Pagination
                currentPage={currentPage}
                totalItems={totalItems}
                itemsPerPage={currentItemsPerPage}
                onPageChange={setCurrentPage}
                onItemsPerPageChange={handleItemsPerPageChange}
                className="justify-center"
              />
            </div>
          )}
        </>
      )}
    </div>
  );

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {(label || current.label) && (
        <label
          className={`text-bodySmallMedium font-semibold ${
            currentVariant === "disabled" ? "text-zb-gray-400" : "text-zb-gray-700"
          }`}
        >
          {label || current.label}
        </label>
      )}

      {/* Input-like selector */}
      <div
        onClick={openModal}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          flex items-center 
          rounded-zb-input h-10
          ${current.borderClass} 
          ${current.bgClass}
          p-0
          transition-all 
          duration-300 
          ease-in-out
          hover:border-zb-indigo-400
          cursor-pointer
          ${variant === "disabled" ? "cursor-not-allowed" : ""}
        `}
        tabIndex={variant === "disabled" ? -1 : 0}
        role="button"
        aria-haspopup="dialog"
      >
        <div className="flex-1 px-3 py-2">
          {selectedOption ? (
            renderSelected ? renderSelected(selectedOption) : defaultRenderSelected(selectedOption)
          ) : (
            <span className={`text-bodySmallRegular ${current.textClass}`}>
              {current.placeholder}
            </span>
          )}
        </div>

        <div className="flex items-center pr-3 space-x-2">
          {selectedOption && variant !== "disabled" && (
            <button
              onClick={handleClearSelection}
              className="p-1 rounded-zb-input hover:bg-zb-gray-100 focus:outline-none transition-colors duration-200"
              aria-label="Clear selection"
            >
              <X className="w-4 h-4 text-zb-gray-500" />
            </button>
          )}
          <ChevronDown className={`w-4 h-4 ${current.textClass} transition-transform duration-200`} />
        </div>
      </div>

      {/* Helper text - same pattern as FormInput */}
      {helperText !== null && (
        <p className={`text-headlineLarge ${current.helperTextClass} m-0`}>
          {error ? error : helperText}
        </p>
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalTitle}
        content={modalContent}
        className="max-w-lg"
      />
    </div>
  );
};

export default FormSelector;