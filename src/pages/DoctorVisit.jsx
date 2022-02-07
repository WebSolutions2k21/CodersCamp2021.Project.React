import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';

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

import { Layout, VisitDescription, CustomButton, DatePicker } from '../components';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

export const DoctorVisit = () => {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [updateDescription, setUpdateDescription] = useState('');
  const [toUpdateId, setToUpdateId] = useState('');

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

  const visitsArray = [];

  visits.forEach((visit) => {
    visitsArray.push(visit);
  });

  const visitsDates = [];

  visitsArray.forEach((visit) => {
    visitsDates.push(new Date(visit.date.seconds * 1000 + visit.date.nanoseconds / 1000000).toLocaleDateString());
  });

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
            <DatePicker visits={visits} />
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              style={{ minHeight: '300px', width: '80%' }}
              justifyContent="space-between"
            >
              {visitsArray.length > 0 ? (
                visitsArray.map((visit) => {
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
                    time={new Date(visit.date.seconds * 1000 + visit.date.nanoseconds / 1000000).toLocaleDateString()}
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
