import { FC } from "react";
import styles from "./ContactContainer.module.scss";
import { BreadCrumbs, Button } from "@/components";
import { Map } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const ContactContainer: FC = () => {
  return (
    <section className={styles.contact}>
      <div className="container">
        <BreadCrumbs />
        <div className="inner-container">
          <h2 className="inner-title">Contact With Us</h2>
          <div className={styles.inner}>
            <Map coordinate={[-37.818244, 144.957032]} />
            <div className={styles.wrapper}>
              <div className={styles.infoBox}>
                <div className={styles.infoItem}>
                  <div className={styles.infoItemTitle}>Our Office Address</div>
                  <div className={styles.infoItemText}>
                    PO Box 16122 Collins Street West Victoria 8007 Australia
                  </div>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className={styles.infoIcon}
                  />
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoItemTitle}>Phone</div>
                  <a href="tel:61383766284" className={styles.infoItemText}>
                    +61 3 8376 6284
                  </a>
                  <FontAwesomeIcon icon={faPhone} className={styles.infoIcon} />
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoItemTitle}>E-mail</div>
                  <div className={styles.infoItemText}>info@foxtar.com</div>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={styles.infoIcon}
                  />
                </div>
              </div>
              <form className={styles.form}>
                <div className={styles.formTitle}>Drop Us A Message </div>
                <div className={styles.formRow}>
                  <input
                    type="text"
                    className="basic-input"
                    placeholder="Name*"
                  />
                  <input
                    type="text"
                    className="basic-input"
                    placeholder="E-mail*"
                  />
                </div>
                <textarea
                  className="basic-textarea"
                  placeholder="Message*"
                ></textarea>
                <Button
                  text="Send Message"
                  type="submit"
                  className={styles.btn}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
