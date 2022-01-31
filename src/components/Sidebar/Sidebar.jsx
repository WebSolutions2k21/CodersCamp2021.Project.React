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

import React from 'react';
import { Link, Link as RouterLink, useLocation } from 'react-router-dom';

import { useStyles } from './SidebarStyle';
import { iconCat, iconCalender, iconPen } from '../../assets/icons';
import { paths } from '../../config/paths';

export const Sidebar = () => {
  const classes = useStyles();
  const location = useLocation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
  // function BottomNavigationItemLink(props) {
  //   const { icon, primary, to } = props;

  //   const renderLink = React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />);

  //   return (
  //     <BottomNavigation className={location.pathname === to ? classes.activetext : null}>
  //       <ListItem button component={renderLink}>
  //         {icon ? <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon> : null}
  //         <ListItemText primary={primary} />
  //       </ListItem>
  //       <Divider variant="inset" />
  //     </Bo>
  //   );
  // }

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
      text: 'Edit Profile',
      icon: iconPen(),
      path: paths.editProfile,
    },
  ];

  return (
    <>
      <Box component="aside" className={classes.drawer} sx={{ display: { xs: 'none', md: 'block' } }}>
        <List className={classes.list}>
          {userMenuItems.map((item) => (
            <ListItemLink key={item.text} to={item.path} primary={item.text} icon={item.icon} />
          ))}
        </List>
      </Box>
      <Paper
        component="aside"
        sx={{ display: { xs: 'block', md: 'none' }, position: 'fixed', bottom: 0, left: 0, right: 0 }}
      >
        <BottomNavigation showLabels value={value} onChange={handleChange}>
          {userMenuItems.map((item) => (
            <BottomNavigationAction
              component={Link}
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
