import { FC } from "react";
import { Booking } from "../../../types";
import { fullDate } from "../../../utils/date";

type BookingDetailsType = FC<{ booking: Booking; onClose: () => void }>;

export const BookingDetails: BookingDetailsType = ({ booking, onClose }) => {
  return (
    <div className="border">
      <div className="flex justify-between border-b p-2 mb-8">
        <p>Booking Reference: #{booking.id}</p>

        <button onClick={onClose}>Close</button>
      </div>

      <div className="pt-2 px-2 pb-10">
        <div className="mb-6">
          <p>{booking.guestName}</p>
          <p>Status: {booking.status}</p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 border">
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
          </div>

          <div className="col-span-6 border">
            <div className="border-b p-2">Quote</div>

            <div className="flex justify-between p-2">
              <p>Property Rate</p>
              <p>$300</p>
            </div>

            <div className="flex justify-between p-2">
              <p>Cleaning Fee</p>
              <p>$100</p>
            </div>

            <div className="flex justify-between p-2">
              <p>Total</p>
              <p>$400.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
