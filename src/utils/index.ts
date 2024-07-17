import { format } from "date-fns";
import { statusName } from "../constants";

export const fullDate = (date: string) => format(new Date(date), "E, d MMM yy");

export const formatStatus = (status: number) => statusName[status];
