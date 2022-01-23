import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    boxSizing: 'border-box',
    marginLeft: 40,
  },
  root: {
    fontFamily: '"Ubuntu", sans-serif',
    textTransform: 'capitalize',
    color: '#112025',
    fontSize: '1rem',
  },
  activetext: {
    color: '#16bac6',
  },

  icon: {
    color: '#16bac6',
  },
});
