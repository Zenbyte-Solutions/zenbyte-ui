import React from "react";
interface NumberInputProps {
    value?: number;
    onChange?: (value: number | null) => void;
    onBlur?: () => void;
    label?: string;
    helperText?: string | null;
    placeholder?: string;
    variant?: "default" | "filled" | "hover" | "focus" | "disabled" | "success" | "error";
    required?: boolean;
    min?: number;
    max?: number;
    step?: number;
    className?: string;
}
export declare const NumberInput: React.FC<NumberInputProps>;
export default NumberInput;
