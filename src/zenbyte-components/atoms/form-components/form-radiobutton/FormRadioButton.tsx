import React from "react";
import { useFormContext } from "../form/Form";
import { RadioButton, RadioButtonProps } from "../../radio-button/RadioButton";

interface FormRadioButtonProps extends Omit<RadioButtonProps, "checked" | "onChange"> {
  name: string;
  value: string;
}

export const FormRadioButton: React.FC<FormRadioButtonProps> = ({
  name,
  value,
  ...rest
}) => {
  const { values, setValue, errors } = useFormContext();
  const selectedValue = values[name];
  const error = errors[name];

  const handleChange = () => {
    setValue(name, value);
  };

  return (
    <div className="flex flex-col gap-1.5 justify-center">
      <RadioButton
        {...rest}
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={handleChange}
        error={!!error}
      />
      {error && (
        <p className="text-zb-coral-400 text-headlineLarge m-0">{error}</p>
      )}
    </div>
  );
};

export default FormRadioButton;
