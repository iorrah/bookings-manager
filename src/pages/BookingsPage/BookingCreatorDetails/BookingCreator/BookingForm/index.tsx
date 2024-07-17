import { FC } from "react";

import { Booking } from "../../../../../types";
import { fullDate } from "../../../../../utils/date";

import { BookingField } from "./BookingField";

type BookingForm = FC<{
  editorBooking: Booking;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
}>;

export const BookingForm: BookingForm = ({
  editorBooking,
  onChange,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="border-b p-2">Booking Details</div>

      <BookingField
        id={editorBooking.id}
        title="Name"
        field="guestName"
        value={editorBooking.guestName}
        onChange={onChange}
        required
      />

      <BookingField
        id={editorBooking.id}
        title="Email"
        field="guestEmail"
        value={editorBooking.guestEmail}
        onChange={onChange}
        required
      />

      <BookingField
        id={editorBooking.id}
        title="Phone"
        field="guestPhoneNumber"
        value={editorBooking.guestPhoneNumber}
        onChange={onChange}
        required
      />

      <div className="flex justify-between p-2">
        <p>Check in/out</p>
        <p>
          {fullDate(editorBooking.checkIn)} - {fullDate(editorBooking.checkOut)}
        </p>
      </div>

      <BookingField
        id={editorBooking.id}
        title="Adults"
        field="adultsAmount"
        value={String(editorBooking.adultsAmount)}
        onChange={onChange}
        required
        type="number"
      />

      <BookingField
        id={editorBooking.id}
        title="Children"
        field="childrenAmount"
        value={String(editorBooking.childrenAmount)}
        onChange={onChange}
        type="number"
      />

      <BookingField
        id={editorBooking.id}
        title="Note"
        field="note"
        value={editorBooking.note}
        onChange={onChange}
      />

      <div className="flex justify-between px-2 py-8">
        <button
          type="submit"
          className="bg-white px-5 py-2.5 text-sm leading-5 rounded-sm font-semibold text-rose-700 border"
        >
          Discard Changes
        </button>

        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-sm font-semibold text-white"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};
