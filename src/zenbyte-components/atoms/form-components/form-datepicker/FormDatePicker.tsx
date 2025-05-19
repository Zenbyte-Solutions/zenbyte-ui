import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useFormContext } from "../form/Form";
import { DatePicker, DatePickerProps } from "../../date-picker/DatePicker";
import { Range } from "react-date-range";
import { format } from "date-fns";
import { Check, X } from "lucide-react";

type Variant = "default" | "success" | "error";

type FormDatePickerProps = Omit<
  DatePickerProps,
  "onChange" | "initialDate" | "initialDateRange"
> & {
  name: string;
  label?: string;
  helperText?: string | null;
  variant?: Variant;
};

const variants = {
  default: {
    borderClass: "border border-gray-200",
    textClass: "text-gray-699",
    helperTextClass: "text-gray-500",
    icon: null,
  },
  success: {
    borderClass: "border-2 border-emerald-400",
    textClass: "text-gray-900",
    helperTextClass: "text-emerald-400",
    icon: <Check className="w-4 h-4 text-emerald-400" />,
  },
  error: {
    borderClass: "border-2 border-zb-coral-400",
    textClass: "text-gray-900",
    helperTextClass: "text-zb-coral-400",
    icon: <X className="w-4 h-4 text-zb-coral-400" />,
  },
};

export const FormDatePicker: React.FC<FormDatePickerProps> = ({
  name,
  mode = "single",
  label,
  helperText,
  variant = "default",
  ...rest
}) => {
  const { values, setValue, errors } = useFormContext();
  const error = errors[name];
  const value = values[name];
  const [open, setOpen] = useState(false);
  const [hasSelectedStart, setHasSelectedStart] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

const handleChange = (newValue: Date | Range[]) => {
  setValue(name, newValue);

  if (mode === "single" && newValue instanceof Date) {
    setOpen(false);
  }

  if (mode === "range" && Array.isArray(newValue)) {
    const range = newValue[0];
    if (!hasSelectedStart && range.startDate) {
      setHasSelectedStart(true);
    } else if (hasSelectedStart && range.startDate && range.endDate) {
      setOpen(false);
      setHasSelectedStart(false);
    }
  }
};

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

React.useEffect(() => {
  if (!open) {
    setHasSelectedStart(false);
  }

  if (open) {
    document.addEventListener("mousedown", handleClickOutside);
  } else {
    document.removeEventListener("mousedown", handleClickOutside);
  }

  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [open]);

  const formatValue = () => {
    if (!value) return "";
    if (mode === "single" && value instanceof Date) {
      return format(value, "dd-MM-yyyy");
    }
    if (mode === "range" && Array.isArray(value)) {
      const start = value[0]?.startDate;
      const end = value[0]?.endDate;
      return start && end
        ? `${format(start, "dd-MM-yyyy")} - ${format(end, "dd-MM-yyyy")}`
        : "";
    }
    return "";
  };

  const currentVariant = error ? "error" : value ? "success" : variant;
  const current = variants[currentVariant];

  return (
    <>
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="text-bodySmallMedium font-semibold text-gray-700">
            {label}
          </label>
        )}
        <div
          className={`flex items-center h-10 rounded-md cursor-pointer px-3 py-2 transition-all duration-300 ease-in-out ${current.borderClass} bg-white hover:border-zb-indigo-400`}
          onClick={() => setOpen(true)}
        >
          <input
            type="text"
            readOnly
            placeholder="DD-MM-YYYY"
            value={formatValue()}
            className={`w-full bg-transparent border-none outline-none text-bodySmallRegular ${current.textClass}`}
          />
          {current.icon && <div className="ml-2">{current.icon}</div>}
        </div>

        {helperText !== null && (
          <p className={`text-headlineLarge ${current.helperTextClass} m-0`}>
            {error ? error : helperText}
          </p>
        )}
      </div>

      {open &&
        createPortal(
          <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
            <div ref={modalRef} className="bg-white rounded-lg p-4 shadow-lg">
              <DatePicker
                {...rest}
                mode={mode}
                onChange={handleChange}
                initialDate={mode === "single" ? value : undefined}
                initialDateRange={mode === "range" ? value : undefined}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default FormDatePicker;
