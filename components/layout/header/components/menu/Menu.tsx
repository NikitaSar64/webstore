"use client";

import { FC, useState } from "react";
import styles from "./Menu.module.scss";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Drawer from "@mui/material/Drawer";

const menuList: string[] = [
  "Home",
  "About",
  "WordPress",
  "Joomla",
  "PSD",
  "Plugins",
  "Components",
  "Pages",
  "Contact",
  "Help",
];

export const Menu: FC = () => {
  const [open, setIsOpen] = useState<boolean>(false);

  const renderMenulist = () => (
    <Box role="button" className={styles.box}>
      <div onClick={() => setIsOpen(!open)} className={styles.closeMenuBtn} />
      <List>
        {menuList.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
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
