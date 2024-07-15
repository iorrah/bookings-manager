import { createContext } from "react";
import { Bookings } from "../types";

export const BookingsContext = createContext([] as Bookings);
