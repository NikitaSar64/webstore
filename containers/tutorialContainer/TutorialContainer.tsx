import { FC } from "react";

import styles from "./TutorialContainer.module.scss";
import { TutorialItem } from "./components";
import { Title } from "@/components";

import webImg from "../../assets/tutorial/tutorial1.png";
import wordPressImg from "@assets/tutorial/tutorial2.png";
import htmlCssImg from "@assets/tutorial/tutorial3.png";

const tutorialData = [
  {
    id: 1,
    title: "Web Design Tutorials",
    img: webImg,
  },
  {
    id: 2,
    title: "WordPress Tutorials",
    img: wordPressImg,
  },
  {
    id: 3,
    title: "HTML & CSS Tutorials",
    img: htmlCssImg,
  },
];

export const TutorialContainer: FC = () => {
  return (
    <section className={styles.tutorial}>
      <div className="container">
        <Title
          tag="h3"
          text="Free Monthly Tutorials To Help You With Your Project"
        />
        <div className={styles.wrapper}>
          {tutorialData.map(({ id, title, img }) => (
            <TutorialItem
              key={id}
              title={title}
              src={img}
              className={styles.tutorialItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
