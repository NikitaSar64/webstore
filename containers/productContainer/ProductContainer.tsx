"use client";

import { FC, useEffect, useState } from "react";

import { Card, Title, Button } from "@/components";

import styles from "./ProductContainer.module.scss";

import cn from "classnames";

import responsiveImg from "@assets/responsive.png";
import appleImg from "@assets/apple.png";
import wpImg from "@assets/wp.png";
import imacImg from "@assets/imac.png";
import gymedgeImg from "@assets/gymedge.png";
import postgridImg from "@assets/postgrid.png";
import dollfaceImg from "@assets/dollface.png";
import designImg from "@assets/design.png";

import { CardProps } from "@/components/card/Card.props";

export const cardData: CardProps["cardData"][] = [
  {
    id: 1,
    productImg: responsiveImg,
    name: "Responsive Mobile APP",
    category: "Site Template",
    description: "Pimply dummy text of the printing and typesetting industry.",
    price: 190,
    authorAvatar: "/avatar1.png",
    authorName: "Radiustheme",
    rating: 5,
  },
  {
    id: 2,
    productImg: appleImg,
    name: "The Post Grid Pro",
    category: "WordPress",
    description: "Pimply dummy text of the printing and typesetting industry.",
    price: 150,
    authorAvatar: "/avatar2.png",
    authorName: "PsdBosS",
    rating: 5,
  },
  {
    id: 3,
    productImg: wpImg,
    name: "Food Menu",
    category: "WordPress",
    description: "Pimply dummy text of the printing and typesetting industry.",
    price: 200,
    authorAvatar: "/avatar3.png",
    authorName: "Manilip",
    rating: 4,
  },
  {
    id: 4,
    productImg: imacImg,
    name: "Imac Mockup",
    category: "PSD",
    description: "Pimply dummy text of the printing and typesetting industry.",
    price: 120,
    authorAvatar: "/avatar4.png",
    authorName: "Lolypop",
    rating: 5,
  },
  {
    id: 5,
    productImg: gymedgeImg,
    name: "Gymedge",
    category: "Joomla",
    description: "Pimply dummy text of the printing and typesetting industry.",
    price: 450,
    authorAvatar: "/avatar5.png",
    authorName: "Micrsoft",
    rating: 5,
  },
  {
    id: 6,
    productImg: postgridImg,
    name: "The Post Grid Pro",
    category: "WordPress",
    description: "Pimply dummy text of the printing and typesetting industry.",
    price: 190,
    authorAvatar: "/avatar6.png",
    authorName: "Raklouse",
    rating: 3,
  },
  {
    id: 7,
    productImg: dollfaceImg,
    name: "Doll Face",
    category: "Illsatration",
    description: "Pimply dummy text of the printing and typesetting industry.",
    price: 100,
    authorAvatar: "/avatar7.png",
    authorName: "Mikc Art",
    rating: 3,
  },
  {
    id: 8,
    productImg: designImg,
    name: "Designer Mockup",
    category: "PSD",
    description: "Pimply dummy text of the printing and typesetting industry.",
    price: 100,
    authorAvatar: "/avatar1.png",
    authorName: "ThemeLol",
    rating: 5,
  },
];

const categoriesData = [
  "All",
  "WordPress",
  "Joomla",
  "Plugins",
  "Component",
  "PSD",
];

export const ProductContainer: FC = (): JSX.Element => {
  const [category, setCategory] = useState("All");
  const [products, setProducts] = useState(cardData);

  useEffect(() => {
    if (category == "All") {
      setProducts([...cardData]);
    } else {
      setProducts(
        [...cardData].filter((product) => product.category == category)
      );
    }
  }, [category]);

  return (
    <section className={styles.product}>
      <div className="container-fluid">
        <Title
          className={styles.productTitle}
          tag="h2"
          text="Let’s Check Out Our Newest Release Prodcuts"
        />
        <div className={styles.btnsWrapper}>
          {categoriesData.map((categoryItem) => (
            <Button
              key={categoryItem}
              onClick={() => setCategory(categoryItem)}
              text={categoryItem}
              className={cn(styles.btn, {
                [styles.activeBtn]: category == categoryItem,
              })}
            />
          ))}
        </div>
        <div className="wrapper">
          <div className={styles.products}>
            {products.map((card, index) => (
              <Card key={index} cardData={card} className={styles.card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
