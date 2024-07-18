import { FC, useContext, useEffect, useState } from "react";

import { Booking } from "../../../../types";
import { BookingForm } from "../../shared/BookingForm";
import { BookingQuote } from "../../shared/BookingQuote";
import { BookingsContext } from "../../../../providers/bookings";

type BookingCreatorType = FC<{
  booking: Booking;
  onResetBookingCreation: () => void;
}>;

export const BookingCreator: BookingCreatorType = ({
  booking,
  onResetBookingCreation
}) => {
  const [draftBooking, setDraftBooking] = useState<Booking>(booking);
  const { createBooking } = useContext(BookingsContext);

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
    createBooking(draftBooking);
    onResetBookingCreation();
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
