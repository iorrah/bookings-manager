import { BookingsList } from "./BookingsList";
import { BookingDetails } from "./BookingDetails";

export const Bookings = () => {
  return (
    <main className="container mx-auto flex py-4">
      <BookingsList />
      <BookingDetails />
    </main>
  );
};
