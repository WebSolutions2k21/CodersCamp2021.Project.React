import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Modal, TextField } from '@mui/material/';

import { paths } from '../../config/paths';
import { db, auth } from '../../config/firebase';
import { doc, setDoc } from 'firebase/firestore';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '250px', sm: '400px', md: '600px', lg: '600px' },
  bgcolor: 'background.paper',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  p: 4,
};

export const DescriptionModal = () => {
  const [description, setDescription] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(description);

  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleSubmit = async (e) => {
    console.log('desc', description);
    // await setDoc(doc(db, 'visits').where('uid', '==', user.user.uid).get() {
    //   description: description,
    // })

    // .set({ title: "New title", body: "This is the new body" });
    // .update({
    //   description: description,
    // })
    //   .then(() => {
    //     navigate(paths.aboutUs, { replace: true });
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
    // const descriptionRef = doc(db, 'visits', user.uid);
    // setDoc(descriptionRef, { description: true }, { merge: true });
  };

  return (
    <div>
      <Button
        style={{
          color: '#ffffff',
          width: '170px',
          backgroundColor: '#fdc161',
          padding: '4px 10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        }}
        onClick={handleOpen}
      >
        ADD DESCRIPTION
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            The vistit description:
          </Typography>
          <form id="myform" onSubmit={handleSubmit}>
            <TextField
              style={{ width: '100%' }}
              id="modal-modal-description"
              sx={{ mt: 2, mb: 3 }}
              multiline
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></TextField>
          </form>
          <Button
            onSubmit={handleSubmit}
            onTouchTap={handleClose}
            type="submit" //set the buttom type is submit
            form="myform"
            style={{
              float: 'right',
              color: '#ffffff',
              backgroundColor: '#fdc161',
              padding: '4px 25px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            SAVE
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
