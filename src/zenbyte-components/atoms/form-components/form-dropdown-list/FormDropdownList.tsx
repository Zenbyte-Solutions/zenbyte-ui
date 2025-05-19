// src/components/form/FormDropdownList.tsx

import React from "react";
import { useFormContext } from "../form/Form";
import { DropdownList, DropdownListProps } from "../../../molecules/dropdown-list/DropdownList";

interface FormDropdownListProps extends Omit<DropdownListProps, "value" | "onChange" | "errorMessage"> {
  name: string;
}

export const FormDropdownList: React.FC<FormDropdownListProps> = ({
  name,
  ...rest
}) => {
  const { values, setValue, errors } = useFormContext();
  const selectedValue = values[name];
  const error = errors[name];

  const handleChange = (newValue: string) => {
    setValue(name, newValue);
  };

  return (
    <DropdownList
      {...rest}
      value={selectedValue}
      onChange={handleChange}
      errorMessage={error}
    />
  );
};

export default FormDropdownList;
