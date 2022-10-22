import './App.css';
import AppNav from './components/AppNav';
import ComplexGrid from './components/main'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
function App() {
  return (
    <Grid spacing={50} columns={16}>
    <Grid item xs={8}>
    <AppNav/>
    </Grid>
    <Grid  item xs={8} >
    <ComplexGrid/>
    </Grid>
    </Grid>
  );
}

export default App;
