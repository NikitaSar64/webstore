"use client";

import { FC, useState } from "react";
import styles from "./VerticalTabs.module.scss";
import { Box, Tab, Tabs, ThemeProvider } from "@mui/material";
import { colorsTheme } from "@/containers/detailContainer/components/tabs/colors.theme";
import { TabPanelProps } from "./VerticalTabs.props";
import { AboutPage } from "../aboutPage/AboutPage";

const TabPanel: FC<TabPanelProps> = ({ children, index, value }) => {
  return (
    <div role="tabpanel" hidden={value !== index} className={styles.tabPanel}>
      {value === index && <>{children}</>}
    </div>
  );
};

export const VerticalTabs: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={colorsTheme}>
      <Box className={styles.tabsWrapper}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          className={styles.tabs}
          textColor="primary"
          indicatorColor="secondary"
        >
          <Tab label="About Me" className={styles.tab} />
          <Tab label="Products ( 10 )" className={styles.tab} />
          <Tab label="Message Box" className={styles.tab} />
          <Tab label="Customer Reviews ( 20 )" className={styles.tab} />
          <Tab label="Followers (100 )" className={styles.tab} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <AboutPage />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className={styles.page}>Products</div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className={styles.page}>Message Box</div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className={styles.page}>Customer Reviews</div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className={styles.page}>Followers</div>
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
};
