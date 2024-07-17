import { FC } from "react";

// TODO: use absolute paths
import { Booking } from "../../../../types";
import { fullDate } from "../../../../utils/date";

import { BookingField } from "./BookingField";

type BookingForm = FC<{
  booking: Booking;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
}>;

export const BookingForm: BookingForm = ({ booking, onChange, onSubmit }) => {
  const isCreating = booking.id === 0;

  return (
    <form onSubmit={onSubmit}>
      <div className="border-b p-2">Booking Details</div>

      <BookingField
        id={booking.id}
        title="Name"
        field="guestName"
        value={booking.guestName}
        onChange={onChange}
        required
        visible={isCreating}
        autoFocus
      />

      <BookingField
        id={booking.id}
        title="Email"
        field="guestEmail"
        value={booking.guestEmail}
        onChange={onChange}
        required
        visible={isCreating}
      />

      <BookingField
        id={booking.id}
        title="Phone"
        field="guestPhoneNumber"
        value={booking.guestPhoneNumber}
        onChange={onChange}
        required
        visible={isCreating}
      />

      <div className="flex justify-between p-2">
        <p>Check in/out</p>
        <p>
          {fullDate(booking.checkIn)} - {fullDate(booking.checkOut)}
        </p>
      </div>

      <BookingField
        id={booking.id}
        title="Adults Quantity"
        field="adultsAmount"
        value={String(booking.adultsAmount)}
        onChange={onChange}
        required
        type="number"
        visible={isCreating}
      />

      <BookingField
        id={booking.id}
        title="Children Quantity"
        field="childrenAmount"
        value={String(booking.childrenAmount)}
        onChange={onChange}
        type="number"
        visible={isCreating}
      />

      <BookingField
        id={booking.id}
        title="Note"
        field="note"
        value={booking.note}
        onChange={onChange}
        visible={isCreating}
      />

      <div className="flex justify-between px-2 py-8">
        {isCreating ? null : (
          <button
            type="submit"
            className="bg-white px-5 py-2.5 text-sm leading-5 rounded-sm font-semibold text-rose-700 border"
          >
            Discard Changes
          </button>
        )}

        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-sm font-semibold text-white"
        >
          {isCreating ? "Submit" : "Save Changes"}
        </button>
      </div>
    </form>
  );
};