"use client";

import { FC } from "react";

import styles from "./TrendingContainer.module.scss";
import { Card, Title } from "@/components";

import { cardData } from "../productContainer/ProductContainer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";

export const TrandingContainer: FC = () => {
  return (
    <section className={styles.tranding}>
      <div className="container-fluid">
        <Title tag="h2" text="This Week Trending Products" />
        <div className="wrapper">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            breakpoints={{
              1400: {
                slidesPerView: 4,
              },
              1150: {
                slidesPerView: 3,
              },
              750: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            pagination={{
              clickable: true,
              horizontalClass: styles.swiperPagination,
              bulletClass: styles.swiperPaginationBullet,
              bulletActiveClass: styles.swiperPaginationBulletActive,
            }}
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <Card cardData={card} className={styles.card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
