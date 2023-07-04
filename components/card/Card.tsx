"use client";

import { FC } from "react";
import Rating from "@mui/material/Rating";
import { CardProps } from "./Card.props";
import Avatar from "@mui/material/Avatar";

import styles from "./Card.module.scss";
import Image from "next/image";

import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";

export const Card: FC<CardProps> = ({
  name,
  category,
  description,
  price,
  productImg,
  authorAvatar,
  authorName,
  rating,
  type = "vertical",
  className,
}): JSX.Element => {
  switch (type) {
    case "vertical":
      return (
        <div className={cn(styles.card, styles.verticalCard, className)}>
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
          <div className={cn(styles.cardContent, styles.cardContentVertical)}>
            <div className={styles.cardTitle}>
              <div className={styles.cardName}>{name}</div>
              <div className={styles.cardCategory}>{category}</div>
            </div>
            <div className={styles.cardPrice}>$ {price}</div>
          </div>
          <div className={cn(styles.cardInfo, styles.cardInfoHorizontal)}>
            <div className={styles.authorBox}>
              <Avatar src={authorAvatar} alt="author-avatar" />
              <div className={styles.authorName}>{authorName}</div>
            </div>
            <div className={styles.cardOptions}>
              <Rating
                name="read-only"
                value={rating}
                readOnly
                className={styles.rating}
              />
              ( {rating} )
            </div>
          </div>
        </div>
      );
    case "horizontal":
      return (
        <div className={cn(styles.card, styles.horizontalCard)}>
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
          <div className={cn(styles.cardContentHorizontal)}>
            <div className={styles.cardInfo}>
              <div className={styles.cardTitle}>
                <div className={styles.cardName}>{name}</div>
                <div className={styles.cardCategory}>{category}</div>
                <p className={styles.cardDescription}>{description}</p>
              </div>
              <div className={styles.cardPrice}>
                <div>$ {price}</div>
                <div className={styles.sales}>Sales ( 14 )</div>
              </div>
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.authorBox}>
                <Avatar
                  src={authorAvatar}
                  alt="author-avatar"
                  sx={{ width: "30px", height: "30px" }}
                />
                <div className={styles.authorName}>{authorName}</div>
              </div>
              <div className={styles.cardOptions}>
                <Rating
                  size="small"
                  name="read-only"
                  value={rating}
                  readOnly
                  className={styles.rating}
                />
                ( {rating} )
                <div className={styles.option}>
                  <FontAwesomeIcon icon={faComment} />( 10 )
                </div>
                <div className={styles.option}>
                  <FontAwesomeIcon icon={faHeart} />( 20 )
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "mini":
      return (
        <div className={cn(styles.card, styles.miniCard, className)}>
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
          <div className={cn(styles.cardContent, styles.miniCardContent)}>
            <div className={styles.cardTitle}>
              <div className={styles.cardName}>{name}</div>
              <div className={styles.cardCategory}>{category}</div>
            </div>
            <div className={styles.cardPrice}>$ {price}</div>
          </div>
          <div className={cn(styles.cardInfo)}>
            <div className={styles.authorBox}>
              <Avatar
                src={authorAvatar}
                alt="author-avatar"
                sx={{ width: "30px", height: "30px" }}
              />
              <div className={styles.authorName}>{authorName}</div>
            </div>
            <Rating
              size="small"
              name="read-only"
              value={rating}
              readOnly
              className={styles.rating}
            />
          </div>
        </div>
      );
  }
};
