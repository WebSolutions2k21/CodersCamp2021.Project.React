import { useState } from 'react';
import { Box, Button, Typography, Modal, TextField } from '@mui/material/';

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

export const DescriptionModal = ({ value, setValue }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(value);

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
          <TextField
            style={{ width: '100%' }}
            id="modal-modal-description"
            sx={{ mt: 2, mb: 3 }}
            multiline
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></TextField>

          <Button
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
