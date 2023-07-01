import { FC } from "react";
import styles from "./AboutPage.module.scss";

export const AboutPage: FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.title}>About Me:</div>
      <p className={styles.text}>
        Bimply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry`s standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic.
      </p>
      <div className={styles.skills}>
        <div className={styles.title}>Skills:</div>
        <div className={styles.skill}>
          <div className={styles.skillHead}>
            <div className={styles.skillTitle}>Graphic Design</div>
            <div className={styles.skillLvl}>80%</div>
          </div>
          <div className={styles.skillLine}>
            <div style={{ maxWidth: "80%" }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <div className={styles.skillHead}>
            <div className={styles.skillTitle}>WordPress</div>
            <div className={styles.skillLvl}>90%</div>
          </div>
          <div className={styles.skillLine}>
            <div style={{ maxWidth: "90%" }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <div className={styles.skillHead}>
            <div className={styles.skillTitle}>Joomla</div>
            <div className={styles.skillLvl}>70%</div>
          </div>
          <div className={styles.skillLine}>
            <div style={{ maxWidth: "70%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
