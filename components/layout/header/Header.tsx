import { FC } from "react";
import { Logo } from "@components/index";
import { Button } from "./ui/button/Button";

import styles from './Header.module.scss';

export const Header: FC = () => {
    return (
        <header>
            <div className={styles.headerTop}>
                <div className="container">
                    <div className={styles.headerTopWrapper}>
                        <Logo/>
                        <div className={styles.text}>
                            <a href="#">Need help?</a>
                            Talk to an expert: 
                            <a href="tel:+61383766284">+61 3 8376 6284</a>
                        </div>
                        <Button text="Login" className={styles.login}/>
                        <Button text="Register" className={styles.register}/>
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
    )
}