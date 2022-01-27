import React from 'react';

import { Box, Container, Typography } from '@mui/material';
import { useStyles } from './BannerStyle';

export const Banner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Container maxWidth="xl">
        <Typography variant="h4" color={'#FDC161'}>
          Welcome Bartek !
        </Typography>
      </Container>
    </Box>
  );
};
