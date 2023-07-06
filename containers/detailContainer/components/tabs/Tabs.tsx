"use client";

import { FC, useState } from "react";
import styles from "./Tabs.module.scss";
import { TabsProps, TabPanelProps } from "./Tabs.props";
import { ThemeProvider } from "@mui/material/styles";

import { colorsTheme } from "./colors.theme";

import { Box, Tab, Tabs as TabsMU, useMediaQuery } from "@mui/material";

const featuresData = [
  "Printing and typesetting industry",
  "Bhen an unknown printe",
  "Handard dummy text",
  "Desktop publishing software",
  "Bhen an unknown printe",
  "Printing and typesetting industry",
  "Bhen an unknown printe",
  "Handard dummy text",
];

const TabPanel: FC<TabPanelProps> = ({ children, index, value }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box className={styles.tabPanelBox}>{children}</Box>}
    </div>
  );
};

export const Tabs: FC<TabsProps> = () => {
  const [value, setValue] = useState(0);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={colorsTheme}>
      <Box sx={{ width: "100%" }}>
        <Box className={styles.tabsBox}>
          <TabsMU
            className={styles.tabs}
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="secondary"
            orientation={isMobile ? "vertical" : "horizontal"}
          >
            <Tab label="Item Features" className={styles.tab} />
            <Tab label="Comments" className={styles.tab} />
            <Tab label="Reviews" className={styles.tab} />
            <Tab label="Support" className={styles.tab} />
          </TabsMU>
        </Box>
        <TabPanel value={value} index={0}>
          <ul className={styles.featListItems}>
            {featuresData.map((feat, index) => (
              <li className={styles.featListItem} key={index}>
                {feat}
              </li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Comments
        </TabPanel>
        <TabPanel value={value} index={2}>
          Reviews
        </TabPanel>
        <TabPanel value={value} index={3}>
          Support
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
};
