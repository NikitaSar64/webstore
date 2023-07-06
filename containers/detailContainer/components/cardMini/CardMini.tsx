import { FC } from "react";
import styles from "./CardMini.module.scss";
import { CardMiniProps } from "./CardMini.props";
import Image from "next/image";
import Link from "next/link";

export const CardMini: FC<CardMiniProps> = ({ data }) => {
  return (
    <Link href="#" className={styles.cardMini}>
      <div className={styles.img}>
        <Image
          src={data.img}
          fill
          alt={`product-${data.name}`}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.category}>{data.category}</div>
        <div className={styles.price}>{data.price}</div>
      </div>
    </Link>
  );
};
