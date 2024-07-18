import { FC, useContext, useEffect, useState } from "react";

import { BookingsContext } from "../../../../providers/bookings";
import { Booking } from "../../../../types";
import { BookingForm } from "../../shared/BookingForm";
import { BookingQuote } from "../../shared/BookingQuote";

type BookingEditorType = FC<{ booking: Booking }>;

export const BookingEditor: BookingEditorType = ({ booking }) => {
  const [draftBooking, setDraftBooking] = useState<Booking>(booking);
  const { updateBooking } = useContext(BookingsContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDraftBooking({
      ...draftBooking,
      [name]: value
    });
  };

  const handleDateChange = (update: [Date, Date]) => {
    const [checkIn, checkOut] = update;

    const checkInToString = checkIn.toISOString();
    const checkOutToString = checkOut.toISOString();

    setDraftBooking({
      ...draftBooking,
      checkIn: checkInToString,
      checkOut: checkOutToString
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateBooking(draftBooking);

    // TODO: show toaster confirming change
  };

  useEffect(() => {
    setDraftBooking(booking);
  }, [booking]);

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-6 border">
        <BookingForm
          booking={draftBooking}
          onChange={handleChange}
          onDateChange={handleDateChange}
          onSubmit={handleSubmit}
        />
      </div>

      <div className="col-span-6 border">
        <BookingQuote booking={draftBooking} />
      </div>
    </div>
  );
};
