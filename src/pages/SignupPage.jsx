import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

import { Grid, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { collection, addDoc } from 'firebase/firestore';

import { Layout, Input, CustomButton } from '../components';
import { SignUpTheme } from '../styles/themes/CustomSingUpPage';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import { db, auth } from '../config/firebase';
import { paths } from '../config/paths';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirm, setPasswordConfirm] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
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
          phone: phoneNumber,
          email: user.email,
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
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" alignItems="center" style={{ marginTop: '10vmin' }} gap="2rem">
          <Typography
            theme={SignUpTheme}
            variant="h2"
            component="h2"
            color="#16BAC6"
            fontSize="2.8rem"
            textAlign="center"
          >
            Create your account
          </Typography>
          <Grid container justifyContent="center" gap="3rem">
            <Input label="first name" type="text" value={firstName} setValue={setFirstName} />
            <Input label="last name" type="text" value={lastName} setValue={setLastName} />
          </Grid>
          <Input label="email" type="email" setValue={setEmail} value={email} fullWidth />
          <Input label="phone number" type="tel" setValue={setPhoneNumber} value={phoneNumber} fullWidth />
          <Input label="password" type="password" setValue={setPassword} value={password} fullWidth />
          <Input
            label="confirm password"
            type="password"
            setValue={setPasswordConfirm}
            value={passwordconfirm}
            fullWidth
          />
          <Typography theme={SignUpTheme}>
            Already have an account?
            <Link underline="none" color="#16BAC6" component={RouterLink} to={paths.login}>
              {' '}
              Log In!
            </Link>
          </Typography>
          <Box
          sx={{
            [theme.breakpoints.down('md')]:{
              marginBottom: '40px',
            },
          }} >
            <CustomButton color="primary" size="large" text="Sign Up !" type="submit" />
          </Box>
        </Grid>
      </form>
    </Layout>
  );
};
