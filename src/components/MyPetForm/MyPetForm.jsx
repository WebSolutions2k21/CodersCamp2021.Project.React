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
  const [dateTouched, setDateTouched] = useState(false);

  const enteredNameIsValid = name.trim() !== '' || name.length >= 30;
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const dateInputIsValid = petAge == null || petAge!== '';
  const dateInputIsInvalid = !dateInputIsValid && dateTouched;
  console.log('petAge', petAge, dateInputIsValid);
  console.log('name', name, enteredNameIsValid);
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const dateInputBlurHandler = (event) => {
    setDateTouched(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    setDateTouched(true);
    if (!enteredNameIsValid || !dateInputIsValid) {
      return;
    }

    setEnteredNameTouched(false);
    setDateTouched(false);
    await addDoc(collection(db, 'users/pets', user.uid), {
      name: name,
      species: species,
      breed: breed,
      petAge: petAge,
    });
    navigate(paths.myPets, { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" alignItems="center" gap="1rem">
        <Input
          label="Name"
          type="text"
          value={name}
          setValue={setName}
          fullWidth="70px"
          onBlur={nameInputBlurHandler}
          error={nameInputIsInvalid}
          helperText={nameInputIsInvalid ? 'Name is required' : ''}
        />
        <InputSelect label="Type" myNames={['dog', 'cat']} value={species} setValue={setSpecies} />
        <Input label="Breed" type="text" value={breed} setValue={setBreed} />
        <InputMonthAndYear
          label="Date of Birth"
          value={petAge}
          setValue={setPetAge}
          error={dateInputIsInvalid}
          onBlur={dateInputBlurHandler}
          helperText={dateInputIsInvalid ? "Date shouldn't be empty" : ''}
        />
        <CustomButton type="submit" text="Save" />
      </Grid>
    </form>
  );
};
