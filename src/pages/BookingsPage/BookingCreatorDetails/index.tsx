import { FC } from "react";

import { Booking } from "../../../types";

import { BookingCreator } from "./BookingCreator";
import { BookingSelectField } from "./BookingSelectField";

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
    <div className="rounded-lg shadow-lg bg-white">
      <div className="flex justify-between border-b px-8 py-4 mb-2 bg-slate-100">
        <p>New Booking (not saved)</p>

        <button onClick={onDiscard}>Discard Booking</button>
      </div>

      <div className="p-8 pb-10">
        <div className="flex justify-between mb-6">
          {/* TODO: implement event handler */}
          <BookingSelectField
            defaultPropertyId={booking.propertyId}
            onchange={() => {}}
          />
        </div>

        <BookingCreator
          booking={booking}
          onResetBookingCreation={onResetBookingCreation}
        />
      </div>
    </div>
  );
};
