import { FC } from "react";

// TODO: use absolute paths
import { Booking } from "../../../../types";
import { DatePickerRange } from "../../../../components/DatePickerRange";
import Pen from "../../../../assets/pen.svg";

import { BookingField } from "./BookingField";

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
  const isCreating = booking.id === 0;

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
        type="email"
        visible={isCreating}
      />
      <BookingField
        id={booking.id}
        title="Phone"
        field="guestPhoneNumber"
        value={booking.guestPhoneNumber}
        onChange={onChange}
        required
        type="tel"
        visible={isCreating}
      />
      <div className="flex justify-between p-2">
        <p>Check in/out</p>

        <div className="flex cursor-pointer gap-2">
          <div className="border border-slate-300">
            <DatePickerRange
              startDate={new Date(booking.checkIn)}
              endDate={new Date(booking.checkOut)}
              onChange={onDateChange}
            />
          </div>

          <img
            src={Pen}
            alt="Edit check in and check out"
            title="Edit check in and check out"
            className="w-3"
          />
        </div>
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

      {/* TODO: implement discard functionality */}

      <div className="flex justify-center px-2 py-8 gap-3">
        {isCreating ? null : (
          <button
            type="submit"
            className="bg-white hover:bg-slate-50 px-5 py-2.5 text-sm leading-5 rounded-sm font-semibold text-neutral-500 border border-slate-300"
          >
            Discard Changes
          </button>
        )}

        {/* TODO: create button components */}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 text-sm leading-5 rounded-sm font-semibold text-white border"
        >
          {isCreating ? "Save Booking" : "Save Changes"}
        </button>
      </div>
    </form>
  );
};
