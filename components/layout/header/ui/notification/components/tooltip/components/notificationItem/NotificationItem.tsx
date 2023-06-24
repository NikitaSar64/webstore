import { FC } from "react";
import Image from "next/image";

import styles from "./NotificationItem.module.scss";
import { NotificationItemProps } from "./NotificationItem.props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export const NotificationItem: FC<NotificationItemProps> = ({
  name,
  date,
  img,
  status,
}): JSX.Element => {
  const renderStatusIcon = () => {
    switch (status) {
      case "read":
        return <FontAwesomeIcon icon={faBell} />;
      case "unread":
        return <FontAwesomeIcon icon={faBell} color="#ef6c00" />;
    }
  };

  return (
    <div className={styles.notification}>
      <div className={styles.img}>
        <Image src={img} fill alt="userAvatar" style={{ objectFit: "cover" }} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.status}>{renderStatusIcon()}</div>
    </div>
  );
};
