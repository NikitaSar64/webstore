"use client";

import { FC } from "react";
import styles from "./DetailContainer.module.scss";
import Image from "next/image";
import { AuthorCard, Select, BreadCrumbs, Title, Button } from "@/components";
import { CardMini, Tabs } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import cn from "classnames";
import { usePathname } from "next/navigation";

import { cardData } from "../productContainer/ProductContainer";

const data = [
  {
    name: "Grand Ballet - Dance",
    category: "PSD Template",
    price: 12,
    img: "/mini1.png",
  },
  {
    name: "Grand Ballet - Dance",
    category: "PSD Template",
    price: 59,
    img: "/mini2.png",
  },
  {
    name: "Grand Ballet - Dance",
    category: "PSD Template",
    price: 48,
    img: "/mini3.png",
  },
  {
    name: "Grand Ballet - Dance",
    category: "PSD Template",
    price: 18,
    img: "/mini4.png",
  },
  {
    name: "Grand Ballet - Dance",
    category: "PSD Template",
    price: 29,
    img: "/mini5.png",
  },
  {
    name: "Grand Ballet - Dance",
    category: "PSD Template",
    price: 18,
    img: "/mini6.png",
  },
];

export const DetailContainer: FC = () => {
  const [id] = usePathname().split("/").slice(-1);
  const product = cardData[+id - 1];

  return (
    <section className={styles.detailContainer}>
      <div className="container">
        <BreadCrumbs />
        <div className={styles.detail}>
          <div className={styles.detailContent}>
            <div className={styles.imgWrapper}>
              <div className={styles.img}>
                <Image
                  src={product.productImg}
                  fill
                  alt="product-img"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <Title tag="h4" className={styles.title} text={product.name} />
            <p className={styles.text}>{product.description}</p>
            <div className={styles.box}>
              <div className={styles.links}>
                <a className={styles.link} href="#">
                  Live Preview
                </a>
                <a className={styles.link} href="#">
                  Screenshots
                </a>
                <a className={styles.link} href="#">
                  Documentation
                </a>
              </div>
              <div className={styles.socials}>
                <a className={styles.facebook} href="#"></a>
                <a className={styles.twitter} href="#"></a>
                <a className={styles.linkedin} href="#"></a>
                <a className={styles.pinterest} href="#"></a>
              </div>
            </div>
            <Tabs />
            <div className={styles.more}>
              <div className={styles.moreTitle}>
                More Product by {product.authorName}
              </div>
              <div className={styles.moreProducts}>
                {data.map((card, index) => (
                  <CardMini key={index} data={card} />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.detailAside}>
            <div className="aside-box">
              <div className="aside-title">Product Price</div>
              <div className={styles.asidePrice}>
                <span>{product.price} $</span>
                <Select className={styles.select}>
                  <option value={"Regular"}>Regular</option>
                  <option value={"Premium"}>Premium</option>
                </Select>
              </div>
              <Button
                text="Add To Cart"
                type="button"
                className={cn(styles.asideBtn, styles.cart)}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </Button>
              <Button
                text="Add To Favourites"
                type="button"
                className={cn(styles.asideBtn, styles.favourites)}
              >
                <FontAwesomeIcon icon={faHeart} />
              </Button>
              <Button
                text="Buy Now"
                type="button"
                className={cn(styles.asideBtn, styles.buy)}
              />
            </div>
            <AuthorCard
              userId={product.id}
              title="Product Author"
              avatar={product.authorAvatar}
              name={product.authorName}
            />
            <div className="aside-box">
              <div className={styles.sales}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  fontSize={20}
                  color="gray"
                />
                <span className={styles.salesCount}>05</span>
                <span className={styles.salesText}>Sales</span>
              </div>
            </div>
            <div className="aside-box">
              <div className="aside-title">Product Information</div>
              <div className={styles.informationLine}>
                <span>Released On:</span> 1 January, 2016
              </div>
              <div className={styles.informationLine}>
                <span>Last Update:</span> 20 April, 2016
              </div>
              <div className={styles.informationLine}>
                <span>Download:</span> 613
              </div>
              <div className={styles.informationLine}>
                <span>Version:</span> 1.1
              </div>
              <div className={styles.informationLine}>
                <span>Compatibility:</span> Wordpress 4+
              </div>
              <div className={styles.informationLine}>
                <span>Compatible Browsers:</span> IE9, IE10, IE11, Firefox,
                Safari, Opera, Chrome
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
