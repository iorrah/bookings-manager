import { FC, useContext, useEffect, useState } from "react";

import { Booking } from "../../../../types";

import { BookingForm } from "./BookingForm";
import { BookingQuote } from "./BookingQuote";
import { BookingsContext } from "../../../../providers/bookings";

type BookingEditorType = FC<{ booking: Booking }>;

export const BookingEditor: BookingEditorType = ({ booking }) => {
  const [editorBooking, setEditorBooking] = useState<Booking>(booking);
  const { updateBooking } = useContext(BookingsContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setEditorBooking({
      ...editorBooking,
      [name]: value
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateBooking(editorBooking);
  };

  useEffect(() => {
    setEditorBooking(booking);
  }, [booking]);

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-6 border">
        <BookingForm
          editorBooking={editorBooking}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>

      <div className="col-span-6 border">
        <BookingQuote booking={editorBooking} />
      </div>
    </div>
  );
};
