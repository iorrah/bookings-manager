import { useContext } from "react";

import { BookingsContext } from "../../providers/bookings";

import Logo from "./logo.png";
import User from "./user.png";

export const NavigationBar = () => {
  const bookings = useContext(BookingsContext);

  return (
    <nav className="shadow-sm bg-slate-50">
      <div className="container mx-auto flex justify-between py-4 items-center">
        <h1>
          <img src={Logo} alt="Bookings Manageer Logo" className="w-20" />
        </h1>

        <p className="flex items-center">
          <span className="mr-1.5">Bookings Page</span>
          <span className="rounded-full bg-zinc-700 text-white text-xs px-1 py-0.5 font-semibold">
            {bookings.length}
          </span>
        </p>

        <img src={User} alt="User Profile Image" className="rounded-full w-8" />
      </div>
    </nav>
  );
};
