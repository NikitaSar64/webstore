"use client";

import { FormControl, NativeSelect } from "@mui/material";
import { FC } from "react";
import { SelectProps } from "./Select.props";

import styles from "./Select.module.scss";

export const Select: FC<SelectProps> = ({ children, className }) => {
  return (
    <FormControl className={className}>
      <NativeSelect
        style={{ height: "45px" }}
        classes={{ root: styles.root, select: styles.select }}
      >
        {children}
      </NativeSelect>
    </FormControl>
  );
};
