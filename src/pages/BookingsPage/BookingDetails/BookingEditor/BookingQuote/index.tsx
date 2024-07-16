import { FC } from "react";

import { Booking } from "../../../../../types";

type BookingQuoteType = FC<{ booking: Booking }>;

export const BookingQuote: BookingQuoteType = ({ booking }) => {
  return (
    <>
      <div className="border-b p-2">Quote</div>

      <div className="flex justify-between p-2">
        <p>Property Rate</p>
        <p>$30 x 3 nights</p>
      </div>

      <div className="flex justify-between p-2">
        <p>Cleaning Fee</p>
        <p>$100</p>
      </div>

      <div className="flex justify-between p-2">
        <p>Total</p>
        <p>$400.00</p>
      </div>
    </>
  );
};
