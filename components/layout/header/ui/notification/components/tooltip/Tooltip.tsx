import { FC } from "react";

import styles from "./Tooltip.module.scss";
import { NotificationProps } from "../../Notification.props";
import { BasketItem, MessageItem, NotificationItem } from "./components";

import userImg from "@assets/user.png";

import cn from "classnames";
import { useBasketStore } from "@/store/store";
import { getTotalPrice } from "@/helpers/getTotalPrice";
import { Button } from "@/components/ui/button/Button";

export const Tooltip: FC<Pick<NotificationProps, "type">> = ({
  type,
}): JSX.Element => {
  const basket = useBasketStore((store) => store.basket);

  switch (type) {
    case "basket":
      return (
        <div className={cn(styles.tooltip, `${type}-tooltip`)}>
          {basket.map((product) => (
            <BasketItem item={product} key={product.id} />
          ))}
          <div className={styles.total}>
            <div className={styles.price}>
              <div>Total</div>
              <div>{getTotalPrice(basket)} $</div>
            </div>
            <Button
              text="Go to Cart"
              type="button"
              className={cn(styles.btn, styles.chart)}
            />
            <Button
              text="Go to Checkout"
              type="button"
              className={cn(styles.btn, styles.checkout)}
            />
          </div>
        </div>
      );
    case "message":
      return (
        <div className={cn(styles.tooltip, `${type}-tooltip`)}>
          <MessageItem
            img={userImg}
            name="Kazi Fahim"
            topic="Need WP Help!"
            date="01 Dec, 2016"
            status="replied"
          />
        </div>
      );
    case "notification":
      return (
        <div className={cn(styles.tooltip, `${type}-tooltip`)}>
          <NotificationItem
            img={userImg}
            name="Kazi Fahim"
            date="01 Dec, 2016"
            status="unread"
          />
        </div>
      );
  }
};
