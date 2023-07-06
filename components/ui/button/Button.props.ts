import { HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: "button" | "reset" | "submit";
}
