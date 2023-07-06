import { FC } from "react";

import styles from "./Footer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import cn from "classnames";
import ROUTES from "@/routes/routes";
import Link from "next/link";

export const Footer: FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.column}>
              <div className={styles.columnTitle}>About Company</div>
              <p className={styles.columnText}>
                Praesent vel rutrum purus. Nam vel dui eu risus duis dignissim
                digniSuspen disse.Fusce sit amet urna iat.Praesent vel rutrum
                purus.
              </p>
              <div className={styles.info}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className={styles.fontIcon}
                />
                <div>
                  PO Box 16122 Collins Street West Victoria 8007 Australia
                </div>
              </div>
              <a className={styles.info} href="tel:+61383766284">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className={styles.fontIcon}
                />
                <div>+ 61 3 8376 6284</div>
              </a>
            </div>
            <div className={styles.columnMenu}>
              <div className={styles.columnTitle}>Join Our Community</div>
              <ul className={styles.columnList}>
                <li>
                  <Link href={ROUTES.main.createRoute()}>Home</Link>
                </li>
                <li>
                  <Link href="#">Forums</Link>
                </li>
                <li>
                  <Link href="#">Become an Author</Link>
                </li>
                <li>
                  <Link href="#">Community Meetups</Link>
                </li>
                <li>
                  <Link href="#">Become an Affiliate</Link>
                </li>
              </ul>
            </div>
            <div className={styles.columnMenu}>
              <div className={styles.columnTitle}>Need Help?</div>
              <ul className={styles.columnList}>
                <li>
                  <Link href="#">Help Center</Link>
                </li>
                <li>
                  <Link href="#">Foxtar Market Terms</Link>
                </li>
                <li>
                  <Link href="#">Author Terms</Link>
                </li>
                <li>
                  <Link href="#">Foxtar Licenses</Link>
                </li>
                <li>
                  <Link href={ROUTES.contact.createRoute()}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <div className={styles.columnTitle}>Follow Us On</div>
              <ul className={cn("social", styles.social)}>
                <li className="facebook">
                  <Link href="#" />
                </li>
                <li className="linkedIn">
                  <Link href="#" />
                </li>
                <li className="youTube">
                  <Link href="#" />
                </li>
                <li className="pinterest">
                  <Link href="#" />
                </li>
                <li className="twitter">
                  <Link href="#" />
                </li>
              </ul>
              <div className={styles.formTitle}>Newsletter Sign Up!</div>
              <form action="#" className={styles.form}>
                <input type="text" placeholder="E-mail Address" />
                <button type="submit"></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <div className="container">
          <p className={styles.copyText}>
            © 2017 Foxtar market place. Trademarks and brands are the property
            of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};
