import { FC } from "react";

import styles from "./WithdrawsItem.module.scss";
import cn from "classnames";
import { WithdrawsItemProps } from "./WithdrawsItem.props";

export const WithdrawsItem: FC<WithdrawsItemProps> = ({ data }) => {
  return (
    <div className={styles.withdrawsItem}>
      <div className={styles.date}>{data.date}</div>
      <div className={styles.email}>{data.email}</div>
      <div className={styles.price}>{data.price}</div>
      <div
        className={cn(styles.status, { [styles.paid]: data.status === "Paid" })}
      >
        {data.status}
      </div>
    </div>
  );
};
