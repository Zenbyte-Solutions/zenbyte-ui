import { ZodSchema } from "zod";
type FormContextType = {
    values: Record<string, any>;
    errors: Record<string, string>;
    setValue: (name: string, value: any) => void;
    schema: ZodSchema<any>;
};
export declare const useFormContext: () => FormContextType;
export declare const Form: ({ schema, children, onSubmit, buttonText, initialValues, }: {
    schema: ZodSchema<any>;
    children: React.ReactNode;
    onSubmit: (values: Record<string, any>) => void;
    buttonText?: string;
    initialValues?: Record<string, any>;
}) => import("react/jsx-runtime").JSX.Element;
export default Form;
