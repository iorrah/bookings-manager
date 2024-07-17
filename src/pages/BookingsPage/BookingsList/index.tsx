import { FC, useContext } from "react";

import { BookingsContext } from "../../../providers/bookings";
import { fullDate } from "../../../utils/date";

type BookingsListType = FC<{
  onSelectBooking: (bookingId: number) => void;
  onCreateBooking: () => void;
}>;

export const BookingsList: BookingsListType = ({
  onSelectBooking,
  onCreateBooking
}) => {
  const { bookings } = useContext(BookingsContext);

  return (
    <div>
      {bookings.map(booking => (
        <button
          className="text-left border block p-2 w-full mb-4"
          onClick={() => onSelectBooking(booking.id)}
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

      <button
        className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-sm font-semibold text-white"
        onClick={onCreateBooking}
      >
        Create Booking
      </button>
    </div>
  );
};
