import React from 'react';

import { Layout } from '../components';
import { Input } from '../components/Inputs';
import { CustomButton } from '../components/Button/CustomButton';

import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const useStyle = makeStyles({
  h1: {
    fontFamily: 'Ubuntu, sans-serif;',
    fontWeight: '400',
    color: '#16BAC6',
  },
});

export const LoginPage = () => {
  const classes = useStyle();
  return (
    <Layout>
      <Grid container direction="column" alignItems="center" style={{ marginTop: '20vmin' }} gap="2rem">
        <Typography variant="h1" component="h1" className={classes.h1}>
          Log In
        </Typography>
        <Input label="email" />
        <Input label="password" />
        <Grid container justifyContent="center" gap="2rem">
          <CustomButton />
          <CustomButton />
        </Grid>
        <Typography>
          You don't have account?
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Sign In!
          </Link>
        </Typography>
      </Grid>
      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <Typography variant="h1" component="h1" className={classes.h1}>
          Log In
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ margin: '20px' }}>
            <Input label="email" />
          </Box>
          <Box sx={{ margin: '20px' }}>
            <Input label="password" />
          </Box>
        </Box>
        <Box>
          <CustomButton />
          <CustomButton />
        </Box>
        <Typography>
          You don't have account?
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Sign In!
          </Link>
        </Typography>
      </Box> */}
    </Layout>
  );
};
