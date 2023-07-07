"use client";

import { FC, useState } from "react";
import styles from "./Menu.module.scss";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import ROUTES from "@/routes/routes";
import { usePathname, useSearchParams } from "next/navigation";

import cn from "classnames";

const menuList: string[] = [
  "Home",
  "About",
  "WordPress",
  "Joomla",
  "PSD",
  "Plugins",
  "Components",
  "Contact",
];

export const Menu: FC = () => {
  const [open, setIsOpen] = useState<boolean>(false);

  const pathName = usePathname();
  const params = useSearchParams();

  const renderMenulist = () => (
    <Box role="button" className={styles.box}>
      <div onClick={() => setIsOpen(!open)} className={styles.closeMenuBtn} />
      <List>
        <ListItem key="Home" disablePadding>
          <ListItemButton>
            <Link
              href={ROUTES.main.createRoute()}
              className={cn({ [styles.activeLink]: pathName == "/" })}
            >
              Home
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="About" disablePadding>
          <ListItemButton>
            <Link
              href={ROUTES.about.createRoute()}
              className={cn({ [styles.activeLink]: pathName == "/about" })}
            >
              About
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="WordPress" disablePadding>
          <ListItemButton>
            <Link
              href={{
                pathname: ROUTES.products.createRoute(),
                query: { category: "WordPress" },
              }}
              className={cn(styles.link, {
                [styles.activeLink]: params.get("category") == "WordPress",
              })}
            >
              WordPress
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="Home" disablePadding>
          <ListItemButton>
            <Link
              className={cn({
                [styles.activeLink]: params.get("category") == "Joomla",
              })}
              href={{
                pathname: ROUTES.products.createRoute(),
                query: { category: "Joomla" },
              }}
            >
              Joomla
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="Home" disablePadding>
          <ListItemButton>
            <Link
              className={cn({
                [styles.activeLink]: params.get("category") == "PSD",
              })}
              href={{
                pathname: ROUTES.products.createRoute(),
                query: { category: "PSD" },
              }}
            >
              PSD
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="Home" disablePadding>
          <ListItemButton>
            <Link
              className={cn({
                [styles.activeLink]: params.get("category") == "Plugins",
              })}
              href={{
                pathname: ROUTES.products.createRoute(),
                query: { category: "Plugins" },
              }}
            >
              Plugins
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="Home" disablePadding>
          <ListItemButton>
            <Link
              className={cn({
                [styles.activeLink]: params.get("category") == "Components",
              })}
              href={{
                pathname: ROUTES.products.createRoute(),
                query: { category: "Components" },
              }}
            >
              Components
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key="Home" disablePadding>
          <ListItemButton>
            <Link
              href={ROUTES.contact.createRoute()}
              className={cn({
                [styles.activeLink]: pathName == "/contact",
              })}
            >
              Contact
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <div className={styles.openMenuBtn}>
        <div
          className={styles.openMenuBtnInner}
          onClick={() => setIsOpen(!open)}
        />
      </div>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setIsOpen(!open)}
        PaperProps={{
          sx: {
            backgroundColor: "#263238",
          },
        }}
      >
        {renderMenulist()}
      </Drawer>
    </>
  );
};
