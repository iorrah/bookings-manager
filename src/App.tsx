import { NavigationBar } from "./components/NavigationBar";
import { BookingsPage } from "./pages/BookingsPage";
import { BookingsContextProvider } from "./providers/bookings";
import { PropertiesContextProvider } from "./providers/properties";

// TODO: create a wrapper layout component

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
