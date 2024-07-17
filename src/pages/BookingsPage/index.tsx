import { useContext, useEffect, useState } from "react";

import { BookingsContext } from "../../providers/bookings";
import { Booking } from "../../types";

import { EmptyState } from "./EmptyState";
import { BookingsList } from "./BookingsList";
import { BookingDetails } from "./BookingDetails";
import { BookingCreatorDetails } from "./BookingCreatorDetails";

export const BookingsPage = () => {
  const [bookingId, setBookingId] = useState<number | null>(null);
  const [existingBooking, setExistingBooking] = useState<Booking | null>(null);
  const [newBooking, setNewBooking] = useState<Booking | null>(null);

  const { bookings, findBooking, deleteBooking } = useContext(BookingsContext);

  const closeBooking = () => {
    setBookingId(null);
  };

  const handleBookingSelection = (selectedBookingId: number | null) => {
    if (selectedBookingId && selectedBookingId === bookingId) {
      closeBooking();
    } else {
      setBookingId(selectedBookingId);
      setNewBooking(null);
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

  const resetBookingCreation = () => {
    let date = new Date();
    date.setDate(date.getDate() + 1);

    setNewBooking({
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

  const handleStartBookingCreation = () => {
    closeBooking();
    resetBookingCreation();
  };

  const handleBookingCreationReset = () => {
    resetBookingCreation();
  };

  const handleDiscard = () => {
    setNewBooking(null);
  };

  useEffect(() => {
    if (bookingId) {
      setExistingBooking(findBooking(bookingId));
    } else {
      setExistingBooking(null);
    }
  }, [bookingId, bookings]);

  return (
    <main className="container mx-auto flex py-10 grid grid-cols-12 gap-4">
      <aside className="col-span-3">
        <BookingsList
          onSelectBooking={handleBookingSelection}
          onCreateBooking={handleStartBookingCreation}
        />
      </aside>

      <article className="col-span-9">
        {newBooking ? (
          <BookingCreatorDetails
            booking={newBooking}
            onDiscard={handleDiscard}
            onResetBookingCreation={handleBookingCreationReset}
          />
        ) : null}

        {!newBooking && existingBooking ? (
          <BookingDetails
            booking={existingBooking}
            onClose={handleCloseBooking}
            onDelete={handleNextBooking}
          />
        ) : null}

        {!newBooking && !existingBooking ? <EmptyState /> : null}
      </article>
    </main>
  );
};
