import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../components';
import { Input } from '../components/Inputs';
import { CustomButton } from '../components/Button/CustomButton';
import { SignUpTheme } from '../styles/themes/CustomSingUpPage';

import { Grid, Typography, Link } from '@mui/material';
import { auth } from '../config/firebase';
import { registerWithEmailAndPassword } from '../config/authentication';

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [lastName, setLastName] = useState('');
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  // const history = useHistory();

  useEffect(() => {
    if (loading) return;
    // if (user)
    //   history.replace('/dashboard');
  }, [user, loading]);

  const onSuccessfulRegistrationHandler = () => {
    alert('registered!');
  };

  const onRegistrationErrorHandler = (err) => {
    console.error(err);
    alert(err.message);
  };

  return (
    <Layout>
      <Grid container direction="column" alignItems="center" style={{ marginTop: '10vmin' }} gap="2rem">
        <Typography theme={SignUpTheme} variant="h2" component="h2" color="#16BAC6" fontSize="2.8rem">
          Create your account
        </Typography>
        <Grid container justifyContent="center" gap="3rem">
          <Input label="first name" type="text" value={name} setValue={setName} />
          <Input label="last name" type="text" value={lastName} setValue={setLastName} />
        </Grid>
        <Input label="email" type="email" value={email} setValue={setEmail} fullWidth />
        <Input label="phone number" type="tel" value={phoneNumber} setValue={setPhoneNumber} fullWidth />
        <Input label="password" type="password" value={password} setValue={setPassword} fullWidth />
        <Typography theme={SignUpTheme}>
          Already have an account?
          <Link to="/login" underline="none" color="#16BAC6">
            {' '}
            Log In!
          </Link>
        </Typography>
        <Link to="/AboutUsPage" style={{ textDecoration: 'none' }}>
          <CustomButton
            color="primary"
            size="large"
            text="Sign Up!"
            clickAction={() =>
              registerWithEmailAndPassword(email, password, onSuccessfulRegistrationHandler, onRegistrationErrorHandler)
            }
          />
        </Link>
      </Grid>
    </Layout>
  );
};
