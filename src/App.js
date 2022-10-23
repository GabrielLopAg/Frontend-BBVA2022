import './styles/styleGrid.css';
import AppNav from './components/AppNav';
import ComplexGrid from './components/main'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import DataTable from './components/table';
import { withAuthenticator } from '@aws-amplify/ui-react'


function App() {


  return (
    <>
      <Box className='container' id='inicio'>
        <Grid className='item item1'>
          <AppNav />
        </Grid>
        <Grid className='item item2'>
          <ComplexGrid />
        </Grid>
        <Grid className='item item3'>
          <IconButton className='progress' href='#item4'>
            <ArrowDownwardIcon />
          </IconButton>
        </Grid>
        <Grid className='item4' id='item4'>
          <DataTable />
        </Grid>
      </Box>

      
    </>
  );
}

export default withAuthenticator(App);