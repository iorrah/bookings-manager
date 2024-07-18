import { FC } from "react";

// TODO: use absolute paths
import { Booking } from "../../../../../types";
import { DatePickerRange } from "../../../../../components/DatePickerRange";
import Pen from "../../../../../assets/pen.svg";

type BookingDateField = FC<{
  booking: Booking;
  onChange: (update: [Date, Date]) => void;
}>;

export const BookingDateField: BookingDateField = ({ booking, onChange }) => {
  return (
    <div className="flex justify-between p-2">
      <p>Check in/out</p>

      <div className="flex cursor-pointer gap-2">
        <div className="border border-slate-300">
          <DatePickerRange
            defaultStartDate={new Date(booking.checkIn)}
            defaultEndDate={new Date(booking.checkOut)}
            onChange={onChange}
          />
        </div>

        <img
          src={Pen}
          alt="Edit Check in and Check out dates"
          title="Edit Check in and Check out dates"
          className="w-3"
        />
      </div>
    </div>
  );
};
