import { Typography, CardContent, Card, Grid, Box } from '@mui/material';
import { useStyles } from './MyPetCardStyle';
import { ReactComponent as Dog } from '../../assets/dog.svg';

export const MyPetCard = ({ name, type, breed, age }) => {
  const classes = useStyles();

  return (
    <Box sx={{ borderRadius: 3, boxShadow: '2px 2px 10px #33333333', padding: '15px', background: 'white' }}>
      <Typography className={classes.title} alignItems="center" color="#16bac6" variant="h5">
        <Dog className={classes.ico} />
        {name}
      </Typography>
      <Grid>
        <Typography className={classes.pos} display="inline">
          Type:{' '}
        </Typography>
        <Typography color="textSecondary" className={classes.small} display="inline">
          {type}
        </Typography>
      </Grid>
      <Grid>
        <Typography className={classes.pos} display="inline">
          Breed:{' '}
        </Typography>
        <Typography display="inline" color="textSecondary" className={classes.small}>
          {breed}
        </Typography>
      </Grid>
      <Grid>
        <Typography className={classes.pos} display="inline">
          Birth Data:{' '}
        </Typography>
        <Typography color="textSecondary" className={classes.small} display="inline">
          {age.toString()}
        </Typography>
      </Grid>
    </Box>
  );
};
