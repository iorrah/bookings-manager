import { createBreakpoint } from "react-use";
import tailwindcss from "tailwindcss/defaultTheme";

export const breakpoints = {
  phone: 0,
  largePhone: Number.parseInt(tailwindcss.screens.sm),
  tablet: Number.parseInt(tailwindcss.screens.md),
  laptop: Number.parseInt(tailwindcss.screens.lg),
  desktop: Number.parseInt(tailwindcss.screens.xl)
};

export const useBreakpoint = createBreakpoint(
  breakpoints
) as () => keyof typeof breakpoints;
