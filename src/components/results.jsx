import React from 'react';

import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import { Typography } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

import './Results.css';



function UpperBar() {
    const nav = useNavigate();

    return(
        <div>
            <AppBar position="static" elevation={ 10 } enableColorOnDark>
                <Toolbar variant="regular">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={ () => nav( "/" ) }>
                        <ArrowBackIcon/>
                    </IconButton>
                    
                    <Typography variant="h6" color="inherit" component="div">
                        2 Week Plan
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}


const darkTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#011638',
      },
    },
  });

function Results( props ) {
    const nav = useNavigate();
    const location = useLocation();
    console.log( location.state )

    var amount = 0;
    var CanProceed = false

    if( !isNaN( location.state ) ) {
        if( location.state !== null && location.state !== "" ) {
            amount = location.state
            CanProceed = true
        } else {
            amount = "No number entered"
        }
    } else {
        var a = String( location.state );
        if( a.includes( "," ) ) {
            amount = "Please do not use commas"
        } else {
            amount = "Not a number"
        }

    }

    return (
        <ThemeProvider theme={ darkTheme }>
            <UpperBar/>

            <div className='container'>
                <Stack spacing={ 1 }>
                    <p className='text'>{ amount }</p>
                    { CanProceed ? <></> : <Button variant='contained' style={{ color: "black", backgroundColor: "#EEC643", fontFamily: "Roboto", margin: 0 }} startIcon={ <ArrowBackIcon/> } onClick={ () => nav( "/" ) }>Go back</Button> }
                </Stack>
            </div>
            
        </ThemeProvider>
    )
}

export default Results