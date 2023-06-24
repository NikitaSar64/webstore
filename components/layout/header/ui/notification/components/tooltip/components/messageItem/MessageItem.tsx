import { FC } from "react";

import styles from "./MessageItem.module.scss";
import Image from "next/image";
import { MessageItemProps } from "./MessageItem.props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faReply } from "@fortawesome/free-solid-svg-icons";

export const MessageItem: FC<MessageItemProps> = ({
  name,
  topic,
  img,
  date,
  status,
}): JSX.Element => {
  const renderStatusIcon = () => {
    switch (status) {
      case "read":
        return <FontAwesomeIcon icon={faEnvelope} />;
      case "unread":
        return <FontAwesomeIcon icon={faEnvelope} color="#ef6c00" />;
      case "reply":
        return <FontAwesomeIcon icon={faReply} color="#ef6c00" />;
      case "replied":
        return <FontAwesomeIcon icon={faReply} />;
    }
  };

  return (
    <div className={styles.message}>
      <div className={styles.img}>
        <Image src={img} fill alt="userAvatar" style={{ objectFit: "cover" }} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.topic}>{topic}</div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.status}>{renderStatusIcon()}</div>
    </div>
  );
};
