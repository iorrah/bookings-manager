import { Bookings } from "../types";

export const getActiveBookings = (bookings: Bookings) =>
  bookings.filter(({ status }) => status === 1);
