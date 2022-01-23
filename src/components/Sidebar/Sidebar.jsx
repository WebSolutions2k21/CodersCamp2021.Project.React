import { Box, Toolbar, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';

import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { useStyles } from './SidebarStyle';
import { iconCat, iconCalender, iconPen } from '../../assets/icons';
import Theme from '../../styles/themes/Theme';

export const Sidebar = () => {
  const classes = useStyles();
  const location = useLocation();

  function ListItemLink(props) {
    const { icon, primary, to } = props;

    const renderLink = React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />);

    return (
      <li className={location.pathname === to ? classes.activetext : null}>
        <ListItem button component={renderLink}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
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
    <Theme>
      <Container maxWidth="xl">
        <Drawer className={classes.drawer} variant="permanent" anchor="left" classes={{ paper: classes.drawerPaper }}>
          <Toolbar />
          <Box>
            <List>
              {userMenuItems.map((item) => (
                <ListItemLink to={item.path} primary={item.text} icon={item.icon} />
              ))}
            </List>
          </Box>
        </Drawer>
      </Container>
    </Theme>
  );
};
