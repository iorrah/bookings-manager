import { FC, useContext, useState } from "react";
import { eachDayOfInterval } from "date-fns";

import { Booking } from "../../../../../types";
import { DatePickerRange } from "../../../../../components/DatePickerRange";
import Pen from "../../../../../assets/pen.svg";
import { BookingsContext } from "../../../../../providers/bookings";
import { MandatoryFieldSymbol } from "../../../../../components/MandatoryFieldSymbol";
import { isCreating } from "../../../../../utils";

type BookingDateField = FC<{
  booking: Booking;
  onChange: (update: [Date, Date]) => void;
}>;

export const BookingDateField: BookingDateField = ({ booking, onChange }) => {
  const { bookings } = useContext(BookingsContext);

  const [isIconVisible, setIsIconVisible] = useState(
    !isCreating(booking.status)
  );

  let excludedDates: Date[] = [];

  const sharedPropertyBookings = bookings.filter(
    ({ id, propertyId }: Booking) =>
      id !== booking.id && propertyId === booking.propertyId
  );

  const bookingsInterval = sharedPropertyBookings.map(
    ({ checkIn, checkOut }) => [checkIn, checkOut]
  );

  bookingsInterval.forEach(([checkIn, checkOut]) => {
    const bookedDates = eachDayOfInterval({
      start: new Date(checkIn),
      end: new Date(checkOut)
    });

    bookedDates.forEach(bookedDate => excludedDates.push(bookedDate));
  });

  const handleIconClick = () => setIsIconVisible(false);

  return (
    <div className="flex justify-between p-2">
      <p>
        Check in/out <MandatoryFieldSymbol />
      </p>

      <div className="flex cursor-pointer gap-2">
        <div
          title={booking.propertyId ? "" : "Please select a property first"}
          className="border border-slate-300"
        >
          <DatePickerRange
            defaultStartDate={new Date(booking.checkIn)}
            defaultEndDate={new Date(booking.checkOut)}
            excludedDates={excludedDates}
            disabled={!booking.propertyId}
            onChange={onChange}
          />
        </div>

        {isIconVisible ? (
          <img
            src={Pen}
            alt="Edit Check in and Check out dates"
            title="Edit Check in and Check out dates"
            className="w-3"
            onClick={handleIconClick}
          />
        ) : null}
      </div>
    </div>
  );
};
