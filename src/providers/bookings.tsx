import React, { createContext, FC, useState } from "react";

import bookingsData from "../data/bookings.json";
import { Booking, Bookings } from "../types";

export const BookingsContext = createContext<{
  bookings: Bookings;
  updateBooking: (booking: Booking) => void;
  findBooking: (id: number) => Booking | null;
}>({
  bookings: [],
  updateBooking: () => {},
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

  const findBooking = (searchId: number) =>
    bookings.find(({ id }: Booking) => searchId === id) || null;

  return (
    <BookingsContext.Provider value={{ bookings, updateBooking, findBooking }}>
      {children}
    </BookingsContext.Provider>
  );
};
