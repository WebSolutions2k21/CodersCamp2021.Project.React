import React from 'react';

import { Box, Typography } from '@mui/material';
import { useStyles } from './BannerStyle';

export const Banner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Typography variant="h4" color={'#FDC161'}>
        Welcome Bartek !
      </Typography>
    </Box>
  );
};
