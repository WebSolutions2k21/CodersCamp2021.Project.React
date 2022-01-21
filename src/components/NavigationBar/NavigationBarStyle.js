import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    background: '#ffffff',
    color: '#16bac6'   
  },
  img: {
    maxHeight: '4rem',
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