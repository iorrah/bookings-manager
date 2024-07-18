import { FC, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { addDays } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

type DatePickerRangeType = FC<{
  startDate: Date;
  endDate: Date;
  onChange: (update: [Date, Date]) => void;
}>;

export const DatePickerRange: DatePickerRangeType = ({
  startDate,
  endDate,
  onChange
}) => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    startDate,
    endDate
  ]);

  const handleChange = (update: [Date | null, Date | null]) => {
    const [checkIn, checkOut] = update;

    setDateRange(update);

    if (checkIn instanceof Date && checkOut instanceof Date) {
      onChange([checkIn, checkOut]);
    }
  };

  // TODO:
  // 1. Define excluded dates based on other bookings
  // 2. Prevent selection of excluded dates in the range
  // 3. Amend styling to match brand theme

  return (
    <ReactDatePicker
      selectsRange={true}
      startDate={dateRange[0] || undefined}
      endDate={dateRange[1] || undefined}
      onChange={handleChange}
      minDate={new Date()}
      excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
      withPortal
      monthsShown={2}
    />
  );
};
