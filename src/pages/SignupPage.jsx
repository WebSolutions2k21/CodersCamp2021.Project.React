import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../components';
import { Input } from '../components/Inputs';
import { CustomButton } from '../components/Button/CustomButton';
import { SignUpTheme } from '../styles/themes/CustomSingUpPage';

import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../config/firebase';
import { paths } from '../config/paths';

import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRourt } from 'react-router-dom/server';

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordconfirm, setPasswordConfirm] = useState('');

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordconfirm) {
      return console.log('Passwords do not match');
    }

    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        const user = res.user;
        addDoc(collection(db, 'users'), {
          uid: user.uid,
          lastName: lastName,
          firstName: firstName,
          email: user.email,
          phone: phoneNumber,
          isAdmin: false,
        });

        navigate(paths.myVisits, { replace: true });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Layout>
      {' '}
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" alignItems="center" style={{ marginTop: '10vmin' }} gap="2rem">
          <Typography theme={SignUpTheme} variant="h2" component="h2" color="#16BAC6" fontSize="2.8rem">
            Create your account
          </Typography>{' '}
          <Grid container justifyContent="center" gap="3rem">
            <Input label="first name" type="text" value={firstName} setValue={setFirstName} />
            <Input label="last name" type="text" value={lastName} setValue={setLastName} />
          </Grid>
          <Input label="email" type="email" value={email} setValue={setEmail} />
          <Input label="phone number" type="tel" value={phoneNumber} setValue={setPhoneNumber} />
          <Input label="password" type="password" value={password} setValue={setPassword} />
          <Input label="confirm password" type="password" value={passwordconfirm} setValue={setPasswordConfirm} />
          <Typography theme={SignUpTheme}>
            Already have an account?
            <Link component={RouterLink} to={paths.login} underline="none" color="#16BAC6">
              {' '}
              Log In!
            </Link>
          </Typography>
          <CustomButton color="primary" size="large" text="Sign Up !" type="submit" />
        </Grid>{' '}
      </form>
    </Layout>
  );
};
