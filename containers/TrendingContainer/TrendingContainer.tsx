"use client";

import { FC } from "react";

import styles from "./TrendingContainer.module.scss";
import { Card, Title } from "@/components";

import testImg from "@assets/test.png";
import testAuthor from "@assets/author.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";

export const TrandingContainer: FC = () => {
  return (
    <section className={styles.tranding}>
      <div className="container-fluid">
        <Title tag="h2" text="This Week Trending Products" />
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            horizontalClass: styles.swiperPagination,
            bulletClass: styles.swiperPaginationBullet,
            bulletActiveClass: styles.swiperPaginationBulletActive,
          }}
        >
          <SwiperSlide>
            <Card
              productImg={testImg}
              name="Responsive Mobile APP"
              category="Site Template"
              price={19}
              authorImg={testAuthor}
              authorName="Micrsof"
              rating={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              productImg={testImg}
              name="Responsive Mobile APP"
              category="Site Template"
              price={19}
              authorImg={testAuthor}
              authorName="Micrsof"
              rating={2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              productImg={testImg}
              name="Responsive Mobile APP"
              category="Site Template"
              price={19}
              authorImg={testAuthor}
              authorName="Micrsof"
              rating={3}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              productImg={testImg}
              name="Responsive Mobile APP"
              category="Site Template"
              price={19}
              authorImg={testAuthor}
              authorName="Micrsof"
              rating={4}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              productImg={testImg}
              name="Responsive Mobile APP"
              category="Site Template"
              price={19}
              authorImg={testAuthor}
              authorName="Micrsof"
              rating={5}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
