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
    </BookingsContextProvider>
  </PropertiesContextProvider>
);

export default App;
