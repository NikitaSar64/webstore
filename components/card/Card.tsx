'use client'

import { FC } from "react";
import Rating from '@mui/material/Rating';
import { CardProps } from "./Card.props";

import styles from './Card.module.scss';
import Image from "next/image";

export const Card : FC<CardProps> = ({name, category, price, productImg, authorImg, rating}) => {
    return (
        <div className={styles.card}>
            <Image
                alt="cardImg"
                src={productImg}
                width={440}
                height={250}/>
            <div className={styles.cardContent}>
                <div className={styles.cardTitle}>
                    <div className={styles.cardName}>
                        {name}
                    </div>
                    <div className={styles.cardCategory}>
                        {category}
                    </div>
                </div>
                <div className={styles.cardPrice}>
                    $ {price}
                </div>
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.cardAuthor}>
                    <Image
                        className={styles.authorImg}
                        alt="cardImg"
                        src={authorImg}
                        width={32}
                        height={32}/>
                    <div className={styles.authorName}>
                        Radiustheme
                    </div>
                    </div>
                <div className={styles.cardRating}>
                    <Rating name="read-only" value={rating} readOnly />
                    ( {rating} )
                </div>
            </div>
        </div>
    )
}