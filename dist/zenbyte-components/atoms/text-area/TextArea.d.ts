import React from "react";
export interface TextAreaProps {
    variant?: "default" | "filled" | "hover" | "focus" | "disabled" | "success" | "info" | "warning" | "error";
    placeholder?: string;
    value?: string;
    rows?: number;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
}
export declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
