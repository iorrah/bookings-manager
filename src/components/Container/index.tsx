import { FC } from "react";

type ContainerType = FC<{
  children: React.ReactNode;
  className: string;
}>;

export const Container: ContainerType = ({ children, className }) => (
  <div className={`container mx-auto px-4 ${className}`}>{children}</div>
);
