import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from "react";

export interface PopUpProps extends HTMLAttributes<HTMLDivElement> {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}
