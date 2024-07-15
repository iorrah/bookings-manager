import { useContext } from "react";
import { BookingsContext } from "../../../providers/bookings";

export const BookingsList = () => {
  const bookings = useContext(BookingsContext);

  return <aside>Side Bar ({bookings.length})</aside>;
};
