import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { CustomButton, Layout, MyPetCard } from '../components';
import { Typography, Grid, Link } from '@mui/material';

import { db, auth } from '../config/firebase';
import { paths } from '../config/paths';

export const UserMyPets = () => {
  const options = { year: 'numeric', month: 'numeric' };

  const [loading, setLoading] = useState(true);
  const [pets, setPets] = useState([]);

  var user = auth.currentUser;
  const getPetsFromFirebase = [];

  useEffect(() => {
    db.collection('pets')
      .where('user_id', '==', user.uid)
      .onSnapshot((snapshot) => {
        setPets(
          snapshot.docs.map((doc) => {
            return {
              key: doc.id,
              name: doc.data().name,
              breed: doc.data().breed,
              type: doc.data().species,
              petAge: doc.data().petAge,
            };
          }),
        );
      });
    return () => setLoading(false);
  }, [loading, user.uid]);

  return (
    <Layout showSideBar>
      <Typography paragraph marginLeft="4%" marginTop="20px" variant="h4" color="#16bac6">
        My Pets
      </Typography>

      <Grid
        container
        justifyContent={'center'}
        spacing={4}
        paddingBottom={10}
        gridAutoColumns="2"
        margin="auto"
        width={'90%'}
      >
        {pets.length > 0 ? (
          pets.map((pet) => {
            return (
              <Grid item xs={12} sm={12} md={6} key={pet.key}>
                <MyPetCard
                  name={pet.name}
                  breed={pet.breed}
                  type={pet.type}
                  age={new Date(pet.petAge.seconds * 1000 + pet.petAge.nanoseconds / 1000000).toLocaleDateString(
                    undefined,
                    options,
                  )}
                  deleteAction={pet.key}
                />
              </Grid>
            );
          })
        ) : (
          <h1>no pets yet :(</h1>
        )}
        <Grid container direction="column" alignItems="center" gap="1rem" item zIndex="1">
          <Link component={RouterLink} to={paths.addPet} style={{ textDecoration: 'none', justifyContent: 'center' }}>
            <CustomButton text="Add pet" size="large" />
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
};
