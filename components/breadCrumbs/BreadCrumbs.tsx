"use client";

import { FC } from "react";

import styles from "./BreadCrumbs.module.scss";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

export const BreadCrumbs: FC = () => {
  const pageName =
    usePathname()[1].toUpperCase() +
    usePathname().slice(2, usePathname().length);

  return (
    <Breadcrumbs aria-label="breadcrumb" className={styles.breadCrumbs}>
      <Link underline="hover" href="/">
        Home
      </Link>
      <Typography className={styles.page}>{pageName} Page</Typography>
    </Breadcrumbs>
  );
};
