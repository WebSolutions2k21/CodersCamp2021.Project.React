import React from 'react';

import { Layout } from '../components';
import { Input } from '../components/Inputs';
import { CustomButton } from '../components/Button/CustomButton';
import { LoginPageTheme } from '../styles/themes/CostomLogInPage';

import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const LoginPage = () => {
  return (
    <Layout>
      <Grid container direction="column" alignItems="center" style={{ marginTop: '20vmin' }} gap="2rem">
        <Typography theme={LoginPageTheme} variant="h1" component="h1" color="#16BAC6" fontSize="3.8rem">
          Log In
        </Typography>
        <Input label="email" />
        <Input label="password" />
        <Grid container justifyContent="center" gap="2rem">
          <CustomButton text="I'm a Petlover" />
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
