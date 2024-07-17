import { NavigationBar } from "./components/NavigationBar";
import { BookingsPage } from "./pages/BookingsPage";
import { BookingsContextProvider } from "./providers/bookings";
import { PropertiesContextProvider } from "./providers/properties";

const App = () => (
  <>
    <PropertiesContextProvider>
      <BookingsContextProvider>
        <NavigationBar />
        <BookingsPage />
      </BookingsContextProvider>
    </PropertiesContextProvider>
  </>
);

export default App;
