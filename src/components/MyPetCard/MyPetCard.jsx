import { Typography, Grid, Box } from '@mui/material';
import { useStyles } from './MyPetCardStyle';

import { ReactComponent as Dog } from '../../assets/dog.svg';
import { db } from '../../config/firebase';
import { CustomButton } from '../Button';

export const MyPetCard = ({ name, type, breed, age, deleteAction }) => {
  const classes = useStyles();

  const deletePet = (id) => {
    db.collection('pets').doc(id).delete();
  };

  return (
    <Box
      data-testid="my-pet-form"
      sx={{ borderRadius: 3, boxShadow: '2px 2px 10px #33333333', padding: '15px', background: 'white' }}
    >
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
      <Grid marginTop="1rem">
        <CustomButton aria-label="delete" color="textInfo" clickAction={() => deletePet(deleteAction)} text="Delete" />
      </Grid>
    </Box>
  );
};
