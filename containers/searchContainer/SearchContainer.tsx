import { FC } from "react";
import { Title, Search } from "@/components";

import "@styles/global.scss";
import styles from "./SearchContainer.module.scss";
import { SearchContainerProps } from "./SearchContainer.props";

import cn from "classnames";

export const SearchContainer: FC<SearchContainerProps> = ({
  showTitle = true,
}) => {
  return (
    <section
      className={cn(styles.search, {
        [styles.searchHeight]: showTitle,
      })}
    >
      <div className="container">
        <div
          className={cn(styles.searchInner, {
            [styles.paddingMain]: showTitle,
            [styles.paddingRest]: !showTitle,
          })}
        >
          {showTitle && (
            <Title
              className={styles.searchTitle}
              tag="h1"
              text="Welcome To Foxtar Market Place!"
            />
          )}
          <p className={styles.searchText}>
            Premium WordPress Themes, Web Templates and Many More ...
          </p>
          <Search />
        </div>
      </div>
    </section>
  );
};
