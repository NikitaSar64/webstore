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
import Link from "next/link";
import ROUTES from "@/routes/routes";

export const Card: FC<CardProps> = ({
  cardData,
  ratingShow = true,
  type = "vertical",
  className,
}): JSX.Element => {
  switch (type) {
    case "vertical":
      return (
        <Link
          href={ROUTES.detail.createRoute(cardData.id)}
          className={cn(styles.card, className)}
        >
          {/* <div className={cn(styles.card, className)}> */}
          <div className={styles.cardImg}>
            <Image
              alt="cardImg"
              src={cardData.productImg}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className={cn(styles.cardContent, styles.cardContentVertical)}>
            <div className={styles.cardTitle}>
              <div className={styles.cardName}>{cardData.name}</div>
              <div className={styles.cardCategory}>{cardData.category}</div>
            </div>
            <div className={styles.cardPrice}>$ {cardData.price}</div>
          </div>
          <div className={cn(styles.cardInfo, styles.cardInfoHorizontal)}>
            <div className={styles.authorBox}>
              <Avatar
                src={cardData.authorAvatar}
                alt="author-avatar"
                sx={{ width: "30px", height: "30px" }}
              />
              <div className={styles.authorName}>{cardData.authorName}</div>
            </div>
            <div className={styles.cardOptions}>
              <Rating
                name="read-only"
                value={cardData.rating}
                readOnly
                size="small"
                className={cn({ [styles.rating]: ratingShow })}
              />
              {ratingShow && <span>( {cardData.rating} )</span>}
            </div>
          </div>
          {/* </div> */}
        </Link>
      );
    case "horizontal":
      return (
        <Link
          href={ROUTES.detail.createRoute(cardData.id)}
          className={cn(styles.card, styles.horizontalCard)}
        >
          {/* <div className={cn(styles.card, styles.horizontalCard)}> */}
          <div className={styles.cardImg}>
            <Image
              alt="cardImg"
              src={cardData.productImg}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className={cn(styles.cardContentHorizontal)}>
            <div className={styles.cardInfo}>
              <div className={styles.cardTitle}>
                <div className={styles.cardName}>{cardData.name}</div>
                <div className={styles.cardCategory}>{cardData.category}</div>
                <p className={styles.cardDescription}>{cardData.description}</p>
              </div>
              <div className={styles.cardPrice}>
                <div>$ {cardData.price}</div>
                <div className={styles.sales}>Sales ( 14 )</div>
              </div>
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.authorBox}>
                <Avatar
                  src={cardData.authorAvatar}
                  alt="author-avatar"
                  sx={{ width: "30px", height: "30px" }}
                />
                <div className={styles.authorName}>{cardData.authorName}</div>
              </div>
              <div className={styles.cardOptions}>
                <Rating
                  size="small"
                  name="read-only"
                  value={cardData.rating}
                  readOnly
                  className={styles.rating}
                />
                ( {cardData.rating} )
                <div className={styles.option}>
                  <FontAwesomeIcon icon={faComment} />( 10 )
                </div>
                <div className={styles.option}>
                  <FontAwesomeIcon icon={faHeart} />( 20 )
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Link>
      );
  }
};
