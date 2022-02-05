import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { CustomButton, Layout, MyPetCard } from '../components';
import { Typography, Grid, Link, Box } from '@mui/material';

import { db, auth } from '../config/firebase';
import { paths } from '../config/paths';

export const UserMyPets = () => {
  const options = { year: 'numeric', month: 'numeric' };

  const [loading, setLoading] = useState(true);
  const [pets, setPets] = useState([]);

  var user = auth.currentUser;

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

  const deletePet = (id) => {
    db.collection('pets').doc(id).delete();
  };

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
              <Grid sx={{ maxWidth: '400px' }} container direction="column" justifyContent="center" item key={pet.key}>
                <MyPetCard
                  name={pet.name}
                  breed={pet.breed}
                  type={pet.type}
                  age={new Date(pet.petAge.seconds * 1000 + pet.petAge.nanoseconds / 1000000).toLocaleDateString(
                    undefined,
                    options,
                  )}
                />
                <CustomButton
                  edge="end"
                  aria-label="delete"
                  color="secondary"
                  clickAction={() => deletePet(pet.key)}
                  text="Delete"
                />
              </Grid>
            );
          })
        ) : (
          <h1>no pets yet :(</h1>
        )}
        <Grid container direction="column" alignItems="center" justifyContent="center" gap="1rem" item>
          <Link component={RouterLink} to={paths.addPet} style={{ textDecoration: 'none', justifyContent: 'center' }}>
            <CustomButton text="Add pet" size="small" />
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
};
