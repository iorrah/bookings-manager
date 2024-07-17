import { FC, useContext, useEffect, useState } from "react";

import { Booking } from "../../../../types";

import { BookingForm } from "../../shared/BookingForm";
import { BookingQuote } from "../../shared/BookingQuote";
import { BookingsContext } from "../../../../providers/bookings";

type BookingCreatorType = FC<{ booking: Booking }>;

export const BookingCreator: BookingCreatorType = ({ booking }) => {
  const [draftBooking, setDraftBooking] = useState<Booking>(booking);
  const { updateBooking } = useContext(BookingsContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDraftBooking({
      ...draftBooking,
      [name]: value
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateBooking(draftBooking);
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
          onSubmit={handleSubmit}
        />
      </div>

      <div className="col-span-6 border">
        <BookingQuote booking={draftBooking} />
      </div>
    </div>
  );
};
