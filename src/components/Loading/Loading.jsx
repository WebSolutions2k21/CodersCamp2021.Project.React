import { Grid } from '@mui/material';
import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <Grid container direction="column" alignContent="center" justifyItems="center" paddingTop="20em">
      <BallTriangle color="#16bac6" height={80} width={80} />
    </Grid>
  );
};
