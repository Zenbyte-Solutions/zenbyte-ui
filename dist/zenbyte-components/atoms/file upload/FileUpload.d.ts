import React from "react";
export interface FileUploadProps {
    /**
     * Title displayed at the top of the file upload component
     */
    title?: string;
    /**
     * Subtitle text displayed below the title
     */
    subtitle?: string;
    /**
     * Array of accepted file formats to display to the user
     */
    acceptedFormats?: string[];
    /**
     * Maximum file size in bytes (optional)
     */
    maxFileSize?: number;
    /**
     * Callback function triggered when files are added
     */
    onChange?: (files: File[]) => void;
}
/**
 * FileUpload component for handling file uploads with drag and drop functionality
 */
export declare const FileUpload: React.FC<FileUploadProps>;
export default FileUpload;
