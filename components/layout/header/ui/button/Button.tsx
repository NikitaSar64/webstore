import { FC } from "react";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = ({ text, className, ...args }) => {
  return (
    <button className={cn(styles.btn, className)} {...args}>
      {text}
    </button>
  );
};
