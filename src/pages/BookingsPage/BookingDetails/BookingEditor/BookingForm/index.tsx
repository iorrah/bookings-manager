import { FC } from "react";
import { Booking } from "../../../../../types";
import { fullDate } from "../../../../../utils/date";

type BookingForm = FC<{ booking: Booking }>;

export const BookingForm: BookingForm = ({ booking }) => {
  return (
    <>
      <div className="border-b p-2">Booking Details</div>

      <div className="flex justify-between p-2">
        <p>Name</p>
        <p>{booking.guestName}</p>
      </div>

      <div className="flex justify-between p-2">
        <p>Email</p>
        <p>{booking.guestEmail}</p>
      </div>

      <div className="flex justify-between p-2">
        <p>Phone</p>
        <p>{booking.guestPhoneNumber}</p>
      </div>

      <div className="flex justify-between p-2">
        <p>Check in/out</p>
        <p>
          {fullDate(booking.checkIn)} - {fullDate(booking.checkOut)}
        </p>
      </div>

      <div className="flex justify-between p-2">
        <p>Adults</p>
        <p>{booking.adultsAmount}x</p>
      </div>

      <div className="flex justify-between p-2">
        <p>Children</p>
        <p>{booking.childrenAmount}x</p>
      </div>

      <div className="flex justify-between p-2">
        <p>Note</p>
        <p>{booking.note}</p>
      </div>
    </>
  );
};
