import React, { createContext, FC, useState } from "react";

import bookingsData from "../data/bookings.json";
import { Booking, Bookings } from "../types";

export const BookingsContext = createContext<{
  bookings: Bookings;
  updateBooking: (booking: Booking) => void;
  deleteBooking: (bookingId: number) => void;
  findBooking: (bookingId: number) => Booking | null;
}>({
  bookings: [],
  updateBooking: () => {},
  deleteBooking: () => {},
  findBooking: () => null
});

type BookingsContextProviderType = FC<{
  children: React.ReactNode;
}>;

export const BookingsContextProvider: BookingsContextProviderType = ({
  children
}) => {
  const [bookings, setBookings] = useState<Bookings>(bookingsData);

  const updateBooking = (updateBooking: Booking) => {
    const updatedBookings = bookings.map((booking: Booking) => {
      if (updateBooking.id === booking.id) {
        return updateBooking;
      }

      return booking;
    });

    setBookings(updatedBookings);
  };

  const deleteBooking = (bookingId: number) => {
    const updatedBookings = bookings.filter(
      (booking: Booking) => bookingId !== booking.id
    );

    setBookings(updatedBookings);
  };

  const findBooking = (bookingId: number) =>
    bookings.find(({ id }: Booking) => bookingId === id) || null;

  return (
    <BookingsContext.Provider
      value={{ bookings, updateBooking, deleteBooking, findBooking }}
    >
      {children}
    </BookingsContext.Provider>
  );
};
