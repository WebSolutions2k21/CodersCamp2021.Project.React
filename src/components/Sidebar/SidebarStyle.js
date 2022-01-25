import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    borderRight: '2px solid #EFF0F4 ',
  },

  activetext: {
    color: '#16bac6',
  },

  list: {
    color: '#112025',
    fontFamily: 'Ubuntu, sans-serif',
  },
  icon: {
    color: 'red',
  },
});
