import { FC, useContext } from "react";

import { BookingsContext } from "../../../providers/bookings";
import { formatStatus, fullDate } from "../../../utils";

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
          className="text-left border block py-4 px-6 w-full mb-4 bg-white"
          onClick={() => onSelectBooking(booking.id)}
          key={booking.id}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">{booking.guestName}</p>

              <p className="text-sm">
                {fullDate(booking.checkIn)} - {fullDate(booking.checkOut)}
              </p>

              <p className="text-slate-500 text-sm">
                {Number(booking.adultsAmount) + Number(booking.childrenAmount)}{" "}
                guests
              </p>
            </div>

            <div className="mt-1 flex items-center gap-x-1.5">
              {booking.status === 1 ? (
                <>
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                  </div>

                  <p className="text-xs leading-5 text-gray-500">
                    {formatStatus(booking.status)}
                  </p>
                </>
              ) : null}
            </div>
          </div>
        </button>
      ))}

      <button
        className="bg-white hover:bg-slate-50 px-5 py-2.5 text-sm leading-5 rounded-sm font-semibold text-blue-600 border border-slate-300 w-full"
        onClick={onCreateBooking}
      >
        Create Booking
      </button>
    </div>
  );
};
