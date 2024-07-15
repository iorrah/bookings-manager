import { NavigationBar } from "./components/NavigationBar";
import { BookingsPage } from "./pages/BookingsPage";
import { BookingsContext } from "./providers/bookings";
import { PropertiesContext } from "./providers/properties";
import bookings from "./data/bookings.json";
import properties from "./data/properties.json";

const App = () => (
  <>
    <BookingsContext.Provider value={bookings}>
      <PropertiesContext.Provider value={properties}>
        <NavigationBar />
        <BookingsPage />
      </PropertiesContext.Provider>
    </BookingsContext.Provider>
  </>
);

export default App;
