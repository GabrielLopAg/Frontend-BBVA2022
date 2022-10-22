import React, {Component} from "react";
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';


const styleBar = {
    background: '#072146',
}
const bttn = {
    background: '#028484',
    
}
export default class AppNav extends Component{
    render(){
        return(
            <Grid container spacing={2}>
            
                <AppBar position="fixed" style={styleBar}>
                    <Toolbar>
                    <Grid item>
                        <Typography variant="h6" sx={{float: "left"}}>
                            <p>PyMEScore</p>
                        </Typography> 
                    </Grid>
                    <Grid item xs={12} sm container></Grid>
                        <Button variant="contained" style={bttn} href= '#inicio'>Main</Button>
                    </Toolbar>
                </AppBar>
            </Grid>
        );
    }
}