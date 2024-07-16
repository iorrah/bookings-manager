import { useState } from "react";

import { Booking } from "../../types";

import { EmptyState } from "./EmptyState";
import { BookingsList } from "./BookingsList";
import { BookingDetails } from "./BookingDetails";

export const BookingsPage = () => {
  const [booking, setBooking] = useState<Booking | null>(null);

  const handleBookingClick = (updateBooking: Booking | null) => {
    if (updateBooking && updateBooking.id === booking?.id) {
      setBooking(null);
    } else {
      setBooking(updateBooking);
    }
  };

  const handleCloseBooking = () => {
    setBooking(null);
  };

  return (
    <main className="container mx-auto flex py-4 grid grid-cols-12 gap-4">
      <aside className="col-span-3">
        <BookingsList onClick={handleBookingClick} />
      </aside>

      <article className="col-span-9">
        {booking ? (
          <BookingDetails booking={booking} onClose={handleCloseBooking} />
        ) : (
          <EmptyState />
        )}
      </article>
    </main>
  );
};
