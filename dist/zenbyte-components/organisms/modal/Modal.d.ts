import React from "react";
export interface ModalProps {
    /**
     * Modal title
     */
    title: string;
    /**
     * Modal content
     */
    content: React.ReactNode;
    /**
     * Whether the modal is open
     */
    isOpen: boolean;
    /**
     * Function to call when the modal is closed
     */
    onClose: () => void;
    /**
     * Function to call when the primary action is clicked
     */
    onAction?: () => void;
    /**
     * Text for the primary action button
     * @default "Agree"
     */
    actionText?: string;
    /**
     * Text for the secondary action button
     * @default "Info"
     */
    secondaryActionText?: string;
    /**
     * Function to call when the secondary action is clicked
     */
    onSecondaryAction?: () => void;
    /**
     * Additional class name for the modal
     */
    className?: string;
    /**
     * Variant for the primary action button
     * @default "filled"
     */
    actionVariant?: "filled" | "border" | "text";
    /**
     * Color for the primary action button
     * @default "primary"
     */
    actionColor?: "primary" | "secondary" | "danger" | "success" | "warning" | "error" | "alert";
    /**
     * Variant for the secondary action button
     * @default "text"
     */
    secondaryActionVariant?: "filled" | "border" | "text";
    /**
     * Color for the secondary action button
     * @default "primary"
     */
    secondaryActionColor?: "primary" | "secondary" | "danger" | "success" | "warning" | "error" | "alert";
}
/**
 * Modal component for displaying information or actions that require attention
 */
export declare const Modal: React.FC<ModalProps>;
export default Modal;
