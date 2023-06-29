import styles from "./AdvantagesItem.module.scss";
import { AdvantagesItemProps } from "./AdvantagesItem.props";

export const AdvantagesItem = ({
  title,
  description,
  children,
}: AdvantagesItemProps): JSX.Element => {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>{children}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{description}</div>
    </div>
  );
};
