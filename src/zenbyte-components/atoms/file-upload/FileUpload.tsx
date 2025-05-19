import React, { useState, useRef } from "react";
import { CloudUpload } from "lucide-react";

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
export const FileUpload: React.FC<FileUploadProps> = ({
  title = "File Upload",
  subtitle = "Drag and drop files or click to browse",
  acceptedFormats = ["JPEG", "PNG", "MP4", "PDF", "Excel", "Word", "PPT"],
  maxFileSize,
  onChange,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const formatText = acceptedFormats.join(", ");

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (newFiles: File[]) => {
    // You can add validation here based on acceptedFormats and maxFileSize
    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);
    if (onChange) {
      onChange(updatedFiles);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="w-full p-8 bg-white max-w-desktop rounded-cards">
      {/* Header Section */}
      <h2 className="m-0 font-semibold text-gray-900 text-headlineXXSmall">
        {title}
      </h2>
      <p className="mt-1 mb-4 text-gray-500 text-bodyRegular">{subtitle}</p>

      {/* Divider */}
      <hr className="h-px mb-6 bg-gray-200 border-0" />

      {/* Upload Area */}
      <div
        className={`
          flex flex-col items-center justify-center 
          p-8 rounded-cards cursor-pointer
          border border-dashed transition-all duration-default
          ${dragActive ? "border-indigo-400" : "border-gray-200"}
          bg-white
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {/* Hidden File Input */}
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple
          onChange={handleChange}
        />

        {/* Upload Icon */}
        <CloudUpload size={32} className="my-2 text-gray-500" />

        {/* Upload Text */}
        <p className="my-2 text-center text-gray-700 text-bodySmallRegular">
          Drag & drop files or{" "}
          <span className="text-indigo-500 cursor-pointer">Browse</span>
        </p>

        {/* Supported Formats */}
        <p className="m-0 text-center text-gray-500 text-captionRegular">
          Supported formats: {formatText}
        </p>
      </div>
    </div>
  );
};

export default FileUpload;
