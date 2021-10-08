import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  minHeight: 'fit-content',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'black',
  border: '2px solid #000',
  color: 'white',
  borderRadius:'1px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ title, content, open, handleClose }) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <b><em>Token Minted to Address:</em></b> <br />
            {content.toAccount}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
          <b> <em> Storage MetaData Token URI:</em></b> <br />
            {content.url}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            {content.txStatus}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
