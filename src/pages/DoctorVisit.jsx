import React, { useState, useEffect } from 'react';

import { Typography, Grid, Dialog, DialogContent, DialogActions, TextField } from '@mui/material';
import { Layout, VisitDescription, CustomButton } from '../components';
import { db } from '../config/firebase';
import { collectionGroup, query, where, getDocs } from 'firebase/firestore';

export const DoctorVisit = () => {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [updateDescription, setUpdateDescription] = useState('');
  const [toUpdateId, setToUpdateId] = useState('');
  const [owner, setOwner] = useState([]);

  //   useEffect(() => {
  //     const usersCollection = db.collection('users');
  //     const visitsCollection = db.collection('visits');

  //     const usersData = {};
  //     let visitsTable = [];

  //     visitsCollection.onSnapshot((querySnapshot) => {
  //       console.log('query', querySnapshot);
  //       querySnapshot.forEach((doc) => {
  //         console.log('doc', doc);
  //         let uni = {
  //           id: doc.id,
  //           pet: doc.data().pet,
  //           date: doc.data().date,
  //           description: doc.data().description,
  //           uid: doc.data().uid,
  //         };
  //         if (uni.uid) {
  //           // console.log('uni uid', uni.uid);
  //           // usersCollection.where('uid', '==', uni.uid).onSnapshot((uidDoc) => {
  //           //   console.log("przed pętlą", uidDoc);
  //           //   uidDoc.docs.forEach((doc2) => {
  //           //     console.log('uid w users', doc2);
  //           //     uni.uid = {
  //           //       lastname: doc2.data().lastName,
  //           //     };
  //           //   });
  //           // });
  //           // visitsTable.push(uni);

  //         }
  //         visitsTable.push(uni);
  //           console.log("visits table", visitsTable);
  //         setVisits(visitsTable);
  //       });
  // console.log('tabela visits table', visits);
  // });

  //     return () => setLoading(false);
  //   }, [loading]);

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

      // const some_uid = 'gJ4QKpCrAGf3ckMuXfcRHooRFlv2';
      // const userName = db
      //   .collection('users')
      //   .where('uid', '==', some_uid)
      //   .onSnapshot((snapshot) => {
      //     setOwner(
      //       snapshot.docs.map((doc) => {
      //         console.log('docName', doc.lastName);
      //         return {

      //           name: doc.data().lastName,
      //         };
      //       }),
      //     );
      //     console.log("owner", owner);
      //   });

      // console.log('userName', userName);

      // setLoading(false);
      // console.log('visits 2', visits);
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
            <Grid item xs={12} sm={12} md={6} key={visit.id}>
              <VisitDescription
                time={new Date(visit.date.seconds * 1000 + visit.date.nanoseconds / 1000000).toLocaleDateString()}
                pet={visit.pet}
                owner={visit.uid}
                description={visit.description}
              />
              <Grid item md={4} xs={12}>
                <Grid container direction="column" sx={{ minWidth: '160px' }} alignItems="center">
                  <Grid item p={2}>
                    {/* <DescriptionModal  /> */}
                    <CustomButton
                      edge="end"
                      text="Descripton"
                      clickAction={() => {
                        openDescriptionDialog(visit);
                      }}
                    ></CustomButton>
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
          );
        })
      ) : (
        <h1>no visits yet :(</h1>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            label="Description"
            type="text"
            fullWidth
            value={updateDescription}
            onChange={(event) => setUpdateDescription(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <CustomButton clickAction={handleClose} color="secondary" text="CLOSE" />
          <CustomButton clickAction={editDescription} color="primary" text="SAVE" />
        </DialogActions>
      </Dialog>
    </Layout>
  );
};
