import Image from "next/image";
import styles from "./TutorialItem.module.scss";
import { TutorialItemProps } from "./TutorialItem.props";

export const TutorialItem = ({
  title,
  src,
}: TutorialItemProps): JSX.Element => {
  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <Image
          src={src}
          fill
          alt="tutorialImg"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};
