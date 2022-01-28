import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { auth } from '../config/firebase';

import { Layout } from '../components';
import { Input } from '../components/Inputs';
import { CustomButton } from '../components/Button/CustomButton';
import { LoginPageTheme } from '../styles/themes/CustomLogInPage';

import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { useNavigate } from 'react-router-dom';

// const auth = getAuth();
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('logged: ', user);
    // ...
  } else {
    console.log('NOT logged: ', user);
    // User is signed out
    // ...
  }
});

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
  let navigate = useNavigate();
  const loginSucces = () => {
    toast.success('Successful Login!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: '1500',
    });
  };
  const loginError = () => {
    toast.error('Login failed! Check login or password!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: '1500',
    });
  };

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('po sign in');
      loginSucces();
      setTimeout(() => {
        navigate('../myVisits', { replace: true });
      }, 3000);
    } catch (error) {
      loginError();
      console.error(error);
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Layout>
      <Grid container direction="column" alignItems="center" style={{ marginTop: '20vmin' }} gap="2rem">
        <Typography theme={LoginPageTheme} variant="h1" component="h1" color="#16BAC6" fontSize="3.8rem">
          Log In
        </Typography>
        <Input label="email" type="email" setValue={setEmail} />
        <Input label="password" type="password" setValue={setPassword} />
        <Grid container justifyContent="center" gap="2rem">
          <CustomButton text="I'm a Petlover" size="large" clickAction={() => signIn()} />
          <CustomButton text="I'm a Doctor" size="large" />
        </Grid>
        <ToastContainer />
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
