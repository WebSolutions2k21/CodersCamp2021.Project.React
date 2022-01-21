import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
      background: '#ffffff',
      border: 0,
      borderRadius: 3,
      color: '#16bac6',
    },
    img: {
      width: '4rem',
    },
  
    imgIcon: {
      transform: 'scale(0.7)',
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
  