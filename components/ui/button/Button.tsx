"use client";

import { FC } from "react";

import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";

import cn from "classnames";

export const Button: FC<ButtonProps> = ({
  text,
  className,
  children,
  type,
  ...args
}): JSX.Element => {
  return (
    <button className={cn(styles.button, className)} {...args} type={type}>
      {children}
      {text}
    </button>
  );
};
