import { FC } from "react";

import { Booking } from "../../../../types";

import { BookingForm } from "./BookingForm";
import { BookingQuote } from "./BookingQuote";

type BookingEditorType = FC<{ booking: Booking }>;

export const BookingEditor: BookingEditorType = ({ booking }) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-6 border">
        <BookingForm booking={booking} />
      </div>

      <div className="col-span-6 border">
        <BookingQuote booking={booking} />
      </div>
    </div>
  );
};
