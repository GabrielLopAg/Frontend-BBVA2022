import './styles/styleGrid.css';
import AppNav from './components/AppNav';
import ComplexGrid from './components/main'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
function App() {
  return (
    <Box className='container'>
    <Grid className='item item1'>
    <AppNav/>
    </Grid>
    <Grid className='item item2'>
    <ComplexGrid/>
    </Grid>
    </Box>
  );
}

export default App;
