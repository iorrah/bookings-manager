import { FC, useContext } from "react";

import { Booking } from "../../../types";

import { BookingEditor } from "./BookingEditor";
import { PropertiesContext } from "../../../providers/properties";

type BookingDetailsType = FC<{
  booking: Booking;
  onClose: () => void;
  onDelete: (bookingId: number) => void;
}>;

// TODO: this component might not be necesary

export const BookingDetails: BookingDetailsType = ({
  booking,
  onClose,
  onDelete
}) => {
  const { findProperty } = useContext(PropertiesContext);
  const property = findProperty(booking.propertyId);

  return (
    <div className="border">
      <div className="flex justify-between border-b p-2 mb-8">
        <p>
          Booking Reference:{" "}
          <span className="text-slate-700 text-sm	">#{booking.id}</span>
        </p>

        <button onClick={onClose}>Close</button>
      </div>

      <div className="pt-2 px-2 pb-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-lg	font-semibold">{booking.guestName}</p>

            <p>
              {property?.title}{" "}
              <span className="text-slate-700 text-sm	">#{property?.id}</span>
            </p>
          </div>

          <button
            type="submit"
            className="bg-white hover:bg-slate-50 px-5 py-2.5 text-sm leading-5 rounded-sm font-semibold text-rose-700 border border-slate-300"
            onClick={() => onDelete(booking.id)}
          >
            Delete Booking
          </button>
        </div>

        <BookingEditor booking={booking} />
      </div>
    </div>
  );
};
