/**
 * src/components/DropdownList/DropdownList.tsx
 *
 * Customizable dropdown list component
 */
import React from "react";
export interface DropdownListProps {
    options: Array<{
        label: string;
        value: string;
        disabled?: boolean;
    }>;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    errorMessage?: string;
    dropdownLabel?: string;
    onChange?: (value: string) => void;
}
export declare const DropdownList: React.FC<DropdownListProps>;
export default DropdownList;
