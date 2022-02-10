import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input, InputMonthAndYear, InputSelect } from '../Inputs';
import { CustomButton } from '../Button/CustomButton';
import { Grid } from '@mui/material';

import { paths } from '../../config/paths';
import { db, auth } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

export const MyPetForm = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [petAge, setPetAge] = useState(new Date());

  const navigate = useNavigate();
  const user = auth.currentUser;

  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = name.trim() !== '' || name.length >= 30;
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredNameTouched(false);

    addDoc(collection(db, 'pets'), {
      user_id: user.uid,
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" alignItems="center" gap="1rem">
        <Input
          label="Name"
          type="text"
          value={name}
          setValue={setName}
          error={nameInputIsInvalid}
          helperText={nameInputIsInvalid ? 'Name is required' : ''}
        />
        <InputSelect label="Type" myNames={['dog', 'cat', 'other']} value={species} setValue={setSpecies} />
        <Input label="Breed" type="text" value={breed} setValue={setBreed} />
        <InputMonthAndYear label="Date of Birth" value={petAge} setValue={setPetAge} required={true} />
        <CustomButton type="submit" text="Save" size="large"/>
      </Grid>
    </form>
  );
};
