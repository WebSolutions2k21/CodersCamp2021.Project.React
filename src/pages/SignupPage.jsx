import React from 'react';

import { Layout } from '../components';
import { Input } from '../components/Inputs';
import { CustomButton } from '../components/Button/CustomButton';
// import { SignUpTheme, SingUpTeme } from '../styles/themes/CustomSingUpPage';
import { LoginPageTheme } from '../styles/themes/CostomLogInPage';

import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
// import { useStyles } from './SingUpPageCustomInput';
import { width } from '@mui/system';

export const SignupPage = () => {
  // const classes = useStyles();
  return (
    <Layout>
      <Grid container direction="column" alignItems="center" style={{ marginTop: '10vmin' }} gap="2rem">
        <Typography theme={LoginPageTheme} variant="h2" component="h2" color="#16BAC6" fontSize="2.8rem">
          Create your account
        </Typography>
        <Grid container justifyContent="center" gap="3rem">
          <Input label="first name" type="text" />
          <Input label="last name" type="text" />
        </Grid>
        <Input label="email" type="email" />
        <Input label="phone number" type="tel" />
        <Input label="password" type="password" />
        <Typography theme={LoginPageTheme}>
          Already have an account?
          <Link underline="none" color="#16BAC6">
            {' '}
            Log In!
          </Link>
        </Typography>
        <Link to="/AboutUsPage" style={{ textDecoration: 'none' }}>
          <CustomButton color="primary" size="large" text="Sign Up !" />
        </Link>
      </Grid>
    </Layout>
  );
};
