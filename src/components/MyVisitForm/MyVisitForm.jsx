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
  const [users, setUsers] = useState([]);
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(new Date());
  const [doctorId, setDoctorId] = useState('');
  const [doctorsNames, setDoctorsNames] = useState([]);
  const [userName, setUserName] = useState('');
  const user = auth.currentUser;
  const userId = auth.currentUser.auth.lastNotifiedUid;
  const navigate = useNavigate();

  useEffect(() => {
    const getPetsFromFirebase = [];
    const getUsersFromFirebase = [];
    db.collection('users').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getUsersFromFirebase.push({
          ...doc.data(),
          key: doc.id,
        });
      });
      setUsers(getUsersFromFirebase);
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

  const petsNames = [];
  pets.forEach((pet) => {
    if (pet.user_id === userId) {
      petsNames.push(pet.name);
    }
  });

  useEffect(() => {
    let petOwner = '';
    users.forEach((user) => {
      if (user.uid === userId) {
        petOwner = user;
        return petOwner;
      }
    });
    const petOwnerName = `${petOwner.firstName} ${petOwner.lastName}`;
    setUserName(petOwnerName);
  }, [userId, users]);

  useEffect(() => {
    const doctorsNames = [];
    const doctorsArray = [];
    let selectedDoctor = '';

    users.forEach((doctor) => {
      if (doctor.isAdmin) {
        doctorsArray.push(doctor);
        const doctorName = `${doctor.firstName} ${doctor.lastName}`;
        doctorsNames.push(doctorName);
        return doctorsNames;
      }
    });
    setDoctorsNames(doctorsNames);

    doctorsArray.forEach((el) => {
      const name = `${el.firstName} ${el.lastName}`;
      if (name === doctor) {
        selectedDoctor = el.uid;
        return selectedDoctor;
      }
    });
    setDoctorId(selectedDoctor);
  }, [doctor, users]);

  if (loading) {
    return <h1>loading data...</h1>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pet && date && hour && doctor) {
      db.collection('visits')
        .add({
          pet: pet,
          doctor: doctor,
          date: date,
          hour: hour,
          uid: user.uid,
          doctorId: doctorId,
          userName: userName,
        })
        .then(() => {
          navigate(paths.myVisits, { replace: true });
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert('Please fill in the all fields before saving.');
    }
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
