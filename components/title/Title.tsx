import { FC } from "react";
import { TitleProps } from "./Title.props";

import styles from "./Title.module.scss";
import cn from "classnames";

export const Title: FC<TitleProps> = ({ tag, text, className }) => {
  switch (tag) {
    case "h1":
      return <h1 className={cn(styles.h1, className)}>{text}</h1>;
    case "h2":
      return <h2 className={cn(styles.h2, className)}>{text}</h2>;
    case "h3":
      return <h3 className={cn(styles.h3, className)}>{text}</h3>;
    case "h4":
      return <h4 className={cn(styles.h4, className)}>{text}</h4>;
    case "h5":
      return <h5 className={cn(styles.h5, className)}>{text}</h5>;
    case "h6":
      return <h6 className={cn(styles.h6, className)}>{text}</h6>;
    default:
      return <></>;
  }
};
