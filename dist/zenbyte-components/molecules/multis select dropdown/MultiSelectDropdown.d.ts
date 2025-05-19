/**
 * src/components/MultiSelectDropdown/MultiSelectDropdown.tsx
 *
 * Customizable multi-select dropdown component
 */
import React from "react";
export interface MultiSelectOption {
    label: string;
    value: string;
    disabled?: boolean;
}
export interface MultiSelectDropdownProps {
    options: MultiSelectOption[];
    values?: string[];
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    errorMessage?: string;
    onChange?: (selectedValues: string[]) => void;
}
export declare const MultiSelectDropdown: React.FC<MultiSelectDropdownProps>;
export default MultiSelectDropdown;
