import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { FC, useState, MouseEvent } from "react";
import styles from "./FilterMenu.module.scss";
import { FilterMenuProps } from "./FilterMenu.props";

export const FilterMenu: FC<FilterMenuProps> = ({
  selectedIndex,
  setSelectedIndex,
  menuItems,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav" className={styles.wrapper}>
        <ListItem onClick={handleClickListItem} className={styles.listItem}>
          <ListItemText
            secondary={menuItems[selectedIndex].textFiled}
            classes={{ secondary: styles.listItemText }}
          />
          <FontAwesomeIcon icon={faSort} className={styles.icon} />
        </ListItem>
      </List>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={item.sortField}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {item.textFiled}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
