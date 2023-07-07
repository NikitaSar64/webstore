import { FC } from "react";
import styles from "./ErrorContainer.module.scss";
import { BreadCrumbs } from "@/components";
import Link from "next/link";
import ROUTES from "@/routes/routes";

export const ErrorContainer: FC = () => {
  return (
    <section className={styles.error}>
      <div className="container">
        <BreadCrumbs />
        <div className={styles.inner}>
          <h2 className={styles.innerTitle}>Sorry Page Was Not Found</h2>
          <div className={styles.outher}>
            <div className={styles.outherStatus}>404</div>
            <h4 className={styles.outherTitle}>Sorry Page Was Not Found</h4>
            <p className={styles.outherText}>
              The page you are looking is not available or has been removed. Try
              going to Home Page by using the button below.
            </p>
            <Link
              href={ROUTES.main.createRoute()}
              className={styles.outherLink}
            >
              Go To Home Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
