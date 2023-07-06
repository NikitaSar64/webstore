"use client";

import { BreadCrumbs, Button, Card, Range } from "@/components";
import {
  faAngleRight,
  faArrowDownShortWide,
  faArrowDownWideShort,
  faGrip,
  faGripLines,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState, MouseEvent, useEffect } from "react";
import styles from "./FilterContainer.module.scss";

import cn from "classnames";

import { CardProps } from "@/components/card/Card.props";
import { FilterMenu } from "./components";
import { getSortedProducts } from "@/helpers/getSortProducts";
import { useSearchParams } from "next/navigation";

import { cardData } from "../productContainer/ProductContainer";

const sortedFields = [
  { sortField: "name", textFiled: "Sort by: Name" },
  { sortField: "price", textFiled: "Sort by: Price" },
];

export const FilterContainer: FC = () => {
  const params = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(params.get("category"));
  const [view, setView] = useState<CardProps["type"]>("horizontal");
  const [sort, setSort] = useState({
    descOrAsc: true,
    sortBy: "name",
  });
  const [products, setProducts] = useState(cardData);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [range, setRange] = useState([0, 600]);

  const handleCategoryClick = (event: MouseEvent<HTMLElement>) => {
    const category = (event.target as HTMLElement).dataset.category;

    if (typeof category == "string") {
      const sortedProducts = getSortedProducts(
        cardData,
        sort.descOrAsc,
        sort.sortBy
      );

      if (activeCategory == category) {
        setActiveCategory("");
        setProducts([...sortedProducts]);
      } else {
        setActiveCategory(category);

        setProducts([
          ...sortedProducts.filter((card) => card.category == category),
        ]);
      }
    }
  };

  const sortByRangePrice = () => {
    const sortedProducts = getSortedProducts(
      cardData,
      sort.descOrAsc,
      sort.sortBy
    ).filter((product) => {
      if (product.price >= range[0] && product.price <= range[1]) {
        return product;
      }
    });

    setProducts(sortedProducts);
  };

  useEffect(() => {
    if (window.innerWidth <= 800) {
      setView("vertical");
    } else {
      setView("horizontal");
    }
  }, []);

  useEffect(() => {
    const sortedProducts = getSortedProducts(
      products,
      sort.descOrAsc,
      sort.sortBy
    );

    setProducts([...sortedProducts]);
  }, [sort]);

  useEffect(() => {
    setSort({
      ...sort,
      sortBy: sortedFields[selectedIndex].sortField,
    });
  }, [selectedIndex]);

  useEffect(() => {
    const sortedProducts = getSortedProducts(
      cardData,
      sort.descOrAsc,
      sort.sortBy
    );

    setProducts([
      ...sortedProducts.filter((card) => card.category == activeCategory),
    ]);

    setActiveCategory(params.get("category"));
  }, [params.get("category")]);

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
                      [styles.activeCategory]: activeCategory == "WordPress",
                    })}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    WordPress
                  </li>
                  <li
                    onClick={handleCategoryClick}
                    data-category="Joomla"
                    className={cn(styles.category, {
                      [styles.activeCategory]: activeCategory == "Joomla",
                    })}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    Joomla
                  </li>
                  <li
                    onClick={handleCategoryClick}
                    data-category="PSD"
                    className={cn(styles.category, {
                      [styles.activeCategory]: activeCategory == "PSD",
                    })}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    PSD
                  </li>
                  <li
                    onClick={handleCategoryClick}
                    data-category="Plugins"
                    className={cn(styles.category, {
                      [styles.activeCategory]: activeCategory == "Plugins",
                    })}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    Plugins
                  </li>
                  <li
                    onClick={handleCategoryClick}
                    data-category="Components"
                    className={cn(styles.category, {
                      [styles.activeCategory]: activeCategory == "Components",
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
              <Range
                className={styles.range}
                range={range}
                setRange={setRange}
              />
              <Button
                text="Search"
                className={styles.btn}
                type="button"
                onClick={sortByRangePrice}
              >
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </div>
            <div className={cn("aside-box", styles.asideBox, styles.sellers)}>
              <div className="aside-title">Top 10 Sellers</div>
              {cardData.map((card, index) => {
                return (
                  <Card
                    key={index}
                    cardData={card}
                    ratingShow={false}
                    className={styles.bestSellers}
                  />
                );
              })}
              <Button
                text="View All"
                className={styles.btn}
                type="button"
              ></Button>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.filterOuther}>
              <div className={styles.contentFilter}>
                <div className={styles.filterBox}>
                  <FontAwesomeIcon
                    icon={
                      sort.descOrAsc
                        ? faArrowDownWideShort
                        : faArrowDownShortWide
                    }
                    fontSize={16}
                    onClick={() =>
                      setSort({ ...sort, descOrAsc: !sort.descOrAsc })
                    }
                    className={cn(styles.sortItem, styles.itemActive)}
                  />
                  <FilterMenu
                    menuItems={sortedFields}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                  />
                </div>
                <div className={styles.filterBox}>
                  <FontAwesomeIcon
                    icon={faGrip}
                    className={cn(styles.filterItem, {
                      [styles.itemActive]: view == "vertical",
                    })}
                    onClick={() => setView("vertical")}
                  />
                  <FontAwesomeIcon
                    icon={faGripLines}
                    className={cn(styles.filterItem, {
                      [styles.itemActive]: view == "horizontal",
                    })}
                    onClick={() => setView("horizontal")}
                  />
                </div>
              </div>
            </div>
            <div
              className={cn({
                [styles.miniView]: view == "vertical",
                [styles.horizontalView]: view == "horizontal",
              })}
            >
              {products.map((card, index) => {
                return (
                  <Card
                    key={index}
                    cardData={card}
                    className={styles.card}
                    type={view}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
