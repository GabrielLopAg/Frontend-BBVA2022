import * as React from 'react';
import '../styles/stylemain.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomizedInputBase from './upload';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material/styles';
import graficas from '../video/graficas.mp4';
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#1973b8'),
  backgroundColor: '#028484',
  '&:hover': {
    backgroundColor: '#028484',
  },
}));
export default function ComplexGrid() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  return (
    <div className='container2'>
      <Box className='text'>
        <Typography variant="h3" >
          Bienvenido a
        </Typography>
        <Typography variant="h2">
          PyMEScore
        </Typography>
      </Box>
      <Box className='text2'>
        <Typography variant="h6" >
          Nuestro sistema esta diseñado de tal forma que
          al subir un archivo nuestros algoritmos de inteligencia y webscraping
          recolectan informacion necesaria para procesar datos
        </Typography>
      </Box>
      <Box className='upload'>
        <CustomizedInputBase />
      </Box>
      <Button variant="outlined" startIcon={<DeleteIcon />} color="error" className='cancel' hecked={loading}
        onClick={() => setLoading(!loading)}>
        Cancel
      </Button>
      <LoadingButton
        onClick={handleClick}
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
        className='send'
      >
        Process
      </LoadingButton>
      <video autoPlay loop muted className='video'>
      <source src={graficas} type="video/mp4"/>
      </video>
    </div>
  );
}