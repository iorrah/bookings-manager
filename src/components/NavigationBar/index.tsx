import Logo from "./logo.svg";
import User from "./user.svg";

export const NavigationBar = () => {
  return (
    <nav className="shadow-md bg-white">
      <div className="container mx-auto flex justify-between py-4 items-center">
        <img
          src={Logo}
          alt="Bookings Manageer Logo"
          className="w-24 cursor-pointer"
        />

        <p className="flex items-center">
          <span className="mr-1.5 font-semibold text-lg">Bookings Page</span>
        </p>

        <img
          src={User}
          alt="User Profile Image"
          className="rounded-full w-8 cursor-pointer border border-blue-600 border-4"
        />
      </div>
    </nav>
  );
};
