import React from "react";
interface FormNumberInputProps {
    /** The name of the field in the form */
    name: string;
    /** Label text displayed above the input */
    label?: string;
    /** Placeholder text shown when input is empty */
    placeholder?: string;
    /** Visual variant of the input */
    variant?: "default" | "filled" | "hover" | "focus" | "disabled" | "success" | "info" | "warning" | "error";
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
export declare const FormNumberInput: React.FC<FormNumberInputProps>;
export default FormNumberInput;
