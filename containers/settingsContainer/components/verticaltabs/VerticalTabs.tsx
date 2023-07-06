"use client";

import { FC, useState } from "react";
import styles from "./VerticalTabs.module.scss";
import { Box, Tab, Tabs, ThemeProvider } from "@mui/material";
import { colorsTheme } from "@/containers/detailContainer/components/tabs/colors.theme";
import { TabPanelProps } from "./VerticalTabs.props";
import { ProfilePage } from "../profilePage/ProfilePage";

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
          <Tab label="Personal Information" className={styles.tab} />
          <Tab label="Profile" className={styles.tab} />
          <Tab label="Badges" className={styles.tab} />
          <Tab label="E-mail Settings" className={styles.tab} />
          <Tab label="Social Network" className={styles.tab} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ProfilePage title="Personal Information" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className={styles.page}>Profile</div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className={styles.page}>Badges</div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className={styles.page}>E-mail Settings</div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className={styles.page}>Social Network</div>
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
};
