import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import { useStyles } from './UserProfileCardStyle';

export const UserProfileCard = ({ firstName, lastName, email, phone }) => {
  const classes = useStyles();
  return (
    <>
      <Grid>
        <Typography className={classes.pos} display="inline">
          First Name:
        </Typography>
        <Box className={classes.box}>
          <Grid>
            <Typography color="textSecondary" display="inline">
              {firstName}
            </Typography>
          </Grid>
        </Box>
      </Grid>
      <Grid>
        <Typography className={classes.pos} display="inline">
          Last Name:
        </Typography>
        <Box className={classes.box}>
          <Grid>
            <Typography color="textSecondary" display="inline">
              {lastName}
            </Typography>
          </Grid>
        </Box>
      </Grid>
      <Grid>
        <Typography className={classes.pos} display="inline">
          email:
        </Typography>
        <Box className={classes.box}>
          <Grid>
            <Typography color="textSecondary" display="inline">
              {email}
            </Typography>
          </Grid>
        </Box>
      </Grid>
      <Grid>
        <Typography className={classes.pos} display="inline">
          phone:
        </Typography>
        <Box className={classes.box}>
          <Grid>
            <Typography color="textSecondary" display="inline">
              {phone}
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};
