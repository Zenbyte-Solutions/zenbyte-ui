import React from "react";
interface FormInputProps {
    name: string;
    label?: string;
    validationType?: "email" | "username" | "password" | "default";
    placeholder?: string;
    type?: string;
    variant?: "default" | "filled" | "hover" | "focus" | "disabled" | "success" | "info" | "warning" | "error";
    helperText?: string | null;
}
export declare const FormInput: React.FC<FormInputProps>;
export default FormInput;
