"use client";

import { FC } from "react";
import styles from "./ProfileContainer.module.scss";
import cn from "classnames";

import { AuthorCard, BreadCrumbs } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";
import Image from "next/image";

import bannerImg from "@assets/testBanner.png";
import { VerticalTabs } from "./components";

export const ProfileContainer: FC = () => {
  return (
    <section className={styles.profile}>
      <div className="container">
        <BreadCrumbs />
        <div className={styles.inner}>
          <div className={styles.aside}>
            <AuthorCard view={false} title="About Author" />
            <ul className={cn("social", styles.social)}>
              <li className="facebook"></li>
              <li className="linkedIn"></li>
              <li className="youTube"></li>
              <li className="twitter"></li>
            </ul>
            <button className={cn(styles.btn, styles.send)}>
              <FontAwesomeIcon icon={faEnvelope} />
              Send Message
            </button>
            <button className={cn(styles.btn, styles.following)}>
              Following
            </button>
          </div>
          <div className={styles.content}>
            <div className={styles.profileBanner}>
              <div className={styles.bannerWrapper}>
                <Image
                  src={bannerImg}
                  alt="bannerImg"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={styles.profileItems}>
              <div className={styles.profileItem}>
                <div className={styles.itemTitle}>Country:</div>
                <div className={styles.itemContent}>England</div>
              </div>
              <div className={styles.profileItem}>
                <div className={styles.itemTitle}>Member Since:</div>
                <div className={styles.itemContent}>December 26, 2014</div>
              </div>
              <div className={styles.profileItem}>
                <div className={styles.itemTitle}>Author Rating:</div>
                <div className={cn(styles.itemContent, styles.rating)}>
                  <Rating name="read-only" value={5} readOnly />( 5 )
                </div>
              </div>
              <div className={styles.profileItem}>
                <div className={styles.itemTitle}>Total Sales:</div>
                <div className={styles.itemContent}>$ 5,030</div>
              </div>
            </div>
          </div>
        </div>
        <VerticalTabs />
      </div>
    </section>
  );
};
