import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Grid, Typography } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import isSameDay from 'date-fns/isSameDay';

import { Layout, DatePicker, CustomButton, Loading } from '../components';
import { paths } from '../config/paths';
import { db, auth } from '../config/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

export const UserMyVisits = () => {
  const [loading, setLoading] = useState(true);
  const [visits, setVisits] = useState([]);
  const [visitsDates, setVisitsDates] = useState([]);
  const [arrayOfVisits, setArrayOfVisits] = useState([]);
  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    setUserId(auth.currentUser.auth.lastNotifiedUid);
  }, []);

  useEffect(() => {
    db.collection('visits').onSnapshot((querySnapshot) => {
      const getVisitsFromFirebase = [];
      querySnapshot.forEach((doc) => {
        getVisitsFromFirebase.push({
          ...doc.data(),

          key: doc.id,
        });
      });
      const visitsArray = [];
      getVisitsFromFirebase.forEach((visit) => {
        if (visit.uid === userId) {
          visitsArray.push(visit);
        }
      });
      setVisits(visitsArray);
      setLoading(false);
    });
  }, [loading, userId]);

  useEffect(() => {
    const dates = [];
    visits.forEach((visit) => {
      dates.push(new Date(visit.date.seconds * 1000 + visit.date.nanoseconds / 1000000));
      return dates;
    });
    setVisitsDates(dates);
  }, [visits]);

  useEffect(() => {
    const info = visitsDates.find((e) => isSameDay(date, e));
    setSelected([info]);
  }, [date, visitsDates]);

  useEffect(() => {
    const visitsRenderArray = [];
    visits.forEach((el) => {
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
            return visitsRenderArray;
          }
        }
      });
    });
    setArrayOfVisits(visitsRenderArray);
  }, [visits, selected]);

  const deleteVisit = (key) => {
    deleteDoc(doc(db, 'visits', `${key}`));
  };

  return (
    <Layout showSideBar>
      <Typography paragraph marginLeft="4%" marginTop="20px" variant="h4" color="#16bac6">
        My Visits
      </Typography>
      {loading ? (
        <Loading />
      ) : (
        <Grid
          container
          spacing={12}
          direction="row"
          justifyContent="center"
          alignItems="space-around"
          paddingTop="32px"
        >
          <Grid item>
            <DatePicker
              sx={{ height: '150px' }}
              visits={visitsDates}
              onChange={(newDate) => setDate(newDate)}
              selected={selected}
              date={date}
            />
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              style={{ minWidth: '100%', minHeight: '100%' }}
              justifyContent="space-evenly"
              paddingBottom="80px"
              alignItems="center"
            >
              {arrayOfVisits.length > 0 ? (
                arrayOfVisits.map((visit) => {
                  return (
                    <Grid container key={visit.key} style={{ minWidth: '100%' }}>
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
                      <Grid
                        container
                        direction="row"
                        spacing={2}
                        justifyContent="space-between"
                        alignItems="center"
                        wrap="nowrap"
                      >
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
                          <CustomButton
                            text="CANCEL"
                            color="secondary"
                            size="small"
                            clickAction={() => deleteVisit(visit.key)}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })
              ) : (
                <Grid container justifyContent="center" style={{ minWidth: '100%' }}>
                  <Grid item xs={12} md={8} style={{ minWidth: '100%' }}>
                    <Typography
                      variant="h4"
                      color="#16bac6"
                      sx={{ mb: { xs: '70px', md: '0' } }}
                      justifyContent="centre"
                      align="center"
                    >
                      Today you don't have any visits.
                    </Typography>
                  </Grid>
                </Grid>
              )}
              <Grid container justifyContent="center" style={{ minWidth: '100%' }} paddingTop="30px">
                <Link to={paths.addVisit} style={{ textDecoration: 'none' }}>
                  <CustomButton text="ADD NEW VISIT" size="medium" />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
};
