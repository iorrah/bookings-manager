import { Container } from "../Container";
import Logo from "./logo.svg";
import User from "./user.svg";

export const NavigationBar = () => (
  <nav className="shadow-md bg-white">
    <Container className="flex justify-between py-2 sm:py-4 items-center">
      <img
        src={Logo}
        alt="Bookings Manageer Logo"
        className="w-20 sm:w-24 cursor-pointer"
      />

      <p className="hidden sm:flex items-center">
        <span className="font-semibold text-sm sm:text-base">
          Bookings Page
        </span>
      </p>

      <img
        src={User}
        alt="User Profile Image"
        className="rounded-full w-6 sm:w-8 cursor-pointer border border-blue-600 border-4"
      />
    </Container>
  </nav>
);
