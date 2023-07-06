import Image from "next/image";
import styles from "./TutorialItem.module.scss";
import { TutorialItemProps } from "./TutorialItem.props";

import cn from "classnames";

export const TutorialItem = ({
  title,
  src,
  className,
}: TutorialItemProps): JSX.Element => {
  return (
    <div className={className}>
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
