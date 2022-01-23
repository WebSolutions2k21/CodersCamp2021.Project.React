import React from 'react';

import { Layout } from '../components';
import { Input } from '../components/Inputs';
import { CustomButton } from '../components/Button/CustomButton';
import { LoginPageTheme } from '../styles/themes/CostomLogInPage';

import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const useStyle = makeStyles({
  h1: {
    color: '#16BAC6',
  },
});

export const LoginPage = () => {
  const classes = useStyle();
  return (
    <Layout>
      <Grid container direction="column" alignItems="center" style={{ marginTop: '20vmin' }} gap="2rem">
        <Typography theme={LoginPageTheme} className={classes.h1} variant="h1" component="h1">
          Log In
        </Typography>
        <Input label="email" />
        <Input label="password" />
        <Grid container justifyContent="center" gap="2rem">
          <CustomButton text="I'm a Petlover"> </CustomButton>
          <CustomButton text="I'm a Doctor" />
        </Grid>
        <Typography theme={LoginPageTheme}>
          You don't have account?
          <Link underline="none" color="#16BAC6">
            {' '}
            Sign In!
          </Link>
        </Typography>
      </Grid>
    </Layout>
  );
};
