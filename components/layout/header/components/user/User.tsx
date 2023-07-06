"use client";

import { FC } from "react";
import styles from "./User.module.scss";
import { UserProps } from "./User.props";
import { Avatar } from "@mui/material";
import Link from "next/link";
import ROUTES from "@/routes/routes";

export const User: FC<UserProps> = ({ userData }): JSX.Element => {
  return (
    <div className={styles.user}>
      <Link href={ROUTES.profile.createRoute(1)} className={styles.userLink}>
        <Avatar src={userData.img} />
        <div className={styles.info}>
          <div className={styles.name}>{userData.name}</div>
          <div className={styles.balance}>{userData.balance}</div>
        </div>
      </Link>
      <div className={styles.menu}>
        <ul>
          <li>
            <Link
              href={ROUTES.profile.createRoute(1)}
              className={styles.menuLink}
            >
              Profile Page
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.menuLink}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href={ROUTES.settings.createRoute()}
              className={styles.menuLink}
            >
              Account Setting
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.menuLink}>
              Downloads
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.menuLink}>
              Wishlist
            </Link>
          </li>
          <li>
            <Link
              href={ROUTES.upload.createRoute()}
              className={styles.menuLink}
            >
              Upload Item
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.menuLink}>
              Statement
            </Link>
          </li>
          <li>
            <Link
              href={ROUTES.withdrawals.createRoute()}
              className={styles.menuLink}
            >
              Withdraws
            </Link>
          </li>
          <li className={styles.logout}>Logout</li>
        </ul>
      </div>
    </div>
  );
};
