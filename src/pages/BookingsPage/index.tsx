import { useContext, useEffect, useState } from "react";

import { BookingsContext } from "../../providers/bookings";
import { Booking } from "../../types";

import { EmptyState } from "./EmptyState";
import { BookingsList } from "./BookingsList";
import { BookingEditor } from "./BookingEditor";
import { BookingCreator } from "./BookingCreator";

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
    <div className="container mx-auto flex py-10 grid grid-cols-12 gap-4">
      {/* TODO: present list and page in separate states on Mobile Viewport  */}

      <aside className="col-span-3">
        <BookingsList
          selectedBookingId={bookingId || newBooking?.id}
          onSelectBooking={handleBookingSelection}
          onCreateBooking={handleStartBookingCreation}
        />
      </aside>

      <article className="col-span-9">
        {newBooking ? (
          <BookingCreator
            booking={newBooking}
            onDiscard={handleDiscard}
            onResetBookingCreation={handleBookingCreationReset}
          />
        ) : null}

        {!newBooking && existingBooking ? (
          <BookingEditor
            booking={existingBooking}
            onClose={handleCloseBooking}
            onDelete={handleNextBooking}
          />
        ) : null}

        {!newBooking && !existingBooking ? <EmptyState /> : null}
      </article>
    </div>
  );
};
