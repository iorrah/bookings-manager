import { BookingsList } from "./BookingsList";
import { BookingDetails } from "./BookingDetails";

export const BookingsPage = () => {
  return (
    <main className="container mx-auto flex py-4">
      <BookingsList />
      <BookingDetails />
    </main>
  );
};
