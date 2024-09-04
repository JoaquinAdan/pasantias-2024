import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import SimpleAlert from './alert';

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
  const handleOpen = async () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false);

  const URL = 'http://testiis01.campana.gov.ar/Municipalidad.Campana.Api/api/Volquetes/Solicitud'

  async function registrarSolicitud(data) {

    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(response)

    return response.json()
  }

  const { register, watch, handleSubmit, formState: {errors} } = useFormContext()

  const { mutate, isError, data, isSuccess } = useMutation({
    mutationFn: registrarSolicitud,
    onSuccess: console.log("Funciona, se envía el formulario"),
    onError: (error) => {
      console.error('Error en el registro de credenciales: ', error);
      throw error;
    }
  })

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="secondary" >CARGAR CREDENCIALES</Button>
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
              <TextField color='secondary' id="outlined-basic" label="Usuario" variant="outlined" {...register('EmpresaUsuario')} />
              <TextField color='secondary' id="outlined-basic" label="Contraseña" variant="outlined" {...register('EmpresaCodigo')} />
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
                  !!watch('EmpresaUsuario') && !!watch('EmpresaCodigo') ? false : true
                }
                onClick={
                  handleSubmit((data) => {
                    console.log("Envío data")
                    console.log(data)
                    mutate(data)
                  }
                  )}>ENVIAR</Button>
              <Button variant="outlined" color='secondary' onClick={handleClose}>CERRAR MODAL</Button>
              {/* {isError && <p>ERROR:</p>} */}
              {isSuccess && <p>{data.message}</p>}
              <SimpleAlert />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}