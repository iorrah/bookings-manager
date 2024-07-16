import { FC, useEffect, useState } from "react";

import { Booking } from "../../../types";

import { BookingEditor } from "./BookingEditor";

type BookingDetailsType = FC<{ booking: Booking; onClose: () => void }>;

export const BookingDetails: BookingDetailsType = ({ booking, onClose }) => {
  const [guestName, setGuestName] = useState(booking.guestName);

  useEffect(() => {
    setGuestName(booking.guestName);
  }, [booking]);

  return (
    <div className="border">
      <div className="flex justify-between border-b p-2 mb-8">
        <p>Booking Reference: #{booking.id}</p>

        <button onClick={onClose}>Close</button>
      </div>

      <div className="pt-2 px-2 pb-10">
        <div className="mb-6">
          <p>{guestName}</p>
          <p>Status: {booking.status}</p>
        </div>

        <BookingEditor booking={booking} />
      </div>
    </div>
  );
};
