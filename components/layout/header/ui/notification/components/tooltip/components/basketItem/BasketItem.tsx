import { FC } from "react";

import styles from "./BasketItem.module.scss";
import { BasketItemProps } from "./BasketItem.props";
import Image from "next/image";

export const BasketItem: FC<BasketItemProps> = ({
  name,
  category,
  price,
  img,
}): JSX.Element => {
  return (
    <div className={styles.basketItem}>
      <div className={styles.img}>
        <Image
          src={img}
          fill
          alt="basketItemImg"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.category}>{category}</div>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
};
