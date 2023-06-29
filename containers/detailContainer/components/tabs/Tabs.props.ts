import { ReactNode } from "react";

export interface TabsProps {}

export interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}
