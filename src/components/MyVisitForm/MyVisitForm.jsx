import React, { useState, useEffect } from 'react';
import { Input, InputMonthAndYear, InputSelect } from '../Inputs';
import { CustomButton } from '../Button/CustomButton';

import { Grid } from '@mui/material';

// import { db } from '../../config/firebase';

export const MyVisitForm = () => {
  // const [loading, setLoading] = useState(true);
  const [pets, setPets] = useState([]);
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState(new Date());

  // useEffect(() => {
  //   const getPetsFromFirebase = [];
  //   const subscriber = db.collection('pets').onSnapshot((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       getPetsFromFirebase.push({
  //         ...doc.data(),

  //         key: doc.id,
  //       });
  //     });
  //     setPets(getPetsFromFirebase);
  //     console.log(pets);
  //     setLoading(false);
  //   });

  //   return () => subscriber();
  // }, [loading, pets]);

  // if (loading) {
  //   return <h1>loading data...</h1>;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPets('');
    setDoctor('');
    setDate('');
    setHour(new Date());
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" alignItems="center" gap="1rem">
        <InputSelect label="Pet" myNames={[pets]} value={pets} setValue={setPets} />
        <InputSelect
          label="Doctor"
          myNames={['dr Jan Kot', 'dr Marzena Borsuk-Łapa', 'dr Kamila Piesecka']}
          value={doctor}
          setValue={setDoctor}
        />
        <Input label="Date" type="text" value={date} setValue={setDate} />
        <InputMonthAndYear label="Hour" value={hour} setValue={setHour} />
        <CustomButton type="submit" text="Save" />
      </Grid>
    </form>
  );
};
