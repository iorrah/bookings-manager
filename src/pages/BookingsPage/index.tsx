import { useContext, useEffect, useState } from "react";

import { BookingsContext } from "../../providers/bookings";
import { Booking } from "../../types";

import { EmptyState } from "./EmptyState";
import { BookingsList } from "./BookingsList";
import { BookingDetails } from "./BookingDetails";
import { BookingCreatorDetails } from "./BookingCreatorDetails";

export const BookingsPage = () => {
  const [bookingId, setBookingId] = useState<number | null>(null);
  const [booking, setBooking] = useState<Booking | null>(null);
  const [creatingBooking, setCreatingBooking] = useState<Booking | null>(null);

  const { bookings, findBooking, deleteBooking } = useContext(BookingsContext);

  const closeBooking = () => {
    setBookingId(null);
  };

  const handleBookingSelection = (selectedBookingId: number | null) => {
    if (selectedBookingId && selectedBookingId === bookingId) {
      closeBooking();
    } else {
      setBookingId(selectedBookingId);
      setCreatingBooking(null);
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

  const handleCreateBooking = () => {
    closeBooking();

    let date = new Date();
    date.setDate(date.getDate() + 1);

    setCreatingBooking({
      id: 0,
      propertyId: 0,
      checkIn: new Date().toISOString(),
      checkOut: date.toISOString(),
      adultsAmount: 2,
      childrenAmount: 0,
      note: "",
      guestName: "",
      guestEmail: "",
      guestPhoneNumber: "",
      status: 1
    });
  };

  const handleDiscard = () => {
    setCreatingBooking(null);
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
        <BookingsList
          onSelectBooking={handleBookingSelection}
          onCreateBooking={handleCreateBooking}
        />
      </aside>

      <article className="col-span-9">
        {creatingBooking ? (
          <BookingCreatorDetails
            booking={creatingBooking}
            onDiscard={handleDiscard}
          />
        ) : null}

        {!creatingBooking && booking ? (
          <BookingDetails
            booking={booking}
            onClose={handleCloseBooking}
            onDelete={handleNextBooking}
          />
        ) : null}

        {!creatingBooking && !booking ? <EmptyState /> : null}
      </article>
    </main>
  );
};
