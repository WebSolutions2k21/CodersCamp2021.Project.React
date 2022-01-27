import React, { useState } from 'react';
import { Input, InputMonthAndYear, InputSelect } from '../Inputs';
import { CustomButton } from '../Button/CustomButton';

import { Grid, Button } from '@mui/material';

import { db } from '../../config/firebase';

export const MyPetForm = () => {
  const [name, setName] = useState('');
  console.log('name', name);
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [petAge, setPetAge] = useState(new Date());

  const handleSubmit = (e) => {
    console.log('name w handle', name, species, breed, petAge);
    e.preventDefault();
    db.collection('pets')
      .add({
        name: name,
        species: species,
        breed: breed,
        petAge: petAge,
      })
      .then(() => {
        alert('Messege submitted');
      })
      .catch((error) => {
        alert(error.message);
      });
    setName('');
    setSpecies('');
    setBreed('');
    setPetAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" alignItems="center" gap="1rem">
        <Input label="Name" type="text" value={name} setValue={setName} />

        <InputSelect label="Type" myNames={['dog', 'cat']} value={species} setValue={setSpecies} />
        <Input label="Breed" type="text" value={breed} setValue={setBreed} />
        <InputMonthAndYear label="Date of Birth" value={petAge} setValue={setPetAge} />

        <CustomButton type="submit" text="Save" />
      </Grid>
    </form>
  );
};

