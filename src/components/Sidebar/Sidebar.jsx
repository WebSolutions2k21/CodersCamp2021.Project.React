import { Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';

import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { useStyles } from './SidebarStyle';
import { iconCat, iconCalender, iconPen } from '../../assets/icons';

export const Sidebar = () => {
  const classes = useStyles();
  const location = useLocation();

  function ListItemLink(props) {
    const { icon, primary, to } = props;

    const renderLink = React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />);

    return (
      <li className={location.pathname === to ? classes.activetext : null}>
        <ListItem button component={renderLink}>
          {icon ? <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
        <Divider variant="inset" />
      </li>
    );
  }

  const userMenuItems = [
    {
      text: 'My Visits',
      icon: iconCalender(),
      path: '/myvisits',
    },
    {
      text: 'My Pets',
      icon: iconCat(),
      path: '/mypets',
    },
    {
      text: 'Edit Profile',
      icon: iconPen(),
      path: '/edit-profile',
    },
    {
      text: 'Sign Out',
      icon: '.',
      path: '/',
    },
  ];

  return (
    <>
      <Box component="aside" className={classes.drawer}>
        <List className={classes.list}>
          {userMenuItems.map((item) => (
            <ListItemLink key={item.text} to={item.path} primary={item.text} icon={item.icon} />
          ))}
        </List>
      </Box>
    </>
  );
};