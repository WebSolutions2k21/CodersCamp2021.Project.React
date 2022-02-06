import React, { useLayoutEffect, useState } from 'react';

import { Box, Container, Typography } from '@mui/material';
import { useStyles } from './BannerStyle';
import { auth, db } from '../../config/firebase';

export const Banner = () => {
  const classes = useStyles();
  const user = auth.currentUser;
  const [name, setName] = useState([]);

  useLayoutEffect(() => {
    db.collection('users')
      .where('uid', '==', user.uid)
      .get()
      .then(function (q) {
        q.forEach(function (doc) {
          setName(() => doc.data().firstName);
        });
      });
  }, [user.uid]);

  return (
    <Box className={classes.box}>
      <Container maxWidth="xl">
        <Typography variant="h4" color={'#FDC161'}>
          {`Welcome ${name} !`}
        </Typography>
      </Container>
    </Box>
  );
};
