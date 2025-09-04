import { createContext, useContext, useState } from "react";
import { z, ZodSchema } from "zod";
import Button from "../../button/Button";

type FormContextType = {
  values: Record<string, any>;
  errors: Record<string, string>;
  setValue: (name: string, value: any) => void;
  schema: ZodSchema<any>;
};

const FormContext = createContext<FormContextType | null>(null);

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useFormContext must be used in Form");
  return ctx;
};

export const Form = ({
  schema,
  children,
  onSubmit,
  buttonText = "Submit",
  initialValues = {},
}: {
  schema: ZodSchema<any>;
  children: React.ReactNode;
  onSubmit: (values: Record<string, any>) => void;
  buttonText?: string;
  initialValues?: Record<string, any>;
}) => {
  const [values, setValues] = useState<Record<string, any>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const setValue = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));

    const fieldSchema = (schema as z.ZodObject<any>).shape?.[name];
    if (!fieldSchema) return;

    const result = fieldSchema.safeParse(value);
    setErrors((prev) => ({
      ...prev,
      [name]: result.success ? "" : result.error.issues[0].message,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allFields = Object.keys((schema as z.ZodObject<any>).shape);
    const completeValues: Record<string, any> = { ...values };

    // Only set defaults for fields that are completely missing AND are not optional
    for (const field of allFields) {
      if (!(field in completeValues) || completeValues[field] === undefined) {
        const fieldSchema = (schema as z.ZodObject<any>).shape[field];
        
        // Check if field is optional
        const isOptional = fieldSchema && fieldSchema._def.typeName === "ZodOptional";
        
        if (!isOptional) {
          // Only set empty string for non-optional string-like fields
          // For other types (numbers, dates, arrays), leave them undefined so Zod can show proper error
          const innerType = isOptional ? fieldSchema._def.innerType : fieldSchema;
          const typeName = innerType?._def?.typeName;
          
          if (typeName === "ZodString") {
            completeValues[field] = "";
          }
          // For arrays, set empty array
          else if (typeName === "ZodArray") {
            completeValues[field] = [];
          }
          // For other types (ZodNumber, ZodDate, etc), leave as undefined
          // This lets Zod show the proper validation message instead of type conversion errors
        }
      }
    }

    const parsed = schema.safeParse(completeValues);
    if (parsed.success) {
      onSubmit(parsed.data);
    } else {
      const newErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (typeof field === "string") {
          newErrors[field] = issue.message;
        }
      });
      setErrors(newErrors);
    }
  };

  return (
    <FormContext.Provider value={{ values, errors, setValue, schema }}>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="grid grid-cols-2 gap-6"
      >
        {children}
        <div className="col-span-2 flex justify-start">
          <Button htmlType="submit" type="default" size="medium">
            {buttonText}
          </Button>
        </div>
      </form>
    </FormContext.Provider>
  );
};

export default Form;
