import { Title } from "@/components";
import { AdvantagesItem } from "./components";
import styles from "./Advantages.module.scss";

import HeartIcon from "@icons/heart.svg";
import LockIcon from "@icons/lock.svg";
import GiftIcon from "@icons/gift.svg";

const advantagesData = [
  {
    id: 1,
    title: "Easily Buy & Sell",
    description:
      "Dorem Ipsum is simply dummy text of the pring and typesetting industry. Lorem Ipsum has been the industry`s standaum.",
    Icon: LockIcon,
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "Dorem Ipsum is simply dummy text of the pring and typesetting industry. Lorem Ipsum has been the industry`s standaum.",
    Icon: GiftIcon,
  },
  {
    id: 3,
    title: "100% Secure Payment",
    description:
      "Dorem Ipsum is simply dummy text of the pring and typesetting industry. Lorem Ipsum has been the industry`s standaum.",
    Icon: HeartIcon,
  },
];

export const AdvantagesContainer = (): JSX.Element => {
  return (
    <section className={styles.advantages}>
      <div className="container">
        <Title
          tag="h3"
          text="This Week Trending Products"
          className={styles.title}
        />
        <div className={styles.wrapper}>
          {advantagesData.map(({ id, title, description, Icon }) => {
            return (
              <AdvantagesItem key={id} title={title} description={description}>
                <Icon />
              </AdvantagesItem>
            );
          })}
        </div>
      </div>
    </section>
  );
};
