import styles from "./AuthorContainer.module.scss";

export const AuthorContainer = () => {
  return (
    <section className={styles.author}>
      <div className={styles.authorBox}>
        <h5 className={styles.title}>
          Over <span>20,000</span> Author Are Involved Here!
        </h5>
        <div className={styles.link}>Become A Author</div>
      </div>
    </section>
  );
};
