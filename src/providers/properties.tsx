import { createContext, FC } from "react";

import { Properties, Property } from "../types";
import propertiesData from "../data/properties.json";

export const PropertiesContext = createContext<{
  properties: Properties;
  findProperty: (propertyId: number) => Property | null;
}>({
  properties: [],
  findProperty: () => null
});

type PropertiesContextProvider = FC<{ children: React.ReactNode }>;

export const PropertiesContextProvider: PropertiesContextProvider = ({
  children
}) => {
  const findProperty = (propertyId: number) =>
    propertiesData.find(({ id }) => propertyId === id) || null;

  return (
    <PropertiesContext.Provider
      value={{ properties: propertiesData, findProperty }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};
