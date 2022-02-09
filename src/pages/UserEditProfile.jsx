import React, { useLayoutEffect, useState } from 'react';
import { Layout, UserProfileCard } from '../components';
import { Grid, Typography } from '@mui/material';
import { auth, db } from '../config/firebase';

export const UserEditProfile = () => {
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState([]);

  const user = auth.currentUser;

  useLayoutEffect(() => {
    db.collection('users')
      .where('uid', '==', user.uid)
      .onSnapshot((snapshot) => {
        setUserProfile(
          snapshot.docs.map((doc) => {
            return {
              key: doc.id,
              firstName: doc.data().firstName,
              lastName: doc.data().lastName,
              email: doc.data().email,
            };
          }),
        );
      });
    return () => setLoading(false);
  }, [loading, user]);

  return (
    <Layout showSideBar>
      <Typography paragraph marginLeft="4%" marginTop="20px" variant="h4" color="#16bac6">
        My Profile
      </Typography>
      <Grid container justifyContent={'center'} paddingBottom={5} width={'100%'} marginLeft="4%">
        {userProfile.length > 0 ? (
          userProfile.map((user) => {
            return (
              <Grid item xs={12} sm={12} md={6} key={user.key}>
                <UserProfileCard firstName={user.firstName} lastName={user.lastName} email={user.email} />
              </Grid>
            );
          })
        ) : (
          <h1>no data </h1>
        )}
      </Grid>
    </Layout>
  );
};
