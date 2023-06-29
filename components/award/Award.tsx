import { FC } from "react";
import { AwardProps } from "./Award.props";

import styles from "./Award.module.scss";
import cn from "classnames";

export const Award: FC<AwardProps> = ({ type }) => {
  let typeColor = "";

  switch (type) {
    case "design":
      typeColor = "#ffb74d";
      break;

    case "product":
      typeColor = "#f4511e";
      break;

    case "efficiency":
      typeColor = "#00bcd4";
      break;
    case "best":
      typeColor = "#66bb6a";
      break;
    case "result":
      typeColor = "#cfd8dc";
      break;
  }

  return (
    <div
      className={cn(styles.award, {
        [styles.design]: type === "design",
        [styles.leaf]: type === "product",
        [styles.efficiency]: type === "efficiency",
        [styles.best]: type === "best",
        [styles.result]: type === "result",
      })}
    >
      <svg
        fill={typeColor}
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M960.36.011 109 508.785v902.442L960.36 1920l851.475-508.773V508.785z"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};
