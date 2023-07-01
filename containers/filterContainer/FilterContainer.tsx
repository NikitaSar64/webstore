"use client";

import { BreadCrumbs, Range } from "@/components";
import { faAngleRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, MouseEventHandler, useState, MouseEvent } from "react";
import styles from "./FilterContainer.module.scss";

import cn from "classnames";

export const FilterContainer: FC = () => {
  const [category, setCategory] = useState<string>("");

  const handleCategoryClick = (event: MouseEvent<HTMLElement>) => {
    const category = (event.target as HTMLElement).dataset.category;

    if (typeof category == "string") {
      setCategory(category);
    }
  };

  return (
    <section className={styles.filter}>
      <div className="container">
        <BreadCrumbs />
        <div className={styles.filterWrapper}>
          <div className={styles.aside}>
            <div className={cn("aside-box", styles.asideBox)}>
              <div className="aside-title">Categories</div>
              <div className={styles.categoryList}>
                <ul>
                  <li
                    onClick={handleCategoryClick}
                    data-category="WordPress"
                    className={cn(styles.category, {
                      [styles.activeCategory]: category == "WordPress",
                    })}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    WordPress
                  </li>
                  <li
                    onClick={handleCategoryClick}
                    data-category="Joomla"
                    className={cn(styles.category, {
                      [styles.activeCategory]: category == "Joomla",
                    })}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    Joomla
                  </li>
                  <li
                    onClick={handleCategoryClick}
                    data-category="PSD"
                    className={cn(styles.category, {
                      [styles.activeCategory]: category == "PSD",
                    })}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    PSD
                  </li>
                  <li
                    onClick={handleCategoryClick}
                    data-category="Plugins"
                    className={cn(styles.category, {
                      [styles.activeCategory]: category == "Plugins",
                    })}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    Plugins
                  </li>
                  <li
                    onClick={handleCategoryClick}
                    data-category="Components"
                    className={cn(styles.category, {
                      [styles.activeCategory]: category == "Components",
                    })}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    Components
                  </li>
                </ul>
              </div>
            </div>
            <div className={cn("aside-box", styles.asideBox)}>
              <div className="aside-title">Price Range</div>
              <Range className={styles.range} />
              <button className={styles.rangeBtn} type="button">
                <FontAwesomeIcon icon={faSearch} />
                Search
              </button>
            </div>
            <div className={cn("aside-box", styles.asideBox)}>
              <div className="aside-title">Top 10 Sellers</div>
            </div>
          </div>
          <div className={styles.content}></div>
        </div>
      </div>
    </section>
  );
};
