"use client";

import { FC, useState } from "react";
import { Auth, Logo, PopUp } from "@components/index";
import { Button, Notification } from "./ui";

import styles from "./Header.module.scss";
import { Menu, User } from "./components";

const testUser = {
  name: "Mike Hussy",
  img: "/user.png",
  balance: 100,
};

export const Header: FC = (): JSX.Element => {
  const [popUpActive, setPopUpActive] = useState<boolean>(false);

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
              <Notification type="basket" count={3} />
              <User userData={testUser} />
              <Button
                text="Login"
                className={styles.login}
                onClick={() => setPopUpActive(true)}
              />
              <Button text="Register" className={styles.register} />
              <Button text="Logout" className={styles.register} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerMenu}>
        <div className="container">
          <nav className={styles.menu}>
            <ul className={styles.menuList}>
              <li>Home</li>
              <li>About</li>
              <li>WordPress</li>
              <li>Joomla</li>
              <li>PSD</li>
              <li>Plugins</li>
              <li>Components</li>
              <li>Pages</li>
              <li>Contact</li>
              <li>Help</li>
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
