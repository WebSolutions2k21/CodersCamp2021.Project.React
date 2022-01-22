import Drawer from '@mui/material/Drawer';
// import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStyles } from './SidebarStyle';
import { iconCat, iconCalender, iconPen } from '../../assets/icons';
import { Box, Toolbar, Container } from '@mui/material';
import Theme from '../../styles/themes/Theme';

export const Sidebar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const userMenuItems = [
    {
      text: 'My Pets',
      icon: iconCat(),
      path: '/mypets',
    },
    {
      text: 'My Visits',
      icon: iconCalender(),
      path: '/myvisits',
    },
    {
      text: 'Edit Profile',
      icon: iconPen(),
      path: '/edit-profile',
    },
  ];

  return (
    <Theme>
      <Drawer className={classes.drawer} variant="permanent" anchor="left" classes={{ paper: classes.drawerPaper }}>
        <Container maxWidth="xl">
          <Toolbar />
          <Box>
            <List>
              {userMenuItems.map((item) => (
                <ListItem button key={item.text} onClick={() => navigate(item.path)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    className={location.pathname === item.path ? classes.activetext : ''}
                    primary={item.text}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
      </Drawer>
    </Theme>
  );
};
