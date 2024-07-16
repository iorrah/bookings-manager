import { useContext, useEffect, useState } from "react";

import { EmptyState } from "./EmptyState";
import { BookingsList } from "./BookingsList";
import { BookingDetails } from "./BookingDetails";
import { BookingsContext } from "../../providers/bookings";
import { Booking } from "../../types";

export const BookingsPage = () => {
  const [bookingId, setBookingId] = useState<number | null>(null);
  const [booking, setBooking] = useState<Booking | null>(null);
  const { bookings, findBooking, deleteBooking } = useContext(BookingsContext);

  const closeBooking = () => {
    setBookingId(null);
  };

  const handleBookingSelection = (selectedBookingId: number | null) => {
    if (selectedBookingId && selectedBookingId === bookingId) {
      closeBooking();
    } else {
      setBookingId(selectedBookingId);
    }
  };

  const handleNextBooking = (bookingId: number) => {
    if (bookings.length === 1) {
      setBookingId(null);
      deleteBooking(bookingId);
      return;
    }

    let deletionIndex = 0;

    bookings.forEach((booking, i) => {
      if (booking.id === bookingId) {
        deletionIndex = i;
      }
    });

    if (bookings[deletionIndex + 1]) {
      setBookingId(bookings[deletionIndex + 1].id);
    } else if (bookings[0]) {
      setBookingId(bookings[0].id);
    }

    deleteBooking(bookingId);
  };

  const handleCloseBooking = () => {
    closeBooking();
  };

  useEffect(() => {
    if (bookingId) {
      setBooking(findBooking(bookingId));
    } else {
      setBooking(null);
    }
  }, [bookingId]);

  return (
    <main className="container mx-auto flex py-4 grid grid-cols-12 gap-4">
      <aside className="col-span-3">
        <BookingsList onClick={handleBookingSelection} />
      </aside>

      <article className="col-span-9">
        {booking ? (
          <BookingDetails
            booking={booking}
            onClose={handleCloseBooking}
            onDelete={handleNextBooking}
          />
        ) : (
          <EmptyState />
        )}
      </article>
    </main>
  );
};
