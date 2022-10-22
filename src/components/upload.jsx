import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 422, borderRadius: '2rem' }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <CloudUploadIcon/>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Link del archivo"
        inputProps={{ 'aria-label': 'Link' }}
      />
    </Paper>
  );
}