import { BookingsList } from "./BookingsList";
import { BookingDetails } from "./BookingDetails";
import { useState } from "react";
import { Booking } from "../../types";

export const BookingsPage = () => {
  const [booking, setBooking] = useState<Booking | null>(null);

  const handleBookingClick = (booking: Booking | null) => {
    setBooking(booking);
  };

  return (
    <main className="container mx-auto flex py-4">
      <BookingsList onClick={handleBookingClick} />

      {booking ? <BookingDetails /> : <div>No Booking Selected</div>}
    </main>
  );
};
