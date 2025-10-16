import React from "react";
export interface SelectorOption {
    id: string | number;
    label: string;
    subtitle?: string;
    avatar?: string;
    [key: string]: any;
}
export interface FormSelectorProps {
    name: string;
    label?: string;
    placeholder?: string;
    options: SelectorOption[];
    variant?: "default" | "filled" | "hover" | "focus" | "disabled" | "success" | "info" | "warning" | "error";
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
export declare const FormSelector: React.FC<FormSelectorProps>;
export default FormSelector;
