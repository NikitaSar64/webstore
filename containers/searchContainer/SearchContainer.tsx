import { FC } from "react";
import { Title, Search } from "@/components";

import "@styles/global.scss";
import styles from "./SearchContainer.module.scss";

export const SearchContainer = (): JSX.Element => {
  return (
    <section className={styles.search}>
      <div className="container">
        <div className={styles.searchInner}>
          <Title
            className={styles.searchTitle}
            tag="h1"
            text="Welcome To Foxtar Market Place!"
          />
          <p className={styles.searchText}>
            Premium WordPress Themes, Web Templates and Many More ...
          </p>
          <Search />
        </div>
      </div>
    </section>
  );
};
