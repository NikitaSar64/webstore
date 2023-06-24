import { FC, ReactNode } from "react";

import styles from "./Notification.module.scss";
import { NotificationProps } from "./Notification.props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBell,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import cn from "classnames";
import { Tooltip } from "./components";

export const Notification: FC<NotificationProps> = ({
  type,
  count,
}): JSX.Element => {
  const renderIcon = (): ReactNode => {
    switch (type) {
      case "notification":
        return <FontAwesomeIcon icon={faBell} className={styles.fontIcon} />;
      case "message":
        return (
          <FontAwesomeIcon icon={faEnvelope} className={styles.fontIcon} />
        );
      case "basket":
        return (
          <FontAwesomeIcon icon={faShoppingCart} className={styles.fontIcon} />
        );
    }
  };

  return (
    <div className={cn(styles.notification, `${type}`)}>
      {renderIcon()}
      <span
        className={cn({
          [styles.orange]: type === "notification",
          [styles.yellow]: type === "message",
          [styles.green]: type === "basket",
        })}
      >
        {count}
      </span>
      <Tooltip type={type} />
    </div>
  );
};
