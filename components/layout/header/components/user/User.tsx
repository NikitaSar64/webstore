"use client";

import { FC } from "react";
import styles from "./User.module.scss";
import { UserProps } from "./User.props";
import { Avatar } from "@mui/material";

export const User: FC<UserProps> = ({ userData }): JSX.Element => {
  return (
    <div className={styles.user}>
      <Avatar src={userData.img} />
      <div className={styles.info}>
        <div className={styles.name}>{userData.name}</div>
        <div className={styles.balance}>{userData.balance}</div>
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
          <li className={styles.logout}>Logout</li>
        </ul>
      </div>
    </div>
  );
};
