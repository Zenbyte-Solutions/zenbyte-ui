import React from "react";
export interface InputProps {
    /**
     * Input style variant
     */
    variant?: "default" | "filled" | "hover" | "focus" | "disabled" | "success" | "info" | "warning" | "error";
    /**
     * Type of validation to apply
     */
    validationType?: "email" | "username" | "password" | "default";
    /**
     * Placeholder text for the input
     */
    placeholder?: string;
    /**
     * Initial value for the input
     */
    value?: string;
    /**
     * Callback function when input value changes
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Callback for validation status
     */
    onValidate?: (isValid: boolean) => void;
    /**
     * Optional label text to display
     */
    label?: string;
    /**
     * Optional helper text to display
     * Set to null to hide helper text completely
     */
    helperText?: string | null;
    /**
     * Input type (text, password, email, etc.)
     */
    type?: string;
}
/**
 * Input component with multiple style variants
 */
export declare const Input: React.FC<InputProps>;
export default Input;
