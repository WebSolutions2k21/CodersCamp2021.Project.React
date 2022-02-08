import React, { useContext } from 'react';

import { Box, Container, Typography } from '@mui/material';
import { useStyles } from './BannerStyle';
import { AppContext } from '../../context/AppContext';

export const Banner = () => {
  const classes = useStyles();
  const { userName } = useContext(AppContext);

  return (
    <Box className={classes.box}>
      <Container maxWidth="xl">
        <Typography variant="h4" color={'#FDC161'}>
          {`Welcome ${userName} !`}
        </Typography>
      </Container>
    </Box>
  );
};
