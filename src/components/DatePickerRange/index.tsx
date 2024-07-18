import { FC, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { isAfter } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

type DatePickerRangeType = FC<{
  defaultStartDate: Date;
  defaultEndDate: Date;
  excludedDates: Date[];
  disabled: boolean;
  onChange: (update: [Date, Date]) => void;
}>;

export const DatePickerRange: DatePickerRangeType = ({
  defaultStartDate,
  defaultEndDate,
  excludedDates,
  disabled,
  onChange
}) => {
  // TODO:
  // 1. Amend styling to match brand theme

  const [startDate, setStartDate] = useState<Date | null>(defaultStartDate);
  const [endDate, setEndDate] = useState<Date | null>(defaultEndDate);
  const [maxDate] = useState<Date | null>(null);
  const [maxDateDatepicker, setMaxDateDatepicker] = useState<Date | null>(null);

  const handleChange = (update: [Date | null, Date | null]) => {
    const [selectedStartDate, selectedEndDate] = update;

    setStartDate(selectedStartDate);

    if (selectedEndDate == null) {
      setEndDate(selectedEndDate);

      if (
        startDate != null &&
        selectedStartDate?.toString() === startDate?.toString()
      ) {
        setStartDate(null);
        setMaxDateDatepicker(maxDate);
      } else if (excludedDates.length > 0 && selectedStartDate) {
        for (const excludedDate of excludedDates) {
          if (isAfter(excludedDate, new Date(selectedStartDate))) {
            setMaxDateDatepicker(excludedDate);
            break;
          }
        }
      }
    } else if (selectedStartDate?.toString() !== selectedEndDate?.toString()) {
      setEndDate(selectedEndDate);
      setMaxDateDatepicker(null);

      if (
        selectedStartDate instanceof Date &&
        selectedEndDate instanceof Date
      ) {
        onChange([selectedStartDate, selectedEndDate]);
      }
    }
  };

  useEffect(() => {
    setStartDate(defaultStartDate);
    setEndDate(defaultEndDate);
  }, [defaultStartDate, defaultEndDate]);

  return (
    <ReactDatePicker
      selected={null}
      startDate={startDate || undefined}
      endDate={endDate || undefined}
      onChange={handleChange}
      minDate={new Date()}
      excludeDates={excludedDates}
      maxDate={maxDateDatepicker || undefined}
      withPortal
      monthsShown={3}
      dateFormat="d MMM yy"
      disabled={disabled}
      selectsRange
    />
  );
};
