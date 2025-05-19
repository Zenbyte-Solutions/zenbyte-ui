import React from "react";
import Button from "../../atoms/button/Button";

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
  actionColor?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "error"
    | "alert";

  /**
   * Variant for the secondary action button
   * @default "text"
   */
  secondaryActionVariant?: "filled" | "border" | "text";

  /**
   * Color for the secondary action button
   * @default "primary"
   */
  secondaryActionColor?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "error"
    | "alert";
}

/**
 * Modal component for displaying information or actions that require attention
 */
export const Modal: React.FC<ModalProps> = ({
  title,
  content,
  isOpen,
  onClose,
  onAction,
  actionText = "Agree",
  secondaryActionText = "Info",
  onSecondaryAction,
  className = "",
  actionVariant = "filled",
  actionColor = "primary",
  secondaryActionVariant = "text",
  secondaryActionColor = "primary",
}) => {
  if (!isOpen) return null;

  // Icon for close button
  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  // Icon for primary action
  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-10 bg-gray-800 bg-opacity-75">
      <div
        className={`relative bg-white rounded-lg shadow-lg max-w-md w-full p-6 ${className}`}
      >
        {/* Header with title and close button */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Content */}
        <div className="mb-6 text-gray-700">{content}</div>

        {/* Footer with actions */}
        <div className="flex justify-end space-x-4">
          {onSecondaryAction && (
            <Button
              variant={secondaryActionVariant}
              color={secondaryActionColor}
              onClick={onSecondaryAction}
              size="medium"
            >
              {secondaryActionText}
            </Button>
          )}

          {onAction && (
            <Button
              variant={actionVariant}
              color={actionColor}
              onClick={onAction}
              size="medium"
              showArrow={true}
              arrowPosition="right"
            >
              {actionText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
