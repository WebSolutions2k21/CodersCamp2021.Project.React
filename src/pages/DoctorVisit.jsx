import React, { useState, useEffect } from 'react';

import {
  Typography,
  Grid,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  DialogTitle,
  Box,
  Button,
  Link,
} from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import isSameDay from 'date-fns/isSameDay';

import { db } from '../config/firebase';

import { Layout, VisitDescription, CustomButton, DatePicker } from '../components';

export const DoctorVisit = () => {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [updateDescription, setUpdateDescription] = useState('');
  const [toUpdateId, setToUpdateId] = useState('');
  const [visitsDates, setVisitsDates] = useState([]);
  const [arrayOfVisits, setArrayOfVisits] = useState([]);
  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    db.collection('visits').onSnapshot((snapshot) => {
      setVisits(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            pet: doc.data().pet,
            date: doc.data().date,
            hour: doc.data().hour,
            description: doc.data().description,
            userName: doc.data().userName,
          };
        }),
      );
    });
    return () => setLoading(false);
  }, [loading]);

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
      
          visitsArray.push(visit);
      
      });
      setVisits(visitsArray);
      setLoading(false);
    });
  }, [loading]);

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

  const openDescriptionDialog = (visit) => {
    setOpen(true);
    setToUpdateId(visit.id);
    setUpdateDescription(visit.description);
  };

  const editDescription = () => {
    db.collection('visits').doc(toUpdateId).update({
      description: updateDescription,
    });
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showVisit = (visit) => {
    console.log('show visit', visit.id);
    return (
      <Box key={visit.id}>
        <h1>Visit {visit.id}</h1>
      </Box>
    );
  };
  return (
    <Layout showSideBar>
      <Typography paragraph marginLeft="4%" marginTop="20px" variant="h4" color="#16bac6">
        Doctor Visit
      </Typography>
      <Grid item>
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
              {arrayOfVisits.length > 0 ? (
                arrayOfVisits.map((visit) => {
                  return (
                    <Grid container key={visit.id}>
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
                      <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                        <Button onClick={() => showVisit(visit)}>
                          <Grid item>
                            <p>
                              {new Date(
                                visit.hour.seconds * 1000 + visit.hour.nanoseconds / 1000000,
                              ).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </Grid>
                          <Grid item>
                            <p>{visit.pet}</p>
                          </Grid>
                        </Button>
                      </Grid>
                    </Grid>
                  );
                })
              ) : (
                <h1>no visits yet :(</h1>
              )}
            </Grid>
          </Grid>
          {visits.length > 0 ? (
            visits.map((visit) => {
              return (
                <Box key={visit.id}>
                  <Grid container direction="row">
                    <Grid item>
                      <VisitDescription
                        time={new Date(
                          visit.date.seconds * 1000 + visit.date.nanoseconds / 1000000,
                        ).toLocaleDateString()}
                        pet={visit.pet}
                        owner={visit.userName}
                        description={visit.description}
                      />
                    </Grid>
                    <Grid item>
                      <Grid container direction="column" sx={{ minWidth: '160px' }} alignItems="center">
                        <Grid item p={2}>
                          <Button
                            style={{
                              color: '#ffffff',
                              width: '170px',
                              backgroundColor: '#fdc161',
                              padding: '4px 10px',
                              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                            }}
                            onClick={() => {
                              openDescriptionDialog(visit);
                            }}
                          >
                            ADD DESCRIPTION
                          </Button>
                        </Grid>
                        <Grid item p={2}>
                          <CustomButton color="primary" size="small" text="CLOSE VISIT" />
                        </Grid>
                        <Grid item p={2}>
                          <CustomButton color="secondary" size="small" text="CANCEL VISIT" />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              );
            })
          ) : (
            <h1>no visits yet :(</h1>
          )}
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ pt: '25px' }} id="alert-dialog-title">
          {'The visit description'}
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <TextField
              autoFocus
              margin="normal"
              multiline
              maxRows={4}
              type="text"
              fullWidth
              value={updateDescription}
              onChange={(event) => setUpdateDescription(event.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: '0 25px 25px' }}>
          <CustomButton clickAction={handleClose} color="secondary" text="CLOSE" />
          <CustomButton clickAction={editDescription} color="primary" text="SAVE" />
        </DialogActions>
      </Dialog>
    </Layout>
  );
};
