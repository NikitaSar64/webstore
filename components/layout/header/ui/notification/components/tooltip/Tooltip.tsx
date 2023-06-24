import { FC } from "react";

import styles from "./Tooltip.module.scss";
import { NotificationProps } from "../../Notification.props";
import { BasketItem, MessageItem, NotificationItem } from "./components";

import basketImg from "@assets/basketItem.png";
import userImg from "@assets/user.png";

import cn from "classnames";

export const Tooltip: FC<Pick<NotificationProps, "type">> = ({
  type,
}): JSX.Element => {
  switch (type) {
    case "basket":
      return (
        <div className={cn(styles.tooltip, `${type}-tooltip`)}>
          <BasketItem
            name="Grand Ballet"
            category="WordPress"
            price={59}
            img={basketImg}
          />
          <BasketItem
            name="Grand Ballet"
            category="WordPress"
            price={59}
            img={basketImg}
          />
          <div className={styles.total}>
            <div className={styles.price}>
              <div>Total</div>
              <div>118</div>
            </div>
            <button type="button">Go to Cart</button>
            <button type="button">Go to Checkout</button>
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
