import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    minWidth: 250,
  },

  title: {
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  ico: {
    width: '1.5rem',
    height: '1.5rem',
    padding: '0 10px'
  },

  pos: {
    color: '#112025',
    display: 'inline',
    textTransform: 'uppercase',
  },
});
