import { FC, useContext, useEffect, useState } from "react";

import { BookingForm } from "../shared/BookingForm";
import { BookingQuote } from "../shared/BookingQuote";
import { BookingsContext } from "../../../providers/bookings";
import { Booking, Property } from "../../../types";

import { BookingSelectField } from "./BookingSelectField";
import { PropertiesContext } from "../../../providers/properties";

type BookingCreatorType = FC<{
  booking: Booking;
  onDiscard: () => void;
  onResetBookingCreation: () => void;
}>;

export const BookingCreator: BookingCreatorType = ({
  booking,
  onDiscard,
  onResetBookingCreation
}) => {
  const [draftBooking, setDraftBooking] = useState<Booking>(booking);
  const [property, setProperty] = useState<Property | null>(null);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const { createBooking } = useContext(BookingsContext);
  const { findProperty } = useContext(PropertiesContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;

    if (name === "adultsAmount" || name === "childrenAmount") {
      setDraftBooking({ ...draftBooking, [name]: parseInt(value, 10) || 0 });
      return;
    }

    setDraftBooking({ ...draftBooking, [name]: value });
  };

  const handleDateChange = (update: [Date, Date]) => {
    const [checkIn, checkOut] = update;

    const checkInToString = checkIn.toISOString();
    const checkOutToString = checkOut.toISOString();

    setDraftBooking({
      ...draftBooking,
      checkIn: checkInToString,
      checkOut: checkOutToString
    });
  };

  const handlePropertyChange = (propertyId: number) => {
    setDraftBooking({
      ...draftBooking,
      propertyId
    });
  };

  const validateBooking = (booking: Booking) => {
    let messages = [];

    if (booking.adultsAmount < 1) {
      messages.push("Invalid adults amount");
    }

    if ((booking.childrenAmount || 0) < 0) {
      messages.push("Invalid children amount");
    }

    if (
      property &&
      booking.adultsAmount + (booking.childrenAmount || 0) >
        property?.guestsLimit
    ) {
      messages.push(
        `The guest limit for this property is ${property?.guestsLimit} people`
      );
    }

    return messages;
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationMessages = validateBooking(draftBooking);

    if (validationMessages.length === 0) {
      createBooking(draftBooking);
      setErrorMessages([]);
      onResetBookingCreation();
    } else {
      setErrorMessages(validationMessages);
    }
  };

  useEffect(() => {
    setDraftBooking(booking);
  }, [booking]);

  useEffect(() => {
    setProperty(findProperty(draftBooking.propertyId));
  }, [draftBooking]);

  return (
    <div className="rounded-lg shadow-lg bg-white">
      <div className="flex justify-between border-b px-8 py-4 mb-2 bg-slate-100">
        <p>New Booking (not saved)</p>
        <button onClick={onDiscard}>Discard Booking</button>
      </div>

      <div className="p-8 pb-10">
        <div className="flex justify-between mb-2">
          <BookingSelectField
            defaultPropertyId={booking.propertyId}
            onchange={handlePropertyChange}
          />
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Max:{" "}
          {property?.guestsLimit
            ? `${property?.guestsLimit} people`
            : "(property not yet selected)"}
        </p>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 border rounded-md">
            <BookingForm
              booking={draftBooking}
              errorMessages={errorMessages}
              onChange={handleChange}
              onDateChange={handleDateChange}
              onSubmit={handleSubmit}
            />
          </div>

          <div className="col-span-6 border rounded-md">
            <BookingQuote booking={draftBooking} />
          </div>
        </div>
      </div>
    </div>
  );
};
