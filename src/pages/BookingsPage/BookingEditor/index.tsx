import { FC, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { BookingsContext } from "../../../providers/bookings";
import { BookingForm } from "../shared/BookingForm";
import { BookingQuote } from "../shared/BookingQuote";
import { Booking } from "../../../types";
import { PropertiesContext } from "../../../providers/properties";
import { fullDate, validateBooking } from "../../../utils";
import Close from "../../../assets/close.svg";

type BookingEditorType = FC<{
  booking: Booking;
  onClose: () => void;
  onDelete: (bookingId: number) => void;
}>;

export const BookingEditor: BookingEditorType = ({
  booking,
  onClose,
  onDelete
}) => {
  const [draftBooking, setDraftBooking] = useState<Booking>(booking);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const { updateBooking } = useContext(BookingsContext);
  const { findProperty } = useContext(PropertiesContext);
  const property = findProperty(booking.propertyId);

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

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationMessages = validateBooking(draftBooking, property);

    if (validationMessages.length === 0) {
      updateBooking(draftBooking);
      setErrorMessages([]);
      toast.success("Booking saved!");
    } else {
      toast.error("Booking not saved.");
      setErrorMessages(validationMessages);
    }
  };

  useEffect(() => {
    setDraftBooking(booking);
  }, [booking]);

  return (
    <div className="rounded-lg sm:shadow-lg bg-white">
      <div className="flex justify-between border-b pb-6 sm:py-4 sm:px-8 sm:py-4 mb-2 sm:bg-slate-100">
        <p className="text-sm sm:text-base">
          Booking Reference:{" "}
          <span className="text-slate-700 text-sm	">#{booking.id}</span>
        </p>

        <button className="text-sm" onClick={onClose}>
          <img
            src={Close}
            alt="Close Booking"
            title="Close Booking"
            className="w-4"
          />
        </button>
      </div>

      <div className="p-0 py-3 pb-6 sm:p-8 sm:pb-10">
        <div className="flex justify-between lg:items-center flex-col lg:flex-row mb-6">
          <div className="mb-6 lg:mb-0">
            <p className="text-lg	font-semibold">{booking.guestName}</p>

            <p>
              {property?.title} (max {property?.guestsLimit} guests){" "}
              <span className="text-gray-500 text-sm">#{property?.id}</span>
            </p>

            <p className="text-gray-500 text-sm">
              Booked on {fullDate(booking.createdAt)}
            </p>
          </div>

          <button
            type="submit"
            className="bg-slate-100 hover:bg-slate-200 px-5 py-2.5 text-sm leading-5 rounded-sm font-semibold text-rose-700 border border-slate-300 shadow-sm"
            onClick={() => onDelete(booking.id)}
          >
            Delete Booking
          </button>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6 border">
            <BookingForm
              booking={draftBooking}
              errorMessages={errorMessages}
              onChange={handleChange}
              onDateChange={handleDateChange}
              onSubmit={handleSubmit}
            />
          </div>

          <div className="col-span-12 lg:col-span-6 border">
            <BookingQuote booking={draftBooking} />
          </div>
        </div>
      </div>
    </div>
  );
};
