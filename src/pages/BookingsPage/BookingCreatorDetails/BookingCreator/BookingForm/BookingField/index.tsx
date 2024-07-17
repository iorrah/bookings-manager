import { FC, useEffect, useState } from "react";

import Pen from "./pen.svg";

type BookingField = FC<{
  id: number;
  title: string;
  field: string;
  value: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "number" | "text";
}>;

export const BookingField: BookingField = ({
  id,
  title,
  field,
  value,
  required,
  onChange,
  type
}) => {
  const [editing, setEditing] = useState(false);

  const handleClick = () => setEditing(true);

  useEffect(() => {
    setEditing(false);
  }, [id]);

  return (
    <div className="flex justify-between p-2">
      <p>{title}</p>

      {editing ? (
        <input
          type={type || "text"}
          name={field}
          value={value}
          className="text-right border"
          onChange={onChange}
          autoFocus
          required={required}
        />
      ) : (
        <p className="flex cursor-pointer" onClick={handleClick}>
          <label className="mr-2 block cursor-pointer">{value}</label>
          <img src={Pen} alt="Pen Icon" className="w-3" />
        </p>
      )}
    </div>
  );
};
