import { useContext, useState } from "react";

import { Booking } from "../../types";

import { EmptyState } from "./EmptyState";
import { BookingsList } from "./BookingsList";
import { BookingDetails } from "./BookingDetails";
import { BookingsContext } from "../../providers/bookings";

export const BookingsPage = () => {
  const [bookingId, setBookingId] = useState<number | null>(null);
  const { findBooking } = useContext(BookingsContext);
  const booking = bookingId ? findBooking(bookingId) : null;

  const closeBooking = () => {
    setBookingId(null);
  };

  const handleBookingClick = (selectedBookingId: number | null) => {
    if (selectedBookingId && selectedBookingId === bookingId) {
      closeBooking();
    } else {
      setBookingId(selectedBookingId);
    }
  };

  const handleCloseBooking = () => {
    closeBooking();
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
