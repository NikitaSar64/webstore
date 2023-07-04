"use client";

import { BreadCrumbs, Card, Range } from "@/components";
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

import testImg from "@assets/test.png";
import { CardProps } from "@/components/card/Card.props";
import { FilterMenu } from "./components";
import { getSortedProducts } from "@/helpers/getSortProducts";

const cardData: CardProps[] = [
  {
    productImg: testImg,
    name: "Responsive Mobile APP",
    category: "Site Template",
    description: "Pimply dummy text of the printing and typesetting industry.",
    price: 190,
    authorAvatar: "/user.png",
    authorName: "Micrsoft",
    rating: 3,
  },
  {
    productImg: testImg,
    name: "Aesponsive Mobile APP",
    category: "WordPress",
    description: "Pimply dummy text of the printing and typesetting industry.",
    price: 250,
    authorAvatar: "/user.png",
    authorName: "Micrsoft",
    rating: 3,
  },
  {
    productImg: testImg,
    name: "Cartoon Face",
    category: "Illsatration",
    description: "Pimply dummy text of the printing and typesetting industry.",
    price: 100,
    authorAvatar: "/user.png",
    authorName: "Micrsoft",
    rating: 3,
  },
  {
    productImg: testImg,
    name: "Cartoon Face1",
    category: "WordPress",
    description: "Pimply dummy text of the printing and typesetting industry.",
    price: 110,
    authorAvatar: "/user.png",
    authorName: "Micrsoft",
    rating: 3,
  },
];

const sortedFields = [
  { sortField: "name", textFiled: "Sort by: Name" },
  { sortField: "price", textFiled: "Sort by: Price" },
];

export const FilterContainer: FC = () => {
  const [activeCategory, setActiveCategory] = useState("");
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
              <button
                className={styles.btn}
                type="button"
                onClick={sortByRangePrice}
              >
                <FontAwesomeIcon icon={faSearch} />
                Search
              </button>
            </div>
            <div className={cn("aside-box", styles.asideBox, styles.sellers)}>
              <div className="aside-title">Top 10 Sellers</div>
              {cardData.map((card, index) => {
                return (
                  <Card
                    key={index}
                    productImg={card.productImg}
                    name={card.name}
                    category={card.category}
                    price={card.price}
                    authorAvatar={card.authorAvatar}
                    authorName={card.authorName}
                    rating={card.rating}
                    type="mini"
                  />
                );
              })}
              <button className={styles.btn} type="button">
                View All
              </button>
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
                      [styles.itemActive]: view == "mini",
                    })}
                    onClick={() => setView("mini")}
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
                [styles.miniView]: view == "mini",
                [styles.horizontalView]: view == "horizontal",
              })}
            >
              {products.map((card, index) => {
                return (
                  <Card
                    key={index}
                    productImg={card.productImg}
                    name={card.name}
                    category={card.category}
                    price={card.price}
                    description={card.description}
                    authorAvatar={card.authorAvatar}
                    authorName={card.authorName}
                    rating={card.rating}
                    type={view}
                    className={styles.test}
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
