import { FC } from "react";
import styles from "./SettingsContainer.module.scss";

import { VerticalTabs } from "./components/verticaltabs/VerticalTabs";
import { BreadCrumbs } from "@/components";

export const SettingsContainer: FC = () => {
  return (
    <section className={styles.settings}>
      <div className="container">
        <BreadCrumbs />
        <VerticalTabs />
      </div>
    </section>
  );
};
