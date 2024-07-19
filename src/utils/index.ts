import { format } from "date-fns";

import { Booking, Property } from "../types";
import { statusName } from "../constants";

export const fullDate = (date: string) => format(new Date(date), "E, d MMM yy");

export const formatStatus = (status: number) => statusName[status];

export const isCreating = (status: number) => status === 0;

export const validateBooking = (
  booking: Booking,
  property: Property | null
) => {
  let messages = [];

  // There must be at least one adult per booking
  if (booking.adultsAmount < 1) {
    messages.push("Invalid adults amount");
  }

  // The children amount can't be negative
  if ((booking.childrenAmount || 0) < 0) {
    messages.push("Invalid children amount");
  }

  // The total amount of guest can't surpass property's limit
  const totalGuestsAmount =
    booking.adultsAmount + (booking.childrenAmount || 0);

  if (property && totalGuestsAmount > property?.guestsLimit) {
    messages.push(
      `The guest limit is ${property?.guestsLimit} but you selected ${totalGuestsAmount}`
    );
  }

  return messages;
};
