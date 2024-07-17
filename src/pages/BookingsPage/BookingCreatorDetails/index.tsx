import { FC } from "react";

import { Booking } from "../../../types";

import { BookingCreator } from "./BookingCreator";

type BookingCreatorDetailsType = FC<{
  booking: Booking;
  onDiscard: () => void;
  onResetBookingCreation: () => void;
}>;

export const BookingCreatorDetails: BookingCreatorDetailsType = ({
  booking,
  onDiscard,
  onResetBookingCreation
}) => {
  return (
    <div className="border">
      <div className="flex justify-between border-b p-2 mb-8">
        <p>New Booking (not saved)</p>

        <button onClick={onDiscard}>Discard Booking</button>
      </div>

      <div className="pt-2 px-2 pb-10">
        <div className="flex justify-between mb-6">
          <div>
            <p>Property Name: (select dropdown)</p>
          </div>

          <div className="flex">
            <p>Status: {booking.status}</p>
          </div>
        </div>

        <BookingCreator
          booking={booking}
          onResetBookingCreation={onResetBookingCreation}
        />
      </div>
    </div>
  );
};
