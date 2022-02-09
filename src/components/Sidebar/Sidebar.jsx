import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from '@mui/material';

import React, { useContext } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { useStyles } from './SidebarStyle';
import { iconCat, iconCalender, iconPen } from '../../assets/icons';
import { paths } from '../../config/paths';
import { AppContext } from '../../context/AppContext';

export const Sidebar = () => {
  const classes = useStyles();
  const location = useLocation();

  const { iconColor, setIconColor, isAdmin } = useContext(AppContext);

  const handleChange = (event, newValue) => {
    setIconColor(newValue);
  };

  function ListItemLink({ icon, primary, to }) {
    const renderLink = React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />);

    return (
      <li className={location.pathname === to ? classes.activetext : classes.notactivetext}>
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
      path: paths.myVisits,
    },
    {
      text: 'My Pets',
      icon: iconCat(),
      path: paths.myPets,
    },
    {
      text: 'My Profile',
      icon: iconPen(),
      path: paths.editProfile,
    },
  ];
  const doctorMenuItems = [
    {
      text: 'My Visits',
      icon: iconCalender(),
      path: paths.doctorVisit,
    },
    {
      text: 'My Profile',
      icon: iconPen(),
      path: paths.editProfile,
    },
  ];

  return (
    <>
      <>
        <Box
          component="aside"
          value={iconColor}
          className={classes.drawer}
          sx={{ display: { xs: 'none', md: 'block' }, zIndex: 1000 }}
        >
          <List className={classes.list}>
            {!isAdmin === true
              ? userMenuItems.map((item) => (
                  <ListItemLink key={item.text} to={item.path} primary={item.text} icon={item.icon} />
                ))
              : doctorMenuItems.map((item) => (
                  <ListItemLink key={item.text} to={item.path} primary={item.text} icon={item.icon} />
                ))}
          </List>
        </Box>
      </>
      <Paper
        component="aside"
        sx={{ display: { xs: 'block', md: 'none' }, position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }}
      >
        <BottomNavigation showLabels value={iconColor} onChange={handleChange}>
          {!isAdmin === true
            ? userMenuItems.map((item) => (
                <BottomNavigationAction
                  component={RouterLink}
                  key={item.text}
                  to={item.path}
                  label={item.text}
                  icon={item.icon}
                />
              ))
            : doctorMenuItems.map((item) => (
                <BottomNavigationAction
                  component={RouterLink}
                  key={item.text}
                  to={item.path}
                  label={item.text}
                  icon={item.icon}
                />
              ))}
        </BottomNavigation>
      </Paper>
    </>
  );
};
