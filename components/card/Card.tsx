"use client";

import { FC } from "react";
import Rating from "@mui/material/Rating";
import { CardProps } from "./Card.props";
import Avatar from "@mui/material/Avatar";

import styles from "./Card.module.scss";
import Image from "next/image";

export const Card: FC<CardProps> = ({
  name,
  category,
  price,
  productImg,
  authorAvatar,
  authorName,
  rating,
}): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <Image
          alt="cardImg"
          src={productImg}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
          <div className={styles.cardName}>{name}</div>
          <div className={styles.cardCategory}>{category}</div>
        </div>
        <div className={styles.cardPrice}>$ {price}</div>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.authorBox}>
          <Avatar src={authorAvatar} alt="author-avatar" />
          <div className={styles.authorName}>{authorName}</div>
        </div>
        <div className={styles.cardRating}>
          <Rating name="read-only" value={rating} readOnly />( {rating} )
        </div>
      </div>
    </div>
  );
};
