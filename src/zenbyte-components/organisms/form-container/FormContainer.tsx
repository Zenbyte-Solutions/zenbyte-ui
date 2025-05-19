import React, { useState, useRef, useEffect } from "react";
import { X, Check, ChevronDown, Calendar } from "lucide-react";
import RadioButton from "../../atoms/radio-button/RadioButton";
import DateRangePicker from "../../atoms/date-picker/DatePicker";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import DropdownList from "../../molecules/dropdown-list/DropdownList";

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
export const CreateItemModal: React.FC<CreateItemModalProps> = ({
  onClose,
  onSubmit,
  initialData,
  initialErrors,
  initialUI,
}) => {
  // Refs for dropdown containers
  const datePickerRef = useRef<HTMLDivElement>(null);

  // Form state
  const [formData, setFormData] = useState<FormData>(
    initialData || {
      teamNumber: "",
      workScope: "Development",
      date: "",
      location: "",
      category: "",
      selectedOption: "two",
    }
  );

  // Error states
  const [teamNumberError, setTeamNumberError] = useState<string | null>(
    initialErrors?.teamNumber || null
  );
  const [locationError, setLocationError] = useState<string | null>(
    initialErrors?.location || "Please select a location to proceed."
  );

  // UI states
  const [showDatePicker, setShowDatePicker] = useState(
    initialUI?.showDatePicker || false
  );

  // Category options
  const categoryOptions = [
    { label: "Engineering", value: "engineering" },
    { label: "Design", value: "design" },
    { label: "Marketing", value: "marketing" },
    { label: "Sales", value: "sales" },
    { label: "Support", value: "support" },
  ];

  // Location options
  const locationOptions = [
    { label: "New York", value: "new-york" },
    { label: "Los Angeles", value: "los-angeles" },
    { label: "Chicago", value: "chicago" },
    { label: "San Francisco", value: "san-francisco" },
    { label: "Miami", value: "miami" },
    { label: "Seattle", value: "seattle" },
  ];

  // Handle clicks outside of date picker to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close date picker if clicked outside
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle team number change
  const handleTeamNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Check for special characters
    if (/[^0-9a-zA-Z$]/.test(value)) {
      setTeamNumberError("Please do not use special characters.");
    } else {
      setTeamNumberError(null);
    }

    setFormData({ ...formData, teamNumber: value });
  };

  // Handle date selection from the date picker
  const handleDateSelect = (date: Date) => {
    // Format date as MM/DD/YYYY
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;

    setFormData({ ...formData, date: formattedDate });
    setShowDatePicker(false);
  };

  // Handle location selection
  const handleLocationChange = (value: string) => {
    const location =
      locationOptions.find((option) => option.value === value)?.label || "";
    setFormData({ ...formData, location });
    setLocationError(null);
  };

  // Handle category selection
  const handleCategoryChange = (value: string) => {
    const category =
      categoryOptions.find((option) => option.value === value)?.label || "";
    setFormData({ ...formData, category });
  };

  // Toggle radio selection
  const handleRadioChange = (option: "one" | "two") => {
    setFormData({ ...formData, selectedOption: option });
  };

  // Handle form submission
  const handleSubmit = () => {
    // Validate form before submission
    let isValid = true;

    if (!formData.location) {
      setLocationError("Please select a location to proceed.");
      isValid = false;
    }

    if (/[^0-9a-zA-Z$]/.test(formData.teamNumber)) {
      setTeamNumberError("Please do not use special characters.");
      isValid = false;
    }

    if (isValid) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full max-w-2xl overflow-hidden bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center">
          <div className="p-2 mr-4 bg-gray-100 rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 9C17 12.87 13.87 16 10 16C6.13 16 3 12.87 3 9C3 5.13 6.13 2 10 2C13.87 2 17 5.13 17 9Z"
                stroke="#1F2937"
                strokeWidth="1.5"
              />
              <path
                d="M21 21L18 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Create New Item
          </h2>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 transition-colors hover:text-gray-700"
        >
          <X size={24} />
        </button>
      </div>

      {/* Form Content */}
      <div className="grid grid-cols-2 gap-6 p-6">
        {/* Team Number */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Team Number
          </label>
          <Input
            variant={
              teamNumberError
                ? "error"
                : formData.teamNumber
                ? "default"
                : "default"
            }
            value={formData.teamNumber}
            onChange={handleTeamNumberChange}
            placeholder="Enter team number"
          />
          {teamNumberError && (
            <p className="mt-1 text-sm text-coral-400">{teamNumberError}</p>
          )}
        </div>

        {/* Work Scope */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Work Scope
          </label>
          <Input
            variant="success"
            value={formData.workScope}
            placeholder="Work Scope"
            onChange={() => {}} // Read-only
          />
        </div>

        {/* Select Date */}
        <div ref={datePickerRef}>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Select Date
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.date}
              placeholder="MM/DD/YYYY"
              readOnly
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="w-full px-3 py-2 border border-gray-200 rounded-md cursor-pointer"
            />
            <div className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 right-3">
              <Calendar size={16} />
            </div>
            {showDatePicker && (
              <div className="absolute z-20 mt-1 bg-white rounded-md shadow-lg">
                <DateRangePicker
                  months={1}
                  showStaticRange={false}
                  initialDateRange={[
                    {
                      startDate: formData.date
                        ? new Date(formData.date)
                        : new Date(),
                      endDate: formData.date
                        ? new Date(formData.date)
                        : new Date(),
                      key: "selection",
                    },
                  ]}
                />
                <div className="p-3 border-t border-gray-200">
                  <button
                    onClick={() => setShowDatePicker(false)}
                    className="w-full px-4 py-2 text-white transition-colors bg-indigo-500 rounded-md hover:bg-indigo-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Location */}
        <div>
          <DropdownList
            options={locationOptions}
            value={
              locationOptions.find(
                (option) => option.label === formData.location
              )?.value
            }
            placeholder="Select an option"
            onChange={handleLocationChange}
            errorMessage={locationError || undefined}
          />
        </div>

        {/* Category */}
        <div className="col-span-1">
          <DropdownList
            options={categoryOptions}
            value={
              categoryOptions.find(
                (option) => option.label === formData.category
              )?.value
            }
            placeholder="Select a category"
            onChange={handleCategoryChange}
          />
        </div>

        {/* Radio Options */}
        <div className="flex items-center col-span-1 space-x-8">
          <div className="flex items-center">
            <RadioButton
              checked={formData.selectedOption === "one"}
              onChange={() => handleRadioChange("one")}
              label="Select One"
              variant="text-right"
            />
          </div>
          <div className="flex items-center">
            <RadioButton
              checked={formData.selectedOption === "two"}
              onChange={() => handleRadioChange("two")}
              label="Select Two"
              variant="text-right"
            />
          </div>
        </div>
      </div>

      {/* Footer with Actions */}
      <div className="grid grid-cols-2 gap-4 p-6 border-t border-gray-200">
        <Button variant="border" color="primary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="filled" color="primary" onClick={handleSubmit}>
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateItemModal;
