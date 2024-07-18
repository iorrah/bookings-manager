import { FC, useContext, useEffect, useState } from "react";

import { BookingsContext } from "../../../providers/bookings";
import { BookingForm } from "../shared/BookingForm";
import { BookingQuote } from "../shared/BookingQuote";
import { Booking } from "../../../types";
import { PropertiesContext } from "../../../providers/properties";

type BookingEditorType = FC<{
  booking: Booking;
  onClose: () => void;
  onDelete: (bookingId: number) => void;
}>;

export const BookingEditor: BookingEditorType = ({
  booking,
  onClose,
  onDelete
}) => {
  const { findProperty } = useContext(PropertiesContext);
  const property = findProperty(booking.propertyId);

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
    <div className="rounded-lg shadow-lg bg-white">
      <div className="flex justify-between border-b px-8 py-4 mb-2 bg-slate-100">
        <p>
          Booking Reference:{" "}
          <span className="text-slate-700 text-sm	">#{booking.id}</span>
        </p>

        <button onClick={onClose}>Close</button>
      </div>

      <div className="p-8 pb-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-lg	font-semibold">{booking.guestName}</p>

            <p>
              {property?.title}{" "}
              <span className="text-slate-700 text-sm	">#{property?.id}</span>
            </p>
          </div>

          <button
            type="submit"
            className="bg-slate-100 hover:bg-slate-200 px-5 py-2.5 text-sm leading-5 rounded-sm font-semibold text-rose-700 border border-slate-300 shadow-sm"
            onClick={() => onDelete(booking.id)}
          >
            Delete Booking
          </button>
        </div>

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
      </div>
    </div>
  );
};
