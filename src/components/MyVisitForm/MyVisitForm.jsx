import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';

import { InputFullDate, InputTime, InputSelect } from '../Inputs';
import { CustomButton } from '../Button/CustomButton';
import { Loading } from '../Loading/Loading';
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
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState('');
  const [petsNames, setPetsNames] = useState([]);
  const [usersPets, setUsersPets] = useState([]);
  const [breed, setBreed] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(auth.currentUser);
    setUserId(auth.currentUser.auth.lastNotifiedUid);
  }, []);

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

  useEffect(() => {
    const petNamesArray = [];
    const filteredPets = [];
    pets.forEach((pet) => {
      if (pet.user_id === userId) {
        petNamesArray.push(pet.name);
        filteredPets.push({ name: pet.name, breed: pet.breed });
      }
    });
    setUsersPets(filteredPets);
    setPetsNames(petNamesArray);
  }, [pets, userId]);

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

  useEffect(() => {
    let breedName = '';
    usersPets.forEach((el) => {
      if (pet === el.name) {
        breedName = el.breed;
      }
    });
    setBreed(breedName);
  }, [pet, usersPets]);

  const [enteredPetTouched, setEnteredPetTouched] = useState(false);
  const [enteredDoctorTouched, setEnteredDoctorTouched] = useState(false);
  const enteredPetIsValid = pet !== '';
  const enteredDoctorIsValid = doctor !== '';
  const petInputIsInvalid = !enteredPetIsValid && enteredPetTouched;
  const doctorInputIsInvalid = !enteredDoctorIsValid && enteredDoctorTouched;

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnteredPetTouched(true);
    setEnteredDoctorTouched(true);

    if (!enteredPetIsValid || !enteredDoctorIsValid) {
      return;
    }

    setEnteredPetTouched(false);
    setEnteredDoctorTouched(false);

    db.collection('visits')
      .add({
        pet,
        doctor,
        date,
        hour,
        uid: user.uid,
        doctorId,
        userName,
        breed,
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
  if (loading) {
    return <Loading />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" alignItems="center" gap="1rem">
        <InputSelect label="Pet" myNames={petsNames} value={pet} setValue={setPet} error={petInputIsInvalid} />
        <InputSelect
          label="Doctor"
          myNames={doctorsNames}
          value={doctor}
          setValue={setDoctor}
          error={doctorInputIsInvalid}
        />
        <InputFullDate label="Date" value={date} setValue={setDate} />
        <InputTime label="Hour" value={hour} setValue={setHour} />
        <CustomButton type="submit" text="Save" size="medium" />
      </Grid>
    </form>
  );
};
