import { Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface RangeProps extends HTMLAttributes<HTMLDivElement> {
  range: number[];
  setRange: Dispatch<SetStateAction<number[]>>;
}
