import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  height: 400,
  bgcolor: 'background.paper',
  borderRadius: 8,
  boxShadow: 24,
  p: 3,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, watch, handleSubmit } = useFormContext()

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="secondary">CARGAR CREDENCIALES</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(5px)',
            },
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div>
              <Typography sx={{ textAlign: 'center', fontSize: '1.5em', fontWeight: 'bold', fontFamily: 'Poppins', color: '#4c1d95' }}>
                Ingrese sus credenciales
              </Typography>
              <Typography sx={{ textAlign: 'center', fontFamily: 'Poppins' }}>
                Las credenciales son únicas por cada empresa de volquetes registrada.
              </Typography>
            </div>
            <div className='flex flex-col gap-5'>
              <TextField color='secondary' id="outlined-basic" label="Usuario" variant="outlined" {...register('username')} />
              <TextField color='secondary' id="outlined-basic" label="Contraseña" variant="outlined" {...register('password')} />
            </div>
            <div className='flex items-center'>
              <Checkbox color='secondary' />
              <Typography sx={{ fontFamily: 'Poppins' }}>
                Recordar credenciales
              </Typography>
            </div>
            <div className='flex justify-around'>
              <Button
                variant="contained"
                color='secondary'
                disabled={
                  !!watch('username') && !!watch('password') ? false : true
                }
                onClick={
                  handleSubmit((data) => {
                    console.log("se envia el formulario")
                    console.log(data)
                  }
                  )}>ENVIAR</Button>
              <Button variant="outlined" color='secondary' onClick={handleClose}>CERRAR MODAL</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}