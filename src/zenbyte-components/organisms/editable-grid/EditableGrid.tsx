import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";
import DropdownList from "../../molecules/dropdown-list/DropdownList";

export interface GridColumn<T> {
  id: keyof T;
  header: string;
  placeholder?: string;
  type?: "text" | "number" | "date" | "select";
  options?: { label: string; value: string }[]; // only for type === "select"
}

interface EditableGridProps<T extends { id: string }> {
  columns: GridColumn<T>[];
  data?: T[]; // optioneel
  onSubmit?: (data: T[]) => void;
  onFieldChange?: (rowId: string, field: keyof T, value: string) => void;
  onAddRow?: (row: T) => void;
  onRemoveRow?: (rowId: string) => void;
}

export function EditableGrid<T extends { id: string }>({
  columns,
  data: controlledData,
  onSubmit,
  onFieldChange,
  onAddRow,
  onRemoveRow,
}: EditableGridProps<T>) {
  // Interne state alleen als controlledData niet gegeven is
  const [internalData, setInternalData] = useState<T[]>(controlledData ?? []);

  // Sync interne state als controlledData verandert (controlled component)
  useEffect(() => {
    if (controlledData) {
      setInternalData(controlledData);
    }
  }, [controlledData]);

  const data = controlledData ?? internalData;

  const updateRow = (rowId: string, field: keyof T, value: string) => {
    if (onFieldChange) {
      onFieldChange(rowId, field, value);
    } else {
      setInternalData((prev) =>
        prev.map((row) =>
          row.id === rowId ? { ...row, [field]: value } : row
        )
      );
    }
  };

const addRow = () => {
  const newRow = {
    ...(Object.fromEntries(
      columns.filter((col) => col.id !== "id").map((col) => [col.id, ""])
    ) as T),
    id: uuidv4(),
  };

  if (onAddRow) {
    onAddRow(newRow);
  } else if (controlledData && onFieldChange) {
    const newData = [...controlledData, newRow];
    onSubmit?.(newData); 
  } else {
    setInternalData((prev) => [...prev, newRow]);
  }
};

const removeRow = (rowId: string) => {
  if (onRemoveRow) {
    onRemoveRow(rowId);
  } else if (controlledData && onFieldChange) {
    const newData = controlledData.filter((row) => row.id !== rowId);
    onSubmit?.(newData);
  } else {
    setInternalData((prev) => prev.filter((row) => row.id !== rowId));
  }
};

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(data);
    } else {
      console.log("Submit data from component:", data);
    }
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-zb-gray-200 min-w-full">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-white border-b border-zb-gray-200">
            {columns.map((col) => (
              <th
                key={col.id as string}
                className="px-4 py-3 text-left font-medium text-zb-desktop-label text-zb-gray-700"
              >
                {col.header}
              </th>
            ))}
            <th className="px-4 py-3 text-left font-medium text-zb-mobile-label md:text-zb-desktop-label text-zb-gray-700">
              Acties
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={row.id}
              className={`border-b border-zb-gray-200 ${
                rowIndex % 2 === 1 ? "bg-zb-gray-50" : ""
              }`}
            >
              {columns.map((col) => {
                const value = row[col.id] as string;

                return (
                  <td
                    key={col.id as string}
                    className="px-4 py-3 text-zb-desktop-bodyRegular text-zb-gray-900"
                  >
                    {col.type === "select" ? (
                      <DropdownList
                        dropdownLabel=""
                        value={value || ""}
                        onChange={(val) => updateRow(row.id, col.id, val)}
                        options={[{ label: "Selecteer...", value: "" }, ...(col.options ?? [])]}
                      />
                    ) : (
                      <Input
                        type={col.type ?? "text"}
                        value={value || ""}
                        onChange={(e) => updateRow(row.id, col.id, e.target.value)}
                        placeholder={col.placeholder}
                        label=" "
                        helperText={null}
                      />
                    )}
                  </td>
                );
              })}
              <td className="px-4 py-3">
                <Button
                  onClick={() => removeRow(row.id)}
                  color="error"
                  size="tiny"
                  variant="text"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between p-4">
        <Button onClick={addRow} size="small">
          + Add Row
        </Button>
        <Button onClick={handleSubmit} size="small">
          Save
        </Button>
      </div>
    </div>
  );
}

export default EditableGrid;
