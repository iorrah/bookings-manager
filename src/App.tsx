import { NavigationBar } from "./components/NavigationBar";
import { BookingsPage } from "./pages/BookingsPage";
import { BookingsContextProvider } from "./providers/bookings";
import { PropertiesContext } from "./providers/properties";
import properties from "./data/properties.json";

const App = () => (
  <>
    <PropertiesContext.Provider value={properties}>
      <BookingsContextProvider>
        <NavigationBar />
        <BookingsPage />
      </BookingsContextProvider>
    </PropertiesContext.Provider>
  </>
);

export default App;
