import { format } from "date-fns";

export const fullDate = (date: string) => format(new Date(date), "E, d MMM yy");
