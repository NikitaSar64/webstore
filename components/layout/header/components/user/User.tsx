import { FC } from "react";
import styles from "./User.module.scss";
import { UserProps } from "./User.props";
import Image from "next/image";

export const User: FC<UserProps> = ({ name, balance, img }): JSX.Element => {
  return (
    <div className={styles.user}>
      <div className={styles.img}>
        <Image src={img} fill style={{ objectFit: "contain" }} alt="userImg" />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.balance}>{balance}</div>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>Profile Page</li>
          <li>Portfolio</li>
          <li>Account Setting</li>
          <li>Downloads</li>
          <li>Wishlist</li>
          <li>Upload Item</li>
          <li>Statement</li>
          <li>Withdraws</li>
        </ul>
      </div>
    </div>
  );
};
