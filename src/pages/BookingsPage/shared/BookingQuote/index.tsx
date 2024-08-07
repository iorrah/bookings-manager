import { FC, useContext } from "react";

import { Booking } from "../../../../types";
import { PropertiesContext } from "../../../../providers/properties";
import { differenceInDays } from "date-fns";

type BookingQuoteType = FC<{ booking: Booking }>;

export const BookingQuote: BookingQuoteType = ({ booking }) => {
  // Data sources
  const { findProperty } = useContext(PropertiesContext);
  const property = findProperty(booking.propertyId);

  // Booking Data
  const checkIn = new Date(booking.checkIn);
  const checkOut = new Date(booking.checkOut);
  const bookingDaysQuantity = differenceInDays(checkOut, checkIn);

  // Calculating Booking Price
  const pricePerNight = property?.pricePerNight || 0;
  const pricePerBooking = pricePerNight * bookingDaysQuantity;
  const cleaningFee = property?.cleaningFee || 0;
  const total = pricePerBooking + cleaningFee;

  // Data format for presentation
  const { format } = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  return (
    <>
      <div className="border-b p-2 font-semibold">Quote</div>

      <div className="flex justify-between p-2">
        <p>
          Property Rate
          <span className="block text-gray-500 text-xs">
            Price per Night: {format(pricePerNight)} x {bookingDaysQuantity} Day
            {bookingDaysQuantity > 1 ? "s" : ""}
          </span>
        </p>

        <p>{format(pricePerBooking)}</p>
      </div>

      <div className="flex justify-between p-2">
        <p>
          Cleaning Fee
          <span className="block text-gray-500 text-xs">
            Fixed Rate per Property
          </span>
        </p>
        <p>{format(cleaningFee)}</p>
      </div>

      <div className="flex justify-between p-2 mt-10">
        <p className="font-semibold">
          Total
          <span className="block text-gray-500 text-xs font-normal">
            The total price includes VAT
          </span>
        </p>
        <p className="font-semibold">{format(total)}</p>
      </div>
    </>
  );
};
