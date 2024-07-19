import { Container } from "../Container";
import Logo from "./logo.svg";
import User from "./user.svg";

export const NavigationBar = () => (
  <nav className="shadow-md bg-white">
    <Container className="flex justify-between py-4 items-center">
      <img
        src={Logo}
        alt="Bookings Manageer Logo"
        className="w-24 cursor-pointer"
      />

      <p className="flex items-center">
        <span className="mr-1.5 font-semibold">Bookings Page</span>
      </p>

      <img
        src={User}
        alt="User Profile Image"
        className="rounded-full w-8 cursor-pointer border border-blue-600 border-4"
      />
    </Container>
  </nav>
);
