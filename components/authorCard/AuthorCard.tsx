"use client";

import { Avatar } from "@mui/material";
import { Award } from "@components/index";
import { FC } from "react";
import styles from "./AuthorCard.module.scss";
import { AuthorCardProps } from "./AuthorCard.props";
import cn from "classnames";
import Link from "next/link";
import ROUTES from "@/routes/routes";

export const AuthorCard: FC<AuthorCardProps> = ({
  title,
  avatar,
  name,
  userId,
  view = true,
  className,
}) => {
  return (
    <div className={cn("aside-box", className)}>
      <div className="aside-title">{title}</div>
      <div className={styles.authorBox}>
        <Avatar
          className={styles.authorAvatar}
          variant="rounded"
          src={avatar}
        />
        <div className={styles.authorInfo}>
          <div className={styles.authorName}>{name}</div>
          {view ? (
            <Link
              href={ROUTES.profile.createRoute(userId)}
              className={styles.profileLink}
            >
              View Profile
            </Link>
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
