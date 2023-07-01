"use client";

import { Avatar } from "@mui/material";
import { Award } from "@components/index";
import { FC } from "react";
import styles from "./AuthorCard.module.scss";
import { AuthorCardProps } from "./AuthorCard.props";

export const AuthorCard: FC<AuthorCardProps> = ({ title, view = true }) => {
  return (
    <div className="aside-box">
      <div className="aside-title">{title}</div>
      <div className={styles.authorBox}>
        <Avatar
          className={styles.authorAvatar}
          variant="rounded"
          src="/detailAvatar.png"
        />
        <div className={styles.authorInfo}>
          <div className={styles.authorName}>PsdBoss</div>
          {view ? (
            <a href="#">View Profile</a>
          ) : (
            <a href="#" className={styles.status}>
              Online
            </a>
          )}
        </div>
      </div>
      <div className={styles.authorAwards}>
        <Award type="design" />
        <Award type="product" />
        <Award type="efficiency" />
        <Award type="best" />
        <Award type="result" />
      </div>
    </div>
  );
};
