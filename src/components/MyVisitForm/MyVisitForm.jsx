import React, { useState, useEffect } from 'react';
import { InputFullDate, InputTime, InputSelect } from '../Inputs';
import { CustomButton } from '../Button/CustomButton';
import { useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';

import { db, auth } from '../../config/firebase';
import { paths } from '../../config/paths';

export const MyVisitForm = () => {
  const [loading, setLoading] = useState(true);
  const [pets, setPets] = useState([]);
  const [pet, setPet] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(new Date());

  const user = auth.currentUser;
  const userId = auth.currentUser.auth.lastNotifiedUid;
  const navigate = useNavigate();

  useEffect(() => {
    const getPetsFromFirebase = [];
    const getDoctorsFromFirebase = [];
    db.collection('users').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getDoctorsFromFirebase.push({
          ...doc.data(),
          key: doc.id,
        });
      });
      setDoctors(getDoctorsFromFirebase);
      setLoading(false);
    });

    db.collection('pets').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPetsFromFirebase.push({
          ...doc.data(),
          key: doc.id,
        });
      });
      setPets(getPetsFromFirebase);
      setLoading(false);
    });
  }, [loading]);

  if (loading) {
    return <h1>loading data...</h1>;
  }

  const petsNames = [];
  pets.forEach((pet) => {
    if (pet.user_id === userId) {
      petsNames.push(pet.name);
    }
  });

  const doctorsNames = [];
  doctors.forEach((doctor) => {
    if (doctor.isAdmin) {
      const doctorName = `${doctor.firstName} ${doctor.lastName}`;
      doctorsNames.push(doctorName);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('visits')
      .add({
        pet: pet,
        doctor: doctor,
        date: date,
        hour: hour,
        uid: user.uid,
      })
      .then(() => {
        navigate(paths.myVisits, { replace: true });
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
        <InputSelect label="Doctor" myNames={doctorsNames} value={doctor} setValue={setDoctor} />
        <InputFullDate label="Date" value={date} setValue={setDate} />
        <InputTime label="Hour" value={hour} setValue={setHour} />
        <CustomButton type="submit" text="Save" />
      </Grid>
    </form>
  );
};
