import { FC, useContext, useState } from "react";

import { PropertiesContext } from "../../../../providers/properties";
import { MandatoryFieldSymbol } from "../../../../components/MandatoryFieldSymbol";

// TODO: property guest limit and image

type BookingSelectFieldType = FC<{
  defaultPropertyId: number;
  onchange: (propertyId: number) => void;
}>;

export const BookingSelectField: BookingSelectFieldType = ({
  defaultPropertyId,
  onchange
}) => {
  const [propertyId, setPropertyId] = useState<string>(
    String(defaultPropertyId)
  );
  const { properties } = useContext(PropertiesContext);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setPropertyId(value);
    onchange(parseInt(value, 10));
  };

  return (
    <p className="flex">
      <span className="mr-3">
        Property <MandatoryFieldSymbol />
      </span>

      <span className="border border-slate-300">
        <select autoFocus value={propertyId} onChange={handleChange}>
          <option value="0">Please select a property</option>

          {properties.map(({ id, title }) => (
            <option value={id} key={id}>
              {title} (#{id})
            </option>
          ))}
        </select>
      </span>
    </p>
  );
};
