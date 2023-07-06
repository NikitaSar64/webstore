"use client";

import { FC, useEffect, useState } from "react";
import { Auth, Logo, PopUp } from "@components/index";
import { Notification } from "./ui";
import { Button } from "@components/index";

import styles from "./Header.module.scss";
import { Menu, User } from "./components";

import cn from "classnames";
import Link from "next/link";
import ROUTES from "@/routes/routes";
import { usePathname, useSearchParams } from "next/navigation";
import { useBasketStore } from "@/store/store";

const testUser = {
  name: "Radiustheme",
  img: "/avatar1.png",
  balance: 100,
};

export const Header: FC = (): JSX.Element => {
  const [popUpActive, setPopUpActive] = useState<boolean>(false);
  const pathName = usePathname();
  const params = useSearchParams();

  const basket = useBasketStore((store) => store.basket);

  useEffect(() => {
    if (popUpActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [popUpActive]);

  return (
    <header>
      <div className={styles.headerTop}>
        <div className="container">
          <div className={styles.headerTopWrapper}>
            <div className={styles.box}>
              <Menu />
              <Logo className={styles.logo} />
            </div>
            <div className={styles.text}>
              <a href="#">Need help?</a>
              Talk to an expert:
              <a href="tel:+61383766284">+61 3 8376 6284</a>
            </div>
            <div className={styles.box}>
              <Notification type="notification" count={8} />
              <Notification type="message" count={5} />
              <Notification type="basket" count={basket.length} />
              <User userData={testUser} />
              {/* <Button
                text="Login"
                className={cn(styles.btn, styles.login)}
                onClick={() => setPopUpActive(true)}
              />
              <Button
                text="Register"
                className={cn(styles.btn, styles.register)}
              /> */}
              <Button
                text="Logout"
                className={cn(styles.btn, styles.register)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerMenu}>
        <div className="container">
          <nav className={styles.menu}>
            <ul className={styles.menuList}>
              <li>
                <Link
                  href={ROUTES.main.createRoute()}
                  className={cn({ [styles.activeLink]: pathName == "/" })}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.about.createRoute()}
                  className={cn({ [styles.activeLink]: pathName == "/about" })}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={cn({
                    [styles.activeLink]: params.get("category") == "WordPress",
                  })}
                  href={{
                    pathname: ROUTES.products.createRoute(),
                    query: { category: "WordPress" },
                  }}
                >
                  WordPress
                </Link>
              </li>
              <li>
                <Link
                  className={cn({
                    [styles.activeLink]: params.get("category") == "Joomla",
                  })}
                  href={{
                    pathname: ROUTES.products.createRoute(),
                    query: { category: "Joomla" },
                  }}
                >
                  Joomla
                </Link>
              </li>
              <li>
                <Link
                  className={cn({
                    [styles.activeLink]: params.get("category") == "PSD",
                  })}
                  href={{
                    pathname: ROUTES.products.createRoute(),
                    query: { category: "PSD" },
                  }}
                >
                  PSD
                </Link>
              </li>
              <li>
                <Link
                  className={cn({
                    [styles.activeLink]: params.get("category") == "Plugins",
                  })}
                  href={{
                    pathname: ROUTES.products.createRoute(),
                    query: { category: "Plugins" },
                  }}
                >
                  Plugins
                </Link>
              </li>
              <li>
                <Link
                  className={cn({
                    [styles.activeLink]: params.get("category") == "Components",
                  })}
                  href={{
                    pathname: ROUTES.products.createRoute(),
                    query: { category: "Components" },
                  }}
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.contact.createRoute()}
                  className={cn({
                    [styles.activeLink]: pathName == "/contact",
                  })}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <PopUp
        active={popUpActive}
        setActive={setPopUpActive}
        className={styles.authPopUp}
      >
        <Auth />
      </PopUp>
    </header>
  );
};
