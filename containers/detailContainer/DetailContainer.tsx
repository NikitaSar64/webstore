"use client";

import { FC } from "react";
import styles from "./DetailContainer.module.scss";
import Image from "next/image";
import { AuthorCard, Select, BreadCrumbs, Title } from "@/components";
import { CardMini, Tabs } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

import cn from "classnames";
import { MenuItem } from "@mui/material";

const data = [
  {
    name: "Grand Ballet - Dance",
    category: "PSD Template",
    price: 12,
    img: "/mini.png",
  },
];

export const DetailContainer: FC = () => {
  return (
    <section className={styles.detailContainer}>
      <div className="container">
        <BreadCrumbs />
        <div className={styles.detail}>
          <div className={styles.detailContent}>
            <div className={styles.imgWrapper}>
              <div className={styles.img}>
                <Image
                  src="/details.png"
                  fill
                  alt="product-img"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <Title
              tag="h4"
              className={styles.title}
              text="GTBuilder - Construction & Building WordPress Theme"
            />
            <p className={styles.text}>
              Bmply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived noning
              essentially unchanged.
            </p>
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
              <div className={styles.moreTitle}>More Product by PsdBosS</div>
              <div className={styles.moreProducts}>
                <CardMini data={data[0]} />
                <CardMini data={data[0]} />
                <CardMini data={data[0]} />
                <CardMini data={data[0]} />
                <CardMini data={data[0]} />
                <CardMini data={data[0]} />
              </div>
            </div>
          </div>
          <div className={styles.detailAside}>
            <div className="aside-box">
              <div className="aside-title">Product Price</div>
              <div className={styles.asidePrice}>
                <span>59</span>
                <Select className={styles.select}>
                  <option value={"Regular"}>Regular</option>
                  <option value={"Premium"}>Premium</option>
                </Select>
              </div>
              <button className={cn(styles.asideBtn, styles.cart)}>
                <FontAwesomeIcon icon={faCartShopping} />
                Add To Cart
              </button>
              <button className={cn(styles.asideBtn, styles.favourites)}>
                <FontAwesomeIcon icon={faHeart} />
                Add To Favourites
              </button>
              <button className={styles.asideBtn}>Buy Now</button>
            </div>
            <AuthorCard title="Product Author" />
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
