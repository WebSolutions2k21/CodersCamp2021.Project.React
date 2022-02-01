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
    getPetsDataBase();
    return () => getPetsDataBase();
  }, [loading]);

  const getPetsDataBase =async () => {
    const getPetsFromFirebase = [];
    const deb = await db.collection('users').doc(user.uid);
    deb.collection('pets').onSnapshot((q) => {
      q.forEach((doc) => {
        getPetsFromFirebase.push({
          ...doc.data(),
          key: doc.id,
        });
      });
      setPets(getPetsFromFirebase);
      setLoading(false);
    });
  };

  return (
    <Layout showSideBar>
      <Typography paragraph marginLeft="20px" marginTop="20px" variant="h4" color="#16bac6">
        My Pets
      </Typography>
      <Box>
        <Grid container spacing={4} paddingLeft="40px" paddingRight="40px" gridAutoColumns="2" margin="0">
          {pets.length > 0 ? (
            pets.map((pet) => {
              return (
                <Grid item xs={12} sm={12} md={6} key={pet.key}>
                  <MyPetCard
                    name={pet.name}
                    breed={pet.breed}
                    type={pet.species}
                    age={new Date(pet.petAge.seconds * 1000 + pet.petAge.nanoseconds / 1000000).toLocaleDateString(
                      undefined,
                      options,
                    )}
                  />
                </Grid>
              );
            })
          ) : (
            <h1>no pets yet :(</h1>
          )}
          <Grid container direction="column" alignItems="center" gap="1rem" item>
            <Link component={RouterLink} to={paths.addPet} style={{ textDecoration: 'none', justifyContent: 'center' }}>
              <CustomButton text="Add pet" />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};
