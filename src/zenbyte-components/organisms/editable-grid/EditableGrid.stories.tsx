import { useEffect, useState } from "react";
import { EditableGrid, GridColumn } from "./EditableGrid";
import { Container } from "../../atoms/container/Container";

interface Person {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate?: string;
  age?: number;
  gender?: string;
}

const columns: GridColumn<Person>[] = [
  { id: "firstName", header: "FirstName", type: "text" },
  { id: "birthDate", header: "BirthDate", type: "date" },
  { id: "age", header: "Age", type: "number" },
  {
    id: "gender",
    header: "Gender",
    type: "select",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
    ],
  },
];

const initialData: Person[] = [
  {
    id: "1",
    firstName: "Jan",
    lastName: "Jansen",
    email: "jan.jansen@example.com",
    age: 10,
    birthDate: "2014-05-16",
    gender: "man",
  },
  {
    id: "2",
    firstName: "Piet",
    lastName: "Pietersen",
    email: "piet.pietersen@example.com",
    birthDate: "2014-05-16",
    gender: "vrouw",
  },
];

export default {
  title: "Zenbyte/Organisms/EditableGrid",
  component: EditableGrid,
};

export const Default = () => {
  const handleSubmit = (submittedData: Person[]) => {
    console.log("Send data:", submittedData);
  };

  return (
      <EditableGrid<Person>
        columns={columns}
        onSubmit={handleSubmit}
        // Add initial data through props (than its a controlled component)
        // Or add the EditableGrid initial data for intern state default values
      />
  );
};

export const Controlled = () => {
  const [data, setData] = useState<Person[]>(initialData);
  const [leeftijdGem, setLeeftijdGem] = useState<number | null>(null);

  useEffect(() => {
    const leeftijds = data
      .map((row) => row.age)
      .filter((age): age is number => typeof age === "number");

    if (leeftijds.length > 0) {
      const totaal = leeftijds.reduce((acc, cur) => acc + cur, 0);
      setLeeftijdGem(totaal);
    } else {
      setLeeftijdGem(null);
    }
  }, [data]);

  const handleFieldChange = (
    rowId: string,
    field: keyof Person,
    value: string
  ) => {
    if (field === "age") {
      const newData = data.map((r) =>
        r.id === rowId ? { ...r, [field]: Number(value) } : r
      );
      setData(newData);
    } else {
      const newData = data.map((r) =>
        r.id === rowId ? { ...r, [field]: value } : r
      );
      setData(newData);
    }
  };

  const handleSubmit = (newData: Person[]) => {
    setData(newData);
    console.log("Ingezonden data:", newData);
  };

  return (
    <div>
      <EditableGrid<Person>
        columns={columns}
        onSubmit={handleSubmit}
        onFieldChange={handleFieldChange}
        data={data}
      />

      {leeftijdGem}
    </div>
  );
};
