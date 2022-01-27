import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { CustomButton, Layout, MyPetCard } from '../components';
import { Typography, Grid, Link } from '@mui/material';

import { db } from '../config/firebase';
import { paths } from '../config/paths';

export const UserMyPets = () => {
  const [loading, setLoading] = useState(true);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getPetsFromFirebase = [];
    const subscriber = db.collection('pets').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPetsFromFirebase.push({
          ...doc.data(),
          key: doc.id,
        });
      });
      setPets(getPetsFromFirebase);
      setLoading(false);
    });

    return () => subscriber();
  }, [loading]);

  if (loading) {
    return <h1>loading data...</h1>;
  }

  return (
    <Layout showSideBar>
      <Typography paragraph marginLeft="20px" marginTop="20px" variant="h4" color='#16bac6'>
        My Pets
      </Typography>
      <Grid container spacing={4} paddingLeft="40px" paddingRight="40px" justifyContent="space-between">
        {pets.length > 0 ? (
          pets.map((pet) => (
            <Grid item xs={12} sm={6} md={4} key={pet.key}>
              <MyPetCard name={pet.name} breed={pet.breed} type={pet.species} age={pet.petAge} />
            </Grid>
          ))
        ) : (
          <h1>no pets yet :(</h1>
        )}
        <Grid container direction="column" alignItems="center" gap="1rem" item>
          <Link component={RouterLink} to={paths.addPet} style={{ textDecoration: 'none', justifyContent: 'center' }}>
            <CustomButton text="Add pet" />
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
};
