import { FC, useContext } from "react";

import { BookingsContext } from "../../../providers/bookings";
import { formatStatus, fullDate } from "../../../utils";

type BookingsListType = FC<{
  selectedBookingId: number | null | undefined;
  onSelectBooking: (bookingId: number) => void;
  onCreateBooking: () => void;
}>;

export const BookingsList: BookingsListType = ({
  selectedBookingId,
  onSelectBooking,
  onCreateBooking
}) => {
  const { bookings } = useContext(BookingsContext);
  const ringSyle = "ring-2 ring-blue-600 ring-inset";

  return (
    <div>
      {bookings.map(booking => {
        const bookingRingStyle =
          selectedBookingId === booking.id ? ringSyle : "";

        return (
          <button
            className={`text-left block py-4 px-6 w-full mb-4 bg-white rounded-lg shadow-lg ${bookingRingStyle}`}
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
                  {Number(booking.adultsAmount) +
                    Number(booking.childrenAmount)}{" "}
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
        );
      })}

      <button
        className={`bg-slate-100 hover:bg-slate-200 px-5 py-4 text-sm leading-5 rounded-lg font-semibold text-blue-600 border border-slate-300 shadow-sm w-full ${
          selectedBookingId === 0 ? ringSyle : ""
        }`}
        onClick={onCreateBooking}
      >
        Create Booking
      </button>
    </div>
  );
};
