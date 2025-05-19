import React from "react";
interface FormData {
    teamNumber: string;
    workScope: string;
    date: string;
    location: string;
    category: string;
    selectedOption: "one" | "two";
}
interface CreateItemModalProps {
    /**
     * Function to close the modal
     */
    onClose: () => void;
    /**
     * Function to handle form submission
     */
    onSubmit: (formData: FormData) => void;
    /**
     * Initial form data (for pre-filled forms)
     */
    initialData?: FormData;
    /**
     * Initial error states
     */
    initialErrors?: {
        teamNumber?: string | null;
        location?: string | null;
    };
    /**
     * Initial UI states
     */
    initialUI?: {
        showDatePicker?: boolean;
        showCategoryDropdown?: boolean;
    };
}
/**
 * Modal component for creating a new item
 */
export declare const CreateItemModal: React.FC<CreateItemModalProps>;
export default CreateItemModal;
