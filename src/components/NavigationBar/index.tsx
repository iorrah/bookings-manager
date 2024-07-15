import Logo from "./logo.png";
import User from "./user.png";

export const NavigationBar = () => (
  <nav className="shadow-sm bg-slate-50">
    <div className="container mx-auto flex justify-between py-4 items-center">
      <h1>
        <img src={Logo} alt="Bookings Manageer Logo" className="w-44" />
      </h1>

      <img src={User} alt="User Profile Image" className="rounded-full w-8" />
    </div>
  </nav>
);
