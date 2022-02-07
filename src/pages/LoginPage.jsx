import { React, useState } from 'react';

import { Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { auth, db } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { paths } from '../config/paths';

import { Layout } from '../components';
import { Input } from '../components/Inputs';
import { CustomButton } from '../components/Button/CustomButton';
import { LoginPageTheme } from '../styles/themes/CustomLogInPage';

export const LoginPage = () => {
  let navigate = useNavigate();

  const loginSuccess = () => {
    toast.success('Successful Login!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1000,
    });
  };

  const loginError = () => {
    toast.error('Login failed! Check login or password!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1000,
    });
  };

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password).then((user) => {
        loginSuccess();
        setDisable(true);
        db.collection('users')
          .where('uid', '==', user.user.uid)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const isAdmin = doc.data().isAdmin;

              if (isAdmin) {
                setTimeout(() => {
                  navigate(paths.doctorVisit, { replace: true });
                }, 1000);
              } else {
                setTimeout(() => {
                  navigate(paths.myVisits, { replace: true });
                }, 1000);
              }
            });
          });
        localStorage.setItem('currentUser', user.user.uid);
      });
    } catch (error) {
      loginError();
      console.error(error);
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(false);
  return (
    <Layout>
      <Grid container direction="column" alignItems="center" style={{ marginTop: '20vmin' }} gap="2rem">
        <Typography theme={LoginPageTheme} variant="h1" component="h1" color="#16BAC6" fontSize="3.8rem">
          Log In
        </Typography>
        <Input label="email" type="email" setValue={setEmail} />
        <Input label="password" type="password" setValue={setPassword} />
        <Grid container justifyContent="center" gap="2rem">
          <CustomButton text="I'm a Petlover" size="large" disabled={disable} clickAction={() => signIn()} />
        </Grid>
        <ToastContainer />
        <Typography theme={LoginPageTheme}>
          You don't have account?
          <Link component={RouterLink} to={paths.signUp} underline="none" color="#16BAC6">
            {' '}
            Sign Up!
          </Link>
        </Typography>
      </Grid>
    </Layout>
  );
};
