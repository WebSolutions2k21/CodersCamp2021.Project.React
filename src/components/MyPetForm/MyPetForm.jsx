import React, { useState } from 'react';
import { Input, InputSelect } from '../Inputs';
import { CustomButton } from '../Button/CustomButton';

import { Grid } from '@mui/material';

import { db } from '../../config/firebase';

export const MyPetForm = () => {
  const [name, setName] = useState('');
  console.log('name', name);
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [petAge, setPetAge] = useState(new Date());

  const handleChange = (event) => {
    setSpecies(event.target.value);
  };

  const handleSubmit = (data) => {
    console.log('dane', data);
    // e.preventDefault();
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
    <form >
    
      <Grid container direction="column" alignItems="center" gap="1rem">
        <Input label="Name" type="text" value={name} setValue={setName} />

  
        <InputSelect label="Type" myNames={["dog", "cat"]}/>
        {/* <Input label="Breed" type="text" value={breed} /> */}

        {/* <DatePicker
          label="Birth Date"
          value={petAge}
          onChange={(newValue) => setPetAge(newValue)}
          renderInput={(params) => <TextField {...params} />}
        /> */}

        <CustomButton clickAction={handleSubmit} text="Save" />
      </Grid>
    </form>
  );
};

{/* <form  >
      <Grid item xs={12} sm={12}>
        <Input label="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </Grid>
      <Grid>
        <Input label="species" type="text" value={species} onChange={(e) => setSpecies(e.target.value)} />
      </Grid>
      <Grid>
        <Input label="breed" type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
      </Grid>
      <Grid>
        <Input label="age" type="date" value={petAge} onChange={(e) => setPetAge(e.target.value)}></Input>
      </Grid>
      <Grid>
        <CustomButton clickAction={handleSubmit}>Submit</CustomButton>
      </Grid>
    </form> */}