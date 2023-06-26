import { FC } from "react";

import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";

export const Button: FC<ButtonProps> = ({ text }): JSX.Element => {
  return <button className={styles.button}>{text}</button>;
};
