import React, { useState, useEffect } from 'react';
import { InputFullDate, InputTime, InputSelect } from '../Inputs';
import { CustomButton } from '../Button/CustomButton';

import { Grid } from '@mui/material';

import { db } from '../../config/firebase';

export const MyVisitForm = () => {
  const [loading, setLoading] = useState(true);
  const [pets, setPets] = useState([]);
  const [pet, setPet] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(new Date());

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
  const petsNames = [];
  pets.forEach((pet) => petsNames.push(pet.name));

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('visits')
      .add({
        pet: pet,
        doctor: doctor,
        date: date,
        hour: hour,
      })
      .then(() => {
        alert('Visit submitted');
      })
      .catch((error) => {
        alert(error.message);
      });
    setPet(pet);
    setDoctor(doctor);
    setDate(new Date());
    setHour(new Date());
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" alignItems="center" gap="1rem">
        <InputSelect label="Pet" myNames={petsNames} value={pet} setValue={setPet} />
        <InputSelect
          label="Doctor"
          myNames={['dr Jan Kot', 'dr Marzena Borsuk-Łapa', 'dr Kamila Piesecka']}
          value={doctor}
          setValue={setDoctor}
        />
        <InputFullDate label="Date" value={date} setValue={setDate} />
        <InputTime label="Hour" value={hour} setValue={setHour} />
        <CustomButton type="submit" text="Save" />
      </Grid>
    </form>
  );
};
