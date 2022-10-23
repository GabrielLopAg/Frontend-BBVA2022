import * as React from 'react';
import '../styles/stylemain.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomizedInputBase from './upload';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import graficas from '../video/graficas.mp4';
import PublishIcon from '@mui/icons-material/Publish';
import { Storage } from "aws-amplify";
import { useState } from "react";
export default function ComplexGrid() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  const [fileData, setFileData] = useState();
  const [fileStatus, setFileStatus] = useState(false);

  const uploadFile = async () => {
    const result = await Storage.put(fileData.name, fileData, {
      contentType: fileData.type,
    });
    setFileStatus(true);
    console.log(21, result);
  };

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
      <input type="file" onChange={(e) => setFileData(e.target.files[0])} />
      {fileStatus ? "Archivo cargado correctamente" : ""}

      </Box>
      <Button variant="disabled" startIcon={<PublishIcon />} color="error" className='cancel' hecked={fileStatus}
       onClick={uploadFile}>{fileStatus ? "Archivo cargado correctamente" : ""}
      </Button>
      <LoadingButton
        onClick={uploadFile}
        endIcon={<SendIcon />}
        variant="contained"
        className='send'
      >
        Cargar archivo
      </LoadingButton>
      <video autoPlay loop muted className='video'>
      <source src={graficas} type="video/mp4"/>
      </video>
      
    </div>
    
  );
}