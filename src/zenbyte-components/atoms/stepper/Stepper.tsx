import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface StepperProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  value,
  onChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  disabled = false,
  className = "",
}) => {
  const [inputValue, setInputValue] = useState(value.toString());

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleIncrease = () => {
    const newValue = value + step;
    if (!disabled && newValue <= max) {
      onChange(newValue);
    }
  };

  const handleDecrease = () => {
    const newValue = value - step;
    if (!disabled && newValue >= min) {
      onChange(newValue);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    const parsed = parseInt(inputValue, 10);
    if (!isNaN(parsed) && parsed >= min && parsed <= max) {
      onChange(parsed);
    } else {
      setInputValue(value.toString());
    }
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        className="w-12 h-10 text-center border border-gray-300 rounded text-sm disabled:opacity-50"
        disabled={disabled}
      />
      <div className="flex flex-col">
        <button
          onClick={handleIncrease}
          className="p-1 hover:bg-gray-100 rounded-t disabled:opacity-50"
          disabled={disabled || value + step > max}
          type="button"
        >
          <ChevronUp size={16} />
        </button>
        <button
          onClick={handleDecrease}
          className="p-1 hover:bg-gray-100 rounded-b disabled:opacity-50"
          disabled={disabled || value - step < min}
          type="button"
        >
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default Stepper;
