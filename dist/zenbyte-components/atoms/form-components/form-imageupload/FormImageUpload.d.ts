import React from "react";
interface FormImageUploadProps {
    name: string;
    label?: string;
    helperText?: string | null;
    acceptedFormats?: string[];
    maxFileSize?: number;
    multiple?: boolean;
    variant?: "default" | "hover" | "focus" | "success" | "error";
}
export declare const FormImageUpload: React.FC<FormImageUploadProps>;
export default FormImageUpload;
