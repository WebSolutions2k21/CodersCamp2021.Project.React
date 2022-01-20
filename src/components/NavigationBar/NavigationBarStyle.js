import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    background: '#ffffff',
    border: 0,
    borderRadius: 3,
    color: '#16bac6',
    minHeight: '10vh',
  },
  img: {
    maxHeight: '10vh',
  },

  imgIcon: {
    transform: 'scale(0.9)',
    opacity: '0.3',
  },

  icon: {
    width: '2rem',
    height: '2rem',
    '&:hover': {
      color: '#16bac6 ',
    },
  },
});
