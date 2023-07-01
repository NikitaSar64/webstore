import { FC } from "react";

import styles from "./Footer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import cn from "classnames";

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
                <li>Home</li>
                <li>Forums</li>
                <li>Become an Author</li>
                <li>Community Meetups</li>
                <li>Become an Affiliate</li>
              </ul>
            </div>
            <div className={styles.columnMenu}>
              <div className={styles.columnTitle}>Need Help?</div>
              <ul className={styles.columnList}>
                <li>Help Center</li>
                <li>Foxtar Market Terms</li>
                <li>Author Terms</li>
                <li>Foxtar Licenses</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className={styles.column}>
              <div className={styles.columnTitle}>Follow Us On</div>
              <ul className={cn("social", styles.social)}>
                <li className="facebook"></li>
                <li className="linkedIn"></li>
                <li className="youTube"></li>
                <li className="pinterest"></li>
                <li className="twitter"></li>
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
