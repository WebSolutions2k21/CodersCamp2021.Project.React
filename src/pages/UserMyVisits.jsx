import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import isSameDay from 'date-fns/isSameDay';

import { Layout, DatePicker, CustomButton } from '../components';
import { paths } from '../config/paths';
import { db, auth } from '../config/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

export const UserMyVisits = () => {
  const [loading, setLoading] = useState(true);
  const [visits, setVisits] = useState([]);
  const userId = auth.currentUser.auth.lastNotifiedUid;
  const visitsArray = [];
  const visitsDates = [];
  let visitsRenderArray = [];

  useEffect(() => {
    const getVisitsFromFirebase = [];
    db.collection('visits').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getVisitsFromFirebase.push({
          ...doc.data(),

          key: doc.id,
        });
      });
      setVisits(getVisitsFromFirebase);
      setLoading(false);
    });
  }, [loading]);

  visits.forEach((visit) => {
    if (visit.uid === userId) {
      visitsArray.push(visit);
      console.log('VISITSARRAY:', visitsArray);
    }
  });

  visitsArray.forEach((visit) => {
    visitsDates.push(new Date(visit.date.seconds * 1000 + visit.date.nanoseconds / 1000000));
    console.log('VISITSDATES:', visitsDates);
  });

  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const info = visitsDates.find((e) => isSameDay(date, e));
    setSelected([info]);
  }, [date]);

  visitsArray.forEach((el) => {
    selected.forEach((selection) => {
      if (selection !== undefined) {
        if (
          selection.toLocaleDateString({ year: 'numeric', month: 'long', day: 'numeric' }) ===
          new Date(el.date.seconds * 1000 + el.date.nanoseconds / 1000000).toLocaleDateString({
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        ) {
          if (visitsRenderArray.includes(el) === false) visitsRenderArray.push(el);
          console.log('VISITSRENDERARRAY:', visitsRenderArray);
        }
      }
    });
  });

  if (loading) {
    return <h1>loading data...</h1>;
  }

  const deleteVisit = (key) => {
    deleteDoc(doc(db, 'visits', `${key}`));
    visitsRenderArray = visitsRenderArray.filter((el) => el.key !== key);
    console.log('DELETE', visitsRenderArray);
  };

  return (
    <Layout showSideBar>
      <Grid
        container
        spacing={6}
        direction="row"
        justifyContent="space-around"
        alignItems="space-around"
        style={{ margin: '1%' }}
      >
        <Grid item>
          <DatePicker visits={visitsDates} onChange={(newDate) => setDate(newDate)} selected={selected} date={date} />
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            style={{ minHeight: '300px', width: '80%' }}
            justifyContent="space-between"
          >
            {visitsRenderArray.length > 0 ? (
              visitsRenderArray.map((visit) => {
                return (
                  <Grid container key={visit.key}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <EventAvailableIcon sx={{ color: ['#eff0f4'] }} />
                      </Grid>
                      <Grid item>
                        <p>
                          {new Date(visit.date.seconds * 1000 + visit.date.nanoseconds / 1000000).toLocaleDateString(
                            undefined,
                          )}
                        </p>
                      </Grid>
                    </Grid>
                    <Grid container direction="row" spacing={2} justifyContent="space-between" alignItems="center">
                      <Grid item>
                        <p>
                          {new Date(visit.hour.seconds * 1000 + visit.hour.nanoseconds / 1000000).toLocaleTimeString(
                            'en-US',
                            { hour: '2-digit', minute: '2-digit' },
                          )}
                        </p>
                      </Grid>
                      <Grid item>
                        <p>
                          {visit.pet} | dr {visit.doctor}
                        </p>
                      </Grid>
                      <Grid item>
                        <CustomButton text="CANCEL" color="secondary" clickAction={() => deleteVisit(visit.key)} />
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })
            ) : (
              <h1>no visits yet :(</h1>
            )}
            <Grid container justifyContent="center">
              <Link to={paths.addVisit} style={{ textDecoration: 'none' }}>
                <CustomButton text="ADD NEW VISIT" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};
