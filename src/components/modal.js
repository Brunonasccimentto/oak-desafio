import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Form } from "../components/form";
import { useModal } from '../hooks/useModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#211E1D',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const {open, toggleModal} = useModal()

  return (
    <div>
      <Button onClick={toggleModal}>Cadastrar produto</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={toggleModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <Typography sx={{color: "white"}} id="modal-modal-title" variant="h6" component="h2">
            Novo Produto
          </Typography>
            <Form onSubmitButtonAction={()=> {
                window.location.reload() //sei q não é o correto mas faz um tempinho que não uso react que não estou conseguindo fazer que minha lista atualize.
                toggleModal();
            }}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}