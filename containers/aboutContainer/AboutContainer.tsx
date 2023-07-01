import { FC } from "react";

import styles from "./AboutContainer.module.scss";
import { BreadCrumbs } from "@/components";

export const AboutContainer: FC = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <BreadCrumbs />
        <div className="inner-container">
          <h2 className="inner-title">To Know Who We Are</h2>
          <div className={styles.outher}>
            <h4 className={styles.outherTitle}>What We Do</h4>
            <p className={styles.outherText}>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centurbut
              a vfrrdyrtfglso survived but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the releas survived not raseth leap into
              electronic typesetting, remaining essentially unchanged. when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centurbut a
              vfrrdyrtfglso survived but also the leap into electronic
              typesetting, remaining essentially unchanged. It was po pularised
              in the 1960s with the releas survived not rasethleap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <h4 className={styles.outherTitle}>Our Mission</h4>
            <p className={styles.outherText}>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centurbut
              a vfrrdyrtfglso survived but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the releas survived not raseth leap into
              electronic typesetting, remaining essentially unchanged. when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centurbut a
              vfrrdyrtfglso survived but also the leap into electronic
              typesetting, remaining essentially unchanged. It was po pularised
              in the 1960s with the releas survived not rasethleap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
