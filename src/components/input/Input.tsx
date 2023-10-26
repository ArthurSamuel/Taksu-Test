import { useState } from "react";
import { InputDateFC } from "./Input.styles";
import "react-datepicker/dist/react-datepicker.css";

interface IInputDate {
  name: string;
  onChange(date: string): void;
}

export const InputDate = ({ name, onChange }: IInputDate) => {
  const [startDate, setStartDate] = useState<any>(new Date());

  return (
    <div>
      <InputDateFC
        name={name}
        selected={startDate}
        onChange={(e) => {
          setStartDate(e);
          onChange(e?.toDateString() || "");
        }}
        dateFormat="Pp"
        showTimeInput
      />
    </div>
  );
};
