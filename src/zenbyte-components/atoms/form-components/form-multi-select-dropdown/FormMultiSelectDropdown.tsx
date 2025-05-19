import React from "react";
import { useFormContext } from "../form/Form";
import {
  MultiSelectDropdown,
  MultiSelectDropdownProps,
} from "../../../molecules/multi-select-dropdown/MultiSelectDropdown";

interface FormMultiSelectDropdownProps
  extends Omit<
    MultiSelectDropdownProps,
    "values" | "onChange" | "errorMessage"
  > {
  name: string;
}

export const FormMultiSelectDropdown: React.FC<FormMultiSelectDropdownProps> = ({
  name,
  ...rest
}) => {
  const { values, setValue, errors } = useFormContext();

  const selectedValues = values[name] || [];
  const error = errors[name];

  const handleChange = (newValues: string[]) => {
    setValue(name, newValues);
  };

  return (
    <MultiSelectDropdown
      {...rest}
      values={selectedValues}
      onChange={handleChange}
      errorMessage={error}
    />
  );
};

export default FormMultiSelectDropdown;
