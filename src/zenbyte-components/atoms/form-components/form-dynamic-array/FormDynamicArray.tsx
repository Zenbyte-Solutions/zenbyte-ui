import React from "react";
import { useFormContext } from "../form/Form";
import { Plus, Minus } from "lucide-react";

interface FormDynamicArrayProps {
  /** The field name in the form schema */
  name: string;
  /** Label displayed above the array inputs */
  label?: string;
  /** Placeholder text for empty input fields */
  placeholder?: string;
  /** Helper text displayed below the inputs */
  helperText?: string;
  /** Minimum number of items in the array (default: 0) */
  minItems?: number;
  /** Maximum number of items in the array (optional) */
  maxItems?: number;
  /** Initial items to show when array is empty */
  initialItems?: string[];
}

export const FormDynamicArray: React.FC<FormDynamicArrayProps> = ({
  name,
  label,
  placeholder = "Enter item",
  helperText,
  minItems = 0,
  maxItems,
  initialItems = [""],
}) => {
  const { values, errors, setValue } = useFormContext();

  const currentValue = values[name] || initialItems;
  const error = errors[name];

  const updateArray = (newArray: string[]) => {
    setValue(name, newArray);
  };

  const addItem = () => {
    if (maxItems && currentValue.length >= maxItems) return;
    updateArray([...currentValue, ""]);
  };

  const removeItem = (index: number) => {
    if (currentValue.length <= minItems) return;
    const newArray = currentValue.filter((_: string, i: number) => i !== index);
    updateArray(newArray);
  };

  const updateItem = (index: number, value: string) => {
    const newArray = [...currentValue];
    newArray[index] = value;
    updateArray(newArray);
  };

  const canAddItems = !maxItems || currentValue.length < maxItems;
  const canRemoveItems = currentValue.length > minItems;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-bodySmallMedium font-semibold text-gray-700">
          {label}
        </label>
      )}
      
      <div className="flex flex-col gap-2">
        {currentValue.map((item: string, index: number) => (
          <div
            key={index}
            className="flex items-center gap-2 w-full"
          >
            <div className="flex-1">
              <div
                className={`
                  flex items-center 
                  rounded-md h-10
                  border transition-all 
                  duration-zb-300 
                  ease-in-out
                  hover:border-zb-indigo-400
                  ${error ? 'border-2 border-zb-coral-400' : 'border border-gray-200'}
                  ${item ? 'border-2 border-emerald-400' : ''}
                  bg-white
                  p-0
                `}
              >
                <input
                  type="text"
                  value={item}
                  placeholder={placeholder}
                  onChange={(e) => updateItem(index, e.target.value)}
                  className="
                    w-full h-full
                    px-3 py-2
                    border-none outline-none
                    bg-transparent
                    text-bodySmallRegular
                    text-gray-500
                    rounded-md
                  "
                />
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={addItem}
                disabled={!canAddItems}
                className={`
                  flex items-center justify-center
                  w-8 h-8 md:w-8 md:h-8
                  rounded-zb-button
                  transition-all duration-300 ease-in-out
                  ${canAddItems 
                    ? 'bg-zb-indigo-500 hover:bg-zb-indigo-600 text-zb-white cursor-pointer' 
                    : 'bg-zb-gray-200 text-zb-gray-500 cursor-not-allowed'
                  }
                `}
              >
                <Plus className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              
              <button
                type="button"
                onClick={() => removeItem(index)}
                disabled={!canRemoveItems}
                className={`
                  flex items-center justify-center
                  w-8 h-8 md:w-8 md:h-8
                  rounded-zb-button
                  transition-all duration-300 ease-in-out
                  ${canRemoveItems 
                    ? 'bg-zb-coral-400 hover:bg-zb-coral-500 text-zb-white cursor-pointer' 
                    : 'bg-zb-gray-200 text-zb-gray-500 cursor-not-allowed'
                  }
                `}
              >
                <Minus className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {helperText && !error && (
        <p className="text-headlineLarge text-gray-500 m-0">
          {helperText}
        </p>
      )}
      
      {error && (
        <p className="text-headlineLarge text-zb-coral-400 m-0">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormDynamicArray;