import { FC } from "react";

import { Booking } from "../../../types";

import { BookingEditor } from "./BookingEditor";

type BookingDetailsType = FC<{
  booking: Booking;
  onClose: () => void;
  onDelete: (bookingId: number) => void;
}>;

// TODO: this component might not be necesary

export const BookingDetails: BookingDetailsType = ({
  booking,
  onClose,
  onDelete
}) => {
  return (
    <div className="border">
      <div className="flex justify-between border-b p-2 mb-8">
        <p>Booking Reference: #{booking.id}</p>

        <button onClick={onClose}>Close</button>
      </div>

      <div className="pt-2 px-2 pb-10">
        <div className="flex justify-between mb-6">
          <div>
            <p>{booking.guestName}</p>
            <p>Status: {booking.status}</p>
            <p>Property Name: ______</p>
          </div>

          <div className="flex">
            <button
              type="submit"
              className="bg-white px-5 py-2.5 text-sm leading-5 rounded-sm font-semibold text-rose-700 border"
              onClick={() => onDelete(booking.id)}
            >
              Delete Booking
            </button>
          </div>
        </div>

        <BookingEditor booking={booking} />
      </div>
    </div>
  );
};
