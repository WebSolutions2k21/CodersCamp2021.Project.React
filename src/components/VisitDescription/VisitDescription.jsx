import { Box, Grid } from '@mui/material/';

import { useStyles } from './Style';


export const VisitDescription = ({ time, owner, pet, description }) => {
  const classes = useStyles();

  return (
    <Box sx={{ width: { xs: '250px', sm: '400px', md: '700px', lg: '800px' }}}>

      <Grid container className={classes.all}>
        <Grid item md={8} xs={12}>
          <Grid container direction="column">
            <Grid item className={classes.title} mb={2}>
              Visit at {time.toString()}
            </Grid>
            <Grid item>
              <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
                <Grid item md={5} xs={12}>
                  <span className={classes.bold}>OWNER: </span>
                  {owner}
                </Grid>
                <Grid item md={4} xs={12}>
                  <span className={classes.bold}>PET: </span>
                  {pet}
                </Grid>
                <Grid item md={3} xs={12}>
                  <span className={classes.bold}>BREED: </span>
                  breed
                </Grid>
              </Grid>
            </Grid>
            <Grid item alignItems="flex-start" nowrap='true' mb={2}>
              <span className={classes.bold}>DESCRIPTION: </span>
              {description}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
