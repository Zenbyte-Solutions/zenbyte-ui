export interface GridColumn<T> {
    id: keyof T;
    header: string;
    placeholder?: string;
    type?: "text" | "number" | "date" | "select";
    options?: {
        label: string;
        value: string;
    }[];
}
interface EditableGridProps<T extends {
    id: string;
}> {
    columns: GridColumn<T>[];
    data?: T[];
    onSubmit?: (data: T[]) => void;
    onFieldChange?: (rowId: string, field: keyof T, value: string) => void;
    onAddRow?: (row: T) => void;
    onRemoveRow?: (rowId: string) => void;
}
export declare function EditableGrid<T extends {
    id: string;
}>({ columns, data: controlledData, onSubmit, onFieldChange, onAddRow, onRemoveRow, }: EditableGridProps<T>): import("react/jsx-runtime").JSX.Element;
export default EditableGrid;
