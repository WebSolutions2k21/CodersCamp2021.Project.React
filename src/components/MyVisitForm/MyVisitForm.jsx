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
    pets.forEach((pet) => {
      if (pet.user_id === userId) {
        petNamesArray.push(pet.name);
      }
    });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pet && date && hour && doctor) {
      db.collection('visits')
        .add({
          pet,
          doctor,
          date,
          hour,
          uid: user.uid,
          doctorId,
          userName,
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

  if (loading) {
    return <Loading />;
  }

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
