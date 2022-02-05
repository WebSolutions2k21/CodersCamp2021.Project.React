import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collectionGroup, query, where, getDocs } from 'firebase/firestore';

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
} from '@mui/material';

import { Layout, VisitDescription, CustomButton } from '../components';


export const DoctorVisit = () => {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [updateDescription, setUpdateDescription] = useState('');
  const [toUpdateId, setToUpdateId] = useState('');
  const [owner, setOwner] = useState([]);

  useEffect(() => {
    db.collection('visits').onSnapshot((snapshot) => {
      setVisits(
        snapshot.docs.map((doc) => {
          console.log('owner visit.iud', doc.data().uid);

          const userName = db
            .collection('users')
            .where('uid', '==', doc.data().uid)
            .onSnapshot((snapshot) => {
              setOwner(
                snapshot.docs.map((doc1) => {
                  console.log('docName', doc1.data().lastName);
                  return {
                    firstName: doc1.data().firstName,
                    lastname: doc1.data().lastName,
                  };
                }),
              );
              console.log('owner', owner.name);
            });

          return {
            id: doc.id,
            pet: doc.data().pet,
            date: doc.data().date,
            description: doc.data().description,
            uid: doc.data().uid,
          };
        }),
      );
    });
  }, [loading]);

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

  return (
    <Layout showSideBar>
      <Typography paragraph>Doctor Visit</Typography>
      {visits.length > 0 ? (
        visits.map((visit) => {
          return (
            <Box key={visit.id}>
              <Grid container direction="row">
                <Grid item>
                  <VisitDescription
                    time={new Date(visit.date.seconds * 1000 + visit.date.nanoseconds / 1000000).toLocaleDateString()}
                    pet={visit.pet}
                    owner={visit.uid}
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
