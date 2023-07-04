import { Dispatch, SetStateAction } from "react";

type sortField = {
  sortField: string;
  textFiled: string;
};

export interface FilterMenuProps {
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  menuItems: sortField[];
}
