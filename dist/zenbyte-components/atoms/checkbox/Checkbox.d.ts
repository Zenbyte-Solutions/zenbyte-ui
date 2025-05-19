import React from "react";
export interface CheckboxProps {
    /**
     * Label for the checkbox (defaults to "Placeholder" if not provided)
     */
    label?: string;
    /**
     * If true, the checkbox is checked
     */
    checked?: boolean;
    /**
     * If true, the checkbox is in an indeterminate state
     */
    indeterminate?: boolean;
    /**
     * If true, the checkbox is disabled
     */
    disabled?: boolean;
    /**
     * If true, the checkbox is in focus state (for demonstration)
     */
    focused?: boolean;
    /**
     * Name attribute for the input
     */
    name?: string;
    /**
     * Optional ID for the input
     */
    id?: string;
    /**
     * Value for the checkbox
     */
    value?: string;
    /**
     * Callback when the checkbox is changed
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Display variant of the checkbox
     * @default 'text-right'
     */
    variant?: "checkbox-only" | "text-right" | "text-left";
}
/**
 * Checkbox component for selecting multiple options from a list
 */
export declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
