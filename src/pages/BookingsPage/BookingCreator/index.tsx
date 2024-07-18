import { FC, useContext, useEffect, useState } from "react";

import { BookingForm } from "../shared/BookingForm";
import { BookingQuote } from "../shared/BookingQuote";
import { BookingsContext } from "../../../providers/bookings";
import { Booking } from "../../../types";

import { BookingSelectField } from "./BookingSelectField";

type BookingCreatorType = FC<{
  booking: Booking;
  onDiscard: () => void;
  onResetBookingCreation: () => void;
}>;

export const BookingCreator: BookingCreatorType = ({
  booking,
  onDiscard,
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

  const handlePropertyChange = (propertyId: number) => {
    setDraftBooking({
      ...draftBooking,
      propertyId
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
    <div className="rounded-lg shadow-lg bg-white">
      <div className="flex justify-between border-b px-8 py-4 mb-2 bg-slate-100">
        <p>New Booking (not saved)</p>

        <button onClick={onDiscard}>Discard Booking</button>
      </div>

      <div className="p-8 pb-10">
        <div className="flex justify-between mb-6">
          <BookingSelectField
            defaultPropertyId={booking.propertyId}
            onchange={handlePropertyChange}
          />
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 border rounded-md">
            <BookingForm
              booking={draftBooking}
              onChange={handleChange}
              onDateChange={handleDateChange}
              onSubmit={handleSubmit}
            />
          </div>

          <div className="col-span-6 border rounded-md">
            <BookingQuote booking={draftBooking} />
          </div>
        </div>
      </div>
    </div>
  );
};
