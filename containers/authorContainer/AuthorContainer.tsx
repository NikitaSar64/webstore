import Link from "next/link";
import styles from "./AuthorContainer.module.scss";

export const AuthorContainer = () => {
  return (
    <section className={styles.author}>
      <div className={styles.authorBox}>
        <h4 className={styles.title}>
          Over <span>20,000</span> Author Are Involved Here!
        </h4>
        <Link href="#" className={styles.link}>
          Become A Author
        </Link>
      </div>
    </section>
  );
};
