import * as React from 'react';
import Imagen from "../img/score.png";
import '../styles/stylemain.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomizedInputBase from './upload';
export default function ComplexGrid() {
  return (
    <div className='container2'>
      <Box className='text'>
        <Typography variant="h3" >
          <p>Bienvenido a</p>
        </Typography>
        <Typography variant="h2">
          PyMEScore
        </Typography>
      </Box>
      <Box className='upload'>
        <CustomizedInputBase/>
      </Box>
    </div>
  );
}