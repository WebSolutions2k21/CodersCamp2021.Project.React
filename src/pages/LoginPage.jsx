import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
// import { StaticRouter } from 'react-router-dom/server';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../config/firebase';
import { logInWithEmailAndPassword } from '../config/authentication';

import { Layout } from '../components';
import { Input } from '../components/Inputs';
import { CustomButton } from '../components/Button/CustomButton';
import { LoginPageTheme } from '../styles/themes/CustomLogInPage';

import { Grid, Typography, Link } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [user, loading, error] = useAuthState(auth);
  const [user, loading] = useAuthState(auth);
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    // if (user) navigate('/dashboard');
  }, [user, loading]);

  const showLoginSuccessToast = () => {
    toast.success('Successful Login!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: '1500',
    });
  };

  const showLoginErrorToast = () => {
    toast.error('Login failed! Check login or password!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: '1500',
    });
  };

  const onSuccessfulLoginHandler = () => {
    setDisable(true);
    showLoginSuccessToast();
    setTimeout(() => {
      navigate('../myVisits', { replace: true });
    }, 3000);
  };

  const onLoginErrorHandler = (error) => {
    showLoginErrorToast();
    console.error(error);
    alert(error.message);
  };

  return (
    <Layout>
      <Grid container direction="column" alignItems="center" style={{ marginTop: '20vmin' }} gap="2rem">
        <Typography theme={LoginPageTheme} variant="h1" component="h1" color="#16BAC6" fontSize="3.8rem">
          Log In
        </Typography>
        <Input label="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Grid container justifyContent="center" gap="2rem">
          <CustomButton
            text="I'm a Petlover"
            size="large"
            disabled={disable}
            clickAction={() =>
              logInWithEmailAndPassword(email, password, onSuccessfulLoginHandler, onLoginErrorHandler)
            }
          />
          <CustomButton text="I'm a Doctor" size="large" />
        </Grid>
        <ToastContainer />
        <Typography theme={LoginPageTheme}>
          You don't have account?
          <Link to="/Signup" underline="none" color="#16BAC6">
            {' '}
            Sign Up!
          </Link>
        </Typography>
      </Grid>
    </Layout>
  );
};
