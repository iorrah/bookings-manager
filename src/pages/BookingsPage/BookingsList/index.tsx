import { FC, useContext } from "react";

import { BookingsContext } from "../../../providers/bookings";
import { fullDate } from "../../../utils/date";
import { Booking } from "../../../types";

type BookingsListType = FC<{
  onClick: (booking: Booking) => void;
}>;

export const BookingsList: BookingsListType = ({ onClick }) => {
  const bookings = useContext(BookingsContext);

  return (
    <>
      {bookings.map(booking => (
        <button
          className="text-left border block p-2 w-full mb-4"
          onClick={() => onClick(booking)}
          key={booking.id}
        >
          <p>{booking.guestName}</p>

          <p>
            {fullDate(booking.checkIn)} - {fullDate(booking.checkOut)}
          </p>

          <p>Status: {booking.status}</p>

          <p>Quantity: {booking.adultsAmount + booking.childrenAmount}</p>
        </button>
      ))}
    </>
  );
};
