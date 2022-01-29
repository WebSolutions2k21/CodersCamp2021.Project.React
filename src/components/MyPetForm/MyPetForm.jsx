import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Input, InputMonthAndYear, InputSelect } from '../Inputs';
import { CustomButton } from '../Button/CustomButton';

import { Grid} from '@mui/material';
import { paths } from '../../config/paths';
import { db, auth } from '../../config/firebase';

export const MyPetForm = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [petAge, setPetAge] = useState(new Date());

  let navigate = useNavigate();
  var user = auth.currentUser;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('users').doc(user.uid).collection('pets')
      .add({
        name: name,
        species: species,
        breed: breed,
        petAge: petAge,
      })
      .then(() => {
        navigate(paths.myPets, { replace: true });
      })
      .catch((error) => {
        alert(error.message);
      });
    setName('');
    setSpecies('');
    setBreed('');
    setPetAge(new Date());
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
