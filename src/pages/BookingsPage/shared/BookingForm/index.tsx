import { FC } from "react";

// TODO: use absolute paths
import { Booking } from "../../../../types";

import { BookingField } from "./BookingField";
import { BookingDateField } from "./BookingDateField";
import { isCreating } from "../../../../utils";

type BookingForm = FC<{
  booking: Booking;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDateChange: (update: [Date, Date]) => void;
  onSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
}>;

export const BookingForm: BookingForm = ({
  booking,
  onChange,
  onDateChange,
  onSubmit
}) => {
  const creating = isCreating(booking.status);

  return (
    <form onSubmit={onSubmit}>
      <div className="border-b p-2 font-semibold">Booking Details</div>
      <BookingField
        id={booking.id}
        title="Name"
        field="guestName"
        value={booking.guestName}
        onChange={onChange}
        required
        visible={creating}
      />
      <BookingField
        id={booking.id}
        title="Email"
        field="guestEmail"
        value={booking.guestEmail}
        onChange={onChange}
        required
        type="email"
        visible={creating}
      />
      <BookingField
        id={booking.id}
        title="Phone"
        field="guestPhoneNumber"
        value={booking.guestPhoneNumber}
        onChange={onChange}
        required
        type="tel"
        visible={creating}
      />

      <BookingDateField booking={booking} onChange={onDateChange} />

      <BookingField
        id={booking.id}
        title="Adults Quantity"
        field="adultsAmount"
        value={String(booking.adultsAmount)}
        onChange={onChange}
        required
        type="number"
        visible={creating}
      />
      <BookingField
        id={booking.id}
        title="Children Quantity"
        field="childrenAmount"
        value={String(booking.childrenAmount)}
        onChange={onChange}
        type="number"
        visible={creating}
      />
      <BookingField
        id={booking.id}
        title="Note"
        field="note"
        value={booking.note}
        onChange={onChange}
        visible={creating}
      />

      <div className="flex justify-center px-2 py-8 gap-3">
        {/* TODO: create button components */}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 text-sm leading-5 rounded-sm font-semibold text-white shadow-sm"
        >
          {creating ? "Save Booking" : "Save Changes"}
        </button>
      </div>
    </form>
  );
};
