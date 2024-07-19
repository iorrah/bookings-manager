import { Toaster } from "react-hot-toast";

import { NavigationBar } from "./components/NavigationBar";
import { BookingsPage } from "./pages/BookingsPage";
import { BookingsContextProvider } from "./providers/bookings";
import { PropertiesContextProvider } from "./providers/properties";

const App = () => (
  <PropertiesContextProvider>
    <BookingsContextProvider>
      <main className="sm:bg-slate-50 min-h-screen">
        <NavigationBar />
        <BookingsPage />
      </main>

      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff"
          }
        }}
      />
    </BookingsContextProvider>
  </PropertiesContextProvider>
);

export default App;
