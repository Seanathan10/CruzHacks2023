import './Results.css';

import React from 'react';

import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import { Typography } from '@mui/material';


import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function UpperBar() {
    const nav = useNavigate();

    return(
        <div>
            <AppBar color="transparent" sx={ { backdropFilter: 'blur( 15px )' } } elevation={ 10 } >
                <Toolbar variant="regular" position="sticky" >
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


function Results() {
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
    
    let Today = new Date();
    let EndDate = new Date( "03/24/2023" );


    let difference = EndDate.getTime() - Today.getTime();
    let diff_days = difference / (1000 * 3600 * 24);

    diff_days = diff_days.toFixed( 1 );

    var final = amount / diff_days
    final = final.toFixed( 2 )

    let dh_visits = Math.floor( final / 8.28 )
    let days_remaining = Math.floor( diff_days )

    let points_left = final - ( dh_visits * 8.28 )
    points_left = points_left.toFixed( 2 )



    var Sunday1 = "";
    var Monday1 = "";
    var Tuesday1 = "";
    var Wednesday1 = "";
    var Thursday1 = "";
    var Friday1 = "";
    var Saturday1 = "";

    var Sunday2 = "";
    var Monday2 = "";
    var Tuesday2 = "";
    var Wednesday2 = "";
    var Thursday2 = "";
    var Friday2 = "";
    var Saturday2 = "";
    
    
    function createData( name, sun, mon, tue, wed, thurs, fri, sat ) {
        return { name, sun, mon, tue, wed, thurs, fri, sat };
    }
    
    if( final > 23 && CanProceed ) {
        // café is possible
        Sunday1 = "Café";
        Sunday2 = "Dining Hall";

        Monday1 = "Café";
        Monday2 = "Dining Hall";

        Tuesday1 = "Café";
        Tuesday2 = "Dining Hall";

        Wednesday1 = "Café";
        Wednesday2 = "Dining Hall";

        Thursday1 = "Café";
        Thursday2 = "Dining Hall";

        Friday1 = "Café";
        Friday2 = "Dining Hall";

        Saturday1 = "Café";
        Saturday2 = "Dining Hall";

        console.log( 'here1' )
    }
    
    if( CanProceed && dh_visits >= 2 ) {
        Sunday1 = "Dining Hall";
        Sunday2 = "Dining Hall";

        Monday1 = "Dining Hall";
        Monday2 = "Dining Hall";

        Tuesday1 = "Dining Hall";
        Tuesday2 = "Dining Hall";

        Wednesday1 = "Dining Hall";
        Wednesday2 = "Dining Hall";

        Thursday1 = "Dining Hall";
        Thursday2 = "Dining Hall";

        Friday1 = "Dining Hall";
        Friday2 = "Dining Hall";

        Saturday1 = "Dining Hall";
        Saturday2 = "Dining Hall";

        console.log( "here2" )
    }
    
    if( dh_visits === 1 ) {
        Sunday1 = "Perk";
        Sunday2 = "Dining Hall";

        Monday1 = "Perk";
        Monday2 = "Dining Hall";

        Tuesday1 = "Perk";
        Tuesday2 = "Dining Hall";

        Wednesday1 = "Perk";
        Wednesday2 = "Dining Hall";

        Thursday1 = "Perk";
        Thursday2 = "Dining Hall";

        Friday1 = "Perk";
        Friday2 = "Dining Hall";

        Saturday1 = "Perk";
        Saturday2 = "Dining Hall";

        console.log( "Here3" )
    }
    
    const rows = [
        createData( "Meal 1", Sunday1, Monday1, Tuesday1, Wednesday1, Thursday1, Friday1, Saturday1 ),
        createData( 'Meal 2', Sunday2, Monday2, Tuesday2, Wednesday2, Thursday2, Friday2, Saturday2 ),
    ];

    return (
        <>
        { CanProceed ? <>
        
            <UpperBar/>
            <div className='container'>
                <Stack spacing={ 0 }>
                    <div className='resultspagetable'>

                        <div className="TableDivision" >

                            <div className = "infobox">

                                You have ${ amount } slug points.
                                <br></br>
                                You have to spend ${ final } points per day.
                                <br></br>
                                You can visit the dining hall up to { dh_visits } times each day.
                                <br></br>
                                After the D.H., you'll still have to spend ${ points_left } that same day.
                                <br></br>
                                There are { days_remaining } days until the term ends.

                            </div>

                            <TableContainer component={Paper}>
                                <Table sx={ { minWidth: 850 } } aria-label="simple table" >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell align="left">Sunday</TableCell>
                                            <TableCell align="left">Monday</TableCell>
                                            <TableCell align="left">Tuesday</TableCell>
                                            <TableCell align="left">Wednesday</TableCell>
                                            <TableCell align="left">Thursday</TableCell>
                                            <TableCell align="left">Friday</TableCell>
                                            <TableCell align="left">Saturday</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    
                                    <TableBody>
                                        { rows.map( ( row ) => (
                                            <TableRow
                                                key={ row.name }
                                                sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
                                            >
                                                <TableCell component="th" scope="row">
                                                    { row.name }
                                                </TableCell>
                                                
                                                <TableCell align="left"> { row.sun } </TableCell>
                                                <TableCell align="left"> { row.mon } </TableCell>
                                                <TableCell align="left"> { row.tue } </TableCell>
                                                <TableCell align="left"> { row.wed } </TableCell>
                                                <TableCell align="left"> { row.thurs } </TableCell>
                                                <TableCell align="left"> { row.fri } </TableCell>
                                                <TableCell align="left"> { row.sat } </TableCell>
                                            
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </div>
                    </div>
                    
                </Stack>
            </div>
        
        </> : 
        
        <Button
            variant='contained'
            style={{ color: "black", backgroundColor: "#EEC643", fontFamily: "Roboto", margin: 0 }}
            startIcon={ <ArrowBackIcon/> }
            onClick={ () => nav( "/" ) } >Go back</Button> }


            
        </>
    )
}

export default Results

