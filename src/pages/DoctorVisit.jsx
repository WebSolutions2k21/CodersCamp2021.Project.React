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
  Slide,
} from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import isSameDay from 'date-fns/isSameDay';

import { db } from '../config/firebase';

import { Layout, VisitDescription, CustomButton, DatePicker } from '../components';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
  const [clicked, setClicked] = useState(false);
  const [visitId, setVisitId] = useState([]);

  useEffect(() => {
    db.collection('visits').onSnapshot((snapshot) => {
      setVisits(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            pet: doc.data().pet,
            breed: doc.data().breed,
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
    const dates = [];
    visits.forEach((visit) => {
      dates.push(new Date(visit.date.seconds * 1000 + visit.date.nanoseconds / 1000000));
      return dates;
    });
    setVisitsDates(dates);
  }, [visits]);

  useEffect(() => {
    const info = visitsDates.find((e) => isSameDay(date, e));
    setClicked(false);
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

  const updateDescriptionPopUp = (event) => {
    setUpdateDescription(event.target.value);
    setClicked(true);
  };
  const handleClose = () => {
    setOpen(false);
    setClicked(true);
  };

  const showVisit = (visit) => {
    setClicked(true);
    setVisitId(visit);
  };

  const cancelVisit = (visit) => {
    db.collection('visits').doc(visit.id).delete();
  };
  return (
    <Layout showSideBar>
      <Typography paragraph marginLeft="4%" marginTop="20px" variant="h4" color="#16bac6">
        Doctor Visits
      </Typography>
      <Grid item>
        <Grid container direction="row" justifyContent="space-around" alignItems="space-around">
          <Grid item>
            <DatePicker
              sx={{ height: '150px' }}
              visits={visitsDates}
              onChange={(newDate) => setDate(newDate)}
              selected={selected}
              date={date}
            />
          </Grid>
          <Grid item sx={{ pb: { xs: '75px', mb: '0' } }}>
            <Grid container direction="column" style={{ width: '100%' }} justifyContent="space-between">
              {arrayOfVisits.length > 0 ? (
                arrayOfVisits.map((visit) => {
                  return (
                    <Grid container key={visit.id}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <EventAvailableIcon sx={{ color: ['#eff0f4'] }} />
                        </Grid>
                        <Grid item>
                          <Box>
                            {new Date(visit.date.seconds * 1000 + visit.date.nanoseconds / 1000000).toLocaleDateString(
                              undefined,
                            )}
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Link onClick={() => showVisit(visit)} style={{ textDecoration: 'none' }}>
                          <Grid item>
                            <Button
                              sx={{
                                mb: '10px',
                                ':hover': {
                                  color: '#16bac6',
                                },
                              }}
                            >
                              <Grid container>
                                <Grid item sx={{ pr: '70px' }}>
                                  {new Date(
                                    visit.hour.seconds * 1000 + visit.hour.nanoseconds / 1000000,
                                  ).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}{' '}
                                </Grid>
                                <Grid item>
                                  {visit.userName} | {visit.pet}
                                </Grid>
                              </Grid>
                            </Button>
                          </Grid>
                        </Link>
                      </Grid>
                    </Grid>
                  );
                })
              ) : (
                <Grid container justifyContent="center">
                  <Grid item xs={12} md={8}>
                    <Typography marginLeft="4%" variant="h4" color="#16bac6" justifyContent="centre">
                      Today you don't have any visits.
                    </Typography>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
          {clicked ? (
            <Box key={visitId.id}>
              <Grid container direction="row">
                <Grid item pt={1} xs={12} md={8}>
                  <VisitDescription
                    time={new Date(
                      visitId.date.seconds * 1000 + visitId.date.nanoseconds / 1000000,
                    ).toLocaleDateString()}
                    pet={visitId.pet}
                    owner={visitId.userName}
                    breed={visitId.breed}
                    description={visitId.description}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Grid
                    container
                    direction="column"
                    sx={{ mb: { xs: '70px', md: '0px' } }}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item p={1}>
                      <Button
                        style={{
                          color: '#ffffff',
                          width: '170px',
                          backgroundColor: '#fdc161',
                          padding: '4px 10px',
                          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        }}
                        onClick={() => {
                          openDescriptionDialog(visitId);
                        }}
                      >
                        ADD DESCRIPTION
                      </Button>
                    </Grid>
                    <Grid item p={1}>
                      <CustomButton
                        color="secondary"
                        size="small"
                        text="CANCEL VISIT"
                        clickAction={() => {
                          cancelVisit(visitId);
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          ) : (
            ''
          )}
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
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
              onChange={(event) => updateDescriptionPopUp(event)}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: '0 25px 25px' }}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <CustomButton size="small" clickAction={handleClose} color="secondary" text="CLOSE" />
            </Grid>
            <Grid item>
              <CustomButton size="small" clickAction={editDescription} color="primary" text="SAVE" />
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </Layout>
  );
};
