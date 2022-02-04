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

  useEffect(() => {
    db.collection('visits').onSnapshot((snapshot) => {
      setVisits(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            pet: doc.data().pet,
            date: doc.data().date,
            description: doc.data().description,
            uid: doc.data().uid,
          };
        }),
      );

      // const museums = query(collectionGroup(db, 'landmarks'), where('type', '==', 'museum'));
      // const querySnapshot = await getDocs(museums);
      // querySnapshot.forEach((doc) => {
      //     console.log(doc.id, ' => ', doc.data());
      // });

    //   tableOne.on('value', function (snapshot) {
    //     var userId = snapshot.val().userId; // line 1 (results like 1,2,3,4,5,6)
    //     anotherTable.child('userdetails').child(userId).once('value', function(mediaSnap) {
    //         console.log(userId + ":" + mediaSnap.val().name);
    //     });
    // });

      // const userName = db.collection('users').where("uid", '==', some_uid).get();
 
      // console.log('userName', userName);

      setLoading(false);
      console.log('visits 2', visits);
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
                        console.log('visit', visit.id);
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
