import { FC } from "react";
import { Logo } from "@components/index";
import { Button, Notification } from "./ui";

import styles from "./Header.module.scss";
import { User } from "./components";

import userImg from "@assets/user.png";

export const Header: FC = (): JSX.Element => {
  return (
    <header>
      <div className={styles.headerTop}>
        <div className="container">
          <div className={styles.headerTopWrapper}>
            <Logo />
            <div className={styles.text}>
              <a href="#">Need help?</a>
              Talk to an expert:
              <a href="tel:+61383766284">+61 3 8376 6284</a>
            </div>
            <div className={styles.notification}>
              <Notification type="notification" count={8} />
              <Notification type="message" count={5} />
              <Notification type="basket" count={3} />
            </div>
            <User name="Mike Hussy" img={userImg} balance={100} />
            <Button text="Login" className={styles.login} />
            <Button text="Register" className={styles.register} />
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
    </header>
  );
};
