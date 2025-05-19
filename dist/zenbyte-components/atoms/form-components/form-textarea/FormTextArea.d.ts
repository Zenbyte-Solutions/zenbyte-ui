import React from "react";
export interface FormTextAreaProps {
    name: string;
    label?: string;
    variant?: "default" | "filled" | "hover" | "focus" | "disabled" | "success" | "info" | "warning" | "error";
    placeholder?: string;
    helperText?: string | null;
    value?: string;
    rows?: number;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
}
export declare const FormTextArea: React.FC<FormTextAreaProps>;
export default FormTextArea;
