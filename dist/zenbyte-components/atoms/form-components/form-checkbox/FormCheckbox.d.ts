import React from "react";
export interface FormCheckboxProps {
    /**
     * Label for the checkbox (defaults to "Placeholder" if not provided)
     */
    label?: string;
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
    name: string;
    /**
     * Optional ID for the input
     */
    id?: string;
    /**
     * Value for the checkbox
     */
    value?: string;
    /**
     * Display variant of the checkbox
     * @default 'text-right'
     */
    variant?: "checkbox-only" | "text-right" | "text-left";
}
export declare const FormCheckbox: React.FC<FormCheckboxProps>;
export default FormCheckbox;
