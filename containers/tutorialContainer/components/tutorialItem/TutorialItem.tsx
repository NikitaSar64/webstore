import Image from "next/image";
import styles from "./TutorialItem.module.scss";
import { TutorialItemProps } from "./TutorialItem.props";

import Link from "next/link";

export const TutorialItem = ({
  title,
  src,
  className,
}: TutorialItemProps): JSX.Element => {
  return (
    <Link href="#" className={className}>
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
    </Link>
  );
};
