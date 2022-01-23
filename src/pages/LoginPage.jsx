import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignupPage } from '.';

import { Layout } from '../components';
import { Input } from '../components/Inputs';
import { CustomButton } from '../components/Button/CustomButton';
import { LoginPageTheme } from '../styles/themes/CustomLogInPage';

import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}

Router.propTypes = {
  children: PropTypes.node,
};

export const LoginPage = () => {
  return (
    <Layout>
      <Grid container direction="column" alignItems="center" style={{ marginTop: '20vmin' }} gap="2rem">
        <Typography theme={LoginPageTheme} variant="h1" component="h1" color="#16BAC6" fontSize="3.8rem">
          Log In
        </Typography>
        <Input label="email" type="email" />
        <Input label="password" type="password" />
        <Grid container justifyContent="center" gap="2rem">
          <CustomButton text="I'm a Petlover" size="large" />
          <CustomButton text="I'm a Doctor" size="large" />
        </Grid>
        <Typography theme={LoginPageTheme}>
          You don't have account?
          <Link component={RouterLink} to="/Signup" underline="none" color="#16BAC6">
            {' '}
            Sign Up!
          </Link>
        </Typography>
      </Grid>
    </Layout>
  );
};
