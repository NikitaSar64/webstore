import { FC } from "react";
import styles from "./ProfileContainer.module.scss";

import { VerticalTabs } from "./components/verticaltabs/VerticalTabs";
import { BreadCrumbs } from "@/components";
import { profile } from "console";

export const ProfileContainer: FC = () => {
  return (
    <section className={styles.profile}>
      <div className="container">
        <BreadCrumbs />
        <div className={styles.profileBox}>
          <VerticalTabs />
        </div>
      </div>
    </section>
  );
};
