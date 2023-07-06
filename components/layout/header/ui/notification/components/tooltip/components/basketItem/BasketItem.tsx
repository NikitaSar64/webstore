import { FC } from "react";

import styles from "./BasketItem.module.scss";
import { BasketItemProps } from "./BasketItem.props";
import Image from "next/image";
import Link from "next/link";
import ROUTES from "@/routes/routes";

export const BasketItem: FC<BasketItemProps> = ({ item }): JSX.Element => {
  return (
    <Link
      href={ROUTES.detail.createRoute(item.id)}
      className={styles.basketItem}
    >
      <div className={styles.img}>
        <Image
          src={item.productImg}
          fill
          alt="basketItemImg"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.category}>{item.category}</div>
        <div className={styles.price}>{item.price}</div>
      </div>
    </Link>
  );
};
